---
title: "KingdomCreatedSceneNotificationItem"
description: "KingdomCreatedSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/KingdomCreatedSceneNotificationItem.cs."
---
# KingdomCreatedSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomCreatedSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/KingdomCreatedSceneNotificationItem.cs`

## Overview

KingdomCreatedSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/KingdomCreatedSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is KingdomCreatedSceneNotificationItem → SceneNotificationData. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomCreatedSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain KingdomCreatedSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/KingdomCreatedSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NewKingdom` | `public Kingdom NewKingdom` | property |
| `SceneID` | `public override string SceneID` | property |
| `PauseActiveState` | `public override bool PauseActiveState` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `AffirmativeText` | `public override TextObject AffirmativeText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `KingdomCreatedSceneNotificationItem` | `public KingdomCreatedSceneNotificationItem(Kingdom newKingdom)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
