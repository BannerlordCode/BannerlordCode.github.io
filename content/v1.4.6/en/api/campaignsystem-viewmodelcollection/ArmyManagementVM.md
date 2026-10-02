---
title: "ArmyManagementVM"
description: "ArmyManagementVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 62 exposed members (11 methods, 49 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs."
---
# ArmyManagementVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs`

## Overview

ArmyManagementVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyManagementVM → ViewModel. It exposes 62 public/protected members: 11 methods, 49 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyManagementVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement) the module directory; inheritance chain ArmyManagementVM → ViewModel. The surface is property-led (properties 49/62, methods 11/62), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyManagementVM` | `public ArmyManagementVM(Action onClose)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `ExecuteDisbandArmy` | `public void ExecuteDisbandArmy()` | method |
| `ExecuteBoostCohesionManual` | `public void ExecuteBoostCohesionManual()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |
| `SortControllerVM` | `public ArmyManagementSortControllerVM SortControllerVM` | property |
| `BoostTitleText` | `public string BoostTitleText` | property |
| `DisbandArmyText` | `public string DisbandArmyText` | property |
| `CohesionBoostAmountText` | `public string CohesionBoostAmountText` | property |
| `DistanceText` | `public string DistanceText` | property |
| `CostText` | `public string CostText` | property |
| `OwnerText` | `public string OwnerText` | property |
| `StrengthText` | `public string StrengthText` | property |
| `ShipCountText` | `public string ShipCountText` | property |
| `LordsText` | `public string LordsText` | property |
| `TotalInfluence` | `public string TotalInfluence` | property |
| `TotalStrength` | `public int TotalStrength` | property |
| `TotalCost` | `public int TotalCost` | property |
| `TotalLords` | `public string TotalLords` | property |
| `CanCreateArmy` | `public bool CanCreateArmy` | property |
| `CanBoostCohesion` | `public bool CanBoostCohesion` | property |
| `CanDisbandArmy` | `public bool CanDisbandArmy` | property |
| `CanConfirm` | `public bool CanConfirm` | property |
| `CanAffordInfluenceCost` | `public bool CanAffordInfluenceCost` | property |
| `TitleText` | `public string TitleText` | property |
| `ClanText` | `public string ClanText` | property |
| `NameText` | `public string NameText` | property |
| `CancelText` | `public string CancelText` | property |
| `DoneText` | `public string DoneText` | property |
| `FocusedItem` | `public ArmyManagementItemVM FocusedItem` | property |
| `MBBindingList` | `public MBBindingList<ArmyManagementItemVM>PartyList` | property |
| `MBBindingList` | `public MBBindingList<ArmyManagementItemVM>PartiesInCart` | property |
| `TotalStrengthText` | `public string TotalStrengthText` | property |
| `TotalCostText` | `public string TotalCostText` | property |
| `TotalCostNumbersText` | `public string TotalCostNumbersText` | property |
| `CohesionText` | `public string CohesionText` | property |
| `Cohesion` | `public int Cohesion` | property |
| `CohesionBoostCost` | `public int CohesionBoostCost` | property |
| `PlayerHasArmy` | `public bool PlayerHasArmy` | property |
| `MoraleText` | `public string MoraleText` | property |
| `FoodText` | `public string FoodText` | property |
| `NewCohesion` | `public int NewCohesion` | property |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint` | property |
| `MoraleHint` | `public HintViewModel MoraleHint` | property |
| `BoostCohesionHint` | `public HintViewModel BoostCohesionHint` | property |
| `DisbandArmyHint` | `public HintViewModel DisbandArmyHint` | property |
| `DoneHint` | `public HintViewModel DoneHint` | property |
| `FoodHint` | `public HintViewModel FoodHint` | property |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotKey)` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotKey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotKey)` | method |
| `SetRemoveInputKey` | `public void SetRemoveInputKey(HotKey hotKey)` | method |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey` | property |
| `IComparer` | `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>` | property |
| `IComparer` | `public class ManagementItemComparer : IComparer<ArmyManagementItemVM>` | nested type |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [same namespace ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM)
- [same namespace ArmyManagementItemVM](../ArmyManagementItemVM)
- [same namespace ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)
