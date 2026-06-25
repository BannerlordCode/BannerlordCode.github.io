---
title: "CoverAnimalAgentComponent"
description: "CoverAnimalAgentComponent 的自动生成类参考。"
---
# CoverAnimalAgentComponent

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class CoverAnimalAgentComponent : AgentComponent, IFocusable`
**Base:** `AgentComponent`
**File:** `Modules.SandBox/SandBox/SandBox.Missions/CoverAnimalAgentComponent.cs`

## 概述

`CoverAnimalAgentComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CoverAnimalAgentComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetDynamicPatrolArea
`public void SetDynamicPatrolArea(GameEntity parentPatrolPoint)`

**用途 / Purpose:** 为 「dynamic patrol area」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.SetDynamicPatrolArea(parentPatrolPoint);
```

### StartMovement
`public void StartMovement()`

**用途 / Purpose:** 启动「movement」流程或状态机。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.StartMovement();
```

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.OnTick(0);
```

### IsTargetReached
`public bool IsTargetReached()`

**用途 / Purpose:** 判断当前对象是否处于 「target reached」 状态或条件。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
var result = coverAnimalAgentComponent.IsTargetReached();
```

### SetTargetFrame
`public void SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, AIScriptedFrameFlags flags = (AIScriptedFrameFlags)0)`

**用途 / Purpose:** 为 「target frame」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.SetTargetFrame(position, 0, 0, (AIScriptedFrameFlags)0);
```

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**用途 / Purpose:** 在 「focus gain」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**用途 / Purpose:** 在 「focus lose」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
coverAnimalAgentComponent.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 读取并返回当前对象中 「info text for being not interactable」 的结果。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
var result = coverAnimalAgentComponent.GetInfoTextForBeingNotInteractable(userAgent);
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 CoverAnimalAgentComponent 实例
CoverAnimalAgentComponent coverAnimalAgentComponent = ...;
var result = coverAnimalAgentComponent.GetDescriptionText(gameEntity);
```

## 使用示例

```csharp
var component = agent.GetComponent<CoverAnimalAgentComponent>();
```

## 参见

- [本区域目录](../)