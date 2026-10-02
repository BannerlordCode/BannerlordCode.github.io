---
title: "RandomTimer"
description: "RandomTimer: a public class in TaleWorlds.MountAndBlade, inheriting Timer; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/RandomTimer.cs."
---
# RandomTimer

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class RandomTimer : Timer`
**File:** `TaleWorlds.MountAndBlade/RandomTimer.cs`

## Overview

RandomTimer lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RandomTimer.cs. It is a public class, implementing/inheriting Timer; the inheritance chain is RandomTimer → Timer. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RandomTimer is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain RandomTimer → Timer. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. Timer on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RandomTimer.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RandomTimer` | `public RandomTimer(float gameTime, float durationMin, float durationMax) : base(gameTime, MBRandom.RandomFloatRanged(durationMin, durationMax), true)` | constructor |
| `Check` | `public override bool Check(float gameTime)` | method |
| `ChangeDuration` | `public void ChangeDuration(float min, float max)` | method |
| `RecomputeDuration` | `public void RecomputeDuration()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
