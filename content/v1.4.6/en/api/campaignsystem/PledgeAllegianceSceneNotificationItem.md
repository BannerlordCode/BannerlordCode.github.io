---
title: "PledgeAllegianceSceneNotificationItem"
description: "PledgeAllegianceSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 7 exposed members (2 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/PledgeAllegianceSceneNotificationItem.cs."
---
# PledgeAllegianceSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PledgeAllegianceSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/PledgeAllegianceSceneNotificationItem.cs`

## Overview

PledgeAllegianceSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/PledgeAllegianceSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is PledgeAllegianceSceneNotificationItem → SceneNotificationData. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PledgeAllegianceSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain PledgeAllegianceSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/PledgeAllegianceSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerHero` | `public Hero PlayerHero` | property |
| `PlayerWantsToRestore` | `public bool PlayerWantsToRestore` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `PledgeAllegianceSceneNotificationItem` | `public PledgeAllegianceSceneNotificationItem(Hero playerHero, bool playerWantsToRestore)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
