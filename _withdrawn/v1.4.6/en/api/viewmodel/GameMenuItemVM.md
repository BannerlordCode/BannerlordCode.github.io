---
title: "GameMenuItemVM"
description: "GameMenuItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu, inheriting ViewModel; 25 exposed members (6 methods, 17 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class GameMenuItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

GameMenuItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameMenuItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 25 public/protected members: 6 methods, 17 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu`, inheritance chain GameMenuItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 17/25, methods 6/25), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/GameMenuItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OptionID` | `public string OptionID` | property |
| `GameMenuOption` | `public GameMenuOption GameMenuOption` | property |
| `GameMenuItemVM` | `public GameMenuItemVM()` | constructor |
| `InitializeWith` | `public void InitializeWith(in GameMenuItemVM.GameMenuItemCreationData data)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteAction` | `public void ExecuteAction()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Refresh` | `public void Refresh()` | method |
| `UpdateWith` | `public void UpdateWith(GameMenuItemVM newItem)` | method |
| `MBBindingList` | `public MBBindingList<QuestMarkerVM>Quests` | property |
| `OptionLeaveType` | `public string OptionLeaveType` | property |
| `ItemType` | `public int ItemType` | property |
| `IsWaitActive` | `public bool IsWaitActive` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | property |
| `ItemHint` | `public HintViewModel ItemHint` | property |
| `QuestHint` | `public HintViewModel QuestHint` | property |
| `IssueHint` | `public HintViewModel IssueHint` | property |
| `GameMenuStringId` | `public string GameMenuStringId` | property |
| `Item` | `public string Item` | property |
| `BattleSize` | `public int BattleSize` | property |
| `IsNavalBattle` | `public bool IsNavalBattle` | property |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | property |
| `GameMenuItemCreationData` | `public readonly struct GameMenuItemCreationData` | property |
| `GameMenuItemCreationData` | `public readonly struct GameMenuItemCreationData` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenuItemProgressVM](../GameMenuItemProgressVM/)
- [same namespace GameMenuPlunderItemVM](../GameMenuPlunderItemVM/)
- [same namespace GameMenuVM](../GameMenuVM/)
