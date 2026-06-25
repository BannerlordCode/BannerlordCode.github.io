---
title: "DefaultGenericXpModel"
description: "Auto-generated class reference for DefaultGenericXpModel."
---
# DefaultGenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultGenericXpModel.cs`

## Overview

`DefaultGenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultGenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**Purpose:** Reads and returns the xp multiplier value held by the this instance.

```csharp
// Obtain an instance of DefaultGenericXpModel from the subsystem API first
DefaultGenericXpModel defaultGenericXpModel = ...;
var result = defaultGenericXpModel.GetXpMultiplier(hero);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultGenericXpModel>(new MyDefaultGenericXpModel());
```

## See Also

- [Area Index](../)