---
title: "CharacterCreationStageViewBase"
description: "CharacterCreationStageViewBase: a public class in SandBox.View, inheriting ICharacterCreationStageListener; 15 exposed members (13 methods, 0 properties, 1 fields). Source: SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs."
---
# CharacterCreationStageViewBase

**Namespace:** `SandBox.View.CharacterCreation`
**Module:** `SandBox.View`
**Type:** `public abstract class CharacterCreationStageViewBase : ICharacterCreationStageListener`
**File:** `SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs`

## Overview

CharacterCreationStageViewBase lives in the SandBox.View module, source file SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs. It is a public class (abstract), implementing/inheriting ICharacterCreationStageListener; the inheritance chain is CharacterCreationStageViewBase → ICharacterCreationStageListener. It exposes 15 public/protected members: 13 methods, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationStageViewBase is a top-level type in SandBox.View, namespace differing from (SandBox.View.CharacterCreation) the module directory; inheritance chain CharacterCreationStageViewBase → ICharacterCreationStageListener. The surface is method-led (methods 13/15, properties 0/15), so it mostly exposes operations. ICharacterCreationStageListener on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.View/CharacterCreation/CharacterCreationStageViewBase.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationStageViewBase` | `protected CharacterCreationStageViewBase(ControlCharacterCreationStage affirmativeAction, ControlCharacterCreationStage negativeAction, ControlCharacterCreationStage refreshAction, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction)` | constructor |
| `SetGenericScene` | `public virtual void SetGenericScene(Scene scene)` | method |
| `OnRefresh` | `protected virtual void OnRefresh()` | method |
| `IEnumerable` | `public abstract IEnumerable<ScreenLayer>GetLayers();` | method |
| `NextStage` | `public abstract void NextStage();` | method |
| `PreviousStage` | `public abstract void PreviousStage();` | method |
| `OnFinalize` | `protected virtual void OnFinalize()` | method |
| `Tick` | `public virtual void Tick(float dt)` | method |
| `GetVirtualStageCount` | `public abstract int GetVirtualStageCount();` | method |
| `GoToIndex` | `public virtual void GoToIndex(int index)` | method |
| `LoadEscapeMenuMovie` | `public abstract void LoadEscapeMenuMovie();` | method |
| `ReleaseEscapeMenuMovie` | `public abstract void ReleaseEscapeMenuMovie();` | method |
| `HandleEscapeMenu` | `public void HandleEscapeMenu(CharacterCreationStageViewBase view, ScreenLayer screenLayer)` | method |
| `List` | `public List<EscapeMenuItemVM>GetEscapeMenuItems(CharacterCreationStageViewBase view)` | method |
| `_cameraPosition` | `protected readonly Vec3 _cameraPosition` | field |

## See Also

- [↑ sandbox-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationScreen](../CharacterCreationScreen)
- [same namespace CharacterCreationStageViewAttribute](../CharacterCreationStageViewAttribute)
