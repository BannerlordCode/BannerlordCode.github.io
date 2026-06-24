<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryScreenHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `active inventory state` 的当前值。

### PlayerAcceptTradeOffer
`public static void PlayerAcceptTradeOffer()`

**用途 / Purpose:** 处理 `player accept trade offer` 相关逻辑。

### CloseScreen
`public static void CloseScreen(bool fromCancel)`

**用途 / Purpose:** 处理 `close screen` 相关逻辑。

### OpenScreenAsInventoryOfSubParty
`public static void OpenScreenAsInventoryOfSubParty(MobileParty rightParty, MobileParty leftParty, Action doneLogicExtrasDelegate)`

**用途 / Purpose:** 处理 `open screen as inventory of sub party` 相关逻辑。

### OpenScreenAsInventoryForCraftedItemDecomposition
`public static void OpenScreenAsInventoryForCraftedItemDecomposition(MobileParty party, CharacterObject character, Action doneLogicExtrasDelegate)`

**用途 / Purpose:** 处理 `open screen as inventory for crafted item decomposition` 相关逻辑。

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(MobileParty party, CharacterObject character)`

**用途 / Purpose:** 处理 `open screen as inventory of` 相关逻辑。

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty)`

**用途 / Purpose:** 处理 `open screen as inventory of` 相关逻辑。

### OpenScreenAsInventoryOf
`public static void OpenScreenAsInventoryOf(PartyBase rightParty, PartyBase leftParty, CharacterObject character, TextObject leftRosterName = null, InventoryLogic.CapacityData capacityData = null, Action doneLogicExtrasDelegate = null)`

**用途 / Purpose:** 处理 `open screen as inventory of` 相关逻辑。

### OpenScreenAsInventory
`public static void OpenScreenAsInventory(Action doneLogicExtrasDelegate = null)`

**用途 / Purpose:** 处理 `open screen as inventory` 相关逻辑。

### OpenCampaignBattleLootScreen
`public static void OpenCampaignBattleLootScreen()`

**用途 / Purpose:** 处理 `open campaign battle loot screen` 相关逻辑。

### OpenScreenAsLoot
`public static void OpenScreenAsLoot(Dictionary<PartyBase, ItemRoster> itemRostersToLoot)`

**用途 / Purpose:** 处理 `open screen as loot` 相关逻辑。

### OpenScreenAsStash
`public static void OpenScreenAsStash(ItemRoster stash)`

**用途 / Purpose:** 处理 `open screen as stash` 相关逻辑。

### OpenScreenAsWarehouse
`public static void OpenScreenAsWarehouse(ItemRoster stash, InventoryLogic.CapacityData otherSideCapacity)`

**用途 / Purpose:** 处理 `open screen as warehouse` 相关逻辑。

### OpenScreenAsReceiveItems
`public static void OpenScreenAsReceiveItems(ItemRoster items, TextObject leftRosterName, Action doneLogicDelegate = null)`

**用途 / Purpose:** 处理 `open screen as receive items` 相关逻辑。

### OpenTradeWithCaravanOrAlleyParty
`public static void OpenTradeWithCaravanOrAlleyParty(MobileParty caravan, InventoryScreenHelper.InventoryCategoryType merchantItemType = InventoryScreenHelper.InventoryCategoryType.None)`

**用途 / Purpose:** 处理 `open trade with caravan or alley party` 相关逻辑。

### ActivateTradeWithCurrentSettlement
`public static void ActivateTradeWithCurrentSettlement()`

**用途 / Purpose:** 处理 `activate trade with current settlement` 相关逻辑。

### OpenScreenAsTrade
`public static void OpenScreenAsTrade(ItemRoster leftRoster, SettlementComponent settlementComponent, InventoryScreenHelper.InventoryCategoryType merchantItemType = InventoryScreenHelper.InventoryCategoryType.None, Action doneLogicExtrasDelegate = null)`

**用途 / Purpose:** 处理 `open screen as trade` 相关逻辑。

### GetInventoryItemTypeOfItem
`public static InventoryScreenHelper.InventoryItemType GetInventoryItemTypeOfItem(ItemObject item)`

**用途 / Purpose:** 获取 `inventory item type of item` 的当前值。

### InventoryFinishDelegate
`public delegate void InventoryFinishDelegate()`

**用途 / Purpose:** 处理 `inventory finish delegate` 相关逻辑。

### GetGold
`public override int GetGold()`

**用途 / Purpose:** 获取 `gold` 的当前值。

### GetTraderName
`public override TextObject GetTraderName()`

**用途 / Purpose:** 获取 `trader name` 的当前值。

### SetGold
`public override void SetGold(int gold)`

**用途 / Purpose:** 设置 `gold` 的值或状态。

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**用途 / Purpose:** 获取 `opposite party` 的当前值。

### OnTransaction
`public override void OnTransaction()`

**用途 / Purpose:** 当 `transaction` 事件触发时调用此方法。

### GetTraderName
`public override TextObject GetTraderName()`

**用途 / Purpose:** 获取 `trader name` 的当前值。

### GetOppositeParty
`public override PartyBase GetOppositeParty()`

**用途 / Purpose:** 获取 `opposite party` 的当前值。

### GetGold
`public override int GetGold()`

**用途 / Purpose:** 获取 `gold` 的当前值。

### SetGold
`public override void SetGold(int gold)`

**用途 / Purpose:** 设置 `gold` 的值或状态。

### OnTransaction
`public override void OnTransaction()`

**用途 / Purpose:** 当 `transaction` 事件触发时调用此方法。

## 使用示例

```csharp
InventoryScreenHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)