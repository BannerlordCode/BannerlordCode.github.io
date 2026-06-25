---
title: "CustomBattleAgentLogic"
description: "CustomBattleAgentLogic 的自动生成类参考。"
---
# CustomBattleAgentLogic

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleAgentLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/CustomBattleAgentLogic.cs`

## 概述

`CustomBattleAgentLogic` 更偏向行为逻辑层：它响应事件、驱动流程，并在每帧或关键节点更新系统状态。

## 心智模型

把 `CustomBattleAgentLogic` 当作一个 Logic 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentLogic 实例
CustomBattleAgentLogic customBattleAgentLogic = ...;
customBattleAgentLogic.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 CustomBattleAgentLogic 实例
CustomBattleAgentLogic customBattleAgentLogic = ...;
customBattleAgentLogic.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<CustomBattleAgentLogic>();
```

## 参见

- [本区域目录](../)