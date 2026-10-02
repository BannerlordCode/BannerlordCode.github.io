---
title: "BoardGameVM"
description: "BoardGameVM: a public class in SandBox.ViewModelCollection.BoardGame, inheriting ViewModel; 20 exposed members (8 methods, 11 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoardGameVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 20 public/protected members: 8 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.BoardGame`, inheritance chain BoardGameVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/20, methods 8/20), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/BoardGame/BoardGameVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoardGameInstructionsVM](../BoardGameInstructionsVM/)
- [same namespace BoardGameInstructionVM](../BoardGameInstructionVM/)
