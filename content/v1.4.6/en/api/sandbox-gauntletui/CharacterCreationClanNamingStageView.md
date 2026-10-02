---
title: "CharacterCreationClanNamingStageView"
description: "CharacterCreationClanNamingStageView: a public class in SandBox.GauntletUI, inheriting CharacterCreationStageViewBase; 10 exposed members (8 methods, 1 properties, 0 fields). Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs."
---
# CharacterCreationClanNamingStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationClanNamingStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs`

## Overview

CharacterCreationClanNamingStageView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationClanNamingStageView → CharacterCreationStageViewBase. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationClanNamingStageView is a top-level type in SandBox.GauntletUI, namespace differing from (SandBox.GauntletUI.CharacterCreation) the module directory; inheritance chain CharacterCreationClanNamingStageView → CharacterCreationStageViewBase. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. CharacterCreationStageViewBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneLayer` | `public SceneLayer SceneLayer` | property |
| `CharacterCreationClanNamingStageView` | `public CharacterCreationClanNamingStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage refreshAction, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction) : base(affirmativeAction, negativeAction, refreshAction, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `Tick` | `public override void Tick(float dt)` | method |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | method |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | method |
| `NextStage` | `public override void NextStage()` | method |
| `PreviousStage` | `public override void PreviousStage()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `LoadEscapeMenuMovie` | `public override void LoadEscapeMenuMovie()` | method |
| `ReleaseEscapeMenuMovie` | `public override void ReleaseEscapeMenuMovie()` | method |

## See Also

- [↑ sandbox-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView)
- [same namespace CharacterCreationCultureStageView](../CharacterCreationCultureStageView)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView)
- [same namespace CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView)
