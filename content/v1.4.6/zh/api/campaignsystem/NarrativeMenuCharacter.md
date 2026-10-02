---
title: "NarrativeMenuCharacter"
description: "NarrativeMenuCharacter：TaleWorlds.CampaignSystem 的 public 类；公开成员 24 个（方法 12、属性 10、字段 0）。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs。"
---
# NarrativeMenuCharacter

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class NarrativeMenuCharacter`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs`

## 概述

NarrativeMenuCharacter 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs。它是一个 public 类，继承链为 NarrativeMenuCharacter。public/protected 成员共 24 个：12 方法、10 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：NarrativeMenuCharacter 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CharacterCreationContent），继承链 NarrativeMenuCharacter。成员构成以方法为主（方法 12/24，属性 10/24），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/NarrativeMenuCharacter.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BodyProperties` | `public BodyProperties BodyProperties` | 属性 |
| `Race` | `public int Race` | 属性 |
| `IsFemale` | `public bool IsFemale` | 属性 |
| `Equipment` | `public MBEquipmentRoster Equipment` | 属性 |
| `AnimationId` | `public string AnimationId` | 属性 |
| `MountCreationKey` | `public MountCreationKey MountCreationKey` | 属性 |
| `Item1Id` | `public string Item1Id` | 属性 |
| `Item2Id` | `public string Item2Id` | 属性 |
| `RightHandEquipmentIndex` | `public EquipmentIndex RightHandEquipmentIndex` | 属性 |
| `LeftHandEquipmentIndex` | `public EquipmentIndex LeftHandEquipmentIndex` | 属性 |
| `NarrativeMenuCharacter` | `public NarrativeMenuCharacter(string stringId, BodyProperties bodyProperties, int race, bool isFemale)` | 构造函数 |
| `NarrativeMenuCharacter` | `public NarrativeMenuCharacter(string stringId)` | 构造函数 |
| `UpdateBodyProperties` | `public void UpdateBodyProperties(BodyProperties bodyProperties, int race, bool isFemale)` | 方法 |
| `SetEquipment` | `public void SetEquipment(MBEquipmentRoster equipment)` | 方法 |
| `SetAnimationId` | `public void SetAnimationId(string animationId)` | 方法 |
| `SetRightHandItem` | `public void SetRightHandItem(string itemId)` | 方法 |
| `SetLeftHandItem` | `public void SetLeftHandItem(string itemId)` | 方法 |
| `EquipRightHandItemWithEquipmentIndex` | `public void EquipRightHandItemWithEquipmentIndex(EquipmentIndex item)` | 方法 |
| `EquipLeftHandItemWithEquipmentIndex` | `public void EquipLeftHandItemWithEquipmentIndex(EquipmentIndex item)` | 方法 |
| `SetSpawnPointEntityId` | `public void SetSpawnPointEntityId(string spawnPointEntityId)` | 方法 |
| `ChangeAge` | `public void ChangeAge(float age)` | 方法 |
| `SetMountCreationKey` | `public void SetMountCreationKey(MountCreationKey mountCreationKey)` | 方法 |
| `SetHorseItemId` | `public void SetHorseItemId(string itemId)` | 方法 |
| `SetHarnessItemId` | `public void SetHarnessItemId(string itemId)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage)
- [同命名空间 CharacterCreationContent](../CharacterCreationContent)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage)
