---
title: "MapMarker"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapMarker`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MapMarker

**Namespace:** TaleWorlds.CampaignSystem.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapMarker : ITrackableCampaignObject, ITrackableBase`
**Base:** `ITrackableCampaignObject`
**File:** `TaleWorlds.CampaignSystem/Map/MapMarker.cs`

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
| `IsReady` | `public bool IsReady { get; }` |

## Key Methods

### GetBanner
`public Banner GetBanner()`

**Purpose:** Gets the current value of `banner`.

### GetName
`public TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetPosition
`public Vec3 GetPosition()`

**Purpose:** Gets the current value of `position`.

## Usage Example

```csharp
var value = new MapMarker();
value.GetBanner();
```

## See Also

- [Complete Class Catalog](../catalog)