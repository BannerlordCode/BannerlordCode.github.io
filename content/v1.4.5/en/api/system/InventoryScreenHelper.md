---
title: "InventoryScreenHelper"
description: "Auto-generated class reference for InventoryScreenHelper."
---
# InventoryScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class InventoryScreenHelper`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## Overview

`InventoryScreenHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `InventoryScreenHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InventoryFinishDelegate
`public delegate void InventoryFinishDelegate()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.InventoryFinishDelegate();
```

### GetGold
`public override int GetGold()`

**Purpose:** Reads and returns the `gold` value held by the current object.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetGold();
```

### GetTraderName
`public override TextObject GetTraderName()`

**Purpose:** Reads and returns the `trader name` value held by the current object.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetTraderName();
```

### SetGold
`public override void SetGold(int gold)`

**Purpose:** Assigns a new value to `gold` and updates the object's internal state.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.SetGold(0);
```

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**Purpose:** Reads and returns the `opposite party` value held by the current object.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetOppositeParty();
```

### OnTransaction
`public override void OnTransaction()`

**Purpose:** Invoked when the `transaction` event is raised.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.OnTransaction();
```

### GetTraderName
`public override TextObject GetTraderName()`

**Purpose:** Reads and returns the `trader name` value held by the current object.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetTraderName();
```

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**Purpose:** Reads and returns the `opposite party` value held by the current object.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetOppositeParty();
```

### GetGold
`public override int GetGold()`

**Purpose:** Reads and returns the `gold` value held by the current object.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetGold();
```

### SetGold
`public override void SetGold(int gold)`

**Purpose:** Assigns a new value to `gold` and updates the object's internal state.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.SetGold(0);
```

### OnTransaction
`public override void OnTransaction()`

**Purpose:** Invoked when the `transaction` event is raised.

```csharp
// Obtain an instance of InventoryScreenHelper from the subsystem API first
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.OnTransaction();
```

### GetActiveInventoryState
`public static InventoryState GetActiveInventoryState()`

**Purpose:** Reads and returns the `active inventory state` value held by the current object.

```csharp
// Static call; no instance required
InventoryScreenHelper.GetActiveInventoryState();
```

### PlayerAcceptTradeOffer
`public static void PlayerAcceptTradeOffer()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
InventoryScreenHelper.PlayerAcceptTradeOffer();
```

### CloseScreen
`public static void CloseScreen(bool fromCancel)`

**Purpose:** Closes the resource or UI associated with `screen`.

```csharp
// Static call; no instance required
InventoryScreenHelper.CloseScreen(false);
```

### OpenScreenAsInventoryOfSubParty
`public static void OpenScreenAsInventoryOfSubParty(MobileParty rightParty, MobileParty leftParty, Action doneLogicExtrasDelegate)`

**Purpose:** Opens the resource or UI associated with `screen as inventory of sub party`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsInventoryOfSubParty(rightParty, leftParty, doneLogicExtrasDelegate);
```

### OpenScreenAsInventoryForCraftedItemDecomposition
`public static void OpenScreenAsInventoryForCraftedItemDecomposition(MobileParty party, CharacterObject character, Action doneLogicExtrasDelegate)`

**Purpose:** Opens the resource or UI associated with `screen as inventory for crafted item decomposition`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsInventoryForCraftedItemDecomposition(party, character, doneLogicExtrasDelegate);
```

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(MobileParty party, CharacterObject character)`

**Purpose:** Opens the resource or UI associated with `screen as inventory of`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsInventoryOf(party, character);
```

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty)`

**Purpose:** Opens the resource or UI associated with `screen as inventory of`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsInventoryOf(rightParty, leftParty);
```

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty, CharacterObject character, TextObject leftRosterName = null, InventoryLogic.CapacityData capacityData = null, Action doneLogicExtrasDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as inventory of`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsInventoryOf(rightParty, leftParty, character, null, null, null);
```

### OpenScreenAsInventory
`public static void OpenScreenAsInventory(Action doneLogicExtrasDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as inventory`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsInventory(null);
```

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(Dictionary<PartyBase, ItemRoster> itemRostersToLoot)`

**Purpose:** Opens the resource or UI associated with `screen as loot`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsLoot(dictionary<PartyBase, itemRostersToLoot);
```

### OpenScreenAsStash
`public static void OpenScreenAsStash(ItemRoster stash)`

**Purpose:** Opens the resource or UI associated with `screen as stash`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsStash(stash);
```

### OpenScreenAsWarehouse
`public static void OpenScreenAsWarehouse(ItemRoster stash, InventoryLogic.CapacityData otherSideCapacity)`

**Purpose:** Opens the resource or UI associated with `screen as warehouse`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsWarehouse(stash, otherSideCapacity);
```

### OpenScreenAsReceiveItems
`public static void OpenScreenAsReceiveItems(ItemRoster items, TextObject leftRosterName, Action doneLogicDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as receive items`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsReceiveItems(items, leftRosterName, null);
```

### OpenTradeWithCaravanOrAlleyParty
`public static void OpenTradeWithCaravanOrAlleyParty(MobileParty caravan, InventoryCategoryType merchantItemType = InventoryCategoryType.None)`

**Purpose:** Opens the resource or UI associated with `trade with caravan or alley party`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenTradeWithCaravanOrAlleyParty(caravan, inventoryCategoryType.None);
```

### ActivateTradeWithCurrentSettlement
`public static void ActivateTradeWithCurrentSettlement()`

**Purpose:** Activates the resource, state, or feature associated with `trade with current settlement`.

```csharp
// Static call; no instance required
InventoryScreenHelper.ActivateTradeWithCurrentSettlement();
```

### OpenScreenAsTrade
`public static void OpenScreenAsTrade(ItemRoster leftRoster, SettlementComponent settlementComponent, InventoryCategoryType merchantItemType = InventoryCategoryType.None, Action doneLogicExtrasDelegate = null)`

**Purpose:** Opens the resource or UI associated with `screen as trade`.

```csharp
// Static call; no instance required
InventoryScreenHelper.OpenScreenAsTrade(leftRoster, settlementComponent, inventoryCategoryType.None, null);
```

### GetInventoryItemTypeOfItem
`public static InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)`

**Purpose:** Reads and returns the `inventory item type of item` value held by the current object.

```csharp
// Static call; no instance required
InventoryScreenHelper.GetInventoryItemTypeOfItem(item);
```

## Usage Example

```csharp
InventoryScreenHelper.Initialize();
```

## See Also

- [Area Index](../)