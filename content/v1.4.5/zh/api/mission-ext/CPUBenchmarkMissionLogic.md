---
title: "CPUBenchmarkMissionLogic"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CPUBenchmarkMissionLogic`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CPUBenchmarkMissionLogic

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`

## 概述

`CPUBenchmarkMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CPUBenchmarkMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 当 `pre mission tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### CPUBenchmarkMission
`public static string CPUBenchmarkMission(List<string> strings)`

**用途 / Purpose:** 处理 `c p u benchmark mission` 相关逻辑。

### CPUBenchmark
`public static string CPUBenchmark(List<string> strings)`

**用途 / Purpose:** 处理 `c p u benchmark` 相关逻辑。

### BenchmarkStateStart
`public static string BenchmarkStateStart(List<string> strings)`

**用途 / Purpose:** 处理 `benchmark state start` 相关逻辑。

### BenchmarkStateEnd
`public static string BenchmarkStateEnd(List<string> strings)`

**用途 / Purpose:** 处理 `benchmark state end` 相关逻辑。

### OpenCPUBenchmarkMission
`public static Mission OpenCPUBenchmarkMission(string scene)`

**用途 / Purpose:** 处理 `open c p u benchmark mission` 相关逻辑。

## 使用示例

```csharp
Mission.Current.AddMissionBehavior(new CPUBenchmarkMissionLogic());
```

## 参见

- [完整类目录](../catalog)