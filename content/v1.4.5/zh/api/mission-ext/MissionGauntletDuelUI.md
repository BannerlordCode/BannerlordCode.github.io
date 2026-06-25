---
title: "MissionGauntletDuelUI"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionGauntletDuelUI`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletDuelUI

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletDuelUI : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletDuelUI.cs`

## 概述

`MissionGauntletDuelUI` 位于 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**用途 / Purpose:** 当 `mission screen initialize` 事件触发时调用此方法。

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**用途 / Purpose:** 当 `mission screen finalize` 事件触发时调用此方法。

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 当 `mission screen tick` 事件触发时调用此方法。

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**用途 / Purpose:** 当 `agent build` 事件触发时调用此方法。

### OnFocusGained
`public override void OnFocusGained(Agent agent, IFocusable focusableObject, bool isInteractable)`

**用途 / Purpose:** 当 `focus gained` 事件触发时调用此方法。

### OnFocusLost
`public override void OnFocusLost(Agent agent, IFocusable focusableObject)`

**用途 / Purpose:** 当 `focus lost` 事件触发时调用此方法。

### OnPeerEquipmentIndexRefreshed
`public void OnPeerEquipmentIndexRefreshed(MissionPeer peer, int equipmentSetIndex)`

**用途 / Purpose:** 当 `peer equipment index refreshed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MissionGauntletDuelUI();
value.OnMissionScreenInitialize();
```

## 参见

- [完整类目录](../catalog)