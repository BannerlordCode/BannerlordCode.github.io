---
title: "BecomeKingSceneNotificationItem"
description: "BecomeKingSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs."
---
# BecomeKingSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BecomeKingSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs`

## Overview

BecomeKingSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is BecomeKingSceneNotificationItem → SceneNotificationData. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BecomeKingSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain BecomeKingSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NewLeaderHero` | `public Hero NewLeaderHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `BecomeKingSceneNotificationItem` | `public BecomeKingSceneNotificationItem(Hero newLeaderHero)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
- [same namespace ClanMemberWarDeathSceneNotificationItem](../ClanMemberWarDeathSceneNotificationItem)
