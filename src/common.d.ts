/// <reference types="vite/client" />

// https://github.com/Microsoft/TypeScript/issues/25760#issuecomment-1250630403
type PartialWithRequired<T, K extends keyof T> = Pick<T, K> & Partial<T>;
