---
title: "MissionLobbyComponent"
description: "MissionLobbyComponent 的自动生成类参考。"
---
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

**用途 / Purpose:** 将 lobby component type 添加到当前容器或状态中。

```csharp
// 静态调用，不需要实例
MissionLobbyComponent.AddLobbyComponentType(type, missionType, false);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnBehaviorInitialize();
```

### CreateBehavior
`public static MissionLobbyComponent CreateBehavior()`

**用途 / Purpose:** 构建一个新的 behavior 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MissionLobbyComponent.CreateBehavior();
```

### QuitMission
`public virtual void QuitMission()`

**用途 / Purpose:** 调用 QuitMission 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.QuitMission();
```

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 调用 AfterStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.AfterStart();
```

### EarlyStart
`public override void EarlyStart()`

**用途 / Purpose:** 调用 EarlyStart 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 mission tick 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**用途 / Purpose:** 在 remove behavior 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnRemoveBehavior();
```

### IsClassAvailable
`public bool IsClassAvailable(FormationClass formationClass)`

**用途 / Purpose:** 判断当前对象是否处于 class available 状态或条件。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
var result = missionLobbyComponent.IsClassAvailable(formationClass);
```

### ChangeClassRestriction
`public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)`

**用途 / Purpose:** 调用 ChangeClassRestriction 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.ChangeClassRestriction(classToChangeRestriction, false);
```

### DespawnPlayer
`public void DespawnPlayer(MissionPeer missionPeer)`

**用途 / Purpose:** 调用 DespawnPlayer 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.DespawnPlayer(missionPeer);
```

### OnScoreHit
`public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)`

**用途 / Purpose:** 在 score hit 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnScoreHit(affectedAgent, affectorAgent, attackerWeapon, false, false, blow, collisionData, 0, 0, 0);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**用途 / Purpose:** 在 agent removed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 在 agent build 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnAgentBuild(agent, banner);
```

### OnClearScene
`public override void OnClearScene()`

**用途 / Purpose:** 在 clear scene 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnClearScene();
```

### GetSpawnPeriodDurationForPeer
`public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)`

**用途 / Purpose:** 读取并返回当前对象中 spawn period duration for peer 的结果。

```csharp
// 静态调用，不需要实例
MissionLobbyComponent.GetSpawnPeriodDurationForPeer(peer);
```

### SetStateEndingAsServer
`public virtual void SetStateEndingAsServer()`

**用途 / Purpose:** 为 state ending as server 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.SetStateEndingAsServer();
```

### RequestCultureSelection
`public void RequestCultureSelection()`

**用途 / Purpose:** 调用 RequestCultureSelection 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.RequestCultureSelection();
```

### RequestAdminMessage
`public void RequestAdminMessage(string message, bool isBroadcast)`

**用途 / Purpose:** 调用 RequestAdminMessage 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.RequestAdminMessage("example", false);
```

### RequestTroopSelection
`public void RequestTroopSelection()`

**用途 / Purpose:** 调用 RequestTroopSelection 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.RequestTroopSelection();
```

### OnCultureSelected
`public void OnCultureSelected(BasicCultureObject culture)`

**用途 / Purpose:** 在 culture selected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
missionLobbyComponent.OnCultureSelected(culture);
```

### GetRandomFaceSeedForCharacter
`public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)`

**用途 / Purpose:** 读取并返回当前对象中 random face seed for character 的结果。

```csharp
// 先通过子系统 API 拿到 MissionLobbyComponent 实例
MissionLobbyComponent missionLobbyComponent = ...;
var result = missionLobbyComponent.GetRandomFaceSeedForCharacter(character, 0);
```

### MPHostChangeParam
`public static string MPHostChangeParam(List<string> strings)`

**用途 / Purpose:** 调用 MPHostChangeParam 对应的操作。

```csharp
// 静态调用，不需要实例
MissionLobbyComponent.MPHostChangeParam(strings);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MissionLobbyComponent instance = ...;
```

## 参见

- [本区域目录](../)