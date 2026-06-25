---
title: "MapState"
description: "MapState 的自动生成类参考。"
---
# MapState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/MapState.cs`

## 概述

`MapState` 位于 `TaleWorlds.CampaignSystem.GameState`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.GameState` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextIncident` | `public Incident NextIncident { get; }` |
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `GameMenuId` | `public string GameMenuId { get; set; }` |
| `Handler` | `public IMapStateHandler Handler { get; set; }` |

## 主要方法

### OnJoinArmy
`public void OnJoinArmy()`

**用途 / Purpose:** 在 join army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnJoinArmy();
```

### OnLeaveArmy
`public void OnLeaveArmy()`

**用途 / Purpose:** 在 leave army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnLeaveArmy();
```

### OnDispersePlayerLeadedArmy
`public void OnDispersePlayerLeadedArmy()`

**用途 / Purpose:** 在 disperse player leaded army 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnDispersePlayerLeadedArmy();
```

### OnArmyCreated
`public void OnArmyCreated(MobileParty mobileParty)`

**用途 / Purpose:** 在 army created 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnArmyCreated(mobileParty);
```

### StartIncident
`public void StartIncident(Incident incident)`

**用途 / Purpose:** 启动incident流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.StartIncident(incident);
```

### OnMainPartyEncounter
`public void OnMainPartyEncounter()`

**用途 / Purpose:** 在 main party encounter 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnMainPartyEncounter();
```

### ProcessTravel
`public void ProcessTravel(CampaignVec2 moveTargetPoint)`

**用途 / Purpose:** 调用 ProcessTravel 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.ProcessTravel(moveTargetPoint);
```

### OnLoadingFinished
`public void OnLoadingFinished()`

**用途 / Purpose:** 在 loading finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnLoadingFinished();
```

### OnMapConversationStarts
`public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**用途 / Purpose:** 在 map conversation starts 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnMapConversationStarts(playerCharacterData, conversationPartnerData);
```

### OnMapConversationOver
`public void OnMapConversationOver()`

**用途 / Purpose:** 在 map conversation over 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnMapConversationOver();
```

### EnterMenuMode
`public void EnterMenuMode()`

**用途 / Purpose:** 调用 EnterMenuMode 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.EnterMenuMode();
```

### ExitMenuMode
`public void ExitMenuMode()`

**用途 / Purpose:** 调用 ExitMenuMode 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.ExitMenuMode();
```

### StartBattleSimulation
`public void StartBattleSimulation()`

**用途 / Purpose:** 启动battle simulation流程或状态机。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.StartBattleSimulation();
```

### EndBattleSimulation
`public void EndBattleSimulation()`

**用途 / Purpose:** 调用 EndBattleSimulation 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.EndBattleSimulation();
```

### OnPlayerSiegeActivated
`public void OnPlayerSiegeActivated()`

**用途 / Purpose:** 在 player siege activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnPlayerSiegeActivated();
```

### OnPlayerSiegeDeactivated
`public void OnPlayerSiegeDeactivated()`

**用途 / Purpose:** 在 player siege deactivated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnPlayerSiegeDeactivated();
```

### OnSiegeEngineClick
`public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)`

**用途 / Purpose:** 在 siege engine click 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MapState 实例
MapState mapState = ...;
mapState.OnSiegeEngineClick(siegeEngineFrame);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MapState mapState = ...;
mapState.OnJoinArmy();
```

## 参见

- [本区域目录](../)