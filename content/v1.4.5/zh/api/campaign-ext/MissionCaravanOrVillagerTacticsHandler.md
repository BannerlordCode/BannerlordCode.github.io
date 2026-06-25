---
title: "MissionCaravanOrVillagerTacticsHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionCaravanOrVillagerTacticsHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionCaravanOrVillagerTacticsHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionCaravanOrVillagerTacticsHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/MissionCaravanOrVillagerTacticsHandler.cs`

## 概述

`MissionCaravanOrVillagerTacticsHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionCaravanOrVillagerTacticsHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new MissionCaravanOrVillagerTacticsHandler());
```

## 参见

- [完整类目录](../catalog)