---
title: "ClanTierModel"
description: "Auto-generated class reference for ClanTierModel."
---
# ClanTierModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ClanTierModel.cs`

## Overview

`ClanTierModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ClanTierModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `MinClanTier` | `public abstract int MinClanTier { get; }` |
| `MaxClanTier` | `public abstract int MaxClanTier { get; }` |
| `MercenaryEligibleTier` | `public abstract int MercenaryEligibleTier { get; }` |
| `VassalEligibleTier` | `public abstract int VassalEligibleTier { get; }` |
| `BannerEligibleTier` | `public abstract int BannerEligibleTier { get; }` |
| `RebelClanStartingTier` | `public abstract int RebelClanStartingTier { get; }` |
| `CompanionToLordClanStartingTier` | `public abstract int CompanionToLordClanStartingTier { get; }` |

## Key Methods

### CalculateInitialRenown
`public abstract int CalculateInitialRenown(Clan clan)`

**Purpose:** Calculates the current value or result of `initial renown`.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.CalculateInitialRenown(clan);
```

### CalculateInitialInfluence
`public abstract int CalculateInitialInfluence(Clan clan)`

**Purpose:** Calculates the current value or result of `initial influence`.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.CalculateInitialInfluence(clan);
```

### CalculateTier
`public abstract int CalculateTier(Clan clan)`

**Purpose:** Calculates the current value or result of `tier`.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.CalculateTier(clan);
```

### HasUpcomingTier
`public abstract ValueTuple<ExplainedNumber, bool> HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

**Purpose:** Determines whether the current object already holds `upcoming tier`.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.HasUpcomingTier(clan, extraExplanation, false);
```

### GetRequiredRenownForTier
`public abstract int GetRequiredRenownForTier(int tier)`

**Purpose:** Reads and returns the `required renown for tier` value held by the current object.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.GetRequiredRenownForTier(0);
```

### GetPartyLimitForTier
`public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

**Purpose:** Reads and returns the `party limit for tier` value held by the current object.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.GetPartyLimitForTier(clan, 0);
```

### GetCompanionLimit
`public abstract int GetCompanionLimit(Clan clan)`

**Purpose:** Reads and returns the `companion limit` value held by the current object.

```csharp
// Obtain an instance of ClanTierModel from the subsystem API first
ClanTierModel clanTierModel = ...;
var result = clanTierModel.GetCompanionLimit(clan);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ClanTierModel instance = ...;
```

## See Also

- [Area Index](../)