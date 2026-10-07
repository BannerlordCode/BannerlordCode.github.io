---
title: "AttackingTag"
description: "对话标签：判断玩家此刻是否处于「正在攻打」状态——要么 PlayerEncounter 里是防守方且对方无停战期，要么玩家队伍在当前据点的围城名单里。"
---

# AttackingTag

**Namespace:** `TaleWorlds.CampaignSystem.Conversation.Tags`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class AttackingTag : ConversationTag`
**Base:** `ConversationTag`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttackingTag.cs`

## 概述

`AttackingTag` 是**攻守状态门控**：它回答「玩家此刻是不是正在攻打对方」，答案决定一段对话 XML 里哪些「你要被剿灭 / 识相点」之类的台词可用。1.4.5 的实现是两条独立路径的或：

```csharp
if (HeroHelper.WillLordAttack())
{
    return true;
}
if (Settlement.CurrentSettlement != null && Settlement.CurrentSettlement.SiegeEvent != null)
{
    return Settlement.CurrentSettlement.Parties.Contains(Hero.MainHero.PartyBelongedTo);
}
return false;
```

在对话体系里它承担的是**「按即时战况切分台词池」**这一环。它和同层的 [AseraiTag](../AseraiTag)（文化）、[ArtisanNotableTypeTag](../ArtisanNotableTypeTag)（职业）这类**静态身份**标签不同：它读的是 [PlayerEncounter](../PlayerEncounter) 与 [SiegeEvent](../SiegeEvent) 这类**一次性会话状态**。同一段台词在遭遇战前、围城中、战斗结束后会出现与消失，不需要重载对话资源。

关键点是 `IsApplicableTo` 的**入参 `character` 完全没被用到**。这个标签判定的是**玩家的处境**，不是对话对象的处境。所以拿它去筛「哪些 NPC 处于攻击状态」是彻底的方向性错误——它对所有 NPC 返回同一个答案。

## 心智模型

把它当成**「玩家是否持有主动权」的开关**就对了。

- **入参是摆设，这是设计而不是 bug。** 基类 [ConversationTag](../ConversationManager) 要求 `IsApplicableTo(CharacterObject)`，但对话 XML 的 `allowed_tags` 语义就是「当前这次对话能不能出这句」，而这个标签问的是玩家。所以它必须实现一个用不到参数的接口。
- **第一条路径走 `HeroHelper.WillLordAttack()`。** 那是 `Helpers` 命名空间里的静态方法（`Helpers/HeroHelper.cs:241`），条件是：存在 `PlayerEncounter.Current`、玩家是 `Defender` 侧、对方没有 `DoNotAttackMainPartyUntil` 未来期、对话对象不是囚犯、对方队伍 MapFaction 与玩家交战。**注意它是「防守方」**——因为遭遇战里玩家作为防守方正在挨打，这才是「被攻打」语境。
- **第二条路径是围城名单。** 当前聚落有进行中的 `SiegeEvent`，且 `Settlement.Parties` 里有 `Hero.MainHero.PartyBelongedTo`。这条路径不检查双方是否敌对，只是名单成员就算命中。
- **`Settlement.CurrentSettlement` 才是判定锚点，不是对话发生的地点。** `Settlement.CurrentSettlement` 是静态属性；地图上随便对话而当前聚落恰好在围城，这个标签照样为真。
- **`Hero.MainHero.PartyBelongedTo` 为 null 会怎样。** `Settlement.Parties.Contains(null)` 不抛但语义上是「队伍不在任何聚落」，所以返回 false。这条路径对无队伍状态的玩家是安全的。

### 与相邻标签的分工

| 你想表达 | 标签 | 判什么 |
| --- | --- | --- |
| 「玩家正在攻打对方」 | `AttackingTag` | `WillLordAttack()` 或玩家队伍在围城名单里 |
| 「只对单恋玩家的 NPC 出现」 | [AttractedToPlayerTag](../AttractedToPlayerTag) | 好感度模型 + 婚姻 + 战争 |
| 「只对阿塞莱人说」 | [AseraiTag](../AseraiTag) | 文化 StringId |
| 「只对工匠说」 | [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) | 职业 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Id` | `public const string Id = "AttackingTag"` | 编译期常量形式的标识，可作 `switch` case。 |
| `StringId` | `public override string StringId => "AttackingTag"` | 对话 XML `allowed_tags` 里写的字面量，也是 `ConversationManager._tags` 的键。 |
| `IsApplicableTo` | `public override bool IsApplicableTo(CharacterObject character)` | 唯一逻辑。**`character` 参数完全未被使用**。先试 `HeroHelper.WillLordAttack()`，再试围城名单，两者皆不成立返回 false。依赖 `Settlement.CurrentSettlement`、`Hero.MainHero` 与静态的 `PlayerEncounter`。 |

## 怎么用

这是一枚按「当前世界状态」而不是按角色属性切分台词的门控。它回答的不是「这个角色是谁」，而是「此刻地图上是否处在攻击态势里」，所以它的判定里完全没有 `character` 参数的使用。

**怎么拿到它**：声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttackingTag.cs:6`，常量 `Id` 在 `:8`，`StringId` 覆写在 `:10`，`IsApplicableTo` 覆写在 `:12`。基类 `ConversationTag` 的抽象方法在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ConversationTag.cs:7`，框架调用点在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/Conversation/ConversationManager.cs:1087` 与 `:1098`。

它有两个分支，短路顺序有讲究：先问 `HeroHelper.WillLordAttack()`（`AttackingTag.cs:14`），为真就直接返回 true，连 `Settlement.CurrentSettlement` 都不看；否则再看当前定居点是否处在围城中（`:18`）且玩家部队在该定居点的部队列表里（`:20`）。

```csharp
AttackingTag tag = new AttackingTag();
Debug.Print("StringId=" + tag.StringId + " 常量 Id=" + AttackingTag.Id, 0);
bool willLordAttack = HeroHelper.WillLordAttack();
Settlement current = Settlement.CurrentSettlement;
Debug.Print("领主攻击意图=" + willLordAttack + " 当前定居点=" + current?.Name, 0);
if (current != null && current.SiegeEvent != null)
{
    Debug.Print("围城中，玩家部队在内=" + current.Parties.Contains(Hero.MainHero.PartyBelongedTo), 0);
}
Debug.Print("标签最终结果（注意入参 character 未被使用）=" + tag.IsApplicableTo(Hero.MainHero), 0);
```

这就是它与同目录其它标签最大的结构差异：[AseraiTag](../AseraiTag) 和 [ArtisanNotableTypeTag](../ArtisanNotableTypeTag) 判的是入参本身，而它对入参完全不看，只看全局状态。

**最常见的坑**：它读的是静态的 `Settlement.CurrentSettlement`，而不是对话角色所在的位置。同一段对话在地图上对话和在围城对话里结果不同，所以调试「台词时有时无」时，要看对话发生在哪、而不是只看双方是谁。

## 真实示例

在 Behavior 里预检这个门控（入参随便传，因为它不被读；但仍然要传合法对象以免将来实现变化）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

public static bool AttackingLinesActive()
{
    CharacterObject anyone = Hero.MainHero.CharacterObject;
    if (anyone == null || Campaign.Current == null)
    {
        return false;
    }

    return new AttackingTag().IsApplicableTo(anyone);
}
```

直接问对话管理器此刻这套台词是否会显示：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation.Tags;

CharacterObject talkTarget = CharacterObject.OneToOneConversationCharacter;
if (talkTarget != null && Campaign.Current != null)
{
    bool attackingLine = Campaign.Current.ConversationManager.IsTagApplicable(
        AttackingTag.StringId, talkTarget);
    Debug.Print("attacking line applicable = " + attackingLine, 0);
}
```

绕过标签，直接复现两条路径中的第二条（围城名单），用于 UI 提示：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Settlement current = Settlement.CurrentSettlement;
if (current != null && current.SiegeEvent != null && Hero.MainHero.PartyBelongedTo != null)
{
    bool playerBesieging = current.Parties.Contains(Hero.MainHero.PartyBelongedTo);
    Debug.Print("player is in the siege roster of " + current.Name.ToString() + " = " + playerBesieging, 0);
}
```

## 风险与边界

- **入参不被使用，方向性极易搞反。** 这个标签回答的是「玩家在不在打」，不是「这个 NPC 在不在打」。拿它做 NPC 过滤会得到「所有 NPC 同一个结果」。
- **`Settlement.CurrentSettlement` 是静态锚点。** 玩家在大地图上与远方 NPC 对话时，它仍指向当前聚落，围城路径可能误判为真。
- **围城路径不检查敌对关系。** 只要玩家队伍在 `Settlement.Parties` 里就返回 true，即使围城方是自己的盟友。
- **`HeroHelper.WillLordAttack()` 有多层前置。** `PlayerEncounter.Current` 为 null（不在遭遇战）、玩家是 `Attacker` 侧、对方有 `DoNotAttackMainPartyUntil` 未来期、对话对象是囚犯——任一成立都让它返回 false。第一条路径比看上去更容易落空。
- **依赖多个静态单例。** `Hero.MainHero`、`Settlement.CurrentSettlement`、[PlayerEncounter](../PlayerEncounter) 三者任一异常都会抛。主菜单或读档未完成阶段不要调用。
- **状态在会话内变化极快。** 战斗开始 / 结束、围城开始 / 结束会在同一局对话周期内翻转判定。若你要缓存结果，缓存到下一次 `OnConversationEnd` 为止，不要跨帧。
- **无缓存、无静态字段。** 类本身没有任何字段，全部状态来自外部静态入口。
- **继承没有官方阻力。** `ConversationTag` 是 `public abstract`，本类不是 `sealed`。

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/AttackingTag.cs` 是 24 行原始源码，公开表面只有 `Id` / `StringId` / `IsApplicableTo`。它对 `Helpers` 命名空间的依赖体现在文件第 1 行的 `using Helpers;`——移植到别的模块时这行容易丢，丢了会编译不过而不是静默失效。

## 依赖关系

- 基类与唯一消费者：[ConversationManager](../ConversationManager) 持有 `_tags` 字典，`IsTagApplicable` / `GetApplicableTagNames` 调 `IsApplicableTo`
- 第一条判据：`HeroHelper.WillLordAttack()` 位于 `Helpers` 命名空间，内部读 [PlayerEncounter](../PlayerEncounter) 的 `Current` / `PlayerSide` / `EncounteredMobileParty` 与 [FactionManager](../FactionManager)
- 第二条判据：[Settlement](../Settlement) 的 `SiegeEvent` 与只读 `Parties` 列表；`SiegeEvent` 来自围城子系统
- 队伍侧：[Hero](../Hero) 的 `MainHero` 与 `PartyBelongedTo`，队伍类型是 [MobileParty](../MobileParty) / [PartyBase](../PartyBase)
- 同层状态型标签对照：[AttractedToPlayerTag](../AttractedToPlayerTag) 是另一个读 `Hero.MainHero` 的标签，但方向相反（判对话对象而非判玩家）
- 桶首页：[campaign API 分区](../)
