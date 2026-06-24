<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheerReactionTimeSettings`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CheerReactionTimeSettings

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct CheerReactionTimeSettings`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVictoryLogic.cs`

## Overview

`CheerReactionTimeSettings` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CheerReactionTimeSettings
`public struct CheerReactionTimeSettings(float minDuration, float maxDuration)`

**Purpose:** Handles logic related to `cheer reaction time settings`.

## Usage Example

```csharp
var value = new CheerReactionTimeSettings();
value.CheerReactionTimeSettings(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)