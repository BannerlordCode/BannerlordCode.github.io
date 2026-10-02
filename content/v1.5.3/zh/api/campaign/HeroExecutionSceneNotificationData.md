---
title: "HeroExecutionSceneNotificationData"
description: "HeroExecutionSceneNotificationData 的自动生成类参考。"
---
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData `
**Base:** SceneNotificationData
**Source:** TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs

## 概述

`HeroExecutionSceneNotificationData` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetSceneNotificationCharacters
`public override SceneNotificationData.SceneNotificationCharacter[] GetSceneNotificationCharacters() `

### OnCloseAction
`public override void OnCloseAction() `

### OnAffirmativeAction
`public override void OnAffirmativeAction() `

### OnNegativeAction
`public override void OnNegativeAction() `

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero,Action onAffirmativeAction,SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any,bool showNegativeOption = true,Action onNegativeAction = null) `

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero,Hero dyingHero,CampaignTime date,SceneNotificationData.RelevantContextType relevantContextType = SceneNotificationData.RelevantContextType.Any,Action onClose = null,bool isVisualOnly = false,bool useExecutioner = false,bool shouldAutoConfirm = false,bool showNegativeOption = false,Action onNegativeAction = null)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
