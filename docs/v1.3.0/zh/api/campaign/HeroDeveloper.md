<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroDeveloper`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
- [🔀 跨版本对比 /versions/HeroDeveloper](/versions/HeroDeveloper)
<!-- END BREADCRUMB -->
# HeroDeveloper

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroDeveloper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

## 概述

`HeroDeveloper` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `UnspentFocusPoints` | `public int UnspentFocusPoints { get; }` |
| `UnspentAttributePoints` | `public int UnspentAttributePoints { get; }` |
| `IsDeveloperInitialized` | `public bool IsDeveloperInitialized { get; }` |
| `Hero` | `public Hero Hero { get; }` |
| `TotalXp` | `public int TotalXp { get; }` |

## 主要方法

### GetSkillXpProgress
`public int GetSkillXpProgress(SkillObject skill)`

**用途 / Purpose:** 获取 `skill xp progress` 的当前值。

### GetSkillXp
`public float GetSkillXp(SkillObject skill)`

**用途 / Purpose:** 获取 `skill xp` 的当前值。

### ClearUnspentPoints
`public void ClearUnspentPoints()`

**用途 / Purpose:** 处理 `clear unspent points` 相关逻辑。

### ClearHero
`public void ClearHero()`

**用途 / Purpose:** 处理 `clear hero` 相关逻辑。

### InitializeHeroDeveloper
`public void InitializeHeroDeveloper()`

**用途 / Purpose:** 初始化 `hero developer` 的状态、资源或绑定。

### DevelopCharacterStats
`public void DevelopCharacterStats()`

**用途 / Purpose:** 处理 `develop character stats` 相关逻辑。

### GetTotalSkillPoints
`public int GetTotalSkillPoints()`

**用途 / Purpose:** 获取 `total skill points` 的当前值。

### ChangeSkillLevel
`public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)`

**用途 / Purpose:** 处理 `change skill level` 相关逻辑。

### SetInitialSkillLevel
`public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)`

**用途 / Purpose:** 设置 `initial skill level` 的值或状态。

### AddSkillXp
`public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `skill xp`。

### GetFocusFactor
`public float GetFocusFactor(SkillObject skill)`

**用途 / Purpose:** 获取 `focus factor` 的当前值。

### SetInitialLevel
`public void SetInitialLevel(int level)`

**用途 / Purpose:** 设置 `initial level` 的值或状态。

### AddPerk
`public void AddPerk(PerkObject perk)`

**用途 / Purpose:** 向当前集合/状态中添加 `perk`。

### GetXpRequiredForLevel
`public int GetXpRequiredForLevel(int level)`

**用途 / Purpose:** 获取 `xp required for level` 的当前值。

### RemoveAttribute
`public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)`

**用途 / Purpose:** 从当前集合/状态中移除 `attribute`。

### AddAttribute
`public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `attribute`。

### AddFocus
`public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)`

**用途 / Purpose:** 向当前集合/状态中添加 `focus`。

### RemoveFocus
`public void RemoveFocus(SkillObject skill, int changeAmount)`

**用途 / Purpose:** 从当前集合/状态中移除 `focus`。

### CanAddFocusToSkill
`public bool CanAddFocusToSkill(SkillObject skill)`

**用途 / Purpose:** 判断当前对象是否可以执行 `add focus to skill`。

### GetRequiredFocusPointsToAddFocus
`public int GetRequiredFocusPointsToAddFocus(SkillObject skill)`

**用途 / Purpose:** 获取 `required focus points to add focus` 的当前值。

### GetFocus
`public int GetFocus(SkillObject skill)`

**用途 / Purpose:** 获取 `focus` 的当前值。

### GetPerkValue
`public bool GetPerkValue(PerkObject perk)`

**用途 / Purpose:** 获取 `perk value` 的当前值。

### InitializeSkillXp
`public void InitializeSkillXp(SkillObject skill)`

**用途 / Purpose:** 初始化 `skill xp` 的状态、资源或绑定。

### AfterLoad
`public void AfterLoad()`

**用途 / Purpose:** 处理 `after load` 相关逻辑。

## 使用示例

```csharp
var value = new HeroDeveloper();
value.GetSkillXpProgress(skill);
```

## 参见

- [完整类目录](../catalog)