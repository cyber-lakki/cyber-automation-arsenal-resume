
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

type SectionProps = HTMLMotionProps<'section'> & {
  children: React.ReactNode;
};

const Section = React.forwardRef<HTMLElement, SectionProps>(({ children, className, ...props }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={cn('w-full py-20 md:py-28', className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </motion.section>
  );
});

Section.displayName = 'Section';

export default Section;

