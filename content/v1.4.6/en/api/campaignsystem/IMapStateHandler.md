---
title: "IMapStateHandler"
description: "IMapStateHandler: a public interface in TaleWorlds.CampaignSystem; 28 exposed members (28 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs."
---
# IMapStateHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMapStateHandler`
**File:** `TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs`

## Overview

IMapStateHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs. It is a public interface; the inheritance chain is IMapStateHandler. It exposes 28 public/protected members: 28 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMapStateHandler is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameState) the module directory; inheritance chain IMapStateHandler. The surface is method-led (methods 28/28, properties 0/28), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/IMapStateHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnRefreshState` | `void OnRefreshState();` | method |
| `OnMainPartyEncounter` | `void OnMainPartyEncounter();` | method |
| `OnIncidentStarted` | `void OnIncidentStarted(Incident incident);` | method |
| `BeforeTick` | `void BeforeTick(float dt);` | method |
| `Tick` | `void Tick(float dt);` | method |
| `AfterTick` | `void AfterTick(float dt);` | method |
| `AfterWaitTick` | `void AfterWaitTick(float dt);` | method |
| `OnIdleTick` | `void OnIdleTick(float dt);` | method |
| `OnSignalPeriodicEvents` | `void OnSignalPeriodicEvents();` | method |
| `OnExit` | `void OnExit();` | method |
| `ResetCamera` | `void ResetCamera(bool resetDistance, bool teleportToMainParty);` | method |
| `TeleportCameraToMainParty` | `void TeleportCameraToMainParty();` | method |
| `FastMoveCameraToMainParty` | `void FastMoveCameraToMainParty();` | method |
| `IsCameraLockedToPlayerParty` | `bool IsCameraLockedToPlayerParty();` | method |
| `StartCameraAnimation` | `void StartCameraAnimation(CampaignVec2 targetPosition, float animationStopDuration);` | method |
| `OnHourlyTick` | `void OnHourlyTick();` | method |
| `OnMenuModeTick` | `void OnMenuModeTick(float dt);` | method |
| `OnEnteringMenuMode` | `void OnEnteringMenuMode(MenuContext menuContext);` | method |
| `OnExitingMenuMode` | `void OnExitingMenuMode();` | method |
| `OnBattleSimulationStarted` | `void OnBattleSimulationStarted(BattleSimulation battleSimulation);` | method |
| `OnBattleSimulationEnded` | `void OnBattleSimulationEnded();` | method |
| `OnGameplayCheatsEnabled` | `void OnGameplayCheatsEnabled();` | method |
| `OnMapConversationStarts` | `void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData);` | method |
| `OnMapConversationOver` | `void OnMapConversationOver();` | method |
| `OnPlayerSiegeActivated` | `void OnPlayerSiegeActivated();` | method |
| `OnPlayerSiegeDeactivated` | `void OnPlayerSiegeDeactivated();` | method |
| `OnSiegeEngineClick` | `void OnSiegeEngineClick(MatrixFrame siegeEngineFrame);` | method |
| `OnGameLoadFinished` | `void OnGameLoadFinished();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BannerEditorState](../BannerEditorState)
- [same namespace BarberState](../BarberState)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState)
- [same namespace ClanState](../ClanState)
