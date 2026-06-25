---
title: "StoryModeIncidentModel"
description: "Auto-generated class reference for StoryModeIncidentModel."
---
# StoryModeIncidentModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeIncidentModel : IncidentModel`
**Base:** `IncidentModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeIncidentModel.cs`

## Overview

`StoryModeIncidentModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `StoryModeIncidentModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetMinGlobalCooldownTime
`public override CampaignTime GetMinGlobalCooldownTime()`

**Purpose:** **Purpose:** Reads and returns the min global cooldown time value held by the this instance.

```csharp
// Obtain an instance of StoryModeIncidentModel from the subsystem API first
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetMinGlobalCooldownTime();
```

### GetMaxGlobalCooldownTime
`public override CampaignTime GetMaxGlobalCooldownTime()`

**Purpose:** **Purpose:** Reads and returns the max global cooldown time value held by the this instance.

```csharp
// Obtain an instance of StoryModeIncidentModel from the subsystem API first
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetMaxGlobalCooldownTime();
```

### GetIncidentTriggerGlobalProbability
`public override float GetIncidentTriggerGlobalProbability()`

**Purpose:** **Purpose:** Reads and returns the incident trigger global probability value held by the this instance.

```csharp
// Obtain an instance of StoryModeIncidentModel from the subsystem API first
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetIncidentTriggerGlobalProbability();
```

### GetIncidentTriggerProbabilityDuringSiege
`public override float GetIncidentTriggerProbabilityDuringSiege()`

**Purpose:** **Purpose:** Reads and returns the incident trigger probability during siege value held by the this instance.

```csharp
// Obtain an instance of StoryModeIncidentModel from the subsystem API first
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetIncidentTriggerProbabilityDuringSiege();
```

### GetIncidentTriggerProbabilityDuringWait
`public override float GetIncidentTriggerProbabilityDuringWait()`

**Purpose:** **Purpose:** Reads and returns the incident trigger probability during wait value held by the this instance.

```csharp
// Obtain an instance of StoryModeIncidentModel from the subsystem API first
StoryModeIncidentModel storyModeIncidentModel = ...;
var result = storyModeIncidentModel.GetIncidentTriggerProbabilityDuringWait();
```

## Usage Example

```csharp
Game.Current.ReplaceModel<StoryModeIncidentModel>(new MyStoryModeIncidentModel());
```

## See Also

- [Area Index](../)