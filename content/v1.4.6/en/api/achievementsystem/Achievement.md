---
title: "Achievement"
description: "Achievement: a public class in TaleWorlds.AchievementSystem; 8 exposed members (0 methods, 8 properties, 0 fields). Source: TaleWorlds.AchievementSystem/Achievement.cs."
---
# Achievement

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public class Achievement`
**File:** `TaleWorlds.AchievementSystem/Achievement.cs`

## Overview

Achievement lives in the TaleWorlds.AchievementSystem module, source file TaleWorlds.AchievementSystem/Achievement.cs. It is a public class; the inheritance chain is Achievement. It exposes 8 public/protected members: 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Achievement is a top-level type in TaleWorlds.AchievementSystem, namespace matching the module directory; inheritance chain Achievement. The surface is property-led (properties 8/8, methods 0/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.AchievementSystem/Achievement.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | property |
| `LockedDisplayName` | `public string LockedDisplayName` | property |
| `UnlockedDisplayName` | `public string UnlockedDisplayName` | property |
| `LockedDescription` | `public string LockedDescription` | property |
| `UnlockedDescription` | `public string UnlockedDescription` | property |
| `TargetProgress` | `public int TargetProgress` | property |
| `IsUnlocked` | `public bool IsUnlocked` | property |
| `CurrentProgress` | `public int CurrentProgress` | property |

## See Also

- [↑ achievementsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AchievementManager](../AchievementManager)
- [same namespace IAchievementService](../IAchievementService)
- [same namespace TestAchievementService](../TestAchievementService)
