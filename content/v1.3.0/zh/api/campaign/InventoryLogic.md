---
title: "InventoryLogic"
description: "InventoryLogic 的自动生成类参考。"
---
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## 概述

`InventoryLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `InventoryLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
| `CurrentSettlementComponent` | `public SettlementComponent CurrentSettlementComponent { get; }` |
| `CurrentMobileParty` | `public MobileParty CurrentMobileParty { get; }` |
| `TransactionDebt` | `public int TransactionDebt { get; }` |
| `XpGainFromDonations` | `public float XpGainFromDonations { get; }` |
| `CharacterEquipments` | `public Dictionary<CharacterObject, Equipment > CharacterEquipments { get; }` |
| `IsSelling` | `public bool IsSelling { get; }` |
| `Count` | `public int Count { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |

## 主要方法

### Initialize
`public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.Initialize(leftItemRoster, party, false, false, initialCharacterOfRightRoster, merchantItemType, marketData, false, inventoryMode, null, null, null);
```

### Initialize
`public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.Initialize(leftItemRoster, rightItemRoster, rightMemberRoster, false, false, initialCharacterOfRightRoster, merchantItemType, marketData, false, inventoryMode, null, null, null);
```

### GetItemTotalPrice
`public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)`

**用途 / Purpose:** 读取并返回当前对象中 「item total price」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetItemTotalPrice(itemRosterElement, 0, lastPrice, false);
```

### SetPlayerAcceptTraderOffer
`public void SetPlayerAcceptTraderOffer()`

**用途 / Purpose:** 为 「player accept trader offer」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.SetPlayerAcceptTraderOffer();
```

### DoneLogic
`public bool DoneLogic()`

**用途 / Purpose:** 处理与 「done logic」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.DoneLogic();
```

### GetBoughtItems
`public List<ValueTuple<ItemRosterElement, int>> GetBoughtItems()`

**用途 / Purpose:** 读取并返回当前对象中 「bought items」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetBoughtItems();
```

### GetSoldItems
`public List<ValueTuple<ItemRosterElement, int>> GetSoldItems()`

**用途 / Purpose:** 读取并返回当前对象中 「sold items」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetSoldItems();
```

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)`

**用途 / Purpose:** 检查当前对象是否满足 「inventory capacity increase」 的前置条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanInventoryCapacityIncrease(side);
```

### GetCanItemIncreaseInventoryCapacity
`public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)`

**用途 / Purpose:** 读取并返回当前对象中 「can item increase inventory capacity」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCanItemIncreaseInventoryCapacity(item);
```

### GetAveragePriceFactorItemCategory
`public float GetAveragePriceFactorItemCategory(ItemCategory category)`

**用途 / Purpose:** 读取并返回当前对象中 「average price factor item category」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetAveragePriceFactorItemCategory(category);
```

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 判断当前对象是否处于 「there any changes」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsThereAnyChanges();
```

### Reset
`public void Reset(bool fromCancel)`

**用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.Reset(false);
```

### CanPlayerCompleteTransaction
`public bool CanPlayerCompleteTransaction()`

**用途 / Purpose:** 检查当前对象是否满足 「player complete transaction」 的前置条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanPlayerCompleteTransaction();
```

### CanSlaughterItem
`public bool CanSlaughterItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)`

**用途 / Purpose:** 检查当前对象是否满足 「slaughter item」 的前置条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanSlaughterItem(element, sideOfItem);
```

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

**用途 / Purpose:** 判断当前对象是否处于 「slaughterable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsSlaughterable(item);
```

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)`

**用途 / Purpose:** 检查当前对象是否满足 「donate item」 的前置条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanDonateItem(element, sideOfItem);
```

### IsDonatable
`public bool IsDonatable(ItemObject item)`

**用途 / Purpose:** 判断当前对象是否处于 「donatable」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsDonatable(item);
```

### SetInventoryListener
`public void SetInventoryListener(InventoryListener inventoryListener)`

**用途 / Purpose:** 为 「inventory listener」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.SetInventoryListener(inventoryListener);
```

### GetItemPrice
`public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)`

**用途 / Purpose:** 读取并返回当前对象中 「item price」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetItemPrice(equipmentElement, false);
```

### GetCostOfItemRosterElement
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventoryLogic.InventorySide side)`

**用途 / Purpose:** 读取并返回当前对象中 「cost of item roster element」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCostOfItemRosterElement(itemRosterElement, side);
```

### AddTransferCommand
`public void AddTransferCommand(TransferCommand command)`

**用途 / Purpose:** 将 「transfer command」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.AddTransferCommand(command);
```

### AddTransferCommands
`public void AddTransferCommands(IEnumerable<TransferCommand> commands)`

**用途 / Purpose:** 将 「transfer commands」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.AddTransferCommands(commands);
```

### CheckItemRosterHasElement
`public bool CheckItemRosterHasElement(InventoryLogic.InventorySide side, ItemRosterElement rosterElement, int number)`

**用途 / Purpose:** 检查「item roster has element」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CheckItemRosterHasElement(side, rosterElement, 0);
```

### IsEquipmentSide
`public static bool IsEquipmentSide(InventoryLogic.InventorySide side)`

**用途 / Purpose:** 判断当前对象是否处于 「equipment side」 状态或条件。

```csharp
// 静态调用，不需要实例
InventoryLogic.IsEquipmentSide(side);
```

### SlaughterItem
`public void SlaughterItem(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 处理与 「slaughter item」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.SlaughterItem(itemRosterElement);
```

### DonateItem
`public void DonateItem(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 处理与 「donate item」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.DonateItem(itemRosterElement);
```

### TransferOne
`public void TransferOne(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 处理与 「transfer one」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.TransferOne(itemRosterElement);
```

### GetElementCountOnSide
`public int GetElementCountOnSide(InventoryLogic.InventorySide side)`

**用途 / Purpose:** 读取并返回当前对象中 「element count on side」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetElementCountOnSide(side);
```

### GetElementsInInitialRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventoryLogic.InventorySide side)`

**用途 / Purpose:** 读取并返回当前对象中 「elements in initial roster」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetElementsInInitialRoster(side);
```

### GetElementsInRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventoryLogic.InventorySide side)`

**用途 / Purpose:** 读取并返回当前对象中 「elements in roster」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetElementsInRoster(side);
```

### FindItemFromSide
`public ItemRosterElement? FindItemFromSide(InventoryLogic.InventorySide side, EquipmentElement item)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的「item from side」。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.FindItemFromSide(side, item);
```

### AfterResetDelegate
`public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel)`

**用途 / Purpose:** 在 「reset delegate」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.AfterResetDelegate(inventoryLogic, false);
```

### TotalAmountChangeDelegate
`public delegate void TotalAmountChangeDelegate(int newTotalAmount)`

**用途 / Purpose:** 处理与 「total amount change delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.TotalAmountChangeDelegate(0);
```

### ProcessResultListDelegate
`public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult> results)`

**用途 / Purpose:** 处理与 「process result list delegate」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.ProcessResultListDelegate(inventoryLogic, results);
```

### InitializeCopyFrom
`public void InitializeCopyFrom(MobileParty party)`

**用途 / Purpose:** 为 「copy from」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.InitializeCopyFrom(party);
```

### SetReference
`public void SetReference(InventoryLogic.PartyEquipment partyEquipment)`

**用途 / Purpose:** 为 「reference」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.SetReference(partyEquipment);
```

### IsEqual
`public bool IsEqual(InventoryLogic.PartyEquipment partyEquipment)`

**用途 / Purpose:** 判断当前对象是否处于 「equal」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.IsEqual(partyEquipment);
```

### RecordTransaction
`public void RecordTransaction(int price, bool isSelling)`

**用途 / Purpose:** 处理与 「record transaction」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.RecordTransaction(0, false);
```

### GetLastTransaction
`public bool GetLastTransaction(out int price, out bool isSelling)`

**用途 / Purpose:** 读取并返回当前对象中 「last transaction」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetLastTransaction(price, isSelling);
```

### GetEnumerator
`public IEnumerator<int> GetEnumerator()`

**用途 / Purpose:** 读取并返回当前对象中 「enumerator」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetEnumerator();
```

### GetCapacity
`public int GetCapacity()`

**用途 / Purpose:** 读取并返回当前对象中 「capacity」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCapacity();
```

### CanForceTransaction
`public bool CanForceTransaction()`

**用途 / Purpose:** 检查当前对象是否满足 「force transaction」 的前置条件。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.CanForceTransaction();
```

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**用途 / Purpose:** 读取并返回当前对象中 「capacity exceeded warning text」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCapacityExceededWarningText();
```

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**用途 / Purpose:** 读取并返回当前对象中 「capacity exceeded hint text」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetCapacityExceededHintText();
```

### Clear
`public void Clear()`

**用途 / Purpose:** 清空当前对象中的内容。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
inventoryLogic.Clear();
```

### GetLastTransfer
`public bool GetLastTransfer(EquipmentElement equipmentElement, out int lastPrice, out bool lastIsSelling)`

**用途 / Purpose:** 读取并返回当前对象中 「last transfer」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryLogic 实例
InventoryLogic inventoryLogic = ...;
var result = inventoryLogic.GetLastTransfer(equipmentElement, lastPrice, lastIsSelling);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<InventoryLogic>();
```

## 参见

- [本区域目录](../)