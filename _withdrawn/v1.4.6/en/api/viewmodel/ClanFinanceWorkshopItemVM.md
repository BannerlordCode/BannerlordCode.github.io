---
title: "ClanFinanceWorkshopItemVM"
description: "ClanFinanceWorkshopItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance, inheriting ClanFinanceIncomeItemBaseVM; 27 exposed members (7 methods, 19 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinanceWorkshopItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ClanFinanceWorkshopItemVM : ClanFinanceIncomeItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ClanFinanceWorkshopItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs. It is a public class, implementing/inheriting ClanFinanceIncomeItemBaseVM; the inheritance chain is ClanFinanceWorkshopItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 27 public/protected members: 7 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinanceWorkshopItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.ClanFinance`, inheritance chain ClanFinanceWorkshopItemVM → ClanFinanceIncomeItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 19/27, methods 7/27), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanFinance/ClanFinanceWorkshopItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ClanFinanceIncomeItemBaseVM](../ClanFinanceIncomeItemBaseVM/)
- [same namespace ClanFinanceAlleyItemVM](../ClanFinanceAlleyItemVM/)
- [same namespace ClanFinanceCommonAreaItemVM](../ClanFinanceCommonAreaItemVM/)
- [same namespace ClanFinanceMercenaryItemVM](../ClanFinanceMercenaryItemVM/)
- [same namespace ClanFinanceTownItemVM](../ClanFinanceTownItemVM/)
