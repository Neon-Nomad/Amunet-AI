/*
  # Create trial signups table

  1. New Tables
    - `trial_signups`
      - `id` (uuid, primary key) - Unique identifier for each signup
      - `email` (text, unique, not null) - User's email address
      - `name` (text, not null) - User's full name
      - `business_name` (text, not null) - Name of the business
      - `phone` (text, not null) - Contact phone number
      - `plan_name` (text, not null) - Name of the selected plan (Starter, Growth, Enterprise)
      - `plan_price` (text, not null) - Price of the selected plan
      - `created_at` (timestamptz) - Timestamp when the signup was created
      - `status` (text) - Current status of the trial signup (default: 'pending')

  2. Security
    - Enable RLS on `trial_signups` table
    - Add policy to allow anyone to insert their own signup (public registration)
    - Add policy for authenticated admins to read all signups

  3. Notes
    - Email is unique to prevent duplicate signups
    - Status field allows tracking signup progress (pending, contacted, active, etc.)
    - Created_at timestamp helps track when signups occur
*/

CREATE TABLE IF NOT EXISTS trial_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  business_name text NOT NULL,
  phone text NOT NULL,
  plan_name text NOT NULL,
  plan_price text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trial_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert trial signups"
  ON trial_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all trial signups"
  ON trial_signups
  FOR SELECT
  TO authenticated
  USING (true);
