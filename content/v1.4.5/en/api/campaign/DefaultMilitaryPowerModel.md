---
title: "DefaultMilitaryPowerModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultMilitaryPowerModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMilitaryPowerModel.cs`

## Overview

`DefaultMilitaryPowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMilitaryPowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTroopPower
`public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**Purpose:** Gets the current value of `troop power`.

### GetPowerOfParty
`public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `power of party`.

### GetPowerModifierOfHero
`public override float GetPowerModifierOfHero(Hero leaderHero)`

**Purpose:** Gets the current value of `power modifier of hero`.

### GetContextModifier
`public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `context modifier`.

### GetContextForPosition
`public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**Purpose:** Gets the current value of `context for position`.

### GetDefaultTroopPower
`public override float GetDefaultTroopPower(CharacterObject troop)`

**Purpose:** Gets the current value of `default troop power`.

### GetContextModifier
`public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `context modifier`.

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel());
```

## See Also

- [Complete Class Catalog](../catalog)