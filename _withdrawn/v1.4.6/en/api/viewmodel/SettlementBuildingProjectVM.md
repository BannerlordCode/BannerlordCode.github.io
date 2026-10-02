---
title: "SettlementBuildingProjectVM"
description: "SettlementBuildingProjectVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement, inheriting SettlementProjectVM; 18 exposed members (7 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementBuildingProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SettlementBuildingProjectVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs. It is a public class, implementing/inheriting SettlementProjectVM; the inheritance chain is SettlementBuildingProjectVM → SettlementProjectVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 18 public/protected members: 7 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementBuildingProjectVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`, inheritance chain SettlementBuildingProjectVM → SettlementProjectVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/18, methods 7/18), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SettlementProjectVM](../SettlementProjectVM/)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
- [same namespace SettlementProjectSelectionVM](../SettlementProjectSelectionVM/)
