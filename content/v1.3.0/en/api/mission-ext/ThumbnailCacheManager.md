---
title: "ThumbnailCacheManager"
description: "Auto-generated class reference for ThumbnailCacheManager."
---
# ThumbnailCacheManager

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThumbnailCacheManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Tableaus/ThumbnailCacheManager.cs`

## Overview

`ThumbnailCacheManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ThumbnailCacheManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static ThumbnailCacheManager Current { get; }` |
| `InventorySceneCameraFrame` | `public MatrixFrame InventorySceneCameraFrame { get; }` |

## Key Methods

### IsCachedInventoryTableauSceneUsed
`public bool IsCachedInventoryTableauSceneUsed()`

**Purpose:** Determines whether the current object is in the `cached inventory tableau scene used` state or condition.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.IsCachedInventoryTableauSceneUsed();
```

### GetCachedInventoryTableauScene
`public Scene GetCachedInventoryTableauScene()`

**Purpose:** Reads and returns the `cached inventory tableau scene` value held by the current object.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.GetCachedInventoryTableauScene();
```

### ReturnCachedInventoryTableauScene
`public void ReturnCachedInventoryTableauScene()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.ReturnCachedInventoryTableauScene();
```

### IsCachedMapConversationTableauSceneUsed
`public bool IsCachedMapConversationTableauSceneUsed()`

**Purpose:** Determines whether the current object is in the `cached map conversation tableau scene used` state or condition.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.IsCachedMapConversationTableauSceneUsed();
```

### GetCachedMapConversationTableauScene
`public Scene GetCachedMapConversationTableauScene()`

**Purpose:** Reads and returns the `cached map conversation tableau scene` value held by the current object.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.GetCachedMapConversationTableauScene();
```

### ReturnCachedMapConversationTableauScene
`public void ReturnCachedMapConversationTableauScene()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.ReturnCachedMapConversationTableauScene();
```

### GetNumberOfPendingRequests
`public static int GetNumberOfPendingRequests()`

**Purpose:** Reads and returns the `number of pending requests` value held by the current object.

```csharp
// Static call; no instance required
ThumbnailCacheManager.GetNumberOfPendingRequests();
```

### IsNativeMemoryCleared
`public static bool IsNativeMemoryCleared()`

**Purpose:** Determines whether the current object is in the `native memory cleared` state or condition.

```csharp
// Static call; no instance required
ThumbnailCacheManager.IsNativeMemoryCleared();
```

### InitializeManager
`public static void InitializeManager()`

**Purpose:** Prepares the resources, state, or bindings required by `manager`.

```csharp
// Static call; no instance required
ThumbnailCacheManager.InitializeManager();
```

### RegisterThumbnailCache
`public void RegisterThumbnailCache(IThumbnailCache thumbnailCache)`

**Purpose:** Registers `thumbnail cache` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.RegisterThumbnailCache(thumbnailCache);
```

### UnregisterThumbnailCache
`public void UnregisterThumbnailCache(IThumbnailCache thumbnailCache)`

**Purpose:** Unregisters `thumbnail cache` from the current system.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.UnregisterThumbnailCache(thumbnailCache);
```

### InitializeSandboxValues
`public static void InitializeSandboxValues()`

**Purpose:** Prepares the resources, state, or bindings required by `sandbox values`.

```csharp
// Static call; no instance required
ThumbnailCacheManager.InitializeSandboxValues();
```

### ReleaseSandboxValues
`public static void ReleaseSandboxValues()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
ThumbnailCacheManager.ReleaseSandboxValues();
```

### ClearManager
`public static void ClearManager()`

**Purpose:** Removes all `manager` from the current object.

```csharp
// Static call; no instance required
ThumbnailCacheManager.ClearManager();
```

### CreateTexture
`public Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Constructs a new `texture` entity and returns it to the caller.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.CreateTexture(thumbnailCreationData);
```

### DestroyTexture
`public void DestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.DestroyTexture(thumbnailCreationData);
```

### ForceDestroyTexture
`public void ForceDestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.ForceDestroyTexture(thumbnailCreationData);
```

### GetCachedHeroSilhouetteTexture
`public Texture GetCachedHeroSilhouetteTexture()`

**Purpose:** Reads and returns the `cached hero silhouette texture` value held by the current object.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
var result = thumbnailCacheManager.GetCachedHeroSilhouetteTexture();
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of ThumbnailCacheManager from the subsystem API first
ThumbnailCacheManager thumbnailCacheManager = ...;
thumbnailCacheManager.Tick(0);
```

## Usage Example

```csharp
var manager = ThumbnailCacheManager.Current;
```

## See Also

- [Area Index](../)