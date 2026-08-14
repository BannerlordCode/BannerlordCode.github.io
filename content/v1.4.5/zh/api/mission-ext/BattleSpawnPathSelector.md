---
title: "BattleSpawnPathSelector"
description: "BattleSpawnPathSelector 的自动生成类参考。"
---
# BattleSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSpawnPathSelector`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/BattleSpawnPathSelector.cs`

## 概述

`BattleSpawnPathSelector` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `InitialPath` | `public Path InitialPath { get; }` |

## 主要方法

### Initialize
`public void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 BattleSpawnPathSelector 实例
BattleSpawnPathSelector battleSpawnPathSelector = ...;
battleSpawnPathSelector.Initialize();
```

### HasPath
`public bool HasPath(Path path)`

**用途 / Purpose:** 判断当前对象是否已经持有 path。

```csharp
// 先通过子系统 API 拿到 BattleSpawnPathSelector 实例
BattleSpawnPathSelector battleSpawnPathSelector = ...;
var result = battleSpawnPathSelector.HasPath(path);
```

### GetInitialPathDataOfSide
`public bool GetInitialPathDataOfSide(BattleSideEnum side, out SpawnPathData pathPathData)`

**用途 / Purpose:** 读取并返回当前对象中 initial path data of side 的结果。

```csharp
// 先通过子系统 API 拿到 BattleSpawnPathSelector 实例
BattleSpawnPathSelector battleSpawnPathSelector = ...;
var result = battleSpawnPathSelector.GetInitialPathDataOfSide(side, pathPathData);
```

### GetReinforcementPathsDataOfSide
`public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum side)`

**用途 / Purpose:** 读取并返回当前对象中 reinforcement paths data of side 的结果。

```csharp
// 先通过子系统 API 拿到 BattleSpawnPathSelector 实例
BattleSpawnPathSelector battleSpawnPathSelector = ...;
var result = battleSpawnPathSelector.GetReinforcementPathsDataOfSide(side);
```

### FindBestInitialPath
`public static Path FindBestInitialPath(Mission mission, out float pivotRatio, out bool isInverted)`

**用途 / Purpose:** 在当前集合/范围内查找满足条件的best initial path。

```csharp
// 静态调用，不需要实例
BattleSpawnPathSelector.FindBestInitialPath(mission, pivotRatio, isInverted);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattleSpawnPathSelector battleSpawnPathSelector = ...;
battleSpawnPathSelector.Initialize();
```

## 参见

- [本区域目录](../)