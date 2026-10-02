---
title: "HeroExecutionSceneNotificationData"
description: "Auto-generated class reference for HeroExecutionSceneNotificationData."
---
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData `
**Base:** SceneNotificationData
**Source:** TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs

## Overview

Auto-generated stub for `HeroExecutionSceneNotificationData`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter[] GetSceneNotificationCharacters()`

### OnCloseAction
`public override void OnCloseAction()`

### OnAffirmativeAction
`public override void OnAffirmativeAction()`

### OnNegativeAction
`public override void OnNegativeAction()`

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero,Action onAffirmativeAction,SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any,bool showNegativeOption = true,Action onNegativeAction = null)`

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero,Hero dyingHero,CampaignTime date,SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any,Action onClose = null,bool isVisualOnly = false,bool useExecutioner = false,bool shouldAutoConfirm = false,bool showNegativeOption = false,Action onNegativeAction = null)`

## See Also

- [Section index](../)
