---
title: "MapState"
description: "MapState：TaleWorlds.CampaignSystem.GameState 的 public 类，继承 GameState；公开成员 27 个（方法 20、属性 7、字段 0）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/GameState/MapState.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/MapState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

MapState 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/MapState.cs。它是一个 public 类，实现/继承 GameState，继承链为 MapState → GameState → MBObjectBase。public/protected 成员共 27 个：20 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapState 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.GameState`，继承链 MapState → GameState → MBObjectBase。成员构成以方法为主（方法 20/27，属性 7/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/MapState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NextIncident` | `public Incident NextIncident` | 属性 |
| `MenuContext` | `public MenuContext MenuContext` | 属性 |
| `GameMenuId` | `public string GameMenuId` | 属性 |
| `AtMenu` | `public bool AtMenu` | 属性 |
| `MapConversationActive` | `public bool MapConversationActive` | 属性 |
| `Handler` | `public IMapStateHandler Handler` | 属性 |
| `IsSimulationActive` | `public bool IsSimulationActive` | 属性 |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | 方法 |
| `OnJoinArmy` | `public void OnJoinArmy()` | 方法 |
| `OnLeaveArmy` | `public void OnLeaveArmy()` | 方法 |
| `OnDispersePlayerLeadedArmy` | `public void OnDispersePlayerLeadedArmy()` | 方法 |
| `OnArmyCreated` | `public void OnArmyCreated(MobileParty mobileParty)` | 方法 |
| `StartIncident` | `public void StartIncident(Incident incident)` | 方法 |
| `OnMainPartyEncounter` | `public void OnMainPartyEncounter()` | 方法 |
| `ProcessTravel` | `public void ProcessTravel(CampaignVec2 moveTargetPoint)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnLoadingFinished` | `public void OnLoadingFinished()` | 方法 |
| `OnMapConversationStarts` | `public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | 方法 |
| `OnMapConversationOver` | `public void OnMapConversationOver()` | 方法 |
| `OnActivate` | `protected override void OnActivate()` | 方法 |
| `EnterMenuMode` | `public void EnterMenuMode()` | 方法 |
| `ExitMenuMode` | `public void ExitMenuMode()` | 方法 |
| `StartBattleSimulation` | `public void StartBattleSimulation()` | 方法 |
| `EndBattleSimulation` | `public void EndBattleSimulation()` | 方法 |
| `OnPlayerSiegeActivated` | `public void OnPlayerSiegeActivated()` | 方法 |
| `OnPlayerSiegeDeactivated` | `public void OnPlayerSiegeDeactivated()` | 方法 |
| `OnSiegeEngineClick` | `public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 GameState](../../core-extra/GameState/)
- [同命名空间 BannerEditorState](../BannerEditorState/)
- [同命名空间 BarberState](../BarberState/)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState/)
- [同命名空间 ClanState](../ClanState/)
