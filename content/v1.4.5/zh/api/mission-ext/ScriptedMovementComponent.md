---
title: "ScriptedMovementComponent"
description: "ScriptedMovementComponent 的自动生成类参考。"
---
# ScriptedMovementComponent

**Namespace:** TaleWorlds.MountAndBlade.AI.AgentComponents
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ScriptedMovementComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.AI.AgentComponents/ScriptedMovementComponent.cs`

## 概述

`ScriptedMovementComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `ScriptedMovementComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetTargetAgent
`public void SetTargetAgent(Agent targetAgent)`

**用途 / Purpose:** **用途 / Purpose:** 为 target agent 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScriptedMovementComponent 实例
ScriptedMovementComponent scriptedMovementComponent = ...;
scriptedMovementComponent.SetTargetAgent(targetAgent);
```

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScriptedMovementComponent 实例
ScriptedMovementComponent scriptedMovementComponent = ...;
scriptedMovementComponent.OnTick(0);
```

### ShouldConversationStartWithAgent
`public bool ShouldConversationStartWithAgent()`

**用途 / Purpose:** **用途 / Purpose:** 调用 ShouldConversationStartWithAgent 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScriptedMovementComponent 实例
ScriptedMovementComponent scriptedMovementComponent = ...;
var result = scriptedMovementComponent.ShouldConversationStartWithAgent();
```

### Reset
`public void Reset()`

**用途 / Purpose:** **用途 / Purpose:** 将当前对象重置为默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ScriptedMovementComponent 实例
ScriptedMovementComponent scriptedMovementComponent = ...;
scriptedMovementComponent.Reset();
```

## 使用示例

```csharp
var component = agent.GetComponent<ScriptedMovementComponent>();
```

## 参见

- [本区域目录](../)