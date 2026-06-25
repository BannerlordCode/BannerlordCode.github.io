---
title: "BehaviorRetakeCastleKeyPosition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorRetakeCastleKeyPosition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BehaviorRetakeCastleKeyPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BehaviorRetakeCastleKeyPosition : BehaviorComponent`
**Base:** `BehaviorComponent`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BehaviorRetakeCastleKeyPosition.cs`

## Overview

`BehaviorRetakeCastleKeyPosition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnValidBehaviorSideChanged
`public override void OnValidBehaviorSideChanged()`

**Purpose:** Called when the `valid behavior side changed` event is raised.

### TickOccasionally
`public override void TickOccasionally()`

**Purpose:** Handles logic related to `tick occasionally`.

## Usage Example

```csharp
var value = new BehaviorRetakeCastleKeyPosition();
value.OnValidBehaviorSideChanged();
```

## See Also

- [Complete Class Catalog](../catalog)