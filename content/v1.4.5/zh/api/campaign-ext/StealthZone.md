---
title: "StealthZone"
description: "StealthZone 的自动生成类参考。"
---
# StealthZone

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class StealthZone`
**Base:** 无
**File:** `Modules.SandBox/SandBox/SandBox.Objects/StealthZone.cs`

## 概述

`StealthZone` 位于 `SandBox.Objects`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.Objects` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AreAgentsActive` | `public bool AreAgentsActive { get; }` |
| `UseVolumeBox` | `public bool UseVolumeBox { get; }` |
| `EliminatedAgents` | `public int EliminatedAgents { get; }` |
| `Agents` | `public List<Agent> Agents { get; }` |
| `VolumeBox` | `public VolumeBox VolumeBox { get; }` |

## 主要方法

### StealthZoneEvent
`public delegate void StealthZoneEvent()`

**用途 / Purpose:** 调用 StealthZoneEvent 对应的操作。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.StealthZoneEvent();
```

### SetStealthAgents
`public void SetStealthAgents(List<Agent> agents)`

**用途 / Purpose:** 为 stealth agents 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.SetStealthAgents(agents);
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.Tick();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.OnAgentRemoved(affectedAgent, affectorAgent);
```

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 agent inside 状态或条件。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
var result = stealthZone.IsAgentInside(agent);
```

### OnPlayerFlees
`public void OnPlayerFlees()`

**用途 / Purpose:** 在 player flees 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.OnPlayerFlees();
```

### ResetEvents
`public void ResetEvents()`

**用途 / Purpose:** 将 events 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.ResetEvents();
```

### DisableAll
`public void DisableAll()`

**用途 / Purpose:** 调用 DisableAll 对应的操作。

```csharp
// 先通过子系统 API 拿到 StealthZone 实例
StealthZone stealthZone = ...;
stealthZone.DisableAll();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StealthZone stealthZone = ...;
stealthZone.StealthZoneEvent();
```

## 参见

- [本区域目录](../)