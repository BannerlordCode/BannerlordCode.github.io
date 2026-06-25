---
title: "LaneStateEnum"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LaneStateEnum`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# LaneStateEnum

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum LaneStateEnum`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SiegeLane.cs`

## Overview

`LaneStateEnum` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
LaneStateEnum example = LaneStateEnum.Value;
```

## See Also

- [Complete Class Catalog](../catalog)