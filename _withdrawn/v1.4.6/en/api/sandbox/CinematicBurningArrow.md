---
title: "CinematicBurningArrow"
description: "CinematicBurningArrow: a public class in SandBox.Objects.Cinematics, inheriting ScriptComponentBehavior; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Cinematics/CinematicBurningArrow.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CinematicBurningArrow

**Namespace:** `SandBox.Objects.Cinematics`
**Module:** `SandBox`
**Type:** `public class CinematicBurningArrow : ScriptComponentBehavior`
**File:** `SandBox/Objects/Cinematics/CinematicBurningArrow.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CinematicBurningArrow lives in the SandBox module, source file SandBox/Objects/Cinematics/CinematicBurningArrow.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is CinematicBurningArrow → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CinematicBurningArrow lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Cinematics`, inheritance chain CinematicBurningArrow → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Cinematics/CinematicBurningArrow.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StartMovement` | `public void StartMovement()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace HideoutBossFightBehavior](../HideoutBossFightBehavior/)
- [same namespace SkeletonAnimatedCamera](../SkeletonAnimatedCamera/)
