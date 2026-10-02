---
title: "Incident"
description: "TaleWorlds.CampaignSystem.Incidents.Incident —— 命名空间 TaleWorlds.CampaignSystem.Incidents 中的类，来自 bannerlord-1.4.7 源码的自动生成骨架页，仅收录成员签名。"
---

<!-- v147-skeleton -->

# Incident

**Namespace:** `TaleWorlds.CampaignSystem.Incidents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class Incident : MBObjectBase`  
**Base:** `MBObjectBase`  
**Source:** `TaleWorlds.CampaignSystem/Incidents/Incident.cs`

## 概述

`Incident` 是 bannerlord-1.4.7 源码中命名空间 `TaleWorlds.CampaignSystem.Incidents` 下的类，声明于模块目录 `TaleWorlds.CampaignSystem` 的 `TaleWorlds.CampaignSystem/Incidents/Incident.cs`（第 11 行声明）。该声明访问级别为public（公开），修饰为无特殊修饰，基类型是 `MBObjectBase`；解析到的成员共 29 项，其中 4 项为 public 或 protected。

本页由 `tools/_v147_skeleton.mjs` 从上述源文件抽取生成，作用是提供该类型在 1.4.7 中的真实声明与签名清单。行为说明、调用时机与 mod 集成方式尚未撰写。

## 关键成员

下列签名按源码声明顺序逐字照抄（每项后的说明只描述签名形态，不描述业务用途）：

- `public IncidentOption(TextObject text, List<IncidentEffect> effects, Incident.IncidentOptionConditionDelegate condition, Incident.IncidentOptionConsequenceDelegate consequence)` — 方法，4 个参数，返回 I
- `public readonly TextObject Text;` — 字段，类型 TextObject
- `public readonly Incident.IncidentOptionConditionDelegate Condition;` — 字段，类型 Incident.IncidentOptionConditionDelegate
- `public readonly Incident.IncidentOptionConsequenceDelegate Consequence;` — 字段，类型 Incident.IncidentOptionConsequenceDelegate


## 心智模型

把这一页当作源码的索引来读，而不是教程：上面的 4 条成员记录全部来自 `TaleWorlds.CampaignSystem/Incidents/Incident.cs` 的真实声明，签名与返回类型是准确事实，而签名背后的行为、调用时机与失败边界本页尚未撰写，需要时请回到该源文件逐行核对。判断一个成员能否从 mod 侧直接调用，看的是 `public class Incident : MBObjectBase` 这一行的访问级别与修饰（当前为public（公开）、无特殊修饰）以及上面每项的 get/set 与参数个数，而不是本页的措辞。

## 参见

- 本目录索引：[`campaign` API](../)
- [MBObjectBase（基类）](../../campaign-ext/MBObjectBase)
- [AcceptCallToWarAgreementDecision（同命名空间）](../AcceptCallToWarAgreementDecision)
- [AcceptCallToWarOfferMapNotification（同命名空间）](../AcceptCallToWarOfferMapNotification)
- [AccompanyingCharacter（同命名空间）](../AccompanyingCharacter)
- [IGameStarter（core-extra 桶）](../../core-extra/IGameStarter)
- [CustomBattleSubModule（custombattle 桶）](../../custombattle/CustomBattleSubModule)
