---
title: "InventoryLogic"
description: "InventoryLogic：TaleWorlds.CampaignSystem 的 public 类；公开成员 72 个（方法 34、属性 27、字段 1）。源文件 TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs。"
---
# InventoryLogic

**Namespace:** `TaleWorlds.CampaignSystem.Inventory`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class InventoryLogic`
**File:** `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`

## 概述

InventoryLogic 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs。它是一个 public 类，继承链为 InventoryLogic。public/protected 成员共 72 个：34 方法、27 属性、1 字段、2 事件、2 构造函数、6 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InventoryLogic 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Inventory），继承链 InventoryLogic。成员构成以方法为主（方法 34/72，属性 27/72），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisableNetwork` | `public bool DisableNetwork` | 属性 |
| `Action` | `public Action<int>TotalAmountChange` | 属性 |
| `DonationXpChange` | `public Action DonationXpChange` | 属性 |
| `AfterReset;` | `public event InventoryLogic.AfterResetDelegate AfterReset;` | 事件 |
| `AfterTransfer;` | `public event InventoryLogic.ProcessResultListDelegate AfterTransfer;` | 事件 |
| `RightMemberRoster` | `public TroopRoster RightMemberRoster` | 属性 |
| `LeftMemberRoster` | `public TroopRoster LeftMemberRoster` | 属性 |
| `InitialEquipmentCharacter` | `public CharacterObject InitialEquipmentCharacter` | 属性 |
| `IsTrading` | `public bool IsTrading` | 属性 |
| `IsSpecialActionsPermitted` | `public bool IsSpecialActionsPermitted` | 属性 |
| `OwnerCharacter` | `public CharacterObject OwnerCharacter` | 属性 |
| `OwnerParty` | `public MobileParty OwnerParty` | 属性 |
| `OtherParty` | `public PartyBase OtherParty` | 属性 |
| `MarketData` | `public IMarketData MarketData` | 属性 |
| `OtherSideCapacityData` | `public InventoryLogic.CapacityData OtherSideCapacityData` | 属性 |
| `OtherSideCurrentWeight` | `public int OtherSideCurrentWeight` | 属性 |
| `LeftRosterName` | `public TextObject LeftRosterName` | 属性 |
| `CanGainXpFromDiscarding` | `public bool CanGainXpFromDiscarding` | 属性 |
| `IsOtherPartyFromPlayerClan` | `public bool IsOtherPartyFromPlayerClan` | 属性 |
| `InventoryListener` | `public InventoryListener InventoryListener` | 属性 |
| `TotalAmount` | `public int TotalAmount` | 属性 |
| `OppositePartyFromListener` | `public PartyBase OppositePartyFromListener` | 属性 |
| `CurrentSettlementComponent` | `public SettlementComponent CurrentSettlementComponent` | 属性 |
| `CurrentMobileParty` | `public MobileParty CurrentMobileParty` | 属性 |
| `TransactionDebt` | `public int TransactionDebt` | 属性 |
| `XpGainFromDonations` | `public float XpGainFromDonations` | 属性 |
| `InventoryLogic` | `public InventoryLogic(MobileParty ownerParty, CharacterObject ownerCharacter, PartyBase merchantParty)` | 构造函数 |
| `InventoryLogic` | `public InventoryLogic(PartyBase merchantParty) : this(MobileParty.MainParty, CharacterObject.PlayerCharacter, merchantParty)` | 构造函数 |
| `Initialize` | `public void Initialize(ItemRoster leftItemRoster, MobileParty party, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)` | 方法 |
| `Initialize` | `public void Initialize(ItemRoster leftItemRoster, ItemRoster rightItemRoster, TroopRoster rightMemberRoster, bool isTrading, bool isSpecialActionsPermitted, CharacterObject initialCharacterOfRightRoster, InventoryScreenHelper.InventoryCategoryType merchantItemType, IMarketData marketData, bool useBasePrices, InventoryScreenHelper.InventoryMode inventoryMode, TextObject leftRosterName = null, TroopRoster leftMemberRoster = null, InventoryLogic.CapacityData otherSideCapacityData = null)` | 方法 |
| `GetItemTotalPrice` | `public int GetItemTotalPrice(ItemRosterElement itemRosterElement, int absStockChange, out int lastPrice, bool isBuying)` | 方法 |
| `SetPlayerAcceptTraderOffer` | `public void SetPlayerAcceptTraderOffer()` | 方法 |
| `DoneLogic` | `public bool DoneLogic()` | 方法 |
| `int>>GetBoughtItems` | `public List<ValueTuple<ItemRosterElement, int>>GetBoughtItems()` | 方法 |
| `int>>GetSoldItems` | `public List<ValueTuple<ItemRosterElement, int>>GetSoldItems()` | 方法 |
| `CanInventoryCapacityIncrease` | `public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)` | 方法 |
| `GetCanItemIncreaseInventoryCapacity` | `public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)` | 方法 |
| `GetAveragePriceFactorItemCategory` | `public float GetAveragePriceFactorItemCategory(ItemCategory category)` | 方法 |
| `IsThereAnyChanges` | `public bool IsThereAnyChanges()` | 方法 |
| `Reset` | `public void Reset(bool fromCancel)` | 方法 |
| `CanPlayerCompleteTransaction` | `public bool CanPlayerCompleteTransaction()` | 方法 |
| `CanSlaughterItem` | `public bool CanSlaughterItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)` | 方法 |
| `IsSlaughterable` | `public bool IsSlaughterable(ItemObject item)` | 方法 |
| `CanDonateItem` | `public bool CanDonateItem(ItemRosterElement element, InventoryLogic.InventorySide sideOfItem)` | 方法 |
| `IsDonatable` | `public bool IsDonatable(ItemObject item)` | 方法 |
| `SetInventoryListener` | `public void SetInventoryListener(InventoryListener inventoryListener)` | 方法 |
| `GetItemPrice` | `public int GetItemPrice(EquipmentElement equipmentElement, bool isBuying = false)` | 方法 |
| `GetCostOfItemRosterElement` | `public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement, InventoryLogic.InventorySide side)` | 方法 |
| `AddTransferCommand` | `public void AddTransferCommand(TransferCommand command)` | 方法 |
| `AddTransferCommands` | `public void AddTransferCommands(IEnumerable<TransferCommand>commands)` | 方法 |
| `CheckItemRosterHasElement` | `public bool CheckItemRosterHasElement(InventoryLogic.InventorySide side, ItemRosterElement rosterElement, int number)` | 方法 |
| `IsEquipmentSide` | `public static bool IsEquipmentSide(InventoryLogic.InventorySide side)` | 方法 |
| `SlaughterItem` | `public void SlaughterItem(ItemRosterElement itemRosterElement)` | 方法 |
| `DonateItem` | `public void DonateItem(ItemRosterElement itemRosterElement)` | 方法 |
| `TransferOne` | `public void TransferOne(ItemRosterElement itemRosterElement)` | 方法 |
| `GetElementCountOnSide` | `public int GetElementCountOnSide(InventoryLogic.InventorySide side)` | 方法 |
| `IReadOnlyList` | `public IReadOnlyList<ItemRosterElement>GetElementsInInitialRoster(InventoryLogic.InventorySide side)` | 方法 |
| `IReadOnlyList` | `public IReadOnlyList<ItemRosterElement>GetElementsInRoster(InventoryLogic.InventorySide side)` | 方法 |
| `FindItemFromSide` | `public ItemRosterElement? FindItemFromSide(InventoryLogic.InventorySide side, EquipmentElement item)` | 方法 |
| `MerchantItemType` | `public InventoryScreenHelper.InventoryCategoryType MerchantItemType` | 字段 |
| `TransferType` | `public enum TransferType` | 属性 |
| `InventorySide` | `public enum InventorySide` | 属性 |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel);` | 方法 |
| `TotalAmountChangeDelegate` | `public delegate void TotalAmountChangeDelegate(int newTotalAmount);` | 方法 |
| `ProcessResultListDelegate` | `public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult>results);` | 方法 |
| `CapacityData` | `public class CapacityData` | 属性 |
| `TransferType` | `public enum TransferType` | 嵌套类型 |
| `InventorySide` | `public enum InventorySide` | 嵌套类型 |
| `AfterResetDelegate` | `public delegate void AfterResetDelegate(InventoryLogic inventoryLogic, bool fromCancel)` | 嵌套类型 |
| `TotalAmountChangeDelegate` | `public delegate void TotalAmountChangeDelegate(int newTotalAmount)` | 嵌套类型 |
| `ProcessResultListDelegate` | `public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic, List<TransferCommandResult>results)` | 嵌套类型 |
| `CapacityData` | `public class CapacityData` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 FakeInventoryListener](../FakeInventoryListener)
- [同命名空间 InventoryListener](../InventoryListener)
- [同命名空间 InventoryTransferItemEvent](../InventoryTransferItemEvent)
- [同命名空间 IPlayerTradeBehavior](../IPlayerTradeBehavior)
