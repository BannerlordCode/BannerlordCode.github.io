---
title: "ArtisanNotableTypeTag"
description: "对话标签：判断角色职业是否为工匠（Occupation.Artisan）。与 AseraiTag / AnyNotableTypeTag 同构，是按「身份」切分对话台词池的三件套之一。"
---

# ArtisanNotableTypeTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanNotableTypeTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ArtisanNotableTypeTag.cs`

## 概述

`ArtisanNotableTypeTag` 是一枚**身份门控**：它回答「正在对话的这个角色是不是工匠」，答案决定一段对话 XML 里哪些台词可用。1.4.5 的实现只有三行有效逻辑：

```csharp
if (character.IsHero)
{
    return character.Occupation == Occupation.Artisan;
}
return false;
```

在对话体系里它承担的是**「按职业切分台词池」**这一环。它和同目录的 [AseraiTag](../AseraiTag)（按文化）、[AnyNotableTypeTag](../AnyNotableTypeTag)（按名士身份）构成三件套：文化 / 名望 / 职业。同一个 XML 节点可以同时挂多个标签，语义是**与**。

它和 `AnyNotableTypeTag` 的差别值得单独点出来：两者都先 `if (character.IsHero)`，但一个查 `HeroObject.IsNotable`（是否为城镇名士），一个查 `character.Occupation`。**`Occupation` 挂在 `CharacterObject` 上而不是 `Hero` 上**——这是 1.4.5 里少数几个「职业可以在非英雄角色上被赋值」的地方，所以这个标签先判 `IsHero` 只是为了排除 `Occupation == Occupation.NotAssigned` 之外的非人角色，而不是因为 `Occupation` 只能在英雄上取。

## 心智模型

把它当成**「Occupation 的一次别名判断」**就对了。

- **它不是 `Hero.IsArtisan` 的转发，而是独立实现。** [Hero](../Hero) 上确实有 `public bool IsArtisan => Occupation == Occupation.Artisan;`（`Hero.cs:343`），但这个标签读的是 `character.Occupation`，因为它的入参是 `CharacterObject`。两者在英雄身上结果相同，但只有本类型能在 `CharacterObject` 层面工作。
- **典型调用顺序永远是「引擎查 → 你写条件」。** 你在 XML 里写 `allowed_tags="ArtisanNotableTypeTag"`，引擎在对话开始时经 [ConversationManager](../ConversationManager) 调 `IsApplicableTo`。自己 new 一个只有在你 Behavior 里做预检时才有意义。
- **`Id` 与 `StringId` 是同一个字面量。** `public const string Id = "ArtisanNotableTypeTag"` 和 `public override string StringId => "ArtisanNotableTypeTag"`。XML 里写的是 `StringId`，引擎不读 `Id`。
- **`IsHero` 短路是有意义的。** 非英雄角色的 `Occupation` 可能是 `NotAssigned` 也可能是别的，直接比较会误判，所以先短路。
- **不要在 `foreach (Hero)` 里写 `hero.Occupation == Occupation.Artisan` 再当成同一个语义。** 语义上等价，但如果你的列表里可能有非人单位，直接读 `Occupation` 不会自动排除它们。

### 三个兄弟标签的分工

| 你想表达 | 标签 | 判什么 |
| --- | --- | --- |
| 「只对工匠说」 | `ArtisanNotableTypeTag` | `character.Occupation == Occupation.Artisan` |
| 「只对阿塞莱人说」 | [AseraiTag](../AseraiTag) | `Culture.StringId == "aserai"` |
| 「只对城镇名士说」 | [AnyNotableTypeTag](../AnyNotableTypeTag) | `character.HeroObject.IsNotable` |
| 「只对荣誉+仁慈之和为负的人说」 | `AmoralTag` | `GetTraitLevel(Honor) + GetTraitLevel(Mercy) < 0` |
| 「只对玩家正在攻打的人说」 | [AttackingTag](../AttackingTag) | `HeroHelper.WillLordAttack()` 或围城名单 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public const string Id = "ArtisanNotableTypeTag"` | 编译期常量形式的标识，可进 `switch` 的 case。 |
| `StringId` | `public override string StringId => "ArtisanNotableTypeTag"` | 对话 XML `allowed_tags` 里写的字面量；也是 `ConversationManager._tags` 的字典键。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一逻辑：先 `character.IsHero` 短路，再比较 `character.Occupation` 与 `Occupation.Artisan`。**入参本身没有 null 保护**，`character` 为 null 直接 NRE。 |

## 真实示例

在自己 Behavior 里判断一个英雄是否命中这条台词门控：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool ArtisanLineApplies(Hero candidate)
{
    if (candidate == null)
    {
        return false;
    }

    CharacterObject character = candidate.CharacterObject;
    if (character == null || !character.IsHero)
    {
        return false;
    }

    ArtisanNotableTypeTag tag = new ArtisanNotableTypeTag();
    return tag.IsApplicableTo(character);
}
```

不自己 new，直接问对话管理器当前这一刻算不算成立：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    bool artisanLine = Campaign.Current.ConversationManager.IsTagApplicable(
        ArtisanNotableTypeTag.StringId, talkTarget);
    Debug.Print("artisan line applicable = " + artisanLine, 0);
}
```

按标签筛出全世界的工匠英雄，用于地图事件或任务前置：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

ArtisanNotableTypeTag tag = new ArtisanNotableTypeTag();
foreach (Hero hero in Campaign.Current.AliveHeroes)
{
    CharacterObject character = hero.CharacterObject;
    if (character.Culture != null && tag.IsApplicableTo(character))
    {
        Debug.Print("artisan lord: " + hero.Name.ToString() + " @ " + hero.CurrentSettlement.Name, 0);
    }
}
```

## 风险与边界

- **入参没有 null 保护。** `character` 为 null 时第一行 `character.IsHero` 就抛。对比同层的 `AmoralTag` 直接调 `character.GetTraitLevel(...)`，同样没有保护——这一层的约定就是「调用方保证传进来的是有效角色」。
- **依赖 `Occupation` 的实时赋值。** 职业被改（转职、被俘后释放、AI 重新分配）后判定立刻翻转，不涉及存档迁移。
- **不做派系或处境过滤。** 它不判断这个工匠是不是在城镇里、是不是被俘、是不是在 Mission 中。想加这些限制必须自己再包一层。
- **与 `Hero.IsArtisan` 判定路径不同。** 一个读 `CharacterObject.Occupation`，一个读 `Hero.Occupation`。在英雄身上等价，但对被剥去 `Hero` 层的普通 `CharacterObject`，只有本类型能工作。
- **无缓存、无静态状态。** 每次对话开始时 `ConversationManager` 遍历 `_tags.Values` 逐个调用，代价是一次枚举比较，可忽略。
- **继承没有官方阻力。** `ConversationTag` 是 `public abstract`，本类不是 `sealed`。派生类改 `StringId` 即可成为一个新标签，但新标签不会自动进入 `_tags`——先确认 [ConversationManager](../ConversationManager) 的标签表是 XML 装配还是硬编码。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ArtisanNotableTypeTag.cs` 是 17 行原始源码。公开表面只有 `Id` / `StringId` / `IsApplicableTo` 三个成员，无字段、无属性、无事件。跨版本比对时按这三个成员对；1.3.x 与 1.4.6 的同文件是反编译产物，行数明显更长但成员一致。

## 依赖关系

- 基类与唯一消费者：[ConversationManager](../ConversationManager) 持有 `_tags` 字典，`IsTagApplicable` / `GetApplicableTagNames` 调 `IsApplicableTo`
- 判定依据：[CharacterObject](../CharacterObject) 上的 `IsHero` 与 `Occupation` 两个属性；`Occupation` 是 Core 层的枚举
- 等价的便捷写法：[Hero](../Hero) 上的 `IsArtisan` 属性是 `Occupation == Occupation.Artisan` 的直接封装，本类型不走它
- 同族门控：[AseraiTag](../AseraiTag)、[AnyNotableTypeTag](../AnyNotableTypeTag)、[AttackingTag](../AttackingTag)、`AmoralTag`、`BattanianTag`
- 上游行为参照：`ArtisanCantSellProductsAtAFairPriceIssueBehavior` 与 `ArtisanOverpricedGoodsIssueBehavior` 两个问题行为都以 `issueGiver.IsArtisan` 作为触发条件，说明工匠身份既走对话标签也走问题系统
- 桶首页：[campaign API 分区](../)
