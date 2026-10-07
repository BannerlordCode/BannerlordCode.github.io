---
title: "ArtisanCantSellProductsAtAFairPriceIssueBehavior"
description: "「本地法令让工匠卖不出价」问题行为的注册器：订阅 OnCheckForIssueEvent，在「工匠 + 镇上还有别的可提问题的商人 + 玩家主队 2.25 倍邻城距离内有可接问题的城镇」时投递潜在问题，构造器当场选好目标城镇 / 目标英雄 / 七种原料之一。"
---

# ArtisanCantSellProductsAtAFairPriceIssueBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class ArtisanCantSellProductsAtAFairPriceIssueBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs`

## 概述

`ArtisanCantSellProductsAtAFairPriceIssueBehavior` 是三个工匠问题行为里**唯一一个不在 `OnCheckForIssue` 里传载荷的**。它走的是「触发时无参，构造器里现选」的路线：

```csharp
public ArtisanCantSellProductsAtAFairPriceIssue(Hero issueOwner)
    : base(issueOwner, CampaignTime.DaysFromNow(30f))
{
    _targetSettlement = SelectTargetSettlement(issueOwner);
    _targetHero = _targetSettlement.Notables.GetRandomElementWithPredicate((Hero x) => x.CanHaveCampaignIssues());
    _rawMaterialsToBeDelivered = Campaign.Current.ObjectManager.GetObject<ItemObject>(_possibleDeliveryItems.GetRandomElement());
    CounterOfferHero = SelectCounterOfferHero(issueOwner);
}
```

也就是说**目标城镇、目标英雄、七种原材料之一、反派商人，全部在 Issue 构造器里一次性定死**。这与 [ArtisanOverpricedGoodsIssueBehavior](../ArtisanOverpricedGoodsIssueBehavior) 相反——后者在触发时用 `KeyValuePair<Hero, ItemObject>` 载荷把参数带过去。这个差别不是风格问题：**投递到抽中之间可能隔很多小时，前者会拿到"投递那一刻"的世界状态，后者也是**（两边都在定死参数），但**只有后者的载荷会随存档一起走，前者的四项是 `[SaveableField]` 存的**。

触发条件由 `ConditionsHold`（`:985-992`）两步串成：

1. `issueGiver.IsArtisan && SelectCounterOfferHero(issueGiver) != null` —— 工匠，且镇上还有一个**不是他本人、能提问题、是商人**的英雄
2. `SelectTargetSettlement(issueGiver) != null` —— 玩家主队附近有合适的目标城镇

## 心智模型

把它当成**「问题系统的插槽 + 一个四参数的一次性抽样器」**就对了。

- **behavior 只投递，有效代码不到 70 行。** 注册点在 `SandBoxManager.cs:163`，夹在 `ArmyNeedsSuppliesIssueBehavior` 与 `ArtisanOverpricedGoodsIssueBehavior` 之间。
- **`OnCheckForIssue` 两个分支都不带载荷。** 成立时传 `new PotentialIssueData(OnStartIssue, typeof(ArtisanCantSellProductsAtAFairPriceIssue), IssueBase.IssueFrequency.Common)`；不成立时只有类型。**参数全靠 `OnStartIssue` 里的 `new ArtisanCantSellProductsAtAFairPriceIssue(issueOwner)` 现场重选。**
- **`OnCheckForIssue` 会把选参数的计算跑一遍，然后 `OnStartIssue` 时再跑一遍。** `ConditionsHold` 内部调了 `SelectCounterOfferHero` 与 `SelectTargetSettlement`，`OnStartIssue` 构造器里又各调一次。**中间世界可能变了，两次结果可能不同**——这正是「无参派发」的代价。
- **目标城镇的判定半径随玩家家族的海上导航能力变化。** `SelectTargetSettlement`（`:999-1005`）：`navigationType = issueSettlement.OwnerClan.HasNavalNavigationCapability ? MobileParty.NavigationType.All : MobileParty.NavigationType.Default`；`maxDistance = Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType) * 2.25f`。然后用 `SettlementHelper.FindNearestSettlementToMobileParty(MobileParty.MainParty, navigationType, predicate)` 找最近的合格城镇——**中心点是玩家主队，不是工匠所在城镇**。
- **目标城镇必须满足四个条件。** 谓词是 `x.IsTown && x != issueSettlement && x.Notables.Any(y => y.CanHaveCampaignIssues()) && Campaign.Current.Models.MapDistanceModel.GetDistance(x, issueSettlement, isFromPort: false, isTargetingPort: false, navigationType) < maximumDistanceForSettlementSelection`。
- **目标英雄是随机的一个「能提问题的镇民」。** `_targetSettlement.Notables.GetRandomElementWithPredicate(x => x.CanHaveCampaignIssues())` —— **不判空**，所以一个「有镇民但没有一个能提问题」的城镇会导致 NRE。而 `CanHaveCampaignIssues()` 会被任务类 `OnHeroCanHaveCampaignIssuesInfoIsRequested` 主动关掉（见下）。
- **七种原材料是 `[CachedData]`，不进存档。** `_possibleDeliveryItems = new MBList<string> { "olives", "clay", "flax", "grape", "wool", "hardwood", "hides" }`。**这是唯一带 `[CachedData]` 标记的成员**——意思是它每次读档后重新初始化，而 `_rawMaterialsToBeDelivered`（`SaveableField(10)`）这个 `ItemObject` 才是真正存进存档的。
- **需求数量与赏金是难度系数的线性函数。** `RawMaterialCountToBeDelivered => (int)(60f * IssueDifficultyMultiplier)`；`RewardGold => (int)(500f + 1500f * IssueDifficultyMultiplier)`。**难度 1.0 时是 60 个原料、2000 金。**

### 三个嵌套类型的分工

| 类型 | 基类 | 职责 | 存档 |
| --- | --- | --- | --- |
| `ArtisanCantSellProductsAtAFairPriceIssue` | [IssueBase](../IssueBase) | 问题本体：标题、简报、领主 / 委托 / 任务三种解法、目标城镇与英雄、18 天任务期限 | `SaveableTypeDefiner` id **480000** 的类型 1 |
| `ArtisanCantSellProductsAtAFairPriceIssueQuest` | [QuestBase](../QuestBase) | 运送原料到目标城镇的对话与交付流程 | 同一 definer 的类型 2 |
| `ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner` | `SaveableTypeDefiner` | 存档 id 映射，构造器写死 `base(480000)` | 自身不入存档 |

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `RegisterEvents()` | `public override void RegisterEvents()` | 唯一事件入口，**只订阅一条**：`CampaignEvents.OnCheckForIssueEvent → OnCheckForIssue`（`ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs:968-971`）。**注意真正的 quest 类另有四条订阅**（`BeforeGameMenuOpenedEvent` / `HeroKilledEvent` / `OnClanChangedKingdomEvent` / `WarDeclared`），那些属于嵌套任务，不属于本行为。 |
| `OnCheckForIssue(Hero hero)` | `public void OnCheckForIssue(Hero hero)` | 两步判定后投递。成立时带 `OnStartIssue` 工厂，不成立时只有类型（`:973-983`）。**两个分支都不带载荷**——参数在 `OnStartIssue` 里现场重选。 |
| `ConditionsHold(Hero issueGiver)` | `private bool ConditionsHold(Hero issueGiver)` | 两步串行（`:985-992`）：工匠 + 镇上存在反派人；玩家主队附近存在目标城镇。**第二步会跑一次完整的距离查询**，这是本行为最贵的一步。 |
| `SelectCounterOfferHero(Hero issueGiver)` | `private static Hero SelectCounterOfferHero(Hero issueGiver)` | 从工匠所在城镇的 `Notables` 里取**第一个**（`FirstOrDefault`，不是随机）满足 `x.CharacterObject.IsHero && x.CanHaveCampaignIssues() && x.CharacterObject.HeroObject != issueGiver && x.CharacterObject.HeroObject.IsMerchant` 的英雄（`:994-997`）。**注意这里比较的是 `x.CharacterObject.HeroObject != issueGiver`——两层转换。** |
| `SelectTargetSettlement(Hero issueGiver)` | `private static Settlement SelectTargetSettlement(Hero issueGiver)` | 选目标城镇（`:999-1005`）。**以玩家主队为中心**，不是以工匠为中心。距离上限 = `GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navigationType) * 2.25f`，而 `navigationType` 由 `issueSettlement.OwnerClan.HasNavalNavigationCapability` 决定。谓词要求城镇、有至少一个能提问题的镇民、且与工匠城镇的距离在上限内。**`issueSettlement.OwnerClan` 为 null 会 NRE。** |
| `OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | `private IssueBase OnStartIssue(in PotentialIssueData pid, Hero issueOwner)` | 工厂委托，**不读 `pid.RelatedObject`**，直接 `new ArtisanCantSellProductsAtAFairPriceIssue(issueOwner)`（`:1007-1010`）。**与 `ArtisanOverpricedGoodsIssueBehavior` 的强转版不同，这里没有类型假设，因此也没有 `InvalidCastException` 风险。** |
| `SyncData(IDataStore dataStore)` | `public override void SyncData(IDataStore dataStore)` | **空实现**（`:1012-1014`）。所有持久状态在被注册的 Issue / Quest 实例里。 |
| `_possibleDeliveryItems` | `[CachedData] private readonly MBList<string> _possibleDeliveryItems` | 七种可交付原材料的 id 表：`olives`、`clay`、`flax`、`grape`、`wool`、`hardwood`、`hides`（`:33`）。**带 `[CachedData]` 标记，不进存档**——读档后重新初始化，而真正被存进存档的是 `_rawMaterialsToBeDelivered` 这个 `ItemObject`（`SaveableField(10)`）。 |
| `ArtisanCantSellProductsAtAFairPriceIssue` 构造器 | `public ArtisanCantSellProductsAtAFairPriceIssue(Hero issueOwner)` | **一次性定死四个参数**（`:257-265`）：目标城镇、随机目标英雄、随机一种原材料（`ObjectManager.GetObject<ItemObject>` 解析 id）、反派商人。**期限写死 30 天 `CampaignTime.DaysFromNow(30f)`。** |
| `ArtisanCantSellProductsAtAFairPriceIssue.IssueStayAliveConditions()` | `public override bool IssueStayAliveConditions()` | 存活判定（`:409-415`）：`CounterOfferHero != null && _targetHero.IsActive && CounterOfferHero.IsActive` 全部成立，且 `CounterOfferHero.CurrentSettlement == IssueSettlement`。**与 `ArtisanOverpricedGoodsIssueBehavior` 不同，它不检查任何价格指数**——只检查两边的活跃状态与位置。 |
| `ArtisanCantSellProductsAtAFairPriceIssue.GenerateIssueQuest(string questId)` | `protected override QuestBase GenerateIssueQuest(string questId)` | 生成 **18 天**任务（`:384-387`），传入目标城镇、原料、需求数量、赏金、目标英雄、反派商人。**注意期限 18 天与问题本身的 30 天不一致**——`IssueDuration = 30` 是死代码常量，真正生效的是这里的 `CampaignTime.DaysFromNow(18f)`。 |
| `ArtisanCantSellProductsAtAFairPriceIssueQuest.OnHeroCanHaveCampaignIssuesInfoIsRequested` | `public override void OnHeroCanHaveCampaignIssuesInfoIsRequested(Hero hero, ref bool result)` | **任务层的隐藏钩子**（`:862-868`）：`if (hero == _targetHero) result = false;`。它**主动把目标英雄排除在"可提问题的英雄"之外**，避免玩家在城镇里跟同一个人反复触发同类问题。**这条钩子在 1.4.5 里只有这个 issue 用。** |

## 怎么用

这是三个工匠问题行为里唯一一个不在触发时传载荷的，走的是「触发时无参、构造器里现选」的路线。目标城镇、目标英雄、七种原材料之一、反派商人，全部在 Issue 构造器里一次性定死。

**怎么拿到它**：注册点是 `SandBoxManager.cs:163` 的 `gameStarter.AddBehavior(new ArtisanCantSellProductsAtAFairPriceIssueBehavior())`，声明在 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Issues/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs:20`。问题本体是同文件 `:22` 的嵌套 `ArtisanCantSellProductsAtAFairPriceIssue : IssueBase`，`OnCheckForIssueEvent` 的订阅在 `ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs:970`。

理解「无参派发」的代价，最好的办法是把构造器里的四个 `Select*` 调用摊开看：它们各自都是私有方法，且至少有两个会被跑两遍。

```csharp
// 诊断用：走一遍已激活问题的状态，验证行为层确实挂了钩子
IssueManager manager = Campaign.Current.IssueManager;
foreach (KeyValuePair<Hero, IssueBase> pair in manager.Issues)
{
    if (!(pair.Value is ArtisanCantSellProductsAtAFairPriceIssue)) continue;
    ArtisanCantSellProductsAtAFairPriceIssue concrete = (ArtisanCantSellProductsAtAFairPriceIssue)pair.Value;
    Debug.Print(pair.Key.Name + " 存活条件=" + concrete.IssueStayAliveConditions(), 0);
    Debug.Print("无任务进行中=" + concrete.IsOngoingWithoutQuest
        + " 带任务=" + concrete.IsSolvingWithQuestSolution
        + " 截止=" + concrete.IssueDueTime, 0);
}
Debug.Print("行为已挂载，行为上的 SyncData 为空表示无持久字段", 0);
```

`IssueStayAliveConditions` 是 `IssueBase` 上的抽象方法，覆写点在同文件 `:155` 附近。构造器在 `ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs:257`，它内部依次调 `SelectTargetSettlement`（`:260`）、从 `_possibleDeliveryItems` 随机抽一项（`:262`，七种分别是橄榄、陶土、亚麻、葡萄、羊毛、硬木、生皮）、`SelectCounterOfferHero`（`:263`）。这套选择还会再在行为侧的 `OnCheckForIssue` 里跑一遍（`:987` 与 `:989`）。

所以这个类型的成本模型参数其实全在两个属性上：`AlternativeSolutionBaseNeededMenCount` 与 `AlternativeSolutionBaseDurationInDaysInternal` 都是「基础值 + 向上取整（系数 × IssueDifficultyMultiplier）」的形状，`AlternativeSolutionScaleFlags` 决定随难度放大的是时长还是人数。两个能力开关也都是硬编码的 `true`（`:78` 的 `IsThereAlternativeSolution` 与 `:80` 的 `IsThereLordSolution`），也就是说玩家始终同时有「派同伴」和「领主下令」两条解法。

它还有一个独立的问题类型定义器 `ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner : SaveableTypeDefiner`（`:952`），存档字段 id 分配在那个文件里，不在 behavior 上。`CounterOfferHero` 是 `IssueBase` 上的属性，这里覆写在 `:53`，在构造器里被赋值。

**最常见的坑**：触发判定会被跑两遍且两次结果可能不同。`ConditionsHold` 里已经调过一次选择目标城镇和反派商人的私有方法，`OnStartIssue` 的构造器里又调一次，投递到真正抽中之间可能隔很多小时，目标城镇那时可能已经易主。

## 真实示例

注册这个行为（形状照 `SandBoxManager.cs:163`）：

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
        starter.AddBehavior(new ArtisanCantSellProductsAtAFairPriceIssueBehavior());
    }
}
```

复用官方触发条件做自己的筛选（官方判定是私有的，只能复刻）：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

public static bool QualifiesForCantSell(Hero candidate)
{
    if (candidate == null || !candidate.IsArtisan || candidate.CurrentSettlement == null)
    {
        return false;
    }

    bool hasCounterOffer = candidate.CurrentSettlement.Notables.Any(x => x.CharacterObject.IsHero
        && x.CanHaveCampaignIssues()
        && x.CharacterObject.HeroObject != candidate
        && x.CharacterObject.HeroObject.IsMerchant);

    if (!hasCounterOffer)
    {
        return false;
    }

    MobileParty.NavigationType navType = candidate.CurrentSettlement.OwnerClan.HasNavalNavigationCapability
        ? MobileParty.NavigationType.All
        : MobileParty.NavigationType.Default;

    float maxDistance = Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(navType) * 2.25f;

    return SettlementHelper.FindNearestSettlementToMobileParty(MobileParty.MainParty, navType,
        (Settlement x) => x.IsTown
            && x != candidate.CurrentSettlement
            && x.Notables.Any((Hero y) => y.CanHaveCampaignIssues())
            && Campaign.Current.Models.MapDistanceModel.GetDistance(x, candidate.CurrentSettlement,
                isFromPort: false, isTargetingPort: false, navType) < maxDistance) != null;
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
    if (issue is ArtisanCantSellProductsAtAFairPriceIssue)
    {
        return "cant sell at a fair price, alive=" + issue.IssueStayAliveConditions();
    }

    return issue == null ? "no issue" : issue.GetType().Name;
}
```

自行构造一个 Issue 实例（复刻构造器的四步抽样）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Issues;

public static IssueBase BuildCantSellIssue(Hero artisan)
{
    if (Campaign.Current == null || artisan == null || !artisan.IsArtisan)
    {
        return null;
    }

    ArtisanCantSellProductsAtAFairPriceIssue issue = new ArtisanCantSellProductsAtAFairPriceIssue(artisan);
    Debug.Print("issue owner = " + issue.IssueOwner.Name.ToString()
        + " settlement = " + issue.IssueSettlement.Name.ToString(), 0);
    return issue;
}
```

用同样的 `ref bool` 钩子把自己关心的英雄从问题候选里剔除：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Extensions;

public class MyIssueFilter : CampaignBehaviorBase
{
    public Hero BlacklistedHero { get; set; }

    public override void RegisterEvents()
    {
        CampaignEvents.CanHaveCampaignIssuesEvent.AddNonSerializedListener(this, OnRequested);
    }

    private void OnRequested(Hero hero, ref bool result)
    {
        if (hero == this.BlacklistedHero)
        {
            result = false;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}
```

## 风险与边界

- **`SyncData` 是空的。** 行为上不能挂持久字段；改触发规则要重写整个 behavior，因为 `ConditionsHold` / `SelectCounterOfferHero` / `SelectTargetSettlement` 都是 `private`。
- **触发判定会被跑两遍，且两次结果可能不同。** `ConditionsHold` 里已经调过一次 `SelectCounterOfferHero` + `SelectTargetSettlement`，`OnStartIssue` 的构造器里又调一次。**投递到真正抽中之间可能隔很多小时，目标城镇可能已经易主。** 这是「无参派发」相对「带载荷派发」的结构性劣势。
- **`SelectTargetSettlement` 以玩家主队为中心，不以工匠为中心。** 所以玩家跑得越远，越容易找不到目标城镇——**这是官方设计（考验跑商），但也是最容易被误判成 bug 的地方。**
- **`SelectTargetSettlement` 会因 `issueSettlement.OwnerClan` 为 null 而 NRE。** 第一句就访问 `OwnerClan.HasNavalNavigationCapability`。玩家家族之外的城镇如果所属家族已解散，这里会炸。
- **目标城镇以工匠城镇为中心算半径、以玩家主队为中心找最近——两者混用。** `maxDistance` 里的导航能力来自**工匠城镇**的 `OwnerClan`，而 `FindNearestSettlementToMobileParty` 的起点是**玩家主队**。**海上 / 陆上能力不匹配的组合会得到很怪的候选集。**
- **目标英雄的选取不判空。** `_targetSettlement.Notables.GetRandomElementWithPredicate(x => x.CanHaveCampaignIssues())` 直接取 `.Notables`，返回值可能为 null 就赋给 `_targetHero`。后续 `IssueStayAliveConditions` 里的 `_targetHero.IsActive` 会 NRE。
- **`_possibleDeliveryItems` 带 `[CachedData]`，不进存档。** 这是**全文件唯一带该标记的成员**。**它必须保持 `readonly` 且初始化在字段声明处**——如果放到构造器里，读档后重建的实例拿不到它。
- **问题期限 30 天，任务期限 18 天，两个常量不一致。** `IssueDuration = 30`（`:26`）是死代码，真正生效的是 `GenerateIssueQuest` 里的 `CampaignTime.DaysFromNow(18f)`。**别按 30 天理解这个问题的时限。**
- **`QuestTimeLimit = 18` 与 `RequiredSkillLevelForCompanion = 120`、`BaseRewardGold = 500` 同样是死代码。** 实际赏金是 `RewardGold => (int)(500f + 1500f * IssueDifficultyMultiplier)`，实际技能门槛写在 `GetAlternativeSolutionSkill` 里。
- **`IssueStayAliveConditions` 不检查任何价格。** 它只看 `CounterOfferHero != null`、两个英雄是否 active、以及反派人是否还在原城镇。**物价崩了问题也不会消失**——这与 `ArtisanOverpricedGoodsIssueBehavior` 的 `> 1.8f` 判定是本质区别。
- **目标英雄会被 `OnHeroCanHaveCampaignIssuesInfoIsRequested` 悄悄排除。** 任务开始后 `result = false`，玩家在目标城镇里再也触发不到这个目标英雄的同类问题。**这是有意设计，不是 bug**，但会让人以为"条件坏了"。
- **存档 id 480000 硬编码。** `ArtisanCantSellProductsAtAFairPriceIssueTypeDefiner` 的构造器写死 `base(480000)`。**复制它会造成存档 id 冲突。**

## 跨版本提示

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/ArtisanCantSellProductsAtAFairPriceIssueBehavior.cs` 是 1015 行原始源码（外层行为约 65 行 + 三个嵌套类）。跨版本比对时盯七点：存档 id `480000`、七种原材料 id 列表、距离系数 `2.25f`、需求数量系数 `60f`、赏金系数 `500f + 1500f`、任务期限 18 天与问题期限 30 天的错位、以及 `_possibleDeliveryItems` 是否仍带 `[CachedData]`。**`[CachedData]` 若被去掉，读档后原材料列表会变 null，构造器里的 `GetRandomElement()` 直接崩。**

## 依赖关系

- 官方注册点：`SandBoxManager.cs:163` 的 `gameStarter.AddBehavior(new ArtisanCantSellProductsAtAFairPriceIssueBehavior());`，夹在 `ArmyNeedsSuppliesIssueBehavior` 与 `ArtisanOverpricedGoodsIssueBehavior` 之间
- 模块生命周期入口：[MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameInitializationStart` 是 mod 拿 `CampaignGameStarter` 的时机
- 问题子系统：[IssueManager](../IssueManager) 的 `AddPotentialIssueData(Hero, PotentialIssueData)` 是唯一输出通道；**本类型用的是不带载荷的构造**
- 问题基类：[IssueBase](../IssueBase) 提供 `IssueOwner` / `IssueSettlement` / `RewardGold` / `CompleteIssueWithStayAliveConditionsFailed()`
- 任务基类：[QuestBase](../QuestBase) 是嵌套 `ArtisanCantSellProductsAtAFairPriceIssueQuest` 的父类，那里有四条自己的事件订阅
- 目标城镇筛选依赖：`SettlementHelper.FindNearestSettlementToMobileParty` 与 `Campaign.Current.Models.MapDistanceModel.GetDistance`，[MapDistanceModel](../MapDistanceModel) 是距离判定的唯一来源
- 导航能力：`MobileParty.NavigationType` 与 `Clan.HasNavalNavigationCapability`（`TaleWorlds.CampaignSystem.Party` 命名空间）
- 物品侧：[ItemObject](../../core-extra/ItemObject) 通过 `Campaign.Current.ObjectManager.GetObject<ItemObject>(id)` 按七种硬编码 id 解析
- 事件总线：[CampaignEvents](../CampaignEvents) 的 `OnCheckForIssueEvent`；问题侧还有 `OnNewIssueCreatedEvent` / `OnIssueUpdatedEvent` / `CanHaveCampaignIssuesEvent`
- 桶首页：[campaign API 分区](../)
