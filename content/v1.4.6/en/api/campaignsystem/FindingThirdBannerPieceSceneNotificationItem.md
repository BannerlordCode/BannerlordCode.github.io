---
title: "FindingThirdBannerPieceSceneNotificationItem"
description: "FindingThirdBannerPieceSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 8 exposed members (1 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingThirdBannerPieceSceneNotificationItem.cs."
---
# FindingThirdBannerPieceSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FindingThirdBannerPieceSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingThirdBannerPieceSceneNotificationItem.cs`

## Overview

FindingThirdBannerPieceSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingThirdBannerPieceSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is FindingThirdBannerPieceSceneNotificationItem → SceneNotificationData. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FindingThirdBannerPieceSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain FindingThirdBannerPieceSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingThirdBannerPieceSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SceneID` | `public override string SceneID` | property |
| `IsAffirmativeOptionShown` | `public override bool IsAffirmativeOptionShown` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText` | property |
| `AffirmativeText` | `public override TextObject AffirmativeText` | property |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `FindingThirdBannerPieceSceneNotificationItem` | `public FindingThirdBannerPieceSceneNotificationItem()` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
