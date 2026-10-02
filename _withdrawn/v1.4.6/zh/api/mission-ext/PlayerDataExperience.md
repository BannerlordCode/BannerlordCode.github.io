---
title: "PlayerDataExperience"
description: "PlayerDataExperience：TaleWorlds.MountAndBlade.Diamond 的 public 结构体；公开成员 8 个（方法 3、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerDataExperience

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public struct PlayerDataExperience`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PlayerDataExperience 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs。它是一个 public 结构体，继承链为 PlayerDataExperience。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PlayerDataExperience 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond`，继承链 PlayerDataExperience。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/PlayerDataExperience.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Experience` | `public int Experience` | 属性 |
| `Level` | `public int Level` | 属性 |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel` | 属性 |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel` | 属性 |
| `PlayerDataExperience` | `public PlayerDataExperience(int experience)` | 构造函数 |
| `CalculateLevelFromExperience` | `public static int CalculateLevelFromExperience(int experience)` | 方法 |
| `CalculateExperienceFromLevel` | `public static int CalculateExperienceFromLevel(int level)` | 方法 |
| `ExperienceRequiredForLevel` | `public static int ExperienceRequiredForLevel(int level)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Announcement](../Announcement/)
- [同命名空间 AnnouncementType](../AnnouncementType/)
- [同命名空间 AnotherPlayerData](../AnotherPlayerData/)
- [同命名空间 AnotherPlayerState](../AnotherPlayerState/)
