<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InventoryScreenHelper`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `InventoryScreenHelper` is a class in the `Helpers` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Methods

### GetActiveInventoryState

```csharp
public static InventoryState GetActiveInventoryState()
```

### PlayerAcceptTradeOffer

```csharp
public static void PlayerAcceptTradeOffer()
```

### CloseScreen

```csharp
public static void CloseScreen(bool fromCancel)
```

### OpenScreenAsInventoryOfSubParty

```csharp
public static void OpenScreenAsInventoryOfSubParty(MobileParty rightParty, MobileParty leftParty, Action doneLogicExtrasDelegate)
```

### OpenScreenAsInventoryForCraftedItemDecomposition

```csharp
public static void OpenScreenAsInventoryForCraftedItemDecomposition(MobileParty party, CharacterObject character, Action doneLogicExtrasDelegate)
```

### OpenScreenAsInventoryOf

```csharp
public static void OpenScreenAsInventoryOf(MobileParty party, CharacterObject character)
```

### OpenScreenAsInventoryOf

```csharp
public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty)
```

### OpenScreenAsInventoryOf

```csharp
public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty, CharacterObject character, TextObject leftRosterName = null, InventoryLogic.CapacityData capacityData = null, Action doneLogicExtrasDelegate = null)
```

### OpenScreenAsInventory

```csharp
public static void OpenScreenAsInventory(Action doneLogicExtrasDelegate = null)
```

### OpenCampaignBattleLootScreen

```csharp
public static void OpenCampaignBattleLootScreen()
```

### OpenScreenAsLoot

```csharp
public static void OpenScreenAsLoot(Dictionary<PartyBase, ItemRoster> itemRostersToLoot)
```

### OpenScreenAsStash

```csharp
public static void OpenScreenAsStash(ItemRoster stash)
```

### OpenScreenAsWarehouse

```csharp
public static void OpenScreenAsWarehouse(ItemRoster stash, InventoryLogic.CapacityData otherSideCapacity)
```

### OpenScreenAsReceiveItems

```csharp
public static void OpenScreenAsReceiveItems(ItemRoster items, TextObject leftRosterName, Action doneLogicDelegate = null)
```

### OpenTradeWithCaravanOrAlleyParty

```csharp
public static void OpenTradeWithCaravanOrAlleyParty(MobileParty caravan, InventoryScreenHelper.InventoryCategoryType merchantItemType = InventoryScreenHelper.InventoryCategoryType.None)
```

### ActivateTradeWithCurrentSettlement

```csharp
public static void ActivateTradeWithCurrentSettlement()
```

### OpenScreenAsTrade

```csharp
public static void OpenScreenAsTrade(ItemRoster leftRoster, SettlementComponent settlementComponent, InventoryScreenHelper.InventoryCategoryType merchantItemType = InventoryScreenHelper.InventoryCategoryType.None, Action doneLogicExtrasDelegate = null)
```

### GetInventoryItemTypeOfItem

```csharp
public static InventoryScreenHelper.InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)
```

### InventoryFinishDelegate

```csharp
public delegate void InventoryFinishDelegate()
```

### GetGold

```csharp
public override int GetGold()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)