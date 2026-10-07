---
title: "AseraiTag"
description: "对话标签：判断角色文化是否为 aserai。源码只有一行 culture StringId 比较，是 CampaignSystem 里最小的一类对话门控，也是自制对话 XML 的第一个参考样本。"
---

# AseraiTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AseraiTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AseraiTag.cs`

## 概述

`AseraiTag` 是对话系统里的一枚**布尔门控**：它回答「正在对话的这个角色是不是阿塞莱（aserai）人」，答案直接决定一段对话 XML 里的哪些台词会出现。1.4.5 的实现只有一句判断：

```csharp
return character.Culture.StringId == "aserai";
```

在对话体系里它承担的是**「按文化切分台词池」**这一环。同目录下的兄弟标签走的是别的维度——[AnyNotableTypeTag](../AnyNotableTypeTag) 判「是否名士」、[ArtisanNotableTypeTag](../ArtisanNotableTypeTag) 判「职业是不是工匠」、[AttractingTag 类标签](../ConversationManager) 判关系或战斗状态——而 `AseraiTag` 只认文化。所以自定义对话 XML 里，`[AseraiTag]` 出现的位置意味着「这段话只对阿塞莱人说」。

注意它判的是 `Culture.StringId`，不是 `Culture`。同目录另一个标签 [AseraiTag 的近邻 `AnyNotableTypeTag`](../AnyNotableTypeTag) 判的是 `HeroObject.IsNotable`。文化是 [CharacterObject](../CharacterObject) 上的一个可空引用，非地图角色（普通士兵、平民）可能没有文化，那一行会 NRE。这是这个类型唯一但真实的边界。

## 心智模型

把它当成**「给对话 XML 用的一个纯函数」**就对了，不要当成有状态的对象。

- **它没有构造函数里的初始化，也不持有任何字段。** 全类只有 `Id` 常量、`StringId` 属性和 `IsApplicableTo` 一个实现方法。整个类型是 stateless 的，`ConversationManager` 把它当单例塞进 `_tags` 字典。
- **典型调用顺序永远是「引擎查 → 你写条件」。** 你在 XML 里写 `allowed_tags="AseraiTag"`，引擎在对话开始时调 [ConversationManager](../ConversationManager) 的 `IsTagApplicable` / `GetApplicableTagNames`，那里对每个 tag 调 `IsApplicableTo(character)`。反向的 `new AseraiTag().IsApplicableTo(character)` 只在你自己的 Behavior 里做预检时才需要。
- **`Id` 与 `StringId` 是同一个字符串。** `public const string Id = "AseraiTag"` 和 `public override string StringId => "AseraiTag"` 写死了同一个字面量——这两个成员不是「一个标识一个显示名」，而是同一个标识的两种暴露方式。XML 里写的一定是 `StringId`。
- **别拿它当 `Hero` 的过滤器在 `foreach` 里调。** `IsApplicableTo` 的参数是 `CharacterObject`，不是 `Hero`。虽然 `Hero.CharacterObject` 能拿到，但反过来不行，而且对 `Hero` 直接用会编译不过。
- **文化可能在运行期变。** [ChangeHeroCulture 类的操作](../Clan) 或 mod 自定义的文化转换会让同一个角色下一帧的判定翻转。它是即时查询，不是存档字段。

### 与兄弟标签的分工

| 你想表达 | 该用哪个标签 | 判什么 |
| --- | --- | --- |
| 「只对阿塞莱人说」 | `AseraiTag` | `Culture.StringId == "aserai"` |
| 「只对名士说」 | [AnyNotableTypeTag](../AnyNotableTypeTag) | `character.HeroObject.IsNotable` |
| 「只对工匠说」 | [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) | `character.Occupation == Occupation.Artisan` |
| 「只对荣誉+仁慈之和为负的人说」 | `AmoralTag` | `GetTraitLevel(Honor) + GetTraitLevel(Mercy) < 0` |
| 「只对同名族裔说」 | `BattanianTag` | 同构，走文化 StringId 比较 |

同一段 XML 可以同时挂多个标签，它们是**与**的关系（全部满足），不是或。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public const string Id = "AseraiTag"` | 编译期常量形式的标识，给需要在 C# 侧拼字符串的地方用。因为是 `const`，可以进 `switch` 的 case 分支。 |
| `StringId` | `public override string StringId => "AseraiTag"` | 对话 XML 的 `allowed_tags` 里写的就是它。基类 [ConversationTag](../ConversationManager) 用它做字典键，**引擎不读 `Id`**。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一的逻辑。读 `character.Culture.StringId` 并和 `"aserai"` 做**大小写敏感的精确相等**比较。**不做 null 检查**——`character.Culture` 为 null 时直接 NRE。 |

## 怎么用

这是一枚对话门控，回答「正在对话的这个角色是不是阿塞莱人」，答案直接决定一段对话 XML 里哪些台词会出现。它没有构造参数、没有状态、不参与存档，唯一的公开成员就是从 `ConversationTag` 继承来的 `IsApplicableTo`。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AseraiTag.cs:3`，它同时给出了一个常量 `Id`（同文件 `:5`，值就是 `"AseraiTag"`）和一个覆写的 `StringId` 属性（`:7`）。基类 `ConversationTag` 的抽象方法在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ConversationTag.cs:7`。框架的调用点在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs:1087` 与 `:1098`，两处都是拿当前对话角色去过一遍标签。

同目录下的兄弟标签走的是别的维度：[AnyNotableTypeTag](../AnyNotableTypeTag) 判「是否城镇名士」、[ArtisanNotableTypeTag](../ArtisanNotableTypeTag) 判「职业是不是工匠」，而它只认文化。同一段 XML 可以同时挂多个标签，语义是与，所以「台词为什么没出来」永远要三个维度一起查。

```csharp
AseraiTag tag = new AseraiTag();
Debug.Print("StringId=" + tag.StringId + " 常量 Id=" + AseraiTag.Id, 0);
Settlement aseraiTown = Settlement.All[0];
foreach (Hero npc in aseraiTown.Notables)
{
    string cultureId = npc.Culture?.StringId;                     // 判据就是这一串
    bool hit = tag.IsApplicableTo(npc);
    Debug.Print(npc.Name + " 文化=" + cultureId + " 标签=" + hit, 0);
}
Debug.Print("大小写敏感：aserai 命中，Aserai 与 ASERAI 都不命中且不报错", 0);
```

实现只有一句判断：`character.Culture.StringId == "aserai"`。它判的是 `Culture.StringId` 而不是 `Culture` 对象本身，所以你要做等价判定时也该比字符串，别比引用。

**最常见的坑**：`character.Culture` 没有 null 保护，非地图角色（战场士兵、部分 NPC）可能没有文化，这一行会抛 NRE。引擎自己调用时通常已保证对话对象是有人物数据的角色，但你在别处手动调用就得自己先判。

## 真实示例

在自定义 Behavior 里对某个角色做同款门控（参数是 `CharacterObject`，不是 `Hero`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool IsAseraiNpc(Hero candidate)
{
    if (candidate == null)
    {
        return false;
    }

    CharacterObject character = candidate.CharacterObject;
    if (character == null || character.Culture == null)
    {
        return false;
    }

    return new AseraiTag().IsApplicableTo(character);
}
```

想知道引擎此刻会把哪些标签算作「对当前对话角色成立」，直接问对话管理器而不是自己重写条件：

```csharp
using TaleWorlds.CampaignSystem;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    ConversationManager manager = Campaign.Current.ConversationManager;
    bool aseraiLineApplies = manager.IsTagApplicable(AseraiTag.StringId, talkTarget);
    Debug.Print("aserai tag applicable = " + aseraiLineApplies, 0);
}
```

按标签筛一批候选英雄，用于自己的地图事件或 UI：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

AseraiTag tag = new AseraiTag();
foreach (Hero hero in Campaign.Current.AliveHeroes)
{
    CharacterObject character = hero.CharacterObject;
    if (character.Culture != null && tag.IsApplicableTo(character) && hero.Clan != Clan.PlayerClan)
    {
        Debug.Print("aserai lord: " + hero.Name.ToString(), 0);
    }
}
```

## 风险与边界

- **`character.Culture` 没有 null 保护。** 非地图角色（战场士兵、部分 NPC）可能没有文化，此时 `IsApplicableTo` 抛 NRE。引擎自己调用时通常已经保证了对话对象是有人物数据的角色，但**你在别处手动调用就得自己先判**。
- **大小写敏感。** 比较用的是 `==` 字符串精确比较。文化 id 写成 `Aserai` 或 `ASERAI` 都不会命中，且不会报错，只会静默地让所有台词消失。
- **不区分地图内/地图外。** 它只看文化，不看 `IsNotable`、不看是否被俘、不看当前是否在 Mission 里。想加这些限制必须自己再包一层。
- **没有任何缓存，也没有静态状态。** 每次对话开始时 `ConversationManager` 遍历 `_tags.Values` 逐个调用，代价是一次字符串比较，可以忽略。
- **改文化即时生效，无需迁移存档。** 因为判定完全基于运行期的 `Culture.StringId`，这个标签不进入存档。给角色换文化之后旧对话立刻换台词。
- **继承它没有官方阻力。** `ConversationTag` 是 public abstract，`AseraiTag` 本身不是 `sealed`。派生类只要改 `StringId` 就能注册成一个新标签——但新标签不会自动进 `_tags`，还要看 [ConversationManager](../ConversationManager) 的标签注册表是硬编码还是按 XML 装配。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AseraiTag.cs` 是 13 行的原始源码形态：1 行 `using`、1 行命名空间、1 个类声明、1 个 `const`、1 个属性、1 个方法。公开表面只有 `Id` / `StringId` / `IsApplicableTo` 三个成员。跨版本比对时按这三个成员对，不要按行数对（1.3.x / 1.4.6 的同文件是反编译产物，行数会明显更长但成员一致）。

## 依赖关系

- 基类与唯一消费者：[ConversationManager](../ConversationManager) 持有 `_tags` 字典，`IsTagApplicable` / `GetApplicableTagNames` 调 `IsApplicableTo`；`ConversationTag` 基类只有 `StringId` 与 `IsApplicableTo` 两个抽象成员
- 判定依据：[CharacterObject](../CharacterObject) 的 `Culture` 属性指向 [CultureObject](../CultureObject)；`Culture.StringId` 是官方 XML 里的 `aserai` 字面量
- 同族门控：[AnyNotableTypeTag](../AnyNotableTypeTag)、[ArtisanNotableTypeTag](../ArtisanNotableTypeTag)、`AmoralTag`、`BattanianTag` 构成 `Conversation.Tags` 这一层的文化/身份/性格切分
- 施测对象：[Hero](../Hero) 通过 `hero.CharacterObject` 暴露可传给本类型的 `CharacterObject`
- 身份常量参考：[DefaultTraits](../DefaultTraits) 是同层 `AmoralTag` 依赖的特质表，本类型不依赖
- 桶首页：[campaign API 分区](../)
