---
title: "MilitaryPowerModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MilitaryPowerModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**Base:** `MBGameModel<MilitaryPowerModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MilitaryPowerModel.cs`

## Overview

`MilitaryPowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MilitaryPowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTroopPower
`public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**Purpose:** Gets the current value of `troop power`.

### GetPowerOfParty
`public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `power of party`.

### GetContextModifier
`public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `context modifier`.

### GetContextModifier
`public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Gets the current value of `context modifier`.

### GetContextForPosition
`public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**Purpose:** Gets the current value of `context for position`.

### GetDefaultTroopPower
`public abstract float GetDefaultTroopPower(CharacterObject troop)`

**Purpose:** Gets the current value of `default troop power`.

### GetPowerModifierOfHero
`public abstract float GetPowerModifierOfHero(Hero leaderHero)`

**Purpose:** Gets the current value of `power modifier of hero`.

## Usage Example

```csharp
var implementation = new CustomMilitaryPowerModel();
```

## See Also

- [Complete Class Catalog](../catalog)