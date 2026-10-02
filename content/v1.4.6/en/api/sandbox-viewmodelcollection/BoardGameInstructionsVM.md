---
title: "BoardGameInstructionsVM"
description: "BoardGameInstructionsVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 11 exposed members (3 methods, 7 properties, 0 fields). Source: SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs."
---
# BoardGameInstructionsVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameInstructionsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs`

## Overview

BoardGameInstructionsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoardGameInstructionsVM → ViewModel. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameInstructionsVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.BoardGame) the module directory; inheritance chain BoardGameInstructionsVM → ViewModel. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BoardGameInstructionsVM` | `public BoardGameInstructionsVM(CultureObject.BoardGameType boardGameType)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `ExecuteShowPrevious` | `public void ExecuteShowPrevious()` | method |
| `ExecuteShowNext` | `public void ExecuteShowNext()` | method |
| `IsPreviousButtonEnabled` | `public bool IsPreviousButtonEnabled` | property |
| `IsNextButtonEnabled` | `public bool IsNextButtonEnabled` | property |
| `InstructionsText` | `public string InstructionsText` | property |
| `PreviousText` | `public string PreviousText` | property |
| `NextText` | `public string NextText` | property |
| `CurrentPageText` | `public string CurrentPageText` | property |
| `MBBindingList` | `public MBBindingList<BoardGameInstructionVM>InstructionList` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BoardGameInstructionVM](../BoardGameInstructionVM)
- [same namespace BoardGameVM](../BoardGameVM)
