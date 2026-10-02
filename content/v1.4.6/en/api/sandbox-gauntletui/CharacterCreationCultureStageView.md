---
title: "CharacterCreationCultureStageView"
description: "CharacterCreationCultureStageView: a public class in SandBox.GauntletUI, inheriting CharacterCreationStageViewBase; 9 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs."
---
# CharacterCreationCultureStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationCultureStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs`

## Overview

CharacterCreationCultureStageView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationCultureStageView → CharacterCreationStageViewBase. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCultureStageView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.CharacterCreation) the module directory; inheritance chain CharacterCreationCultureStageView → CharacterCreationStageViewBase. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. CharacterCreationStageViewBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterCreationCultureStageView` | `public CharacterCreationCultureStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction) : base(affirmativeAction, negativeAction, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `NextStage` | `public override void NextStage()` | method |
| `PreviousStage` | `public override void PreviousStage()` | method |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | method |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | method |
| `LoadEscapeMenuMovie` | `public override void LoadEscapeMenuMovie()` | method |
| `ReleaseEscapeMenuMovie` | `public override void ReleaseEscapeMenuMovie()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView)
- [same namespace CharacterCreationClanNamingStageView](../CharacterCreationClanNamingStageView)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView)
- [same namespace CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView)
