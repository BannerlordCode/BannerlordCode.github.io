---
title: "MarriageSceneNotificationItem"
description: "MarriageSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MarriageSceneNotificationItem.cs."
---
# MarriageSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MarriageSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MarriageSceneNotificationItem.cs`

## Overview

MarriageSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MarriageSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is MarriageSceneNotificationItem → SceneNotificationData. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MarriageSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain MarriageSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/MarriageSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GroomHero` | `public Hero GroomHero` | property |
| `BrideHero` | `public Hero BrideHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `RelevantContext` | `public override SceneNotificationData.RelevantContextType RelevantContext` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `MarriageSceneNotificationItem` | `public MarriageSceneNotificationItem(Hero groomHero, Hero brideHero, CampaignTime creationTime, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
