---
title: "FactoredNumber"
description: "FactoredNumber: a public struct in TaleWorlds.MountAndBlade; 10 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/FactoredNumber.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FactoredNumber

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FactoredNumber`
**File:** `TaleWorlds.MountAndBlade/FactoredNumber.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FactoredNumber lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FactoredNumber.cs. It is a public struct; the inheritance chain is FactoredNumber. It exposes 10 public/protected members: 5 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FactoredNumber lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain FactoredNumber. The surface is method-led (methods 5/10, properties 4/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FactoredNumber.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ResultNumber` | `public float ResultNumber` | property |
| `BaseNumber` | `public float BaseNumber` | property |
| `LimitMinValue` | `public float LimitMinValue` | property |
| `LimitMaxValue` | `public float LimitMaxValue` | property |
| `FactoredNumber` | `public FactoredNumber(float baseNumber = 0f)` | constructor |
| `Add` | `public void Add(float value)` | method |
| `AddFactor` | `public void AddFactor(float value)` | method |
| `LimitMin` | `public void LimitMin(float minValue)` | method |
| `LimitMax` | `public void LimitMax(float maxValue)` | method |
| `Clamp` | `public void Clamp(float minValue, float maxValue)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
