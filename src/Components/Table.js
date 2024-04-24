import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'teamUser', headerName: 'teamUser', width: 130 },
  

 
];


const rows = [
    
  { id: 1,teamUser: 'Jon'},
  { id: 2, teamUser : 'Cersei'},
  { id: 3,teamUser: 'Jaime'  },
  { id: 4,teamUser: 'Arya'  },
  { id: 5, teamUser: 'Daenerys',},
  { id: 6, teamUser: 'Folyd Miles'},
  { id: 7,  teamUser: 'Ferrara'},
  { id: 8, teamUser: 'Rossini' },
  { id: 9, teamUser: 'Harvey' },
];

export default function DataTable() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <div className='eight'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5,10]}
      />
    </div>
    </div>
  );
}