---
title: "AlleyCampaignBehavior"
description: "AlleyCampaignBehavior: a public class in SandBox, inheriting CampaignBehaviorBase, IAlleyCampaignBehavior; 18 exposed members (16 methods, 1 properties, 0 fields). Source: SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs."
---
# AlleyCampaignBehavior

**Namespace:** `SandBox.CampaignBehaviors`
**Module:** `SandBox`
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior`
**File:** `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`

## Overview

AlleyCampaignBehavior lives in the SandBox module, source file SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs. It is a public class, implementing/inheriting CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior; the inheritance chain is AlleyCampaignBehavior → CampaignBehaviorBase. It exposes 18 public/protected members: 16 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AlleyCampaignBehavior is a top-level type in SandBox, namespace differing from (SandBox.CampaignBehaviors) the module directory; inheritance chain AlleyCampaignBehavior → CampaignBehaviorBase. The surface is method-led (methods 16/18, properties 1/18), so it mostly exposes operations. CampaignBehaviorBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | method |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | method |
| `OnSessionLaunched` | `public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)` | method |
| `AddGameMenus` | `protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)` | method |
| `AddDialogs` | `protected void AddDialogs(CampaignGameStarter campaignGameStarter)` | method |
| `GetIsPlayerAlleyUnderAttack` | `public bool GetIsPlayerAlleyUnderAttack(Alley alley)` | method |
| `GetPlayerOwnedAlleyTroopCount` | `public int GetPlayerOwnedAlleyTroopCount(Alley alley)` | method |
| `GetResponseTimeLeftForAttackInDays` | `public int GetResponseTimeLeftForAttackInDays(Alley alley)` | method |
| `AbandonAlleyFromClanMenu` | `public void AbandonAlleyFromClanMenu(Alley alley)` | method |
| `IsHeroAlleyLeaderOfAnyPlayerAlley` | `public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero)` | method |
| `List` | `public List<Hero>GetAllAssignedClanMembersForOwnedAlleys()` | method |
| `ChangeAlleyMember` | `public void ChangeAlleyMember(Alley alley, Hero newAlleyLead)` | method |
| `OnPlayerRetreatedFromMission` | `public void OnPlayerRetreatedFromMission()` | method |
| `OnPlayerDiedInMission` | `public void OnPlayerDiedInMission()` | method |
| `GetAssignedClanMemberOfAlley` | `public Hero GetAssignedClanMemberOfAlley(Alley alley)` | method |
| `alley_related_menu_on_init` | `public static void alley_related_menu_on_init(MenuCallbackArgs args)` | method |
| `SaveableTypeDefiner` | `public class AlleyCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | property |
| `SaveableTypeDefiner` | `public class AlleyCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArenaMasterCampaignBehavior](../ArenaMasterCampaignBehavior)
- [same namespace BarberCampaignBehavior](../BarberCampaignBehavior)
- [same namespace BoardGameCampaignBehavior](../BoardGameCampaignBehavior)
- [same namespace CheckpointCampaignBehavior](../CheckpointCampaignBehavior)
