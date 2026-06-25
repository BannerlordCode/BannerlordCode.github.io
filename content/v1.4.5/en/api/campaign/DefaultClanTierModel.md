---
title: "DefaultClanTierModel"
description: "Auto-generated class reference for DefaultClanTierModel."
---
# DefaultClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultClanTierModel : ClanTierModel`
**Base:** `ClanTierModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanTierModel.cs`

## Overview

`DefaultClanTierModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultClanTierModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CalculateInitialRenown
`public override int CalculateInitialRenown(Clan clan)`

**Purpose:** Calculates the current value or result of `initial renown`.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateInitialRenown(clan);
```

### CalculateInitialInfluence
`public override int CalculateInitialInfluence(Clan clan)`

**Purpose:** Calculates the current value or result of `initial influence`.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateInitialInfluence(clan);
```

### CalculateTier
`public override int CalculateTier(Clan clan)`

**Purpose:** Calculates the current value or result of `tier`.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.CalculateTier(clan);
```

### GetRequiredRenownForTier
`public override int GetRequiredRenownForTier(int tier)`

**Purpose:** Reads and returns the `required renown for tier` value held by the current object.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetRequiredRenownForTier(0);
```

### GetPartyLimitForTier
`public override int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**Purpose:** Reads and returns the `party limit for tier` value held by the current object.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetPartyLimitForTier(clan, 0);
```

### GetCompanionLimit
`public override int GetCompanionLimit(Clan clan)`

**Purpose:** Reads and returns the `companion limit` value held by the current object.

```csharp
// Obtain an instance of DefaultClanTierModel from the subsystem API first
DefaultClanTierModel defaultClanTierModel = ...;
var result = defaultClanTierModel.GetCompanionLimit(clan);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultClanTierModel>(new MyDefaultClanTierModel());
```

## See Also

- [Area Index](../)