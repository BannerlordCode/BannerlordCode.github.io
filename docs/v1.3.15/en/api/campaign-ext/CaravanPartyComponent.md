<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanPartyComponent`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CaravanPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `TaleWorlds.CampaignSystem/Party/PartyComponents/CaravanPartyComponent.cs`

## Overview

`CaravanPartyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<CaravanPartyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `PartyOwner` | `public override Hero PartyOwner { get; }` |
| `IsElite` | `public bool IsElite { get; }` |
| `Name` | `public override TextObject Name { get; }` |
| `CanHaveNavalNavigationCapability` | `public override bool CanHaveNavalNavigationCapability { get; }` |
| `CanHaveLandNavigationCapability` | `public override bool CanHaveLandNavigationCapability { get; }` |
| `HomeSettlement` | `public override Settlement HomeSettlement { get; }` |
| `Leader` | `public override Hero Leader { get; }` |

## Key Methods

### GetDefaultComponentBanner
```csharp
public override Banner GetDefaultComponentBanner()
```

### ConvertPartyToCaravanParty
```csharp
public static void ConvertPartyToCaravanParty(MobileParty mobileParty, Hero caravanOwner, Settlement spawnSettlement, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)
```

### ClearCachedName
```csharp
public override void ClearCachedName()
```

### CreateCaravanParty
```csharp
public static MobileParty CreateCaravanParty(Hero caravanOwner, Settlement spawnSettlement, PartyTemplateObject templateObject, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)
```

### GetMountAndHarnessVisualIdsForPartyIcon
```csharp
public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)
```

### TransferCaravanOwnership
```csharp
public static void TransferCaravanOwnership(MobileParty caravan, Hero newOwner, Settlement homeSettlement)
```

### ChangeHomeSettlement
```csharp
public void ChangeHomeSettlement(Settlement newHomeSettlement)
```

### InitializeCaravanOnCreation
```csharp
public void InitializeCaravanOnCreation(MobileParty mobileParty, Settlement settlement)
```

## Usage Example

```csharp
// Typical usage of CaravanPartyComponent (Component)
agent.GetComponent<CaravanPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)