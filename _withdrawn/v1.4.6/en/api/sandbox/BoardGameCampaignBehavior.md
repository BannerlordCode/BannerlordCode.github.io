---
title: "BoardGameCampaignBehavior"
description: "BoardGameCampaignBehavior: a public class in SandBox.CampaignBehaviors, inheriting CampaignBehaviorBase; 11 exposed members (10 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BoardGameCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BoardGameCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is BoardGameCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameCampaignBehavior lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.CampaignBehaviors`, inheritance chain BoardGameCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<Settlement>WonBoardGamesInOneWeekInSettlement` | property |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `InitializeConversationVars` | `public void InitializeConversationVars()` | method |
| `OnMissionStarted` | `public void OnMissionStarted(IMission mission)` | method |
| `OnHeroKilled` | `public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `taverngamehost_player_sitting_now_on_condition` | `public static bool taverngamehost_player_sitting_now_on_condition()` | method |
| `PlayerWonAgainstTavernChampion` | `public void PlayerWonAgainstTavernChampion()` | method |
| `SetBetAmount` | `public void SetBetAmount(int bet)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior/)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior/)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior/)
- [same namespace CheckpointCampaignBehavior](../CheckpointCampaignBehavior/)
