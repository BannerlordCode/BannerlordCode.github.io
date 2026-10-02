---
title: "SettlementBuildingProjectVM"
description: "SettlementBuildingProjectVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SettlementProjectVM; 18 exposed members (7 methods, 10 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs."
---
# SettlementBuildingProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs`

## Overview

SettlementBuildingProjectVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs. It is a public class, implementing/inheriting SettlementProjectVM; the inheritance chain is SettlementBuildingProjectVM → SettlementProjectVM → ViewModel. It exposes 18 public/protected members: 7 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementBuildingProjectVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement) the module directory; inheritance chain SettlementBuildingProjectVM → SettlementProjectVM → ViewModel. The surface is property-led (properties 10/18, methods 7/18), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementBuildingProjectVM` | `public SettlementBuildingProjectVM(Action<SettlementProjectVM, bool>onSelection, Action<SettlementProjectVM>onSetAsCurrent, Action onResetCurrent, Building building, Settlement settlement) : base(onSelection, onSetAsCurrent, onResetCurrent, building, settlement)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshProductionText` | `public override void RefreshProductionText()` | method |
| `ExecuteAddRemoveToQueue` | `public override void ExecuteAddRemoveToQueue()` | method |
| `ExecuteSetAsActiveDevelopment` | `public override void ExecuteSetAsActiveDevelopment()` | method |
| `ExecuteSetAsCurrent` | `public override void ExecuteSetAsCurrent()` | method |
| `ExecuteResetCurrent` | `public override void ExecuteResetCurrent()` | method |
| `ExecuteToggleSelected` | `public override void ExecuteToggleSelected()` | method |
| `IsSelected` | `public bool IsSelected` | property |
| `DevelopmentLevelText` | `public string DevelopmentLevelText` | property |
| `Level` | `public int Level` | property |
| `MaxLevel` | `public int MaxLevel` | property |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex` | property |
| `IsInQueue` | `public bool IsInQueue` | property |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText` | property |
| `CanBuild` | `public bool CanBuild` | property |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint` | property |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementProjectVM](../SettlementProjectVM)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
- [same namespace SettlementProjectSelectionVM](../SettlementProjectSelectionVM)
