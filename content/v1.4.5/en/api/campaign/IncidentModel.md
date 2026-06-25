---
title: "IncidentModel"
description: "Auto-generated class reference for IncidentModel."
---
# IncidentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class IncidentModel : MBGameModel<IncidentModel>`
**Base:** `MBGameModel<IncidentModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/IncidentModel.cs`

## Overview

`IncidentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `IncidentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinGlobalCooldownTime
`public abstract CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** **Purpose:** Reads and returns the min global cooldown time value held by the this instance.

```csharp
// Obtain an instance of IncidentModel from the subsystem API first
IncidentModel incidentModel = ...;
var result = incidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public abstract CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** **Purpose:** Reads and returns the max global cooldown time value held by the this instance.

```csharp
// Obtain an instance of IncidentModel from the subsystem API first
IncidentModel incidentModel = ...;
var result = incidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public abstract float GetIncidentTriggerGlobalProbability()`

**Purpose:** **Purpose:** Reads and returns the incident trigger global probability value held by the this instance.

```csharp
// Obtain an instance of IncidentModel from the subsystem API first
IncidentModel incidentModel = ...;
var result = incidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public abstract float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** **Purpose:** Reads and returns the incident trigger probability during siege value held by the this instance.

```csharp
// Obtain an instance of IncidentModel from the subsystem API first
IncidentModel incidentModel = ...;
var result = incidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public abstract float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** **Purpose:** Reads and returns the incident trigger probability during wait value held by the this instance.

```csharp
// Obtain an instance of IncidentModel from the subsystem API first
IncidentModel incidentModel = ...;
var result = incidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
IncidentModel instance = ...;
```

## See Also

- [Area Index](../)