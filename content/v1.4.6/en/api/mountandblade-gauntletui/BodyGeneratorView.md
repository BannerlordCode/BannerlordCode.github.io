---
title: "BodyGeneratorView"
description: "BodyGeneratorView: a public class in TaleWorlds.MountAndBlade.GauntletUI, inheriting IFaceGeneratorHandler; 12 exposed members (7 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs."
---
# BodyGeneratorView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class BodyGeneratorView : IFaceGeneratorHandler`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs`

## Overview

BodyGeneratorView lives in the TaleWorlds.MountAndBlade.GauntletUI module, source file TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs. It is a public class, implementing/inheriting IFaceGeneratorHandler; the inheritance chain is BodyGeneratorView → IFaceGeneratorHandler. It exposes 12 public/protected members: 7 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BodyGeneratorView is a top-level type in TaleWorlds.MountAndBlade.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator) the module directory; inheritance chain BodyGeneratorView → IFaceGeneratorHandler. The surface is method-led (methods 7/12, properties 4/12), so it mostly exposes operations. IFaceGeneratorHandler on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI/BodyGenerator/BodyGeneratorView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GauntletBodyGeneratorScreen](../GauntletBodyGeneratorScreen)
