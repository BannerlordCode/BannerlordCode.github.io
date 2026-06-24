<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkObject

**命名空间:** TaleWorlds.CampaignSystem.CharacterDevelopment  
**模块:** TaleWorlds.CampaignSystem  
**类型:** sealed class（继?

`PropertyObject

`? 
**文件:** 

`bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/PerkObject.cs

`

`PerkObject

` 表示一个特长（perk）——随技能达到阈值解锁的被动加成。每个特长属于一项技能，有主?次要两种角色加成（如队伍指挥官、军需官等）?
## 概述

mod 通常?

`new PerkObject

`，而是通过 

`DefaultPerks

` 静态字段引用既有特长（?

`DefaultPerks.OneHanded.Pugilist

`），或用 

`PerkObject.All

` 枚举全部。判断某角色是否拥有特长?

`Hero.GetPerkValue(perk)

`?
## 
## 心智模型

先把 `PerkObject` 当作这个子系统的入口或数据节点来理解：先看属性代表什么状态，再看方法允许你做什么。
主要属?
\| 名称 \| 类型 \| 描述 \|
\|------\|------\|------\|
\| All \| 

`MBReadOnlyList&lt;PerkObject&gt;

` \| 静态；当前所有特长（取自 

`Campaign.Current.AllPerks

`?\|
\| Skill \| SkillObject \| 所属技?\|
\| RequiredSkillValue \| float \| 解锁所需技能?\|
\| AlternativePerk \| PerkObject \| 互斥的替代特长（二选一?\|
\| PrimaryRole \| PartyRole \| 主要加成适用的队伍角?\|
\| SecondaryRole \| PartyRole \| 次要加成适用的队伍角?\|
\| PrimaryBonus / SecondaryBonus \| float \| 主要/次要加成数?\|
\| PrimaryIncrementType / SecondaryIncrementType \| EffectIncrementType \| 加成的增量类?\|
\| PrimaryTroopUsageMask / SecondaryTroopUsageMask \| TroopUsageFlags \| 主要/次要加成的兵种用途掩?\|
\| PrimaryDescription / SecondaryDescription \| TextObject \| 主要/次要加成描述 \|
\| IsTrash \| bool \| 是否未正确初始化（Name/Description/Skill 为空?\|

## Initialize

`

`

`csharp
public void Initialize(string name, SkillObject skill, int requiredSkillValue, PerkObject alternativePerk,
    string primaryDescription, PartyRole primaryRole, float primaryBonus, EffectIncrementType incrementType,
    string secondaryDescription = "", PartyRole secondaryRole = PartyRole.None, float secondaryBonus = 0f,
    EffectIncrementType secondaryIncrementType = EffectIncrementType.Invalid,
    TroopUsageFlags primaryTroopUsageMask = TroopUsageFlags.Undefined,
    TroopUsageFlags secondaryTroopUsageMask = TroopUsageFlags.Undefined)
`

`

`

用于?XML/代码中定义特长时设置全部字段。`alternativePerk

` 非空时会双向绑定互斥关系?
## 使用示例

`

`

`csharp
// 引用既有特长并检查角色是否拥?PerkObject perk = DefaultPerks.OneHanded.Pugilist;
if (hero.GetPerkValue(perk))
{
    // 角色拥有该特?}

// 枚举某技能下所有特?foreach (PerkObject p in PerkObject.All)
{
    if (p.Skill == DefaultSkills.OneHanded && !p.IsTrash)
    {
        Debug.Print($"{p.Name}: 需 {p.RequiredSkillValue} 点，主加?{p.PrimaryBonus}");
    }
}
`

`

`

## 参见

- [Hero](../campaign/Hero.md)
- [HeroDeveloper](./HeroDeveloper.md)
- [SkillObject](../core-extra/SkillObject.md)
- [TraitObject](./TraitObject.md)
- [Campaign](./Campaign.md)
