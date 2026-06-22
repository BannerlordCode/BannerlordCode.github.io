<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnerEntityEditorHelper`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnerEntityEditorHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerEntityEditorHelper`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`

## Overview

`SpawnerEntityEditorHelper` is a static utility class providing helper methods.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `SpawnedGhostEntity` | `public GameEntity SpawnedGhostEntity { get; }` |

## Key Methods

### GetGhostEntityOrChild
```csharp
public GameEntity GetGhostEntityOrChild(string name)
```

### Tick
```csharp
public void Tick(float dt)
```

### GivePermission
```csharp
public void GivePermission(string childName, SpawnerEntityEditorHelper.Permission permission, Action<float> onChangeFunction)
```

### ChangeStableChildMatrixFrameAndApply
```csharp
public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)
```

### GetPrefabName
```csharp
public string GetPrefabName()
```

### SetupGhostMovement
```csharp
public void SetupGhostMovement(string pathName)
```

### SetEnableAutoGhostMovement
```csharp
public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)
```

## Usage Example

```csharp
// Typical usage of SpawnerEntityEditorHelper (Helper)
SpawnerEntityEditorHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)