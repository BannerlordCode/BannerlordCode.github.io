---
title: "InventoryLogic"
description: "InventoryLogic 的自动生成类参考。"
---
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs

## 概述

`InventoryLogic` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### Initialize
`public void Initialize(ItemRoster leftItemRoster,MobileParty party,bool isTrading,bool isSpecialActionsPermitted,CharacterObject initialCharacterOfRightRoster,InventoryScreenHelper.InventoryCategoryType merchantItemType,IMarketData marketData,bool useBasePrices,InventoryScreenHelper.InventoryMode inventoryMode,TextObject leftRosterName = null,TroopRoster leftMemberRoster = null,InventoryLogic.CapacityData otherSideCapacityData = null)`
`public void Initialize(ItemRoster leftItemRoster,ItemRoster rightItemRoster,TroopRoster rightMemberRoster,bool isTrading,bool isSpecialActionsPermitted,CharacterObject initialCharacterOfRightRoster,InventoryScreenHelper.InventoryCategoryType merchantItemType,IMarketData marketData,bool useBasePrices,InventoryScreenHelper.InventoryMode inventoryMode,TextObject leftRosterName = null,TroopRoster leftMemberRoster = null,InventoryLogic.CapacityData otherSideCapacityData = null)`

### GetItemTotalPrice
`public int GetItemTotalPrice(ItemRosterElement itemRosterElement,int absStockChange,out int lastPrice,bool isBuying) `

### SetPlayerAcceptTraderOffer
`public void SetPlayerAcceptTraderOffer() `

### DoneLogic
`public bool DoneLogic() `

### GetBoughtItems
`public List<ValueTuple<ItemRosterElement,int>> GetBoughtItems() `

### GetSoldItems
`public List<ValueTuple<ItemRosterElement,int>> GetSoldItems() `

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side) `

### GetCanItemIncreaseInventoryCapacity
`public bool GetCanItemIncreaseInventoryCapacity(ItemObject item) `

### GetAveragePriceFactorItemCategory
`public float GetAveragePriceFactorItemCategory(ItemCategory category) `

### IsThereAnyChanges
`public bool IsThereAnyChanges() `

### Reset
`public void Reset(bool fromCancel) `

### CanPlayerCompleteTransaction
`public bool CanPlayerCompleteTransaction() `

### CanSlaughterItem
`public bool CanSlaughterItem(ItemRosterElement element,InventoryLogic.InventorySide sideOfItem) `

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item) `

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element,InventoryLogic.InventorySide sideOfItem) `

### IsDonatable
`public bool IsDonatable(ItemObject item) `

### SetInventoryListener
`public void SetInventoryListener(InventoryListener inventoryListener) `

### GetItemPrice
`public int GetItemPrice(EquipmentElement equipmentElement,bool isBuying = false) `

### GetCostOfItemRosterElement
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement,InventoryLogic.InventorySide side) `

### AddTransferCommand
`public void AddTransferCommand(TransferCommand command) `

### AddTransferCommands
`public void AddTransferCommands(IEnumerable<TransferCommand> commands) `

### CheckItemRosterHasElement
`public bool CheckItemRosterHasElement(InventoryLogic.InventorySide side,ItemRosterElement rosterElement,int number) `

### IsEquipmentSide
`public static bool IsEquipmentSide(InventoryLogic.InventorySide side) `

### SlaughterItem
`public void SlaughterItem(ItemRosterElement itemRosterElement) `

### DonateItem
`public void DonateItem(ItemRosterElement itemRosterElement) `

### TransferOne
`public void TransferOne(ItemRosterElement itemRosterElement) `

### GetElementCountOnSide
`public int GetElementCountOnSide(InventoryLogic.InventorySide side) `

### GetElementsInInitialRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventoryLogic.InventorySide side) `

### GetElementsInRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventoryLogic.InventorySide side) `

### FindItemFromSide
`public ItemRosterElement? FindItemFromSide(InventoryLogic.InventorySide side,EquipmentElement item) `

### AfterResetDelegate
`public delegate void AfterResetDelegate(InventoryLogic inventoryLogic,bool fromCancel)`

### TotalAmountChangeDelegate
`public delegate void TotalAmountChangeDelegate(int newTotalAmount)`

### ProcessResultListDelegate
`public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic,List<TransferCommandResult> results)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
