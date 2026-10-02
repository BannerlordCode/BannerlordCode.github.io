---
title: "EducationCampaignBehavior"
description: "EducationCampaignBehavior 的自动生成类参考。"
---
# EducationCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase,IEducationLogic `
**Base:** CampaignBehaviorBase,IEducationLogic
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs

## 概述

`EducationCampaignBehavior` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### SyncData
`public override void SyncData(IDataStore dataStore) `

### RegisterEvents
`public override void RegisterEvents() `

### GetOptionProperties
`public void GetOptionProperties(Hero child,string optionKey,List<string> previousOptions,out TextObject optionTitle,out TextObject description,out TextObject effect,out ValueTuple<CharacterAttribute,int>[] attributes,out ValueTuple<SkillObject,int>[] skills,out ValueTuple<SkillObject,int>[] focusPoints,out EducationCampaignBehavior.EducationCharacterProperties[] educationCharacterProperties)`

### GetPageProperties
`public void GetPageProperties(Hero child,List<string> previousChoices,out TextObject title,out TextObject description,out TextObject instruction,out EducationCampaignBehavior.EducationCharacterProperties[] defaultCharacterProperties,out string[] availableOptions) `

### IsValidEducationNotification
`public bool IsValidEducationNotification(EducationMapNotification data) `

### GetStageProperties
`public void GetStageProperties(Hero child,out int pageCount) `

### Finalize
`public void Finalize(Hero child,List<string> chosenOptions) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
