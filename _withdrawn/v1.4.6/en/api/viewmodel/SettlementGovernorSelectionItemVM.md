---
title: "SettlementGovernorSelectionItemVM"
description: "SettlementGovernorSelectionItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement, inheriting ViewModel; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementGovernorSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class SettlementGovernorSelectionItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

SettlementGovernorSelectionItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is SettlementGovernorSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementGovernorSelectionItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement`, inheritance chain SettlementGovernorSelectionItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementGovernorSelectionItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Governor` | `public Hero Governor` | property |
| `SettlementGovernorSelectionItemVM` | `public SettlementGovernorSelectionItemVM(Hero governor, Action<SettlementGovernorSelectionItemVM>onSelection)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnSelection` | `public void OnSelection()` | method |
| `Visual` | `public CharacterImageIdentifierVM Visual` | property |
| `GovernorHint` | `public BasicTooltipViewModel GovernorHint` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace SettlementBuildingProjectVM](../SettlementBuildingProjectVM/)
- [same namespace SettlementDailyProjectVM](../SettlementDailyProjectVM/)
- [same namespace SettlementGovernorSelectionVM](../SettlementGovernorSelectionVM/)
- [same namespace SettlementProjectSelectionVM](../SettlementProjectSelectionVM/)
