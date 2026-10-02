---
title: "CharacterCreationBannerEditorView"
description: "CharacterCreationBannerEditorView: a public class in SandBox.GauntletUI.CharacterCreation, inheriting CharacterCreationStageViewBase; 11 exposed members (9 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationBannerEditorView

**Namespace:** `SandBox.GauntletUI.CharacterCreation`
**Module:** `SandBox.GauntletUI`
**Type:** `public class CharacterCreationBannerEditorView : CharacterCreationStageViewBase`
**File:** `SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CharacterCreationBannerEditorView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs. It is a public class, implementing/inheriting CharacterCreationStageViewBase; the inheritance chain is CharacterCreationBannerEditorView → CharacterCreationStageViewBase → ICharacterCreationStageListener. It exposes 11 public/protected members: 9 methods, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationBannerEditorView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.CharacterCreation`, inheritance chain CharacterCreationBannerEditorView → CharacterCreationStageViewBase → ICharacterCreationStageListener. The surface is method-led (methods 9/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/CharacterCreation/CharacterCreationBannerEditorView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterCreationBannerEditorView` | `public CharacterCreationBannerEditorView(CharacterCreationManager characterCreationManager, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null) : this(CharacterObject.PlayerCharacter, Clan.PlayerClan.Banner, affirmativeAction, affirmativeActionText, negativeAction, negativeActionText, onRefresh, getCurrentStageIndexAction, getTotalStageCountAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `CharacterCreationBannerEditorView` | `public CharacterCreationBannerEditorView(BasicCharacterObject character, Banner banner, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null) : base(affirmativeAction, negativeAction, onRefresh, getTotalStageCountAction, getCurrentStageIndexAction, getFurthestIndexAction, goToIndexAction)` | constructor |
| `IEnumerable` | `public override IEnumerable<ScreenLayer>GetLayers()` | method |
| `PreviousStage` | `public override void PreviousStage()` | method |
| `NextStage` | `public override void NextStage()` | method |
| `Tick` | `public override void Tick(float dt)` | method |
| `GetVirtualStageCount` | `public override int GetVirtualStageCount()` | method |
| `GoToIndex` | `public override void GoToIndex(int index)` | method |
| `OnFinalize` | `protected override void OnFinalize()` | method |
| `LoadEscapeMenuMovie` | `public override void LoadEscapeMenuMovie()` | method |
| `ReleaseEscapeMenuMovie` | `public override void ReleaseEscapeMenuMovie()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterCreationStageViewBase](../CharacterCreationStageViewBase/)
- [same namespace CharacterCreationClanNamingStageView](../CharacterCreationClanNamingStageView/)
- [same namespace CharacterCreationCultureStageView](../CharacterCreationCultureStageView/)
- [same namespace CharacterCreationFaceGeneratorView](../CharacterCreationFaceGeneratorView/)
- [same namespace CharacterCreationNarrativeStageView](../CharacterCreationNarrativeStageView/)
