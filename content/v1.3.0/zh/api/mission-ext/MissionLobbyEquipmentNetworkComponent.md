---
title: "MissionLobbyEquipmentNetworkComponent"
description: "MissionLobbyEquipmentNetworkComponent 的自动生成类参考。"
---
# MissionLobbyEquipmentNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`

## 概述

`MissionLobbyEquipmentNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionLobbyEquipmentNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** **用途 / Purpose:** 在 behavior initialize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyEquipmentNetworkComponent 实例
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.OnBehaviorInitialize();
```

### PerkUpdated
`public void PerkUpdated(int perkList, int perkIndex)`

**用途 / Purpose:** **用途 / Purpose:** 调用 PerkUpdated 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyEquipmentNetworkComponent 实例
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.PerkUpdated(0, 0);
```

### EquipmentUpdated
`public void EquipmentUpdated()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EquipmentUpdated 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyEquipmentNetworkComponent 实例
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.EquipmentUpdated();
```

### ToggleLoadout
`public void ToggleLoadout(bool isActive)`

**用途 / Purpose:** **用途 / Purpose:** 调用 ToggleLoadout 对应的操作。

```csharp
// 先通过子系统 API 拿到 MissionLobbyEquipmentNetworkComponent 实例
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.ToggleLoadout(false);
```

### OnToggleLoadoutDelegate
`public delegate void OnToggleLoadoutDelegate(bool isActive)`

**用途 / Purpose:** **用途 / Purpose:** 在 toggle loadout delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyEquipmentNetworkComponent 实例
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.OnToggleLoadoutDelegate(false);
```

### OnRefreshEquipmentEventDelegate
`public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)`

**用途 / Purpose:** **用途 / Purpose:** 在 refresh equipment event delegate 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MissionLobbyEquipmentNetworkComponent 实例
MissionLobbyEquipmentNetworkComponent missionLobbyEquipmentNetworkComponent = ...;
missionLobbyEquipmentNetworkComponent.OnRefreshEquipmentEventDelegate(lobbyPeer);
```

## 使用示例

```csharp
var component = agent.GetComponent<MissionLobbyEquipmentNetworkComponent>();
```

## 参见

- [本区域目录](../)