---
title: "MilitaryPowerModel"
description: "MilitaryPowerModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MilitaryPowerModel>; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs."
---
# MilitaryPowerModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs`

## Overview

MilitaryPowerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MilitaryPowerModel>; the inheritance chain is MilitaryPowerModel → MBGameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MilitaryPowerModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MilitaryPowerModel → MBGameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTroopPower` | `public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier);` | method |
| `GetPowerOfParty` | `public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context);` | method |
| `GetContextModifier` | `public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context);` | method |
| `GetContextModifier` | `public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context);` | method |
| `GetContextForPosition` | `public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position);` | method |
| `GetDefaultTroopPower` | `public abstract float GetDefaultTroopPower(CharacterObject troop);` | method |
| `GetPowerModifierOfHero` | `public abstract float GetPowerModifierOfHero(Hero leaderHero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
