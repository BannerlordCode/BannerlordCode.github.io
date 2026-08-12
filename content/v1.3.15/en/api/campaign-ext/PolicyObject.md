---
title: "PolicyObject"
description: "A kingdom policy object: one governable policy a kingdom can adopt or repeal via council decision (e.g. War Tax, Land Grants), registered from policies.xml, exposed by DefaultPolicies, carrying only read-only metadata."
---

# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PolicyObject : PropertyObject`
**Base:** `PropertyObject` (derives from `MBObjectBase`, defined in `TaleWorlds.Core`)
**File:** `TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PolicyObject.cs`

## One-line responsibility

`PolicyObject` is **one concrete kingdom policy** in the campaign world (e.g. "War Tax", "Land Grants"): it only carries read-only metadata about the policy — name, description, the three faction weights (Authoritarian / Oligarchic / Egalitarian), and log text — and itself performs no calculation; whether it is active and what resolutions it affects is decided by the owning `Kingdom` and the corresponding `CampaignBehavior` / `Model`.

## Mental Model

Treat `PolicyObject` as a **"policy card,"** not a service that does things on its own:

- It is a **pure data object** derived from `PropertyObject` (→ `MBObjectBase`), registered by `MBObjectManager` from `policies.xml` at campaign load, and its text and weights are filled in by `DefaultPolicies` calling `Initialize(...)`.
- Do not `new PolicyObject(...)` just to get a built-in policy. Built-in policies are exposed as `static` properties in `DefaultPolicies`, e.g. `DefaultPolicies.WarTax`, `DefaultPolicies.LandGrantsForVeteran`; `PolicyObject` is just the type behind them.
- A policy's "lifecycle" is controlled by `Kingdom`: `Kingdom.ActivePolicies` is the list of currently active policies. Adopting / repealing is **not** you editing the list — it is launching a `KingdomPolicyDecision` (a kind of `KingdomDecision`), voted on by the council, advanced by the behavior `KingdomDecisionProposalBehavior`, and only finally landed by `Kingdom.AddPolicy` / `RemovePolicy`.
- Because policies are globally deployed objects, you can get all instances at any time via `PolicyObject.All` (equivalent to `Campaign.Current.AllPolicies`); the same `stringId` is always the same instance.

## How to get a PolicyObject

```csharp
// 1) Get a built-in named policy (most common, most robust)
PolicyObject warTax = DefaultPolicies.WarTax;

// 2) Enumerate all registered policies
foreach (PolicyObject policy in PolicyObject.All)
{
    // policy.Name / policy.AuthoritarianWeight ...
}

// 3) Reverse-lookup by stringId (equivalent to Game.Current.ObjectManager.GetObject<PolicyObject>("policy_war_tax"))
PolicyObject byId = Game.Current.ObjectManager.GetObject<PolicyObject>("policy_land_grants_for_veteran");
```

Note: `DefaultPolicies.X` depends on `Campaign.Current.DefaultPolicies` and is only accessible after the campaign has started; `PolicyObject.All` likewise requires `Campaign.Current` to be non-null.

## When to use / When not to use

**When to use**

- To query whether a kingdom has enabled a given policy: use `kingdom.ActivePolicies.Contains(...)`, or more robustly `kingdom.HasPolicy(DefaultPolicies.WarTax)`.
- To read a policy's read-only metadata (name, three faction weights, log text) to drive your own UI or resolution logic.
- To enumerate all policies for a config screen or compatibility check (`PolicyObject.All`).

**When not to use**

- Do not `new PolicyObject(...)` then `Initialize(...)` to "add" an in-game policy — unless you also maintain the corresponding `policies.xml`, registering the `id` in `MBObjectManager`; otherwise it will not appear in `PolicyObject.All` and will not be recognized by any `Model`.
- Do not directly `Add` / `Remove` / `Clear` on `Kingdom.ActivePolicies` to change a kingdom's policy state. `ActivePolicies` is exposed as `IList<PolicyObject>`, but bypassing the decision to edit the list directly skips the council, influence cost, logs, and associated Behaviors, causing state inconsistency; use `Kingdom.AddPolicy` / `RemovePolicy` (force a change in code), or in normal play let the council decide via `KingdomDecision`.
- Do not assume `Clan` also has a policy list. Policies belong to `Kingdom`; `Clan` has no `Policies` property in v1.3.0 / v1.3.15 / v1.4.5; for a clan, only check the active policy on its owning `Kingdom`.
- Do not assume a policy "is definitely active." Always `kingdom.HasPolicy(...)` or check `ActivePolicies` before reading, because a newly created kingdom initializes default policies by culture (`Culture.DefaultPolicyList`) and may be changed by the council at any time.

## Dependencies

- Upstream: [MBObjectManager](../../campaign-ext/MBObjectManager/) registers each `PolicyObject` from `policies.xml` during load; the root class is [MBObjectBase](../../campaign-ext/MBObjectBase/), and [Campaign](../../campaign/Campaign/) holds all instances via `AllPolicies` (the source of `PolicyObject.All`).
- Same-layer registration: [DefaultPolicies](../../campaign-ext/DefaultPolicies/) calls `Initialize` at campaign start to fill text and weights, and exposes named instances as `static` properties (e.g. `WarTax`, `LandGrantsForVeteran`).
- Owner: [Kingdom](../../campaign/Kingdom/) records active policies via `ActivePolicies` and calls `AddPolicy` / `RemovePolicy` after a council decision; the decision body is [KingdomPolicyDecision](../../campaign-ext/KingdomPolicyDecision/).
- Consumer: each `CampaignBehavior` and `Model` (tax, loyalty, influence resolutions, etc.) reads `Kingdom.ActivePolicies` to decide effects, not `PolicyObject` itself.
- This bucket index: [campaign-ext](../)

## Risks

- **Null / uninitialized**: `PolicyObject.All` is unavailable before campaign initialization completes or when `Campaign.Current` is `null`; `DefaultPolicies.X` also depends on the campaign having started and must be accessed after the campaign begins.
- **Directly editing `ActivePolicies` breaks consistency**: `ActivePolicies` is `IList<PolicyObject>`, technically `Add` / `Remove`able, but prefer `Kingdom.AddPolicy` / `RemovePolicy`; if you `Clear` or wholesale replace the list yourself, the associated Behaviors and save snapshot will fall out of sync.
- **Assuming a policy is active**: reading `ActivePolicies` does not mean "the player's kingdom definitely has this policy" — a new kingdom's default policies vary widely by culture. Always `HasPolicy` before branching.
- **Adding a custom policy requires matching XML and registration**: just `new` + `Initialize` is not enough; you must declare the `id` in `policies.xml` and register it in the object manager, otherwise `All` / `GetObject` cannot find it and no `Model` will apply its effect.
- **Save restore**: the policy object itself is serialized with the `Campaign`. If you force `AddPolicy` on a `Kingdom` at runtime with a new instance never declared in XML, that instance may fail to restore on reload.

## Members

### Registration and enumeration

#### `public static MBReadOnlyList<PolicyObject> All { get; }`
Returns all registered policy instances in the current campaign, effectively `Campaign.Current.AllPolicies`. **Purpose**: enumerate all policies for a config page or compatibility check. **Side effects**: none, read-only. **When to call**: any time after the campaign has started; unavailable when `Campaign.Current` is `null`.

#### `public PolicyObject(string stringId) : base(stringId)`
Constructs an uninitialized policy object. The engine creates and registers it in `DefaultPolicies.RegisterAll()` via `Game.Current.ObjectManager.RegisterPresumedObject(new PolicyObject(stringId))`. **Purpose / when to call**: only when you need to add a custom policy and are responsible for its XML and initialization yourself; normal mods should not use it to get built-in policies.

#### `public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)`
Fills the instance with text and three faction weights, calling `AfterInitialized()` at the end. **Purpose**: called by `DefaultPolicies.InitializeAll()` after fields are read from `policies.xml`, completing localization and weight setting. **Side effects**: writes `Name` / `Description` / `LogEntryDescription` / `SecondaryEffects` and the three weights; it publishes no event and affects no active-policy list. **When to call**: by the engine during load; mods should not call it manually (unless self-building a policy, and only after registration, before being read by a `Model`).

#### `public override string ToString()`
Returns the policy's display name (the string of `Name`). **Purpose**: debug or log output. **Side effects**: none.

### Read-only metadata (properties)

These properties only make sense after `Initialize`, all `{ get; private set; }`, mods should not write them directly.

| Property | Type | Description |
|----------|------|-------------|
| `Name` | `TextObject` | Policy name (inherited from `PropertyObject`, localized). |
| `Description` | `TextObject` | Policy description (inherited from `PropertyObject`). |
| `SecondaryEffects` | `TextObject` | Text for the policy's secondary effects (e.g. "5% of village income as tax"). |
| `LogEntryDescription` | `TextObject` | Phrase written to the log when the policy is adopted / repealed. |
| `AuthoritarianWeight` | `float` | The authoritarian faction's tendency weight toward this policy (-1 ~ 1). |
| `OligarchicWeight` | `float` | The oligarchic faction weight. |
| `EgalitarianWeight` | `float` | The egalitarian faction weight. |

> The three faction weights are used for the tendency simulation of council voting (affecting `KingdomElection`'s for / against calculation per `Clan`), not a switch for the policy's effect; the actual effect is implemented by the `Model` / `Behavior` that reads `Kingdom.ActivePolicies`.

## Typical usage examples

### Example 1: check whether the player's kingdom is under War Tax

```csharp
using TaleWorlds.CampaignSystem;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && playerKingdom.HasPolicy(DefaultPolicies.WarTax))
{
    // The kingdom has adopted "War Tax" via the council; adjust your tax / prosperity logic accordingly
    InformationManager.DisplayMessage(new InformationMessage("The kingdom is under War Tax."));
}
```

### Example 2: enumerate all policies, list the names of those currently active in the player's kingdom

```csharp
using TaleWorlds.CampaignSystem;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null)
{
    foreach (PolicyObject policy in PolicyObject.All)
    {
        if (playerKingdom.ActivePolicies.Contains(policy))
        {
            // Read PolicyObject's read-only metadata directly
            string name = policy.Name.ToString();
            float authWeight = policy.AuthoritarianWeight;
            // ...
        }
    }
}
```

### Example 3 (advanced): programmatically force the player's kingdom to adopt a policy

```csharp
using TaleWorlds.CampaignSystem;

Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
if (playerKingdom != null && !playerKingdom.HasPolicy(DefaultPolicies.RoyalGuard))
{
    // Directly modifies the kingdom's policy state; skips council voting and influence cost,
    // only use when you truly want to bypass the decision flow.
    playerKingdom.AddPolicy(DefaultPolicies.RoyalGuard);
}
```

## Cross-version notes

- `PolicyObject`'s public API (`All`, `Initialize`, `ToString` and the three weights / text properties) is **identical across v1.3.0, v1.3.15, v1.4.5**.
- Named access to policies is always via `DefaultPolicies` (`DefaultPolicies.WarTax`, etc.), and that class's policy set is exactly the same in v1.3.x and v1.4.5.
- Policies only hang on `Kingdom`; `Clan` has no `Policies` property in any checked version — do not assume across layers.

## Navigation

- ↑ Parent: [campaign-ext index](../)
- ↔ Siblings: [DefaultPolicies](../../campaign-ext/DefaultPolicies/) · [KingdomPolicyDecision](../../campaign-ext/KingdomPolicyDecision/) · [PolicyDecisionOutcome](../../campaign-ext/PolicyDecisionOutcome/) · [MBObjectBase](../../campaign-ext/MBObjectBase/) · [MBObjectManager](../../campaign-ext/MBObjectManager/)
- Related types: [Kingdom](../../campaign/Kingdom/) · [Clan](../../campaign/Clan/) · [Campaign](../../campaign/Campaign/) · [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)
