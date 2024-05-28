import { RegisterForm } from '@/components/form-create-account'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='flex flex-col items-center justify-between pt-[50px]'>
      <RegisterForm />
    </div>
  )
}
