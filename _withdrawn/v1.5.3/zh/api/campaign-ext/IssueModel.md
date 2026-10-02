---
title: "IssueModel"
description: "IssueModel 的自动生成类参考。"
---
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel> `
**Base:** MBGameModel<IssueModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs

## 概述

`IssueModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetIssueDifficultyMultiplier
`public abstract float GetIssueDifficultyMultiplier()`

### GetIssueEffectsOfSettlement
`public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect,Settlement settlement,ref ExplainedNumber explainedNumber)`

### GetIssueEffectOfHero
`public abstract void GetIssueEffectOfHero(IssueEffect issueEffect,Hero hero,ref ExplainedNumber explainedNumber)`

### GetIssueEffectOfClan
`public abstract void GetIssueEffectOfClan(IssueEffect issueEffect,Clan clan,ref ExplainedNumber explainedNumber)`

### GetCausalityForHero
`public abstract ValueTuple<int,int> GetCausalityForHero(Hero alternativeSolutionHero,IssueBase issue)`

### GetFailureRiskForHero
`public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero,IssueBase issue)`

### GetDurationOfResolutionForHero
`public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero,IssueBase issue)`

### GetTroopsRequiredForHero
`public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero,IssueBase issue)`

### CanTroopsReturnFromAlternativeSolution
`public abstract bool CanTroopsReturnFromAlternativeSolution()`

### GetIssueAlternativeSolutionSkill
`public abstract ValueTuple<SkillObject,int> GetIssueAlternativeSolutionSkill(Hero hero,IssueBase issue)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
