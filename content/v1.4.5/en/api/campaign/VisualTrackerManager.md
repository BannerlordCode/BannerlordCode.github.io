---
title: "VisualTrackerManager"
description: "Auto-generated class reference for VisualTrackerManager."
---
# VisualTrackerManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualTrackerManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/VisualTrackerManager.cs`

## Overview

`VisualTrackerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `VisualTrackerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TrackedObjectsVersion` | `public int TrackedObjectsVersion { get; }` |

## Key Methods

### RegisterObject
`public void RegisterObject(ITrackableCampaignObject trackableObject)`

**Purpose:** Registers `object` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of VisualTrackerManager from the subsystem API first
VisualTrackerManager visualTrackerManager = ...;
visualTrackerManager.RegisterObject(trackableObject);
```

### CheckTracked
`public bool CheckTracked(ITrackableBase trackableObject)`

**Purpose:** Verifies whether `tracked` holds true for the current object.

```csharp
// Obtain an instance of VisualTrackerManager from the subsystem API first
VisualTrackerManager visualTrackerManager = ...;
var result = visualTrackerManager.CheckTracked(trackableObject);
```

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableBase trackableObject, bool forceRemove = false)`

**Purpose:** Removes `tracked object` from the current collection or state.

```csharp
// Obtain an instance of VisualTrackerManager from the subsystem API first
VisualTrackerManager visualTrackerManager = ...;
visualTrackerManager.RemoveTrackedObject(trackableObject, false);
```

### SetDirty
`public void SetDirty()`

**Purpose:** Assigns a new value to `dirty` and updates the object's internal state.

```csharp
// Obtain an instance of VisualTrackerManager from the subsystem API first
VisualTrackerManager visualTrackerManager = ...;
visualTrackerManager.SetDirty();
```

## Usage Example

```csharp
var manager = VisualTrackerManager.Current;
```

## See Also

- [Area Index](../)