---
title: "QueryData<T>"
description: "QueryData<T>: a public class in TaleWorlds.MountAndBlade, inheriting IQueryData; 11 exposed members (8 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/QueryData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# QueryData<T>

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class QueryData<T>: IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

QueryData<T> lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/QueryData.cs. It is a public class, implementing/inheriting IQueryData; the inheritance chain is QueryData → IQueryData. It exposes 11 public/protected members: 8 methods, 1 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: QueryData<T> lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain QueryData → IQueryData. The surface is method-led (methods 8/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/QueryData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `QueryData` | `public QueryData(Func<T>valueFunc, float lifetime)` | constructor |
| `QueryData` | `public QueryData(Func<T>valueFunc, float lifetime, T defaultCachedValue)` | constructor |
| `Evaluate` | `public void Evaluate(float currentTime)` | method |
| `SetValue` | `public void SetValue(T value, float currentTime)` | method |
| `GetCachedValue` | `public T GetCachedValue()` | method |
| `GetCachedValueUnlessTooOld` | `public T GetCachedValueUnlessTooOld()` | method |
| `GetCachedValueWithMaxAge` | `public T GetCachedValueWithMaxAge(float age)` | method |
| `Value` | `public T Value` | property |
| `Expire` | `public void Expire()` | method |
| `SetupSyncGroup` | `public static void SetupSyncGroup(params IQueryData[]groupItems)` | method |
| `SetSyncGroup` | `public void SetSyncGroup(IQueryData[]syncGroup)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IQueryData](../IQueryData/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
