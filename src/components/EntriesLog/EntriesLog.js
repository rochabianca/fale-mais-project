import React, { Component } from "react";
import { FirestoreProvider, FirestoreCollection } from "react-firestore";
import firebase from "../../utils/firebaseUtils";

class EntriesLog extends Component {
  render() {
    return (
      <FirestoreProvider firebase={firebase}>
        <FirestoreCollection
          path="entries"
          sort="created_at:desc"
          render={({ isLoading, data }) => {
            return isLoading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <h1>Entries</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Data/Hora</th>
                      <th>Origem</th>
                      <th>Destino</th>
                      <th>Tempo</th>
                      <th>Plano FaleMais</th>
                      <th>Com FaleMais</th>
                      <th>Sem FaleMais</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(entry => (
                      <tr key={entry.id}>
                        <td>{entry.created_at}</td>
                        <td>{entry.origin}</td>
                        <td>{entry.destination}</td>
                        <td>{entry.minutes}</td>
                        <td>{entry.plain}</td>
                        <td>{entry.faleMaisTax}</td>
                        <td>{entry.fixedTax}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }}
        />
      </FirestoreProvider>
    );
  }
}

export default EntriesLog;
