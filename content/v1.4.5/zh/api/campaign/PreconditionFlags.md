---
title: "PreconditionFlags"
description: "控制一个 Issue（问题/任务）能否交予玩家承接的前置条件位掩码：每位代表一类玩家资格门槛（关系、声望、金钱、战争状态、家族层级、拥有据点等），由每个 Issue 在自己的 CanPlayerTakeQuestConditions 中按 [Flags] 组合置位，并由 IssueBase.CheckPreconditions 据此挑选拒绝对话文本。"
---
# PreconditionFlags

**命名空间:** `TaleWorlds.CampaignSystem.Issues`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `protected enum PreconditionFlags : uint`（标注 `[Flags]`；定义于 `IssueBase.cs` 内，是 `IssueBase` 的嵌套类型）  
**基类型:** `System.Enum`（底层 `uint`）  
**源文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/IssueBase.cs`

## 概述

`PreconditionFlags` 是一个 `[Flags]` 位掩码，用来表达“玩家当前为什么**不能**承接某个 Issue 给出的任务/任务（quest）”。每个位代表一类玩家资格门槛：与发布者的关系、所需技能、携带金钱、声望、影响力、是否负伤、是否处于战争、家族层级、兵力是否足够、是否同阵营、队伍容量、是否为雇佣兵、是否王国领袖、是否拥有据点、同伴是否已满等。它在玩家与 NPC 对话、Issue 准备交给玩家时被计算每个 Issue 自己的 `CanPlayerTakeQuestConditions` 覆写置位，最终由 `IssueBase.CheckPreconditions` 读取这些位，判断任务是否可接，并为被阻挡的那一位挑选对应的拒绝对话文本。

## 心智模型

把 `PreconditionFlags` 想成一个**“玩家资格体检表”**——它不是存档数据，也不是世界状态，而是每次对话、每个 Issue 在那一刻**临时算出来的结果**。它活在 Campaign 层的 Issues 子系统里：`IssueBase` 是所有 Issue 的抽象基类，`PreconditionFlags` 作为它的 `protected` 嵌套 `[Flags]` 枚举，只对 `IssueBase` 及其派生 Issue 类可见。当玩家接近一个可发布 Issue 的 NPC（通常是 [Hero](../Hero) 中的 notable 或领主）时，`IssueManager` 会驱动对应 Issue 走 `CheckPreconditions`；该方法调用每个 Issue 实现的 `CanPlayerTakeQuestConditions(issueGiver, out flags, ...)`，由各 Issue 依据真实条件（`issueGiver.GetRelationWithPlayer()`、`FactionManager.IsAtWarAgainstFaction(...)`、玩家金钱/声望/兵力等）把不通的位 `|=` 进同一个 `flags` 变量。注意：返回的 `flags == PreconditionFlags.None` 才是“可以承接”的判定，而 `CheckPreconditions` 内部会**按固定优先级**只取被置位中最高优先的一位来显示拒绝文本——所以它是“为什么不能接”的清单，不是“已满足条件”的清单。你**不要**在外部保存或手填这些位，也**不要**把它当作持久状态：它每次对话都重新计算，且不属于任何 `[SaveableField]`，读档不会带回旧位。正确地写入它的唯一路径是写一个 `IssueBase` 的派生类并覆写 `CanPlayerTakeQuestConditions`。

## 何时使用 / 何时不要使用

### 适合使用

- 在编写自定义 Issue（继承 `IssueBase`）时，在 `CanPlayerTakeQuestConditions` 中按 `[Flags]` 语义用 `flags |= PreconditionFlags.Xxx` 累积“玩家不满足的门槛”，并返回 `flags == PreconditionFlags.None`。
- 在调试对话为何不给玩家发任务时，对照 `CheckPreconditions` 的优先级顺序，判断是哪一个位把任务挡掉了。
- 在派生 Issue 里复用现有位（如 `Relation`、`AtWar`、`Money`）来表达门槛，而不是发明新的字符串条件。

### 不要这样用

- 不要在 `IssueBase` 之外访问它：`PreconditionFlags` 是 `protected`，只有 `IssueBase` 及其派生 Issue 能直接读写；其它系统应通过 `IssueManager` / `IssueBase` 的公开流程间接了解 Issue 可用性。
- 不要把它当存档字段或世界状态缓存：它是 `CheckPreconditions` 调用时**当场计算**的临时值，随玩家关系、战争、金钱等实时变化，没有 `SaveableField` 标记，读档不会恢复旧位。
- 不要只 `|=` 置位却让返回值与位不一致：`CanPlayerTakeQuestConditions` 的布尔返回值必须等于 `flags == PreconditionFlags.None`，否则会出现“明明有门槛却把任务发给玩家”或“没有门槛却拒绝玩家”的逻辑错乱。
- 不要用 `1u << n` 之类按连续位推导的方式来构造或比较这些位——本枚举的位值**不连续**（见 `0x800u` 之后直接跳到 `0x4000u`，跳过了 `0x1000u`），位运算必须直接引用具名成员。
- 不要假设“只有一个位被置位”：多个门槛可同时成立（例如既 `AtWar` 又 `NotInSameFaction`），此时只有优先级最高的拒绝文本会显示，其余被置位并不显式告知玩家。

## 依赖图

```text
Campaign (当前战役)
  └─ IssueManager (遍历 Issues，驱动 CheckPreconditions)
       └─ IssueBase.CheckPreconditions(IssueState)
            └─ CanPlayerTakeQuestConditions(...)  ->  PreconditionFlags (flags, [Flags])
                 ├─ Hero.GetRelationWithPlayer / Hero.MainHero   (Relation / MainHeroIsKingdomLeader / PlayerIsOwnerOfSettlement)
                 ├─ FactionManager.IsAtWarAgainstFaction          (AtWar / NotInSameFaction)
                 ├─ Clan (PlayerClan.Tier / IsMercenary)          (ClanTier / ClanIsMercenary)
                 ├─ Settlement / MobileParty (容量·兵力·拥有据点)  (PartySizeLimit / NotEnoughTroops / PlayerIsOwnerOfSettlement)
                 └─ SkillObject (所需技能)                        (Skill)
```

- 上游 / 驱动者：
  - [IssueManager](../IssueManager) 持有当前战役的全部 `IssueBase` 实例，并在对话/每日推进中触发 `CheckPreconditions`，是这些位被计算与消费的入口。
  - [IssueBase](../IssueBase) 是定义 `PreconditionFlags` 的抽象基类；`CheckPreconditions` 与 `CanPlayerTakeQuestConditions` 都在它上面。
  - [Campaign](../Campaign) 提供当前世界状态（`Campaign.Current`），所有门槛判断（关系、金钱、家族、据点）都基于它。
- 下游 / 评估依据：
  - [Hero](../Hero)（`Hero.MainHero`、`GetRelationWithPlayer`、`IsWounded` 等）提供关系、负伤、是否王国领袖等门槛。
  - [Clan](../Clan) / [Kingdom](../Kingdom) 提供家族层级、是否雇佣兵、是否同阵营等门槛。
  - [Settlement](../Settlement) / [MobileParty](../MobileParty) 提供拥有据点、队伍容量、可用兵力等门槛。
  - [FactionManager](../FactionManager) 的 `IsAtWarAgainstFaction` 提供战争/敌对阵营门槛。
  - [QuestBase](../QuestBase) 是门槛通过后被生成并承接的任务对象。
  - [AlternativeSolutionScaleFlag](../AlternativeSolutionScaleFlag) 是同文件内另一个 `[Flags]` 枚举，描述了替代解决方案的可缩放维度，与前置门槛是两套独立掩码。

## 风险边界

- **位值不连续，别用位移推导**：枚举从 `ClanIsMercenary = 0x800u` 之后直接跳到 `MainHeroIsKingdomLeader = 0x4000u`，中间缺 `0x1000u`。用 `1u << 12` 之类的连续位移去构造或比较位会指向不存在/错位的值，导致门槛判定错误。永远引用具名成员。
- **返回值与位必须一致**：`CanPlayerTakeQuestConditions` 的契约是“可接当且仅当 `flags == None`”。若只 `|=` 置了位却返回 `true`，或反之清空了位却返回 `false`，Issue 会发给不该接的玩家，或把合格玩家拒之门外，且不会被编译期捕获。
- **多位是“最高优先级沉默”**：`CheckPreconditions` 只显示被置位中优先级最高的那一条拒绝文本（顺序大致为 `AtWar` > `NotInSameFaction` > `MainHeroIsKingdomLeader`/`PlayerIsOwnerOfSettlement` > `ClanTier` > `Renown` > `Relation` > `Skill` > `Money` > `Influence` > `Wounded` > `NotEnoughTroops` > `PartySizeLimit` > `ClanIsMercenary` > `CompanionLimitReached`）。其它同时成立的门槛不会告诉玩家，调试时不要只看对话文本就下结论。
- **它是临时的，不是存档**：`PreconditionFlags` 没有 `[SaveableField]`，每次对话重新由 `CanPlayerTakeQuestConditions` 计算。不要在长期 `CampaignBehavior` 状态里保存某次算出的 `flags`，否则会拿到过期资格判定；需要“某 Issue 是否对玩家开放”应重新走 `CheckPreconditions`。
- **`protected` 访问边界**：位只在 `IssueBase` 及其派生 Issue 内可写。若在自定义 Issue 中漏写某个已知门槛的 `|=`，会让本该被挡的任务提前出现（例如发布者与玩家处于战争却仍发任务）；反之把不该置的位写进去，会让任务永久不可接。
- **新增/重排位要向后兼容**：虽然本枚举本身不进存档，但同文件 `AlternativeSolutionScaleFlag` 等 `[Flags]` 枚举一旦被其它代码或存档逻辑依赖位序，重排或插入新位可能破坏既有判断；新增门槛位应放在现有最高位之后，避免复用旧值。

## 成员说明（每个位的真实含义）

下表覆盖 `PreconditionFlags` 的每一个成员。每个位的意义来自 `IssueBase.CheckPreconditions` 中对应的拒绝文本，以及各 Issue 在 `CanPlayerTakeQuestConditions` 里实际做的判断。

| 成员 | 位值 | 代表的门槛 / 条件 | 谁计算 / 评估 |
| --- | --- | --- | --- |
| `None` | `0u` | 没有任何门槛，玩家可以承接。判定“可接”即 `flags == None`。 | `CanPlayerTakeQuestConditions` 初值；`CheckPreconditions` 用其作为“放行”标志 |
| `Relation` | `1u` | 玩家与发布者（或某相关英雄 `relationHero`）的个人关系过低，不信任玩家。 | Issue 中 `issueGiver.GetRelationWithPlayer() < 阈值`（如 `-10f`）时 `|=`；文本用 `relationHero` |
| `Skill` | `2u` | 玩家缺少任务所需的技能等级。 | Issue 中对照所需 `SkillObject` 等级时置位；`skill` 输出参数承载具体技能 |
| `Money` | `4u` | 玩家携带金钱不足。 | Issue 中 `Hero.MainHero.Gold < 所需` 时置位；`requiredGold` 输出参数承载所需金额 |
| `Renown` | `8u` | 玩家声望（Renown）过低。 | Issue 中对照玩家声望门槛时置位 |
| `Influence` | `0x10u` | 玩家家族影响力（Influence）不足。 | Issue 中对照玩家影响力门槛时置位 |
| `Wounded` | `0x20u` | 玩家当前负伤，需要休养。 | Issue 中 `Hero.MainHero.IsWounded` 为真时置位 |
| `AtWar` | `0x40u` | 发布者所在阵营与玩家阵营处于战争状态——最高的拒绝优先级之一。 | Issue 中 `FactionManager.IsAtWarAgainstFaction(issueGiver.MapFaction, Hero.MainHero.MapFaction)` 为真时置位 |
| `ClanTier` | `0x80u` | 玩家家族层级（Clan Tier）太低，发布者没听说过。 | Issue 中对照 `Clan.PlayerClan.Tier` 门槛时置位 |
| `NotEnoughTroops` | `0x100u` | 玩家队伍兵力不足，无法执行任务。 | Issue 中对照玩家队伍人数门槛时置位 |
| `NotInSameFaction` | `0x200u` | 玩家不在同一阵营（只对“王国/阵营内领主”类任务有效）。 | Issue 中阵营判定失败时置位 |
| `PartySizeLimit` | `0x400u` | 玩家队伍已达容量上限，发布者无法再拨部队给玩家。 | Issue 中 `MobileParty.MainParty` 容量已满时置位 |
| `ClanIsMercenary` | `0x800u` | 玩家家族是雇佣兵，任务不适合雇佣兵。 | Issue 中 `Clan.PlayerClan.IsMercenary` 为真时置位 |
| `MainHeroIsKingdomLeader` | `0x4000u` | 玩家是王国领袖——发布者不愿拿“小事”打扰大人物（反向门槛，地位太高反而不接）。 | Issue 中 `Hero.MainHero.IsKingdomLeader` 之类判定时置位 |
| `PlayerIsOwnerOfSettlement` | `0x8000u` | 玩家拥有据点——同样作为“地位过高”的反向门槛。 | Issue 中玩家拥有某 `Settlement` 时置位 |
| `CompanionLimitReached` | `0x10000u` | 玩家队伍同伴数量已达上限，无法再接收发布者派来的人。 | Issue 中玩家同伴数达到上限时置位 |

## 最小真实示例

### 示例 1：在自定义 Issue 中按 [Flags] 累积门槛（真实覆写签名）

下面这段直接镜像原版 `LandLordTheArtOfTheTradeIssueBehavior` 的 `CanPlayerTakeQuestConditions`：它把“关系差”和“处于战争”两类门槛各自 `|=` 进同一个 `flags`，最后只在该变量为 `None` 时返回 `true`。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;
using TaleWorlds.Core;

// 在 IssueBase 的派生类内部覆写
protected override bool CanPlayerTakeQuestConditions(
    Hero issueGiver,
    out PreconditionFlags flags,
    out Hero relationHero,
    out SkillObject skill,
    out int requiredGold)
{
    flags = PreconditionFlags.None;
    relationHero = null;
    requiredGold = 0;
    skill = null;

    // 关系门槛：与发布者关系过低
    if (issueGiver.GetRelationWithPlayer() < -10f)
    {
        flags |= PreconditionFlags.Relation;
        relationHero = issueGiver;
    }

    // 战争门槛：双方阵营处于交战
    if (FactionManager.IsAtWarAgainstFaction(issueGiver.MapFaction, Hero.MainHero.MapFaction))
    {
        flags |= PreconditionFlags.AtWar;
    }

    // 返回值的契约：可接当且仅当没有任何门槛位被置
    return flags == PreconditionFlags.None;
}
```

`GetRelationWithPlayer`、`FactionManager.IsAtWarAgainstFaction`、`Hero.MainHero` 均来自 v1.4.5 源码；位必须用具名成员 `|=`，不要手写位移常量。

### 示例 2：引擎如何消费这些位（IssueBase.CheckPreconditions 的简化逻辑）

`CheckPreconditions` 拿到 `flags` 后，按固定优先级只显示被置位中“最严重”的一条拒绝文本；最终是否可接只看 `result`（即 `flags == None`）。

```csharp
// IssueBase.CheckPreconditions 内部（节选，非 mod 直接调用）
PreconditionFlags flag;
Hero relationHero;
SkillObject skill;
int requiredGold;

bool result = CanPlayerTakeQuestConditions(issueGiver, out flag, out relationHero, out skill, out requiredGold);

if ((flag & PreconditionFlags.AtWar) == PreconditionFlags.AtWar)
{
    explanation.SetTextVariable("EXPLANATION",
        new TextObject("{=21dlZJt6}I don't wish to speak about that. As you know, our factions are at war."));
}
else if ((flag & PreconditionFlags.NotInSameFaction) == PreconditionFlags.NotInSameFaction)
{
    explanation.SetTextVariable("EXPLANATION",
        new TextObject("{=rBPI2dvX}I don't need the service of strangers..."));
}
// ... 其余位按优先级继续 else-if ...
// 多个位同时成立时，只有最先匹配的那一条文本会被使用

// 是否可承接完全取决于 result，与“显示了哪条文本”无关
return result;
```

这段说明：位与位之间是“或”累积（`|=`），但显示是“优先级取一”。调试某任务为何不出现时，应直接检查 `flags` 的各位，而不是只听对话文本。

## 版本注记

本页以 v1.4.5 `TaleWorlds.CampaignSystem.Issues/IssueBase.cs` 中 `PreconditionFlags` 定义，以及 `IssueBase.CheckPreconditions`、`LandLordTheArtOfTheTradeIssueBehavior`、`ArmyNeedsSuppliesIssueBehavior`、`TheConquestOfSettlementIssueBehavior` 等真实调用点为准。注意位值从 `0x800u` 跳到 `0x4000u`（跳过 `0x1000u`）。跨版本使用时，重新核对各位的实际判定条件、新增/废弃的位，以及 `CheckPreconditions` 的优先级顺序。

## 导航

- ↑ 父级：[战役 API 索引](../)
- ↔ 同级 / 相关：[IssueBase](../IssueBase) · [IssueManager](../IssueManager) · [QuestBase](../QuestBase) · [Hero](../Hero) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Settlement](../Settlement) · [MobileParty](../MobileParty) · [FactionManager](../FactionManager) · [AlternativeSolutionScaleFlag](../AlternativeSolutionScaleFlag)
- 真实使用样例：[ArmyNeedsSuppliesIssue](../ArmyNeedsSuppliesIssue) · [LandLordTheArtOfTheTradeIssue](../LandLordTheArtOfTheTradeIssue)
- 跨顶级：[SkillObject](../../core-extra/SkillObject)
