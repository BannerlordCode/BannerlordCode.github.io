---
title: "KingdomElection"
description: "KingdomElection：TaleWorlds.CampaignSystem.Election 的 public 类；公开成员 27 个（方法 20、属性 5、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/Election/KingdomElection.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomElection

**Namespace:** `TaleWorlds.CampaignSystem.Election`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomElection`
**File:** `TaleWorlds.CampaignSystem/Election/KingdomElection.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

KingdomElection 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Election/KingdomElection.cs。它是一个 public 类，继承链为 KingdomElection。public/protected 成员共 27 个：20 方法、5 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KingdomElection 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.Election`，继承链 KingdomElection。成员构成以方法为主（方法 20/27，属性 5/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Election/KingdomElection.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<DecisionOutcome>PossibleOutcomes` | 属性 |
| `IsCancelled` | `public bool IsCancelled` | 属性 |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | 属性 |
| `IsPlayerChooser` | `public bool IsPlayerChooser` | 属性 |
| `KingdomElection` | `public KingdomElection(KingdomDecision decision)` | 构造函数 |
| `StartElection` | `public void StartElection()` | 方法 |
| `GetElectionOutcomeSupport` | `public static KingdomElection.ElectionOutcomeSupport GetElectionOutcomeSupport(KingdomDecision decision, Clan sponsor)` | 方法 |
| `SetupResultWithoutPlayerSupport` | `public void SetupResultWithoutPlayerSupport()` | 方法 |
| `StartElectionWithoutPlayer` | `public void StartElectionWithoutPlayer()` | 方法 |
| `GetLikelihoodForSponsor` | `public float GetLikelihoodForSponsor(Clan sponsor)` | 方法 |
| `GetWinChanceForSponsor` | `public float GetWinChanceForSponsor(Clan sponsor)` | 方法 |
| `GetDecisionOutcomeSupportForSponsor` | `public KingdomElection.ElectionOutcomeSupport GetDecisionOutcomeSupportForSponsor(Clan sponsor)` | 方法 |
| `GetRelationChangeWithSponsor` | `public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)` | 方法 |
| `GetChosenOutcomeText` | `public TextObject GetChosenOutcomeText()` | 方法 |
| `DetermineOfficialSupport` | `public void DetermineOfficialSupport()` | 方法 |
| `GetWinChanceWithPlayerSupport` | `public float GetWinChanceWithPlayerSupport(DecisionOutcome supportedOutcome, Supporter.SupportWeights supportWeight)` | 方法 |
| `GetInfluenceCostOfOutcome` | `public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)` | 方法 |
| `GetSecondaryEffects` | `public TextObject GetSecondaryEffects()` | 方法 |
| `OnPlayerSupport` | `public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)` | 方法 |
| `OnPlayerAbstainedAsRuler` | `public void OnPlayerAbstainedAsRuler()` | 方法 |
| `ApplySelection` | `public void ApplySelection()` | 方法 |
| `MBList` | `public MBList<DecisionOutcome>GetSortedDecisionOutcomes()` | 方法 |
| `GetGeneralTitle` | `public TextObject GetGeneralTitle()` | 方法 |
| `GetTitle` | `public TextObject GetTitle()` | 方法 |
| `GetDescription` | `public TextObject GetDescription()` | 方法 |
| `ElectionOutcomeSupport` | `public enum ElectionOutcomeSupport` | 属性 |
| `ElectionOutcomeSupport` | `public enum ElectionOutcomeSupport` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision/)
- [同命名空间 DecisionOutcome](../DecisionOutcome/)
- [同命名空间 DeclareWarDecision](../DeclareWarDecision/)
- [同命名空间 ExpelClanFromKingdomDecision](../ExpelClanFromKingdomDecision/)
