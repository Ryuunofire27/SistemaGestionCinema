import React from 'react';
import { Link } from 'react-router-dom';
export const AdminEmployees = () => <div>
  <h2>Empleados</h2>
  <Link to="/admin/empleados/register">Registrar empleado</Link>
</div>;