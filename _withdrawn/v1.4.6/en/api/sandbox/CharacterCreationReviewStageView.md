---
title: "CharacterCreationReviewStageView"
description: "CharacterCreationReviewStageView: a public class in SandBox.GauntletUI.CharacterCreation, inheriting CharacterCreationStageViewBase; 11 exposed members (9 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationReviewStageView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationReviewStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationReviewStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationReviewStageView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CharacterCreationReviewStageView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationReviewStageView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationReviewStageView → CharacterCreationStageViewBase → ICharacterCreationStageListener. It exposes 11 public/protected members: 9 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationReviewStageView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.CharacterCreation`, inheritance chain CharacterCreationReviewStageView → CharacterCreationStageViewBase → ICharacterCreationStageListener. The surface is method-led (methods 9/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationReviewStageView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterLayer` | `public SceneLayer CharacterLayer` | property |
| `CharacterCreationReviewStageView` | `public CharacterCreationReviewStageView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction) : base(affirmativeAction, negativeAction, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `SetGenericScene` | `public override void SetGenericScene(Scene scene)` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `NextStage` | `public override void NextStage()` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | method |
| `PreviousStage` | `public override void PreviousStage()` | method |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | method |
| `LoadEscapeMenuMovie` | `public override void LoadEscapeMenuMovie()` | method |
| `ReleaseEscapeMenuMovie` | `public override void ReleaseEscapeMenuMovie()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterCreationStageViewBase](../CharacterCreationStageViewBase/)
- [same namespace CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView/)
- [same namespace CharacterCreationClanNamingStageView](../CharacterCreationClanNamingStageView/)
- [same namespace CharacterCreationCultureStageView](../CharacterCreationCultureStageView/)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView/)
