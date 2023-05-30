import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Calendar from './Calendar';
import DoitList from './DoitList';

function RouteView(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/doit-calendar" element={<Calendar />} />
      <Route path="/doit-list" element={<DoitList />} />
    </Routes>
  );
}

export default RouteView;
