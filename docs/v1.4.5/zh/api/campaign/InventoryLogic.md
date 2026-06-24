<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryLogic`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Inventory/InventoryLogic.cs`

## 概述

`InventoryLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `InventoryLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CharacterEquipments` | `public Dictionary<CharacterObject, Equipment > CharacterEquipments { get; }` |
| `DisableNetwork` | `public bool DisableNetwork { get; }` |
| `TotalAmountChange` | `public Action<int> TotalAmountChange { get; }` |
| `DonationXpChange` | `public Action DonationXpChange { get; }` |
| `RightMemberRoster` | `public TroopRoster RightMemberRoster { get; }` |
| `LeftMemberRoster` | `public TroopRoster LeftMemberRoster { get; }` |
| `InitialEquipmentCharacter` | `public CharacterObject InitialEquipmentCharacter { get; }` |
| `IsTrading` | `public bool IsTrading { get; }` |
| `IsSpecialActionsPermitted` | `public bool IsSpecialActionsPermitted { get; }` |
| `OwnerCharacter` | `public CharacterObject OwnerCharacter { get; }` |
| `OwnerParty` | `public MobileParty OwnerParty { get; }` |
| `OtherParty` | `public PartyBase OtherParty { get; }` |
| `MarketData` | `public IMarketData MarketData { get; }` |
| `OtherSideCapacityData` | `public CapacityData OtherSideCapacityData { get; }` |
| `OtherSideCurrentWeight` | `public int OtherSideCurrentWeight { get; }` |
| `LeftRosterName` | `public TextObject LeftRosterName { get; }` |
| `CanGainXpFromDiscarding` | `public bool CanGainXpFromDiscarding { get; }` |
| `IsOtherPartyFromPlayerClan` | `public bool IsOtherPartyFromPlayerClan { get; }` |
| `InventoryListener` | `public InventoryListener InventoryListener { get; }` |
| `CurrentMobileParty` | `public MobileParty CurrentMobileParty { get; }` |
| `TransactionDebt` | `public int TransactionDebt { get; }` |
| `XpGainFromDonations` | `public float XpGainFromDonations { get; }` |

## 主要方法

### AfterResetDelegate
`public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel)`

**用途 / Purpose:** 处理 `after reset delegate` 相关逻辑。

### TotalAmountChangeDelegate
`public delegate void TotalAmountChangeDelegate(int newTotalAmount)`

**用途 / Purpose:** 处理 `total amount change delegate` 相关逻辑。

### ProcessResultListDelegate
`public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult> results)`

**用途 / Purpose:** 处理 `process result list delegate` 相关逻辑。

### InitializeCopyFrom
`public void InitializeCopyFrom(MobileParty party)`

**用途 / Purpose:** 初始化 `copy from` 的状态、资源或绑定。

### SetReference
`public void SetReference(PartyEquipment partyEquipment)`

**用途 / Purpose:** 设置 `reference` 的值或状态。

### IsEqual
`public bool IsEqual(PartyEquipment partyEquipment)`

**用途 / Purpose:** 处理 `is equal` 相关逻辑。

### RecordTransaction
`public void RecordTransaction(int price, bool isSelling)`

**用途 / Purpose:** 处理 `record transaction` 相关逻辑。

### GetLastTransaction
`public bool GetLastTransaction(out int price, out bool isSelling)`

**用途 / Purpose:** 获取 `last transaction` 的当前值。

### GetEnumerator
`public IEnumerator<int> GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### GetCapacity
`public int GetCapacity()`

**用途 / Purpose:** 获取 `capacity` 的当前值。

### CanForceTransaction
`public bool CanForceTransaction()`

**用途 / Purpose:** 判断当前对象是否可以执行 `force transaction`。

### GetCapacityExceededWarningText
`public TextObject GetCapacityExceededWarningText()`

**用途 / Purpose:** 获取 `capacity exceeded warning text` 的当前值。

### GetCapacityExceededHintText
`public TextObject GetCapacityExceededHintText()`

**用途 / Purpose:** 获取 `capacity exceeded hint text` 的当前值。

### Clear
`public void Clear()`

**用途 / Purpose:** 处理 `clear` 相关逻辑。

### GetLastTransfer
`public bool GetLastTransfer(EquipmentElement equipmentElement, out int lastPrice, out bool lastIsSelling)`

**用途 / Purpose:** 获取 `last transfer` 的当前值。

### Initialize
`public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, CapacityData otherSideCapacityData = null)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### Initialize
`public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, CapacityData otherSideCapacityData = null)`

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

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventorySide side)`

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
`public bool CanSlaughterItem(ItemRosterElement element, InventorySide sideOfItem)`

**用途 / Purpose:** 判断当前对象是否可以执行 `slaughter item`。

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

**用途 / Purpose:** 处理 `is slaughterable` 相关逻辑。

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element, InventorySide sideOfItem)`

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
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventorySide side)`

**用途 / Purpose:** 获取 `cost of item roster element` 的当前值。

### AddTransferCommand
`public void AddTransferCommand(TransferCommand command)`

**用途 / Purpose:** 向当前集合/状态中添加 `transfer command`。

### AddTransferCommands
`public void AddTransferCommands(IEnumerable<TransferCommand> commands)`

**用途 / Purpose:** 向当前集合/状态中添加 `transfer commands`。

### CheckItemRosterHasElement
`public bool CheckItemRosterHasElement(InventorySide side, ItemRosterElement rosterElement, int number)`

**用途 / Purpose:** 处理 `check item roster has element` 相关逻辑。

### IsEquipmentSide
`public static bool IsEquipmentSide(InventorySide side)`

**用途 / Purpose:** 处理 `is equipment side` 相关逻辑。

### SlaughterItem
`public void SlaughterItem(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 处理 `slaughter item` 相关逻辑。

### DonateItem
`public void DonateItem(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 处理 `donate item` 相关逻辑。

### TransferOne
`public void TransferOne(ItemRosterElement itemRosterElement)`

**用途 / Purpose:** 处理 `transfer one` 相关逻辑。

### GetElementCountOnSide
`public int GetElementCountOnSide(InventorySide side)`

**用途 / Purpose:** 获取 `element count on side` 的当前值。

### GetElementsInInitialRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventorySide side)`

**用途 / Purpose:** 获取 `elements in initial roster` 的当前值。

### GetElementsInRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventorySide side)`

**用途 / Purpose:** 获取 `elements in roster` 的当前值。

### FindItemFromSide
`public ItemRosterElement? FindItemFromSide(InventorySide side, EquipmentElement item)`

**用途 / Purpose:** 处理 `find item from side` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new InventoryLogic());
```

## 参见

- [完整类目录](../catalog)