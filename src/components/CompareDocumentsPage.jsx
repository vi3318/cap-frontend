import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Stack, LinearProgress } from '@mui/material';

export default function CompareDocumentsPage() {
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onCompare = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('https://web-production-d301.up.railway.app/compare-documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ left_text: left, right_text: right }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card sx={{ m: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Compare Documents</Typography>
        <Stack spacing={2}>
          <TextField multiline minRows={6} label="Left Document Text" value={left} onChange={(e) => setLeft(e.target.value)} />
          <TextField multiline minRows={6} label="Right Document Text" value={right} onChange={(e) => setRight(e.target.value)} />
          <Button variant="contained" onClick={onCompare} disabled={loading}>Compare</Button>
          {loading && <LinearProgress />}
          {result && (
            <>
              <Typography variant="subtitle1">Overlap ratio: {(result.overlap_ratio * 100).toFixed(2)}%</Typography>
              <Typography variant="subtitle2">Missing in Right (sample): {result.missing_in_right?.slice(0, 30).join(', ')}</Typography>
              <Typography variant="subtitle2">Missing in Left (sample): {result.missing_in_left?.slice(0, 30).join(', ')}</Typography>
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

