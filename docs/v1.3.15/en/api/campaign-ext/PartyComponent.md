<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyComponent`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/PartyComponent.cs`

## Overview

`PartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<PartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `MobileParty` | `public MobileParty MobileParty { get; }` |
| `Party` | `public PartyBase Party { get; }` |
| `PartyOwner` | `public abstract Hero PartyOwner { get; }` |
| `Name` | `public abstract TextObject Name { get; }` |
| `HomeSettlement` | `public abstract Settlement HomeSettlement { get; }` |
| `AvoidHostileActions` | `public virtual bool AvoidHostileActions { get; }` |
| `WagePaymentLimit` | `public virtual int WagePaymentLimit { get; }` |
| `Leader` | `public virtual Hero Leader { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `CanHaveNavalNavigationCapability` | `public virtual bool CanHaveNavalNavigationCapability { get; }` |
| `CanHaveLandNavigationCapability` | `public virtual bool CanHaveLandNavigationCapability { get; }` |

## Key Methods

### SetWagePaymentLimit
```csharp
public virtual void SetWagePaymentLimit(int newLimit)
```

### GetDefaultComponentBanner
```csharp
public abstract Banner GetDefaultComponentBanner()
```

### ClearCachedName
```csharp
public virtual void ClearCachedName()
```

### ChangePartyLeader
```csharp
public void ChangePartyLeader(Hero newLeader)
```

### GetMountAndHarnessVisualIdsForPartyIcon
```csharp
public virtual void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)
```

### OnPartyComponentCreatedDelegate
```csharp
public delegate void OnPartyComponentCreatedDelegate(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of PartyComponent (Component)
agent.GetComponent<PartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)