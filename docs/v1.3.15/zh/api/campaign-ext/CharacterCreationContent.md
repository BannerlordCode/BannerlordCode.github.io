<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationContent`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationContent

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class CharacterCreationContent`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationContent.cs`

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

### AddCharacterCreationCulture
`public void AddCharacterCreationCulture(CultureObject culture, int focusToAddByCulture, int skillLevelToAddByCulture)`

**用途 / Purpose:** 向当前集合/状态中添加 `character creation culture`。

### GetFocusToAddByCulture
`public int GetFocusToAddByCulture(CultureObject culture)`

**用途 / Purpose:** 获取 `focus to add by culture` 的当前值。

### GetSkillLevelToAddByCulture
`public int GetSkillLevelToAddByCulture(CultureObject culture)`

**用途 / Purpose:** 获取 `skill level to add by culture` 的当前值。

### ChangeReviewPageDescription
`public void ChangeReviewPageDescription(TextObject reviewPageDescription)`

**用途 / Purpose:** 处理 `change review page description` 相关逻辑。

### SetMainCharacterName
`public void SetMainCharacterName(string name)`

**用途 / Purpose:** 设置 `main character name` 的值或状态。

### SetParentOccupation
`public void SetParentOccupation(string occupationType)`

**用途 / Purpose:** 设置 `parent occupation` 的值或状态。

### ApplySkillAndAttributeEffects
`public void ApplySkillAndAttributeEffects(List<SkillObject> skills, int focusToAdd, int skillLevelToAdd, CharacterAttribute attribute, int attributeLevelToAdd, List<TraitObject> traits = null, int traitLevelToAdd = 0, int renownToAdd = 0, int goldToAdd = 0, int unspentFocusPoints = 0, int unspentAttributePoints = 0)`

**用途 / Purpose:** 将 `skill and attribute effects` 应用到当前对象。

### SetMainClanBanner
`public void SetMainClanBanner(Banner banner)`

**用途 / Purpose:** 设置 `main clan banner` 的值或状态。

### SetSelectedCulture
`public void SetSelectedCulture(CultureObject culture, CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 设置 `selected culture` 的值或状态。

### ApplyCulture
`public void ApplyCulture(CharacterCreationManager characterCreationManager)`

**用途 / Purpose:** 将 `culture` 应用到当前对象。

### GetCultures
`public IEnumerable<CultureObject> GetCultures()`

**用途 / Purpose:** 获取 `cultures` 的当前值。

### AddEquipmentToUseGetter
`public void AddEquipmentToUseGetter(CharacterCreationContent.TryGetEquipmentIdDelegate tryGetEquipmentIdDelegate)`

**用途 / Purpose:** 向当前集合/状态中添加 `equipment to use getter`。

### TryGetEquipmentToUse
`public bool TryGetEquipmentToUse(string occupationId, out string equipmentId)`

**用途 / Purpose:** 尝试获取 `get equipment to use`，通常以 out 参数返回结果。

### TryGetEquipmentIdDelegate
`public delegate bool TryGetEquipmentIdDelegate(string occupationId, out string equipmentId)`

**用途 / Purpose:** 尝试获取 `get equipment id delegate`，通常以 out 参数返回结果。

## 使用示例

```csharp
var value = new CharacterCreationContent();
value.AddCharacterCreationCulture(culture, 0, 0);
```

## 参见

- [完整类目录](../catalog)