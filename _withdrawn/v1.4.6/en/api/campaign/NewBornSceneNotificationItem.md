---
title: "NewBornSceneNotificationItem"
description: "NewBornSceneNotificationItem: a public class in TaleWorlds.CampaignSystem.SceneInformationPopupTypes, inheriting SceneNotificationData; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornSceneNotificationItem.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# NewBornSceneNotificationItem

**Namespace:** `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NewBornSceneNotificationItem : SceneNotificationData`
**File:** `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornSceneNotificationItem.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

NewBornSceneNotificationItem lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornSceneNotificationItem.cs. It is a public class, implementing/inheriting SceneNotificationData; the inheritance chain is NewBornSceneNotificationItem → SceneNotificationData. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: NewBornSceneNotificationItem lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.SceneInformationPopupTypes`, inheritance chain NewBornSceneNotificationItem → SceneNotificationData. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/SceneInformationPopupTypes/NewBornSceneNotificationItem.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaleHero` | `public Hero MaleHero` | property |
| `FemaleHero` | `public Hero FemaleHero` | property |
| `SceneID` | `public override string SceneID` | property |
| `TitleText` | `public override TextObject TitleText` | property |
| `SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters` | `public override SceneNotificationData.SceneNotificationCharacter[]GetSceneNotificationCharacters()` | method |
| `NewBornSceneNotificationItem` | `public NewBornSceneNotificationItem(Hero maleHero, Hero femaleHero, CampaignTime creationTime)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SceneNotificationData](../../core-extra/SceneNotificationData/)
- [same namespace AntiEmpireConspiracyBeginsSceneNotificationItem](../AntiEmpireConspiracyBeginsSceneNotificationItem/)
- [same namespace BecomeKingSceneNotificationItem](../BecomeKingSceneNotificationItem/)
- [same namespace CampaignSceneNotificationHelper](../CampaignSceneNotificationHelper/)
- [same namespace ClanMemberPeaceDeathSceneNotificationItem](../ClanMemberPeaceDeathSceneNotificationItem/)
