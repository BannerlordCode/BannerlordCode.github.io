<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VillagerPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillagerPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VillagerPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/VillagerPartyComponent.cs`

## Overview

`VillagerPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<VillagerPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Village` | `public Village Village { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### CreateVillagerParty
```csharp
public static MobileParty CreateVillagerParty(string stringId, Village village)
```

### ConvertPartyToVillagerParty
```csharp
public static void ConvertPartyToVillagerParty(MobileParty mobileParty, Village village)
```

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### InitializeVillagerPartyProperties
```csharp
public void InitializeVillagerPartyProperties(MobileParty mobileParty, Village village)
```

## Usage Example

```csharp
// Typical usage of VillagerPartyComponent (Component)
agent.GetComponent<VillagerPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)