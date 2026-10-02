---
title: "AlleyCampaignBehavior"
description: "AlleyCampaignBehavior 的自动生成类参考。"
---
# AlleyCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox
**Type:** `public class AlleyCampaignBehavior : CampaignBehaviorBase,IAlleyCampaignBehavior,ICampaignBehavior `
**Base:** CampaignBehaviorBase,IAlleyCampaignBehavior,ICampaignBehavior
**Source:** SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs

## 概述

`AlleyCampaignBehavior` 的自动生成类参考页面。声明来自 `SandBox/CampaignBehaviors/AlleyCampaignBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterEvents
`public override void RegisterEvents() `

### SyncData
`public override void SyncData(IDataStore dataStore) `

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter) `

### AddGameMenus
`protected void AddGameMenus(CampaignGameStarter campaignGameSystemStarter) `

### AddDialogs
`protected void AddDialogs(CampaignGameStarter campaignGameStarter) `

### GetIsPlayerAlleyUnderAttack
`public bool GetIsPlayerAlleyUnderAttack(Alley alley) `

### GetPlayerOwnedAlleyTroopCount
`public int GetPlayerOwnedAlleyTroopCount(Alley alley) `

### GetResponseTimeLeftForAttackInDays
`public int GetResponseTimeLeftForAttackInDays(Alley alley) `

### AbandonAlleyFromClanMenu
`public void AbandonAlleyFromClanMenu(Alley alley) `

### IsHeroAlleyLeaderOfAnyPlayerAlley
`public bool IsHeroAlleyLeaderOfAnyPlayerAlley(Hero hero) `

### GetAllAssignedClanMembersForOwnedAlleys
`public List<Hero> GetAllAssignedClanMembersForOwnedAlleys() `

### ChangeAlleyMember
`public void ChangeAlleyMember(Alley alley,Hero newAlleyLead) `

### OnPlayerRetreatedFromMission
`public void OnPlayerRetreatedFromMission() `

### OnPlayerDiedInMission
`public void OnPlayerDiedInMission() `

### GetAssignedClanMemberOfAlley
`public Hero GetAssignedClanMemberOfAlley(Alley alley) `

### alley_related_menu_on_init
`public static void alley_related_menu_on_init(MenuCallbackArgs args) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
