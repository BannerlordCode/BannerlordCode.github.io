---
title: "ValuationModel"
description: "Auto-generated class reference for ValuationModel."
---
# ValuationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**Base:** `MBGameModel<ValuationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs`

## Overview

`ValuationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ValuationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetValueOfTroop
`public abstract float GetValueOfTroop(CharacterObject troop)`

**Purpose:** **Purpose:** Reads and returns the value of troop value held by the this instance.

```csharp
// Obtain an instance of ValuationModel from the subsystem API first
ValuationModel valuationModel = ...;
var result = valuationModel.GetValueOfTroop(troop);
```

### GetMilitaryValueOfParty
`public abstract float GetMilitaryValueOfParty(MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the military value of party value held by the this instance.

```csharp
// Obtain an instance of ValuationModel from the subsystem API first
ValuationModel valuationModel = ...;
var result = valuationModel.GetMilitaryValueOfParty(party);
```

### GetValueOfHero
`public abstract float GetValueOfHero(Hero hero)`

**Purpose:** **Purpose:** Reads and returns the value of hero value held by the this instance.

```csharp
// Obtain an instance of ValuationModel from the subsystem API first
ValuationModel valuationModel = ...;
var result = valuationModel.GetValueOfHero(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ValuationModel instance = ...;
```

## See Also

- [Area Index](../)