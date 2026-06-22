<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryScreenHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryScreenHelper

**命名空间:** Helpers
**模块:** Helpers
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`InventoryScreenHelper` 是 `Helpers` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)