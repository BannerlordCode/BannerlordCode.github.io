---
title: "AlleyModel"
description: "AlleyModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<AlleyModel>; 15 exposed members (11 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs."
---
# AlleyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AlleyModel : MBGameModel<AlleyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs`

## Overview

AlleyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AlleyModel>; the inheritance chain is AlleyModel → MBGameModel. It exposes 15 public/protected members: 11 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AlleyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain AlleyModel → MBGameModel. The surface is method-led (methods 11/15, properties 4/15), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/AlleyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DestroyAlleyAfterDaysWhenLeaderIsDeath` | `public abstract CampaignTime DestroyAlleyAfterDaysWhenLeaderIsDeath` | property |
| `MinimumTroopCountInPlayerOwnedAlley` | `public abstract int MinimumTroopCountInPlayerOwnedAlley` | property |
| `MaximumTroopCountInPlayerOwnedAlley` | `public abstract int MaximumTroopCountInPlayerOwnedAlley` | property |
| `GetDailyCrimeRatingOfAlley` | `public abstract float GetDailyCrimeRatingOfAlley` | property |
| `GetDailyXpGainForAssignedClanMember` | `public abstract float GetDailyXpGainForAssignedClanMember(Hero assignedHero);` | method |
| `GetDailyXpGainForMainHero` | `public abstract float GetDailyXpGainForMainHero();` | method |
| `GetInitialXpGainForMainHero` | `public abstract float GetInitialXpGainForMainHero();` | method |
| `GetXpGainAfterSuccessfulAlleyDefenseForMainHero` | `public abstract float GetXpGainAfterSuccessfulAlleyDefenseForMainHero();` | method |
| `GetTroopsOfAIOwnedAlley` | `public abstract TroopRoster GetTroopsOfAIOwnedAlley(Alley alley);` | method |
| `GetTroopsOfAlleyForBattleMission` | `public abstract TroopRoster GetTroopsOfAlleyForBattleMission(Alley alley);` | method |
| `GetDailyIncomeOfAlley` | `public abstract int GetDailyIncomeOfAlley(Alley alley);` | method |
| `DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley` | `public abstract List<ValueTuple<Hero, DefaultAlleyModel.AlleyMemberAvailabilityDetail>>GetClanMembersAndAvailabilityDetailsForLeadingAnAlley(Alley alley);` | method |
| `GetTroopsToRecruitFromAlleyDependingOnAlleyRandom` | `public abstract TroopRoster GetTroopsToRecruitFromAlleyDependingOnAlleyRandom(Alley alley, float random);` | method |
| `GetDisabledReasonTextForHero` | `public abstract TextObject GetDisabledReasonTextForHero(Hero hero, Alley alley, DefaultAlleyModel.AlleyMemberAvailabilityDetail detail);` | method |
| `GetAlleyAttackResponseTimeInDays` | `public abstract float GetAlleyAttackResponseTimeInDays(TroopRoster troopRoster);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
- [same namespace BanditDensityModel](../BanditDensityModel)
