---
title: "SettlementGovernorSelectionItemVM"
description: "SettlementGovernorSelectionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs."
---
# SettlementGovernorSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementGovernorSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs`

## Overview

SettlementGovernorSelectionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementGovernorSelectionItemVM → ViewModel. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementGovernorSelectionItemVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement) the module directory; inheritance chain SettlementGovernorSelectionItemVM → ViewModel. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Governor` | `public Hero Governor` | property |
| `SettlementGovernorSelectionItemVM` | `public SettlementGovernorSelectionItemVM(Hero governor, Action<SettlementGovernorSelectionItemVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelection` | `public void OnSelection()` | method |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `GovernorHint` | `public BasicTooltipViewModel GovernorHint` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM)
- [same namespace SettlementProjectSelectionVM](../SettlementProjectSelectionVM)
