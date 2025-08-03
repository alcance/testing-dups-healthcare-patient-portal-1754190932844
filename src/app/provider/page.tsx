'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProviderPortal() {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto p-8">
        {/* Navigation Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-3xl font-bold text-green-900 mb-4">Provider Portal</h1>
          <p className="text-green-700">Manage your patients and clinical workflow efficiently.</p>
        </div>
        
        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Patient Management</h2>
            <p className="text-gray-600 mb-4">View and manage your patient roster</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              Manage Patients
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Schedule</h2>
            <p className="text-gray-600 mb-4">View your appointments and availability</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              View Schedule
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Clinical Notes</h2>
            <p className="text-gray-600 mb-4">Access and update patient documentation</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              View Notes
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Prescriptions</h2>
            <p className="text-gray-600 mb-4">Write and manage prescriptions</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              Manage Prescriptions
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Medical Records</h2>
            <p className="text-gray-600 mb-4">Update patient medical records</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              Update Records
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Reports</h2>
            <p className="text-gray-600 mb-4">Generate clinical and administrative reports</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
              Generate Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}