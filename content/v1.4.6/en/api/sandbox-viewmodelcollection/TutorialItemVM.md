---
title: "TutorialItemVM"
description: "TutorialItemVM: a public class in SandBox.ViewModelCollection, inheriting ViewModel; 19 exposed members (3 methods, 14 properties, 0 fields). Source: SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs."
---
# TutorialItemVM

**Namespace:** `SandBox.ViewModelCollection.Tutorial`
**Module:** `SandBox.ViewModelCollection`
**Type:** `public class TutorialItemVM : ViewModel`
**File:** `SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs`

## Overview

TutorialItemVM lives in the SandBox.ViewModelCollection module, source file SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TutorialItemVM → ViewModel. It exposes 19 public/protected members: 3 methods, 14 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialItemVM is a top-level type in SandBox.ViewModelCollection, namespace differing from (SandBox.ViewModelCollection.Tutorial) the module directory; inheritance chain TutorialItemVM → ViewModel. The surface is property-led (properties 14/19, methods 3/19), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.ViewModelCollection/Tutorial/TutorialItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TutorialVM](../TutorialVM)
