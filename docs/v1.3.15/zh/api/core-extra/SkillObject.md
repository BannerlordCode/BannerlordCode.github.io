<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SkillObject`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SkillObject

**命名空间:** TaleWorlds.Core  
**模块:** TaleWorlds.Core  
**类型:** sealed class（继承 `PropertyObject`）  
**文件:** `bannerlord-1.3.15/TaleWorlds.Core/SkillObject.cs`

`SkillObject` 表示一项技能（单手、双手、弓、贸易、统御等）。技能属于一个或多个 `CharacterAttribute`（属性），是特长（`PerkObject`）与角色成长的核心维度。

## 概述

mod 通常通过 `DefaultSkills` 静态字段引用既有技能（如 `DefaultSkills.OneHanded`）。读写角色的技能值用 `Hero.GetSkillValue(skill)` / `Hero.SetSkillValue(skill, value)`，加经验用 `Hero.AddSkillXp(skill, xp)` 或 `HeroDeveloper.AddSkillXp`。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| Attributes | `CharacterAttribute[]` | 该技能关联的属性（仅 get） |
| HowToLearnSkillText | TextObject | "如何学习该技能"的说明文本（取自 `str_how_to_learn_skill`） |

## Initialize

```csharp
public SkillObject Initialize(TextObject name, TextObject description, CharacterAttribute[] attributes)
```

定义技能时设置名称、描述与关联属性。

## 使用示例

```csharp
// 引用技能并读写角色技能值
SkillObject oneHanded = DefaultSkills.OneHanded;
int value = hero.GetSkillValue(oneHanded);
hero.SetSkillValue(oneHanded, value + 10);
hero.AddSkillXp(oneHanded, 500f);

// 查看技能关联的属性
foreach (CharacterAttribute attr in oneHanded.Attributes)
{
    Debug.Print(attr.Name.ToString());
}
```

## 参见

- [Hero](../campaign/Hero.md)
- [HeroDeveloper](../campaign-ext/HeroDeveloper.md)
- [CharacterAttribute](./CharacterAttribute.md)
- [PerkObject](../campaign-ext/PerkObject.md)
