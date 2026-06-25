---
title: "SandBoxSiegeMissionSpawnHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxSiegeMissionSpawnHandler`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxSiegeMissionSpawnHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class SandBoxSiegeMissionSpawnHandler : SandBoxMissionSpawnHandler`
**Base:** `SandBoxMissionSpawnHandler`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Missions.MissionLogics/SandBoxSiegeMissionSpawnHandler.cs`

## 概述

`SandBoxSiegeMissionSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `SandBoxSiegeMissionSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new SandBoxSiegeMissionSpawnHandler());
```

## 参见

- [完整类目录](../catalog)