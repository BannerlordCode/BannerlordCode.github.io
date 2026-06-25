---
title: "PartyMoraleModel"
description: "Auto-generated class reference for PartyMoraleModel."
---
# PartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyMoraleModel : MBGameModel<PartyMoraleModel>`
**Base:** `MBGameModel<PartyMoraleModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyMoraleModel.cs`

## Overview

`PartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HighMoraleValue` | `public abstract float HighMoraleValue { get; }` |

## Key Methods

### GetDailyStarvationMoralePenalty
`public abstract int GetDailyStarvationMoralePenalty(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the daily starvation morale penalty value held by the this instance.

```csharp
// Obtain an instance of PartyMoraleModel from the subsystem API first
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetDailyStarvationMoralePenalty(party);
```

### GetDailyNoWageMoralePenalty
`public abstract int GetDailyNoWageMoralePenalty(MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the daily no wage morale penalty value held by the this instance.

```csharp
// Obtain an instance of PartyMoraleModel from the subsystem API first
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetDailyNoWageMoralePenalty(party);
```

### GetStandardBaseMorale
`public abstract float GetStandardBaseMorale(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the standard base morale value held by the this instance.

```csharp
// Obtain an instance of PartyMoraleModel from the subsystem API first
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetStandardBaseMorale(party);
```

### GetVictoryMoraleChange
`public abstract float GetVictoryMoraleChange(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the victory morale change value held by the this instance.

```csharp
// Obtain an instance of PartyMoraleModel from the subsystem API first
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetVictoryMoraleChange(party);
```

### GetDefeatMoraleChange
`public abstract float GetDefeatMoraleChange(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the defeat morale change value held by the this instance.

```csharp
// Obtain an instance of PartyMoraleModel from the subsystem API first
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetDefeatMoraleChange(party);
```

### GetEffectivePartyMorale
`public abstract ExplainedNumber GetEffectivePartyMorale(MobileParty party, bool includeDescription = false)`

**Purpose:** **Purpose:** Reads and returns the effective party morale value held by the this instance.

```csharp
// Obtain an instance of PartyMoraleModel from the subsystem API first
PartyMoraleModel partyMoraleModel = ...;
var result = partyMoraleModel.GetEffectivePartyMorale(party, false);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyMoraleModel instance = ...;
```

## See Also

- [Area Index](../)