---
title: "DefaultAlleyModel"
description: "DefaultAlleyModel: a public class in TaleWorlds.CampaignSystem, inheriting AlleyModel; 19 exposed members (11 methods, 5 properties, 2 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs."
---
# DefaultAlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAlleyModel : AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`

## Overview

DefaultAlleyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs. It is a public class, implementing/inheriting AlleyModel; the inheritance chain is DefaultAlleyModel → AlleyModel → MBGameModel. It exposes 19 public/protected members: 11 methods, 5 properties, 2 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultAlleyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultAlleyModel → AlleyModel → MBGameModel. The surface is method-led (methods 11/19, properties 5/19), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public override CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath` | property |
| `MinimumTroopCountInPlayerOwnedAlley` | `public override int MinimumTroopCountInPlayerOwnedAlley` | property |
| `MaximumTroopCountInPlayerOwnedAlley` | `public override int MaximumTroopCountInPlayerOwnedAlley` | property |
| `GetDailyCrimeRatingOfAlley` | `public override float GetDailyCrimeRatingOfAlley` | property |
| `GetDailyXpGainForAssignedClanMember` | `public override float GetDailyXpGainForAssignedClanMember(Hero assignedHero)` | method |
| `GetDailyXpGainForMainHero` | `public override float GetDailyXpGainForMainHero()` | method |
| `GetInitialXpGainForMainHero` | `public override float GetInitialXpGainForMainHero()` | method |
| `GetXpGainAfterSuccessfulAlleyDefenseForMainHero` | `public override float GetXpGainAfterSuccessfulAlleyDefenseForMainHero()` | method |
| `GetTroopsOfAIOwnedAlley` | `public override TroopRoster GetTroopsOfAIOwnedAlley(Alley alley)` | method |
| `GetTroopsOfAlleyForBattleMission` | `public override TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley)` | method |
| `DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` | `public override List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley)` | method |
| `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` | `public override TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random)` | method |
| `GetDisabledReasonTextForHero` | `public override TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail)` | method |
| `GetAlleyAttackResponseTimeInDays` | `public override float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster)` | method |
| `GetDailyIncomeOfAlley` | `public override int GetDailyIncomeOfAlley(Alley alley)` | method |
| `MinimumRoguerySkillNeededForLeadingAnAlley` | `public const int MinimumRoguerySkillNeededForLeadingAnAlley` | field |
| `MaximumMercyTraitNeededForLeadingAnAlley` | `public const int MaximumMercyTraitNeededForLeadingAnAlley` | field |
| `AlleyMemberAvailabilityDetail` | `public enum AlleyMemberAvailabilityDetail` | property |
| `AlleyMemberAvailabilityDetail` | `public enum AlleyMemberAvailabilityDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AlleyModel](../AlleyModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
- [same namespace DefaultBanditDensityModel](../DefaultBanditDensityModel)
