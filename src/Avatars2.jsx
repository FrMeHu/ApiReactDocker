import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Stack direction="row" spacing={2}>
      <Avatar 
        alt="Lusuario2" 
        src="/static/images/avatar/2.jpg" 
        sx={{ width: '18rem', height: '30vh' }}
      />
    </Stack>
    </div>
  );
}
