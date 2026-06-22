<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Permission`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Permission

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`Permission` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)