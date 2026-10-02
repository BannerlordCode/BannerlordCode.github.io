---
title: "IssueModel"
description: "Auto-generated class reference for IssueModel."
---
# IssueModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel> `
**Base:** MBGameModel<IssueModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs

## Overview

Auto-generated stub for `IssueModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
