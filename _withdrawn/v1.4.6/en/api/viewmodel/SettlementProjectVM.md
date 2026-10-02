---
title: "SettlementProjectVM"
description: "SettlementProjectVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement, inheriting ViewModel; 19 exposed members (7 methods, 11 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public abstract class SettlementProjectVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SettlementProjectVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs. It is a public class (abstract), implementing/inheriting ViewModel; the inheritance chain is SettlementProjectVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 7 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementProjectVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`, inheritance chain SettlementProjectVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/19, methods 7/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsDaily` | `public bool IsDaily` | property |
| `Building` | `public Building Building` | property |
| `SettlementProjectVM` | `protected SettlementProjectVM(Action<SettlementProjectVM, bool>onSelection, Action<SettlementProjectVM>onSetAsCurrent, Action onResetCurrent, Building building, Settlement settlement)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshProductionText` | `public virtual void RefreshProductionText()` | method |
| `ExecuteAddRemoveToQueue` | `public abstract void ExecuteAddRemoveToQueue();` | method |
| `ExecuteSetAsActiveDevelopment` | `public abstract void ExecuteSetAsActiveDevelopment();` | method |
| `ExecuteSetAsCurrent` | `public abstract void ExecuteSetAsCurrent();` | method |
| `ExecuteResetCurrent` | `public abstract void ExecuteResetCurrent();` | method |
| `ExecuteToggleSelected` | `public abstract void ExecuteToggleSelected();` | method |
| `VisualCode` | `public string VisualCode` | property |
| `ProductionText` | `public string ProductionText` | property |
| `CurrentPositiveEffectText` | `public string CurrentPositiveEffectText` | property |
| `NextPositiveEffectText` | `public string NextPositiveEffectText` | property |
| `ProductionCostText` | `public string ProductionCostText` | property |
| `IsCurrentActiveProject` | `public bool IsCurrentActiveProject` | property |
| `Progress` | `public int Progress` | property |
| `Name` | `public string Name` | property |
| `Explanation` | `public string Explanation` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
