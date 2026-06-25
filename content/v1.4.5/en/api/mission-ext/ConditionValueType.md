---
title: "ConditionValueType"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConditionValueType`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConditionValueType

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges/ConditionValueType.cs`

## Overview

`ConditionValueType` lives in `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var example = new ConditionValueType();
```

## See Also

- [Complete Class Catalog](../catalog)