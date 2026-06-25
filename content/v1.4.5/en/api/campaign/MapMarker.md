---
title: "MapMarker"
description: "Auto-generated class reference for MapMarker."
---
# MapMarker

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarker : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Map/MapMarker.cs`

## Overview

`MapMarker` lives in `TaleWorlds.CampaignSystem.Map` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Map` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public Banner Banner { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `IsVisibleOnMap` | `public bool IsVisibleOnMap { get; }` |
| `QuestId` | `public string QuestId { get; }` |

## Key Methods

### GetBanner
`public Banner GetBanner()`

**Purpose:** **Purpose:** Reads and returns the banner value held by the this instance.

```csharp
// Obtain an instance of MapMarker from the subsystem API first
MapMarker mapMarker = ...;
var result = mapMarker.GetBanner();
```

### GetName
`public TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of MapMarker from the subsystem API first
MapMarker mapMarker = ...;
var result = mapMarker.GetName();
```

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** **Purpose:** Reads and returns the position value held by the this instance.

```csharp
// Obtain an instance of MapMarker from the subsystem API first
MapMarker mapMarker = ...;
var result = mapMarker.GetPosition();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapMarker mapMarker = ...;
mapMarker.GetBanner();
```

## See Also

- [Area Index](../)