---
title: "SettlementProjectSelectionVM"
description: "SettlementProjectSelectionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement, inheriting ViewModel; 14 exposed members (3 methods, 10 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectSelectionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementProjectSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementProjectSelectionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectSelectionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SettlementProjectSelectionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementProjectSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 3 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementProjectSelectionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`, inheritance chain SettlementProjectSelectionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 10/14, methods 3/14), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectSelectionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `List` | `public List<Building>LocalDevelopmentList` | property |
| `SettlementProjectSelectionVM` | `public SettlementProjectSelectionVM(Settlement settlement, Action onAnyChangeInQueue)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Refresh` | `public void Refresh()` | method |
| `ExecuteChangeQueueOrder` | `public void ExecuteChangeQueueOrder(SettlementBuildingProjectVM project, int index, string targetTag)` | method |
| `ProjectsText` | `public string ProjectsText` | property |
| `QueueText` | `public string QueueText` | property |
| `DailyDefaultsText` | `public string DailyDefaultsText` | property |
| `DailyDefaultsExplanationText` | `public string DailyDefaultsExplanationText` | property |
| `CurrentSelectedProject` | `public SettlementProjectVM CurrentSelectedProject` | property |
| `CurrentDailyDefault` | `public SettlementDailyProjectVM CurrentDailyDefault` | property |
| `MBBindingList` | `public MBBindingList<SettlementBuildingProjectVM>AvailableProjects` | property |
| `MBBindingList` | `public MBBindingList<SettlementBuildingProjectVM>CurrentDevelopmentQueue` | property |
| `MBBindingList` | `public MBBindingList<SettlementDailyProjectVM>DailyDefaultList` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
