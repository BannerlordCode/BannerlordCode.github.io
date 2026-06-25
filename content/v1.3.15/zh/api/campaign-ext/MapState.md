---
title: "MapState"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapState`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapState : GameState`
**Base:** `GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/MapState.cs`

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
| `AtMenu` | `public bool AtMenu { get; }` |
| `MapConversationActive` | `public bool MapConversationActive { get; set; }` |
| `Handler` | `public IMapStateHandler Handler { get; set; }` |
| `IsSimulationActive` | `public bool IsSimulationActive { get; }` |

## 主要方法

### OnJoinArmy
`public void OnJoinArmy()`

**用途 / Purpose:** 当 `join army` 事件触发时调用此方法。

### OnLeaveArmy
`public void OnLeaveArmy()`

**用途 / Purpose:** 当 `leave army` 事件触发时调用此方法。

### OnFadeInAndOut
`public void OnFadeInAndOut(float fadeOutTime, float blackTime, float fadeInTime)`

**用途 / Purpose:** 当 `fade in and out` 事件触发时调用此方法。

### OnDispersePlayerLeadedArmy
`public void OnDispersePlayerLeadedArmy()`

**用途 / Purpose:** 当 `disperse player leaded army` 事件触发时调用此方法。

### OnArmyCreated
`public void OnArmyCreated(MobileParty mobileParty)`

**用途 / Purpose:** 当 `army created` 事件触发时调用此方法。

### StartIncident
`public void StartIncident(Incident incident)`

**用途 / Purpose:** 处理 `start incident` 相关逻辑。

### OnMainPartyEncounter
`public void OnMainPartyEncounter()`

**用途 / Purpose:** 当 `main party encounter` 事件触发时调用此方法。

### ProcessTravel
`public void ProcessTravel(CampaignVec2 moveTargetPoint)`

**用途 / Purpose:** 处理 `process travel` 相关逻辑。

### OnLoadingFinished
`public void OnLoadingFinished()`

**用途 / Purpose:** 当 `loading finished` 事件触发时调用此方法。

### OnMapConversationStarts
`public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**用途 / Purpose:** 当 `map conversation starts` 事件触发时调用此方法。

### OnMapConversationOver
`public void OnMapConversationOver()`

**用途 / Purpose:** 当 `map conversation over` 事件触发时调用此方法。

### EnterMenuMode
`public void EnterMenuMode()`

**用途 / Purpose:** 处理 `enter menu mode` 相关逻辑。

### ExitMenuMode
`public void ExitMenuMode()`

**用途 / Purpose:** 处理 `exit menu mode` 相关逻辑。

### StartBattleSimulation
`public void StartBattleSimulation()`

**用途 / Purpose:** 处理 `start battle simulation` 相关逻辑。

### EndBattleSimulation
`public void EndBattleSimulation()`

**用途 / Purpose:** 处理 `end battle simulation` 相关逻辑。

### OnPlayerSiegeActivated
`public void OnPlayerSiegeActivated()`

**用途 / Purpose:** 当 `player siege activated` 事件触发时调用此方法。

### OnPlayerSiegeDeactivated
`public void OnPlayerSiegeDeactivated()`

**用途 / Purpose:** 当 `player siege deactivated` 事件触发时调用此方法。

### OnSiegeEngineClick
`public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)`

**用途 / Purpose:** 当 `siege engine click` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MapState();
value.OnJoinArmy();
```

## 参见

- [完整类目录](../catalog)