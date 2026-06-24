<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameplayCheatsManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GameplayCheatsManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public static class GameplayCheatsManager`
**Base:** 无
**File:** `SandBox/GameplayCheatsManager.cs`

## 概述

`GameplayCheatsManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `GameplayCheatsManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetMapCheatList
`public static IEnumerable<GameplayCheatBase> GetMapCheatList()`

**用途 / Purpose:** 获取 `map cheat list` 的当前值。

### GetMissionCheatList
`public static IEnumerable<GameplayCheatBase> GetMissionCheatList()`

**用途 / Purpose:** 获取 `mission cheat list` 的当前值。

## 使用示例

```csharp
var manager = GameplayCheatsManager.Current;
```

## 参见

- [完整类目录](../catalog)