---
title: "GameTypeSelectionGroupVM"
description: "GameTypeSelectionGroupVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle, inheriting ViewModel; 12 exposed members (2 methods, 9 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameTypeSelectionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class GameTypeSelectionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

GameTypeSelectionGroupVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameTypeSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 2 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameTypeSelectionGroupVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`, inheritance chain GameTypeSelectionGroupVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 9/12, methods 2/12), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SelectedGameTypeString` | `public string SelectedGameTypeString` | property |
| `SelectedPlayerType` | `public CustomBattlePlayerType SelectedPlayerType` | property |
| `SelectedPlayerSide` | `public CustomBattlePlayerSide SelectedPlayerSide` | property |
| `GameTypeSelectionGroupVM` | `public GameTypeSelectionGroupVM(Action<CustomBattlePlayerType>onPlayerTypeChange, Action<string>onGameTypeChange)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `RandomizeAll` | `public void RandomizeAll()` | method |
| `SelectorVM` | `public SelectorVM<GameTypeItemVM>GameTypeSelection` | property |
| `SelectorVM` | `public SelectorVM<PlayerTypeItemVM>PlayerTypeSelection` | property |
| `SelectorVM` | `public SelectorVM<PlayerSideItemVM>PlayerSideSelection` | property |
| `GameTypeText` | `public string GameTypeText` | property |
| `PlayerTypeText` | `public string PlayerTypeText` | property |
| `PlayerSideText` | `public string PlayerSideText` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData/)
- [same namespace CustomBattleData](../CustomBattleData/)
- [same namespace CustomBattleHelper](../CustomBattleHelper/)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide/)
