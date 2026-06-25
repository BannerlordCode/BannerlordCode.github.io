---
title: "ConsoleMatchStartEndHandler"
description: "ConsoleMatchStartEndHandler 的自动生成类参考。"
---
# ConsoleMatchStartEndHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConsoleMatchStartEndHandler : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/ConsoleMatchStartEndHandler.cs`

## 概述

`ConsoleMatchStartEndHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `ConsoleMatchStartEndHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConsoleMatchStartEndHandler 实例
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConsoleMatchStartEndHandler 实例
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnRemoveBehavior();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConsoleMatchStartEndHandler 实例
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnAgentBuild(agent, banner);
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ConsoleMatchStartEndHandler 实例
ConsoleMatchStartEndHandler consoleMatchStartEndHandler = ...;
consoleMatchStartEndHandler.OnMissionTick(0);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<ConsoleMatchStartEndHandler>();
```

## 参见

- [本区域目录](../)