<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `LocationItemSpawnHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# LocationItemSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class LocationItemSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LocationItemSpawnHandler.cs`

## 概述

`LocationItemSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `LocationItemSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnEntityRemoved
`public override void OnEntityRemoved(GameEntity entity)`

**用途 / Purpose:** 当 `entity removed` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new LocationItemSpawnHandler());
```

## 参见

- [完整类目录](../catalog)