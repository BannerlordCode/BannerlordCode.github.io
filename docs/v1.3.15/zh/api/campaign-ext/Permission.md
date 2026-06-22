<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Permission`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Permission

**命名空间:** TaleWorlds.PlatformService
**模块:** TaleWorlds.PlatformService
**类型:** 结构体 struct enum
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Permission` 是 `TaleWorlds.PlatformService` 命名空间下的一个枚举 enum。
> 如需了解其属性、方法和开发者用例，请参考源码
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

或贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)