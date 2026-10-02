---
title: "CharacterCreationContent"
description: "CharacterCreationContent 的自动生成类参考。"
---
# CharacterCreationContent

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterCreationContent `
**Base:** System.Object
**Source:** TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs

## 概述

`CharacterCreationContent` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### AddCharacterCreationCulture
`public void AddCharacterCreationCulture(CultureObject culture,int focusToAddByCulture,int skillLevelToAddByCulture) `

### GetFocusToAddByCulture
`public int GetFocusToAddByCulture(CultureObject culture) `

### GetSkillLevelToAddByCulture
`public int GetSkillLevelToAddByCulture(CultureObject culture) `

### ChangeReviewPageDescription
`public void ChangeReviewPageDescription(TextObject reviewPageDescription) `

### SetMainCharacterName
`public void SetMainCharacterName(string name) `

### SetParentOccupation
`public void SetParentOccupation(string occupationType) `

### ApplySkillAndAttributeEffects
`public void ApplySkillAndAttributeEffects(List<SkillObject> skills,int focusToAdd,int skillLevelToAdd,CharacterAttribute attribute,int attributeLevelToAdd,List<TraitObject> traits = null,int traitLevelToAdd = 0,int renownToAdd = 0,int goldToAdd = 0,int unspentFocusPoints = 0,int unspentAttributePoints = 0) `

### SetMainClanBanner
`public void SetMainClanBanner(Banner banner) `

### SetSelectedCulture
`public void SetSelectedCulture(CultureObject culture,CharacterCreationManager characterCreationManager) `

### ApplyCulture
`public void ApplyCulture(CharacterCreationManager characterCreationManager) `

### GetCultures
`public IEnumerable<CultureObject> GetCultures() `

### AddEquipmentToUseGetter
`public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate) `

### TryGetEquipmentToUse
`public bool TryGetEquipmentToUse(string occupationId,out string equipmentId) `

### TryGetEquipmentIdDelegate
`public delegate bool TryGetEquipmentIdDelegate(string occupationId,out string equipmentId)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
