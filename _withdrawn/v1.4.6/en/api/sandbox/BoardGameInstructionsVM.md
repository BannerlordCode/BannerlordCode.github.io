---
title: "BoardGameInstructionsVM"
description: "BoardGameInstructionsVM: a public class in SandBox.ViewModelCollection.BoardGame, inheriting ViewModel; 11 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameInstructionsVM

**Namespace:** `SandBox.ViewModelCollection.BoardGame`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class BoardGameInstructionsVM : ViewModel`
**File:** `SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameInstructionsVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is BoardGameInstructionsVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameInstructionsVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.BoardGame`, inheritance chain BoardGameInstructionsVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/BoardGame/BoardGameInstructionsVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BoardGameInstructionVM](../BoardGameInstructionVM/)
- [same namespace BoardGameVM](../BoardGameVM/)
