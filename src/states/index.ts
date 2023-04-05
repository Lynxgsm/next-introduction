import { Product } from '@/types/Product'
import { proxy } from 'valtio'
import { CartState, CartStateProps } from './cart'

type StateProps = CartStateProps

export const states = proxy<StateProps>(
    { ...CartState }
)