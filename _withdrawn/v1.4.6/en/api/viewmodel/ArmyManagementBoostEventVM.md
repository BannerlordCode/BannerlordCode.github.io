---
title: "ArmyManagementBoostEventVM"
description: "ArmyManagementBoostEventVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement, inheriting ViewModel; 11 exposed members (1 methods, 8 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ArmyManagementBoostEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

ArmyManagementBoostEventVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyManagementBoostEventVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 1 methods, 8 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyManagementBoostEventVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`, inheritance chain ArmyManagementBoostEventVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 8/11, methods 1/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrencyToPayForCohesion` | `public ArmyManagementBoostEventVM.BoostCurrency CurrencyToPayForCohesion` | property |
| `ArmyManagementBoostEventVM` | `public ArmyManagementBoostEventVM(ArmyManagementBoostEventVM.BoostCurrency currencyToPayForCohesion, int amountToPay, int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM>onExecuteEvent)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `AmountToPay` | `public int AmountToPay` | property |
| `CurrencyType` | `public int CurrencyType` | property |
| `AmountOfCohesionToGain` | `public int AmountOfCohesionToGain` | property |
| `SpendText` | `public string SpendText` | property |
| `GainText` | `public string GainText` | property |
| `BoostCurrency` | `public enum BoostCurrency` | property |
| `BoostCurrency` | `public enum BoostCurrency` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent/)
- [same namespace ArmyManagementItemVM](../ArmyManagementItemVM/)
- [same namespace ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM/)
- [same namespace ArmyManagementVM](../ArmyManagementVM/)
