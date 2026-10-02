---
title: "DefaultCombatXpModel"
description: "DefaultCombatXpModel: a public class in TaleWorlds.CampaignSystem, inheriting CombatXpModel; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs."
---
# DefaultCombatXpModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCombatXpModel : CombatXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs`

## Overview

DefaultCombatXpModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs. It is a public class, implementing/inheriting CombatXpModel; the inheritance chain is DefaultCombatXpModel → CombatXpModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCombatXpModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCombatXpModel → CombatXpModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCombatXpModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSkillForWeapon` | `public override SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit)` | method |
| `GetXpFromHit` | `public override ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType)` | method |
| `GetXpMultiplierFromShotDifficulty` | `public override float GetXpMultiplierFromShotDifficulty(float shotDifficulty)` | method |
| `CaptainRadius` | `public override float CaptainRadius` | property |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CombatXpModel](../CombatXpModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
