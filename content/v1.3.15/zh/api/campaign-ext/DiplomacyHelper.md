---
title: "DiplomacyHelper"
description: "只读的外交查询工具：战争缘由、战俘、玩家停战状态——静态 Helpers 命名空间对外交立场与日志数据的门面。"
---
# DiplomacyHelper

**Namespace:** `Helpers`
**Module:** Helpers（TaleWorlds.CampaignSystem 程序集内）
**Type:** `public static class DiplomacyHelper`
**Base:** 无（静态类）
**Source:** `TaleWorlds.CampaignSystem/Helpers/DiplomacyHelper.cs`

## 概述

`DiplomacyHelper` 是一个静态查询门面，专门回答外交界面反复要问的那几个问题：*这场仗为什么打起来、我们在和谁打、我们抓了谁、玩家此刻是否被停战锁住。* 它只有五个公开方法且完全无状态。所有返回值都是当场从 `Campaign.Current.LogEntryHistory`、`IFaction.AliveLords`、`StanceLink.WarStartDate` 以及英雄的 `NotAttackableByPlayerUntilTime` 字段推导出来的——不做任何缓存，因此答案永远和当前战役 tick 一样新。

其中三个是纯谓词（`IsWarCausedByPlayer`、`IsSameFactionAndNotEliminated`、`DidMainHeroSwownNotToAttackFaction`），一个遍历战争日志历史（`GetLogsForWar`），还有一个遍历领主列表来拼出战俘名册（`GetPrisonersOfWarTakenByFaction`）。注意这个类位于裸的 `Helpers` 命名空间，而**不是** `TaleWorlds.CampaignSystem`，所以必须写 `using Helpers;`——这个细节会咬到每一个想当然以为命名空间是嵌套结构的 mod。

## 心智模型

把它当成**外交立场/日志模型上的只读透镜，而不是一台外交引擎**：

- **它从不修改状态。** 没有 `SetStance`，也没有 `DeclareWar`。想改变关系要走 `*Action.Apply` 这条路——比如 [DeclareWarAction](../DeclareWarAction/)——改完之后这些查询立刻反映新状态，因为它们读的是活数据。
- **它依赖世界状态。** `IsWarCausedByPlayer` 会碰 `Hero.MainHero.MapFaction` 和 `Campaign.Current.Models.CrimeModel`；`GetLogsForWar` 会碰 `Campaign.Current.LogEntryHistory`。在没有加载战役的上下文里调用会抛异常，而不是返回默认值。如果你的代码也会在菜单或编辑器里跑，请加 `Campaign.Current != null` 保护。
- **mod 里的典型调用顺序：** 一个战役 Behavior 订阅 [CampaignEvents](../CampaignEvents/)（每日 tick 或宣战事件），然后调某个 helper 决定要显示什么；另外外交界面在渲染时调同一个 helper。没有注册步骤，也没有拆卸步骤——不需要往 starter 里加任何东西。
- **`GetLogsForWar` 倒序遍历，返回最新在前。** 它从 `Campaign.Current.LogEntryHistory.GameActionLogs` 的末尾往前迭代，保留游戏时间在 `stance.WarStartDate` 之后（含）**且**实现了 `IWarLog`、并且 `IsRelatedToWar(stance, out faction1, out faction2)` 返回 true 的条目。那两个 out 参数告诉你这条具体日志涉及的是哪两个派系。
- **坑：`IsWarCausedByPlayer` 对未处理的枚举值返回 `false`，** 包括未来版本新增 `DeclareWarDetail` 成员时的 default 分支。把 `false` 理解成"不可归因于玩家"，而不是"玩家没有责任"。
- **坑：`GetPrisonersOfWarTakenByFaction` 只遍历 `prisonerFaction.AliveLords`。** 一个是囚犯但不是领主的平民贵族、民兵英雄，永远不会被返回，哪怕他此刻真的关在抓他的那方牢房里。

### 何时使用

**使用 `DiplomacyHelper` 的场景：**
- 你需要在 UI 文本里向玩家解释一场战争：把日志历史过滤到与某个具体 [StanceLink](../StanceLink/) 相关的条目。
- 你需要判断这场仗该不该算在玩家头上，用于你自己的任务目标或声望惩罚。
- 你需要一方扣着另一方哪些领主，以实现赎囚或换俘功能。
- 你需要一个不会在 null 或已灭亡派系上翻车的"同派系且仍存活"比较。

**不要用 `DiplomacyHelper` 的场景：**
- 你想结束或开启战争。请用对应的 `*Action` 类；这些 helper 只是读侧。
- 你想要完整的关系图。枚举每一条立场链接请用 [FactionHelper](../FactionHelper/) 的 `GetStances`；`DiplomacyHelper` 刻意只暴露你手里已经持有的那一条立场。
- 你想要玩家的参战资格。那是 `FactionHelper` 上的 `CanPlayerOfferVassalage` / `CanPlayerOfferMercenaryService`，不是 `IsWarCausedByPlayer`。
- 你以为 `DidMainHeroSwownNotToAttackFaction` 是通用的停战查询——它只覆盖由 `NotAttackableByPlayerUntilTime` 驱动的"敌人不可攻击"提示状态。

## 依赖关系

- [StanceLink](../StanceLink/) — `GetLogsForWar` 接收其中一个，并读它的 `WarStartDate` 作为时间下界。
- [DeclareWarAction](../DeclareWarAction/) — 提供 `IsWarCausedByPlayer` 用来 switch 的 `DeclareWarDetail` 枚举；所有战争变更必须经由该 action。
- [CrimeModel](../CrimeModel/) — `IsWarCausedByPlayer` 会把 `faction1.MainHeroCrimeRating` 与 `CrimeModel.DeclareWarCrimeRatingThreshold` 比较。
- [FactionHelper](../FactionHelper/) — 同一批静态门面里的兄弟类，负责战力比、潜在开战对象与效忠资格。
- [LogEntry](../LogEntry/) 与战役日志历史 — `GetLogsForWar` 过滤的是 `Campaign.Current.LogEntryHistory.GameActionLogs`。
- [EncounterManager](../EncounterManager/) — 大多数战争日志条目所描述的战斗与地图事件就源自它，也通常是你想把一场战争关联过去的东西。
- [Hero](../../campaign/Hero/) — `Hero.MainHero`、`AliveLords`、`MapFaction`、`MainHeroCrimeRating` 全是输入。
- [CampaignGameStarter](../CampaignGameStarter/) — 你在那里注册真正在运行期调用本 helper 的那个 Behavior。
- [Campaign](../../campaign/Campaign/) — 每个方法背后的活读取都是 `Campaign.Current.LogEntryHistory` 与 `Campaign.Current.Models`。
- [Kingdom](../../campaign/Kingdom/) — 被查询立场和领主的具体 `IFaction` 实现。

## 主要成员

#### `public static bool IsWarCausedByPlayer(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail declareWarDetail)`

按原因逐条判断某个 `DeclareWarDetail` 是否该归咎于玩家：
- `CausedByPlayerHostility` → 恒为 `true`（直接挑衅）。
- `CausedByKingdomDecision` → 仅当 `faction1` 是玩家的 map faction **且**该派系领袖是玩家时为 `true`。
- `CausedByCrimeRatingChange` → 仅当 `faction2` 是玩家的 map faction **且** `faction1.MainHeroCrimeRating` 超过 `Campaign.Current.Models.CrimeModel.DeclareWarCrimeRatingThreshold` 时为 `true`。
- `CausedByKingdomCreation` → 仅当 `faction1` 是玩家的 map faction 时为 `true`。
- **返回值语义：** `false` 表示"按这条规则不可归因于玩家"。它**不等于**玩家毫无干系，同时也是本版本未处理任何枚举值时会得到的答案。
- **参数顺序有讲究：** 在决策/建国/犯罪三种情形下 `faction1` 是侵略方，而犯罪情形下玩家的派系是 `faction2`。传反了只会静默返回 `false`。
- **null 隐患：** 犯罪分支会解引用 `faction1.MainHeroCrimeRating` 且不做判空；`faction1` 为 null 时抛异常。

#### `public static bool IsSameFactionAndNotEliminated(IFaction faction1, IFaction faction2)`

对 null 安全的"这两个确实是同一个派系对象，而且它还活着"的检查。
- **返回值语义：** 输入为 null 返回 `false`；两个引用不同返回 `false`；`faction1.IsEliminated` **或** `faction2.IsEliminated` 任一为真返回 `false`。
- **用途：** 过滤外交界面列表。因为它按引用比较（`IFaction` 上的 `==` 对游戏派系对象来说是引用同一），所以两个包着相同文化的不同 `Kingdom` 实例**不**算同一派系。
- **说明：** 尽管相等判断已经保证两者是同一个对象，两个参数仍然都被检查 `IsEliminated`；这是防御性写法，不是第二个条件。

#### `public static List<ValueTuple<LogEntry, IFaction, IFaction>> GetLogsForWar(StanceLink stance)`

收集与某场战争相关的全部日志条目。
- **算法：** 从 `stance.WarStartDate` 起算；从 `Campaign.Current.LogEntryHistory.GameActionLogs` 的最后一个下标一路往前遍历到 0；保留那些 `GameTime.NumTicks >= warStartDate.NumTicks` **且**条目 `is IWarLog` **且** `warLog.IsRelatedToWar(stance, out faction1, out faction2)` 返回 true 的条目；把 `(logEntry, faction1, faction2)` 追加进去。
- **返回值语义：** 一个全新的 `List`，最新在前。当立场处于和平、`WarStartDate` 为 null、或没有任何条目类型为该战争实现 `IWarLog` 时返回空列表（绝不是 `null`）。
- **开销：** 每次调用都对整份日志历史做 O(n)。如果你在渲染可滚动列表，请按立场缓存结果；绝不要放进逐帧的绘制循环里。
- **坑：** 同一对派系之间**更早**那场战争的条目会被 `WarStartDate` 下界排除掉，所以重新开战就会重置窗口。而和平之后仍然提到这两个派系的条目会被**保留**，因为过滤器只有时间下界，没有上界。

#### `public static List<Hero> GetPrisonersOfWarTakenByFaction(IFaction capturerFaction, IFaction prisonerFaction)`

列出 `prisonerFaction` 当前被 `capturerFaction` 关押的领主。
- **算法：** 遍历 `prisonerFaction.AliveLords`；保留 `IsPrisoner` 为真的英雄；把 `hero.PartyBelongedToAsPrisoner?.MapFaction` 与 `capturerFaction` 比较（对 party 做了 null 安全处理，但**对两个派系本身没有**）。
- **返回值语义：** 一个全新的 `List<Hero>`；没有匹配时为空。两个派系任一为 null 都会在 `.AliveLords` 处抛异常。
- **坑：** 死亡领主被 `AliveLords` 排除，非领主囚犯被完全排除。两者都不会在之后被过滤回来。
- **用途：** 赎囚界面的原材料。定价请自行用 `Hero.Gold` 或你自己的每英雄价格模型——这个方法刻意不做任何估价。

#### `public static bool DidMainHeroSwownNotToAttackFaction(IFaction faction, out TextObject explanation)`

检查"你现在还不能打这个"的闸门。
- **算法：** 当 `faction.NotAttackableByPlayerUntilTime.IsFuture` 为真时返回 `true`，并把 `explanation` 设为本地化的 `str_enemy_not_attackable_tooltip` 文本；否则把 `explanation = null` 并返回 `false`。
- **返回值语义：** `out` 参数是获得原因的**唯一**通道。忽略它、只按 bool 分支，会给玩家一个静默禁用、且毫无解释的按钮。
- **坑：** 源码里的拼写就是 `DidMainHeroSwownNotToAttackFaction`（"Sworn" 少了一个 n）。必须照原样调用，否则是编译错误而不是静默失败。
- **坑：** `false` 路径上 `explanation` 为 null。任何无条件渲染 `explanation` 的代码都会渲染出空字符串。
- **坑：** 它只考虑**主英雄**。受停战约束的封臣/ clan 成员英雄不在覆盖范围内。

## 使用示例

### 示例 1 — 为外交界面构建战争编年史

```csharp
public List<string> BuildWarChronicle(StanceLink stance)
{
    // 最新在前，且已经按 stance.WarStartDate 限定了窗口。
    var entries = DiplomacyHelper.GetLogsForWar(stance);
    var lines = new List<string>();
    foreach (var (logEntry, aggressor, defender) in entries)
    {
        if (!DiplomacyHelper.IsSameFactionAndNotEliminated(aggressor, defender))
        {
            continue; // 涉及已灭亡派系的条目无法展示
        }
        lines.Add($"{aggressor.Name} vs {defender.Name}: {logEntry.LogEventText}");
    }
    return lines;
}
```

### 示例 2 — 只在游戏认为玩家有责时才追究玩家

```csharp
public bool ShouldPlayerFeelGuilty(IFaction aggressor, IFaction defender,
                                   DeclareWarAction.DeclareWarDetail detail)
{
    // 注意参数顺序：四个分支中有三个把 faction1 当作侵略方。
    return DiplomacyHelper.IsWarCausedByPlayer(aggressor, defender, detail);
}
```

### 示例 3 — 用停战提示给赎囚界面加闸门

```csharp
public string TryStartRansom(IFaction capturerFaction, IFaction prisonerFaction)
{
    // out 参数是拿到原因字符串的唯一途径。
    if (DiplomacyHelper.DidMainHeroSwownNotToAttackFaction(capturerFaction, out var explanation))
    {
        return explanation.ToString(); // 本地化提示文本，可原样展示
    }

    var prisoners = DiplomacyHelper.GetPrisonersOfWarTakenByFaction(capturerFaction, prisonerFaction);
    return $"{prisoners.Count} captive lord(s).";
}
```

### 示例 4 — 订阅战争事件并记录相关条目

```csharp
public class WarChronicleBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnSettlementLeftEvent.AddNonSerializedListener(this, OnSettlementLeft);
    }

    private void OnSettlementLeft(Settlement settlement, bool seenByPlayer)
    {
        var stance = settlement.MapFaction?.GetStanceWith(Hero.MainHero.MapFaction);
        if (stance == null)
        {
            return;
        }
        foreach (var entry in DiplomacyHelper.GetLogsForWar(stance))
        {
            Debug.Print($"WAR: {entry.Item1.LogEventText} between {entry.Item2.Name} and {entry.Item3.Name}");
        }
    }
}
```

## 风险与崩溃边界

- **硬依赖已加载的战役。** `GetLogsForWar` 会解引用 `Campaign.Current.LogEntryHistory`，`IsWarCausedByPlayer` 会解引用 `Campaign.Current.Models.CrimeModel`。在角色创建菜单、百科预览或编辑器里这些都还没初始化，你会拿到 `NullReferenceException`。任何也会在战役之外运行的代码都要先判 `Campaign.Current != null`。
- **对 null 派系的容忍度并不一致。** 只有 `IsSameFactionAndNotEliminated` 是 null 安全的。`IsWarCausedByPlayer` 在多数分支解引用 `faction1`/`faction2`，`GetPrisonersOfWarTakenByFaction` 一上来就解引用两者，而 `DidMainHeroSwownNotToAttackFaction` 解引用 `faction`。派系会在战役中途增加或消失；请每次调用都重新解析，不要跨王国合并或 clan 变王国的时机缓存 `IFaction`。
- **跨域依赖：** 这个类虽然位于 `TaleWorlds.CampaignSystem` 内的 `Helpers` 命名空间，却伸手伸进了 `TaleWorlds.Core`（`Hero`、`Campaign`、`GameTexts`）和 `TaleWorlds.Localization`（`TextObject`）。它还返回 `TextObject`，所以你引入的程序集引用必须带上 `TaleWorlds.Localization`，否则首次调用时得到的是加载期 `FileNotFoundException`，而不是编译错误。
- **加载顺序：** 类是 `static` 且没有初始化状态，所以本身没有顺序问题——但它的**输入**对顺序敏感。某场战争的日志只有在战争通过 action 宣战之后才存在；对处于和平的立场调 `GetLogsForWar` 返回空而不是抛异常，这很容易被误读成"没有数据"，而真实含义是"没有战争"。
- **存档序列化：** 这些方法都不触碰被保存的状态，也都不适合在 `SyncData` 重写里调用——在所有代码路径上 `Campaign.Current.LogEntryHistory` 都不保证在存档遍历期间有效。请从 Behavior 逻辑里调用，绝不要从持久化回调里调用。
- **ID 稳定性：** 结果以对象同一性而非字符串 id 为键。战役途中一个 clan 被并入王国会改变它的 `MapFaction`，于是昨天抓到的战俘今天可能就不再匹配 `GetPrisonersOfWarTakenByFaction` 的结果。不要跨王国 formation 缓存结果。
- **枚举可扩展性：** `IsWarCausedByPlayer` 没有 `default` 分支，对任何未处理的值返回 `false`。未来游戏版本新增的 `DeclareWarDetail` 成员会被静默报告成"不是玩家的错"。如果你的 mod 依赖这个判定，请同时自己处理原始的 `declareWarDetail` 值。
- **本地化耦合：** `DidMainHeroSwownNotToAttackFaction` 硬编码了文本 id `str_enemy_not_attackable_tooltip`。删掉该 key 的翻译或 DLC 会得到一个坏掉的文本对象，而不是异常。

## 跨版本提示

- **v1.3.x（本页）：** 上述五个公开方法就是完整表面。`DidMainHeroSwownNotToAttackFaction` 保留其历史遗留的拼写错误，`GetLogsForWar` 返回 `List<ValueTuple<LogEntry, IFaction, IFaction>>`。
- **v1.4.x：** 未变。`Helpers` 命名空间这一怪癖被保留下来，因此仍然需要 `using Helpers;`；把这个类挪走对所有现存 mod 都是破坏性变更。
- **v1.5.x：** 依然没有任何修改状态的成员。现实中的变化是新增 `DeclareWarDetail` 枚举值；请对该枚举做防御性分支，而不是假定只有四种情形。

## 参见

- ↑ 父级目录：[Campaign-Ext API 索引](./)
- ↔ 同级：[FactionHelper](../FactionHelper/) — 战力比、潜在开战对象、效忠资格
- ↔ 同级：[StanceLink](../StanceLink/) — `GetLogsForWar` 的过滤对象
- ↔ 同级：[DeclareWarAction](../DeclareWarAction/) — 所有战争变更的写侧
- ↔ 同级：[CrimeModel](../CrimeModel/) — 让犯罪值成为开战原因的阈值
- ↔ 同级：[EncounterManager](../EncounterManager/) — 多数战争日志所描述的战斗
- ↔ 同级：[HeroHelper](../HeroHelper/) — 同一命名空间里的另一个英雄侧静态门面
- ↑ 战役世界：[Campaign](../../campaign/Campaign/)
- ↑ 英雄：[Hero](../../campaign/Hero/)