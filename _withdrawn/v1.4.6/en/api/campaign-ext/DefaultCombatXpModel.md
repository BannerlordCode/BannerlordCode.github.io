---
title: "DefaultCombatXpModel"
description: "DefaultCombatXpModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting CombatXpModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCombatXpModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultCombatXpModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs. It is a public class, implementing/inheriting CombatXpModel; the inheritance chain is DefaultCombatXpModel → CombatXpModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCombatXpModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultCombatXpModel → CombatXpModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSkillForWeapon` | `public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)` | method |
| `GetXpFromHit` | `public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)` | method |
| `GetXpMultiplierFromShotDifficulty` | `public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)` | method |
| `CaptainRadius` | `public override float CaptainRadius` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CombatXpModel](../CombatXpModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
