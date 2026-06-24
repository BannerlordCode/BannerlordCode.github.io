<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Permission`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Permission

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public enum Permission`
**领域:** mission-ext

## 概述

`Permission` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get; }` |
| `SpawnedGhostEntity` | `public GameEntity SpawnedGhostEntity { get; }` |

## 主要方法

### GetGhostEntityOrChild
`public GameEntity GetGhostEntityOrChild(string name)`

**用途 / Purpose:** 获取 `ghost entity or child` 的当前值。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### GivePermission
`public void GivePermission(string childName, SpawnerEntityEditorHelper.Permission permission, Action<float> onChangeFunction)`

**用途 / Purpose:** 处理 `give permission` 相关逻辑。

### ChangeStableChildMatrixFrameAndApply
`public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)`

**用途 / Purpose:** 处理 `change stable child matrix frame and apply` 相关逻辑。

### GetPrefabName
`public string GetPrefabName()`

**用途 / Purpose:** 获取 `prefab name` 的当前值。

### SetupGhostMovement
`public void SetupGhostMovement(string pathName)`

**用途 / Purpose:** 设置 `up ghost movement` 的值或状态。

### SetEnableAutoGhostMovement
`public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)`

**用途 / Purpose:** 设置 `enable auto ghost movement` 的值或状态。

## 使用示例

```csharp
Permission example = Permission.IsValid;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
