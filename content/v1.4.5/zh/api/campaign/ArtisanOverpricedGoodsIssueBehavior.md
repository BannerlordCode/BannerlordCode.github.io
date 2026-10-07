---
title: "ArtisanOverpricedGoodsIssueBehavior"
description: "「原料被本地商人联手抬价」问题行为的注册器：订阅 OnCheckForIssueEvent，在「工匠 + 城镇 + 存在冷血商人 + 六种原材料中任一价格指数 > 2」时投递潜在问题，并携带「反派人选 + 商品」键值对。"
---

# ArtisanOverpricedGoodsIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanOverpricedGoodsIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanOverpricedGoodsIssueBehavior.cs`

## 概述

`ArtisanOverpricedGoodsIssueBehavior` 是问题系统的第二个「**带上下文载荷**」的注册器。它与同层的 [ArmyNeedsSuppliesIssueBehavior](../ArmyNeedsSuppliesIssueBehavior) 最大的不同是：`OnCheckForIssue` 在条件成立时会往 `PotentialIssueData` 里塞一个 **`KeyValuePair<Hero, ItemObject>`**，把「哪个商人是反派人」和「哪种原材料被抬价」当场定下来。

```csharp
KeyValuePair<Hero, ItemObject> keyValuePair = new KeyValuePair<Hero, ItemObject>(antagonistMerchant, requestedItem);
Campaign.Current.IssueManager.AddPotentialIssueData(
    hero, new PotentialIssueData(OnStartIssue, typeof(ArtisanOverpricedGoodsIssue), IssueBase.IssueFrequency.Common, keyValuePair));
```

`OnStartIssue` 在稍后被调用时把 `pid.RelatedObject` 强转回 `KeyValuePair<Hero, ItemObject>`，再喂给构造器。**这是整个问题系统里「触发时收集参数」的标准范式**，另一个采用它的是 `ArmyNeedsSuppliesIssueBehavior`（但它不带载荷）。

触发条件由三个独立判定串成（`ConditionsHold`）：

1. **发起者在城镇里**：`IssueOwner.CurrentSettlement != null && IssueOwner.CurrentSettlement.IsTown`
2. **发起者是工匠**：`IssueOwner.IsArtisan`（等价于 `Occupation == Occupation.Artisan`）
3. **镇上有反派人**：`GetAntagonistMerchant` 从 `CurrentSettlement.Notables` 里随机挑一个 `x != IssueOwner && x.IsMerchant && x.GetTraitLevel(DefaultTraits.Mercy) <= 0 && x.CanHaveCampaignIssues()` 的英雄——**必须是冷血的**（仁慈 ≤ 0）
4. **六种原材料中至少一种价格指数 > 2**：`PossibleRequestedItems` 是 `cow / sheep / wool / iron / leather / hardwood` 六个硬编码 id，价格判定是 `IssueOwner.CurrentSettlement.Town.GetItemCategoryPriceIndex(item.ItemCategory) > 2f`

## 心智模型

把它当成**「问题系统的插槽 + 一次性的参数快照」**就对了。

- **behavior 只投递，问题本身由嵌套类实现。** 有效代码不到 70 行（776 行里其余是三个嵌套类）。注册点在 `SandBoxManager.cs:164`。
- **`OnCheckForIssue` 的两个分支载荷不同。** 成立时传 `KeyValuePair<Hero, ItemObject>`；不成立时传 `new PotentialIssueData(typeof(ArtisanOverpricedGoodsIssue), IssueBase.IssueFrequency.Common)`——**只有类型没有工厂也没有载荷**。第二个分支同样重要：它告诉 IssueManager 这类问题存在但这位英雄不合格。
- **`PossibleRequestedItems` 是一个 `yield return` 属性，每次枚举都重新跑 6 次 `MBObjectManager.Instance.GetObject<ItemObject>(id)`。** 六个 id 全是硬编码字面串：`cow`、`sheep`、`wool`、`iron`、`leather`、`hardwood`。**mod 想加第七种原材料必须覆写整个 behavior**——这个属性是 `private static`，无法从外部扩展。
- **阈值 2 是硬编码在两处的。** `ConditionsHold` 里写 `> 2f`（`ArtisanOverpricedGoodsIssueBehavior.cs:759`），存活条件 `IssueStayAliveConditions` 里写 `> 1.8f`（`:290`），还有一个未被使用的 `private const float HighestPriceIndexAtTown = 2f;`（`:706`，**死代码**）。**触发比存活更严**，所以问题一旦发起就很难自己失效。
- **需求量与赏金由「物品价值」倒推，不是固定值。** `CalculateTradeGoodsAmountAndReward()`（`:375-379`）先算 `RequestedTradeGoodAmount = MathF.Max((int)(10000f / _requestedTradeGood.Value * IssueDifficultyMultiplier), 1)`——**越便宜的原材料要的数量越多**；再算 `_goldReward = (int)(QuestHelper.GetAveragePriceOfItemInTheWorld(_requestedTradeGood) * 1.5f * RequestedTradeGoodAmount)`。
- **`OnGameLoad` 会补算缺失的数值。** `:381-387` 里如果 `RequestedTradeGoodAmount == 0 || _goldReward == 0` 就重跑 `CalculateTradeGoodsAmountAndReward()`。这是为**旧存档没有这两个字段**准备的兼容路径。
- **`IssueStayAliveConditions` 要求反派人仍在同一座城。** `:288-295`：价格指数 > 1.8 **且** `CounterOfferHero.IsActive` **且** `CounterOfferHero.CurrentSettlement == IssueSettlement`。**反派人离开城镇 = 问题自动消失。**

### 三个嵌套类型的分工

| 类型 | 基类 | 职责 | 存档 |
| --- | --- | --- | --- |
| `ArtisanOverpricedGoodsIssue` | [IssueBase](../IssueBase) | 问题本体：标题、简报、领主方案 / 委托方案 / 任务三种解法、赏金与数量计算、存活条件 | `SaveableTypeDefiner` id **470000** 的类型 1 |
| `ArtisanOverpricedGoodsIssueQuest` | [QuestBase](../QuestBase) | 30 天运送任务、与商人的对峙对话、部分 / 全额交付 | 同一 definer 的类型 2 |
| `ArtisanOverpricedGoodsIssueTypeDefiner` | `SaveableTypeDefiner` | 存档 id 映射，构造器写死 `base(470000)` | 自身不入存档 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | 唯一事件入口，**只订阅一条**：`CampaignEvents.OnCheckForIssueEvent → OnCheckForIssue`（`ArtisanOverpricedGoodsIssueBehavior.cs:721-724`）。**与 `ArmyNeedsSuppliesIssueBehavior` 不同，它不监听 `ArmyDispersed`**——这个问题与军团无关。 |
| `OnCheckForIssue(Hero hero)` | `public void OnCheckForIssue(Hero hero)` | 触发判定。成立时构造 `KeyValuePair<Hero, ItemObject>(antagonistMerchant, requestedItem)` 并连同工厂委托一起投递；不成立时投递只有类型的 `PotentialIssueData`（`:730-741`）。**载荷在这一刻被固化**——反派人与商品在投递瞬间定死，之后反派人离镇不会改写已存在的问题。 |
| `ConditionsHold(Hero IssueOwner, out Hero antagonistMerchant, out ItemObject requestedItem)` | `private bool ConditionsHold(Hero IssueOwner, out Hero antagonistMerchant, out ItemObject requestedItem)` | 四步串行判定，两个 `out` 参数**只在成功时才有意义**（`:748-769`）。第一步就要求城镇 + 工匠，第二步要冷血商人，第三步遍历 `PossibleRequestedItems` 找第一个价格指数 > 2 的。**任何一步失败都返回 false 且 `out` 为 null。** |
| `GetAntagonistMerchant(Hero issueOwner)` | `private Hero GetAntagonistMerchant(Hero issueOwner)` | 从镇上的 `Notables` 里**随机**（`GetRandomElementWithPredicate`）挑一个冷血商人（`:743-746`）。谓词是 `x != issueOwner && x.IsMerchant && x.GetTraitLevel(DefaultTraits.Mercy) <= 0 && x.CanHaveCampaignIssues()`。**冷血是硬条件**——一个仁慈的商人永远不会被选为反派人。 |
| `PossibleRequestedItems` | `private static IEnumerable<ItemObject> PossibleRequestedItems` | **六个硬编码原材料 id 的 `yield return` 属性**：`cow`、`sheep`、`wool`、`iron`、`leather`、`hardwood`（`:708-719`）。**每次枚举重跑 6 次 `MBObjectManager.Instance.GetObject<ItemObject>`**，而且因为是 `private static`，mod 无法从外部扩展这张表。 |
| `OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | `private IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | 工厂委托。**把 `pid.RelatedObject` 强转回 `KeyValuePair<Hero, ItemObject>` 再传给构造器**（`:771-775`）。**强转失败（载荷类型不符）会直接抛 `InvalidCastException`**——这是这条链路上唯一的类型假设。 |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **空实现**（`:726-728`）。所有持久状态都在被注册的 Issue / Quest 实例里。 |
| `ArtisanOverpricedGoodsIssue.IssueStayAliveConditions()` | `public override bool IssueStayAliveConditions()` | 存活判定：价格指数 **> 1.8**（比触发时的 2 更宽松）、`CounterOfferHero.IsActive`、且 `CounterOfferHero.CurrentSettlement == IssueSettlement`（`:288-295`）。**反派人离镇或死亡即问题消失。** |
| `ArtisanOverpricedGoodsIssue.CalculateTradeGoodsAmountAndReward()` | `private void CalculateTradeGoodsAmountAndReward()` | **需求量与赏金的唯一计算处**（`:375-379`）。数量 = `MathF.Max((int)(10000f / 商品价值 * 难度系数), 1)`；赏金 = `平均世界价 × 1.5 × 数量`。**越便宜的原材料要求数量越多，但赏金随世界均价浮动**——所以换一张地图，同一问题的赏金可能不同。 |
| `ArtisanOverpricedGoodsIssue.OnGameLoad()` | `protected override void OnGameLoad()` | 读档补算：`if (RequestedTradeGoodAmount == 0 || _goldReward == 0) CalculateTradeGoodsAmountAndReward();`（`:381-387`）。这是**为旧存档没有这两个字段准备的兼容路径**，不是 bug。 |
| `ArtisanOverpricedGoodsIssue.GenerateIssueQuest(string questId)` | `protected override QuestBase GenerateIssueQuest(string questId)` | 生成 30 天任务：`new ArtisanOverpricedGoodsIssueQuest(questId, IssueOwner, CampaignTime.DaysFromNow(30f), _requestedTradeGood, RewardGold, RequestedTradeGoodAmount, CounterOfferHero)`（`:393-396`）。**注意 `counterOfferHero` 参数在任务构造器签名里存在（`:515`）但函数体完全没用它**——反派人信息只在问题层，不传给任务。 |

## 怎么用

这是问题系统里「触发时收集参数」的标准范式示范：`OnCheckForIssue` 判定成立时会把「哪个商人是反派人」和「哪种原材料被抬价」当场定下来，塞进载荷里随存档一起走。

**怎么拿到它**：注册点是 `SandBoxManager.cs:164` 的 `gameStarter.AddBehavior(new ArtisanOverpricedGoodsIssueBehavior())`，声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanOverpricedGoodsIssueBehavior.cs:19`，问题本体是同文件 `:21` 的嵌套 `ArtisanOverpricedGoodsIssue : IssueBase`。事件订阅在 `ArtisanOverpricedGoodsIssueBehavior.cs:723`，投递入口是 `IssueManager.cs:215` 的 `AddPotentialIssueData`，载荷构造在 `PotentialIssueData.cs:21`。

带载荷的派发形状比无参派发多一步：投递时造一个 `KeyValuePair`，`OnStartIssue` 里再把它从 `pid.RelatedObject` 强转回来。你的 mod 抄这个形状时要连同 `in` 修饰一起抄——委托签名在 `PotentialIssueData.cs:7`。

```csharp
// 诊断用：遍历问题管理器里已激活的问题，看它落在哪个状态
IssueManager manager = Campaign.Current.IssueManager;
foreach (KeyValuePair<Hero, IssueBase> pair in manager.Issues)
{
    if (!(pair.Value is ArtisanOverpricedGoodsIssue)) continue;
    ArtisanOverpricedGoodsIssue concrete = (ArtisanOverpricedGoodsIssue)pair.Value;
    Debug.Print(pair.Key.Name + " 存活=" + concrete.IssueStayAliveConditions()
        + " 有替代解=" + concrete.IsThereAlternativeSolution
        + " 有领主解=" + concrete.IsThereLordSolution, 0);
    Debug.Print("无任务进行中=" + concrete.IsOngoingWithoutQuest
        + " 带任务=" + concrete.IsSolvingWithQuestSolution
        + " 截止=" + concrete.IssueDueTime, 0);
}
```

`IssueStayAliveConditions` 的覆写在 `ArtisanOverpricedGoodsIssueBehavior.cs:288`，`AlternativeSolutionCondition` 在 `:306`，两个能力开关是同文件 `:175` 与 `:177` 的表达式体属性。构造器在 `:271`，签名已经把三个参数拆开：`(Hero issueOwner, Hero counterOfferHero, ItemObject requestedTradeGood)`——这正是载荷携带的信息，行为侧在 `:771` 的 `OnStartIssue` 里做的是把它们重新装回构造器。

行为侧另外两个私有成员决定了「谁能被当成反派人」和「能要什么」：`GetAntagonistMerchant` 在 `ArtisanOverpricedGoodsIssueBehavior.cs:743`，`ConditionsHold` 在 `:748`，`PossibleRequestedItems` 在 `:708`，触发频率常量在 `:704`。这个类型和「卖不掉货」那个的最大差别就在这里：它的载荷会随存档一起走，所以目标商人即使在问题存活期内换了城也不会错位。

难度参数同样是「基础值 + 系数 × IssueDifficultyMultiplier」的形状：替代解人数在 `:39`，替代解时长在 `:41`，放大维度由 `:43` 的 `AlternativeSolutionScaleFlags` 决定；领主解所需影响力在 `:55`，同伴技能经验奖励在 `:220`。想调平衡就改这几个，而不是改行为侧的判定。

**最常见的坑**：行为上的 `SyncData` 是空的，不能挂需要持久化的字段。想改触发规则就得重写整个行为类，因为 `ConditionsHold`、`GetAntagonistMerchant`、`PossibleRequestedItems` 全是私有的。

## 真实示例

注册这个行为（形状照 `SandBoxManager.cs:164`）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.MountAndBlade;

public class MyIssuesBootstrap : MBSubModuleBase
{
    public override void OnGameInitializationStart()
    {
        base.OnGameInitializationStart();
        CampaignGameStarter starter = Campaign.Current.GetCampaignBehavior<CampaignGameStarter>();
        starter.AddBehavior(new ArtisanOverpricedGoodsIssueBehavior());
    }
}
```

复用官方触发条件做自己的筛选（官方判定是私有的，只能复刻）：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.Extensions;
using TaleWorlds.CampaignSystem.Settlements;

public static bool QualifiesForOverpricedGoods(Hero candidate)
{
    if (candidate == null || !candidate.IsArtisan || candidate.CurrentSettlement == null)
    {
        return false;
    }

    Settlement town = candidate.CurrentSettlement;
    if (!town.IsTown)
    {
        return false;
    }

    bool hasAntagonist = town.Notables.Any(x => x.CharacterObject.IsHero
        && x.CanHaveCampaignIssues()
        && x.CharacterObject.HeroObject != candidate
        && x.CharacterObject.HeroObject.IsMerchant
        && x.GetTraitLevel(DefaultTraits.Mercy) <= 0);

    if (!hasAntagonist)
    {
        return false;
    }

    foreach (string itemId in new string[] { "cow", "sheep", "wool", "iron", "leather", "hardwood" })
    {
        ItemObject item = MBObjectManager.Instance.GetObject<ItemObject>(itemId);
        if (item != null && town.Town.GetItemCategoryPriceIndex(item.ItemCategory) > 2f)
        {
            return true;
        }
    }

    return false;
}
```

检查某位工匠身上是否挂着这个问题（走 `Hero.Issue` 这条官方路径）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static string DescribeIssueOn(Hero artisan)
{
    if (artisan == null)
    {
        return "no hero";
    }

    IssueBase issue = artisan.Issue;
    if (issue is ArtisanOverpricedGoodsIssue)
    {
        return "overpriced goods, alive=" + issue.IssueStayAliveConditions();
    }

    return issue == null ? "no issue" : issue.GetType().Name;
}
```

自行投递一条带载荷的潜在问题（照 `OnCheckForIssue` 的形状手写触发）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static void FileOverpricedGoods(Hero artisan, Hero antagonist, ItemObject goods)
{
    if (Campaign.Current == null || artisan == null || antagonist == null || goods == null)
    {
        return;
    }

    KeyValuePair<Hero, ItemObject> payload = new KeyValuePair<Hero, ItemObject>(antagonist, goods);
    Campaign.Current.IssueManager.AddPotentialIssueData(
        artisan,
        new PotentialIssueData(typeof(ArtisanOverpricedGoodsIssue), IssueBase.IssueFrequency.Common, payload));
}
```

监听问题创建事件做自己的 UI 提示：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Issues;

public class MyIssueWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.OnNewIssueCreatedEvent.AddNonSerializedListener(this, OnNewIssueCreated);
        CampaignEvents.OnIssueUpdatedEvent.AddNonSerializedListener(this, OnIssueUpdated);
    }

    private void OnNewIssueCreated(IssueBase issue)
    {
        if (issue is ArtisanOverpricedGoodsIssue)
        {
            Debug.Print("an overpriced-goods issue appeared on " + issue.IssueOwner.Name.ToString(), 0);
        }
    }

    private void OnIssueUpdated(IssueBase issue, IssueBase.IssueUpdateDetails details, Hero issueSolver)
    {
        if (issue is ArtisanOverpricedGoodsIssue)
        {
            Debug.Print("overpriced-goods update = " + details, 0);
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 风险与边界

- **`SyncData` 是空的。** 行为上不能挂需要持久化的字段。想改触发规则就得重写整个 behavior，因为 `ConditionsHold` / `GetAntagonistMerchant` / `PossibleRequestedItems` 全是 `private`。
- **`PossibleRequestedItems` 只有六种原材料，且无法扩展。** 它是 `private static` 的 `yield return` 属性，`cow / sheep / wool / iron / leather / hardwood` 全硬编码。**mod 加第七种必须复制整个行为类。**
- **`PossibleRequestedItems` 每次枚举重跑 6 次 MBObjectManager 查询。** `ConditionsHold` 每小时对每个候选英雄调一次，这是一笔可测量的重复开销。
- **两个价格阈值不一致。** 触发用 `> 2f`（`:759`），存活用 `> 1.8f`（`:290`）。**这意味着问题一旦发起几乎不会自己消失**，唯一的消失途径是反派人离镇或死亡。
- **`HighestPriceIndexAtTown = 2f` 是死代码。** `:706` 定义了但 `ConditionsHold` 里写的是字面量 `2f`。别引用它。
- **反派人必须在 `Mercy <= 0`。** 一个镇子如果只有仁慈的商人，这个工匠永远触发不了这个问题——**哪怕物价指数高到 10**。
- **反派人是随机的。** `GetRandomElementWithPredicate` 的结果**在投递瞬间固化进载荷**，之后不会重选。所以同一个镇上两个工匠先后触发，可能选中不同的商人。
- **`OnStartIssue` 里的强转没有任何保护。** `(KeyValuePair<Hero, ItemObject>)pid.RelatedObject` 在载荷类型不符时抛 `InvalidCastException`。**如果你自己投递 `PotentialIssueData` 而忘了带 `KeyValuePair<Hero, ItemObject>` 载荷，问题一被抽中就会崩。**
- **`IssueStayAliveConditions` 会因反派人离镇而让问题消失。** 这条路径走 `IssueBase` 的存活检查，玩家看不到「问题被取消」的惩罚反馈，只是问题不见了。
- **`GenerateIssueQuest` 把 `counterOfferHero` 传进任务构造器但构造器不用。** `ArtisanOverpricedGoodsIssueQuest` 的构造器签名里有它（`:515`），函数体里没有引用。**别指望任务层能拿到反派人。**
- **`QuestHelper.GetAveragePriceOfItemInTheWorld` 让赏金随地图浮动。** 同一问题在不同世界平均价下赏金不同，**所以赏金不是存档无关的常数**。
- **`OnGameLoad` 的补算是静默的。** 读到 `RequestedTradeGoodAmount == 0` 就重算并覆盖——如果你刻意把它设成 0，读档后会被改回去。
- **存档 id 470000 硬编码。** `ArtisanOverpricedGoodsIssueTypeDefiner` 的构造器写死 `base(470000)`。**复制它会造成存档 id 冲突。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanOverpricedGoodsIssueBehavior.cs` 是 776 行原始源码（外层行为约 70 行 + 三个嵌套类）。跨版本比对时盯六点：存档 id `470000`、六种原材料 id 列表、价格阈值（触发 2 / 存活 1.8）、反派人的 `Mercy <= 0` 条件、`CalculateTradeGoodsAmountAndReward` 里的 10000 与 1.5 两个系数、以及 `OnStartIssue` 的 `KeyValuePair` 载荷形状。**载荷形状若改动，旧存档里已投递但未抽中的 `PotentialIssueData` 会在强转处崩。**

## 依赖关系

- 官方注册点：`SandBoxManager.cs:164` 的 `gameStarter.AddBehavior(new ArtisanOverpricedGoodsIssueBehavior());`，紧跟在 `ArtisanCantSellProductsAtAFairPriceIssueBehavior` 之后
- 问题子系统：[IssueManager](../IssueManager) 的 `AddPotentialIssueData(Hero, PotentialIssueData)` 是唯一输出通道；[PotentialIssueData](../PotentialIssueData) 的第四个参数就是本类型独有的载荷槽
- 问题基类：[IssueBase](../IssueBase) 提供 `IssueOwner` / `IssueSettlement` / `RewardGold` / `CompleteIssueWithStayAliveConditionsFailed()`
- 任务基类：[QuestBase](../QuestBase) 是嵌套 `ArtisanOverpricedGoodsIssueQuest` 的父类
- 价格模型：`Settlement.Town.GetItemCategoryPriceIndex(ItemCategory)` 是物价判定的唯一来源（`Settlements` 命名空间）
- 物品侧：[ItemObject](../../core-extra/ItemObject) 的 `Value`（决定需求量）与 `ItemCategory`（决定价格指数）——`CalculateTradeGoodsAmountAndReward` 两处都用
- 特质：[DefaultTraits](../DefaultTraits) 的 `Mercy` 是反派人筛选的硬条件
- 事件总线：[CampaignEvents](../CampaignEvents) 的 `OnCheckForIssueEvent`；问题侧还有 `OnNewIssueCreatedEvent` / `OnIssueUpdatedEvent`
- 存档：嵌套的 `ArtisanOverpricedGoodsIssueTypeDefiner` 用 `SaveableTypeDefiner` 把 Issue 与 Quest 注册为存档类型 1 / 2
- 桶首页：[campaign API 分区](../)
