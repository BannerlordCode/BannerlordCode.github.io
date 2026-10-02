---
title: "VisualDefinition"
description: "VisualDefinition: a public class in TaleWorlds.GauntletUI; 9 exposed members (2 methods, 6 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VisualDefinition

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class VisualDefinition`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

VisualDefinition lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs. It is a public class; the inheritance chain is VisualDefinition. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualDefinition lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain VisualDefinition. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `TransitionDuration` | `public float TransitionDuration` | property |
| `DelayOnBegin` | `public float DelayOnBegin` | property |
| `EaseType` | `public AnimationInterpolation.Type EaseType` | property |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction` | property |
| `VisualState>VisualStates` | `public Dictionary<string, VisualState>VisualStates` | property |
| `VisualDefinition` | `public VisualDefinition(string name, float transitionDuration, float delayOnBegin, AnimationInterpolation.Type easeType, AnimationInterpolation.Function easeFunction)` | constructor |
| `AddVisualState` | `public void AddVisualState(VisualState visualState)` | method |
| `GetVisualState` | `public VisualState GetVisualState(string state)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
