---
title: "DefaultPartyTroopUpgradeModel"
description: "DefaultPartyTroopUpgradeModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyTroopUpgradeModel; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyTroopUpgradeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs. It is a public class, implementing/inheriting PartyTroopUpgradeModel; the inheritance chain is DefaultPartyTroopUpgradeModel → PartyTroopUpgradeModel → MBGameModel → GameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyTroopUpgradeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyTroopUpgradeModel → PartyTroopUpgradeModel → MBGameModel → GameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanPartyUpgradeTroopToTarget` | `public override bool CanPartyUpgradeTroopToTarget(PartyBase upgradingParty, CharacterObject upgradeableCharacter, CharacterObject upgradeTarget)` | method |
| `IsTroopUpgradeable` | `public override bool IsTroopUpgradeable(PartyBase party, CharacterObject character)` | method |
| `GetXpCostForUpgrade` | `public override int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)` | method |
| `GetGoldCostForUpgrade` | `public override ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)` | method |
| `GetSkillXpFromUpgradingTroops` | `public override int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops)` | method |
| `DoesPartyHaveRequiredItemsForUpgrade` | `public override bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget)` | method |
| `DoesPartyHaveRequiredPerksForUpgrade` | `public override bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk)` | method |
| `GetUpgradeChanceForTroopUpgrade` | `public override float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyTroopUpgradeModel](../PartyTroopUpgradeModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
