---
title: "FormOrder"
description: "FormOrder: a public struct in TaleWorlds.MountAndBlade; 16 exposed members (9 methods, 3 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/FormOrder.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FormOrder

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct FormOrder`
**File:** `TaleWorlds.MountAndBlade/FormOrder.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FormOrder lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/FormOrder.cs. It is a public struct; the inheritance chain is FormOrder. It exposes 16 public/protected members: 9 methods, 3 properties, 3 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormOrder lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain FormOrder. The surface is method-led (methods 9/16, properties 3/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/FormOrder.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CustomFlankWidth` | `public float CustomFlankWidth` | property |
| `FormOrderCustom` | `public static FormOrder FormOrderCustom(float customWidth)` | method |
| `OrderType` | `public OrderType OrderType` | property |
| `OnApply` | `public void OnApply(Formation formation)` | method |
| `GetUnitCountOf` | `public static int GetUnitCountOf(Formation formation)` | method |
| `OnApplyToCustomArrangement` | `public bool OnApplyToCustomArrangement(Formation formation, IFormationArrangement arrangement)` | method |
| `GetMaxFileCountStatic` | `public static int? GetMaxFileCountStatic(FormOrder.FormOrderEnum order, int unitCount)` | method |
| `Equals` | `public override bool Equals(object obj)` | method |
| `GetHashCode` | `public override int GetHashCode()` | method |
| `!` | `public static bool operator !` | operator |
| `operator` | `public static bool operator` | operator |
| `FormOrderDeep` | `public static readonly FormOrder FormOrderDeep` | field |
| `FormOrderWide` | `public static readonly FormOrder FormOrderWide` | field |
| `FormOrderWider` | `public static readonly FormOrder FormOrderWider` | field |
| `FormOrderEnum` | `public enum FormOrderEnum` | property |
| `FormOrderEnum` | `public enum FormOrderEnum` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
