---
title: "CommonAIComponent"
description: "CommonAIComponent 的自动生成类参考。"
---
# CommonAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommonAIComponent : AgentComponent`
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/CommonAIComponent.cs`

## 概述

`CommonAIComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `CommonAIComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPanicked` | `public bool IsPanicked { get; }` |
| `IsRetreating` | `public bool IsRetreating { get; }` |
| `ReservedRiderAgentIndex` | `public int ReservedRiderAgentIndex { get; }` |
| `InitialMorale` | `public float InitialMorale { get; set; }` |
| `RecoveryMorale` | `public float RecoveryMorale { get; set; }` |
| `Morale` | `public float Morale { get; set; }` |

## 主要方法

### Initialize
`public override void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Initialize();
```

### OnTickParallel
`public override void OnTickParallel(float dt)`

**用途 / Purpose:** 在 「tick parallel」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnTickParallel(0);
```

### OnTick
`public override void OnTick(float dt)`

**用途 / Purpose:** 在 「tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnTick(0);
```

### Panic
`public void Panic()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Panic();
```

### Retreat
`public void Retreat(bool useCachingSystem = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.Retreat(false);
```

### StopRetreating
`public void StopRetreating()`

**用途 / Purpose:** 停止「retreating」流程或状态机。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.StopRetreating();
```

### CanPanic
`public bool CanPanic()`

**用途 / Purpose:** 检查当前对象是否满足 「panic」 的前置条件。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
var result = commonAIComponent.CanPanic();
```

### OnHit
`public override void OnHit(Agent affectorAgent, int damage, in MissionWeapon affectorWeapon, in Blow b, in AttackCollisionData collisionData)`

**用途 / Purpose:** 在 「hit」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnHit(affectorAgent, 0, affectorWeapon, b, collisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved()`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnAgentRemoved();
```

### OnComponentRemoved
`public override void OnComponentRemoved()`

**用途 / Purpose:** 在 「component removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CommonAIComponent 实例
CommonAIComponent commonAIComponent = ...;
commonAIComponent.OnComponentRemoved();
```

## 使用示例

```csharp
var component = agent.GetComponent<CommonAIComponent>();
```

## 参见

- [本区域目录](../)