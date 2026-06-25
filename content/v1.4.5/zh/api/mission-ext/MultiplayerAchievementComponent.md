---
title: "MultiplayerAchievementComponent"
description: "MultiplayerAchievementComponent 的自动生成类参考。"
---
# MultiplayerAchievementComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAchievementComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerAchievementComponent.cs`

## 概述

`MultiplayerAchievementComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MultiplayerAchievementComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 「behavior initialize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnMissionTick(0);
```

### OnAgentMount
`public override void OnAgentMount(Agent agent)`

**用途 / Purpose:** 在 「agent mount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentMount(agent);
```

### OnAgentDismount
`public override void OnAgentDismount(Agent agent)`

**用途 / Purpose:** 在 「agent dismount」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentDismount(agent);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 「agent build」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MultiplayerAchievementComponent 实例
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## 使用示例

```csharp
var component = agent.GetComponent<MultiplayerAchievementComponent>();
```

## 参见

- [本区域目录](../)