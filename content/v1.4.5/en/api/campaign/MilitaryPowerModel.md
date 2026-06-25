---
title: "MilitaryPowerModel"
description: "Auto-generated class reference for MilitaryPowerModel."
---
# MilitaryPowerModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MilitaryPowerModel : MBGameModel<MilitaryPowerModel>`
**Base:** `MBGameModel<MilitaryPowerModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/MilitaryPowerModel.cs`

## Overview

`MilitaryPowerModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `MilitaryPowerModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetTroopPower
`public abstract float GetTroopPower(CharacterObject troop, BattleSideEnum side, MapEvent.PowerCalculationContext context, float leaderModifier)`

**Purpose:** Reads and returns the `troop power` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetTroopPower(troop, side, context, 0);
```

### GetPowerOfParty
`public abstract float GetPowerOfParty(PartyBase party, BattleSideEnum side, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the `power of party` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetPowerOfParty(party, side, context);
```

### GetContextModifier
`public abstract float GetContextModifier(CharacterObject troop, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the `context modifier` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetContextModifier(troop, battleSideEnum, context);
```

### GetContextModifier
`public abstract float GetContextModifier(Ship ship, BattleSideEnum battleSideEnum, MapEvent.PowerCalculationContext context)`

**Purpose:** Reads and returns the `context modifier` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetContextModifier(ship, battleSideEnum, context);
```

### GetContextForPosition
`public abstract MapEvent.PowerCalculationContext GetContextForPosition(CampaignVec2 position)`

**Purpose:** Reads and returns the `context for position` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetContextForPosition(position);
```

### GetDefaultTroopPower
`public abstract float GetDefaultTroopPower(CharacterObject troop)`

**Purpose:** Reads and returns the `default troop power` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetDefaultTroopPower(troop);
```

### GetPowerModifierOfHero
`public abstract float GetPowerModifierOfHero(Hero leaderHero)`

**Purpose:** Reads and returns the `power modifier of hero` value held by the current object.

```csharp
// Obtain an instance of MilitaryPowerModel from the subsystem API first
MilitaryPowerModel militaryPowerModel = ...;
var result = militaryPowerModel.GetPowerModifierOfHero(leaderHero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MilitaryPowerModel instance = ...;
```

## See Also

- [Area Index](../)