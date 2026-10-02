---
title: "PartyTroopUpgradeModel"
description: "PartyTroopUpgradeModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartyTroopUpgradeModel>; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs."
---
# PartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs`

## Overview

PartyTroopUpgradeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyTroopUpgradeModel>; the inheritance chain is PartyTroopUpgradeModel → MBGameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTroopUpgradeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartyTroopUpgradeModel → MBGameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTroopUpgradeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanPartyUpgradeTroopToTarget` | `public abstract bool CanPartyUpgradeTroopToTarget(PartyBase party, CharacterObject character, CharacterObject target);` | method |
| `IsTroopUpgradeable` | `public abstract bool IsTroopUpgradeable(PartyBase party, CharacterObject character);` | method |
| `DoesPartyHaveRequiredItemsForUpgrade` | `public abstract bool DoesPartyHaveRequiredItemsForUpgrade(PartyBase party, CharacterObject upgradeTarget);` | method |
| `DoesPartyHaveRequiredPerksForUpgrade` | `public abstract bool DoesPartyHaveRequiredPerksForUpgrade(PartyBase party, CharacterObject character, CharacterObject upgradeTarget, out PerkObject requiredPerk);` | method |
| `GetGoldCostForUpgrade` | `public abstract ExplainedNumber GetGoldCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget);` | method |
| `GetXpCostForUpgrade` | `public abstract int GetXpCostForUpgrade(PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget);` | method |
| `GetSkillXpFromUpgradingTroops` | `public abstract int GetSkillXpFromUpgradingTroops(PartyBase party, CharacterObject troop, int numberOfTroops);` | method |
| `GetUpgradeChanceForTroopUpgrade` | `public abstract float GetUpgradeChanceForTroopUpgrade(PartyBase party, CharacterObject troop, int upgradeTargetIndex);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
