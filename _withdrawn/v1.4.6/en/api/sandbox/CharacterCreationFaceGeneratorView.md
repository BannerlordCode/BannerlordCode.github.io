---
title: "CharacterCreationFaceGeneratorView"
description: "CharacterCreationFaceGeneratorView: a public class in SandBox.GauntletUI.CharacterCreation, inheriting CharacterCreationStageViewBase; 10 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationFaceGeneratorView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationFaceGeneratorView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationFaceGeneratorView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationFaceGeneratorView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CharacterCreationFaceGeneratorView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationFaceGeneratorView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationFaceGeneratorView → CharacterCreationStageViewBase → ICharacterCreationStageListener. It exposes 10 public/protected members: 9 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationFaceGeneratorView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.CharacterCreation`, inheritance chain CharacterCreationFaceGeneratorView → CharacterCreationStageViewBase → ICharacterCreationStageListener. The surface is method-led (methods 9/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationFaceGeneratorView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterCreationFaceGeneratorView` | `public CharacterCreationFaceGeneratorView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction, ControlCharacterCreationStageReturnInt getTotalStageCountAction, ControlCharacterCreationStageReturnInt getFurthestIndexAction, ControlCharacterCreationStageWithInt goToIndexAction) : base(affirmativeAction, negativeAction, onRefresh, getTotalStageCountAction, getCurrentStageIndexAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | method |
| `PreviousStage` | `public override void PreviousStage()` | method |
| `NextStage` | `public override void NextStage()` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | method |
| `GoToIndex` | `public override void GoToIndex(int index)` | method |
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
- [same namespace CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView/)
