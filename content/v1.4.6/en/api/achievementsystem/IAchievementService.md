---
title: "IAchievementService"
description: "IAchievementService: a public interface in TaleWorlds.AchievementSystem; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.AchievementSystem/IAchievementService.cs."
---
# IAchievementService

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public interface IAchievementService`
**File:** `TaleWorlds.AchievementSystem/IAchievementService.cs`

## Overview

IAchievementService lives in the TaleWorlds.AchievementSystem module, source file TaleWorlds.AchievementSystem/IAchievementService.cs. It is a public interface; the inheritance chain is IAchievementService. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IAchievementService is a top-level type in TaleWorlds.AchievementSystem, namespace matching the module directory; inheritance chain IAchievementService. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.AchievementSystem/IAchievementService.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetStat` | `bool SetStat(string name, int value);` | method |
| `Task` | `Task<int>GetStat(string name);` | method |
| `Task` | `Task<int[]>GetStats(string[]names);` | method |
| `IsInitializationCompleted` | `bool IsInitializationCompleted();` | method |

## See Also

- [↑ achievementsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Achievement](../Achievement)
- [same namespace AchievementManager](../AchievementManager)
- [same namespace TestAchievementService](../TestAchievementService)
