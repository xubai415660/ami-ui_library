import {AmiUIComponent} from './component'

/** Badge Component */
export declare class AmiBadge extends AmiUIComponent {
    /** Display value */
    value: string | number

    /** Maximum value, shows '{max}+' when exceeded. Only works if `value` is a number */
    max: number

    /** If a little dot is displayed */
    isDot: boolean

    /** Hidden badge */
  hidden: boolean
}
