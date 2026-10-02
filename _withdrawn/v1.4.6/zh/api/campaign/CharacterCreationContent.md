---
title: "CharacterCreationContent"
description: "CharacterCreationContent：TaleWorlds.CampaignSystem.CharacterCreationContent 的 public 类；公开成员 27 个（方法 14、属性 7、字段 4）。canonical 桶 campaign。源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationContent

**Namespace:** `TaleWorlds.CampaignSystem.CharacterCreationContent`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public sealed class CharacterCreationContent`
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## 概述

CharacterCreationContent 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs。它是一个 public 类（sealed），继承链为 CharacterCreationContent。public/protected 成员共 27 个：14 方法、7 属性、4 字段、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CharacterCreationContent 落在 canonical 桶 `campaign`（命中规则 `rule:TaleWorlds.CampaignSystem`），命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent`，继承链 CharacterCreationContent。成员构成以方法为主（方法 14/27，属性 7/27），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedTitleType` | `public string SelectedTitleType` | 属性 |
| `SelectedParentOccupation` | `public string SelectedParentOccupation` | 属性 |
| `DefaultSelectedTitleType` | `public string DefaultSelectedTitleType` | 属性 |
| `ReviewPageDescription` | `public TextObject ReviewPageDescription` | 属性 |
| `MainCharacterName` | `public string MainCharacterName` | 属性 |
| `SelectedCulture` | `public CultureObject SelectedCulture` | 属性 |
| `SelectedBanner` | `public Banner SelectedBanner` | 属性 |
| `CharacterCreationContent` | `public CharacterCreationContent()` | 构造函数 |
| `AddCharacterCreationCulture` | `public void AddCharacterCreationCulture(CultureObject culture, int focusToAddByCulture, int skillLevelToAddByCulture)` | 方法 |
| `GetFocusToAddByCulture` | `public int GetFocusToAddByCulture(CultureObject culture)` | 方法 |
| `GetSkillLevelToAddByCulture` | `public int GetSkillLevelToAddByCulture(CultureObject culture)` | 方法 |
| `ChangeReviewPageDescription` | `public void ChangeReviewPageDescription(TextObject reviewPageDescription)` | 方法 |
| `SetMainCharacterName` | `public void SetMainCharacterName(string name)` | 方法 |
| `SetParentOccupation` | `public void SetParentOccupation(string occupationType)` | 方法 |
| `ApplySkillAndAttributeEffects` | `public void ApplySkillAndAttributeEffects(List<SkillObject>skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject>traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)` | 方法 |
| `SetMainClanBanner` | `public void SetMainClanBanner(Banner banner)` | 方法 |
| `SetSelectedCulture` | `public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)` | 方法 |
| `ApplyCulture` | `public void ApplyCulture(CharacterCreationManager characterCreationManager)` | 方法 |
| `IEnumerable` | `public IEnumerable<CultureObject>GetCultures()` | 方法 |
| `AddEquipmentToUseGetter` | `public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)` | 方法 |
| `TryGetEquipmentToUse` | `public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)` | 方法 |
| `FocusToAdd` | `public int FocusToAdd` | 字段 |
| `SkillLevelToAdd` | `public int SkillLevelToAdd` | 字段 |
| `AttributeLevelToAdd` | `public int AttributeLevelToAdd` | 字段 |
| `StartingAge` | `public int StartingAge` | 字段 |
| `TryGetEquipmentIdDelegate` | `public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId);` | 方法 |
| `TryGetEquipmentIdDelegate` | `public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 CharacterCreationBannerEditorStage](../CharacterCreationBannerEditorStage/)
- [同命名空间 CharacterCreationClanNamingStage](../CharacterCreationClanNamingStage/)
- [同命名空间 CharacterCreationCultureStage](../CharacterCreationCultureStage/)
- [同命名空间 CharacterCreationFaceGeneratorStage](../CharacterCreationFaceGeneratorStage/)
