export interface Grocery {
    id?: number;
    name: string;
    price: number;
    stock: number;
    created_at?: Date;
    updated_at?: Date;
  }
  
  export interface User {
    id?: number;
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
    created_at?: Date;
  }
  
  export interface Order {
    id?: number;
    user_id: number;
    total_price: number;
    created_at?: Date;
  }
  
  export interface OrderItem {
    id?: number;
    order_id: number;
    grocery_id: number;
    quantity: number;
    price: number;
  }
  