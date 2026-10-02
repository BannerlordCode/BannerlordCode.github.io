---
title: "HeirComingOfAgeFemaleSceneNotificationItem"
description: "HeirComingOfAgeFemaleSceneNotificationItem: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeirComingOfAgeFemaleSceneNotificationItem.cs."
---
# HeirComingOfAgeFemaleSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HeirComingOfAgeFemaleSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeirComingOfAgeFemaleSceneNotificationItem.cs`

## Overview

HeirComingOfAgeFemaleSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeirComingOfAgeFemaleSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is HeirComingOfAgeFemaleSceneNotificationItem → SceneNotificationData. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeirComingOfAgeFemaleSceneNotificationItem is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain HeirComingOfAgeFemaleSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeirComingOfAgeFemaleSceneNotificationItem.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MentorHero` | `public Hero MentorHero` | property |
| `HeroCameOfAge` | `public Hero HeroCameOfAge` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `HeirComingOfAgeFemaleSceneNotificationItem` | `public HeirComingOfAgeFemaleSceneNotificationItem(Hero mentorHero, Hero heroCameOfAge, CampaignTime creationTime)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
