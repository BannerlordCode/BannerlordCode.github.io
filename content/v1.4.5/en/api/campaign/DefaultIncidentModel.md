---
title: "DefaultIncidentModel"
description: "Auto-generated class reference for DefaultIncidentModel."
---
# DefaultIncidentModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultIncidentModel.cs`

## Overview

`DefaultIncidentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `DefaultIncidentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinGlobalCooldownTime
`public override CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** Reads and returns the `min global cooldown time` value held by the current object.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public override CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** Reads and returns the `max global cooldown time` value held by the current object.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public override float GetIncidentTriggerGlobalProbability()`

**Purpose:** Reads and returns the `incident trigger global probability` value held by the current object.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public override float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** Reads and returns the `incident trigger probability during siege` value held by the current object.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public override float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** Reads and returns the `incident trigger probability during wait` value held by the current object.

```csharp
// Obtain an instance of DefaultIncidentModel from the subsystem API first
DefaultIncidentModel defaultIncidentModel = ...;
var result = defaultIncidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<DefaultIncidentModel>(new MyDefaultIncidentModel());
```

## See Also

- [Area Index](../)