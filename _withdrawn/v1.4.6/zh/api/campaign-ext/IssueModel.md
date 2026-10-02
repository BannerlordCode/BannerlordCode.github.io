---
title: "IssueModel"
description: "IssueModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<IssueModel>；公开成员 11 个（方法 10、属性 1、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IssueModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

IssueModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<IssueModel>，继承链为 IssueModel → MBGameModel → GameModel。public/protected 成员共 11 个：10 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IssueModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 IssueModel → MBGameModel → GameModel。成员构成以方法为主（方法 10/11，属性 1/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetIssueDifficultyMultiplier` | `public abstract float GetIssueDifficultyMultiplier();` | 方法 |
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays` | 属性 |
| `GetIssueEffectsOfSettlement` | `public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber);` | 方法 |
| `GetIssueEffectOfHero` | `public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber);` | 方法 |
| `GetIssueEffectOfClan` | `public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber);` | 方法 |
| `int>GetCausalityForHero` | `public abstract ValueTuple<int, int>GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue);` | 方法 |
| `GetFailureRiskForHero` | `public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue);` | 方法 |
| `GetDurationOfResolutionForHero` | `public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue);` | 方法 |
| `GetTroopsRequiredForHero` | `public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue);` | 方法 |
| `CanTroopsReturnFromAlternativeSolution` | `public abstract bool CanTroopsReturnFromAlternativeSolution();` | 方法 |
| `int>GetIssueAlternativeSolutionSkill` | `public abstract ValueTuple<SkillObject, int>GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
