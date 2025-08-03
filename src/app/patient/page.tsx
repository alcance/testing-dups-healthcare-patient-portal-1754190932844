'use client';
import Link from 'next/link';
import { HealthcareChatbot } from '@/components/HealthcareChatbot'

export default function PatientPortal() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Patient Portal</h1>
          <p className="text-blue-700">Welcome back! Access your medical information and manage your healthcare.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">My Appointments</h2>
            <p className="text-gray-600 mb-4">View and manage your upcoming appointments</p>
            <Link 
              href="/patient/appointments"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Appointments
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Medical Records</h2>
            <p className="text-gray-600 mb-4">Access your medical history and test results</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Records
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Prescriptions</h2>
            <p className="text-gray-600 mb-4">Manage your medications and refill requests</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Prescriptions
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Test Results</h2>
            <p className="text-gray-600 mb-4">View your latest lab and diagnostic results</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Results
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Schedule Appointment</h2>
            <p className="text-gray-600 mb-4">Book a new appointment with your provider</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Schedule Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Messages</h2>
            <p className="text-gray-600 mb-4">Communicate with your healthcare team</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              View Messages
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <HealthcareChatbot 
            placeholder="Ask about symptoms, medications, or general health questions..."
            systemPrompt="You are a healthcare assistant for patients."
          />
        </div>
      </div>
    </div>
  );
}