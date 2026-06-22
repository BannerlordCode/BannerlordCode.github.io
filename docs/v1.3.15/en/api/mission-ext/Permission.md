<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Permission`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Permission

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `Permission` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)