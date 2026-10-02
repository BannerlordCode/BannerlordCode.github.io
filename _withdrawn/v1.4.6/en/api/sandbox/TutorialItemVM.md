---
title: "TutorialItemVM"
description: "TutorialItemVM: a public class in SandBox.ViewModelCollection.Tutorial, inheriting ViewModel; 19 exposed members (3 methods, 14 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialItemVM

**Namespace:** `SandBox.ViewModelCollection.Tutorial`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TutorialItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

TutorialItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TutorialItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 19 public/protected members: 3 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialItemVM lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.ViewModelCollection.Tutorial`, inheritance chain TutorialItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 14/19, methods 3/19), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Action` | `public Action<bool>SetIsActive` | property |
| `TutorialItemVM` | `public TutorialItemVM()` | constructor |
| `Init` | `public void Init(string tutorialTypeId, bool requiresMouse, Action onFinishTutorial)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CloseTutorialPanel` | `public void CloseTutorialPanel()` | method |
| `DisableCurrentTutorialHint` | `public HintViewModel DisableCurrentTutorialHint` | property |
| `AreTutorialsEnabled` | `public bool AreTutorialsEnabled` | property |
| `TutorialsEnabledText` | `public string TutorialsEnabledText` | property |
| `TutorialTitleText` | `public string TutorialTitleText` | property |
| `DisableAllTutorialsHint` | `public HintViewModel DisableAllTutorialsHint` | property |
| `TitleText` | `public string TitleText` | property |
| `StepCountText` | `public string StepCountText` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `SoundId` | `public string SoundId` | property |
| `CenterImage` | `public ImageIdentifierVM CenterImage` | property |
| `RequiresMouse` | `public bool RequiresMouse` | property |
| `ItemPlacements` | `public enum ItemPlacements` | property |
| `ItemPlacements` | `public enum ItemPlacements` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TutorialVM](../TutorialVM/)
