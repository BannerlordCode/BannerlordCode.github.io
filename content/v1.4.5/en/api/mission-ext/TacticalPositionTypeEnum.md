---
title: "TacticalPositionTypeEnum"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TacticalPositionTypeEnum`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TacticalPositionTypeEnum

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum TacticalPositionTypeEnum`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/TacticalPosition.cs`

## Overview

`TacticalPositionTypeEnum` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
TacticalPositionTypeEnum example = TacticalPositionTypeEnum.Value;
```

## See Also

- [Complete Class Catalog](../catalog)