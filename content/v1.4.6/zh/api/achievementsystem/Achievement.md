---
title: "Achievement"
description: "Achievement：TaleWorlds.AchievementSystem 的 public 类；公开成员 8 个（方法 0、属性 8、字段 0）。源文件 TaleWorlds.AchievementSystem/Achievement.cs。"
---
# Achievement

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public class Achievement`
**File:** `TaleWorlds.AchievementSystem/Achievement.cs`

## 概述

Achievement 位于 TaleWorlds.AchievementSystem 模块，源文件 TaleWorlds.AchievementSystem/Achievement.cs。它是一个 public 类，继承链为 Achievement。public/protected 成员共 8 个：8 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Achievement 是 TaleWorlds.AchievementSystem 的顶层类型，命名空间与模块目录一致，继承链 Achievement。成员构成以属性为主（属性 8/8，方法 0/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.AchievementSystem/Achievement.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Id` | `public string Id` | 属性 |
| `LockedDisplayName` | `public string LockedDisplayName` | 属性 |
| `UnlockedDisplayName` | `public string UnlockedDisplayName` | 属性 |
| `LockedDescription` | `public string LockedDescription` | 属性 |
| `UnlockedDescription` | `public string UnlockedDescription` | 属性 |
| `TargetProgress` | `public int TargetProgress` | 属性 |
| `IsUnlocked` | `public bool IsUnlocked` | 属性 |
| `CurrentProgress` | `public int CurrentProgress` | 属性 |

## 参见

- [↑ achievementsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AchievementManager](../AchievementManager)
- [同命名空间 IAchievementService](../IAchievementService)
- [同命名空间 TestAchievementService](../TestAchievementService)
