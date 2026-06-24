<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnerEntityEditorHelper`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnerEntityEditorHelper

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnerEntityEditorHelper`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/SpawnerEntityEditorHelper.cs`

## 概述

`SpawnerEntityEditorHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `SpawnerEntityEditorHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
SpawnerEntityEditorHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)