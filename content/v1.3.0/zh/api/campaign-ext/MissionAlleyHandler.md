---
title: "MissionAlleyHandler"
description: "MissionAlleyHandler 的自动生成类参考。"
---
# MissionAlleyHandler

**Namespace:** SandBox.Missions.MissionLogics
**Module:** SandBox.Missions
**Type:** `public class MissionAlleyHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAlleyHandler.cs`

## 概述

`MissionAlleyHandler` 是一个处理器，用于在特定事件发生时执行约定好的响应逻辑。

## 心智模型

把 `MissionAlleyHandler` 当作一个 Handler 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered { get; }` |

## 主要方法

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAlleyHandler 实例
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.OnMissionTick(0);
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** **用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionAlleyHandler 实例
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.AfterStart();
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**用途 / Purpose:** **用途 / Purpose:** 在 agent hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionAlleyHandler 实例
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### StartCommonAreaBattle
`public void StartCommonAreaBattle(Alley alley)`

**用途 / Purpose:** **用途 / Purpose:** 启动common area battle流程或状态机。

```csharp
// 先通过子系统 API 拿到 MissionAlleyHandler 实例
MissionAlleyHandler missionAlleyHandler = ...;
missionAlleyHandler.StartCommonAreaBattle(alley);
```

## 使用示例

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionAlleyHandler>();
```

## 参见

- [本区域目录](../)