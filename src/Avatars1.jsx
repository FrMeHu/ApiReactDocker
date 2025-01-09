import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Stack direction="row" spacing={2}>
      <Avatar 
        alt="Usuario1" 
        src="/static/images/avatar/1.jpg" 
        sx={{ width: '18rem', height: '30vh' }}
      />
    </Stack>
    </div>
  );
}
