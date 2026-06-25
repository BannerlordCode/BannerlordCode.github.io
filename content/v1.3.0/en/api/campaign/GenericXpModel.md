---
title: "GenericXpModel"
description: "Auto-generated class reference for GenericXpModel."
---
# GenericXpModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class GenericXpModel : MBGameModel<GenericXpModel>`
**Base:** `MBGameModel<GenericXpModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/GenericXpModel.cs`

## Overview

`GenericXpModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `GenericXpModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetXpMultiplier
`public abstract float GetXpMultiplier(Hero hero)`

**Purpose:** Reads and returns the `xp multiplier` value held by the current object.

```csharp
// Obtain an instance of GenericXpModel from the subsystem API first
GenericXpModel genericXpModel = ...;
var result = genericXpModel.GetXpMultiplier(hero);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
GenericXpModel instance = ...;
```

## See Also

- [Area Index](../)