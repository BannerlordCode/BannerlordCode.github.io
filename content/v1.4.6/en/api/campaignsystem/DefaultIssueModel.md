---
title: "DefaultIssueModel"
description: "DefaultIssueModel: a public class in TaleWorlds.CampaignSystem, inheriting IssueModel; 11 exposed members (10 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs."
---
# DefaultIssueModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultIssueModel : IssueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs`

## Overview

DefaultIssueModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs. It is a public class, implementing/inheriting IssueModel; the inheritance chain is DefaultIssueModel → IssueModel → MBGameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultIssueModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultIssueModel → IssueModel → MBGameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultIssueModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IssueOwnerCoolDownInDays` | `public override int IssueOwnerCoolDownInDays` | property |
| `GetIssueDifficultyMultiplier` | `public override float GetIssueDifficultyMultiplier()` | method |
| `GetIssueEffectsOfSettlement` | `public override void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber)` | method |
| `GetIssueEffectOfHero` | `public override void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber)` | method |
| `GetIssueEffectOfClan` | `public override void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber)` | method |
| `int>GetCausalityForHero` | `public override ValueTuple<int, int>GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue)` | method |
| `GetFailureRiskForHero` | `public override float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue)` | method |
| `GetDurationOfResolutionForHero` | `public override CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue)` | method |
| `GetTroopsRequiredForHero` | `public override int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue)` | method |
| `int>GetIssueAlternativeSolutionSkill` | `public override ValueTuple<SkillObject, int>GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue)` | method |
| `CanTroopsReturnFromAlternativeSolution` | `public override bool CanTroopsReturnFromAlternativeSolution()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IssueModel](../IssueModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
