import axios from 'axios';

const services = {
  auth: process.env.REACT_APP_AUTH_URL || 'http://localhost:4001',
  patients: process.env.REACT_APP_PATIENT_URL || 'http://localhost:4002',
  appointments: process.env.REACT_APP_APPOINTMENT_URL || 'http://localhost:4003',
  prescriptions: process.env.REACT_APP_PRESCRIPTION_URL || 'http://localhost:4004',
};

export const api = axios.create({ timeout: 8000 });
api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('careflow_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const request = (service, path, options) => api({ baseURL: services[service], url: path, ...options }).then((response) => response.data);

export const authApi = {
  login: (payload) => request('auth', '/api/v1/auth/login', { method: 'POST', data: payload }),
  register: (payload) => request('auth', '/api/v1/auth/register', { method: 'POST', data: payload }),
};

export const patientsApi = {
  list: () => request('patients', '/api/v1/patients', { method: 'GET' }),
  create: (data) => request('patients', '/api/v1/patients', { method: 'POST', data }),
  update: (id, data) => request('patients', `/api/v1/patients/${id}`, { method: 'PATCH', data }),
  remove: (id) => request('patients', `/api/v1/patients/${id}`, { method: 'DELETE' }),
};

export const appointmentsApi = {
  list: () => request('appointments', '/api/v1/appointments', { method: 'GET' }),
  create: (data) => request('appointments', '/api/v1/appointments', { method: 'POST', data }),
  update: (id, data) => request('appointments', `/api/v1/appointments/${id}`, { method: 'PATCH', data }),
  cancel: (id) => request('appointments', `/api/v1/appointments/${id}/cancel`, { method: 'PATCH' }),
};

export const prescriptionsApi = {
  list: () => request('prescriptions', '/api/v1/prescriptions', { method: 'GET' }),
  create: (data) => request('prescriptions', '/api/v1/prescriptions', { method: 'POST', data }),
  complete: (id) => request('prescriptions', `/api/v1/prescriptions/${id}/complete`, { method: 'PATCH' }),
};

export const demoData = {
  patients: [{ _id: 'p-1', name: 'Alex Morgan', email: 'alex@example.com', phone: '(555) 014-0202', dateOfBirth: '1990-04-18', medicalNotes: 'No known allergies.' }],
  appointments: [{ _id: 'a-1', patientId: 'p-1', doctorId: 'dr-patel', startsAt: '2026-09-18T10:30:00.000Z', endsAt: '2026-09-18T11:15:00.000Z', reason: 'Annual wellness check', status: 'scheduled' }],
  prescriptions: [{ _id: 'rx-1', patientId: 'p-1', doctorId: 'dr-patel', diagnosis: 'Vitamin deficiency', medicines: [{ name: 'Vitamin D3', dosage: '1000 IU', frequency: 'Daily', duration: '90 days' }], status: 'active' }],
};
