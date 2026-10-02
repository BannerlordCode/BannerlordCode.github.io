---
title: "IMenuContextHandler"
description: "IMenuContextHandler: a public interface in TaleWorlds.CampaignSystem.GameState; 11 exposed members (11 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMenuContextHandler

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IMenuContextHandler`
**File:** `TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

IMenuContextHandler lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs. It is a public interface; the inheritance chain is IMenuContextHandler. It exposes 11 public/protected members: 11 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMenuContextHandler lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.GameState`, inheritance chain IMenuContextHandler. The surface is method-led (methods 11/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameState/IMenuContextHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnBackgroundMeshNameSet` | `void OnBackgroundMeshNameSet(string name);` | method |
| `OnOpenTownManagement` | `void OnOpenTownManagement();` | method |
| `OnOpenRecruitVolunteers` | `void OnOpenRecruitVolunteers();` | method |
| `OnOpenTournamentLeaderboard` | `void OnOpenTournamentLeaderboard();` | method |
| `OnOpenTroopSelection` | `void OnOpenTroopSelection(TroopRoster fullRoster, TroopRoster initialSelections, List<Ship>eligibleShips, Func<CharacterObject, bool>canChangeStatusOfTroop, Action<TroopRoster>onDone, int maxSelectableTroopCount, int minSelectableTroopCount, bool isNavalRaid);` | method |
| `OnMenuCreate` | `void OnMenuCreate();` | method |
| `OnMenuActivate` | `void OnMenuActivate();` | method |
| `OnMenuRefresh` | `void OnMenuRefresh();` | method |
| `OnHourlyTick` | `void OnHourlyTick();` | method |
| `OnPanelSoundIDSet` | `void OnPanelSoundIDSet(string panelSoundID);` | method |
| `OnAmbientSoundIDSet` | `void OnAmbientSoundIDSet(string ambientSoundID);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BannerEditorState](../BannerEditorState/)
- [same namespace BarberState](../BarberState/)
- [same namespace CharacterDeveloperState](../CharacterDeveloperState/)
- [same namespace ClanState](../ClanState/)
