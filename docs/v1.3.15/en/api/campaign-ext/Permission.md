<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Permission`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Permission

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** struct
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Permission` is a enum in the `TaleWorlds.PlatformService` namespace.
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
- [Area catalog](../catalog-campaign)