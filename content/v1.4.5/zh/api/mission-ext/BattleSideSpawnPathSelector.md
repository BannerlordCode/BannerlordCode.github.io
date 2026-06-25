---
title: "BattleSideSpawnPathSelector"
description: "BattleSideSpawnPathSelector 的自动生成类参考。"
---
# BattleSideSpawnPathSelector

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BattleSideSpawnPathSelector`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BattleSideSpawnPathSelector.cs`

## 概述

`BattleSideSpawnPathSelector` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### HasReinforcementPath
`public bool HasReinforcementPath(Path path)`

**用途 / Purpose:** 判断当前对象是否已经持有 「reinforcement path」。

```csharp
// 先通过子系统 API 拿到 BattleSideSpawnPathSelector 实例
BattleSideSpawnPathSelector battleSideSpawnPathSelector = ...;
var result = battleSideSpawnPathSelector.HasReinforcementPath(path);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
BattleSideSpawnPathSelector battleSideSpawnPathSelector = ...;
battleSideSpawnPathSelector.HasReinforcementPath(path);
```

## 参见

- [本区域目录](../)