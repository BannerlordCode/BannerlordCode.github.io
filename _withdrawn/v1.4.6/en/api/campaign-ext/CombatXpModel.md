---
title: "CombatXpModel"
description: "CombatXpModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<CombatXpModel>; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CombatXpModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CombatXpModel : MBGameModel<CombatXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

CombatXpModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CombatXpModel>; the inheritance chain is CombatXpModel → MBGameModel → GameModel. It exposes 6 public/protected members: 3 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CombatXpModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain CombatXpModel → MBGameModel → GameModel. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CombatXpModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetSkillForWeapon` | `public abstract SkillObject GetSkillForWeapon(WeaponComponentData weapon, bool isSiegeEngineHit);` | method |
| `GetXpFromHit` | `public abstract ExplainedNumber GetXpFromHit(CharacterObject attackerTroop, CharacterObject captain, CharacterObject attackedTroop, PartyBase attackerParty, int damage, bool isFatal, CombatXpModel.MissionTypeEnum missionType);` | method |
| `GetXpMultiplierFromShotDifficulty` | `public abstract float GetXpMultiplierFromShotDifficulty(float shotDifficulty);` | method |
| `CaptainRadius` | `public abstract float CaptainRadius` | property |
| `MissionTypeEnum` | `public enum MissionTypeEnum` | property |
| `MissionTypeEnum` | `public enum MissionTypeEnum` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
