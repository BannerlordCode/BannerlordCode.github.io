<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordTableauManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## Overview

`BannerlordTableauManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `BannerlordTableauManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `TableauCharacterScenes` | `public static Scene TableauCharacterScenes { get; }` |

## Key Methods

### RequestCharacterTableauRender
`public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)`

**Purpose:** Handles logic related to `request character tableau render`.

### ClearManager
`public static void ClearManager()`

**Purpose:** Handles logic related to `clear manager`.

### InitializeCharacterTableauRenderSystem
`public static void InitializeCharacterTableauRenderSystem()`

**Purpose:** Initializes the state, resources, or bindings for `character tableau render system`.

### GetNumberOfPendingTableauRequests
`public static int GetNumberOfPendingTableauRequests()`

**Purpose:** Gets the current value of `number of pending tableau requests`.

### RequestCharacterTableauSetupDelegate
`public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)`

**Purpose:** Handles logic related to `request character tableau setup delegate`.

## Usage Example

```csharp
var manager = BannerlordTableauManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)