---
title: "VisualTrackerManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualTrackerManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VisualTrackerManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualTrackerManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/VisualTrackerManager.cs`

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

**Purpose:** Handles logic related to `register object`.

### CheckTracked
`public bool CheckTracked(ITrackableBase trackableObject)`

**Purpose:** Handles logic related to `check tracked`.

### RemoveTrackedObject
`public void RemoveTrackedObject(ITrackableBase trackableObject, bool forceRemove = false)`

**Purpose:** Removes `tracked object` from the current collection or state.

### SetDirty
`public void SetDirty()`

**Purpose:** Sets the value or state of `dirty`.

## Usage Example

```csharp
var manager = VisualTrackerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)