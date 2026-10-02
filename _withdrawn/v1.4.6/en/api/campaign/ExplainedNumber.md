---
title: "ExplainedNumber"
description: "ExplainedNumber: a public struct in TaleWorlds.CampaignSystem; 19 exposed members (9 methods, 7 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/ExplainedNumber.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ExplainedNumber

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct ExplainedNumber`
**File:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ExplainedNumber lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ExplainedNumber.cs. It is a public struct; the inheritance chain is ExplainedNumber. It exposes 19 public/protected members: 9 methods, 7 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ExplainedNumber lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain ExplainedNumber. The surface is method-led (methods 9/19, properties 7/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ExplainedNumber.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ResultNumber` | `public float ResultNumber` | property |
| `RoundedResultNumber` | `public int RoundedResultNumber` | property |
| `BaseNumber` | `public float BaseNumber` | property |
| `IncludeDescriptions` | `public bool IncludeDescriptions` | property |
| `LimitMinValue` | `public float LimitMinValue` | property |
| `LimitMaxValue` | `public float LimitMaxValue` | property |
| `SumOfFactors` | `public float SumOfFactors` | property |
| `ExplainedNumber` | `public ExplainedNumber(float baseNumber = 0f, bool includeDescriptions = false, TextObject baseText = null)` | constructor |
| `GetExplanations` | `public string GetExplanations()` | method |
| `float>>GetLines` | `public List<ValueTuple<string, float>>GetLines()` | method |
| `AddFromExplainedNumber` | `public void AddFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)` | method |
| `SubtractFromExplainedNumber` | `public void SubtractFromExplainedNumber(ExplainedNumber explainedNumber, TextObject baseText)` | method |
| `Add` | `public void Add(float value, TextObject description = null, TextObject variable = null)` | method |
| `AddFactor` | `public void AddFactor(float value, TextObject description = null)` | method |
| `LimitMin` | `public void LimitMin(float minValue)` | method |
| `LimitMax` | `public void LimitMax(float maxValue, TextObject description = null)` | method |
| `Clamp` | `public void Clamp(float minValue, float maxValue)` | method |
| `OperationType` | `public enum OperationType` | nested type |
| `ExplanationLine` | `public readonly struct ExplanationLine` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
