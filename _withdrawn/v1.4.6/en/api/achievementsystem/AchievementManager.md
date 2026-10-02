---
title: "AchievementManager"
description: "AchievementManager: a public class in TaleWorlds.AchievementSystem; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket achievementsystem. Source: TaleWorlds.AchievementSystem/AchievementManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AchievementManager

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public class AchievementManager`
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`
**Bucket:** `achievementsystem` (rule:TaleWorlds.AchievementSystem)

## Overview

AchievementManager lives in the TaleWorlds.AchievementSystem module, source file TaleWorlds.AchievementSystem/AchievementManager.cs. It is a public class; the inheritance chain is AchievementManager. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AchievementManager lands in canonical bucket `achievementsystem` (matched rule `rule:TaleWorlds.AchievementSystem`), namespace `TaleWorlds.AchievementSystem`, inheritance chain AchievementManager. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.AchievementSystem/AchievementManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AchievementService` | `public static IAchievementService AchievementService` | property |
| `SetStat` | `public static bool SetStat(string name, int value)` | method |
| `Task` | `public static async Task<int>GetStat(string name)` | method |
| `Task` | `public static async Task<int[]>GetStats(string[]names)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Achievement](../Achievement/)
- [same namespace IAchievementService](../IAchievementService/)
- [same namespace TestAchievementService](../TestAchievementService/)
