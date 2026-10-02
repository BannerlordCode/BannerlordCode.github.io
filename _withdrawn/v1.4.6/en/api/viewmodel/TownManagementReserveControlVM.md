---
title: "TownManagementReserveControlVM"
description: "TownManagementReserveControlVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement, inheriting ViewModel; 12 exposed members (3 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TownManagementReserveControlVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class TownManagementReserveControlVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

TownManagementReserveControlVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TownManagementReserveControlVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 3 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TownManagementReserveControlVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`, inheritance chain TownManagementReserveControlVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/12, methods 3/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/TownManagementReserveControlVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TownManagementReserveControlVM` | `public TownManagementReserveControlVM(Settlement settlement, Action onReserveUpdated)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteConfirm` | `public void ExecuteConfirm()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `CurrentReserveAmount` | `public int CurrentReserveAmount` | property |
| `CurrentGivenAmount` | `public int CurrentGivenAmount` | property |
| `MaxReserveAmount` | `public int MaxReserveAmount` | property |
| `ReserveBonusText` | `public string ReserveBonusText` | property |
| `ReserveText` | `public string ReserveText` | property |
| `CurrentReserveText` | `public string CurrentReserveText` | property |
| `AddGoldToReserveHint` | `public HintViewModel AddGoldToReserveHint` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM/)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
