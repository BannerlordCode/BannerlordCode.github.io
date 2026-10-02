---
title: "BodyGeneratorView"
description: "BodyGeneratorView: a public class in TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator, inheriting IFaceGeneratorHandler; 12 exposed members (7 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BodyGeneratorView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BodyGeneratorView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs. It is a public class, implementing/inheriting IFaceGeneratorHandler; the inheritance chain is BodyGeneratorView → IFaceGeneratorHandler. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyGeneratorView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`, inheritance chain BodyGeneratorView → IFaceGeneratorHandler. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DataSource` | `public FaceGenVM DataSource` | property |
| `GauntletLayer` | `public GauntletLayer GauntletLayer` | property |
| `SceneLayer` | `public SceneLayer SceneLayer` | property |
| `BodyGen` | `public BodyGenerator BodyGen` | property |
| `BodyGeneratorView` | `public BodyGeneratorView(ControlCharacterCreationStage affirmativeAction, TextObject affirmativeActionText, ControlCharacterCreationStage negativeAction, TextObject negativeActionText, BasicCharacterObject character, bool openedFromMultiplayer, IFaceGeneratorCustomFilter filter, Equipment dressedEquipment = null, ControlCharacterCreationStageReturnInt getCurrentStageIndexAction = null, ControlCharacterCreationStageReturnInt getTotalStageCountAction = null, ControlCharacterCreationStageReturnInt getFurthestIndexAction = null, ControlCharacterCreationStageWithInt goToIndexAction = null, FaceGenHistory faceGenHistory = null)` | constructor |
| `ResetFaceToDefault` | `public void ResetFaceToDefault()` | method |
| `FaceGenShowDebug` | `public static string FaceGenShowDebug(List<string>strings)` | method |
| `FaceGenUpdateDeformKeys` | `public static string FaceGenUpdateDeformKeys(List<string>strings)` | method |
| `ReadyToRender` | `public bool ReadyToRender()` | method |
| `OnTick` | `public void OnTick(float dt)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `InitCamera` | `public static MatrixFrame InitCamera(Camera camera, Vec3 cameraPosition)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IFaceGeneratorHandler](../IFaceGeneratorHandler/)
- [same namespace GauntletBodyGeneratorScreen](../GauntletBodyGeneratorScreen/)
