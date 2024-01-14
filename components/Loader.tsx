import {Loader} from 'lucide-react'
import { cn } from '@/lib/utils'
import {cva, type VariantProps} from 'class-variance-authority'

const Spinner = cva(
    "text-muted-foreground animate-spin",
    {
        variants:{
            size:{
                default: "w-4 h-4",
                sm:"w-2 h-2",
                lg:"w-6 h-6",
                icon:"w-10 h-10"
            }
            
        },
        defaultVariants:{
            size:"default"
        }
    }
)

interface SpinnerProps extends VariantProps<typeof Spinner>{}

export const LoadingSpinner = ({size}:SpinnerProps) => {
    return (
        <Loader className={cn(Spinner({size}))} />
    )
}