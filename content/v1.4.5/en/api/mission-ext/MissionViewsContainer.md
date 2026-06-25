---
title: "MissionViewsContainer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionViewsContainer`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionViewsContainer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionViewsContainer`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionViewsContainer.cs`

## Overview

`MissionViewsContainer` lives in `TaleWorlds.MountAndBlade.View.MissionViews` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Add
`public void Add(MissionView missionView)`

**Purpose:** Adds `add` to the current collection or state.

### Remove
`public void Remove(MissionView missionView)`

**Purpose:** Removes `remove` from the current collection or state.

### Contains
`public bool Contains(MissionView missionView)`

**Purpose:** Handles logic related to `contains`.

### ForEach
`public void ForEach(Action<MissionView> action)`

**Purpose:** Handles logic related to `for each`.

## Usage Example

```csharp
var value = new MissionViewsContainer();
value.Add(missionView);
```

## See Also

- [Complete Class Catalog](../catalog)