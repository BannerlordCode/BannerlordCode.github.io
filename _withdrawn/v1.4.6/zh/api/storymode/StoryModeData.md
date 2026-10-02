---
title: "StoryModeData"
description: "StoryModeData：StoryMode 的 public 类；公开成员 13 个（方法 3、属性 9、字段 1）。canonical 桶 storymode。源文件 StoryMode/StoryModeData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeData

**Namespace:** `StoryMode`
**Module:** `StoryMode`
**Type:** `public static class StoryModeData`
**File:** `StoryMode/StoryModeData.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

StoryModeData 位于 StoryMode 模块，源文件 StoryMode/StoryModeData.cs。它是一个 public 类，继承链为 StoryModeData。public/protected 成员共 13 个：3 方法、9 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：StoryModeData 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode`，继承链 StoryModeData。成员构成以属性为主（属性 9/13，方法 3/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode/StoryModeData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsKingdomImperial` | `public static bool IsKingdomImperial(Kingdom kingdomToCheck)` | 方法 |
| `ImperialCulture` | `public static CultureObject ImperialCulture` | 属性 |
| `NorthernEmpireKingdom` | `public static Kingdom NorthernEmpireKingdom` | 属性 |
| `WesternEmpireKingdom` | `public static Kingdom WesternEmpireKingdom` | 属性 |
| `SouthernEmpireKingdom` | `public static Kingdom SouthernEmpireKingdom` | 属性 |
| `SturgiaKingdom` | `public static Kingdom SturgiaKingdom` | 属性 |
| `AseraiKingdom` | `public static Kingdom AseraiKingdom` | 属性 |
| `VlandiaKingdom` | `public static Kingdom VlandiaKingdom` | 属性 |
| `BattaniaKingdom` | `public static Kingdom BattaniaKingdom` | 属性 |
| `KhuzaitKingdom` | `public static Kingdom KhuzaitKingdom` | 属性 |
| `IsConspiracyTroop` | `public static bool IsConspiracyTroop(CharacterObject troop)` | 方法 |
| `OnGameEnd` | `public static void OnGameEnd()` | 方法 |
| `StorylineQuestHideoutHiddenDuration` | `public static CampaignTime StorylineQuestHideoutHiddenDuration` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CampaignStoryMode](../CampaignStoryMode/)
- [同命名空间 ConspiracyQuestMapNotification](../ConspiracyQuestMapNotification/)
- [同命名空间 IsArzagosTag](../IsArzagosTag/)
- [同命名空间 IsIstianaTag](../IsIstianaTag/)
