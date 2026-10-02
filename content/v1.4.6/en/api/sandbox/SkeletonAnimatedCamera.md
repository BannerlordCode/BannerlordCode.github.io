---
title: "SkeletonAnimatedCamera"
description: "SkeletonAnimatedCamera: a public class in SandBox, inheriting ScriptComponentBehavior; 8 exposed members (5 methods, 0 properties, 3 fields). Source: SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs."
---
# SkeletonAnimatedCamera

**Namespace:** `SandBox.Objects.Cinematics`
**Module:** `SandBox`
**Type:** `public class SkeletonAnimatedCamera : ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs`

## Overview

SkeletonAnimatedCamera lives in the SandBox module, source file SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is SkeletonAnimatedCamera → ScriptComponentBehavior. It exposes 8 public/protected members: 5 methods, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SkeletonAnimatedCamera is a top-level type in SandBox, namespace differing from (SandBox.Objects.Cinematics) the module directory; inheritance chain SkeletonAnimatedCamera → ScriptComponentBehavior. The surface is method-led (methods 5/8, properties 0/8), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Cinematics/SkeletonAnimatedCamera.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CinematicBurningArrow](../CinematicBurningArrow)
- [same namespace HideoutBossFightBehavior](../HideoutBossFightBehavior)
