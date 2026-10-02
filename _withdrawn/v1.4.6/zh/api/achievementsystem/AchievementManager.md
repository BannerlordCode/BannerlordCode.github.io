---
title: "AchievementManager"
description: "AchievementManager：TaleWorlds.AchievementSystem 的 public 类；公开成员 4 个（方法 3、属性 1、字段 0）。canonical 桶 achievementsystem。源文件 TaleWorlds.AchievementSystem/AchievementManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AchievementManager

**Namespace:** `TaleWorlds.AchievementSystem`
**Module:** `TaleWorlds.AchievementSystem`
**Type:** `public class AchievementManager`
**File:** `TaleWorlds.AchievementSystem/AchievementManager.cs`
**Bucket:** `achievementsystem` (rule:TaleWorlds.AchievementSystem)

## 概述

AchievementManager 位于 TaleWorlds.AchievementSystem 模块，源文件 TaleWorlds.AchievementSystem/AchievementManager.cs。它是一个 public 类，继承链为 AchievementManager。public/protected 成员共 4 个：3 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AchievementManager 落在 canonical 桶 `achievementsystem`（命中规则 `rule:TaleWorlds.AchievementSystem`），命名空间 `TaleWorlds.AchievementSystem`，继承链 AchievementManager。成员构成以方法为主（方法 3/4，属性 1/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.AchievementSystem/AchievementManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AchievementService` | `public static IAchievementService AchievementService` | 属性 |
| `SetStat` | `public static bool SetStat(string name, int value)` | 方法 |
| `Task` | `public static async Task<int>GetStat(string name)` | 方法 |
| `Task` | `public static async Task<int[]>GetStats(string[]names)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Achievement](../Achievement/)
- [同命名空间 IAchievementService](../IAchievementService/)
- [同命名空间 TestAchievementService](../TestAchievementService/)
