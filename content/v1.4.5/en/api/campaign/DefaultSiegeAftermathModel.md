---
title: "DefaultSiegeAftermathModel"
description: "Auto-generated class reference for DefaultSiegeAftermathModel."
---
# DefaultSiegeAftermathModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultSiegeAftermathModel : SiegeAftermathModel`
**Base:** `SiegeAftermathModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultSiegeAftermathModel.cs`

## Overview

`DefaultSiegeAftermathModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultSiegeAftermathModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeAftermathTraitXpChangeForPlayer
`public override int GetSiegeAftermathTraitXpChangeForPlayer(TraitObject trait, Settlement devastatedSettlement, SiegeAftermathAction.SiegeAftermath aftermathType)`

**Purpose:** Reads and returns the siege aftermath trait xp change for player value held by the this instance.

```csharp
// Obtain an instance of DefaultSiegeAftermathModel from the subsystem API first
DefaultSiegeAftermathModel defaultSiegeAftermathModel = ...;
var result = defaultSiegeAftermathModel.GetSiegeAftermathTraitXpChangeForPlayer(trait, devastatedSettlement, aftermathType);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultSiegeAftermathModel>(new MyDefaultSiegeAftermathModel());
```

## See Also

- [Area Index](../)