<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `WorkshopMissionHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopMissionHandler

**Namespace:** SandBox.Missions.MissionLogics.Towns
**Module:** SandBox.Missions
**Type:** `public class WorkshopMissionHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics.Towns/WorkshopMissionHandler.cs`

## 概述

`WorkshopMissionHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `WorkshopMissionHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new WorkshopMissionHandler());
```

## 参见

- [完整类目录](../catalog)