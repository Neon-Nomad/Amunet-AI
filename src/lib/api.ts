// Pick a sensible default API base during development and production.
// In Vite dev, the server commonly runs on 127.0.0.1, so broaden localhost detection.
const isBrowser = typeof window !== 'undefined';
const host = isBrowser ? window.location.hostname : '';
const isLocalHost = !!host && (host === 'localhost' || host === '127.0.0.1' || host === '::1');

// Default to the local Express API during dev/local, otherwise to '/api'.
const DEFAULT_API_BASE = (import.meta.env.DEV || isLocalHost)
  ? 'http://localhost:8787/api'
  : '/api';

function getApiBase(): string {
  const base = import.meta.env.VITE_API_BASE || DEFAULT_API_BASE;
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${getApiBase()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    type ApiErrorBody = { error?: string; code?: string };
    type ApiError = Error & { status?: number; code?: string };

    let info: ApiErrorBody | null = null;
    try {
      info = (await res.json()) as ApiErrorBody;
    } catch {
      info = null;
    }

    const message = info?.error || res.statusText || 'Request failed';
    const err: ApiError = new Error(message) as ApiError;
    err.status = res.status;
    err.code = info?.code;
    throw err;
  }

  return res.json() as Promise<T>;
}

export type SignupPayload = {
  email: string;
  name: string;
  business_name: string;
  phone: string;
  plan_name: string;
  plan_price: string;
};

export async function createSignup(payload: SignupPayload): Promise<{ id: string; created_at: string }>{
  return postJson('/signup', payload);
}

export type DemoRequestPayload = {
  email: string;
  name: string;
  industry: string;
  phone: string;
};

export async function createDemoRequest(payload: DemoRequestPayload): Promise<{ id: string; created_at: string }>{
  return postJson('/demo-request', payload);
}
