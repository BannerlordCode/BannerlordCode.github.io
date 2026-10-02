---
title: "HeroExecutionSceneNotificationData"
description: "HeroExecutionSceneNotificationData: a public class in TaleWorlds.CampaignSystem, inheriting SceneNotificationData; 19 exposed members (5 methods, 13 properties, 1 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs."
---
# HeroExecutionSceneNotificationData

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`

## Overview

HeroExecutionSceneNotificationData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is HeroExecutionSceneNotificationData → SceneNotificationData. It exposes 19 public/protected members: 5 methods, 13 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroExecutionSceneNotificationData is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain HeroExecutionSceneNotificationData → SceneNotificationData. The surface is property-led (properties 13/19, methods 5/19), so it mostly exposes state for reading. SceneNotificationData on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Executer` | `public Hero Executer` | property |
| `Victim` | `public Hero Victim` | property |
| `IsNegativeOptionShown` | `public override bool IsNegativeOptionShown` | property |
| `SceneID` | `public override string SceneID` | property |
| `NegativeText` | `public override TextObject NegativeText` | property |
| `IsAffirmativeOptionShown` | `public override bool IsAffirmativeOptionShown` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `AffirmativeText` | `public override TextObject AffirmativeText` | property |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText` | property |
| `AffirmativeHintText` | `public override TextObject AffirmativeHintText` | property |
| `AffirmativeHintTextExtended` | `public override TextObject AffirmativeHintTextExtended` | property |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText` | property |
| `RelevantContext` | `public override SceneNotificationData.RelevantContextType RelevantContext` | property |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `OnCloseAction` | `public override void OnCloseAction()` | method |
| `OnAffirmativeAction` | `public override void OnAffirmativeAction()` | method |
| `CreateForPlayerExecutingHero` | `public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any, bool showNegativeOption = true)` | method |
| `CreateForInformingPlayer` | `public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any, Action onClose = null)` | method |
| `MaxShownRelationChanges` | `protected static int MaxShownRelationChanges` | field |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
