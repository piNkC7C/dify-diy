'use client'
import { useEffect } from 'react'
import { useModalContext } from '@/context/modal-context'
import Loading from '@/app/components/base/loading'

const SettingsPage = () => {
  const { setShowAccountSettingModal } = useModalContext()

  useEffect(() => {
    // 验证标签页参数是否有效
    // const validTabs = ['provider', 'members', 'billing', 'data-source', 'api-based-extension', 'language', 'custom']
    
    // 自动打开设置弹窗并显示指定的标签页
    setShowAccountSettingModal({ 
      payload: 'provider'
    })
  }, [setShowAccountSettingModal])

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Loading />
    </div>
  )
}

export default SettingsPage 