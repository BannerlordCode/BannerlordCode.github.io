---
title: "DefaultMilitaryPowerModel"
description: "DefaultMilitaryPowerModel: a public class in TaleWorlds.CampaignSystem, inheriting MilitaryPowerModel; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs."
---
# DefaultMilitaryPowerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`

## Overview

DefaultMilitaryPowerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs. It is a public class, implementing/inheriting MilitaryPowerModel; the inheritance chain is DefaultMilitaryPowerModel → MilitaryPowerModel → MBGameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMilitaryPowerModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMilitaryPowerModel → MilitaryPowerModel → MBGameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTroopPower` | `public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)` | method |
| `GetPowerOfParty` | `public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)` | method |
| `GetPowerModifierOfHero` | `public override float GetPowerModifierOfHero(Hero leaderHero)` | method |
| `GetContextModifier` | `public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)` | method |
| `GetContextForPosition` | `public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)` | method |
| `GetDefaultTroopPower` | `public override float GetDefaultTroopPower(CharacterObject troop)` | method |
| `GetContextModifier` | `public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MilitaryPowerModel](../MilitaryPowerModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
