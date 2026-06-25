---
title: "StealthZone"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StealthZone`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StealthZone

**Namespace:** SandBox.Objects
**Module:** SandBox.Objects
**Type:** `public class StealthZone`
**Base:** 无
**File:** `Bannerlord.Source/Modules.SandBox/SandBox/SandBox.Objects/StealthZone.cs`

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

**用途 / Purpose:** 处理 `stealth zone event` 相关逻辑。

### SetStealthAgents
`public void SetStealthAgents(List<Agent> agents)`

**用途 / Purpose:** 设置 `stealth agents` 的值或状态。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### IsAgentInside
`public bool IsAgentInside(Agent agent)`

**用途 / Purpose:** 处理 `is agent inside` 相关逻辑。

### OnPlayerFlees
`public void OnPlayerFlees()`

**用途 / Purpose:** 当 `player flees` 事件触发时调用此方法。

### ResetEvents
`public void ResetEvents()`

**用途 / Purpose:** 将 `events` 重置为初始状态。

### DisableAll
`public void DisableAll()`

**用途 / Purpose:** 处理 `disable all` 相关逻辑。

## 使用示例

```csharp
var value = new StealthZone();
value.StealthZoneEvent();
```

## 参见

- [完整类目录](../catalog)