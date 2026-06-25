---
title: "TroopMissionInfo"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopMissionInfo`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopMissionInfo

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TroopMissionInfo`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TroopMissionInfo.cs`

## Overview

`TroopMissionInfo` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new TroopMissionInfo();
```

## See Also

- [Complete Class Catalog](../catalog)