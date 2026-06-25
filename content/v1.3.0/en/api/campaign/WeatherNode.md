---
title: "WeatherNode"
description: "Auto-generated class reference for WeatherNode."
---
# WeatherNode

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeatherNode`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Map/WeatherNode.cs`

## Overview

`WeatherNode` lives in `TaleWorlds.CampaignSystem.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsVisuallyDirty` | `public bool IsVisuallyDirty { get; }` |

## Key Methods

### SetVisualDirty
`public void SetVisualDirty()`

**Purpose:** Assigns a new value to `visual dirty` and updates the object's internal state.

```csharp
// Obtain an instance of WeatherNode from the subsystem API first
WeatherNode weatherNode = ...;
weatherNode.SetVisualDirty();
```

### OnVisualUpdated
`public void OnVisualUpdated()`

**Purpose:** Invoked when the `visual updated` event is raised.

```csharp
// Obtain an instance of WeatherNode from the subsystem API first
WeatherNode weatherNode = ...;
weatherNode.OnVisualUpdated();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WeatherNode weatherNode = ...;
weatherNode.SetVisualDirty();
```

## See Also

- [Area Index](../)