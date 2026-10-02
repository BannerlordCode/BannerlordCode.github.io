---
title: "AchievementManager"
description: "AchievementManager: a public class in TaleWorlds.AchievementSystem; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.AchievementSystem/AchievementManager.cs."
---
# AchievementManager

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public class AchievementManager`
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`

## Overview

AchievementManager lives in the TaleWorlds.AchievementSystem module, source file TaleWorlds.AchievementSystem/AchievementManager.cs. It is a public class; the inheritance chain is AchievementManager. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AchievementManager is a top-level type in TaleWorlds.AchievementSystem, namespace matching the module directory; inheritance chain AchievementManager. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.AchievementSystem/AchievementManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AchievementService` | `public static IAchievementService AchievementService` | property |
| `SetStat` | `public static bool SetStat(string name, int value)` | method |
| `Task` | `public static async Task<int>GetStat(string name)` | method |
| `Task` | `public static async Task<int[]>GetStats(string[]names)` | method |

## See Also

- [↑ achievementsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Achievement](../Achievement)
- [same namespace IAchievementService](../IAchievementService)
- [same namespace TestAchievementService](../TestAchievementService)
