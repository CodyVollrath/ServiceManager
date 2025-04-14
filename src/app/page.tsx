'use client'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-slate-800 text-white flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20">
        <motion.img
          src="/images/logo.png"
          alt="ServiceBucket"
          className="w-100 h-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.p
          className="max-w-xl text-lg text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          One bucket to manage all your external dependencies. Secure, centralized, and scalable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button size="lg" className="bg-green-500 hover:bg-green-400 text-black">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="bg-slate-900 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Why ServiceBucket?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Unified Management',
              desc: 'Track, update, and monitor all your third-party services in one place.',
            },
            {
              title: 'Security First',
              desc: 'Encrypted API key storage, access control, and audit logging built-in.',
            },
            {
              title: 'Automated Alerts',
              desc: 'Get notified when external services are down, outdated, or breached.',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <CheckCircle className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <footer className="py-12 text-center bg-slate-800">
        <p className="text-lg mb-4">Ready to simplify your service chaos?</p>
        <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-black">
          Try ServiceBucket Free
        </Button>
      </footer>
    </div>
  );
}
