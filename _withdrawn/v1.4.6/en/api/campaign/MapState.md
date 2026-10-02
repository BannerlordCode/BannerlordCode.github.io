---
title: "MapState"
description: "MapState: a public class in TaleWorlds.CampaignSystem.GameState, inheriting GameState; 27 exposed members (20 methods, 7 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/MapState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapState : GameState`
**File:** `TaleWorlds.CampaignSystem/GameState/MapState.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

MapState lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/MapState.cs. It is a public class, implementing/inheriting GameState; the inheritance chain is MapState → GameState → MBObjectBase. It exposes 27 public/protected members: 20 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapState lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain MapState → GameState → MBObjectBase. The surface is method-led (methods 20/27, properties 7/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/MapState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NextIncident` | `public Incident NextIncident` | property |
| `MenuContext` | `public MenuContext MenuContext` | property |
| `GameMenuId` | `public string GameMenuId` | property |
| `AtMenu` | `public bool AtMenu` | property |
| `MapConversationActive` | `public bool MapConversationActive` | property |
| `Handler` | `public IMapStateHandler Handler` | property |
| `IsSimulationActive` | `public bool IsSimulationActive` | property |
| `OnIdleTick` | `protected override void OnIdleTick(float dt)` | method |
| `OnJoinArmy` | `public void OnJoinArmy()` | method |
| `OnLeaveArmy` | `public void OnLeaveArmy()` | method |
| `OnDispersePlayerLeadedArmy` | `public void OnDispersePlayerLeadedArmy()` | method |
| `OnArmyCreated` | `public void OnArmyCreated(MobileParty mobileParty)` | method |
| `StartIncident` | `public void StartIncident(Incident incident)` | method |
| `OnMainPartyEncounter` | `public void OnMainPartyEncounter()` | method |
| `ProcessTravel` | `public void ProcessTravel(CampaignVec2 moveTargetPoint)` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnLoadingFinished` | `public void OnLoadingFinished()` | method |
| `OnMapConversationStarts` | `public void OnMapConversationStarts(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)` | method |
| `OnMapConversationOver` | `public void OnMapConversationOver()` | method |
| `OnActivate` | `protected override void OnActivate()` | method |
| `EnterMenuMode` | `public void EnterMenuMode()` | method |
| `ExitMenuMode` | `public void ExitMenuMode()` | method |
| `StartBattleSimulation` | `public void StartBattleSimulation()` | method |
| `EndBattleSimulation` | `public void EndBattleSimulation()` | method |
| `OnPlayerSiegeActivated` | `public void OnPlayerSiegeActivated()` | method |
| `OnPlayerSiegeDeactivated` | `public void OnPlayerSiegeDeactivated()` | method |
| `OnSiegeEngineClick` | `public void OnSiegeEngineClick(MatrixFrame siegeEngineFrame)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface GameState](../../core-extra/GameState/)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
