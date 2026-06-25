---
title: "CPUBenchmarkMissionLogic"
description: "CPUBenchmarkMissionLogic 的自动生成类参考。"
---
# CPUBenchmarkMissionLogic

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CPUBenchmarkMissionLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CPUBenchmarkMissionLogic.cs`

## 概述

`CPUBenchmarkMissionLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CPUBenchmarkMissionLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CPUBenchmarkMissionLogic 实例
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 在 「start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CPUBenchmarkMissionLogic 实例
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CPUBenchmarkMissionLogic 实例
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnMissionTick(0);
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**用途 / Purpose:** 在 「pre mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CPUBenchmarkMissionLogic 实例
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnPreMissionTick(0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CPUBenchmarkMissionLogic 实例
CPUBenchmarkMissionLogic cPUBenchmarkMissionLogic = ...;
cPUBenchmarkMissionLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### CPUBenchmarkMission
`public static string CPUBenchmarkMission(List<string> strings)`

**用途 / Purpose:** 处理与 「cpu benchmark mission」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CPUBenchmarkMissionLogic.CPUBenchmarkMission(strings);
```

### CPUBenchmark
`public static string CPUBenchmark(List<string> strings)`

**用途 / Purpose:** 处理与 「cpu benchmark」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CPUBenchmarkMissionLogic.CPUBenchmark(strings);
```

### BenchmarkStateStart
`public static string BenchmarkStateStart(List<string> strings)`

**用途 / Purpose:** 处理与 「benchmark state start」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CPUBenchmarkMissionLogic.BenchmarkStateStart(strings);
```

### BenchmarkStateEnd
`public static string BenchmarkStateEnd(List<string> strings)`

**用途 / Purpose:** 处理与 「benchmark state end」 相关的逻辑。

```csharp
// 静态调用，不需要实例
CPUBenchmarkMissionLogic.BenchmarkStateEnd(strings);
```

### OpenCPUBenchmarkMission
`public static Mission OpenCPUBenchmarkMission(string scene)`

**用途 / Purpose:** 打开「c p u benchmark mission」对应的资源或界面。

```csharp
// 静态调用，不需要实例
CPUBenchmarkMissionLogic.OpenCPUBenchmarkMission("example");
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CPUBenchmarkMissionLogic>();
```

## 参见

- [本区域目录](../)