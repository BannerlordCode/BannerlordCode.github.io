---
title: "StoryModeCombatXpModel"
description: "StoryModeCombatXpModel: a public class in StoryMode.GameComponents, inheriting CombatXpModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket storymode. Source: StoryMode/GameComponents/StoryModeCombatXpModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StoryModeCombatXpModel

**Namespace:** `StoryMode.GameComponents`
**Module:** `StoryMode`
**Type:** `public class StoryModeCombatXpModel : CombatXpModel`
**File:** `StoryMode/GameComponents/StoryModeCombatXpModel.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

StoryModeCombatXpModel lives in the StoryMode module, source file StoryMode/GameComponents/StoryModeCombatXpModel.cs. It is a public class, implementing/inheriting CombatXpModel; the inheritance chain is StoryModeCombatXpModel → CombatXpModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StoryModeCombatXpModel lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.GameComponents`, inheritance chain StoryModeCombatXpModel → CombatXpModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode/GameComponents/StoryModeCombatXpModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CaptainRadius` | `public override float CaptainRadius` | property |
| `GetSkillForWeapon` | `public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)` | method |
| `GetXpFromHit` | `public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)` | method |
| `GetXpMultiplierFromShotDifficulty` | `public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CombatXpModel](../../campaign-ext/CombatXpModel/)
- [same namespace StoryModeAgentDecideKilledOrUnconsciousModel](../StoryModeAgentDecideKilledOrUnconsciousModel/)
- [same namespace StoryModeBanditDensityModel](../StoryModeBanditDensityModel/)
- [same namespace StoryModeBannerItemModel](../StoryModeBannerItemModel/)
- [same namespace StoryModeBattleRewardModel](../StoryModeBattleRewardModel/)
