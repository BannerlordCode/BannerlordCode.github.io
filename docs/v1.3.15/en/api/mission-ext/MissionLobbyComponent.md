<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionLobbyComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionLobbyComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionLobbyComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyComponent.cs`

## Overview

`MissionLobbyComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionLobbyComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsInWarmup` | `public bool IsInWarmup { get { return this._warmupComponent != null && this._warmupComponent.IsInWarmup; }` |
| `MissionType` | `public MultiplayerGameType MissionType { get; set; }` |
| `CurrentMultiplayerState` | `public MissionLobbyComponent.MultiplayerGameState CurrentMultiplayerState { get { return this._currentMultiplayerState; }` |

## Key Methods

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

## Usage Example

```csharp
// Typical usage of MissionLobbyComponent (Component)
agent.GetComponent<MissionLobbyComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)