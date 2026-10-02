---
title: "Timer"
description: "Timer: a public class in TaleWorlds.Core; 9 exposed members (5 methods, 3 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/Timer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Timer

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class Timer`
**File:** `TaleWorlds.Core/Timer.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

Timer lives in the TaleWorlds.Core module, source file TaleWorlds.Core/Timer.cs. It is a public class; the inheritance chain is Timer. It exposes 9 public/protected members: 5 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Timer lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain Timer. The surface is method-led (methods 5/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/Timer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StartTime` | `public float StartTime` | property |
| `Duration` | `public float Duration` | property |
| `Timer` | `public Timer(float gameTime, float duration, bool autoReset = true)` | constructor |
| `Check` | `public virtual bool Check(float gameTime)` | method |
| `ElapsedTime` | `public float ElapsedTime()` | method |
| `PreviousDeltaTime` | `public float PreviousDeltaTime` | property |
| `Reset` | `public void Reset(float gameTime)` | method |
| `Reset` | `public void Reset(float gameTime, float newDuration)` | method |
| `AdjustStartTime` | `public void AdjustStartTime(float deltaTime)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
