---
title: "DefaultValuationModel"
description: "Auto-generated class reference for DefaultValuationModel."
---
# DefaultValuationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultValuationModel : ValuationModel`
**Base:** `ValuationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultValuationModel.cs`

## Overview

`DefaultValuationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultValuationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMilitaryValueOfParty
`public override float GetMilitaryValueOfParty(MobileParty party)`

**Purpose:** Reads and returns the military value of party value held by the this instance.

```csharp
// Obtain an instance of DefaultValuationModel from the subsystem API first
DefaultValuationModel defaultValuationModel = ...;
var result = defaultValuationModel.GetMilitaryValueOfParty(party);
```

### GetValueOfTroop
`public override float GetValueOfTroop(CharacterObject troop)`

**Purpose:** Reads and returns the value of troop value held by the this instance.

```csharp
// Obtain an instance of DefaultValuationModel from the subsystem API first
DefaultValuationModel defaultValuationModel = ...;
var result = defaultValuationModel.GetValueOfTroop(troop);
```

### GetValueOfHero
`public override float GetValueOfHero(Hero hero)`

**Purpose:** Reads and returns the value of hero value held by the this instance.

```csharp
// Obtain an instance of DefaultValuationModel from the subsystem API first
DefaultValuationModel defaultValuationModel = ...;
var result = defaultValuationModel.GetValueOfHero(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultValuationModel>(new MyDefaultValuationModel());
```

## See Also

- [Area Index](../)