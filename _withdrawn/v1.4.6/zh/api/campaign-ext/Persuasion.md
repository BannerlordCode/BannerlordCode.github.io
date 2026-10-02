---
title: "Persuasion"
description: "Persuasion：TaleWorlds.CampaignSystem.Conversation.Persuasion 的 public 类；公开成员 5 个（方法 2、属性 2、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Persuasion

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Persuasion`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class Persuasion`
**File:** `TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## 概述

Persuasion 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs。它是一个 public 类，继承链为 Persuasion。public/protected 成员共 5 个：2 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Persuasion 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.Conversation`），命名空间 `TaleWorlds.CampaignSystem.Conversation.Persuasion`，继承链 Persuasion。成员构成以方法为主（方法 2/5，属性 2/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Conversation/Persuasion/Persuasion.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DifficultyMultiplier` | `public float DifficultyMultiplier` | 属性 |
| `Progress` | `public float Progress` | 属性 |
| `Persuasion` | `public Persuasion(float goalValue, float successValue, float failValue, float criticalSuccessValue, float criticalFailValue, float initialProgress, PersuasionDifficulty difficulty)` | 构造函数 |
| `CommitProgress` | `public void CommitProgress(PersuasionOptionArgs persuasionOptionArgs)` | 方法 |
| `PersuasionOptionResult>>GetChosenOptions` | `public IEnumerable<Tuple<PersuasionOptionArgs, PersuasionOptionResult>>GetChosenOptions()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 PersuasionArgumentStrength](../PersuasionArgumentStrength/)
- [同命名空间 PersuasionAttempt](../PersuasionAttempt/)
- [同命名空间 PersuasionDifficulty](../PersuasionDifficulty/)
- [同命名空间 PersuasionOptionArgs](../PersuasionOptionArgs/)
