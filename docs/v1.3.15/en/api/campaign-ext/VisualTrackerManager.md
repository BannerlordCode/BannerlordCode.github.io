<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VisualTrackerManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VisualTrackerManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VisualTrackerManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/VisualTrackerManager.cs`

## Overview

`VisualTrackerManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `TrackedObjectsVersion` | `public int TrackedObjectsVersion { get; }` |

## Key Methods

### RegisterObject
```csharp
public void RegisterObject(ITrackableCampaignObject trackableObject)
```

### CheckTracked
```csharp
public bool CheckTracked(ITrackableBase trackableObject)
```

### RemoveTrackedObject
```csharp
public void RemoveTrackedObject(ITrackableBase trackableObject, bool forceRemove = false)
```

### SetDirty
```csharp
public void SetDirty()
```

## Usage Example

```csharp
// Typical usage of VisualTrackerManager (Manager)
VisualTrackerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)