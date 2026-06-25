---
title: "PartyImpairmentModel"
description: "Auto-generated class reference for PartyImpairmentModel."
---
# PartyImpairmentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyImpairmentModel : MBGameModel<PartyImpairmentModel>`
**Base:** `MBGameModel<PartyImpairmentModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyImpairmentModel.cs`

## Overview

`PartyImpairmentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartyImpairmentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetDisorganizedStateDuration
`public abstract ExplainedNumber GetDisorganizedStateDuration(MobileParty party)`

**Purpose:** Reads and returns the disorganized state duration value held by the this instance.

```csharp
// Obtain an instance of PartyImpairmentModel from the subsystem API first
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.GetDisorganizedStateDuration(party);
```

### GetVulnerabilityStateDuration
`public abstract float GetVulnerabilityStateDuration(PartyBase party)`

**Purpose:** Reads and returns the vulnerability state duration value held by the this instance.

```csharp
// Obtain an instance of PartyImpairmentModel from the subsystem API first
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.GetVulnerabilityStateDuration(party);
```

### GetSiegeExpectedVulnerabilityTime
`public abstract float GetSiegeExpectedVulnerabilityTime()`

**Purpose:** Reads and returns the siege expected vulnerability time value held by the this instance.

```csharp
// Obtain an instance of PartyImpairmentModel from the subsystem API first
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.GetSiegeExpectedVulnerabilityTime();
```

### CanGetDisorganized
`public abstract bool CanGetDisorganized(PartyBase partyBase)`

**Purpose:** Checks whether the this instance meets the preconditions for get disorganized.

```csharp
// Obtain an instance of PartyImpairmentModel from the subsystem API first
PartyImpairmentModel partyImpairmentModel = ...;
var result = partyImpairmentModel.CanGetDisorganized(partyBase);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyImpairmentModel instance = ...;
```

## See Also

- [Area Index](../)