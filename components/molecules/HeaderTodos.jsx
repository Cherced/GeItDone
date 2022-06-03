import React from 'react'
import { TodoCounter } from '../atoms/TodoCounter'
import { BrandLogo } from '../atoms/BrandLogo'

export const HeaderTodos = () => {
  return (
    <div className="HeaderTodos">
        <TodoCounter />
        <BrandLogo />
    </div>
  )
}
