# Redux Setup Guide

This project now includes Redux Toolkit and Redux Persist for state management.

## 🚀 What's Included

- **@reduxjs/toolkit** - Modern Redux with built-in best practices
- **react-redux** - React bindings for Redux
- **redux-persist** - Persist Redux state to localStorage
- **@types/redux-persist** - TypeScript types for Redux Persist

## 📁 File Structure

```
src/
├── store/
│   ├── index.ts           # Store configuration with persistence
│   ├── hooks.ts           # Typed Redux hooks
│   └── slices/
│       └── authSlice.ts   # Example auth slice
├── components/
│   ├── ReduxProvider.tsx  # Redux Provider with PersistGate
│   └── AuthExample.tsx    # Example component using Redux
```

## 🔧 Usage

### 1. Using Redux Hooks

```typescript
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { login, logout } from '@/store/slices/authSlice';

// In your component
const dispatch = useAppDispatch();
const { isAuthenticated, user } = useAppSelector((state) => state.auth);

// Dispatch actions
dispatch(login({ email: 'user@example.com', token: 'abc123' }));
dispatch(logout());
```

### 2. Creating New Slices

1. Create a new slice in `src/store/slices/`
2. Add it to the `rootReducer` in `src/store/index.ts`
3. Add slice name to `whitelist` in `persistConfig` if you want it persisted

### 3. Example Component

Check `src/components/AuthExample.tsx` for a complete example of how to use Redux with TypeScript.

## 🔄 State Persistence

The Redux state is automatically persisted to localStorage. You can control which slices are persisted by updating the `whitelist` array in `src/store/index.ts`.

Currently persisted: `['auth']`

## 🎯 TypeScript Support

All Redux usage is fully typed with TypeScript:
- `useAppSelector` provides typed state access
- `useAppDispatch` provides typed dispatch
- All action creators are type-safe
- Slice state interfaces ensure type safety