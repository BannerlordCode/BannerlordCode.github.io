---
title: "ThumbnailCacheManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ThumbnailCacheManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `is cached inventory tableau scene used`.

### GetCachedInventoryTableauScene
`public Scene GetCachedInventoryTableauScene()`

**Purpose:** Gets the current value of `cached inventory tableau scene`.

### ReturnCachedInventoryTableauScene
`public void ReturnCachedInventoryTableauScene()`

**Purpose:** Handles logic related to `return cached inventory tableau scene`.

### IsCachedMapConversationTableauSceneUsed
`public bool IsCachedMapConversationTableauSceneUsed()`

**Purpose:** Handles logic related to `is cached map conversation tableau scene used`.

### GetCachedMapConversationTableauScene
`public Scene GetCachedMapConversationTableauScene()`

**Purpose:** Gets the current value of `cached map conversation tableau scene`.

### ReturnCachedMapConversationTableauScene
`public void ReturnCachedMapConversationTableauScene()`

**Purpose:** Handles logic related to `return cached map conversation tableau scene`.

### GetNumberOfPendingRequests
`public static int GetNumberOfPendingRequests()`

**Purpose:** Gets the current value of `number of pending requests`.

### IsNativeMemoryCleared
`public static bool IsNativeMemoryCleared()`

**Purpose:** Handles logic related to `is native memory cleared`.

### InitializeManager
`public static void InitializeManager()`

**Purpose:** Initializes the state, resources, or bindings for `manager`.

### RegisterThumbnailCache
`public void RegisterThumbnailCache(IThumbnailCache thumbnailCache)`

**Purpose:** Handles logic related to `register thumbnail cache`.

### UnregisterThumbnailCache
`public void UnregisterThumbnailCache(IThumbnailCache thumbnailCache)`

**Purpose:** Handles logic related to `unregister thumbnail cache`.

### InitializeSandboxValues
`public static void InitializeSandboxValues()`

**Purpose:** Initializes the state, resources, or bindings for `sandbox values`.

### ReleaseSandboxValues
`public static void ReleaseSandboxValues()`

**Purpose:** Handles logic related to `release sandbox values`.

### ClearManager
`public static void ClearManager()`

**Purpose:** Handles logic related to `clear manager`.

### CreateTexture
`public Texture CreateTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Creates a new `texture` instance or object.

### DestroyTexture
`public void DestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Handles logic related to `destroy texture`.

### ForceDestroyTexture
`public void ForceDestroyTexture(ThumbnailCreationData thumbnailCreationData)`

**Purpose:** Handles logic related to `force destroy texture`.

### GetCachedHeroSilhouetteTexture
`public Texture GetCachedHeroSilhouetteTexture()`

**Purpose:** Gets the current value of `cached hero silhouette texture`.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

## Usage Example

```csharp
var manager = ThumbnailCacheManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)