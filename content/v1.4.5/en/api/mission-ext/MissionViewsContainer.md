---
title: "MissionViewsContainer"
description: "Auto-generated class reference for MissionViewsContainer."
---
# MissionViewsContainer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionViewsContainer`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionViewsContainer.cs`

## Overview

`MissionViewsContainer` lives in `TaleWorlds.MountAndBlade.View.MissionViews` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.MissionViews` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Add
`public void Add(MissionView missionView)`

**Purpose:** **Purpose:** Adds an item to the current collection or state.

```csharp
// Obtain an instance of MissionViewsContainer from the subsystem API first
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.Add(missionView);
```

### Remove
`public void Remove(MissionView missionView)`

**Purpose:** **Purpose:** Removes an item from the current collection or state.

```csharp
// Obtain an instance of MissionViewsContainer from the subsystem API first
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.Remove(missionView);
```

### Contains
`public bool Contains(MissionView missionView)`

**Purpose:** **Purpose:** Indicates whether the this instance contains the specified item.

```csharp
// Obtain an instance of MissionViewsContainer from the subsystem API first
MissionViewsContainer missionViewsContainer = ...;
var result = missionViewsContainer.Contains(missionView);
```

### ForEach
`public void ForEach(Action<MissionView> action)`

**Purpose:** **Purpose:** Executes the ForEach logic.

```csharp
// Obtain an instance of MissionViewsContainer from the subsystem API first
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.ForEach(action);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionViewsContainer missionViewsContainer = ...;
missionViewsContainer.Add(missionView);
```

## See Also

- [Area Index](../)