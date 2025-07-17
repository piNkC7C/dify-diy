'use client'
import { useCallback } from 'react'
import Link from 'next/link'
import AccountDropdown from './account-dropdown'
import AppNav from './app-nav'
import DatasetNav from './dataset-nav'
import EnvNav from './env-nav'
import PluginsNav from './plugins-nav'
import ExploreNav from './explore-nav'
import ToolsNav from './tools-nav'
import { WorkspaceProvider } from '@/context/workspace-context'
import { useAppContext } from '@/context/app-context'
import DifyLogo from '@/app/components/base/logo/dify-logo'
import WorkplaceSelector from '@/app/components/header/account-dropdown/workplace-selector'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useProviderContext } from '@/context/provider-context'
import { useModalContext } from '@/context/modal-context'
import PlanBadge from './plan-badge'
import LicenseNav from './license-env'
import { Plan } from '../billing/type'
import { useGlobalPublicStore } from '@/context/global-public-context'
import { Button } from '../base/button'
import { useDocLink } from '@/context/i18n'
import {
  RiAccountCircleLine,
  RiArrowRightUpLine,
  RiBookOpenLine,
  RiGithubLine,
  RiGraduationCapFill,
  RiInformation2Line,
  RiLogoutBoxRLine,
  RiMap2Line,
  RiSettings3Line,
  RiStarLine,
  RiTShirt2Line,
} from '@remixicon/react'
import cn from '@/utils/classnames'
import { useTranslation } from 'react-i18next'

const navClassName = `
  flex items-center relative px-3 h-8 rounded-xl
  font-medium text-sm
  cursor-pointer
`

const Header = () => {
  const itemClassName = `
    flex items-center w-full h-8 pl-3 pr-2 text-text-secondary system-md-regular
    rounded-lg hover:bg-state-base-hover cursor-pointer gap-1
  `
  const { isCurrentWorkspaceEditor, isCurrentWorkspaceDatasetOperator } = useAppContext()
  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile
  const { enableBilling, plan } = useProviderContext()
  const { setShowPricingModal, setShowAccountSettingModal } = useModalContext()
  const systemFeatures = useGlobalPublicStore(s => s.systemFeatures)
  const isFreePlan = plan.type === Plan.sandbox
  const handlePlanClick = useCallback(() => {
    if (isFreePlan)
      setShowPricingModal()
    else
      setShowAccountSettingModal({ payload: 'billing' })
  }, [isFreePlan, setShowAccountSettingModal, setShowPricingModal])
  // 设置
  // 帮助文档
  const docLink = useDocLink()
  const { t } = useTranslation()

  if (isMobile) {
    return (
      <div className=''>
        <div className='flex items-center justify-between px-2'>
          {/* 头部左侧 */}
          {/* <div className='flex items-center'>
            <Link href="/apps" className='flex h-8 shrink-0 items-center justify-center px-0.5'>
              {systemFeatures.branding.enabled && systemFeatures.branding.workspace_logo
                ? <img
                  src={systemFeatures.branding.workspace_logo}
                  className='block h-[22px] w-auto object-contain'
                  alt='logo'
                />
                : <DifyLogo />}
            </Link>
            <div className='mx-1.5 shrink-0 font-light text-divider-deep'>/</div>
            <WorkspaceProvider>
              <WorkplaceSelector />
            </WorkspaceProvider>
            {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
          </div> */}
          {/* 返回上一级 */}
          <Button variant='tertiary' onClick={() => {
            window.history.back()
          }}>
            返回
          </Button>
          <div className='flex items-center'>
            <Button variant='tertiary' onClick={() => {
              setShowAccountSettingModal({ payload: 'members' })
            }}>
              设置
            </Button>
            {/* <Link
              className={cn(itemClassName, 'group justify-between',
                'data-[active]:bg-state-base-hover',
              )}
              href={docLink('/introduction')}
              target='_blank' rel='noopener noreferrer'>
              <RiBookOpenLine className='size-4 shrink-0 text-text-tertiary' />
              <div className='system-md-regular grow px-1 text-text-secondary'>{t('common.userProfile.helpCenter')}</div>
              <RiArrowRightUpLine className='size-[14px] shrink-0 text-text-tertiary' />
            </Link> */}
            <Button variant='tertiary' onClick={() => {
              window.open(docLink('/introduction'), '_blank')
            }}>
              帮助文档
            </Button>
            {/* <AccountDropdown /> */}
            {/* <div className='mr-2'>
              <PluginsNav />
            </div> */}
          </div>
        </div>
        {/* <div className='my-1 flex items-center justify-center space-x-1'>
          {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
          {!isCurrentWorkspaceDatasetOperator && <AppNav />}
          {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
          {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
        </div> */}
      </div>
    )
  }

  return (
    <div className='flex h-[60px] items-center'>
      {/* <div className='flex min-w-0 flex-[1]  items-center pl-3 pr-2 min-[1280px]:pr-3'>
        <Link href="/apps" className='flex h-8 shrink-0 items-center justify-center px-0.5'>
          {systemFeatures.branding.enabled && systemFeatures.branding.workspace_logo
            ? <img
              src={systemFeatures.branding.workspace_logo}
              className='block h-[22px] w-auto object-contain'
              alt='logo'
            />
            : <DifyLogo />}
        </Link>
        <div className='mx-1.5 shrink-0 font-light text-divider-deep'>/</div>
        <WorkspaceProvider>
          <WorkplaceSelector />
        </WorkspaceProvider>
        {enableBilling ? <PlanBadge allowHover sandboxAsUpgrade plan={plan.type} onClick={handlePlanClick} /> : <LicenseNav />}
      </div>
      <div className='flex items-center space-x-2'>
        {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
        {!isCurrentWorkspaceDatasetOperator && <AppNav />}
        {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
        {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
      </div> */}
      {/* 返回上一级 */}
      <Button variant='tertiary' onClick={() => {
        window.history.back()
      }}>
        返回
      </Button>
      {/* <div className='flex items-center space-x-2'>
        {!isCurrentWorkspaceDatasetOperator && <ExploreNav className={navClassName} />}
        {!isCurrentWorkspaceDatasetOperator && <AppNav />}
        {(isCurrentWorkspaceEditor || isCurrentWorkspaceDatasetOperator) && <DatasetNav />}
        {!isCurrentWorkspaceDatasetOperator && <ToolsNav className={navClassName} />}
      </div> */}
      <div className='flex min-w-0 flex-[1] items-center justify-end pl-2 pr-3 min-[1280px]:pl-3'>
        <EnvNav />
        {/* <PluginsNav /> */}
        {/* <Button variant='tertiary' onClick={() => {
          setShowAccountSettingModal({ payload: 'provider' })
        }}>
          设置
        </Button> */}
        {/* <Link
          className={cn(itemClassName, 'group justify-between',
            'data-[active]:bg-state-base-hover',
          )}
          href={docLink('/introduction')}
          target='_blank' rel='noopener noreferrer'>
          <RiBookOpenLine className='size-4 shrink-0 text-text-tertiary' />
          <div className='system-md-regular grow px-1 text-text-secondary'>{t('common.userProfile.helpCenter')}</div>
          <RiArrowRightUpLine className='size-[14px] shrink-0 text-text-tertiary' />
        </Link> */}
        {/* <Button variant='tertiary' onClick={() => {
          window.open(docLink('/introduction'), '_blank')
        }}>
          帮助文档
        </Button> */}
        {/* <AccountDropdown /> */}
        {/* <div className='mr-2'>
          <PluginsNav />
        </div> */}
      </div>
    </div>
  )
}
export default Header
