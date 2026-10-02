---
title: "CharacterCreationCultureStageView"
description: "CharacterCreationCultureStageView: a public class in SandBox.GauntletUI.CharacterCreation, inheriting CharacterCreationStageViewBase; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationCultureStageView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationCultureStageView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CharacterCreationCultureStageView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationCultureStageView → CharacterCreationStageViewBase → ICharacterCreationStageListener. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationCultureStageView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.CharacterCreation`, inheritance chain CharacterCreationCultureStageView → CharacterCreationStageViewBase → ICharacterCreationStageListener. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationCultureStageView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterCreationStageViewBase](../CharacterCreationStageViewBase/)
- [same namespace CharacterCreationBannerEditorView](../CharacterCreationBannerEditorView/)
- [same namespace CharacterCreationClanNamingStageView](../CharacterCreationClanNamingStageView/)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView/)
- [same namespace CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView/)
