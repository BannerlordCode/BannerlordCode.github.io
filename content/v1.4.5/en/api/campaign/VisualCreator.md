---
title: "VisualCreator"
description: "Auto-generated class reference for VisualCreator."
---
# VisualCreator

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualCreator`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/VisualCreator.cs`

## Overview

`VisualCreator` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MapEventVisualCreator` | `public IMapEventVisualCreator MapEventVisualCreator { get; set; }` |

## Key Methods

### CreateMapEventVisual
`public IMapEventVisual CreateMapEventVisual(MapEvent mapEvent)`

**Purpose:** **Purpose:** Constructs a new map event visual entity and returns it to the caller.

```csharp
// Obtain an instance of VisualCreator from the subsystem API first
VisualCreator visualCreator = ...;
var result = visualCreator.CreateMapEventVisual(mapEvent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VisualCreator visualCreator = ...;
visualCreator.CreateMapEventVisual(mapEvent);
```

## See Also

- [Area Index](../)