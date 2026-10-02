---
title: "TutorialVM"
description: "TutorialVM: a public class in SandBox.ViewModelCollection.Tutorial, inheriting ViewModel; 17 exposed members (5 methods, 11 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Tutorial/TutorialVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialVM

**Namespace:** `SandBox.ViewModelCollection.Tutorial`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TutorialVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TutorialVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tutorial/TutorialVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TutorialVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 17 public/protected members: 5 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Tutorial`, inheritance chain TutorialVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 11/17, methods 5/17), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tutorial/TutorialVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TutorialItemVM](../TutorialItemVM/)
