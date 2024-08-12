import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa #5642</td>
              <td>30 minutos</td>
              <td>Há uma hora</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa #5641</td>
              <td>30 minutos</td>
              <td>Há 2 horas</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa #5641</td>
              <td>20 minutos</td>
              <td>Há 3 horas</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa #5641</td>
              <td>45 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>

            <tr>
              <td>Tarefa #5641</td>
              <td>35 minutos</td>
              <td>Há um dia</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
