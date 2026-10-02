---
title: "TutorialVM"
description: "TutorialVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 17 exposed members (5 methods, 11 properties, 0 fields). Source: SandBox.ViewModelCollection/Tutorial/TutorialVM.cs."
---
# TutorialVM

**Namespace:** `SandBox.ViewModelCollection.Tutorial`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TutorialVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialVM.cs`

## Overview

TutorialVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tutorial/TutorialVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TutorialVM → ViewModel. It exposes 17 public/protected members: 5 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Tutorial) the module directory; inheritance chain TutorialVM → ViewModel. The surface is property-led (properties 11/17, methods 5/17), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tutorial/TutorialVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static TutorialVM Instance` | property |
| `TutorialVM` | `public TutorialVM(Action onTutorialDisabled)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `SetCurrentTutorial` | `public void SetCurrentTutorial(TutorialItemVM.ItemPlacements placement, string tutorialTypeId, bool requiresMouse)` | method |
| `Tick` | `public void Tick(float dt)` | method |
| `CloseTutorialStep` | `public void CloseTutorialStep(bool finalizeAllSteps = false)` | method |
| `FinalizeTutorial` | `public void FinalizeTutorial()` | method |
| `IsVisible` | `public bool IsVisible` | property |
| `LeftItem` | `public TutorialItemVM LeftItem` | property |
| `RightItem` | `public TutorialItemVM RightItem` | property |
| `BottomItem` | `public TutorialItemVM BottomItem` | property |
| `TopItem` | `public TutorialItemVM TopItem` | property |
| `LeftBottomItem` | `public TutorialItemVM LeftBottomItem` | property |
| `LeftTopItem` | `public TutorialItemVM LeftTopItem` | property |
| `RightBottomItem` | `public TutorialItemVM RightBottomItem` | property |
| `RightTopItem` | `public TutorialItemVM RightTopItem` | property |
| `CenterItem` | `public TutorialItemVM CenterItem` | property |

## See Also

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TutorialItemVM](../TutorialItemVM)
