---
title: "FindingSecondBannerPieceSceneNotificationItem"
description: "FindingSecondBannerPieceSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingSecondBannerPieceSceneNotificationItem.cs."
---
# FindingSecondBannerPieceSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FindingSecondBannerPieceSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingSecondBannerPieceSceneNotificationItem.cs`

## Overview

FindingSecondBannerPieceSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingSecondBannerPieceSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is FindingSecondBannerPieceSceneNotificationItem → SceneNotificationData. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FindingSecondBannerPieceSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain FindingSecondBannerPieceSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingSecondBannerPieceSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerHero` | `public Hero PlayerHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `FindingSecondBannerPieceSceneNotificationItem` | `public FindingSecondBannerPieceSceneNotificationItem(Hero playerHero)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
