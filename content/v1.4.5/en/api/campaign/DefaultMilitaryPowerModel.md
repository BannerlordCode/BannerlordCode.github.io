---
title: "DefaultMilitaryPowerModel"
description: "Auto-generated class reference for DefaultMilitaryPowerModel."
---
# DefaultMilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMilitaryPowerModel : MilitaryPowerModel`
**Base:** `MilitaryPowerModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMilitaryPowerModel.cs`

## Overview

`DefaultMilitaryPowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultMilitaryPowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTroopPower
`public override float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**Purpose:** Reads and returns the troop power value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetTroopPower(troop, side, context, 0);
```

### GetPowerOfParty
`public override float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the power of party value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetPowerOfParty(party, side, context);
```

### GetPowerModifierOfHero
`public override float GetPowerModifierOfHero(Hero leaderHero)`

**Purpose:** Reads and returns the power modifier of hero value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetPowerModifierOfHero(leaderHero);
```

### GetContextModifier
`public override float GetContextModifier(CharacterObject troop, BattleSideEnum battleSide, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the context modifier value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextModifier(troop, battleSide, context);
```

### GetContextForPosition
`public override MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**Purpose:** Reads and returns the context for position value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextForPosition(position);
```

### GetDefaultTroopPower
`public override float GetDefaultTroopPower(CharacterObject troop)`

**Purpose:** Reads and returns the default troop power value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetDefaultTroopPower(troop);
```

### GetContextModifier
`public override float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the context modifier value held by the this instance.

```csharp
// Obtain an instance of DefaultMilitaryPowerModel from the subsystem API first
DefaultMilitaryPowerModel defaultMilitaryPowerModel = ...;
var result = defaultMilitaryPowerModel.GetContextModifier(ship, battleSideEnum, context);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultMilitaryPowerModel>(new MyDefaultMilitaryPowerModel());
```

## See Also

- [Area Index](../)