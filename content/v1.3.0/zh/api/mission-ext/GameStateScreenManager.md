---
title: "GameStateScreenManager"
description: "GameStateScreenManager 的自动生成类参考。"
---
# GameStateScreenManager

**Namespace:** TaleWorlds.MountAndBlade.View.Screens
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameStateScreenManager : IGameStateManagerListener`
**Base:** `IGameStateManagerListener`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Screens/GameStateScreenManager.cs`

## 概述

`GameStateScreenManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameStateScreenManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CreateScreen
`public ScreenBase CreateScreen(GameState state)`

**用途 / Purpose:** 构建一个新的 「screen」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 GameStateScreenManager 实例
GameStateScreenManager gameStateScreenManager = ...;
var result = gameStateScreenManager.CreateScreen(state);
```

### BuildScreens
`public void BuildScreens()`

**用途 / Purpose:** 组装并返回「screens」的构建结果。

```csharp
// 先通过子系统 API 拿到 GameStateScreenManager 实例
GameStateScreenManager gameStateScreenManager = ...;
gameStateScreenManager.BuildScreens();
```

## 使用示例

```csharp
var manager = GameStateScreenManager.Current;
```

## 参见

- [本区域目录](../)