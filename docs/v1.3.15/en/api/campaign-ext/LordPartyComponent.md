<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LordPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LordPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class LordPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/LordPartyComponent.cs`

## Overview

`LordPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<LordPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Leader` | `public override Hero Leader { get; }` |
| `WagePaymentLimit` | `public override int WagePaymentLimit { get; }` |

## Key Methods

### SetWagePaymentLimit
```csharp
public override void SetWagePaymentLimit(int newLimit)
```

### CreateLordParty
```csharp
public static MobileParty CreateLordParty(string stringId, Hero hero, CampaignVec2 position, float spawnRadius, Settlement spawnSettlement, Hero partyLeader)
```

### ConvertPartyToLordParty
```csharp
public static void ConvertPartyToLordParty(MobileParty mobileParty, Hero owner, Hero partyLeader)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeLordPartyProperties
```csharp
public void InitializeLordPartyProperties(MobileParty mobileParty, Hero owner)
```

## Usage Example

```csharp
// Typical usage of LordPartyComponent (Component)
agent.GetComponent<LordPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)