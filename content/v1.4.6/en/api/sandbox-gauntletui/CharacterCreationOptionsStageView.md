---
title: "CharacterCreationOptionsStageView"
description: "CharacterCreationOptionsStageView: a public class in SandBox.GauntletUI, inheriting CharacterCreationStageViewBase; 11 exposed members (9 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationOptionsStageView.cs."
---
# CharacterCreationOptionsStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationOptionsStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationOptionsStageView.cs`

## Overview

CharacterCreationOptionsStageView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationOptionsStageView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationOptionsStageView → CharacterCreationStageViewBase. It exposes 11 public/protected members: 9 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationOptionsStageView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.CharacterCreation) the module directory; inheritance chain CharacterCreationOptionsStageView → CharacterCreationStageViewBase. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. CharacterCreationStageViewBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationOptionsStageView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CharacterLayer` | `public SceneLayer CharacterLayer` | property |
| `CharacterCreationOptionsStageView` | `public CharacterCreationOptionsStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage refreshAction, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction) : base(affirmativeAction, negativeAction, refreshAction, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `SetGenericScene` | `public override void SetGenericScene(Scene scene)` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | method |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | method |
| `NextStage` | `public override void NextStage()` | method |
| `PreviousStage` | `public override void PreviousStage()` | method |
| `LoadEscapeMenuMovie` | `public override void LoadEscapeMenuMovie()` | method |
| `ReleaseEscapeMenuMovie` | `public override void ReleaseEscapeMenuMovie()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView)
- [same namespace CharacterCreationClanNamingStageView](../CharacterCreationClanNamingStageView)
- [same namespace CharacterCreationCultureStageView](../CharacterCreationCultureStageView)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView)
