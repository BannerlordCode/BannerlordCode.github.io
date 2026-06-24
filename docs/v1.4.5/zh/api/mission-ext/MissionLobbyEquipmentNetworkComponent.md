<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionLobbyEquipmentNetworkComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionLobbyEquipmentNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionLobbyEquipmentNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionLobbyEquipmentNetworkComponent.cs`

## 概述

`MissionLobbyEquipmentNetworkComponent` 是一个组件型对象，通常依附在 Agent、实体或系统对象上，承载局部状态和行为。

## 心智模型

把 `MissionLobbyEquipmentNetworkComponent` 当作一个 Component 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OnToggleLoadoutDelegate
`public delegate void OnToggleLoadoutDelegate(bool isActive)`

**用途 / Purpose:** 当 `toggle loadout delegate` 事件触发时调用此方法。

### OnRefreshEquipmentEventDelegate
`public delegate void OnRefreshEquipmentEventDelegate(MissionPeer lobbyPeer)`

**用途 / Purpose:** 当 `refresh equipment event delegate` 事件触发时调用此方法。

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**用途 / Purpose:** 当 `behavior initialize` 事件触发时调用此方法。

### PerkUpdated
`public void PerkUpdated(int perkList, int perkIndex)`

**用途 / Purpose:** 处理 `perk updated` 相关逻辑。

### EquipmentUpdated
`public void EquipmentUpdated()`

**用途 / Purpose:** 处理 `equipment updated` 相关逻辑。

### ToggleLoadout
`public void ToggleLoadout(bool isActive)`

**用途 / Purpose:** 处理 `toggle loadout` 相关逻辑。

## 使用示例

```csharp
var component = agent.GetComponent<MissionLobbyEquipmentNetworkComponent>();
```

## 参见

- [完整类目录](../catalog)