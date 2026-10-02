---
title: "CharacterCreationClanNamingStageView"
description: "CharacterCreationClanNamingStageView: a public class in SandBox.GauntletUI.CharacterCreation, inheriting CharacterCreationStageViewBase; 10 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationClanNamingStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationClanNamingStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CharacterCreationClanNamingStageView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationClanNamingStageView → CharacterCreationStageViewBase → ICharacterCreationStageListener. It exposes 10 public/protected members: 8 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationClanNamingStageView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.CharacterCreation`, inheritance chain CharacterCreationClanNamingStageView → CharacterCreationStageViewBase → ICharacterCreationStageListener. The surface is method-led (methods 8/10, properties 1/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationClanNamingStageView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterCreationStageViewBase](../CharacterCreationStageViewBase/)
- [same namespace CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView/)
- [same namespace CharacterCreationCultureStageView](../CharacterCreationCultureStageView/)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView/)
- [same namespace CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView/)
