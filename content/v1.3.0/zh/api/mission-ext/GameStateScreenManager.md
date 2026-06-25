---
title: "GameStateScreenManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameStateScreenManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 创建一个 `screen` 实例或对象。

### BuildScreens
`public void BuildScreens()`

**用途 / Purpose:** 处理 `build screens` 相关逻辑。

## 使用示例

```csharp
var manager = GameStateScreenManager.Current;
```

## 参见

- [完整类目录](../catalog)