---
title: "ArmyMenuOverlayVM"
description: "ArmyMenuOverlayVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting GameMenuOverlay; 20 exposed members (6 methods, 13 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs."
---
# ArmyMenuOverlayVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class ArmyMenuOverlayVM : GameMenuOverlay`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs`

## Overview

ArmyMenuOverlayVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs. It is a public class, implementing/inheriting GameMenuOverlay; the inheritance chain is ArmyMenuOverlayVM → GameMenuOverlay → ViewModel. It exposes 20 public/protected members: 6 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ArmyMenuOverlayVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay) the module directory; inheritance chain ArmyMenuOverlayVM → GameMenuOverlay → ViewModel. The surface is property-led (properties 13/20, methods 6/20), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/ArmyMenuOverlayVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ArmyMenuOverlayVM` | `public ArmyMenuOverlayVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ExecuteOnSetAsActiveContextMenuItem` | `protected override void ExecuteOnSetAsActiveContextMenuItem(GameMenuPartyItemVM troop)` | method |
| `OnFrameTick` | `public override void OnFrameTick(float dt)` | method |
| `Refresh` | `public sealed override void Refresh()` | method |
| `ExecuteOpenArmyManagement` | `public void ExecuteOpenArmyManagement()` | method |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification` | property |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint` | property |
| `Cohesion` | `public int Cohesion` | property |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled` | property |
| `CanManageArmy` | `public bool CanManageArmy` | property |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader` | property |
| `ManCountText` | `public string ManCountText` | property |
| `Food` | `public int Food` | property |
| `MBBindingList` | `public MBBindingList<GameMenuPartyItemVM>PartyList` | property |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint` | property |
| `ManCountHint` | `public BasicTooltipViewModel ManCountHint` | property |
| `FoodHint` | `public BasicTooltipViewModel FoodHint` | property |
| `MBBindingList` | `public MBBindingList<StringItemWithHintVM>IssueList` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface GameMenuOverlay](../GameMenuOverlay)
- [same namespace EncounterMenuOverlayVM](../EncounterMenuOverlayVM)
- [same namespace GameMenuOverlay](../GameMenuOverlay)
- [same namespace GameMenuOverlayActionVM](../GameMenuOverlayActionVM)
- [same namespace GameMenuOverlayFactory](../GameMenuOverlayFactory)
