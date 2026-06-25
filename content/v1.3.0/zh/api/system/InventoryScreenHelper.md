---
title: "InventoryScreenHelper"
description: "InventoryScreenHelper 的自动生成类参考。"
---
# InventoryScreenHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class InventoryScreenHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/InventoryScreenHelper.cs`

## 概述

`InventoryScreenHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `InventoryScreenHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetActiveInventoryState
`public static InventoryState GetActiveInventoryState()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 active inventory state 的结果。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.GetActiveInventoryState();
```

### PlayerAcceptTradeOffer
`public static void PlayerAcceptTradeOffer()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PlayerAcceptTradeOffer 对应的操作。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.PlayerAcceptTradeOffer();
```

### CloseScreen
`public static void CloseScreen(bool fromCancel)`

**用途 / Purpose:** **用途 / Purpose:** 关闭screen对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.CloseScreen(false);
```

### OpenScreenAsInventoryOfSubParty
`public static void OpenScreenAsInventoryOfSubParty(MobileParty rightParty, MobileParty leftParty, Action doneLogicExtrasDelegate)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as inventory of sub party对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsInventoryOfSubParty(rightParty, leftParty, doneLogicExtrasDelegate);
```

### OpenScreenAsInventoryForCraftedItemDecomposition
`public static void OpenScreenAsInventoryForCraftedItemDecomposition(MobileParty party, CharacterObject character, Action doneLogicExtrasDelegate)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as inventory for crafted item decomposition对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsInventoryForCraftedItemDecomposition(party, character, doneLogicExtrasDelegate);
```

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(MobileParty party, CharacterObject character)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as inventory of对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsInventoryOf(party, character);
```

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as inventory of对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsInventoryOf(rightParty, leftParty);
```

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty, CharacterObject character, TextObject leftRosterName = null, InventoryLogic.CapacityData capacityData = null, Action doneLogicExtrasDelegate = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as inventory of对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsInventoryOf(rightParty, leftParty, character, null, null, null);
```

### OpenScreenAsInventory
`public static void OpenScreenAsInventory(Action doneLogicExtrasDelegate = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as inventory对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsInventory(null);
```

### OpenCampaignBattleLootScreen
`public static void OpenCampaignBattleLootScreen()`

**用途 / Purpose:** **用途 / Purpose:** 打开campaign battle loot screen对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenCampaignBattleLootScreen();
```

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(Dictionary<PartyBase, ItemRoster> itemRostersToLoot)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as loot对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsLoot(dictionary<PartyBase, itemRostersToLoot);
```

### OpenScreenAsStash
`public static void OpenScreenAsStash(ItemRoster stash)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as stash对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsStash(stash);
```

### OpenScreenAsWarehouse
`public static void OpenScreenAsWarehouse(ItemRoster stash, InventoryLogic.CapacityData otherSideCapacity)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as warehouse对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsWarehouse(stash, otherSideCapacity);
```

### OpenScreenAsReceiveItems
`public static void OpenScreenAsReceiveItems(ItemRoster items, TextObject leftRosterName, Action doneLogicDelegate = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as receive items对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsReceiveItems(items, leftRosterName, null);
```

### OpenTradeWithCaravanOrAlleyParty
`public static void OpenTradeWithCaravanOrAlleyParty(MobileParty caravan, InventoryScreenHelper.InventoryCategoryType merchantItemType = InventoryScreenHelper.InventoryCategoryType.None)`

**用途 / Purpose:** **用途 / Purpose:** 打开trade with caravan or alley party对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenTradeWithCaravanOrAlleyParty(caravan, inventoryScreenHelper.InventoryCategoryType.None);
```

### ActivateTradeWithCurrentSettlement
`public static void ActivateTradeWithCurrentSettlement()`

**用途 / Purpose:** **用途 / Purpose:** 激活trade with current settlement对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.ActivateTradeWithCurrentSettlement();
```

### OpenScreenAsTrade
`public static void OpenScreenAsTrade(ItemRoster leftRoster, SettlementComponent settlementComponent, InventoryScreenHelper.InventoryCategoryType merchantItemType = InventoryScreenHelper.InventoryCategoryType.None, Action doneLogicExtrasDelegate = null)`

**用途 / Purpose:** **用途 / Purpose:** 打开screen as trade对应的资源或界面。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.OpenScreenAsTrade(leftRoster, settlementComponent, inventoryScreenHelper.InventoryCategoryType.None, null);
```

### GetInventoryItemTypeOfItem
`public static InventoryScreenHelper.InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 inventory item type of item 的结果。

```csharp
// 静态调用，不需要实例
InventoryScreenHelper.GetInventoryItemTypeOfItem(item);
```

### InventoryFinishDelegate
`public delegate void InventoryFinishDelegate()`

**用途 / Purpose:** **用途 / Purpose:** 调用 InventoryFinishDelegate 对应的操作。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.InventoryFinishDelegate();
```

### GetGold
`public override int GetGold()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gold 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetGold();
```

### GetTraderName
`public override TextObject GetTraderName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trader name 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetTraderName();
```

### SetGold
`public override void SetGold(int gold)`

**用途 / Purpose:** **用途 / Purpose:** 为 gold 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.SetGold(0);
```

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 opposite party 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetOppositeParty();
```

### OnTransaction
`public override void OnTransaction()`

**用途 / Purpose:** **用途 / Purpose:** 在 transaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.OnTransaction();
```

### GetTraderName
`public override TextObject GetTraderName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 trader name 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetTraderName();
```

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 opposite party 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetOppositeParty();
```

### GetGold
`public override int GetGold()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 gold 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
var result = inventoryScreenHelper.GetGold();
```

### SetGold
`public override void SetGold(int gold)`

**用途 / Purpose:** **用途 / Purpose:** 为 gold 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.SetGold(0);
```

### OnTransaction
`public override void OnTransaction()`

**用途 / Purpose:** **用途 / Purpose:** 在 transaction 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 InventoryScreenHelper 实例
InventoryScreenHelper inventoryScreenHelper = ...;
inventoryScreenHelper.OnTransaction();
```

## 使用示例

```csharp
InventoryScreenHelper.Initialize();
```

## 参见

- [本区域目录](../)