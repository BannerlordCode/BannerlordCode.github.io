---
title: "DefaultPartyMoraleModel"
description: "Auto-generated class reference for DefaultPartyMoraleModel."
---
# DefaultPartyMoraleModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyMoraleModel : PartyMoraleModel`
**Base:** `PartyMoraleModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyMoraleModel.cs`

## Overview

`DefaultPartyMoraleModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyMoraleModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDailyStarvationMoralePenalty
`public override int GetDailyStarvationMoralePenalty(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the daily starvation morale penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDailyStarvationMoralePenalty(party);
```

### GetDailyNoWageMoralePenalty
`public override int GetDailyNoWageMoralePenalty(MobileParty party)`

**Purpose:** **Purpose:** Reads and returns the daily no wage morale penalty value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDailyNoWageMoralePenalty(party);
```

### GetStandardBaseMorale
`public override float GetStandardBaseMorale(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the standard base morale value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetStandardBaseMorale(party);
```

### GetVictoryMoraleChange
`public override float GetVictoryMoraleChange(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the victory morale change value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetVictoryMoraleChange(party);
```

### GetDefeatMoraleChange
`public override float GetDefeatMoraleChange(PartyBase party)`

**Purpose:** **Purpose:** Reads and returns the defeat morale change value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetDefeatMoraleChange(party);
```

### GetEffectivePartyMorale
`public override ExplainedNumber GetEffectivePartyMorale(MobileParty mobileParty, bool includeDescription = false)`

**Purpose:** **Purpose:** Reads and returns the effective party morale value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyMoraleModel from the subsystem API first
DefaultPartyMoraleModel defaultPartyMoraleModel = ...;
var result = defaultPartyMoraleModel.GetEffectivePartyMorale(mobileParty, false);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyMoraleModel>(new MyDefaultPartyMoraleModel());
```

## See Also

- [Area Index](../)