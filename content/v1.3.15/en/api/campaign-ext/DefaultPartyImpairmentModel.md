---
title: "DefaultPartyImpairmentModel"
description: "Auto-generated class reference for DefaultPartyImpairmentModel."
---
# DefaultPartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPartyImpairmentModel : PartyImpairmentModel`
**Base:** `PartyImpairmentModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyImpairmentModel.cs`

## Overview

`DefaultPartyImpairmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultPartyImpairmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSiegeExpectedVulnerabilityTime
`public override float GetSiegeExpectedVulnerabilityTime()`

**Purpose:** Reads and returns the siege expected vulnerability time value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetSiegeExpectedVulnerabilityTime();
```

### GetDisorganizedStateDuration
`public override ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**Purpose:** Reads and returns the disorganized state duration value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetDisorganizedStateDuration(party);
```

### CanGetDisorganized
`public override bool CanGetDisorganized(PartyBase party)`

**Purpose:** Checks whether the this instance meets the preconditions for get disorganized.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.CanGetDisorganized(party);
```

### GetVulnerabilityStateDuration
`public override float GetVulnerabilityStateDuration(PartyBase party)`

**Purpose:** Reads and returns the vulnerability state duration value held by the this instance.

```csharp
// Obtain an instance of DefaultPartyImpairmentModel from the subsystem API first
DefaultPartyImpairmentModel defaultPartyImpairmentModel = ...;
var result = defaultPartyImpairmentModel.GetVulnerabilityStateDuration(party);
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultPartyImpairmentModel>(new MyDefaultPartyImpairmentModel());
```

## See Also

- [Area Index](../)