---
title: "DefaultPartyTroopUpgradeModel"
description: "DefaultPartyTroopUpgradeModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyTroopUpgradeModel; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs."
---
# DefaultPartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs`

## Overview

DefaultPartyTroopUpgradeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs. It is a public class, implementing/inheriting PartyTroopUpgradeModel; the inheritance chain is DefaultPartyTroopUpgradeModel → PartyTroopUpgradeModel → MBGameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyTroopUpgradeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyTroopUpgradeModel → PartyTroopUpgradeModel → MBGameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyTroopUpgradeModel](../PartyTroopUpgradeModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
