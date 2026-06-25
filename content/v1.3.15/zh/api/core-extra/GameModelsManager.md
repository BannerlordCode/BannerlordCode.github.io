---
title: "GameModelsManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameModelsManager`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameModelsManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public abstract class GameModelsManager`
**Base:** 无
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## 概述

`GameModelsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameModelsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetGameModels
`public MBReadOnlyList<GameModel> GetGameModels()`

**用途 / Purpose:** 获取 `game models` 的当前值。

## 使用示例

```csharp
var implementation = new CustomGameModelsManager();
```

## 参见

- [完整类目录](../catalog)