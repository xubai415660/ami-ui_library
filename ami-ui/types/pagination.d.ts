import {AmiUIComponent} from './component'

/** Pagination Component */
export declare class AmiPagination extends AmiUIComponent {
    /** Whether to use small pagination */
    small: boolean

    /** Item count of each page */
    pageSize: number

    /** Total item count */
    total: number

    /** Total page count. Set either total or page-count and pages will be displayed; if you need page-sizes, total is required */
  pageCount: number

  /** Number of pagers */
  pagerCount: number

  /** Current page number */
  currentPage: number

    /**
     * Layout of Pagination. Amis separated with a comma.
     * Accepted values: `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot`
     */
  layout: string

  /** Options of item count per page */
  pageSizes: number[]

  /** Custom class name for the page size Select's dropdown */
  popperClass: string

  /** Text for the prev button */
  prevText: string

  /** Text for the prev button */
  nextText: string

    /** Whether to hide when thers's only one page */
  hideOnSinglePage: boolean
}
