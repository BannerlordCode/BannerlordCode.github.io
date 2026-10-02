---
title: "MainHeroBattleDeathNotificationItem"
description: "MainHeroBattleDeathNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs."
---
# MainHeroBattleDeathNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MainHeroBattleDeathNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs`

## Overview

MainHeroBattleDeathNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is MainHeroBattleDeathNotificationItem → SceneNotificationData. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MainHeroBattleDeathNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain MainHeroBattleDeathNotificationItem → SceneNotificationData. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MainHeroBattleDeathNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeadHero` | `public Hero DeadHero` | property |
| `KillerCulture` | `public CultureObject KillerCulture` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `MainHeroBattleDeathNotificationItem` | `public MainHeroBattleDeathNotificationItem(Hero deadHero, CultureObject killerCulture = null)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
