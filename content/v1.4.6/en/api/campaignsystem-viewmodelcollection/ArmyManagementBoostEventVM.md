---
title: "ArmyManagementBoostEventVM"
description: "ArmyManagementBoostEventVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 11 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs."
---
# ArmyManagementBoostEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs`

## Overview

ArmyManagementBoostEventVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is ArmyManagementBoostEventVM → ViewModel. It exposes 11 public/protected members: 1 methods, 8 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyManagementBoostEventVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement) the module directory; inheritance chain ArmyManagementBoostEventVM → ViewModel. The surface is property-led (properties 8/11, methods 1/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCohesionBoostedByPlayerEvent](../ArmyCohesionBoostedByPlayerEvent)
- [same namespace ArmyManagementItemVM](../ArmyManagementItemVM)
- [same namespace ArmyManagementSortControllerVM](../ArmyManagementSortControllerVM)
- [same namespace ArmyManagementVM](../ArmyManagementVM)
