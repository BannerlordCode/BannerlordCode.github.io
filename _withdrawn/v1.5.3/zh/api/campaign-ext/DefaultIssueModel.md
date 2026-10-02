---
title: "DefaultIssueModel"
description: "DefaultIssueModel 的自动生成类参考。"
---
# DefaultIssueModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIssueModel : IssueModel `
**Base:** IssueModel
**Source:** TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs

## 概述

`DefaultIssueModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetIssueDifficultyMultiplier
`public override float GetIssueDifficultyMultiplier() `

### GetIssueEffectsOfSettlement
`public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect,Settlement settlement,ref ExplainedNumber explainedNumber) `

### GetIssueEffectOfHero
`public override void GetIssueEffectOfHero(IssueEffect issueEffect,Hero hero,ref ExplainedNumber explainedNumber) `

### GetIssueEffectOfClan
`public override void GetIssueEffectOfClan(IssueEffect issueEffect,Clan clan,ref ExplainedNumber explainedNumber) `

### GetCausalityForHero
`public override ValueTuple<int,int> GetCausalityForHero(Hero alternativeSolutionHero,IssueBase issue) `

### GetFailureRiskForHero
`public override float GetFailureRiskForHero(Hero alternativeSolutionHero,IssueBase issue) `

### GetDurationOfResolutionForHero
`public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero,IssueBase issue) `

### GetTroopsRequiredForHero
`public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero,IssueBase issue) `

### GetIssueAlternativeSolutionSkill
`public override ValueTuple<SkillObject,int> GetIssueAlternativeSolutionSkill(Hero hero,IssueBase issue) `

### CanTroopsReturnFromAlternativeSolution
`public override bool CanTroopsReturnFromAlternativeSolution() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
