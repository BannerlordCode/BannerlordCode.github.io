---
title: "BoardGameInstructionVM"
description: "BoardGameInstructionVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs."
---
# BoardGameInstructionVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameInstructionVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs`

## Overview

BoardGameInstructionVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoardGameInstructionVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameInstructionVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.BoardGame) the module directory; inheritance chain BoardGameInstructionVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/BoardGame/BoardGameInstructionVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameInstructionVM` | `public BoardGameInstructionVM(CultureObject.BoardGameType game, int instructionIndex)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `IsEnabled` | `public bool IsEnabled` | property |
| `TitleText` | `public string TitleText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `GameType` | `public string GameType` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameInstructionsVM](../BoardGameInstructionsVM)
- [same namespace BoardGameVM](../BoardGameVM)
