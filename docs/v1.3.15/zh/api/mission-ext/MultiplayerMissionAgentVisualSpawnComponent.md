<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerMissionAgentVisualSpawnComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## 概述

`MultiplayerMissionAgentVisualSpawnComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### SpawnAgentVisualsForPeer
```csharp
public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)
```

### RemoveAgentVisuals
```csharp
public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)
```

### OnMyAgentSpawned
```csharp
public void OnMyAgentSpawned()
```

### OnPreMissionTick
```csharp
public override void OnPreMissionTick(float dt)
```

### GetSpawnPointFrameForPlayer
```csharp
public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)
```

### FreeSpawnPointFromPlayer
```csharp
public void FreeSpawnPointFromPlayer(VirtualPlayer player)
```

## 使用示例

```csharp
// MultiplayerMissionAgentVisualSpawnComponent (Component) 的典型用法
agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>();
```

## 参见

- [完整类目录](../catalog)