---
title: "InventoryLogic"
description: "Auto-generated class reference for InventoryLogic."
---
# InventoryLogic

**Namespace:** TaleWorlds.CampaignSystem.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class InventoryLogic `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/Inventory/InventoryLogic.cs

## Overview

Auto-generated stub for `InventoryLogic`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### Initialize
`public void Initialize(ItemRoster leftItemRoster,MobileParty party,bool isTrading,bool isSpecialActionsPermitted,CharacterObject initialCharacterOfRightRoster,InventoryScreenHelper.InventoryCategoryType merchantItemType,IMarketData marketData,bool useBasePrices,InventoryScreenHelper.InventoryMode inventoryMode,TextObject leftRosterName = null,TroopRoster leftMemberRoster = null,InventoryLogic.CapacityData otherSideCapacityData = null)`

### GetItemTotalPrice
`public int GetItemTotalPrice(ItemRosterElement itemRosterElement,int absStockChange,out int lastPrice,bool isBuying)`

### SetPlayerAcceptTraderOffer
`public void SetPlayerAcceptTraderOffer()`

### DoneLogic
`public bool DoneLogic()`

### GetBoughtItems
`public List<ValueTuple<ItemRosterElement,int>> GetBoughtItems()`

### GetSoldItems
`public List<ValueTuple<ItemRosterElement,int>> GetSoldItems()`

### CanInventoryCapacityIncrease
`public bool CanInventoryCapacityIncrease(InventoryLogic.InventorySide side)`

### GetCanItemIncreaseInventoryCapacity
`public bool GetCanItemIncreaseInventoryCapacity(ItemObject item)`

### GetAveragePriceFactorItemCategory
`public float GetAveragePriceFactorItemCategory(ItemCategory category)`

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

### Reset
`public void Reset(bool fromCancel)`

### CanPlayerCompleteTransaction
`public bool CanPlayerCompleteTransaction()`

### CanSlaughterItem
`public bool CanSlaughterItem(ItemRosterElement element,InventoryLogic.InventorySide sideOfItem)`

### IsSlaughterable
`public bool IsSlaughterable(ItemObject item)`

### CanDonateItem
`public bool CanDonateItem(ItemRosterElement element,InventoryLogic.InventorySide sideOfItem)`

### IsDonatable
`public bool IsDonatable(ItemObject item)`

### SetInventoryListener
`public void SetInventoryListener(InventoryListener inventoryListener)`

### GetItemPrice
`public int GetItemPrice(EquipmentElement equipmentElement,bool isBuying = false)`

### GetCostOfItemRosterElement
`public int GetCostOfItemRosterElement(ItemRosterElement itemRosterElement,InventoryLogic.InventorySide side)`

### AddTransferCommand
`public void AddTransferCommand(TransferCommand command)`

### AddTransferCommands
`public void AddTransferCommands(IEnumerable<TransferCommand> commands)`

### CheckItemRosterHasElement
`public bool CheckItemRosterHasElement(InventoryLogic.InventorySide side,ItemRosterElement rosterElement,int number)`

### IsEquipmentSide
`public static bool IsEquipmentSide(InventoryLogic.InventorySide side)`

### SlaughterItem
`public void SlaughterItem(ItemRosterElement itemRosterElement)`

### DonateItem
`public void DonateItem(ItemRosterElement itemRosterElement)`

### TransferOne
`public void TransferOne(ItemRosterElement itemRosterElement)`

### GetElementCountOnSide
`public int GetElementCountOnSide(InventoryLogic.InventorySide side)`

### GetElementsInInitialRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInInitialRoster(InventoryLogic.InventorySide side)`

### GetElementsInRoster
`public IReadOnlyList<ItemRosterElement> GetElementsInRoster(InventoryLogic.InventorySide side)`

### FindItemFromSide
`public ItemRosterElement? FindItemFromSide(InventoryLogic.InventorySide side,EquipmentElement item)`

### AfterResetDelegate
`public delegate void AfterResetDelegate(InventoryLogic inventoryLogic,bool fromCancel)`

### TotalAmountChangeDelegate
`public delegate void TotalAmountChangeDelegate(int newTotalAmount)`

### ProcessResultListDelegate
`public delegate void ProcessResultListDelegate(InventoryLogic inventoryLogic,List<TransferCommandResult> results)`

## See Also

- [Section index](../)
