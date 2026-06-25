---
title: "FFAMissionRepresentative"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FFAMissionRepresentative`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FFAMissionRepresentative

**Namespace:** TaleWorlds.MountAndBlade.MissionRepresentatives
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FFAMissionRepresentative : MissionRepresentativeBase`
**Base:** `MissionRepresentativeBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.MissionRepresentatives/FFAMissionRepresentative.cs`

## Overview

`FFAMissionRepresentative` lives in `TaleWorlds.MountAndBlade.MissionRepresentatives` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.MissionRepresentatives` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new FFAMissionRepresentative();
```

## See Also

- [Complete Class Catalog](../catalog)