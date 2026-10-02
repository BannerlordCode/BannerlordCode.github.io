---
title: "AlleyCampaignBehavior"
description: "Auto-generated class reference for AlleyCampaignBehavior."
---
# AlleyCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase,IAlleyCampaignBehavior,ICampaignBehavior `
**Base:** CampaignBehaviorBase, IAlleyCampaignBehavior, ICampaignBehavior
**Source:** SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs

## Overview

Auto-generated stub for `AlleyCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

### SyncData
`public override void SyncData(IDataStore dataStore)`

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

### AddGameMenus
`protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter)`

### AddDialogs
`protected void AddDialogs(CampaignGameStarter campaignGameStarter)`

### GetIsPlayerAlleyUnderAttack
`public bool GetIsPlayerAlleyUnderAttack(Alley alley)`

### GetPlayerOwnedAlleyTroopCount
`public int GetPlayerOwnedAlleyTroopCount(Alley alley)`

### GetResponseTimeLeftForAttackInDays
`public int GetResponseTimeLeftForAttackInDays(Alley alley)`

### AbandonAlleyFromClanMenu
`public void AbandonAlleyFromClanMenu(Alley alley)`

### IsHeroAlleyLeaderOfAnyPlayerAlley
`public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero)`

### GetAllAssignedClanMembersForOwnedAlleys
`public List<Hero> GetAllAssignedClanMembersForOwnedAlleys()`

### ChangeAlleyMember
`public void ChangeAlleyMember(Alley alley,Hero newAlleyLead)`

### OnPlayerRetreatedFromMission
`public void OnPlayerRetreatedFromMission()`

### OnPlayerDiedInMission
`public void OnPlayerDiedInMission()`

### GetAssignedClanMemberOfAlley
`public Hero GetAssignedClanMemberOfAlley(Alley alley)`

### alley_related_menu_on_init
`public static void alley_related_menu_on_init(MenuCallbackArgs args)`

## See Also

- [Section index](../)
