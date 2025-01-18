import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState
} from 'react'
import {
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction
} from '../reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CycleContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
  handleToggleThemeContext: () => void
}

export const CyclesContext = createContext({} as CycleContextType)

interface CyclesContextProviderProps {
  handleToggleTheme(): void
  children: ReactNode
}

export function CyclesContextProvider({
  handleToggleTheme,
  children
}: CyclesContextProviderProps) {
  const [cyclesState, dispatchCyclesState] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null
    },
    (initialState) => {
      const storedCyclesStateAsJson = localStorage.getItem(
        '@g-timer:cycles-state-1.0.0'
      )

      if (storedCyclesStateAsJson) {
        return JSON.parse(storedCyclesStateAsJson)
      }

      return initialState
    }
  )

  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

  useEffect(() => {
    const cyclesStateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@g-timer:cycles-state-1.0.0', cyclesStateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatchCyclesState(markCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: CreateCycleData) {
    const idByGetTime = String(new Date().getTime())

    const newCycle: Cycle = {
      id: idByGetTime,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    dispatchCyclesState(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatchCyclesState(interruptCurrentCycleAction())
  }

  function handleToggleThemeContext() {
    handleToggleTheme()
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
        handleToggleThemeContext
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
