---
title: "GameModelsManager"
description: "GameModelsManager 的自动生成类参考。"
---
# GameModelsManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModelsManager`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameModelsManager.cs`

## 概述

`GameModelsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameModelsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetGameModels
`public MBReadOnlyList<GameModel> GetGameModels()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 game models 的结果。

```csharp
// 先通过子系统 API 拿到 GameModelsManager 实例
GameModelsManager gameModelsManager = ...;
var result = gameModelsManager.GetGameModels();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
GameModelsManager instance = ...;
```

## 参见

- [本区域目录](../)