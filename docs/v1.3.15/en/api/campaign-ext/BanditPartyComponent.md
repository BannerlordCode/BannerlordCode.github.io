<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BanditPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BanditPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BanditPartyComponent : WarPartyComponent`
**Base:** `WarPartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/BanditPartyComponent.cs`

## Overview

`BanditPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<BanditPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Hideout` | `public Hideout Hideout { get; }` |
| `IsBossParty` | `public bool IsBossParty { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### CreateBanditParty
```csharp
public static MobileParty CreateBanditParty(string stringId, Clan clan, Hideout hideout, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToBanditParty
```csharp
public static void ConvertPartyToBanditParty(MobileParty mobileParty, Clan clan, Hideout hideout, bool isBossParty)
```

### CreateLooterParty
```csharp
public static MobileParty CreateLooterParty(string stringId, Clan clan, Settlement relatedSettlement, bool isBossParty, PartyTemplateObject pt, CampaignVec2 initialPosition)
```

### ConvertPartyToLooterParty
```csharp
public static void ConvertPartyToLooterParty(MobileParty mobileParty, Clan clan, Settlement relatedSettlement)
```

### SetHomeHideout
```csharp
public void SetHomeHideout(Hideout hideout)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeBanditOnCreation
```csharp
public void InitializeBanditOnCreation(MobileParty mobileParty)
```

## Usage Example

```csharp
// Typical usage of BanditPartyComponent (Component)
agent.GetComponent<BanditPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)