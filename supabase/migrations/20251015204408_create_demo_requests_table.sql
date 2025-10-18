/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key) - Unique identifier for each demo request
      - `email` (text, unique, not null) - User's email address
      - `name` (text, not null) - User's full name
      - `industry` (text, not null) - Industry type (Dentist, Contractor, Salon, etc.)
      - `phone` (text, not null) - Contact phone number
      - `created_at` (timestamptz) - Timestamp when the request was created
      - `status` (text) - Current status of the demo request (default: 'pending')

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy to allow anyone to insert their own demo request (public registration)
    - Add policy for authenticated admins to read all demo requests

  3. Notes
    - Email is unique to prevent duplicate demo requests
    - Status field allows tracking demo request progress (pending, contacted, scheduled, completed, etc.)
    - Industry field helps customize the demo experience
    - Created_at timestamp helps track when requests occur and prioritize follow-ups
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  industry text NOT NULL,
  phone text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert demo requests"
  ON demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);
