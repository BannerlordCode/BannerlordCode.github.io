---
title: "ExplainedNumber"
description: "TaleWorlds.CampaignSystem.ExplainedNumber —— 命名空间 TaleWorlds.CampaignSystem 中的结构体，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# ExplainedNumber

**Namespace:** `TaleWorlds.CampaignSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public struct ExplainedNumber`  
**Base:** `无（源码未显式声明基类）`  
**Source:** `TaleWorlds.CampaignSystem/ExplainedNumber.cs`

## 概述

`ExplainedNumber` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem` 下的结构体，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/ExplainedNumber.cs`（第 10 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，源码中未显式声明基类型；解析到的成员共 31 项，其中 6 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public List<ExplainedNumber.StatExplainer.ExplanationLine> Lines { get; private set; } = new List<ExplainedNumber.StatExplainer.ExplanationLine>();` — 属性，get/set，类型 List<ExplainedNumber.StatExplainer.ExplanationLine>
- `public ExplainedNumber.StatExplainer.ExplanationLine? BaseLine { get; private set; }` — 属性，get/set，类型 ExplainedNumber.StatExplainer.ExplanationLine?
- `public ExplainedNumber.StatExplainer.ExplanationLine? LimitMinLine { get; private set; }` — 属性，get/set，类型 ExplainedNumber.StatExplainer.ExplanationLine?
- `public ExplainedNumber.StatExplainer.ExplanationLine? LimitMaxLine { get; private set; }` — 属性，get/set，类型 ExplainedNumber.StatExplainer.ExplanationLine?
- `public List<ValueTuple<string, float>> GetLines(float baseNumber, float unclampedResultNumber, TextObject overrideBaseLineText = null, TextObject overrideMaximumLineText = null, TextObject overrideMinimumLineText = null)` — 方法，5 个参数，返回 List<ValueTuple<string, float>>
- `public void AddLine(string name, float number, ExplainedNumber.StatExplainer.OperationType opType)` — 方法，3 个参数，返回 void


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 6 条成员记录全部来自 `TaleWorlds.CampaignSystem/ExplainedNumber.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public struct ExplainedNumber` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
