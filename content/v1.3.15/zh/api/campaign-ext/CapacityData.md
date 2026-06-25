---
title: "CapacityData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CapacityData`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CapacityData

**命名空间:** TaleWorlds.CampaignSystem.Inventory
**模块:** TaleWorlds.CampaignSystem
**类型:** `public class CapacityData`
**领域:** campaign-ext

## 概述

`CapacityData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `CapacityData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `DisableNetwork` | `public bool DisableNetwork { get; set; }` |
| `TotalAmountChange` | `public Action<int> TotalAmountChange { get; set; }` |
| `DonationXpChange` | `public Action DonationXpChange { get; set; }` |
| `RightMemberRoster` | `public TroopRoster RightMemberRoster { get; }` |
| `LeftMemberRoster` | `public TroopRoster LeftMemberRoster { get; }` |
| `InitialEquipmentCharacter` | `public CharacterObject InitialEquipmentCharacter { get; }` |
| `IsTrading` | `public bool IsTrading { get; }` |
| `IsSpecialActionsPermitted` | `public bool IsSpecialActionsPermitted { get; }` |
| `OwnerCharacter` | `public CharacterObject OwnerCharacter { get; }` |
| `OwnerParty` | `public MobileParty OwnerParty { get; }` |
| `OtherParty` | `public PartyBase OtherParty { get; }` |
| `MarketData` | `public IMarketData MarketData { get; }` |
| `OtherSideCapacityData` | `public InventoryLogic.CapacityData OtherSideCapacityData { get; }` |
| `OtherSideCurrentWeight` | `public int OtherSideCurrentWeight { get; }` |
| `LeftRosterName` | `public TextObject LeftRosterName { get; }` |
| `IsDiscardDonating` | `public bool IsDiscardDonating { get; }` |
| `IsOtherPartyFromPlayerClan` | `public bool IsOtherPartyFromPlayerClan { get; }` |
| `InventoryListener` | `public InventoryListener InventoryListener { get; }` |
| `TotalAmount` | `public int TotalAmount { get; }` |
| `OppositePartyFromListener` | `public PartyBase OppositePartyFromListener { get; }` |

## 主要方法

### Initialize
`public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Initialize
`public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetItemTotalPrice
`public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)`

**用途 / Purpose:** 获取 `item total price` 的当前值。

### SetPlayerAcceptTraderOffer
`public void SetPlayerAcceptTraderOffer()`

**用途 / Purpose:** 设置 `player accept trader offer` 的值或状态。

### DoneLogic
`public bool DoneLogic()`

**用途 / Purpose:** 处理 `done logic` 相关逻辑。

### GetBoughtItems
`public List<ValueTuple<ItemRosterElement, int>> GetBoughtItems()`

**用途 / Purpose:** 获取 `bought items` 的当前值。

### GetSoldItems
`public List<ValueTuple<ItemRosterElement, int>> GetSoldItems()`

**用途 / Purpose:** 获取 `sold items` 的当前值。

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)`

**用途 / Purpose:** 判断当前对象是否可以执行 `inventory capacity increase`。

### GetCanItemIncreaseInventoryCapacity
`public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)`

**用途 / Purpose:** 获取 `can item increase inventory capacity` 的当前值。

### GetAveragePriceFactorItemCategory
`public float GetAveragePriceFactorItemCategory(ItemCategory category)`

**用途 / Purpose:** 获取 `average price factor item category` 的当前值。

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 处理 `is there any changes` 相关逻辑。

### Reset
`public void Reset(bool fromCancel)`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### CanPlayerCompleteTransaction
`public bool CanPlayerCompleteTransaction()`

**用途 / Purpose:** 判断当前对象是否可以执行 `player complete transaction`。

### CanSlaughterItem
`public bool CanSlaughterItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)`

**用途 / Purpose:** 判断当前对象是否可以执行 `slaughter item`。

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

**用途 / Purpose:** 处理 `is slaughterable` 相关逻辑。

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)`

**用途 / Purpose:** 判断当前对象是否可以执行 `donate item`。

### IsDonatable
`public bool IsDonatable(ItemObject item)`

**用途 / Purpose:** 处理 `is donatable` 相关逻辑。

### SetInventoryListener
`public void SetInventoryListener(InventoryListener inventoryListener)`

**用途 / Purpose:** 设置 `inventory listener` 的值或状态。

### GetItemPrice
`public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)`

**用途 / Purpose:** 获取 `item price` 的当前值。

### GetCostOfItemRosterElement
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventoryLogic.InventorySide side)`

**用途 / Purpose:** 获取 `cost of item roster element` 的当前值。

## 使用示例

```csharp
var value = new CapacityData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
