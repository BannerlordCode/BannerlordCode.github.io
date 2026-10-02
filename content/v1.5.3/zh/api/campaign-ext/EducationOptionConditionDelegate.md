---
title: "EducationOptionConditionDelegate"
description: "EducationOptionConditionDelegate 的自动生成类参考。"
---
# EducationOptionConditionDelegate

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public delegate bool EducationOptionConditionDelegate(EducationCampaignBehavior.EducationOption option,List<EducationCampaignBehavior.EducationOption> previousOptions)`
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs

## 概述

`EducationOptionConditionDelegate` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### EducationStage
`public EducationStage(EducationCampaignBehavior.ChildAgeState targetAge) `

### AddPage
`public EducationCampaignBehavior.EducationPage AddPage(int pageIndex,TextObject title,TextObject description,TextObject instruction,EducationCampaignBehavior.EducationCharacterProperties childProperties = default(EducationCampaignBehavior.EducationCharacterProperties),EducationCampaignBehavior.EducationCharacterProperties specialCharacterProperties = default(EducationCampaignBehavior.EducationCharacterProperties),EducationCampaignBehavior.EducationPage.EducationPageConditionDelegate condition = null)`

### GetOption
`public EducationCampaignBehavior.EducationOption GetOption(string optionKey) `

### GetPage
`public EducationCampaignBehavior.EducationPage GetPage(List<string> previousOptionKeys) `

### StringIdToEducationOption
`public List<EducationCampaignBehavior.EducationOption> StringIdToEducationOption(List<string> previousOptionKeys) `

### ToString
`public override string ToString() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
