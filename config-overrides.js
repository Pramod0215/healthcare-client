const { container } = require('webpack');

const { ModuleFederationPlugin } = container;

module.exports = function override(config) {
  if (process.env.ENABLE_MODULE_FEDERATION === 'true') {
    config.plugins.push(new ModuleFederationPlugin({
      name: 'careflowHost',
      filename: 'remoteEntry.js',
      remotes: {
        patientMfe: process.env.REACT_APP_PATIENT_MFE_URL || 'patientMfe@http://localhost:3001/remoteEntry.js',
        appointmentMfe: process.env.REACT_APP_APPOINTMENT_MFE_URL || 'appointmentMfe@http://localhost:3002/remoteEntry.js',
        prescriptionMfe: process.env.REACT_APP_PRESCRIPTION_MFE_URL || 'prescriptionMfe@http://localhost:3003/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
    }));
  }
  return config;
};