---
title: "FindingFirstBannerPieceSceneNotificationItem"
description: "FindingFirstBannerPieceSceneNotificationItem: a public class in TaleWorlds.CampaignSystem.SceneInformationPopupTypes, inheriting SceneNotificationData; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingFirstBannerPieceSceneNotificationItem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FindingFirstBannerPieceSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class FindingFirstBannerPieceSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingFirstBannerPieceSceneNotificationItem.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

FindingFirstBannerPieceSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingFirstBannerPieceSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is FindingFirstBannerPieceSceneNotificationItem → SceneNotificationData. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FindingFirstBannerPieceSceneNotificationItem lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`, inheritance chain FindingFirstBannerPieceSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/FindingFirstBannerPieceSceneNotificationItem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerHero` | `public Hero PlayerHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `OnCloseAction` | `public override void OnCloseAction()` | method |
| `FindingFirstBannerPieceSceneNotificationItem` | `public FindingFirstBannerPieceSceneNotificationItem(Hero playerHero, Action onCloseAction = null)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SceneNotificationData](../../core-extra/SceneNotificationData/)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem/)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem/)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper/)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem/)
