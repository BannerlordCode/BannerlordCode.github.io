---
title: "GameTypeSelectionGroupVM"
description: "GameTypeSelectionGroupVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 12 exposed members (2 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs."
---
# GameTypeSelectionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class GameTypeSelectionGroupVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs`

## Overview

GameTypeSelectionGroupVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is GameTypeSelectionGroupVM → ViewModel. It exposes 12 public/protected members: 2 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameTypeSelectionGroupVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle) the module directory; inheritance chain GameTypeSelectionGroupVM → ViewModel. The surface is property-led (properties 9/12, methods 2/12), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/GameTypeSelectionGroupVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData)
- [same namespace CustomBattleData](../CustomBattleData)
- [same namespace CustomBattleHelper](../CustomBattleHelper)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide)
