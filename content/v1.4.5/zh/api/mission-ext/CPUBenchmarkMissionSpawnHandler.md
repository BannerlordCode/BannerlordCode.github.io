---
title: "CPUBenchmarkMissionSpawnHandler"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CPUBenchmarkMissionSpawnHandler`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CPUBenchmarkMissionSpawnHandler

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionSpawnHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionSpawnHandler.cs`

## 概述

`CPUBenchmarkMissionSpawnHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `CPUBenchmarkMissionSpawnHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CPUBenchmarkMissionSpawnHandler());
```

## 参见

- [完整类目录](../catalog)