---
title: "IssueModel"
description: "IssueModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<IssueModel>; 11 exposed members (10 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IssueModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class IssueModel : MBGameModel<IssueModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

IssueModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<IssueModel>; the inheritance chain is IssueModel → MBGameModel → GameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IssueModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain IssueModel → MBGameModel → GameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/IssueModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetIssueDifficultyMultiplier` | `public abstract float GetIssueDifficultyMultiplier();` | method |
| `IssueOwnerCoolDownInDays` | `public abstract int IssueOwnerCoolDownInDays` | property |
| `GetIssueEffectsOfSettlement` | `public abstract void GetIssueEffectsOfSettlement(IssueEffect issueEffect, Settlement settlement, ref ExplainedNumber explainedNumber);` | method |
| `GetIssueEffectOfHero` | `public abstract void GetIssueEffectOfHero(IssueEffect issueEffect, Hero hero, ref ExplainedNumber explainedNumber);` | method |
| `GetIssueEffectOfClan` | `public abstract void GetIssueEffectOfClan(IssueEffect issueEffect, Clan clan, ref ExplainedNumber explainedNumber);` | method |
| `int>GetCausalityForHero` | `public abstract ValueTuple<int, int>GetCausalityForHero(Hero alternativeSolutionHero, IssueBase issue);` | method |
| `GetFailureRiskForHero` | `public abstract float GetFailureRiskForHero(Hero alternativeSolutionHero, IssueBase issue);` | method |
| `GetDurationOfResolutionForHero` | `public abstract CampaignTime GetDurationOfResolutionForHero(Hero alternativeSolutionHero, IssueBase issue);` | method |
| `GetTroopsRequiredForHero` | `public abstract int GetTroopsRequiredForHero(Hero alternativeSolutionHero, IssueBase issue);` | method |
| `CanTroopsReturnFromAlternativeSolution` | `public abstract bool CanTroopsReturnFromAlternativeSolution();` | method |
| `int>GetIssueAlternativeSolutionSkill` | `public abstract ValueTuple<SkillObject, int>GetIssueAlternativeSolutionSkill(Hero hero, IssueBase issue);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
