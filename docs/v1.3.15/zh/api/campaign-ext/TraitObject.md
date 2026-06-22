<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TraitObject`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TraitObject

**命名空间:** TaleWorlds.CampaignSystem.CharacterDevelopment  
**模块:** TaleWorlds.CampaignSystem  
**类型:** sealed class（继承 `PropertyObject`）  
**文件:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/TraitObject.cs`

`TraitObject` 表示一个角色特质（如 Valor 勇气、Mercery 仁慈、Calculating 精明等），取值在一个 `[MinValue, MaxValue]` 区间内，等级影响角色行为与人际关系。

## 概述

mod 通常通过 `DefaultTraits` 静态字段引用既有特质，或用 `TraitObject.All` 枚举全部。读写某角色的特质等级用 `Hero.GetTraitLevel(trait)` / `Hero.SetTraitLevel(trait, value)`。

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| All | `MBReadOnlyList<TraitObject>` | 静态；当前所有特质（取自 `Campaign.Current.AllTraits`） |
| MinValue | int | 最小等级 |
| MaxValue | int | 最大等级 |
| IsHidden | bool | 是否对玩家隐藏 |

## Initialize

```csharp
public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)
```

定义特质时设置名称、描述、是否隐藏与等级上下限。

## 使用示例

```csharp
// 读取与设置角色的特质等级
TraitObject valor = DefaultTraits.Valor;
int level = hero.GetTraitLevel(valor);   // 读取
hero.SetTraitLevel(valor, level + 1);    // 提升

// 枚举所有非隐藏特质
foreach (TraitObject t in TraitObject.All)
{
    if (!t.IsHidden)
        Debug.Print($"{t.Name}: 范围 [{t.MinValue}, {t.MaxValue}]");
}
```

## 参见

- [Hero](../campaign/Hero.md)
- [PerkObject](./PerkObject.md)
- [Campaign](./Campaign.md)
