<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthMissionUIHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthMissionUIHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class StealthMissionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/StealthMissionUIHandler.cs`

## 概述

`StealthMissionUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `StealthMissionUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**用途 / Purpose:** 当 `object used` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new StealthMissionUIHandler());
```

## 参见

- [完整类目录](../catalog)