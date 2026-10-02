---
title: "CampaignSceneNotificationHelper"
description: "CampaignSceneNotificationHelper: a public class in TaleWorlds.CampaignSystem; 12 exposed members (12 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs."
---
# CampaignSceneNotificationHelper

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class CampaignSceneNotificationHelper`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs`

## Overview

CampaignSceneNotificationHelper lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs. It is a public class; the inheritance chain is CampaignSceneNotificationHelper. It exposes 12 public/protected members: 12 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignSceneNotificationHelper is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.SceneInformationPopupTypes) the module directory; inheritance chain CampaignSceneNotificationHelper. The surface is method-led (methods 12/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/CampaignSceneNotificationHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetBodyguardOfCulture` | `public static SceneNotificationData.SceneNotificationCharacter GetBodyguardOfCulture(CultureObject culture)` | method |
| `RemoveWeaponsFromEquipment` | `public static void RemoveWeaponsFromEquipment(ref Equipment equipment, bool removeHelmet = false, bool removeShoulder = false)` | method |
| `GetChildStageEquipmentIDFromCulture` | `public static string GetChildStageEquipmentIDFromCulture(CultureObject childCulture)` | method |
| `GetRandomTroopForCulture` | `public static CharacterObject GetRandomTroopForCulture(CultureObject culture)` | method |
| `IEnumerable` | `public static IEnumerable<Hero>GetMilitaryAudienceForHero(Hero hero, bool includeClanLeader = true, bool onlyClanMembers = false)` | method |
| `IEnumerable` | `public static IEnumerable<Hero>GetMilitaryAudienceForKingdom(Kingdom kingdom, bool includeKingdomLeader = true)` | method |
| `GetFormalDayAndSeasonText` | `public static TextObject GetFormalDayAndSeasonText(CampaignTime time)` | method |
| `GetFormalNameForKingdom` | `public static TextObject GetFormalNameForKingdom(Kingdom kingdom)` | method |
| `CreateNotificationCharacterFromHero` | `public static SceneNotificationData.SceneNotificationCharacter CreateNotificationCharacterFromHero(Hero hero, Equipment overridenEquipment = null, bool useCivilian = false, BodyProperties overriddenBodyProperties = default(BodyProperties), uint overriddenColor1 = 4294967295U, uint overriddenColor2 = 4294967295U, bool useHorse = false)` | method |
| `CreateNotificationShipFromShip` | `public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship)` | method |
| `CreateNotificationShipFromShip` | `public static SceneNotificationData.SceneNotificationShip CreateNotificationShipFromShip(Ship ship, float hitPointRatio)` | method |
| `GetDefaultHorseItem` | `public static ItemObject GetDefaultHorseItem()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem)
- [same namespace ClanMemberWarDeathSceneNotificationItem](../ClanMemberWarDeathSceneNotificationItem)
