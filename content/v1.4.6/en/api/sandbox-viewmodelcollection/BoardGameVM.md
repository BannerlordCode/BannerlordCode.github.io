---
title: "BoardGameVM"
description: "BoardGameVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 20 exposed members (8 methods, 11 properties, 0 fields). Source: SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs."
---
# BoardGameVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs`

## Overview

BoardGameVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoardGameVM → ViewModel. It exposes 20 public/protected members: 8 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.BoardGame) the module directory; inheritance chain BoardGameVM → ViewModel. The surface is property-led (properties 11/20, methods 8/20), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameVM` | `public BoardGameVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `Activate` | `public void Activate()` | method |
| `DiceRoll` | `public void DiceRoll(int roll)` | method |
| `SwitchTurns` | `public void SwitchTurns()` | method |
| `ExecuteRoll` | `public void ExecuteRoll()` | method |
| `ExecuteForfeit` | `public void ExecuteForfeit()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `Instructions` | `public BoardGameInstructionsVM Instructions` | property |
| `CanRoll` | `public bool CanRoll` | property |
| `IsPlayersTurn` | `public bool IsPlayersTurn` | property |
| `IsGameUsingDice` | `public bool IsGameUsingDice` | property |
| `DiceResult` | `public string DiceResult` | property |
| `RollDiceText` | `public string RollDiceText` | property |
| `TurnOwnerText` | `public string TurnOwnerText` | property |
| `BoardGameType` | `public string BoardGameType` | property |
| `CloseText` | `public string CloseText` | property |
| `ForfeitText` | `public string ForfeitText` | property |
| `SetRollDiceKey` | `public void SetRollDiceKey(HotKey key)` | method |
| `RollDiceKey` | `public InputKeyItemVM RollDiceKey` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameInstructionsVM](../BoardGameInstructionsVM)
- [same namespace BoardGameInstructionVM](../BoardGameInstructionVM)
