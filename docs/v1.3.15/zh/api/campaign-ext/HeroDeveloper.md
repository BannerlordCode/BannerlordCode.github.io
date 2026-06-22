<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroDeveloper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
- [🔀 跨版本对比 /versions/HeroDeveloper](/versions/HeroDeveloper)
<!-- END BREADCRUMB -->
# HeroDeveloper

**命名空间:** TaleWorlds.CampaignSystem.CharacterDevelopment  
**模块:** TaleWorlds.CampaignSystem  
**类型:** class  
**文件:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/HeroDeveloper.cs`

`HeroDeveloper` 管理一个 `Hero` 的成长进度——经验、等级、技能值/经验、专注点、属性点与特长。每个英雄通过 `Hero.HeroDeveloper` 暴露其实例。

## 概述

mod 通过 `hero.HeroDeveloper` 获取开发者，然后加经验、升降技能、花专注点/属性点或检查特长。`AddSkillXp` 会按专注因子折算并可能触发升级（`CheckLevel`）。`UnspentFocusPoints` / `UnspentAttributePoints` 是可分配的剩余点数。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| Hero | Hero | 所属英雄（仅 get） |
| TotalXp | int | 总经验（仅 get） |
| UnspentFocusPoints | int | 未分配专注点（get/set） |
| UnspentAttributePoints | int | 未分配属性点（get/set） |
| IsDeveloperInitialized | bool | 是否已初始化 |

## 主要方法

```csharp
public float GetSkillXp(SkillObject skill)
public int GetSkillXpProgress(SkillObject skill)
public void AddSkillXp(SkillObject skill, float rawXp, bool isAffectedByFocusFactor = true, bool shouldNotify = true)
public void ChangeSkillLevel(SkillObject skill, int changeAmount, bool shouldNotify = true)
public void SetInitialSkillLevel(SkillObject skill, int newSkillValue)
public void InitializeSkillXp(SkillObject skill)

public int GetFocus(SkillObject skill)
public void AddFocus(SkillObject skill, int changeAmount, bool checkUnspentFocusPoints = true)
public void RemoveFocus(SkillObject skill, int changeAmount)
public bool CanAddFocusToSkill(SkillObject skill)
public int GetRequiredFocusPointsToAddFocus(SkillObject skill)
public float GetFocusFactor(SkillObject skill)

public void AddAttribute(CharacterAttribute attrib, int changeAmount, bool checkUnspentPoints = true)
public void RemoveAttribute(CharacterAttribute attrib, int changeAmount)

public void AddPerk(PerkObject perk)
public bool GetPerkValue(PerkObject perk)

public void CheckLevel(bool shouldNotify)
public int GetXpRequiredForLevel(int level)
public void SetInitialLevel(int level)
public int GetTotalSkillPoints()

public void InitializeHeroDeveloper()
public void DevelopCharacterStats()
public void ClearUnspentPoints()
public void ClearHero()
```

`AddSkillXp` 受专注因子（`GetFocusFactor`）影响；`CheckLevel` 在经验达标时升级。

## 使用示例

```csharp
HeroDeveloper dev = hero.HeroDeveloper;

// 给英雄加技能经验
dev.AddSkillXp(DefaultSkills.OneHanded, 500f);

// 直接调整技能等级
dev.ChangeSkillLevel(DefaultSkills.OneHanded, +10);

// 花专注点提升某技能的专注
if (dev.CanAddFocusToSkill(DefaultSkills.Bow) && dev.UnspentFocusPoints > 0)
{
    dev.AddFocus(DefaultSkills.Bow, 1);
}

// 花属性点
if (dev.UnspentAttributePoints > 0)
{
    dev.AddAttribute(DefaultAttributes.Vigor, 1);
}

// 检查/授予特长
if (!dev.GetPerkValue(DefaultPerks.OneHanded.Pugilist))
{
    dev.AddPerk(DefaultPerks.OneHanded.Pugilist);
}
```

## 参见

- [Hero](../campaign/Hero.md)
- [SkillObject](../core-extra/SkillObject.md)
- [CharacterAttribute](../core-extra/CharacterAttribute.md)
- [PerkObject](./PerkObject.md)
- [Campaign](./Campaign.md)
