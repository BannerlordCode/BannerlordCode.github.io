---
title: "AttractedToPlayerTag"
description: "对话标签：判断一个异性 NPC 是否对玩家产生了好感（RomanceModel 好感度 > 70 且双方均无配偶）。恋爱线台词池的门控。"
---

# AttractedToPlayerTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AttractedToPlayerTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttractedToPlayerTag.cs`

## 概述

`AttractedToPlayerTag` 是恋爱线的**好感门控**：它回答「这个 NPC 是否单恋玩家」，答案决定一段对话 XML 里哪些调情 / 告白台词可用。1.4.5 的实现把五个条件塞进一个 `if`：

```csharp
heroObject != null
  && Hero.MainHero.IsFemale != heroObject.IsFemale
  && !FactionManager.IsAtWarAgainstFaction(heroObject.MapFaction, Hero.MainHero.MapFaction)
  && Campaign.Current.Models.RomanceModel.GetAttractionValuePercentage(heroObject, Hero.MainHero) > 70
  && heroObject.Spouse == null
```

在对话体系里它承担的是**「按关系亲密度切分台词池」**这一环。同层的 [AseraiTag](../AseraiTag) 判文化、[ArtisanNotableTypeTag](../ArtisanNotableTypeTag) 判职业、[AnyNotableTypeTag](../AnyNotableTypeTag) 判名望——那些是**静态身份**；本类型判的是**运行时关系**，所以它依赖 [RomanceModel](../RomanceModel) 这个可替换的平衡模型，而不是硬编码的数字。

有一处源码细节必须知道：类里定义了 `private const int MinimumFlirtPercentageForComment = 70;` 但 `IsApplicableTo` 里写的是字面量 `70`，**这个常量从未被引用**。所以「70」这个阈值在 1.4.5 里是一个不可配置的魔数——换模型也改不了它，除非你自己覆写标签。

## 心智模型

把它当成**「恋爱线前置条件的合取」**就对了——五个条件必须同时成立。

- **它是唯一的运行时关系型标签。** 身份型标签（文化 / 职业 / 名望）读的是角色身上的静态字段；本类型读的是 `RomanceModel` 的实时评分。好感度被 [RomanceCampaignBehavior](../RomanceCampaignBehavior) 类行为改变后，判定立刻翻转，不涉及存档迁移。
- **方向性要小心。** 参数是 `character`，被评价的是 `character`；好感度查询是 `GetAttractionValuePercentage(heroObject, Hero.MainHero)`，语义是「`heroObject` 对 `Hero.MainHero` 的好感」。反过来不成立——`GetAttractionValuePercentage(Hero.MainHero, heroObject)` 是另一个方向的数。
- **阈值是硬编码的 70，不是常量。** 那个 `MinimumFlirtPercentageForComment` 是死代码。别指望改它，也别在文档或代码里引用它。
- **五个条件里最容易被忽略的是两个 `Spouse == null`。** NPC 不能已婚，**玩家也不能已婚**。玩家结婚之后所有 `AttractedToPlayerTag` 台词会整体消失，不是只减少。
- **战争状态会一票否决。** `FactionManager.IsAtWarAgainstFaction(...)` 为真时直接 false，即使好感度满值。敌对势力的 NPC 不会走这条台词。
- **`IsFemale` 必须不同。** 这是游戏对「可恋爱对象」的定义，不是本标签自己加的规则。同性 NPC 永远不命中。

### 与恋爱系统其余部分的关系

| 你想表达 | 走哪条路 |
| --- | --- |
| 「这段台词只对单恋玩家的 NPC 出现」 | 本标签（对话 XML 的 `allowed_tags`） |
| 「玩家当前好感度是多少」 | `Campaign.Current.Models.RomanceModel.GetAttractionValuePercentage(hero, Hero.MainHero)` |
| 「调整好感度」 | 走 [RomanceModel](../RomanceModel) 对应的行为/Action，不要直接写数值 |
| 「这段台词只对已婚 NPC 出现」 | 自己写标签，1.4.5 的 `Conversation.Tags` 里没有 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MinimumFlirtPercentageForComment` | `private const int MinimumFlirtPercentageForComment = 70` | **死代码**。`IsApplicableTo` 里写的是字面量 `70`，从未引用这个常量。它只说明「作者原本打算把阈值提出来」，1.4.5 没做完。 |
| `StringId` | `public override string StringId => "AttractedToPlayerTag"` | 对话 XML `allowed_tags` 里的字面量，也是 `ConversationManager._tags` 的键。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一逻辑。依次短路判 `heroObject != null`、异性、`FactionManager` 不在战争、[RomanceModel](../RomanceModel) 好感度 `> 70`、NPC 无配偶、玩家无配偶。**依赖 `Campaign.Current` 与 `Hero.MainHero`，两者任一为 null 都抛。** |

## 真实示例

在自己 Behavior 里判断一个 NPC 是否会走这条恋爱台词：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool IsAttractedNpc(Hero candidate)
{
    if (candidate == null || Campaign.Current == null)
    {
        return false;
    }

    CharacterObject character = candidate.CharacterObject;
    if (character == null || character.HeroObject == null)
    {
        return false;
    }

    return new AttractedToPlayerTag().IsApplicableTo(character);
}
```

不自己 new，直接问对话管理器此刻算不算成立：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    bool attractedLine = Campaign.Current.ConversationManager.IsTagApplicable(
        AttractedToPlayerTag.StringId, talkTarget);
    Debug.Print("attracted line applicable = " + attractedLine, 0);
}
```

自己复算好感度做 UI 显示（注意这跟标签是两条路，标签阈值不可配，模型返回值可配）：

```csharp
using TaleWorlds.CampaignSystem;

Hero npc = Hero.OneToOneConversationHero;
if (npc != null && Campaign.Current != null && npc.Spouse == null)
{
    int attraction = Campaign.Current.Models.RomanceModel.GetAttractionValuePercentage(npc, Hero.MainHero);
    Debug.Print("attraction = " + attraction + " (tag threshold is the hard-coded 70)", 0);
}
```

## 风险与边界

- **强依赖 `Campaign.Current` 与 `Hero.MainHero`。** `IsApplicableTo` 里直接解引用两者。`Campaign.Current` 为 null（主菜单、模块加载早期、读档未完成）会 NRE。
- **阈值 70 是魔数，不是常量也不是模型参数。** 换 `RomanceModel` 实现不会改变它。想改只能自己派生一个标签类重写 `IsApplicableTo`。
- **好感度是方向性的。** 参数顺序写反会得到完全不同的结果，且不会报错。
- **玩家已婚会让全部恋爱台词消失。** 这是 `Hero.MainHero.Spouse == null` 这一条的效果，容易在剧情 mod 里被误判成「标签坏了」。
- **战争一票否决。** 宣战瞬间所有 `AttractedToPlayerTag` 台词下线，和平后回来——不需要重载对话资源。
- **不同性别的硬性要求。** `IsFemale` 不同是准入条件，写在第一行附近，早失败早短路。
- **无缓存、无静态状态。** 每次对话开始时逐 tag 调用，代价是几次属性访问加一次模型调用。
- **继承没有官方阻力。** `ConversationTag` 是 `public abstract`，本类不是 `sealed`；但新标签仍需确认 [ConversationManager](../ConversationManager) 的注册表是 XML 装配还是硬编码。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttractedToPlayerTag.cs` 是 20 行原始源码：一个 `private const`（未被引用）、一个 `StringId`、一个 `IsApplicableTo`。注意它**没有 `Id` 常量**，这与同目录的 `AseraiTag` / `ArtisanNotableTypeTag` / `AnyNotableTypeTag` 不同——那三个都有 `public const string Id`。跨版本比对时不要按「应该有 Id」去对，按实际成员对。

## 依赖关系

- 基类与唯一消费者：[ConversationManager](../ConversationManager) 持有 `_tags` 字典，`IsTagApplicable` / `GetApplicableTagNames` 调 `IsApplicableTo`
- 好感度来源：[RomanceModel](../RomanceModel) 的 `GetAttractionValuePercentage(Hero potentiallyInterestedCharacter, Hero heroOfInterest)` 是唯一判据来源，可被替换
- 战争判定：[FactionManager](../FactionManager) 的 `IsAtWarAgainstFaction(IFaction, IFaction)`
- 入参与被评价对象：[CharacterObject](../CharacterObject) 的 `HeroObject` 字段与 [Hero](../Hero) 的 `IsFemale` / `Spouse`
- 同层关系型对照：[AttackingTag](../AttackingTag) 同样读 `Hero.MainHero` 与 `PlayerEncounter`，可作「运行时状态型标签」的第二个样本
- 桶首页：[campaign API 分区](../)
