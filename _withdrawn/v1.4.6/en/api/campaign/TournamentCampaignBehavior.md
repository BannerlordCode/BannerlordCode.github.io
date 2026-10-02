---
title: "TournamentCampaignBehavior"
description: "TournamentCampaignBehavior: a public class in TaleWorlds.CampaignSystem.TournamentGames, inheriting CampaignBehaviorBase; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TournamentCampaignBehavior lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is TournamentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentCampaignBehavior lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.TournamentGames`, inheritance chain TournamentCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/TournamentCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameSystemStarter)` | method |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | method |
| `game_menu_ui_town_arena_see_leaderboard_on_consequence` | `public static void game_menu_ui_town_arena_see_leaderboard_on_consequence(MenuCallbackArgs args)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FightTournamentGame](../FightTournamentGame/)
- [same namespace ITournamentManager](../ITournamentManager/)
- [same namespace TournamentGame](../TournamentGame/)
- [same namespace TournamentManager](../TournamentManager/)
