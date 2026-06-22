<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLobbyEquipmentNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionLobbyEquipmentNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`

## 概述

`MissionLobbyEquipmentNetworkComponent` 是一个 AgentComponent——附加在 Agent 上的每-agent 状态/逻辑组件。通过 `agent.GetComponent<MissionLobbyEquipmentNetworkComponent>()` 访问（部分组件在 agent 上有强类型属性）。继承 AgentComponent 可添加自定义组件。

## 主要方法

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### PerkUpdated
```csharp
public void PerkUpdated(int perkList, int perkIndex)
```

### EquipmentUpdated
```csharp
public void EquipmentUpdated()
```

### ToggleLoadout
```csharp
public void ToggleLoadout(bool isActive)
```

### OnToggleLoadoutDelegate
```csharp
public delegate void OnToggleLoadoutDelegate(bool isActive)
```

### OnRefreshEquipmentEventDelegate
```csharp
public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)
```

## 使用示例

```csharp
// MissionLobbyEquipmentNetworkComponent (Component) 的典型用法
agent.GetComponent<MissionLobbyEquipmentNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)