---
title: "IAchievementService"
description: "IAchievementService: a public interface in TaleWorlds.AchievementSystem; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket achievementsystem. Source: TaleWorlds.AchievementSystem/IAchievementService.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAchievementService

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public interface IAchievementService`
**File:** `TaleWorlds.AchievementSystem/IAchievementService.cs`
**Bucket:** `achievementsystem` (rule:TaleWorlds.AchievementSystem)

## Overview

IAchievementService lives in the TaleWorlds.AchievementSystem module, source file TaleWorlds.AchievementSystem/IAchievementService.cs. It is a public interface; the inheritance chain is IAchievementService. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAchievementService lands in canonical bucket `achievementsystem` (matched rule `rule:TaleWorlds.AchievementSystem`), namespace `TaleWorlds.AchievementSystem`, inheritance chain IAchievementService. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.AchievementSystem/IAchievementService.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SetStat` | `bool SetStat(string name, int value);` | method |
| `Task` | `Task<int>GetStat(string name);` | method |
| `Task` | `Task<int[]>GetStats(string[]names);` | method |
| `IsInitializationCompleted` | `bool IsInitializationCompleted();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Achievement](../Achievement/)
- [same namespace AchievementManager](../AchievementManager/)
- [same namespace TestAchievementService](../TestAchievementService/)
