import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type BreakpointKey = 'default' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type ResponsiveValue<T> = {
  default: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
};

type GridGap =
  | string
  | number
  | {
      x: ResponsiveValue<number | string>;
      y: ResponsiveValue<number | string>;
    };

type GridAlignment = 'start' | 'center' | 'end' | 'stretch';
type GridJustification =
  | GridAlignment
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type GridFlow = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns at different breakpoints
   * @example { default: 1, sm: 2, md: 3, lg: 4 }
   */
  cols?: ResponsiveValue<number>;
  /**
   * Number of rows at different breakpoints
   * @example { default: 1, md: 2 }
   */
  rows?: ResponsiveValue<number>;
  /**
   * Auto-fit configuration for responsive columns
   * @example { minWidth: "200px", maxWidth: "1fr" }
   */
  autoFit?: {
    minWidth: string;
    maxWidth?: string;
  };
  /**
   * Whether to use auto-fill instead of auto-fit
   * Auto-fill will maintain empty columns
   */
  autoFill?: boolean;
  /**
   * Whether to use dense packing algorithm
   * This will attempt to fill holes in the grid
   */
  dense?: boolean;
  /**
   * Grid template areas at different breakpoints
   * @example { default: ["header", "main", "footer"], md: ["header header", "nav main", "footer footer"] }
   */
  areas?: ResponsiveValue<string[]>;
  /**
   * Gap between grid items
   * Simple: number or string for uniform gap
   * Complex: { x: { default: 2, md: 4 }, y: { default: 4, md: 6 } }
   */
  gap?: GridGap;
  /**
   * Whether the grid should stretch to full width
   */
  fullWidth?: boolean;
  /**
   * Alignment of grid items along the block axis
   */
  align?: GridAlignment;
  /**
   * Justification of grid items along the inline axis
   */
  justify?: GridJustification;
  /**
   * Auto rows configuration
   */
  autoRows?: string;
  /**
   * Grid flow direction
   */
  flow?: GridFlow;
}

export function Grid({
  children,
  className,
  cols = { default: 1 },
  rows,
  areas,
  gap = 4,
  fullWidth = false,
  autoFit,
  autoFill = false,
  dense = false,
  align,
  justify,
  autoRows,
  flow,
  ...props
}: GridProps) {
  const getBreakpointPrefix = (breakpoint: BreakpointKey) => {
    return breakpoint === 'default' ? '' : `${breakpoint}:`;
  };

  // Build responsive grid columns classes
  const gridTemplateClass = autoFit
    ? `grid-cols-[repeat(${autoFill ? 'auto-fill' : 'auto-fit'},minmax(${autoFit.minWidth},${autoFit.maxWidth || '1fr'}))]`
    : Object.entries(cols as ResponsiveValue<number>)
        .map(([breakpoint, value]) => {
          return `${getBreakpointPrefix(breakpoint as BreakpointKey)}grid-cols-${value}`;
        })
        .join(' ');

  // Build responsive rows classes
  const rowsClass = rows
    ? Object.entries(rows as ResponsiveValue<number>)
        .map(([breakpoint, value]) => {
          return `${getBreakpointPrefix(breakpoint as BreakpointKey)}grid-rows-${value}`;
        })
        .join(' ')
    : '';

  // Build gap classes
  const gapClasses =
    typeof gap === 'object' && 'x' in gap
      ? [
          ...Object.entries(gap.x).map(([breakpoint, value]) => {
            return `${getBreakpointPrefix(breakpoint as BreakpointKey)}gap-x-${value}`;
          }),
          ...Object.entries(gap.y).map(([breakpoint, value]) => {
            return `${getBreakpointPrefix(breakpoint as BreakpointKey)}gap-y-${value}`;
          }),
        ].join(' ')
      : `gap-${gap}`;

  // Build grid areas styles
  const gridAreasStyles: Record<string, string> = {};
  if (areas) {
    Object.entries(areas as ResponsiveValue<string[]>).forEach(
      ([breakpoint, areaConfig]) => {
        const areaString = areaConfig.map((row) => `"${row}"`).join(' ');
        if (breakpoint === 'default') {
          gridAreasStyles.gridTemplateAreas = areaString;
        } else {
          gridAreasStyles[`--grid-areas-${breakpoint}`] = areaString;
        }
      }
    );
  }

  return (
    <div
      className={cn(
        'grid',
        gridTemplateClass,
        rowsClass,
        gapClasses,
        align && `items-${align}`,
        justify && `justify-${justify}`,
        autoRows && `auto-rows-[${autoRows}]`,
        flow && `grid-flow-${flow}`,
        dense && 'grid-flow-dense',
        fullWidth && 'w-full',
        className
      )}
      style={gridAreasStyles}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Grid item component with responsive column span support
 */
export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns this item should span at different breakpoints
   * @example { default: 1, md: 2 }
   */
  span?: {
    default: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  /**
   * Grid area name for this item
   */
  area?: string;
  /**
   * Item-specific alignment
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  /**
   * Item-specific justification
   */
  justify?: 'start' | 'end' | 'center' | 'stretch';
  /**
   * Row span configuration
   */
  rowSpan?: {
    default: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
}

export function GridItem({
  children,
  className,
  span = { default: 1 },
  rowSpan,
  area,
  align,
  justify,
  ...props
}: GridItemProps) {
  // Build responsive column span classes
  const spanClass = Object.entries(span)
    .map(([breakpoint, span]) => {
      if (breakpoint === 'default') {
        return `col-span-${span}`;
      }
      return `${breakpoint}:col-span-${span}`;
    })
    .join(' ');

  // Build responsive row span classes
  const rowSpanClass = rowSpan
    ? Object.entries(rowSpan)
        .map(([breakpoint, span]) => {
          if (breakpoint === 'default') {
            return `row-span-${span}`;
          }
          return `${breakpoint}:row-span-${span}`;
        })
        .join(' ')
    : '';

  const areaStyle = area ? { gridArea: area } : {};

  return (
    <div
      className={cn(
        spanClass,
        rowSpanClass,
        align && `self-${align}`,
        justify && `justify-self-${justify}`,
        className
      )}
      style={areaStyle}
      {...props}
    >
      {children}
    </div>
  );
}
