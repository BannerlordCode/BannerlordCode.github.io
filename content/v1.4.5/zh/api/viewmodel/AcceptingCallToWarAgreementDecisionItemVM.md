---
title: "AcceptingCallToWarAgreementDecisionItemVM"
description: "王国内政面板里「是否接受参战要约」这条决议的条目视图模型。它继承 DecisionItemBaseVM，在 InitValues 里把决议对象翻译成两侧旗帜、双方领袖、总兵力对比条和被叫方其余战争列表，供 prefab 直接绑定。"
---
# AcceptingCallToWarAgreementDecisionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AcceptingCallToWarAgreementDecisionItemVM : DecisionItemBaseVM`  
**Base:** `DecisionItemBaseVM`  
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes/AcceptingCallToWarAgreementDecisionItemVM.cs`

## 概述

一条 `AcceptCallToWarAgreementDecision`（接受某王国的参战要约）进入王国内政界面时，屏幕不会直接用它，而是先由 `KingdomDecisionsVM` 按决议类型分派到本类。第 320 行就是那次分派：

```
return new AcceptingCallToWarAgreementDecisionItemVM(decision9, OnDecisionOver);
```

本类干的事只有一件：**把决议对象拍平成一排可绑定的字符串与子视图模型**。构造函数只做两件事——保存决议引用、把 `DecisionType` 设为 `8`（面板据此认出「这是参战要约那条」）。真正的内容全部在 `protected override void InitValues()` 里，基类会在初始化流程中调用它。

`InitValues` 产出的东西分四组：

- **文本**。`NameText` 取 `str_kingdom_decision_accept_call_to_war_agreement`；`AcceptCallToWarAgreementDescriptionText` 取对应的 `_desc` 文本，并把 `CALLING_KINGDOM`、`KINGDOM_TO_CALL_TO_WAR_AGAINST` 两个变量分别填成提议方与目标方名字；`LeaderText` 是通用的 `str_leader`。
- **旗帜**。`SourceFactionBanner` / `TargetFactionBanner`，两侧都用 `new BannerImageIdentifierVM(kingdom.Banner, nineGrid: true)` 构造，九宫格参数让小尺寸下边框仍然正确。
- **领袖**。`SourceFactionLeader` / `TargetFactionLeader`，两侧都是 `new HeroVM(kingdom.Leader)`。
- **对比与附注**。`ComparedStats` 是一条 `MBBindingList<KingdomWarComparableStatVM>`，实际只塞一条：双方 `CurrentTotalStrength` 加上各自阵营色作为条形图两端的颜色，缩放上限写死为 `10000`。`TargetFactionOtherWars` 是被叫方当前所有战争（排除与提议方之间的那一场，排除叛军与匪兵），`IsTargetFactionOtherWarsVisible` 只是它的 `Count > 0`。

## 心智模型

把它读成**「决议对象 → 面板行的单向翻译器，翻译只发生一次」**：

- **谁 new 它**：`KingdomDecisionsVM` 在构造具体决议条目时 `new`，传入 `(decision, onDecisionOver)`。`onDecisionOver` 是基类在决议结束时用来关面板/推进流程的回调，本类不碰它。**你能替换它的唯一方式是接管 `KingdomDecisionsVM` 的分派**，继承本类没有意义——因为所有属性都在 `InitValues` 里被覆写成只读展示值。
- **谁持引用**：所属的 `KingdomDecisionsVM` / 决议屏幕。它自己不缓存自己，但持有 `_callToWarAgreementDecision`，并通过 `_callingKingdom` 与 `TargetFaction` 两个表达式属性从基类的 `_decision` 字段里再取一次。
- **绑到哪个 View 属性**：上面列出的全部十个 `[DataSourceProperty]`。它们全是 `get/set`，但**语义上是只读的**——面板只读，唯一的写者是 `InitValues` 自己。
- **什么时候 Dispose**：基类 `DecisionItemBaseVM.OnFinalize()` 负责。本类**没有覆写 `OnFinalize`**，也没有注册任何 `CampaignEvents` 或 `Game.Current.EventManager` 监听，所以它自身不产生泄漏风险；它持有的 `_callToWarAgreementDecision` 只是战役对象的引用，不订阅事件。
- **`DecisionType = 8` 是硬编码契约**。这是构造时写死的魔数，不是枚举。prefab 与上层代码靠它区分决议条目类型。自己加一条同类决议时若复用这个魔数，两种决议会在同一个面板位置互相覆盖。
- **`InitValues` 只跑一次**。它在面板初始化时被基类调用；之后如果提议方换了领袖、双方兵力变了，`ComparedStats` 与 `SourceFactionLeader` **不会**自动刷新——需要外部再调一次 `RefreshValues()`，而基类 `RefreshValues` 并不会重跑 `InitValues`。这是这类条目模型最常见的陈旧显示来源。
- **常见误用**：把它当成可以随意 `new` 出来做自定义决议行的模板然后只填几个属性。构造函数强制要求一个真实的 `AcceptCallToWarAgreementDecision`；传别的 `KingdomDecision` 会在 `_callingKingdom`（`( _decision as AcceptCallToWarAgreementDecision).CallingKingdom`）上 NRE，而不是给出可读的失败。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AcceptingCallToWarAgreementDecisionItemVM(AcceptCallToWarAgreementDecision decision, Action onDecisionOver)` | 由 `KingdomDecisionsVM` 分派调用。只保存决议引用并把 `DecisionType` 设为 `8`；**不填充任何属性**，填充推迟到 `InitValues`。 |
| `InitValues` | `protected override void InitValues()` | 唯一的填充点：取两个文本、造两面九宫格旗帜、造两个 `HeroVM`、建 `ComparedStats` 并塞入唯一一条总兵力对比、遍历 `FactionHelper.GetStances(TargetFaction)` 造出 `TargetFactionOtherWars`，最后据此设 `IsTargetFactionOtherWarsVisible`。 |
| `TargetFaction` | `public IFaction TargetFaction` | 只读表达式属性，从 `_decision` 强转后取 `KingdomToCallToWarAgainst`。是「被叫去打的那个国家」。传错决议类型会在此 NRE。 |
| `_callingKingdom` | `private Kingdom _callingKingdom` | 同样从 `_decision` 强转取 `CallingKingdom`，即发起邀约的王国。只在 `InitValues` 内部使用，不暴露给面板。 |
| `NameText` | `[DataSourceProperty] public string NameText` | 面板标题，固定文本 `str_kingdom_decision_accept_call_to_war_agreement`。 |
| `AcceptCallToWarAgreementDescriptionText` | `[DataSourceProperty] public string AcceptCallToWarAgreementDescriptionText` | 正文描述，已把 `CALLING_KINGDOM` 与 `KINGDOM_TO_CALL_TO_WAR_AGAINST` 变量填好，模组若要改文案必须重填这两个变量。 |
| `SourceFactionBanner` / `TargetFactionBanner` | `[DataSourceProperty] public BannerImageIdentifierVM ...` | 两侧旗帜图，构造时 `nineGrid: true`。 |
| `SourceFactionLeader` / `TargetFactionLeader` | `[DataSourceProperty] public HeroVM ...` | 两侧领袖的头像/名字视图模型，各自 `new HeroVM(kingdom.Leader)`。 |
| `ComparedStats` | `[DataSourceProperty] public MBBindingList<KingdomWarComparableStatVM>` | 对比条集合。原版只放一条总兵力对比，缩放上限硬编码 `10000`，所以兵力远超一万时条会饱和。 |
| `TargetFactionOtherWars` | `[DataSourceProperty] public MBBindingList<KingdomDiplomacyFactionItemVM>` | 被叫方正在进行的其他战争，过滤掉与提议方之间那一场、叛军家族与匪兵派系，只保留双方都是王国派系或玩家主党的条目。 |
| `IsTargetFactionOtherWarsVisible` | `[DataSourceProperty] public bool IsTargetFactionOtherWarsVisible` | 只是 `TargetFactionOtherWars.Count > 0` 的缓存，供面板决定是否显示那一整块。**不要**在外部单独改它，它不会反过来重建列表。 |

## 真实示例

自己提供一条同类决议行——注意 `_callingKingdom` 的取值路径决定了决议类型不能换：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes;

// 这是面板能读到的最终形态：全部属性都已由 InitValues 填好
public string DescribeCallToWarDecision(AcceptingCallToWarAgreementDecisionItemVM item)
{
    return item.NameText + " | " + item.TargetFaction.Name.ToString() + " | " + item.AcceptCallToWarAgreementDescriptionText;
}
```

复刻 `InitValues` 里那条唯一的兵力对比条（这是最常被模组改写的部分）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.KingdomManagement.Decisions.ItemTypes;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public MBBindingList<KingdomWarComparableStatVM> BuildStrengthStat(Kingdom callingKingdom, Kingdom targetKingdom)
{
    string callerColor = Color.FromUint(callingKingdom.Color).ToString();
    string targetColor = Color.FromUint(targetKingdom.Color).ToString();

    MBBindingList<KingdomWarComparableStatVM> stats = new MBBindingList<KingdomWarComparableStatVM>();
    stats.Add(new KingdomWarComparableStatVM(
        (int)callingKingdom.CurrentTotalStrength,
        (int)targetKingdom.CurrentTotalStrength,
        GameTexts.FindText("str_strength"),
        callerColor,
        targetColor,
        10000));
    return stats;
}
```

复刻「被叫方的其他战争」过滤——这是 `InitValues` 里最长的那段判断：

```csharp
using Helpers;
using TaleWorlds.CampaignSystem.KingdomManagement.Diplomacy;

public MBBindingList<KingdomDiplomacyFactionItemVM> BuildOtherWars(Kingdom callingKingdom, IFaction targetFaction)
{
    MBBindingList<KingdomDiplomacyFactionItemVM> wars = new MBBindingList<KingdomDiplomacyFactionItemVM>();

    foreach (StanceLink stance in FactionHelper.GetStances(targetFaction))
    {
        bool unrelatedToCalling = stance.Faction1 != callingKingdom && stance.Faction2 != callingKingdom;
        bool bothRealFactions =
            (stance.Faction1.IsKingdomFaction || stance.Faction1.Leader == Hero.MainHero) &&
            (stance.Faction2.IsKingdomFaction || stance.Faction2.Leader == Hero.MainHero);

        if (stance.IsAtWar && unrelatedToCalling && bothRealFactions
            && !stance.Faction1.IsRebelClan && !stance.Faction2.IsRebelClan
            && !stance.Faction1.IsBanditFaction && !stance.Faction2.IsBanditFaction)
        {
            IFaction other = stance.Faction1 == targetFaction ? stance.Faction2 : stance.Faction1;
            wars.Add(new KingdomDiplomacyFactionItemVM(other));
        }
    }

    return wars;
}
```

## 风险与边界

- **`TargetFaction as Kingdom` 之后直接解引用**。`InitValues` 里有一段 `Kingdom kingdom = TargetFaction as Kingdom;` 紧接着读 `kingdom.Color`。`TargetFaction` 的静态类型是 `IFaction`，若某个决议被构造成以非 `Kingdom` 的 `IFaction` 为目标，这里是一个静默的 NRE。原版路径上 `KingdomToCallToWarAgainst` 确实是 `Kingdom`，所以从不触发；**继承并传入自造决议时就会**。
- **没有任何 null 防御**。`_callingKingdom.Leader`、`TargetFaction.Leader`、两侧 `CurrentTotalStrength` 全部裸取。无头环境或决议处于异常中间态时会直接崩。
- **生命周期**：不注册监听器，也不覆写 `OnFinalize`，因此**不泄漏**。它只是引用了 `Kingdom`、`Hero`，而这些是 `MBObjectManager` 管理的全局单例，视图模型持有它们不会延长任何东西的生命周期。
- **序列化**：无。没有 `SyncData`，不写 `IDataStore`。整条决议的持久化由 `KingdomDecision` 侧负责，条目模型每次开面板重建。
- **陈旧显示**。`InitValues` 只在初始化跑一次；`LeaderText`、`ComparedStats`、`SourceFactionLeader` 不会随局势变化自动刷新。长时间开着的面板会显示旧领袖和旧兵力对比。
- **`DecisionType = 8` 魔数**。写死而非枚举，跨版本不保证稳定；新版本插入新决议类型时这个数字可能改变，而页面与 prefab 仍然按旧数字判断。
- **native 边界**。纯托管，不触碰 `Bannerlord.Native`。`Color.FromUint` 是 `TaleWorlds.Library` 的纯 C# 包装。
- **`10000` 的缩放上限**是硬编码在构造调用里的，不是可配置项。模组想让对比条在大规模军队下仍可读，必须自己重算并覆写 `ComparedStats`。

## 依赖关系

- ↑ 父类：[DecisionItemBaseVM](../DecisionItemBaseVM) —— 提供 `_decision`、`DecisionType`、`InitValues()` 与决议结束回调
- ↔ 同级：[AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) —— 同一份要约在地图通知侧的呈现，本类是它在王国内政侧的呈现
- → 决议类型：[AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision)
- → 构造方：[KingdomDecisionsVM](../KingdomDecisionsVM)
- → 阵营关系来源：[FactionHelper](../../system/FactionHelper) —— `GetStances` 提供 `StanceLink` 列表
- → 领袖视图模型：[HeroVM](../HeroVM)
- → 旗帜图：[BannerImageIdentifierVM](../../core-extra/BannerImageIdentifierVM)
- → 列表容器：[MBBindingList](../../core-extra/MBBindingList)
- → 文本查找：[GameTextManager](../../core-extra/GameTextManager)
