---
title: "HeroAgentLocationModel"
description: "Auto-generated class reference for HeroAgentLocationModel."
---
# HeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**Base:** `MBGameModel<HeroAgentLocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs`

## Overview

`HeroAgentLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `HeroAgentLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### WillBeListedInOverlay
`public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of HeroAgentLocationModel from the subsystem API first
HeroAgentLocationModel heroAgentLocationModel = ...;
var result = heroAgentLocationModel.WillBeListedInOverlay(locationCharacter);
```

### GetLocationForHero
`public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroSpawnDetail)`

**Purpose:** Reads and returns the `location for hero` value held by the current object.

```csharp
// Obtain an instance of HeroAgentLocationModel from the subsystem API first
HeroAgentLocationModel heroAgentLocationModel = ...;
var result = heroAgentLocationModel.GetLocationForHero(hero, settlement, heroSpawnDetail);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
HeroAgentLocationModel instance = ...;
```

## See Also

- [Area Index](../)