---
title: "CinematicBurningArrow"
description: "CinematicBurningArrow: a public class in SandBox, inheriting ScriptComponentBehavior; 6 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox/Objects/Cinematics/CinematicBurningArrow.cs."
---
# CinematicBurningArrow

**Namespace:** `SandBox.Objects.Cinematics`
**Module:** `SandBox`
**Type:** `public class CinematicBurningArrow : ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/CinematicBurningArrow.cs`

## Overview

CinematicBurningArrow lives in the SandBox module, source file SandBox/Objects/Cinematics/CinematicBurningArrow.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is CinematicBurningArrow → ScriptComponentBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CinematicBurningArrow is a top-level type in SandBox, namespace differing from (SandBox.Objects.Cinematics) the module directory; inheritance chain CinematicBurningArrow → ScriptComponentBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Cinematics/CinematicBurningArrow.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StartMovement` | `public void StartMovement()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace HideoutBossFightBehavior](../HideoutBossFightBehavior)
- [same namespace SkeletonAnimatedCamera](../SkeletonAnimatedCamera)
