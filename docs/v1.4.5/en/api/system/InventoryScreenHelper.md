<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryScreenHelper`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class InventoryScreenHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## Overview

`InventoryScreenHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `InventoryScreenHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InventoryFinishDelegate
`public delegate void InventoryFinishDelegate()`

**Purpose:** Handles logic related to `inventory finish delegate`.

### GetGold
`public override int GetGold()`

**Purpose:** Gets the current value of `gold`.

### GetTraderName
`public override TextObject GetTraderName()`

**Purpose:** Gets the current value of `trader name`.

### SetGold
`public override void SetGold(int gold)`

**Purpose:** Sets the value or state of `gold`.

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**Purpose:** Gets the current value of `opposite party`.

### OnTransaction
`public override void OnTransaction()`

**Purpose:** Called when the `transaction` event is raised.

### GetTraderName
`public override TextObject GetTraderName()`

**Purpose:** Gets the current value of `trader name`.

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**Purpose:** Gets the current value of `opposite party`.

### GetGold
`public override int GetGold()`

**Purpose:** Gets the current value of `gold`.

### SetGold
`public override void SetGold(int gold)`

**Purpose:** Sets the value or state of `gold`.

### OnTransaction
`public override void OnTransaction()`

**Purpose:** Called when the `transaction` event is raised.

### GetActiveInventoryState
`public static InventoryState GetActiveInventoryState()`

**Purpose:** Gets the current value of `active inventory state`.

### PlayerAcceptTradeOffer
`public static void PlayerAcceptTradeOffer()`

**Purpose:** Handles logic related to `player accept trade offer`.

### CloseScreen
`public static void CloseScreen(bool fromCancel)`

**Purpose:** Handles logic related to `close screen`.

### OpenScreenAsInventoryOfSubParty
`public static void OpenScreenAsInventoryOfSubParty(MobileParty rightParty, MobileParty leftParty, Action doneLogicExtrasDelegate)`

**Purpose:** Handles logic related to `open screen as inventory of sub party`.

### OpenScreenAsInventoryForCraftedItemDecomposition
`public static void OpenScreenAsInventoryForCraftedItemDecomposition(MobileParty party, CharacterObject character, Action doneLogicExtrasDelegate)`

**Purpose:** Handles logic related to `open screen as inventory for crafted item decomposition`.

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(MobileParty party, CharacterObject character)`

**Purpose:** Handles logic related to `open screen as inventory of`.

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty)`

**Purpose:** Handles logic related to `open screen as inventory of`.

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty, CharacterObject character, TextObject leftRosterName = null, InventoryLogic.CapacityData capacityData = null, Action doneLogicExtrasDelegate = null)`

**Purpose:** Handles logic related to `open screen as inventory of`.

### OpenScreenAsInventory
`public static void OpenScreenAsInventory(Action doneLogicExtrasDelegate = null)`

**Purpose:** Handles logic related to `open screen as inventory`.

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(Dictionary<PartyBase, ItemRoster> itemRostersToLoot)`

**Purpose:** Handles logic related to `open screen as loot`.

### OpenScreenAsStash
`public static void OpenScreenAsStash(ItemRoster stash)`

**Purpose:** Handles logic related to `open screen as stash`.

### OpenScreenAsWarehouse
`public static void OpenScreenAsWarehouse(ItemRoster stash, InventoryLogic.CapacityData otherSideCapacity)`

**Purpose:** Handles logic related to `open screen as warehouse`.

### OpenScreenAsReceiveItems
`public static void OpenScreenAsReceiveItems(ItemRoster items, TextObject leftRosterName, Action doneLogicDelegate = null)`

**Purpose:** Handles logic related to `open screen as receive items`.

### OpenTradeWithCaravanOrAlleyParty
`public static void OpenTradeWithCaravanOrAlleyParty(MobileParty caravan, InventoryCategoryType merchantItemType = InventoryCategoryType.None)`

**Purpose:** Handles logic related to `open trade with caravan or alley party`.

### ActivateTradeWithCurrentSettlement
`public static void ActivateTradeWithCurrentSettlement()`

**Purpose:** Handles logic related to `activate trade with current settlement`.

### OpenScreenAsTrade
`public static void OpenScreenAsTrade(ItemRoster leftRoster, SettlementComponent settlementComponent, InventoryCategoryType merchantItemType = InventoryCategoryType.None, Action doneLogicExtrasDelegate = null)`

**Purpose:** Handles logic related to `open screen as trade`.

### GetInventoryItemTypeOfItem
`public static InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)`

**Purpose:** Gets the current value of `inventory item type of item`.

## Usage Example

```csharp
InventoryScreenHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)