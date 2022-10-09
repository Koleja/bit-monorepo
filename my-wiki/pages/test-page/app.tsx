import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function TestPageApp() {
  return (
    <>
      {/* header component */}
      <Routes>
        <Route path="/" element={<div>Niach!!</div>}>
          {/* home page component */}
        </Route>

        <Route path="/about">{/* about page component */}</Route>
      </Routes>
      {/* footer component */}
    </>
  );
}
