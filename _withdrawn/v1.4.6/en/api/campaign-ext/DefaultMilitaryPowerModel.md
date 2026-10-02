---
title: "DefaultMilitaryPowerModel"
description: "DefaultMilitaryPowerModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting MilitaryPowerModel; 7 exposed members (7 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMilitaryPowerModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultMilitaryPowerModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs. It is a public class, implementing/inheriting MilitaryPowerModel; the inheritance chain is DefaultMilitaryPowerModel → MilitaryPowerModel → MBGameModel → GameModel. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMilitaryPowerModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultMilitaryPowerModel → MilitaryPowerModel → MBGameModel → GameModel. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMilitaryPowerModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTroopPower` | `public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)` | method |
| `GetPowerOfParty` | `public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)` | method |
| `GetPowerModifierOfHero` | `public override float GetPowerModifierOfHero(Hero leaderHero)` | method |
| `GetContextModifier` | `public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)` | method |
| `GetContextForPosition` | `public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)` | method |
| `GetDefaultTroopPower` | `public override float GetDefaultTroopPower(CharacterObject troop)` | method |
| `GetContextModifier` | `public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MilitaryPowerModel](../MilitaryPowerModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
