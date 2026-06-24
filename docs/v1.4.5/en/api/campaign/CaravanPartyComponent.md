<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CaravanPartyComponent`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CaravanPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CaravanPartyComponent.cs`

## Overview

`CaravanPartyComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `CaravanPartyComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Settlement` | `public Settlement Settlement { get; }` |
| `Owner` | `public Hero Owner { get; }` |
| `Name` | `public override TextObject Name { get; }` |

## Key Methods

### InitializeCaravanOnCreation
`public void InitializeCaravanOnCreation(MobileParty mobileParty, Settlement settlement)`

**Purpose:** Initializes the state, resources, or bindings for `caravan on creation`.

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** Gets the current value of `default component banner`.

### ConvertPartyToCaravanParty
`public static void ConvertPartyToCaravanParty(MobileParty mobileParty, Hero caravanOwner, Settlement spawnSettlement, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)`

**Purpose:** Handles logic related to `convert party to caravan party`.

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** Handles logic related to `clear cached name`.

### CreateCaravanParty
`public static MobileParty CreateCaravanParty(Hero caravanOwner, Settlement spawnSettlement, PartyTemplateObject templateObject, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)`

**Purpose:** Creates a new `caravan party` instance or object.

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**Purpose:** Gets the current value of `mount and harness visual ids for party icon`.

### TransferCaravanOwnership
`public static void TransferCaravanOwnership(MobileParty caravan, Hero newOwner, Settlement homeSettlement)`

**Purpose:** Handles logic related to `transfer caravan ownership`.

### ChangeHomeSettlement
`public void ChangeHomeSettlement(Settlement newHomeSettlement)`

**Purpose:** Handles logic related to `change home settlement`.

## Usage Example

```csharp
var component = agent.GetComponent<CaravanPartyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)