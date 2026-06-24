<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailCreatorView`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ThumbnailCreatorView

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public sealed class ThumbnailCreatorView : View`
**Base:** `View`
**File:** `TaleWorlds.Engine/ThumbnailCreatorView.cs`

## Overview

`ThumbnailCreatorView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `ThumbnailCreatorView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### CreateThumbnailCreatorView
`public static ThumbnailCreatorView CreateThumbnailCreatorView()`

**Purpose:** Creates a new `thumbnail creator view` instance or object.

### RegisterScene
`public void RegisterScene(Scene scene, bool usePostFx = true)`

**Purpose:** Handles logic related to `register scene`.

### RegisterCachedEntity
`public void RegisterCachedEntity(Scene scene, GameEntity entity, string cacheId)`

**Purpose:** Handles logic related to `register cached entity`.

### UnregisterCachedEntity
`public void UnregisterCachedEntity(string cacheId)`

**Purpose:** Handles logic related to `unregister cached entity`.

### RegisterRenderRequest
`public void RegisterRenderRequest(ref ThumbnailRenderRequest request)`

**Purpose:** Handles logic related to `register render request`.

### ClearRequests
`public void ClearRequests()`

**Purpose:** Handles logic related to `clear requests`.

### CancelRequest
`public void CancelRequest(string renderID)`

**Purpose:** Checks whether the current object can `cel request`.

### GetNumberOfPendingRequests
`public int GetNumberOfPendingRequests()`

**Purpose:** Gets the current value of `number of pending requests`.

### IsMemoryCleared
`public bool IsMemoryCleared()`

**Purpose:** Handles logic related to `is memory cleared`.

### OnThumbnailRenderCompleteDelegate
`public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget)`

**Purpose:** Called when the `thumbnail render complete delegate` event is raised.

## Usage Example

```csharp
var view = new ThumbnailCreatorView();
```

## See Also

- [Complete Class Catalog](../catalog)