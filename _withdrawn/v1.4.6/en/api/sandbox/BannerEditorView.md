---
title: "BannerEditorView"
description: "BannerEditorView: a public class in SandBox.GauntletUI.BannerEditor; 10 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox.GauntletUI/BannerEditor/BannerEditorView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BannerEditorView

**Namespace:** `SandBox.GauntletUI.BannerEditor`
**Module:** `SandBox.GauntletUI`
**Type:** `public class BannerEditorView`
**File:** `SandBox.GauntletUI/BannerEditor/BannerEditorView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BannerEditorView lives in the SandBox.GauntletUI module, source file SandBox.GauntletUI/BannerEditor/BannerEditorView.cs. It is a public class; the inheritance chain is BannerEditorView. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BannerEditorView lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.GauntletUI.BannerEditor`, inheritance chain BannerEditorView. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox.GauntletUI/BannerEditor/BannerEditorView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GauntletLayer` | `public GauntletLayer GauntletLayer` | property |
| `DataSource` | `public BannerEditorVM DataSource` | property |
| `Banner` | `public Banner Banner` | property |
| `SceneLayer` | `public SceneLayer SceneLayer` | property |
| `BannerEditorView` | `public BannerEditorView(BasicCharacterObject character, Banner banner, ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, ControlCharacterCreationStage onRefresh = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null)` | constructor |
| `OnTick` | `public void OnTick(float dt)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `Exit` | `public void Exit(bool isCancel)` | method |
| `OnDeactivate` | `public void OnDeactivate()` | method |
| `GoToIndex` | `public void GoToIndex(int index)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GauntletBannerEditorScreen](../GauntletBannerEditorScreen/)
