---
title: "SiegeAftermathModel"
description: "Auto-generated class reference for SiegeAftermathModel."
---
# SiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SiegeAftermathModel : MBGameModel<SiegeAftermathModel>`
**Base:** `MBGameModel<SiegeAftermathModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/SiegeAftermathModel.cs`

## Overview

`SiegeAftermathModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SiegeAftermathModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeAftermathTraitXpChangeForPlayer
`public abstract int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)`

**Purpose:** Reads and returns the siege aftermath trait xp change for player value held by the this instance.

```csharp
// Obtain an instance of SiegeAftermathModel from the subsystem API first
SiegeAftermathModel siegeAftermathModel = ...;
var result = siegeAftermathModel.GetSiegeAftermathTraitXpChangeForPlayer(trait, devastatedSettlement, aftermathType);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
SiegeAftermathModel instance = ...;
```

## See Also

- [Area Index](../)