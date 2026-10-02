---
title: "MBRandom"
description: "MBRandom: a public class in TaleWorlds.Core; 17 exposed members (12 methods, 4 properties, 1 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/MBRandom.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MBRandom

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public static class MBRandom`
**File:** `TaleWorlds.Core/MBRandom.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

MBRandom lives in the TaleWorlds.Core module, source file TaleWorlds.Core/MBRandom.cs. It is a public class; the inheritance chain is MBRandom. It exposes 17 public/protected members: 12 methods, 4 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MBRandom lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain MBRandom. The surface is method-led (methods 12/17, properties 4/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/MBRandom.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RandomFloat` | `public static float RandomFloat` | property |
| `RandomFloatRanged` | `public static float RandomFloatRanged(float maxVal)` | method |
| `RandomFloatRanged` | `public static float RandomFloatRanged(float minVal, float maxVal)` | method |
| `RandomFloatNormal` | `public static float RandomFloatNormal` | property |
| `RandomInt` | `public static int RandomInt()` | method |
| `RandomInt` | `public static int RandomInt(int maxValue)` | method |
| `RandomInt` | `public static int RandomInt(int minValue, int maxValue)` | method |
| `RoundRandomized` | `public static int RoundRandomized(float f)` | method |
| `ChooseWeighted` | `public static T ChooseWeighted<T>(IReadOnlyList<ValueTuple<T, float>>weightList)` | method |
| `ChooseWeighted` | `public static T ChooseWeighted<T>(IReadOnlyList<ValueTuple<T, float>>weightList, out int chosenIndex)` | method |
| `RandomFloatGaussian` | `public static float RandomFloatGaussian(float center, float spread, float min, float max)` | method |
| `SetSeed` | `public static void SetSeed(uint seed, uint seed2)` | method |
| `NondeterministicRandomFloat` | `public static float NondeterministicRandomFloat` | property |
| `NondeterministicRandomInt` | `public static int NondeterministicRandomInt` | property |
| `RandomIntWithSeed` | `public static int RandomIntWithSeed(uint seed, uint seed2)` | method |
| `RandomFloatWithSeed` | `public static float RandomFloatWithSeed(uint seed, uint seed2)` | method |
| `MaxSeed` | `public const int MaxSeed` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
