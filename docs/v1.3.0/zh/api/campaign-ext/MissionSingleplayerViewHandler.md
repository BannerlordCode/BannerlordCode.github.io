<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionSingleplayerViewHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionSingleplayerViewHandler

**Namespace:** SandBox.View.Missions
**Module:** SandBox.View
**Type:** `public class MissionSingleplayerViewHandler : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/MissionSingleplayerViewHandler.cs`

## 概述

`MissionSingleplayerViewHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionSingleplayerViewHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionSingleplayerViewHandler());
```

## 参见

- [完整类目录](../catalog)