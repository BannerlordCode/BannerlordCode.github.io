---
title: "InventoryTradeVM"
description: "InventoryTradeVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 30 exposed members (8 methods, 20 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryTradeVM.cs."
---
# InventoryTradeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class InventoryTradeVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryTradeVM.cs`

## Overview

InventoryTradeVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryTradeVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is InventoryTradeVM → ViewModel. It exposes 30 public/protected members: 8 methods, 20 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InventoryTradeVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Inventory) the module directory; inheritance chain InventoryTradeVM → ViewModel. The surface is property-led (properties 20/30, methods 8/30), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/InventoryTradeVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RemoveZeroCounts;` | `public static event Action RemoveZeroCounts;` | event |
| `InventoryTradeVM` | `public InventoryTradeVM(InventoryLogic inventoryLogic, ItemRosterElement itemRoster, InventoryLogic.InventorySide side, Action<int, bool>onApplyTransaction)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateItemData` | `public void UpdateItemData(ItemRosterElement itemRoster, InventoryLogic.InventorySide side, bool forceUpdate = true)` | method |
| `GetAveragePrice` | `public string GetAveragePrice(int totalPrice, int lastPrice, bool isBuying)` | method |
| `ExecuteIncreaseThisStock` | `public void ExecuteIncreaseThisStock()` | method |
| `ExecuteIncreaseOtherStock` | `public void ExecuteIncreaseOtherStock()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteApplyTransaction` | `public void ExecuteApplyTransaction()` | method |
| `ExecuteRemoveZeroCounts` | `public void ExecuteRemoveZeroCounts()` | method |
| `ThisStockLbl` | `public string ThisStockLbl` | property |
| `OtherStockLbl` | `public string OtherStockLbl` | property |
| `PieceLbl` | `public string PieceLbl` | property |
| `AveragePriceLbl` | `public string AveragePriceLbl` | property |
| `ApplyExchangeHint` | `public HintViewModel ApplyExchangeHint` | property |
| `IsExchangeAvailable` | `public bool IsExchangeAvailable` | property |
| `PriceChange` | `public string PriceChange` | property |
| `PieceChange` | `public string PieceChange` | property |
| `AveragePrice` | `public string AveragePrice` | property |
| `ThisStock` | `public int ThisStock` | property |
| `InitialThisStock` | `public int InitialThisStock` | property |
| `OtherStock` | `public int OtherStock` | property |
| `InitialOtherStock` | `public int InitialOtherStock` | property |
| `TotalStock` | `public int TotalStock` | property |
| `IsThisStockIncreasable` | `public bool IsThisStockIncreasable` | property |
| `IsOtherStockIncreasable` | `public bool IsOtherStockIncreasable` | property |
| `IsTrading` | `public bool IsTrading` | property |
| `IsTradeable` | `public bool IsTradeable` | property |
| `TakeHint` | `public HintViewModel TakeHint` | property |
| `GiveHint` | `public HintViewModel GiveHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace InventoryCharacterSelectorItemVM](../InventoryCharacterSelectorItemVM)
- [same namespace InventoryEquipmentTypeChangedEvent](../InventoryEquipmentTypeChangedEvent)
- [same namespace InventoryFilterChangedEvent](../InventoryFilterChangedEvent)
- [same namespace InventoryItemInspectedEvent](../InventoryItemInspectedEvent)
