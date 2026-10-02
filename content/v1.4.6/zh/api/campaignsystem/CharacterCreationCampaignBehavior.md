---
title: "CharacterCreationCampaignBehavior"
description: "CharacterCreationCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、ICharacterCreationContentHandler；公开成员 25 个（方法 9、属性 0、字段 16）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs。"
---
# CharacterCreationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## 概述

CharacterCreationCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、ICharacterCreationContentHandler，继承链为 CharacterCreationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 25 个：9 方法、16 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 CharacterCreationCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 9/25，属性 0/25），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `InitializeCharacterCreationStages` | `public void InitializeCharacterCreationStages(CharacterCreationManager characterCreationManager)` | 方法 |
| `InitializeCharacterCreationCultures` | `public void InitializeCharacterCreationCultures(CharacterCreationManager characterCreationManager)` | 方法 |
| `InitializeData` | `public void InitializeData(CharacterCreationManager characterCreationManager)` | 方法 |
| `FaceGenUpdated` | `public void FaceGenUpdated()` | 方法 |
| `UpdateParentEquipment` | `public void UpdateParentEquipment(CharacterCreationManager characterCreationManager, MBEquipmentRoster motherEquipment, MBEquipmentRoster fatherEquipment, string motherAnimation, string fatherAnimation)` | 方法 |
| `AddEducationMenu` | `public void AddEducationMenu(CharacterCreationManager characterCreationManager)` | 方法 |
| `SetHeroAge` | `public void SetHeroAge(float age)` | 方法 |
| `FocusToAddYouthStart` | `public const int FocusToAddYouthStart` | 字段 |
| `FocusToAddAdultStart` | `public const int FocusToAddAdultStart` | 字段 |
| `FocusToAddMiddleAgedStart` | `public const int FocusToAddMiddleAgedStart` | 字段 |
| `FocusToAddElderlyStart` | `public const int FocusToAddElderlyStart` | 字段 |
| `AttributeToAddYouthStart` | `public const int AttributeToAddYouthStart` | 字段 |
| `AttributeToAddAdultStart` | `public const int AttributeToAddAdultStart` | 字段 |
| `AttributeToAddMiddleAgedStart` | `public const int AttributeToAddMiddleAgedStart` | 字段 |
| `AttributeToAddElderlyStart` | `public const int AttributeToAddElderlyStart` | 字段 |
| `MotherNarrativeCharacterStringId` | `public const string MotherNarrativeCharacterStringId` | 字段 |
| `FatherNarrativeCharacterStringId` | `public const string FatherNarrativeCharacterStringId` | 字段 |
| `PlayerChildhoodCharacterStringId` | `public const string PlayerChildhoodCharacterStringId` | 字段 |
| `PlayerEducationCharacterStringId` | `public const string PlayerEducationCharacterStringId` | 字段 |
| `PlayerYouthCharacterStringId` | `public const string PlayerYouthCharacterStringId` | 字段 |
| `PlayerAdulthoodCharacterStringId` | `public const string PlayerAdulthoodCharacterStringId` | 字段 |
| `PlayerAgeSelectionCharacterStringId` | `public const string PlayerAgeSelectionCharacterStringId` | 字段 |
| `HorseNarrativeCharacterStringId` | `public const string HorseNarrativeCharacterStringId` | 字段 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ICharacterCreationContentHandler](../ICharacterCreationContentHandler)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
