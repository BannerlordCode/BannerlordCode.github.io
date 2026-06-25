---
title: "CharacterCreationContent"
description: "CharacterCreationContent 的自动生成类参考。"
---
# CharacterCreationContent

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterCreationContent`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CharacterCreationContent/CharacterCreationContent.cs`

## 概述

`CharacterCreationContent` 位于 `TaleWorlds.CampaignSystem.CharacterCreationContent`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterCreationContent` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelectedTitleType` | `public string SelectedTitleType { get; }` |
| `SelectedParentOccupation` | `public string SelectedParentOccupation { get; }` |
| `DefaultSelectedTitleType` | `public string DefaultSelectedTitleType { get; }` |
| `ReviewPageDescription` | `public TextObject ReviewPageDescription { get; }` |
| `MainCharacterName` | `public string MainCharacterName { get; }` |
| `SelectedCulture` | `public CultureObject SelectedCulture { get; }` |
| `SelectedBanner` | `public Banner SelectedBanner { get; }` |

## 主要方法

### TryGetEquipmentIdDelegate
`public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)`

**用途 / Purpose:** 尝试获取 「get equipment id delegate」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.TryGetEquipmentIdDelegate("example", equipmentId);
```

### AddCharacterCreationCulture
`public void AddCharacterCreationCulture(CultureObject culture, int focusToAddByCulture, int skillLevelToAddByCulture)`

**用途 / Purpose:** 将 「character creation culture」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.AddCharacterCreationCulture(culture, 0, 0);
```

### GetFocusToAddByCulture
`public int GetFocusToAddByCulture(CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「focus to add by culture」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.GetFocusToAddByCulture(culture);
```

### GetSkillLevelToAddByCulture
`public int GetSkillLevelToAddByCulture(CultureObject culture)`

**用途 / Purpose:** 读取并返回当前对象中 「skill level to add by culture」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.GetSkillLevelToAddByCulture(culture);
```

### ChangeReviewPageDescription
`public void ChangeReviewPageDescription(TextObject reviewPageDescription)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.ChangeReviewPageDescription(reviewPageDescription);
```

### SetMainCharacterName
`public void SetMainCharacterName(string name)`

**用途 / Purpose:** 为 「main character name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetMainCharacterName("example");
```

### SetParentOccupation
`public void SetParentOccupation(string occupationType)`

**用途 / Purpose:** 为 「parent occupation」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetParentOccupation("example");
```

### ApplySkillAndAttributeEffects
`public void ApplySkillAndAttributeEffects(List<SkillObject> skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject> traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)`

**用途 / Purpose:** 将 「skill and attribute effects」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.ApplySkillAndAttributeEffects(skills, 0, 0, attribute, 0, null, 0, 0, 0, 0, 0);
```

### SetMainClanBanner
`public void SetMainClanBanner(Banner banner)`

**用途 / Purpose:** 为 「main clan banner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetMainClanBanner(banner);
```

### SetSelectedCulture
`public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 为 「selected culture」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.SetSelectedCulture(culture, characterCreationManager);
```

### ApplyCulture
`public void ApplyCulture(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 将 「culture」 的效果应用到当前对象。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.ApplyCulture(characterCreationManager);
```

### GetCultures
`public IEnumerable<CultureObject> GetCultures()`

**用途 / Purpose:** 读取并返回当前对象中 「cultures」 的结果。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.GetCultures();
```

### AddEquipmentToUseGetter
`public void AddEquipmentToUseGetter(TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)`

**用途 / Purpose:** 将 「equipment to use getter」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.AddEquipmentToUseGetter(tryGetEquipmentIdDelegate);
```

### TryGetEquipmentToUse
`public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)`

**用途 / Purpose:** 尝试获取 「get equipment to use」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 CharacterCreationContent 实例
CharacterCreationContent characterCreationContent = ...;
var result = characterCreationContent.TryGetEquipmentToUse("example", equipmentId);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
CharacterCreationContent characterCreationContent = ...;
characterCreationContent.TryGetEquipmentIdDelegate("example", equipmentId);
```

## 参见

- [本区域目录](../)