<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterDeveloperHeroItemVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterDeveloperHeroItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterDeveloperHeroItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper/CharacterDeveloperHeroItemVM.cs`

## 概述

`CharacterDeveloperHeroItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `OrgUnspentFocusPoints` | `public int OrgUnspentFocusPoints { get; }` |
| `OrgUnspentAttributePoints` | `public int OrgUnspentAttributePoints { get; }` |
| `Skills` | `public MBBindingList<SkillVM> Skills { get; set; }` |
| `CharacterStats` | `public MBBindingList<StringPairItemVM> CharacterStats { get; set; }` |
| `Attributes` | `public MBBindingList<CharacterAttributeItemVM> Attributes { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `PerkSelection` | `public PerkSelectionVM PerkSelection { get; set; }` |
| `CurrentSkill` | `public SkillVM CurrentSkill { get; set; }` |
| `CurrentInspectedAttribute` | `public CharacterAttributeItemVM CurrentInspectedAttribute { get; set; }` |
| `FocusPointsText` | `public string FocusPointsText { get; set; }` |
| `CurrentCharacterLevelLbl` | `public string CurrentCharacterLevelLbl { get; set; }` |
| `LevelProgressText` | `public string LevelProgressText { get; set; }` |
| `HeroCharacter` | `public HeroViewModel HeroCharacter { get; set; }` |
| `IsInspectingAnAttribute` | `public bool IsInspectingAnAttribute { get; set; }` |
| `LevelProgressPercentage` | `public int LevelProgressPercentage { get; set; }` |
| `CurrentTotalXp` | `public int CurrentTotalXp { get; set; }` |
| `XpRequiredForNextLevel` | `public int XpRequiredForNextLevel { get; set; }` |
| `UnspentCharacterPoints` | `public int UnspentCharacterPoints { get; set; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; set; }` |
| `LevelHint` | `public HintViewModel LevelHint { get; set; }` |
| `HeroNameText` | `public string HeroNameText { get; set; }` |
| `HeroInfoText` | `public string HeroInfoText { get; set; }` |
| `HeroNextLevelText` | `public string HeroNextLevelText { get; set; }` |
| `HasExtraSkills` | `public bool HasExtraSkills { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### ExecuteStopInspectingCurrentAttribute
`public void ExecuteStopInspectingCurrentAttribute()`

**用途 / Purpose:** 执行 `stop inspecting current attribute` 操作或流程。

### RefreshCharacterValues
`public void RefreshCharacterValues()`

**用途 / Purpose:** 刷新 `character values` 的显示或缓存。

### RefreshPerksOfSkill
`public void RefreshPerksOfSkill(SkillObject skill)`

**用途 / Purpose:** 刷新 `perks of skill` 的显示或缓存。

### ResetChanges
`public void ResetChanges(bool isCancel)`

**用途 / Purpose:** 将 `changes` 重置为初始状态。

### ApplyChanges
`public void ApplyChanges()`

**用途 / Purpose:** 将 `changes` 应用到当前对象。

### SetCurrentSkill
`public void SetCurrentSkill(SkillVM skill)`

**用途 / Purpose:** 设置 `current skill` 的值或状态。

### IsThereAnyChanges
`public bool IsThereAnyChanges()`

**用途 / Purpose:** 处理 `is there any changes` 相关逻辑。

### GetRequiredFocusPointsToAddFocusWithCurrentFocus
`public int GetRequiredFocusPointsToAddFocusWithCurrentFocus(SkillObject skill)`

**用途 / Purpose:** 获取 `required focus points to add focus with current focus` 的当前值。

### CanAddFocusToSkillWithFocusAmount
`public bool CanAddFocusToSkillWithFocusAmount(int currentFocusAmount)`

**用途 / Purpose:** 判断当前对象是否可以执行 `add focus to skill with focus amount`。

### IsSkillMaxAmongOtherSkills
`public bool IsSkillMaxAmongOtherSkills(SkillVM skill)`

**用途 / Purpose:** 处理 `is skill max among other skills` 相关逻辑。

### GetNameWithNumOfUnopenedPerks
`public string GetNameWithNumOfUnopenedPerks()`

**用途 / Purpose:** 获取 `name with num of unopened perks` 的当前值。

### GetNumberOfUnselectedPerks
`public int GetNumberOfUnselectedPerks()`

**用途 / Purpose:** 获取 `number of unselected perks` 的当前值。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new CharacterDeveloperHeroItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)