---
title: "IMapStateHandler"
description: "IMapStateHandler：TaleWorlds.CampaignSystem 的 public 接口；公开成员 28 个（方法 28、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs。"
---
# IMapStateHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapStateHandler`
**File:** `TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs`

## 概述

IMapStateHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs。它是一个 public 接口，继承链为 IMapStateHandler。public/protected 成员共 28 个：28 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMapStateHandler 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameState），继承链 IMapStateHandler。成员构成以方法为主（方法 28/28，属性 0/28），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRefreshState` | `void OnRefreshState();` | 方法 |
| `OnMainPartyEncounter` | `void OnMainPartyEncounter();` | 方法 |
| `OnIncidentStarted` | `void OnIncidentStarted(Incident incident);` | 方法 |
| `BeforeTick` | `void BeforeTick(float dt);` | 方法 |
| `Tick` | `void Tick(float dt);` | 方法 |
| `AfterTick` | `void AfterTick(float dt);` | 方法 |
| `AfterWaitTick` | `void AfterWaitTick(float dt);` | 方法 |
| `OnIdleTick` | `void OnIdleTick(float dt);` | 方法 |
| `OnSignalPeriodicEvents` | `void OnSignalPeriodicEvents();` | 方法 |
| `OnExit` | `void OnExit();` | 方法 |
| `ResetCamera` | `void ResetCamera(bool resetDistance, bool teleportToMainParty);` | 方法 |
| `TeleportCameraToMainParty` | `void TeleportCameraToMainParty();` | 方法 |
| `FastMoveCameraToMainParty` | `void FastMoveCameraToMainParty();` | 方法 |
| `IsCameraLockedToPlayerParty` | `bool IsCameraLockedToPlayerParty();` | 方法 |
| `StartCameraAnimation` | `void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration);` | 方法 |
| `OnHourlyTick` | `void OnHourlyTick();` | 方法 |
| `OnMenuModeTick` | `void OnMenuModeTick(float dt);` | 方法 |
| `OnEnteringMenuMode` | `void OnEnteringMenuMode(MenuContext menuContext);` | 方法 |
| `OnExitingMenuMode` | `void OnExitingMenuMode();` | 方法 |
| `OnBattleSimulationStarted` | `void OnBattleSimulationStarted(BattleSimulation battleSimulation);` | 方法 |
| `OnBattleSimulationEnded` | `void OnBattleSimulationEnded();` | 方法 |
| `OnGameplayCheatsEnabled` | `void OnGameplayCheatsEnabled();` | 方法 |
| `OnMapConversationStarts` | `void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData);` | 方法 |
| `OnMapConversationOver` | `void OnMapConversationOver();` | 方法 |
| `OnPlayerSiegeActivated` | `void OnPlayerSiegeActivated();` | 方法 |
| `OnPlayerSiegeDeactivated` | `void OnPlayerSiegeDeactivated();` | 方法 |
| `OnSiegeEngineClick` | `void OnSiegeEngineClick(MatrixFrame siegeEngineFrame);` | 方法 |
| `OnGameLoadFinished` | `void OnGameLoadFinished();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 BannerEditorState](../BannerEditorState)
- [同命名空间 BarberState](../BarberState)
- [同命名空间 CharacterDeveloperState](../CharacterDeveloperState)
- [同命名空间 ClanState](../ClanState)
