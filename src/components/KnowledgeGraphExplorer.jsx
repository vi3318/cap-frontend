import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Stack, Chip } from '@mui/material';

export default function KnowledgeGraphExplorer() {
  const [query, setQuery] = useState('');
  const [graph, setGraph] = useState({ nodes: [], links: [] });

  const fetchStats = async () => {
    const res = await fetch('https://web-production-d301.up.railway.app/knowledge-graph/build', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
    const data = await res.json();
    if (data.nodes && data.links) setGraph(data);
  };

  const handleSearch = async () => {
    const res = await fetch('https://web-production-d301.up.railway.app/knowledge-graph/build', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ center_node_label: query, depth: 2 }) });
    const data = await res.json();
    setGraph(data);
  };

  useEffect(() => { fetchStats(); }, []);

  return (
    <Card sx={{ m: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Knowledge Graph Explorer</Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 2 }}>
          <TextField label="Center node label" value={query} onChange={(e) => setQuery(e.target.value)} fullWidth />
          <Button variant="contained" onClick={handleSearch}>Explore</Button>
        </Stack>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Nodes: {graph.nodes?.length || 0} | Links: {graph.links?.length || 0}</Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
          {graph.nodes?.slice(0, 30).map((n) => (
            <Chip key={n.id} label={`${n.type}: ${n.label}`} variant="outlined" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

