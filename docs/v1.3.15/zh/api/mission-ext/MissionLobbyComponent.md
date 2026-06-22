<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLobbyComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionLobbyComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

## 概述

`MissionLobbyComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MissionLobbyComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInWarmup` | `public bool IsInWarmup { get { return this._warmupComponent != null && this._warmupComponent.IsInWarmup; }` |
| `MissionType` | `public MultiplayerGameType MissionType { get; set; }` |
| `CurrentMultiplayerState` | `public MissionLobbyComponent.MultiplayerGameState CurrentMultiplayerState { get { return this._currentMultiplayerState; }` |

## 主要方法

### AddLobbyComponentType
```csharp
public static void AddLobbyComponentType(Type type, LobbyMissionType missionType, bool isSeverComponent)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### CreateBehavior
```csharp
public static MissionLobbyComponent CreateBehavior()
```

### QuitMission
```csharp
public virtual void QuitMission()
```

### AfterStart
```csharp
public override void AfterStart()
```

### EarlyStart
```csharp
public override void EarlyStart()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### IsClassAvailable
```csharp
public bool IsClassAvailable(FormationClass formationClass)
```

### ChangeClassRestriction
```csharp
public void ChangeClassRestriction(FormationClass classToChangeRestriction, bool value)
```

### DespawnPlayer
```csharp
public void DespawnPlayer(MissionPeer missionPeer)
```

### OnScoreHit
```csharp
public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)
```

### OnAgentRemoved
```csharp
public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
```

### OnAgentBuild
```csharp
public override void OnAgentBuild(Agent agent, Banner banner)
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### GetSpawnPeriodDurationForPeer
```csharp
public static int GetSpawnPeriodDurationForPeer(MissionPeer peer)
```

### SetStateEndingAsServer
```csharp
public virtual void SetStateEndingAsServer()
```

### RequestCultureSelection
```csharp
public void RequestCultureSelection()
```

### RequestAdminMessage
```csharp
public void RequestAdminMessage(string message, bool isBroadcast)
```

### RequestTroopSelection
```csharp
public void RequestTroopSelection()
```

### OnCultureSelected
```csharp
public void OnCultureSelected(BasicCultureObject culture)
```

### GetRandomFaceSeedForCharacter
```csharp
public int GetRandomFaceSeedForCharacter(BasicCharacterObject character, int addition = 0)
```

### MPHostChangeParam
```csharp
public static string MPHostChangeParam(List<string> strings)
```

## 使用示例

```csharp
// MissionLobbyComponent (Component) 的典型用法
agent.GetComponent<MissionLobbyComponent>();
```

## 参见

- [完整类目录](../catalog)