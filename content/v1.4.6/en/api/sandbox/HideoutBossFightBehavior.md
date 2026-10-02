---
title: "HideoutBossFightBehavior"
description: "HideoutBossFightBehavior: a public class in SandBox, inheriting ScriptComponentBehavior; 17 exposed members (11 methods, 1 properties, 5 fields). Source: SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs."
---
# HideoutBossFightBehavior

**Namespace:** `SandBox.Objects.Cinematics`
**Module:** `SandBox`
**Type:** `public class HideoutBossFightBehavior : ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs`

## Overview

HideoutBossFightBehavior lives in the SandBox module, source file SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is HideoutBossFightBehavior → ScriptComponentBehavior. It exposes 17 public/protected members: 11 methods, 1 properties, 5 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutBossFightBehavior is a top-level type in SandBox, namespace differing from (SandBox.Objects.Cinematics) the module directory; inheritance chain HideoutBossFightBehavior → ScriptComponentBehavior. The surface is method-led (methods 11/17, properties 1/17), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Cinematics/HideoutBossFightBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CinematicBurningArrow](../CinematicBurningArrow)
- [same namespace SkeletonAnimatedCamera](../SkeletonAnimatedCamera)
