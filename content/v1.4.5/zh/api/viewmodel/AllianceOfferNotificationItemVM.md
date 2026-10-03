---
title: "AllianceOfferNotificationItemVM"
description: "「某王国邀请你结盟」这条地图通知的条目视图模型。它与参战要约那份逐行同构但更简单：四个 CampaignEvents 监听、一次 StartAllianceDecision 有效性复验，以及在 OnFinalize 里把因加入王国而失去入口的要约补建成待决议。"
---
# AllianceOfferNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AllianceOfferNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AllianceOfferNotificationItemVM.cs`

## 概述

别的王国向玩家提出结盟时，地图通知面板出现这一行。它与同目录的 `AcceptCallToWarOfferNotificationItemVM` 结构几乎逐行对应，差别在于**只需要两个王国**（提议方，没有"被叫去打的对象"），因此决议类型从 `AcceptCallToWarAgreementDecision` 换成 `StartAllianceDecision`，行为回调从 `OnCallToWarAgreementProposedToPlayer` 换成 `OnAllianceOfferedToPlayer`，监听器也少了 `MakePeace` 一条。

三段结构：

1. **点击即提案**。`_onInspect` 闭包先复验 `data.IsValid()` 且 `Clan.PlayerClan.Kingdom != null`，再 `new StartAllianceDecision(Clan.PlayerClan, _offeringKingdom).CanMakeDecision(out _)`。成立则调 `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()?.OnAllianceOfferedToPlayer(data.OfferingKingdom)` 并撤下通知；否则弹一句 `"This alliance offer is no longer relevant."` 然后照样撤下。

2. **四条过期监听**。构造函数订阅 `CampaignEvents.OnClanChangedKingdomEvent`、`WarDeclared`、`KingdomDestroyedEvent`、`OnAllianceStartedEvent`，各自命中就撤下通知。**注意它没有监听 `MakePeace`**——结盟要约不会因为媾和而作废，这与参战要约那份不同。

3. **入口消失时的补发**。`OnFinalize` 里若 `_shouldDecisionBeCreatedOnClosed` 为真（玩家加入王国导致地图通知这个入口失效），就补建一条 `StartAllianceDecision` 挂进 `Clan.PlayerClan.Kingdom`，条件是：玩家有王国、王国多于一个家族、且 `UnresolvedDecisions` 里没有来自同一提议方的待决议。

## 心智模型

把它读成**「一张有两个王国的政治快照，外挂一个保证要约不丢的补偿钩子」**：

- **谁 new 它**：`MapNotificationVM` 第 131 行 `_itemConstructors.Add(typeof(AllianceOfferMapNotification), typeof(AllianceOfferNotificationItemVM))`，第 199 行 `Activator.CreateInstance` 反射构造。**无法从代码替换。**
- **谁持引用**：`MapNotificationVM` 的通知条目列表。
- **绑定到哪个 View 属性**：全部来自基类。本类不新增任何 `[DataSourceProperty]`——它对外的唯一身份是 `NotificationIdentifier`。
- **什么时候 Dispose**：列表回收时调 `OnFinalize()`。本类**正确覆写了它**：先 `CampaignEventDispatcher.Instance.RemoveListeners(this)` 摘掉四个监听，再做补偿判断。这是本目录里解除绑定的正确写法（对比 `AlleyUnderAttackMapNotificationItemVM`，那个把解绑写在回调里）。
- **同一个 `"ransom"` 残留**。第 46 行 `base.NotificationIdentifier = "ransom";` ——与 `AcceptCallToWarOfferNotificationItemVM` 一样是从赎金通知复制来的。同一资源标识被至少三个通知类型共用，按它索引图标的 mod 会看到多类通知长得一样。
- **补发分支比"点击"路径更宽松的一点**：点击路径要求 `data.IsValid()`，而补发路径**不检查 `data`**——它在通知已被判定过期的时刻才运行，靠的是 `_shouldDecisionBeCreatedOnClosed` 这个标志位。
- **`ignoreInfluenceCost: true`**。补发出来的决议不扣影响力，这是原版刻意如此。
- **常见误用一**：把它当"结盟状态的实时显示"。它只在点击那一刻复验一次，之后局势变化靠事件回调撤下整行，而不是更新文字。
- **常见误用二**：指望 `OnFinalize` 只做清理。它**会改战役状态**（真的 `AddDecision`），在 `MapNotificationVM` 销毁条目的流程里。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AllianceOfferNotificationItemVM(AllianceOfferMapNotification data)` | 反射调用。存 `_offeringKingdom`、装配 `_onInspect`、订阅四个 `CampaignEvents`、`NotificationIdentifier = "ransom"`。 |
| `_onInspect`（基类 `protected Action`） | 构造函数中赋值的闭包 | 点击时复验要约 → 试构造 `StartAllianceDecision` → 成立则通知 `IAllianceCampaignBehavior.OnAllianceOfferedToPlayer` 并移除；否则弹 `InformationManager.ShowInquiry` 提示已过期并移除。 |
| `RemoveAllianceOfferNotification` | `private void RemoveAllianceOfferNotification(bool shouldDecisionCreatedOnClosed)` | 唯一撤下通道：先记录补偿标志，再 `ExecuteRemove()`。四个事件回调全部走它。 |
| `OnAllianceStarted` | `private void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)` | 玩家王国与提议方**真的结盟了**时作废——要约已被兑现，不必再提示。 |
| `OnWarDeclared` | `private void OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)` | 玩家阵营与提议方开战时作废。 |
| `OnKingdomDestroyed` | `private void OnKingdomDestroyed(Kingdom kingdom)` | 玩家王国或提议方任一覆灭时作废。 |
| `OnClanChangedKingdom` | `private void OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)` | 玩家自己换王国 → 作废不补发；别的家族加入玩家王国 → 作废**并**补发（入口从地图通知挪到了王国内政面板）。 |
| `OnFinalize` | `public override void OnFinalize()` | `RemoveListeners(this)` 解绑四个监听；随后在补偿条件下构造并 `Kingdom.AddDecision(..., ignoreInfluenceCost: true)`。**唯一修改战役状态的地方。** |
| `_offeringKingdom` | `private readonly Kingdom _offeringKingdom` | 唯一的字段，构造时从 `data.OfferingKingdom` 取出。只读。 |
| `_shouldDecisionBeCreatedOnClosed` | `private bool _shouldDecisionBeCreatedOnClosed` | 补偿开关，由 `RemoveAllianceOfferNotification` 的参数写入。**初值是 `false`，在构造函数第一行显式赋值。** |

## 真实示例

复刻它的有效性判据（与 `_onInspect` 完全同一条）：

```csharp
using TaleWorlds.CampaignSystem.Election;

public bool IsAllianceOfferStillActionable(AllianceOfferMapNotification data)
{
    if (data == null || !data.IsValid() || Clan.PlayerClan.Kingdom == null)
    {
        return false;
    }

    StartAllianceDecision probe =
        new StartAllianceDecision(Clan.PlayerClan, data.OfferingKingdom);

    return probe.CanMakeDecision(out _);
}
```

复刻补偿分支——注意它比点击路径**不检查 `data`**：

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem.Election;

public bool TryPromoteAllianceOffer(Kingdom offeringKingdom)
{
    Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
    if (playerKingdom == null || playerKingdom.Clans.Count <= 1)
    {
        return false;
    }

    bool alreadyPending = playerKingdom.UnresolvedDecisions
        .OfType<StartAllianceDecision>()
        .Any(d => d.KingdomToStartAllianceWith == offeringKingdom);

    StartAllianceDecision fresh =
        new StartAllianceDecision(Clan.PlayerClan, offeringKingdom);

    if (alreadyPending || !fresh.CanMakeDecision(out _))
    {
        return false;
    }

    playerKingdom.AddDecision(fresh, ignoreInfluenceCost: true);
    return true;
}
```

跟踪要约是否已被兑现，避免重复提示：

```csharp
public class MyAllianceOfferWatcher : CampaignBehaviorBase
{
    private readonly List<AllianceOfferMapNotification> _seen =
        new List<AllianceOfferMapNotification>();

    public override void RegisterEvents()
    {
        CampaignEvents.OnAllianceStartedEvent.AddNonSerializedListener(this, OnAllianceStarted);
    }

    private void OnAllianceStarted(Kingdom kingdom1, Kingdom kingdom2)
    {
        // 与 AllianceOfferNotificationItemVM.OnAllianceStarted 的判据一致
        if ((kingdom1 == Clan.PlayerClan.Kingdom && kingdom2 != null) ||
            (kingdom2 == Clan.PlayerClan.Kingdom && kingdom1 != null))
        {
            _seen.Clear();
        }
    }
}
```

## 风险与边界

- **生命周期与解绑**：这是本目录里解绑写法正确的类型——`OnFinalize` 里 `RemoveListeners(this)` 清掉全部四个监听。**但要注意 `RemoveListeners` 在 `base.OnFinalize()` 之后、补偿判断之前**，顺序是对的：先摘监听，避免补偿逻辑期间事件再次触发本对象。
- **它会改战役状态**。补偿分支真的 `Kingdom.AddDecision`，且 `ignoreInfluenceCost: true`。这发生在 `MapNotificationVM` 销毁条目的流程中，即"关面板"这一动作的副作用。继承无法关闭它——调用点在反射路径上。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。
- **裸解引用 `Clan.PlayerClan.Kingdom`**。`_onInspect` 与 `OnFinalize` 都直接读它，只在部分路径上判空。在战役未完全初始化、或通知活过了战役结束的无头环境里，`Clan.PlayerClan` 为 null 即 NRE。
- **补发路径不校验 `data`**。若 `_shouldDecisionBeCreatedOnClosed` 被置真而 `data` 已失效，补发仍会尝试创建决议（虽然 `CanMakeDecision` 通常会挡住）。这是原版逻辑。
- **`NotificationIdentifier = "ransom"` 与多个通知类型重名**。按该字符串区分通知的 mod 会误判。
- **不监听 `MakePeace`**。结盟要约在媾和后依然有效，这是与参战要约那份的语义差异，不是遗漏。
- **native 边界**：无。纯托管。
- **跨版本**：`StartAllianceDecision`、`KingdomToStartAllianceWith`、`OnAllianceOfferedToPlayer` 与四条 `CampaignEvents` 访问器（`OnClanChangedKingdomEvent` / `WarDeclared` / `KingdomDestroyedEvent` / `OnAllianceStartedEvent`）均为 v1.4.5 形状。

## 依赖关系

- ↑ 父类：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) —— 提供 `_onInspect`、`ExecuteRemove()`、`NavigationHandler`、`NotificationIdentifier`
- ↔ 同级：[MapNotificationVM](../MapNotificationVM) —— 类型构造器表与唯一构造入口
- ↔ 同级：[AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) —— 逐行同构的参战要约通知，多一个 `MakePeace` 监听与一个目标王国
- → 数据源：[AllianceOfferMapNotification](../../campaign/AllianceOfferMapNotification)
- → 决议类型：[StartAllianceDecision](../../campaign/StartAllianceDecision)
- → 行为接口：[IAllianceCampaignBehavior](../../campaign/IAllianceCampaignBehavior)
- → 事件源：[CampaignEvents](../../campaign-ext/CampaignEvents) —— 四个监听的来源
- → 派生物：[Kingdom](../../campaign/Kingdom)、[Clan](../../campaign/Clan)
