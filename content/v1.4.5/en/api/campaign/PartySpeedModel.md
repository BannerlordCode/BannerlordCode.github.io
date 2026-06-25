---
title: "PartySpeedModel"
description: "Auto-generated class reference for PartySpeedModel."
---
# PartySpeedModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartySpeedModel : MBGameModel<PartySpeedModel>`
**Base:** `MBGameModel<PartySpeedModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartySpeedModel.cs`

## Overview

`PartySpeedModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PartySpeedModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseSpeed` | `public abstract float BaseSpeed { get; }` |
| `MinimumSpeed` | `public abstract float MinimumSpeed { get; }` |

## Key Methods

### CalculateBaseSpeed
`public abstract ExplainedNumber CalculateBaseSpeed(MobileParty party, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)`

**Purpose:** **Purpose:** Calculates the current value or result of base speed.

```csharp
// Obtain an instance of PartySpeedModel from the subsystem API first
PartySpeedModel partySpeedModel = ...;
var result = partySpeedModel.CalculateBaseSpeed(party, false, 0, 0);
```

### CalculateFinalSpeed
`public abstract ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)`

**Purpose:** **Purpose:** Calculates the current value or result of final speed.

```csharp
// Obtain an instance of PartySpeedModel from the subsystem API first
PartySpeedModel partySpeedModel = ...;
var result = partySpeedModel.CalculateFinalSpeed(mobileParty, finalSpeed);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartySpeedModel instance = ...;
```

## See Also

- [Area Index](../)