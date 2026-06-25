---
title: "CheerReactionTimeSettings"
description: "Auto-generated class reference for CheerReactionTimeSettings."
---
# CheerReactionTimeSettings

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CheerReactionTimeSettings`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## Overview

`CheerReactionTimeSettings` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheerReactionTimeSettings
`public struct CheerReactionTimeSettings(float minDuration, float maxDuration)`

**Purpose:** **Purpose:** Executes the CheerReactionTimeSettings logic.

```csharp
// Obtain an instance of CheerReactionTimeSettings from the subsystem API first
CheerReactionTimeSettings cheerReactionTimeSettings = ...;
var result = cheerReactionTimeSettings.CheerReactionTimeSettings(0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CheerReactionTimeSettings cheerReactionTimeSettings = ...;
cheerReactionTimeSettings.CheerReactionTimeSettings(0, 0);
```

## See Also

- [Area Index](../)