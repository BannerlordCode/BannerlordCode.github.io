---
title: "CaravanPartyComponent"
description: "Auto-generated class reference for CaravanPartyComponent."
---
# CaravanPartyComponent

**Namespace:** TaleWorlds.CampaignSystem.Party.PartyComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CaravanPartyComponent : PartyComponent`
**Base:** `PartyComponent`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Party.PartyComponents/CaravanPartyComponent.cs`

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

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by caravan on creation.

```csharp
// Obtain an instance of CaravanPartyComponent from the subsystem API first
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.InitializeCaravanOnCreation(mobileParty, settlement);
```

### GetDefaultComponentBanner
`public override Banner GetDefaultComponentBanner()`

**Purpose:** **Purpose:** Reads and returns the default component banner value held by the this instance.

```csharp
// Obtain an instance of CaravanPartyComponent from the subsystem API first
CaravanPartyComponent caravanPartyComponent = ...;
var result = caravanPartyComponent.GetDefaultComponentBanner();
```

### ConvertPartyToCaravanParty
`public static void ConvertPartyToCaravanParty(MobileParty mobileParty, Hero caravanOwner, Settlement spawnSettlement, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)`

**Purpose:** **Purpose:** Converts party to caravan party into another representation or type.

```csharp
// Static call; no instance required
CaravanPartyComponent.ConvertPartyToCaravanParty(mobileParty, caravanOwner, spawnSettlement, false, null, null, false);
```

### ClearCachedName
`public override void ClearCachedName()`

**Purpose:** **Purpose:** Removes all cached name from the this instance.

```csharp
// Obtain an instance of CaravanPartyComponent from the subsystem API first
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.ClearCachedName();
```

### CreateCaravanParty
`public static MobileParty CreateCaravanParty(Hero caravanOwner, Settlement spawnSettlement, PartyTemplateObject templateObject, bool isInitialSpawn = false, Hero caravanLeader = null, ItemRoster caravanItems = null, bool isElite = false)`

**Purpose:** **Purpose:** Constructs a new caravan party entity and returns it to the caller.

```csharp
// Static call; no instance required
CaravanPartyComponent.CreateCaravanParty(caravanOwner, spawnSettlement, templateObject, false, null, null, false);
```

### GetMountAndHarnessVisualIdsForPartyIcon
`public override void GetMountAndHarnessVisualIdsForPartyIcon(PartyBase party, out string mountStringId, out string harnessStringId)`

**Purpose:** **Purpose:** Reads and returns the mount and harness visual ids for party icon value held by the this instance.

```csharp
// Obtain an instance of CaravanPartyComponent from the subsystem API first
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.GetMountAndHarnessVisualIdsForPartyIcon(party, mountStringId, harnessStringId);
```

### TransferCaravanOwnership
`public static void TransferCaravanOwnership(MobileParty caravan, Hero newOwner, Settlement homeSettlement)`

**Purpose:** **Purpose:** Executes the TransferCaravanOwnership logic.

```csharp
// Static call; no instance required
CaravanPartyComponent.TransferCaravanOwnership(caravan, newOwner, homeSettlement);
```

### ChangeHomeSettlement
`public void ChangeHomeSettlement(Settlement newHomeSettlement)`

**Purpose:** **Purpose:** Executes the ChangeHomeSettlement logic.

```csharp
// Obtain an instance of CaravanPartyComponent from the subsystem API first
CaravanPartyComponent caravanPartyComponent = ...;
caravanPartyComponent.ChangeHomeSettlement(newHomeSettlement);
```

## Usage Example

```csharp
var component = agent.GetComponent<CaravanPartyComponent>();
```

## See Also

- [Area Index](../)