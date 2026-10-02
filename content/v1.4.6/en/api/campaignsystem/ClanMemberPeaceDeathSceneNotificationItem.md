---
title: "ClanMemberPeaceDeathSceneNotificationItem"
description: "ClanMemberPeaceDeathSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/ClanMemberPeaceDeathSceneNotificationItem.cs."
---
# ClanMemberPeaceDeathSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ClanMemberPeaceDeathSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/ClanMemberPeaceDeathSceneNotificationItem.cs`

## Overview

ClanMemberPeaceDeathSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/ClanMemberPeaceDeathSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is ClanMemberPeaceDeathSceneNotificationItem → SceneNotificationData. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanMemberPeaceDeathSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain ClanMemberPeaceDeathSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/ClanMemberPeaceDeathSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeadHero` | `public Hero DeadHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `KillDetail` | `public KillCharacterAction.KillCharacterActionDetail KillDetail` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `ClanMemberPeaceDeathSceneNotificationItem` | `public ClanMemberPeaceDeathSceneNotificationItem(Hero deadHero, CampaignTime creationTime, KillCharacterAction.KillCharacterActionDetail killDetail)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberWarDeathSceneNotificationItem](../ClanMemberWarDeathSceneNotificationItem)
