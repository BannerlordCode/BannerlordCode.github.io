---
title: "MissionEntitySelectionUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionEntitySelectionUIHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionEntitySelectionUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionEntitySelectionUIHandler : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer/MissionEntitySelectionUIHandler.cs`

## 概述

`MissionEntitySelectionUIHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionEntitySelectionUIHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### TickDebug
`public void TickDebug()`

**用途 / Purpose:** 处理 `tick debug` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionEntitySelectionUIHandler());
```

## 参见

- [完整类目录](../catalog)