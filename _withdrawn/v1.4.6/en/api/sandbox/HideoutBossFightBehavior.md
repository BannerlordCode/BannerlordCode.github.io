---
title: "HideoutBossFightBehavior"
description: "HideoutBossFightBehavior: a public class in SandBox.Objects.Cinematics, inheriting ScriptComponentBehavior; 17 exposed members (11 methods, 1 properties, 5 fields). Canonical bucket sandbox. Source: SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HideoutBossFightBehavior

**Namespace:** `SandBox.Objects.Cinematics`
**Module:** `SandBox`
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

HideoutBossFightBehavior lives in the SandBox module, source file SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is HideoutBossFightBehavior → ScriptComponentBehavior → DotNetObject. It exposes 17 public/protected members: 11 methods, 1 properties, 5 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutBossFightBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Cinematics`, inheritance chain HideoutBossFightBehavior → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 11/17, properties 1/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PerturbSeed` | `public int PerturbSeed` | property |
| `GetPlayerFrames` | `public void GetPlayerFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)` | method |
| `GetBossFrames` | `public void GetBossFrames(out MatrixFrame initialFrame, out MatrixFrame targetFrame, float perturbAmount = 0f)` | method |
| `GetAllyFrames` | `public void GetAllyFrames(out List<MatrixFrame>initialFrames, out List<MatrixFrame>targetFrames, int agentCount = 10, float agentOffsetAngle = 0.15707964f, float perturbAmount = 0f)` | method |
| `GetBanditFrames` | `public void GetBanditFrames(out List<MatrixFrame>initialFrames, out List<MatrixFrame>targetFrames, int agentCount = 10, float agentOffsetAngle = 0.15707964f, float perturbAmount = 0f)` | method |
| `GetAlliesInitialFrame` | `public void GetAlliesInitialFrame(out MatrixFrame frame)` | method |
| `GetBanditsInitialFrame` | `public void GetBanditsInitialFrame(out MatrixFrame frame)` | method |
| `IsWorldPointInsideCameraVolume` | `public bool IsWorldPointInsideCameraVolume(in Vec3 worldPoint)` | method |
| `ClampWorldPointToCameraVolume` | `public bool ClampWorldPointToCameraVolume(in Vec3 worldPoint, out Vec3 clampedPoint)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `MaxCameraHeight` | `public const float MaxCameraHeight` | field |
| `MaxCameraWidth` | `public const float MaxCameraWidth` | field |
| `InnerRadius` | `public float InnerRadius` | field |
| `OuterRadius` | `public float OuterRadius` | field |
| `WalkDistance` | `public float WalkDistance` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace CinematicBurningArrow](../CinematicBurningArrow/)
- [same namespace SkeletonAnimatedCamera](../SkeletonAnimatedCamera/)
