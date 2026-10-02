---
title: "DefaultAlleyModel"
description: "DefaultAlleyModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting AlleyModel; 19 exposed members (11 methods, 5 properties, 2 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultAlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAlleyModel : AlleyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultAlleyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs. It is a public class, implementing/inheriting AlleyModel; the inheritance chain is DefaultAlleyModel → AlleyModel → MBGameModel → GameModel. It exposes 19 public/protected members: 11 methods, 5 properties, 2 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultAlleyModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultAlleyModel → AlleyModel → MBGameModel → GameModel. The surface is method-led (methods 11/19, properties 5/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultAlleyModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AlleyModel](../AlleyModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
- [same namespace DefaultBanditDensityModel](../DefaultBanditDensityModel/)
