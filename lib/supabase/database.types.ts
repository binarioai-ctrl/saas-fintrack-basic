// Auto-generated TypeScript types from Supabase schema

export interface Profiles {
  id: string
  email?: string
  full_name: string
  avatar_url: string
  role?: string
  subscription_status?: string
  subscription_id: string
  customer_id: string
  trial_ends_at: string
  created_at?: string
  updated_at?: string
}

export interface ProfilesInsert {
  email?: string
  full_name: string
  avatar_url: string
  subscription_id: string
  customer_id: string
  trial_ends_at: string
}

export interface Organizations {
  id?: string
  name?: string
  slug?: string
  logo_url: string
  website: string
  description: string
  plan?: string
  max_users?: number
  owner_id?: string
  created_at?: string
  updated_at?: string
}

export interface OrganizationsInsert {
  name?: string
  slug?: string
  logo_url: string
  website: string
  description: string
  owner_id?: string
}

export interface OrgMembers {
  id?: string
  organization_id?: string
  user_id?: string
  role?: string
  permissions?: any
  invited_by: string
  invited_at?: string
  joined_at: string
  status?: string
}

export interface OrgMembersInsert {
  organization_id?: string
  user_id?: string
  invited_by: string
  joined_at: string
}

export interface Subscriptions {
  id?: string
  organization_id?: string
  stripe_subscription_id: string
  stripe_customer_id?: string
  status?: string
  price_id?: string
  plan_name?: string
  current_period_start?: string
  current_period_end?: string
  trial_start: string
  trial_end: string
  cancel_at_period_end?: boolean
  canceled_at: string
  created_at?: string
  updated_at?: string
}

export interface SubscriptionsInsert {
  organization_id?: string
  stripe_subscription_id: string
  stripe_customer_id?: string
  status?: string
  price_id?: string
  plan_name?: string
  current_period_start?: string
  current_period_end?: string
  trial_start: string
  trial_end: string
  canceled_at: string
}

export interface UsageMetrics {
  id?: string
  organization_id?: string
  metric_name?: string
  value?: number
  period_start?: string
  period_end?: string
  created_at?: string
}

export interface UsageMetricsInsert {
  organization_id?: string
  metric_name?: string
  period_start?: string
  period_end?: string
}

export interface AuditLogs {
  id?: string
  organization_id: string
  user_id?: string
  action?: string
  resource_type?: string
  resource_id: string
  details?: any
  ip_address: string
  user_agent: string
  created_at?: string
}

export interface AuditLogsInsert {
  organization_id: string
  user_id?: string
  action?: string
  resource_type?: string
  resource_id: string
  ip_address: string
  user_agent: string
}

export interface Accounts {
  id?: string
  organization_id?: string
  account_number?: string
  account_type?: string
  currency?: string
  balance?: number
  available_balance?: number
  status?: string
  created_at?: string
  updated_at?: string
}

export interface AccountsInsert {
  organization_id?: string
  account_number?: string
  account_type?: string
}

export interface Transactions {
  id?: string
  account_id?: string
  type?: string
  amount?: number
  description?: string
  reference: string
  category: string
  status?: string
  metadata?: any
  created_at?: string
  processed_at: string
}

export interface TransactionsInsert {
  account_id?: string
  type?: string
  amount?: number
  description?: string
  reference: string
  category: string
  processed_at: string
}

export interface KycDocuments {
  id?: string
  user_id?: string
  document_type?: string
  document_url?: string
  verification_status?: string
  verified_by: string
  verified_at: string
  rejection_reason: string
  expires_at: string
  created_at?: string
}

export interface KycDocumentsInsert {
  user_id?: string
  document_type?: string
  document_url?: string
  verified_by: string
  verified_at: string
  rejection_reason: string
  expires_at: string
}

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: Profiles
        Insert: ProfilesInsert
        Update: Partial<ProfilesInsert>
      }
      organizations: {
        Row: Organizations
        Insert: OrganizationsInsert
        Update: Partial<OrganizationsInsert>
      }
      org_members: {
        Row: OrgMembers
        Insert: OrgMembersInsert
        Update: Partial<OrgMembersInsert>
      }
      subscriptions: {
        Row: Subscriptions
        Insert: SubscriptionsInsert
        Update: Partial<SubscriptionsInsert>
      }
      usage_metrics: {
        Row: UsageMetrics
        Insert: UsageMetricsInsert
        Update: Partial<UsageMetricsInsert>
      }
      audit_logs: {
        Row: AuditLogs
        Insert: AuditLogsInsert
        Update: Partial<AuditLogsInsert>
      }
      accounts: {
        Row: Accounts
        Insert: AccountsInsert
        Update: Partial<AccountsInsert>
      }
      transactions: {
        Row: Transactions
        Insert: TransactionsInsert
        Update: Partial<TransactionsInsert>
      }
      kyc_documents: {
        Row: KycDocuments
        Insert: KycDocumentsInsert
        Update: Partial<KycDocumentsInsert>
      }
    }
  }
}