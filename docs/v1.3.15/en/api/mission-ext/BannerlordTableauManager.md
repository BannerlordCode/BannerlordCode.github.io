<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerlordTableauManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerlordTableauManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class BannerlordTableauManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BannerlordTableauManager.cs`

## Overview

`BannerlordTableauManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `TableauCharacterScenes` | `public static Scene TableauCharacterScenes { get { return BannerlordTableauManager._tableauCharacterScenes; }` |

## Key Methods

### RequestCharacterTableauRender
```csharp
public static void RequestCharacterTableauRender(int characterCodeId, string path, GameEntity poseEntity, Camera cameraObject, int tableauType)
```

### ClearManager
```csharp
public static void ClearManager()
```

### InitializeCharacterTableauRenderSystem
```csharp
public static void InitializeCharacterTableauRenderSystem()
```

### GetNumberOfPendingTableauRequests
```csharp
public static int GetNumberOfPendingTableauRequests()
```

### RequestCharacterTableauSetupDelegate
```csharp
public delegate void RequestCharacterTableauSetupDelegate(int characterCodeId, Scene scene, GameEntity poseEntity)
```

## Usage Example

```csharp
// Typical usage of BannerlordTableauManager (Manager)
BannerlordTableauManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)