---
title: "ClanFinanceWorkshopItemVM"
description: "ClanFinanceWorkshopItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ClanFinanceIncomeItemBaseVM; 27 exposed members (7 methods, 19 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs."
---
# ClanFinanceWorkshopItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceWorkshopItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs`

## Overview

ClanFinanceWorkshopItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceWorkshopItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. It exposes 27 public/protected members: 7 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceWorkshopItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance) the module directory; inheritance chain ClanFinanceWorkshopItemVM → ClanFinanceIncomeItemBaseVM → ViewModel. The surface is property-led (properties 19/27, methods 7/27), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Workshop` | `public Workshop Workshop` | property |
| `ClanFinanceWorkshopItemVM` | `public ClanFinanceWorkshopItemVM(Workshop workshop, Action<ClanFinanceWorkshopItemVM>onSelection, Action onRefresh, Action<ClanCardSelectionInfo>openCardSelectionPopup) : base(null, onRefresh)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteToggleWarehouseUsage` | `public void ExecuteToggleWarehouseUsage()` | method |
| `PopulateStatsList` | `protected override void PopulateStatsList()` | method |
| `ExecuteBeginWorkshopHint` | `public void ExecuteBeginWorkshopHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |
| `OnStoreOutputInWarehousePercentageUpdated` | `public void OnStoreOutputInWarehousePercentageUpdated(SelectorVM<WorkshopPercentageSelectorItemVM>selector)` | method |
| `ExecuteManageWorkshop` | `public void ExecuteManageWorkshop()` | method |
| `UseWarehouseAsInputHint` | `public HintViewModel UseWarehouseAsInputHint` | property |
| `StoreOutputPercentageHint` | `public HintViewModel StoreOutputPercentageHint` | property |
| `ManageWorkshopHint` | `public HintViewModel ManageWorkshopHint` | property |
| `InputWarehouseCountsTooltip` | `public BasicTooltipViewModel InputWarehouseCountsTooltip` | property |
| `OutputWarehouseCountsTooltip` | `public BasicTooltipViewModel OutputWarehouseCountsTooltip` | property |
| `WorkshopTypeId` | `public string WorkshopTypeId` | property |
| `InputsText` | `public string InputsText` | property |
| `OutputsText` | `public string OutputsText` | property |
| `InputProducts` | `public string InputProducts` | property |
| `OutputProducts` | `public string OutputProducts` | property |
| `UseWarehouseAsInputText` | `public string UseWarehouseAsInputText` | property |
| `StoreOutputPercentageText` | `public string StoreOutputPercentageText` | property |
| `WarehouseCapacityText` | `public string WarehouseCapacityText` | property |
| `WarehouseCapacityValue` | `public string WarehouseCapacityValue` | property |
| `ReceiveInputFromWarehouse` | `public bool ReceiveInputFromWarehouse` | property |
| `WarehouseInputAmount` | `public int WarehouseInputAmount` | property |
| `WarehouseOutputAmount` | `public int WarehouseOutputAmount` | property |
| `SelectorVM` | `public SelectorVM<WorkshopPercentageSelectorItemVM>WarehousePercentageSelector` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM)
