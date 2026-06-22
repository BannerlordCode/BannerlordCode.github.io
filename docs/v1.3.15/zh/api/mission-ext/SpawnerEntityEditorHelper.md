<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnerEntityEditorHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnerEntityEditorHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerEntityEditorHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`

## 概述

`SpawnerEntityEditorHelper` 是一个静态工具类，提供辅助方法。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `SpawnedGhostEntity` | `public GameEntity SpawnedGhostEntity { get; }` |

## 主要方法

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

## 使用示例

```csharp
// SpawnerEntityEditorHelper (Helper) 的典型用法
SpawnerEntityEditorHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)