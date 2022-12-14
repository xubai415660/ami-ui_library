import {AmiUIComponent} from './component'

/** Use Collapse to store contents. */
export declare class AmiCollapse extends AmiUIComponent {
    /** Whether to activate accordion mode */
    accordion: boolean

    /** Currently active panel */
    value: string | number | string[] | number[]
}
