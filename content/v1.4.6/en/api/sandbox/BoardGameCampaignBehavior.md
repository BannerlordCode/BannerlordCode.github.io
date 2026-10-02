---
title: "BoardGameCampaignBehavior"
description: "BoardGameCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase; 11 exposed members (10 methods, 1 properties, 0 fields). Source: SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs."
---
# BoardGameCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`

## Overview

BoardGameCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase; the inheritance chain is BoardGameCampaignBehavior → CampaignBehaviorBase. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BoardGameCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain BoardGameCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyCampaignBehavior](../AlleyCampaignBehavior)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace CheckpointCampaignBehavior](../CheckpointCampaignBehavior)
