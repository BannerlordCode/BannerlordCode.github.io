---
title: "SettlementDailyProjectVM"
description: "SettlementDailyProjectVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting SettlementProjectVM; 10 exposed members (7 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs."
---
# SettlementDailyProjectVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementDailyProjectVM : SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs`

## Overview

SettlementDailyProjectVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs. It is a public class, implementing/inheriting SettlementProjectVM; the inheritance chain is SettlementDailyProjectVM → SettlementProjectVM → ViewModel. It exposes 10 public/protected members: 7 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementDailyProjectVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement) the module directory; inheritance chain SettlementDailyProjectVM → SettlementProjectVM → ViewModel. The surface is method-led (methods 7/10, properties 2/10), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementDailyProjectVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementDailyProjectVM` | `public SettlementDailyProjectVM(Action<SettlementProjectVM, bool>onSelection, Action<SettlementProjectVM>onSetAsCurrent, Action onResetCurrent, Building building, Settlement settlement) : base(onSelection, onSetAsCurrent, onResetCurrent, building, settlement)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RefreshProductionText` | `public override void RefreshProductionText()` | method |
| `ExecuteAddRemoveToQueue` | `public override void ExecuteAddRemoveToQueue()` | method |
| `ExecuteSetAsActiveDevelopment` | `public override void ExecuteSetAsActiveDevelopment()` | method |
| `ExecuteSetAsCurrent` | `public override void ExecuteSetAsCurrent()` | method |
| `ExecuteResetCurrent` | `public override void ExecuteResetCurrent()` | method |
| `ExecuteToggleSelected` | `public override void ExecuteToggleSelected()` | method |
| `IsDefault` | `public bool IsDefault` | property |
| `DefaultText` | `public string DefaultText` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SettlementProjectVM](../SettlementProjectVM)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
- [same namespace SettlementProjectSelectionVM](../SettlementProjectSelectionVM)
