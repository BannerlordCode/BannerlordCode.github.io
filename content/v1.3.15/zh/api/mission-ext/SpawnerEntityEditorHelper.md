---
title: "SpawnerEntityEditorHelper"
description: "SpawnerEntityEditorHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 ghost entity or child 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
var result = spawnerEntityEditorHelper.GetGhostEntityOrChild("example");
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.Tick(0);
```

### GivePermission
`public void GivePermission(string childName, SpawnerEntityEditorHelper.Permission permission, Action<float> onChangeFunction)`

**用途 / Purpose:** **用途 / Purpose:** 调用 GivePermission 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.GivePermission("example", permission, onChangeFunction);
```

### ChangeStableChildMatrixFrameAndApply
`public void ChangeStableChildMatrixFrameAndApply(string childName, MatrixFrame matrixFrame, bool updateTriad = true)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ChangeStableChildMatrixFrameAndApply 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.ChangeStableChildMatrixFrameAndApply("example", matrixFrame, false);
```

### GetPrefabName
`public string GetPrefabName()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 prefab name 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
var result = spawnerEntityEditorHelper.GetPrefabName();
```

### SetupGhostMovement
`public void SetupGhostMovement(string pathName)`

**用途 / Purpose:** **用途 / Purpose:** 为 up ghost movement 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.SetupGhostMovement("example");
```

### SetEnableAutoGhostMovement
`public void SetEnableAutoGhostMovement(bool enableAutoGhostMovement)`

**用途 / Purpose:** **用途 / Purpose:** 为 enable auto ghost movement 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SpawnerEntityEditorHelper 实例
SpawnerEntityEditorHelper spawnerEntityEditorHelper = ...;
spawnerEntityEditorHelper.SetEnableAutoGhostMovement(false);
```

## 使用示例

```csharp
SpawnerEntityEditorHelper.Initialize();
```

## 参见

- [本区域目录](../)