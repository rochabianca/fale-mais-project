import React, { Component } from 'react';
import { FirestoreProvider, FirestoreCollection } from 'react-firestore';
import firebase from '../../utils/firebaseUtils';
import './EntriesLog.min.css';

class EntriesLog extends Component {
  render() {
    return (
      <FirestoreProvider firebase={firebase} useTimestampsInSnapshots>
        <FirestoreCollection
          path='entries'
          sort='created_at:desc'
          render={({ isLoading, data }) => {
            return isLoading ? (
              <div>Loading...</div>
            ) : (
              <div className='EntriesLog'>
                <h1 className='EntriesLog__title'>Entries</h1>
                <table className='EntriesLog__table' cellSpacing='0'>
                  <thead>
                    <tr>
                      <th className='EntriesLog__table--left'>Data/Hora</th>
                      <th>Origem</th>
                      <th>Destino</th>
                      <th>Tempo (min)</th>
                      <th>Plano FaleMais</th>
                      <th className='EntriesLog__table--right'>Com FaleMais</th>
                      <th className='EntriesLog__table--right'>Sem FaleMais</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map(entry => (
                      <tr key={entry.id}>
                        <td className='EntriesLog__table--left'>
                          {entry.created_at}
                        </td>
                        <td>{entry.origin}</td>
                        <td>{entry.destination}</td>
                        <td>{entry.minutes}</td>
                        <td>{entry.plain}</td>
                        <td className='EntriesLog__table--right'>
                          {entry.faleMaisTax === ' - ' ? null : '$ '}{' '}
                          {entry.faleMaisTax}
                        </td>
                        <td className='EntriesLog__table--right'>
                          {entry.fixedTax === ' - ' ? null : '$ '}{' '}
                          {entry.fixedTax}
                        </td>
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
