import React from 'react'

declare module '@heroicons/react/*' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export const LightBulbIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const PresentationChartLineIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const UserGroupIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export const Bars3Icon: React.FC<React.SVGProps<SVGSVGElement>>
  export const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module 'framer-motion' {
  export interface MotionProps extends React.HTMLAttributes<HTMLElement> {
    initial?: Record<string, unknown>
    animate?: Record<string, unknown>
    exit?: Record<string, unknown>
    transition?: Record<string, unknown>
    variants?: Record<string, unknown>
    whileHover?: Record<string, unknown>
    whileTap?: Record<string, unknown>
  }
  
  export const motion: {
    [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
      MotionProps & JSX.IntrinsicElements[K]
    >
  }
  
  export interface AnimatePresenceProps {
    children: React.ReactNode
    mode?: 'sync' | 'popLayout' | 'wait'
    initial?: boolean
    onExitComplete?: () => void
    exitBeforeEnter?: boolean
    presenceAffectsLayout?: boolean
  }
  export const AnimatePresence: React.FC<AnimatePresenceProps>
} 