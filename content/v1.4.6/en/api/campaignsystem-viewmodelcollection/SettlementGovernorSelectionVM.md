---
title: "SettlementGovernorSelectionVM"
description: "SettlementGovernorSelectionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionVM.cs."
---
# SettlementGovernorSelectionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementGovernorSelectionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionVM.cs`

## Overview

SettlementGovernorSelectionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementGovernorSelectionVM → ViewModel. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementGovernorSelectionVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement) the module directory; inheritance chain SettlementGovernorSelectionVM → ViewModel. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SettlementGovernorSelectionVM` | `public SettlementGovernorSelectionVM(Settlement settlement, Action<Hero>onDone)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `MBBindingList` | `public MBBindingList<SettlementGovernorSelectionItemVM>AvailableGovernors` | property |
| `CurrentGovernorIndex` | `public int CurrentGovernorIndex` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [same namespace SettlementGovernorSelectionItemVM](../SettlementGovernorSelectionItemVM)
- [same namespace SettlementProjectSelectionVM](../SettlementProjectSelectionVM)
