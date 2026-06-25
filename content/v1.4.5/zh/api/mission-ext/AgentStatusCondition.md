---
title: "AgentStatusCondition"
description: "AgentStatusCondition 的自动生成类参考。"
---
# AgentStatusCondition

**Namespace:** TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentStatusCondition : MPPerkCondition`
**Base:** `MPPerkCondition`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/AgentStatusCondition.cs`

## 概述

`AgentStatusCondition` 位于 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Check
`public override bool Check(MissionPeer peer)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 AgentStatusCondition 实例
AgentStatusCondition agentStatusCondition = ...;
var result = agentStatusCondition.Check(peer);
```

### Check
`public override bool Check(Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足指定条件。

```csharp
// 先通过子系统 API 拿到 AgentStatusCondition 实例
AgentStatusCondition agentStatusCondition = ...;
var result = agentStatusCondition.Check(agent);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
AgentStatusCondition agentStatusCondition = ...;
agentStatusCondition.Check(peer);
```

## 参见

- [本区域目录](../)