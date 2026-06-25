---
title: "MPConditionalEffect"
description: "MPConditionalEffect 的自动生成类参考。"
---
# MPConditionalEffect

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPConditionalEffect`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

## 概述

`MPConditionalEffect` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |
| `Conditions` | `public MBReadOnlyList<MPPerkCondition> Conditions { get; }` |
| `Effects` | `public MBReadOnlyList<MPPerkEffectBase> Effects { get; }` |
| `EventFlags` | `public MPPerkCondition.PerkEventFlags EventFlags { get; }` |
| `IsTickRequired` | `public bool IsTickRequired { get; }` |

## 主要方法

### GetState
`public bool GetState(MPConditionalEffect conditionalEffect, Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 state 的结果。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
var result = mPConditionalEffect.GetState(conditionalEffect, agent);
```

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**用途 / Purpose:** **用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.SetState(conditionalEffect, agent, false);
```

### ResetStates
`public void ResetStates()`

**用途 / Purpose:** **用途 / Purpose:** 将 states 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.ResetStates();
```

### Check
`public bool Check(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
var result = mPConditionalEffect.Check(peer);
```

### Check
`public bool Check(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
var result = mPConditionalEffect.Check(agent);
```

### OnEvent
`public void OnEvent(bool isWarmup, MissionPeer peer, ConditionalEffectContainer container)`

**用途 / Purpose:** **用途 / Purpose:** 在 event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.OnEvent(false, peer, container);
```

### OnEvent
`public void OnEvent(bool isWarmup, Agent agent, ConditionalEffectContainer container)`

**用途 / Purpose:** **用途 / Purpose:** 在 event 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.OnEvent(false, agent, container);
```

### OnTick
`public void OnTick(bool isWarmup, MissionPeer peer, int tickCount)`

**用途 / Purpose:** **用途 / Purpose:** 在 tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPConditionalEffect 实例
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.OnTick(false, peer, 0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPConditionalEffect mPConditionalEffect = ...;
mPConditionalEffect.GetState(conditionalEffect, agent);
```

## 参见

- [本区域目录](../)