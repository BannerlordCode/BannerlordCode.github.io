---
title: "SkeletonAnimatedCamera"
description: "SkeletonAnimatedCamera: a public class in SandBox.Objects.Cinematics, inheriting ScriptComponentBehavior; 8 exposed members (5 methods, 0 properties, 3 fields). Canonical bucket sandbox. Source: SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SkeletonAnimatedCamera

**Namespace:** `SandBox.Objects.Cinematics`
**Module:** `SandBox`
**Type:** `public class SkeletonAnimatedCamera : ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

SkeletonAnimatedCamera lives in the SandBox module, source file SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SkeletonAnimatedCamera → ScriptComponentBehavior → DotNetObject. It exposes 8 public/protected members: 5 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkeletonAnimatedCamera lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Cinematics`, inheritance chain SkeletonAnimatedCamera → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |
| `SkeletonName` | `public string SkeletonName` | field |
| `AttachmentOffset` | `public Vec3 AttachmentOffset` | field |
| `AnimationName` | `public string AnimationName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace CinematicBurningArrow](../CinematicBurningArrow/)
- [same namespace HideoutBossFightBehavior](../HideoutBossFightBehavior/)
