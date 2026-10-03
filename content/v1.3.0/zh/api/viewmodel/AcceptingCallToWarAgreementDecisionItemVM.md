---
title: "AcceptingCallToWarAgreementDecisionItemVM"
description: "王国面板里「接受号召参战协议」这条决议的展示条目：InitValues 把两个王国的旗帜、领袖头像与兵力对比一次性填进 ComparedStats，TargetFaction 是唯一现算的属性。"
---

# AcceptingCallToWarAgreementDecisionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AcceptingCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`
**Base:** `DecisionItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/AcceptingCallToWarAgreementDecisionItemVM.cs`（全文 251 行）

## 概述

这是王国决策面板（[KingdomDecisionsVM](../KingdomDecisionsVM)）里的一条**展示型条目**。它自己不执行任何决议——真正投票走基类 [DecisionItemBaseVM](../DecisionItemBaseVM) 的 `DecisionOptionsList` 与 `ExecuteFinalSelection()`。本类做的全部事情是在 `protected override void InitValues()`（第 41–65 行）里把一个 [AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision) 翻译成 UI 能直接绑的字符串、旗帜、头像和一条兵力对比条。

构造器只有两行：把 `decision` 存进私有字段 `readonly AcceptCallToWarAgreementDecision _callToWarAgreementDecision`，然后 `base.DecisionType = 8`。**`DecisionType` 是个裸整型，8 是「接受号召参战协议」在 UI 侧的类型编号**——不是枚举常量，`DecisionItemBaseVM` 上也没有对应的 public 枚举（它的 `DecisionTypes` 是 `protected` 的），所以这个 8 只能从源码读出来。

## 心智模型

**把它想成「一次数据到界面的翻译，而不是一次交互」。** 继承链的分工是清楚的：基类管决议生命周期（谁发起的、影响力成本、投票选项、胜率刷新、能不能结束），本类管「这条决议长什么样」。

`InitValues()` 里发生了七件事，顺序就是 UI 从上到下的排版顺序：

1. `NameText` ← `str_kingdom_decision_accept_call_to_war_agreement`；
2. `AcceptCallToWarAgreementDescriptionText` ← `str_kingdom_decision_accept_call_to_war_agreement_desc`，并把 `CALLING_KINGDOM` / `KINGDOM_TO_CALL_TO_WAR_AGAINST` 两个文本变量塞成两个王国的 `Name`；
3. `SourceFactionBanner` ← `new BannerImageIdentifierVM(_callingKingdom.Banner, true)`；
4. `TargetFactionBanner` ← `new BannerImageIdentifierVM(TargetFaction.Banner, true)`；
5. `LeaderText` ← `str_leader`；
6. `SourceFactionLeader` / `TargetFactionLeader` ← `new HeroVM(kingdom.Leader, false)`；
7. `ComparedStats` ← 新建一个 [MBBindingList](../../core-extra/MBBindingList)<[KingdomWarComparableStatVM](../KingdomWarComparableStatVM)>，然后塞进去**一条**兵力对比。

那条兵力对比的构造值得单看：

```csharp
Kingdom kingdom = this.TargetFaction as Kingdom;
string faction1Color = Color.FromUint(this._callingKingdom.Color).ToString();
string faction2Color = Color.FromUint(kingdom.Color).ToString();
KingdomWarComparableStatVM item = new KingdomWarComparableStatVM(
    (int)this._callingKingdom.CurrentTotalStrength,
    (int)kingdom.CurrentTotalStrength,
    GameTexts.FindText("str_strength", null),
    faction1Color, faction2Color, 10000, null, null);
```

`TargetFaction` 的静态类型是 `IFaction`，这里用 `as Kingdom` 硬转。第 7 个实参 `10000` 是这条对比条的**上限刻度**——所以界面上是「两家兵力按同一把尺子量」，而不是各按自己的满值归一化。两个王国颜色各自 `Color.FromUint(uint)` 转成字符串色值传给 VM。

**`TargetFaction` 是本类唯一的计算属性**，getter 体只有一行：

```csharp
public IFaction TargetFaction
{
    get { return (this._decision as AcceptCallToWarAgreementDecision).KingdomToCallToWarAgainst; }
}
```

它走的是基类的 `protected readonly KingdomDecision _decision` 字段而不是本类私有的 `_callToWarAgreementDecision`，但两者指向同一个对象。还有一个对称的 `private Kingdom _callingKingdom`，getter 同样是一次 `as` + 取属性。**这两个属性没有 setter，赋值会编译不过**——王国在这条决议的生命周期内是不变的。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public AcceptingCallToWarAgreementDecisionItemVM(AcceptCallToWarAgreementDecision decision, Action onDecisionOver)` | 参数类型被写死成 `AcceptCallToWarAgreementDecision`（基类签名是 `KingdomDecision`）。`onDecisionOver` 原样传给基类，是决议结束后的收尾回调。由 `KingdomDecisionsVM` 在按类型分发时 new 出来。 |
| `TargetFaction` | `public IFaction TargetFaction { get; }` | **无 setter**。每次 get 都做一次 `as AcceptCallToWarAgreementDecision` 再取 `KingdomToCallToWarAgainst`。注意静态类型是 `IFaction` 不是 `Kingdom`——`InitValues` 里还得再 `as Kingdom` 才能拿到 `Color` 和 `CurrentTotalStrength`。 |
| `NameText` | `public string NameText { get; set; }` | 决议标题。由 `InitValues` 写入，XML 侧只读。setter 走 `OnPropertyChangedWithValue<string>(value, "NameText")`。 |
| `AcceptCallToWarAgreementDescriptionText` | `public string AcceptCallToWarAgreementDescriptionText { get; set; }` | 决议正文，已把两个王国名替换进 `{CALLING_KINGDOM}` / `{KINGDOM_TO_CALL_TO_WAR_AGAINST}` 变量。 |
| `SourceFactionBanner` | `public BannerImageIdentifierVM SourceFactionBanner { get; set; }` | 发起方旗帜。 |
| `TargetFactionBanner` | `public BannerImageIdentifierVM TargetFactionBanner { get; set; }` | 被号召方的旗帜。 |
| `ComparedStats` | `public MBBindingList<KingdomWarComparableStatVM> ComparedStats { get; set; }` | 对比条列表。**1.3.0 里 `InitValues` 只 Add 一条**（兵力），后面的版本才会加更多维度。 |
| `LeaderText` | `public string LeaderText { get; set; }` | "Leader" 列头，来自 `str_leader`。 |
| `SourceFactionLeader` | `public HeroVM SourceFactionLeader { get; set; }` | 发起方领袖的头像 VM，构造第二参 `false` 表示不用平民形态。 |
| `TargetFactionLeader` | `public HeroVM TargetFactionLeader { get; set; }` | 被号召方领袖的头像 VM。 |

继承来、不属于本页的：`DecisionOptionsList`、`InfluenceCostText`、`CanEndDecision`、`ExecuteFinalSelection()`、`KingdomDecisionMaker`、`InitValues()` 的基类实现、`_decision` 字段。

## 真实示例

要判断「玩家面前这条决议是号召谁打谁」，读 `TargetFaction` 就够了；要读发起方王国则**读不到**——`_callingKingdom` 是私有的，只能绕道决议对象本身：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Election;
using TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes;
using TaleWorlds.Library;

// DecisionItemBaseVM 把决议对象放在 protected 字段 _decision 上，外部读不到。
// 所以「拿到 VM」和「拿到决议」要成对保存 —— 这就是 mod 侧 holder 该做的事。
public class MyDecisionHolder
{
    private readonly AcceptingCallToWarAgreementDecisionItemVM _item;
    private readonly AcceptCallToWarAgreementDecision _decision;

    public MyDecisionHolder(
        AcceptCallToWarAgreementDecision decision, System.Action onDecisionOver)
    {
        this._decision = decision;
        this._item = new AcceptingCallToWarAgreementDecisionItemVM(decision, onDecisionOver);
    }

    // VM 已经把决议翻成了界面上要用的字符串与图标
    public string TitleText
    {
        get { return this._item.NameText; }
    }

    public string DescriptionText
    {
        get { return this._item.AcceptCallToWarAgreementDescriptionText; }
    }

    // 要拿王国就回到决议对象上：item.TargetFaction 只给得出被号召方
    public bool IsPlayerInvolved
    {
        get
        {
            Kingdom caller = this._decision.CallingKingdom;
            Kingdom target = this._decision.KingdomToCallToWarAgainst;
            return caller == Clan.PlayerClan.Kingdom || target == Clan.PlayerClan.Kingdom;
        }
    }

    public void Log()
    {
        MBDebug.Print(this.TitleText + " -> " + this._decision.CallingKingdom.Name
            + " vs " + this._decision.KingdomToCallToWarAgainst.Name);
    }
}
```

`item.TargetFaction` 拿得到被号召方，但拿不到发起方——`_callingKingdom` 是私有的。想两个都拿到，只能像上面这样在 new 的那一刻把决议对象一起存下来。**本类的价值在于「把决议变成能显示的字符串和图标」，这两样东西在别处没有现成的。**

## 风险与边界

- **`InitValues()` 是 `protected override`，且只在基类构造链里被调一次。** 决议的两个王国在生命周期内不变，所以没有重跑逻辑。想在决议数据变化后刷新，只能自己 new 一个新的 item VM。
- **`TargetFaction` 每次 get 都做一次类型转换**，没有缓存。XML 绑定每秒对它求值几十次也不至于出问题，但它不是「读字段」那么便宜。
- **`TargetFaction` 与 `_callingKingdom` 都无 setter。** 在 C# 里赋值编译失败；在 XML 里 `TargetFaction="..."` 也不会生效（绑定写入走 `SetPropertyValue`，而无 setter 的属性被**静默忽略**）。
- **`ComparedStats` 只有一条**。别按「对比条列表」去写循环 expecting 多行——1.3.0 的 `InitValues` 就是一次 `Add`。
- **那个 `10000` 是硬编码刻度**，不是从模型读的。mod 想换刻度就得改这个数字或者换掉 `ComparedStats` 的内容。
- **`DecisionType = 8` 是裸整型**。基类的 `protected enum DecisionTypes` 里找不到它的语义，只能对着源码数。
- **`InitValues` 里 `this.TargetFaction as Kingdom` 之后直接取 `kingdom.Color`**。如果 `TargetFaction` 实际不是 `Kingdom`（1.3.0 的构造器只接受 `AcceptCallToWarAgreementDecision`，其 `KingdomToCallToWarAgainst` 是 `Kingdom`，所以实际不会发生），这里会 NRE。
- **`HeroVM(hero, false)` 的第二个参数是 `isCivilian`**。传 `false` 意味着永远显示战斗形态头像。

## 跨版本提示

**这是本批里变化最大的一个类。** 1.3.0 有 252 行、309 行地从 1.3.15 开始出现，且 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 四棵树的行数完全相同（309 行）。

**1.3.15 起新增两个 public 绑定属性**，都填在 `InitValues()` 末尾：

- `MBBindingList<KingdomDiplomacyFactionItemVM> TargetFactionOtherWars` —— 遍历 `FactionHelper.GetStances(TargetFaction)`，把「除发起方之外、正在和被号召方交战」的王国列出来；
- `bool IsTargetFactionOtherWarsVisible` —— `TargetFactionOtherWars.Count > 0`。

同时 `InitValues` 顶部多了 `using Helpers;`，本文件第一次依赖 `FactionHelper`（见 [FactionHelper](../../system/FactionHelper)）。

**跨版本抄代码必看**：`decision.CanMakeDecision(out TextObject)` 在 1.3.15 起变成 `CanMakeDecision(out TextObject, bool)`。本页示例里刻意只用了属性访问和 `MBDebug.Print`，就是为了不踩这条。

## 依赖关系

- 基类与决议生命周期：[DecisionItemBaseVM](../DecisionItemBaseVM) 提供 `DecisionOptionsList` / `InfluenceCostText` / `CanEndDecision` / `ExecuteFinalSelection()` 与 `protected readonly KingdomDecision _decision`；其 UI 底座是 [ViewModel](../../core-extra/ViewModel)
- 决议本体：[AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision) 提供 `CallingKingdom` / `KingdomToCallToWarAgainst`，基类为 [KingdomDecision](../../campaign/KingdomDecision)
- 创建者：[KingdomDecisionsVM](../KingdomDecisionsVM) 在按 `decision.GetType()` 分发时构造本类
- 对比条：[KingdomWarComparableStatVM](../KingdomWarComparableStatVM) 承接 `ComparedStats` 的每一行；集合容器是 [MBBindingList](../../core-extra/MBBindingList)
- 头像与旗帜：[HeroVM](../HeroVM) 与 [BannerImageIdentifierVM](../../core-extra/BannerImageIdentifierVM)
- 文案来源：[GameTexts](../../core-extra/GameTexts) 提供 `str_kingdom_decision_accept_call_to_war_agreement*` / `str_leader` / `str_strength`
- 跨版本新增依赖：[FactionHelper](../../system/FactionHelper)（1.3.15 起）
- 桶首页：[viewmodel API 分区](../)
