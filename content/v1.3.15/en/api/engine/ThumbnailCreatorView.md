---
title: "ThumbnailCreatorView"
description: "Auto-generated class reference for ThumbnailCreatorView."
---
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

**Purpose:** Constructs a new `thumbnail creator view` entity and returns it to the caller.

```csharp
// Static call; no instance required
ThumbnailCreatorView.CreateThumbnailCreatorView();
```

### RegisterScene
`public void RegisterScene(Scene scene, bool usePostFx = true)`

**Purpose:** Registers `scene` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.RegisterScene(scene, false);
```

### RegisterCachedEntity
`public void RegisterCachedEntity(Scene scene, GameEntity entity, string cacheId)`

**Purpose:** Registers `cached entity` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.RegisterCachedEntity(scene, entity, "example");
```

### UnregisterCachedEntity
`public void UnregisterCachedEntity(string cacheId)`

**Purpose:** Unregisters `cached entity` from the current system.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.UnregisterCachedEntity("example");
```

### RegisterRenderRequest
`public void RegisterRenderRequest(ref ThumbnailRenderRequest request)`

**Purpose:** Registers `render request` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.RegisterRenderRequest(request);
```

### ClearRequests
`public void ClearRequests()`

**Purpose:** Removes all `requests` from the current object.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.ClearRequests();
```

### CancelRequest
`public void CancelRequest(string renderID)`

**Purpose:** Checks whether the current object meets the preconditions for `cel request`.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.CancelRequest("example");
```

### GetNumberOfPendingRequests
`public int GetNumberOfPendingRequests()`

**Purpose:** Reads and returns the `number of pending requests` value held by the current object.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
var result = thumbnailCreatorView.GetNumberOfPendingRequests();
```

### IsMemoryCleared
`public bool IsMemoryCleared()`

**Purpose:** Determines whether the current object is in the `memory cleared` state or condition.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
var result = thumbnailCreatorView.IsMemoryCleared();
```

### OnThumbnailRenderCompleteDelegate
`public delegate void OnThumbnailRenderCompleteDelegate(string renderId, Texture renderTarget)`

**Purpose:** Invoked when the `thumbnail render complete delegate` event is raised.

```csharp
// Obtain an instance of ThumbnailCreatorView from the subsystem API first
ThumbnailCreatorView thumbnailCreatorView = ...;
thumbnailCreatorView.OnThumbnailRenderCompleteDelegate("example", renderTarget);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
ThumbnailCreatorView view = ...;
```

## See Also

- [Area Index](../)