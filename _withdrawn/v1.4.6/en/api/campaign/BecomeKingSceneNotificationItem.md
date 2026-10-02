---
title: "BecomeKingSceneNotificationItem"
description: "BecomeKingSceneNotificationItem: a public class in TaleWorlds.CampaignSystem.SceneInformationPopupTypes, inheriting SceneNotificationData; 6 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BecomeKingSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BecomeKingSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

BecomeKingSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is BecomeKingSceneNotificationItem → SceneNotificationData. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BecomeKingSceneNotificationItem lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`, inheritance chain BecomeKingSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/BecomeKingSceneNotificationItem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NewLeaderHero` | `public Hero NewLeaderHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `Banner[]GetBanners` | `public override Banner[]GetBanners()` | method |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `BecomeKingSceneNotificationItem` | `public BecomeKingSceneNotificationItem(Hero newLeaderHero)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SceneNotificationData](../../core-extra/SceneNotificationData/)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem/)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper/)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem/)
- [same namespace ClanMemberWarDeathSceneNotificationItem](../ClanMemberWarDeathSceneNotificationItem/)
