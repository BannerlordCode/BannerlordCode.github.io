---
title: "StoryModeCombatXpModel"
description: "StoryModeCombatXpModel: a public class in StoryMode, inheriting CombatXpModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: StoryMode/GameComponents/StoryModeCombatXpModel.cs."
---
# StoryModeCombatXpModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**File:** `StoryMode/GameComponents/StoryModeCombatXpModel.cs`

## Overview

StoryModeCombatXpModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeCombatXpModel.cs. It is a public class, implementing/inheriting CombatXpModel; the inheritance chain is StoryModeCombatXpModel → CombatXpModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeCombatXpModel is a top-level type in StoryMode, namespace differing from (StoryMode.GameComponents) the module directory; inheritance chain StoryModeCombatXpModel → CombatXpModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. CombatXpModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeCombatXpModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CaptainRadius` | `public override float CaptainRadius` | property |
| `GetSkillForWeapon` | `public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)` | method |
| `GetXpFromHit` | `public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)` | method |
| `GetXpMultiplierFromShotDifficulty` | `public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)` | method |

## See Also

- [↑ storymode module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel)
