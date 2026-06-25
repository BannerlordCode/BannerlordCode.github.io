---
title: "DefaultHeroAgentLocationModel"
description: "Auto-generated class reference for DefaultHeroAgentLocationModel."
---
# DefaultHeroAgentLocationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**Base:** `HeroAgentLocationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroAgentLocationModel.cs`

## Overview

`DefaultHeroAgentLocationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultHeroAgentLocationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### WillBeListedInOverlay
`public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of DefaultHeroAgentLocationModel from the subsystem API first
DefaultHeroAgentLocationModel defaultHeroAgentLocationModel = ...;
var result = defaultHeroAgentLocationModel.WillBeListedInOverlay(locationCharacter);
```

### GetLocationForHero
`public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroLocationDetail heroLocationDetail)`

**Purpose:** Reads and returns the `location for hero` value held by the current object.

```csharp
// Obtain an instance of DefaultHeroAgentLocationModel from the subsystem API first
DefaultHeroAgentLocationModel defaultHeroAgentLocationModel = ...;
var result = defaultHeroAgentLocationModel.GetLocationForHero(hero, settlement, heroLocationDetail);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultHeroAgentLocationModel>(new MyDefaultHeroAgentLocationModel());
```

## See Also

- [Area Index](../)