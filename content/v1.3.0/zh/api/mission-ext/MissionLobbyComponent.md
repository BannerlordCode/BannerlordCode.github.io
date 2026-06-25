---
title: "MissionLobbyComponent"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLobbyComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLobbyComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

## 概述

`MissionLobbyComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionLobbyComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInWarmup` | `public bool IsInWarmup { get; }` |
| `MissionType` | `public MultiplayerGameType MissionType { get; }` |
| `CurrentMultiplayerState` | `public MissionLobbyComponent.MultiplayerGameState CurrentMultiplayerState { get; }` |

## 主要方法

### AddLobbyComponentType
`public static void AddLobbyComponentType(Type type, LobbyMissionType missionType, bool isSeverComponent)`

**用途 / Purpose:** 向当前集合/状态中添加 `lobby component type`。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### CreateBehavior
`public static MissionLobbyComponent CreateBehavior()`

**用途 / Purpose:** 创建一个 `behavior` 实例或对象。

### QuitMission
`public virtual void QuitMission()`

**用途 / Purpose:** 处理 `quit mission` 相关逻辑。

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 处理 `after start` 相关逻辑。

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 处理 `early start` 相关逻辑。

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 当 `mission tick` 事件触发时调用此方法。

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 当 `remove behavior` 事件触发时调用此方法。

### IsClassAvailable
`public bool IsClassAvailable(FormationClass formationClass)`

**用途 / Purpose:** 处理 `is class available` 相关逻辑。

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)`

**用途 / Purpose:** 处理 `change class restriction` 相关逻辑。

### DespawnPlayer
`public void DespawnPlayer(MissionPeer missionPeer)`

**用途 / Purpose:** 处理 `despawn player` 相关逻辑。

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 当 `score hit` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 当 `clear scene` 事件触发时调用此方法。

### GetSpawnPeriodDurationForPeer
`public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)`

**用途 / Purpose:** 获取 `spawn period duration for peer` 的当前值。

### SetStateEndingAsServer
`public virtual void SetStateEndingAsServer()`

**用途 / Purpose:** 设置 `state ending as server` 的值或状态。

### RequestCultureSelection
`public void RequestCultureSelection()`

**用途 / Purpose:** 处理 `request culture selection` 相关逻辑。

### RequestAdminMessage
`public void RequestAdminMessage(string message, bool isBroadcast)`

**用途 / Purpose:** 处理 `request admin message` 相关逻辑。

### RequestTroopSelection
`public void RequestTroopSelection()`

**用途 / Purpose:** 处理 `request troop selection` 相关逻辑。

### OnCultureSelected
`public void OnCultureSelected(BasicCultureObject culture)`

**用途 / Purpose:** 当 `culture selected` 事件触发时调用此方法。

### GetRandomFaceSeedForCharacter
`public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)`

**用途 / Purpose:** 获取 `random face seed for character` 的当前值。

### MPHostChangeParam
`public static string MPHostChangeParam(List<string> strings)`

**用途 / Purpose:** 处理 `m p host change param` 相关逻辑。

## 使用示例

```csharp
var implementation = new CustomMissionLobbyComponent();
```

## 参见

- [完整类目录](../catalog)