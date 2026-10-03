---
title: "AcceptCallToWarOfferNotificationItemVM"
description: "地图通知「某王国请求你参战」的条目视图模型。它由 MapNotificationVM 按类型表反射构造，自己订阅五个 CampaignEvents 来判断这份要约是否已过期，并在 OnFinalize 里把「加入王国导致要约失去入口」的情况补建成一条 KingdomDecision。"
---
# AcceptCallToWarOfferNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AcceptCallToWarOfferNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AcceptCallToWarOfferNotificationItemVM.cs`

## 概述

这是**一条地图通知的视图外壳**，对应战役侧的 `AcceptCallToWarOfferMapNotification`：别的王国向玩家发来「跟我们去打 X」的邀约。通知数据本身只带两个王国引用；这一层负责把它变成地图边栏里可点击、可自动消失、并且**在政治局势变化时自动作废**的一行。

三件事构成了它的全部职责：

1. **点击即提案**。构造函数里把 `_onInspect` 赋成一个闭包：先复验这份要约此刻是否仍然有效（`data.IsValid()` 且玩家已在一个王国里），再试着用 `AcceptCallToWarAgreementDecision.CanMakeDecision` 造一条真正的王国决议；造得成就通知 `IAllianceCampaignBehavior` 并把这条地图通知移除，造不成就弹一句「This call to war offer is no longer relevant.」然后照样移除。
2. **过期即自毁**。构造函数末尾订阅五个 `CampaignEvents`（改换王国、宣战、媾和、王国覆灭、同盟终结），任何一个命中就把通知撤掉。它是**订阅者**，而不是轮询者。
3. **入口消失时补发决议**。`OnFinalize` 里有一条例外：如果通知是因为「玩家加入了王国」而消失的（`_shouldDecisionBeCreatedOnClosed == true`），就把原本要点通知才能触发的 `AcceptCallToWarAgreementDecision` 补建成一条真正挂进王国的待决议，免得这条要约被静默吞掉。

## 心智模型

把它读成**「一条带政治状态机的地图通知，状态机在 CampaignEvents 上，补偿逻辑在 OnFinalize 里」**：

- **谁 new 它**：没有人手写 `new`。`MapNotificationVM` 构造函数里有一张 `Dictionary<Type, Type>` 类型的构造器表，第 132 行注册 `_itemConstructors.Add(typeof(AcceptCallToWarOfferMapNotification), typeof(AcceptCallToWarOfferNotificationItemVM))`，第 199 行用 `(MapNotificationItemBaseVM)Activator.CreateInstance(_itemConstructors[type], data)` 反射造出来。**这意味着你无法从代码里替换它**，只能改变通知数据本身；也意味着它的构造函数必须能用「一个 `AcceptCallToWarOfferMapNotification` 参数」构造成功，否则整条通知静默失败。
- **谁持引用**：`MapNotificationVM` 的通知条目列表。列表负责调用 `ExecuteRemove()`（撤下这一行）和 `OnFinalize()`（销毁）。本类自己**不缓存**自己。
- **绑定到哪个 View 属性**：它几乎没有 `[DataSourceProperty]`。它可绑定的面全在基类 `MapNotificationItemBaseVM` 上：`NotificationIdentifier`（决定用哪套图标/布局资源）、`TitleText`、`DescriptionText`、`SoundId`、`IsFocused`、`RemoveInputKey`。它通过给 `_onInspect` 赋值来定义「点这一行会发生什么」。
- **什么时候 Dispose**：`MapNotificationVM` 在条目被移除且不再需要时调用 `OnFinalize()`。本类的 `OnFinalize` 做两件事：`CampaignEventDispatcher.Instance.RemoveListeners(this)` 摘掉那五个监听，以及在补偿分支里可能真的 `AddDecision`。**漏掉解绑 = 泄漏**：一个还挂在 `WarDeclared` 上的死对象会让每次宣战都执行它的闭包。
- **一个真实存在的原版怪癖**：构造函数第 50 行写的是 `base.NotificationIdentifier = "ransom"`。这是个从赎金通知复制粘贴过来的残留值——同一个资源标识被两个毫不相干的通知类型共用。想按 `NotificationIdentifier` 区分这两类通知的 mod 会踩到。
- **补偿分支的三个前置条件**：`Clan.PlayerClan.Kingdom != null`、`Kingdom.Clans.Count > 1`（单人王国不搞决议）、以及 `UnresolvedDecisions` 里没有一条来自同一 `CallingKingdom` 的 `AcceptCallToWarAgreementDecision`。三者缺一都不补发，通知就是单纯消失。
- **常见误用**：把它当成「可以主动 `new` 出来显示一条通知」的工具。它不是。反射路径之外手工 new 出来的实例不会出现在地图通知面板里，而且它的 `OnFinalize` 补偿逻辑会在一个不属于 `MapNotificationVM` 的时机触发。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AcceptCallToWarOfferNotificationItemVM(AcceptCallToWarOfferMapNotification data)` | 由 `MapNotificationVM` 反射调用。把两个王国引用存进只读字段，装配 `_onInspect` 点击闭包，挂上五个 `CampaignEvents` 监听，并把 `NotificationIdentifier` 设成 `"ransom"`（原版复制粘贴残留）。 |
| `_onInspect`（继承自基类的 `protected Action`） | 在构造函数中赋值的闭包 | 玩家点击这一行时执行。先复验要约有效性，再试构造 `AcceptCallToWarAgreementDecision`；成功则通知 `IAllianceCampaignBehavior.OnCallToWarAgreementProposedToPlayer` 并移除通知，失败则弹 `InformationManager.ShowInquiry` 提示已过期并移除。 |
| `RemoveAcceptCallToWarOfferNotification` | `private void RemoveAcceptCallToWarOfferNotification(bool shouldDecisionCreatedOnClosed)` | 唯一的撤下通道。先把「关闭时是否要补决议」记进 `_shouldDecisionBeCreatedOnClosed`，再调基类的 `ExecuteRemove()`。所有五个事件回调都走它，而不是各自直接 `ExecuteRemove()`。 |
| `OnClanChangedKingdom` | `private void OnClanChangedKingdom(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)` | 玩家自己换王国 → 通知作废、不补决议（`false`）；**别的**家族加入玩家王国 → 通知作废、**要**补决议（`true`），因为提案的入口从地图通知挪到了王国内政面板。 |
| `OnWarDeclared` | `private void OnWarDeclared(IFaction, IFaction, DeclareWarAction.DeclareWarDetail)` | 玩家所在阵营已经跟「要被叫去打的王国」开战时作废——要约的前提没了。 |
| `OnPeaceDeclared` | `private void OnPeaceDeclared(IFaction, IFaction, MakePeaceAction.MakePeaceDetail)` | 两个王国之间（无论哪一方是 `offeringKingdom`、哪一方是 `kingdomToCallToWarAgainst`）媾和时作废。比较是对称写的，两个方向都覆盖。 |
| `OnAllianceEnded` | `private void OnAllianceEnded(Kingdom kingdom1, Kingdom kingdom2)` | 玩家王国与提议方之间的同盟终结时作废。 |
| `OnKingdomDestroyed` | `private void OnKingdomDestroyed(Kingdom kingdom)` | 玩家王国、提议方、被叫去打的三方中任意一方覆灭时作废。 |
| `OnFinalize` | `public override void OnFinalize()` | 生命周期终点。先 `CampaignEventDispatcher.Instance.RemoveListeners(this)` 摘掉全部五个监听；随后在补偿条件下构造并 `Kingdom.AddDecision(..., ignoreInfluenceCost: true)`。**这是唯一会修改战役状态的地方**。 |

## 真实示例

游戏自己创建它的路径是反射，不是 `new`：

```csharp
// MapNotificationVM 构造函数第 132 行（注册）
//   _itemConstructors.Add(typeof(AcceptCallToWarOfferMapNotification), typeof(AcceptCallToWarOfferNotificationItemVM));
// MapNotificationVM 第 199 行（构造）
//   mapNotificationItemBaseVM = (MapNotificationItemBaseVM)Activator.CreateInstance(_itemConstructors[type], data);
```

mod 侧要复刻它的判据（这是 mod 能合法做的部分）：

```csharp
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.CampaignSystem.Election;
using TaleWorlds.CampaignSystem.MapNotificationTypes;

// 与 AcceptCallToWarOfferNotificationItemVM 的 _onInspect 完全同一条判据。
public bool TryPromoteCallToWarOffer(AcceptCallToWarOfferMapNotification data)
{
    if (data == null || !data.IsValid() || Clan.PlayerClan.Kingdom == null)
    {
        return false;
    }

    AcceptCallToWarAgreementDecision decision =
        new AcceptCallToWarAgreementDecision(Clan.PlayerClan, data.OfferingKingdom, data.KingdomToCallToWarAgainst);

    if (!decision.CanMakeDecision(out _))
    {
        return false;
    }

    Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>()
              ?.OnCallToWarAgreementProposedToPlayer(data.OfferingKingdom, data.KingdomToCallToWarAgainst);
    return true;
}
```

把要约转成一条真正的王国决议（对应 `OnFinalize` 的补偿分支）：

```csharp
using System.Linq;

public void PushCallToWarDecision(Kingdom callingKingdom, Kingdom targetKingdom)
{
    Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
    if (playerKingdom == null || playerKingdom.Clans.Count <= 1)
    {
        return;
    }

    bool alreadyPending = playerKingdom.UnresolvedDecisions
        .OfType<AcceptCallToWarAgreementDecision>()
        .Any(d => d.CallingKingdom == callingKingdom);

    AcceptCallToWarAgreementDecision fresh =
        new AcceptCallToWarAgreementDecision(Clan.PlayerClan, callingKingdom, targetKingdom);

    if (!alreadyPending && fresh.CanMakeDecision(out _))
    {
        playerKingdom.AddDecision(fresh, ignoreInfluenceCost: true);
    }
}
```

## 风险与边界

- **生命周期与事件泄漏**。构造函数一次性挂五个 `CampaignEvents`，全靠 `OnFinalize` 里的 `RemoveListeners(this)` 兜底。任何绕过 `MapNotificationVM` 的销毁路径（自己 new、自己释放）都会让这五个监听永远挂着，并在后续每次宣战/媾和/换王国时执行一个持有 `Kingdom` 引用的死闭包。
- **它会改战役状态，且不可撤销**。`OnFinalize` 的补偿分支真的调用 `Kingdom.AddDecision`，并且传了 `ignoreInfluenceCost: true`——补发出来的决议不扣影响力。这是原版行为，mod 无法通过继承关掉它（该方法是 `override`，但基类调用点在 `MapNotificationVM` 的反射路径上，替换类型需要动那张私有构造器表）。
- **序列化**。完全不参与。它没有 `SyncData`、没有 `IDataStore`，通知是纯 UI 态。存档里不会留下「这份要约正在显示」的状态，读档后地图通知由战役侧重新推送。
- **native 边界**。无。纯托管 C#，不触碰 `Bannerlord.Native`。
- **`Clan.PlayerClan` / `Hero.MainHero` 的隐式依赖**。闭包里直接读 `Clan.PlayerClan.Kingdom` 和 `Hero.MainHero.MapFaction`，且除了 `OnWarDeclared` 里的 `MapFaction` 比较外**不做 null 检查**。在无头环境（战役未完全初始化、或地图通知在战役结束时仍存活）里，`Clan.PlayerClan` 为 null 会直接 NRE。这也是为什么 `OnFinalize` 里的解绑必须早于补发逻辑生效——`base.OnFinalize()` 之后立刻 `RemoveListeners`，顺序是对的。
- **脆弱的资源标识**。`NotificationIdentifier = "ransom"` 与赎金类通知重叠。任何按该字符串索引通知图标的 mod（尤其是想给不同通知配不同图标或音效的）会看到两类通知长得一样。
- **跨版本**。v1.4.5 存在 `AcceptCallToWarAgreementDecision` 与 `_shouldDecisionBeCreatedOnClosed` 这套补偿机制；更早的版本没有 `OnClanChangedKingdom` 触发的补发分支。`"ransom"` 这个残留值在 1.4.5 的源码里原样存在。

## 依赖关系

- ↑ 父类：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) —— 提供 `_onInspect`、`ExecuteRemove()`、`NavigationHandler`、`NotificationIdentifier`
- ↔ 同级：[AllianceOfferNotificationItemVM](../AllianceOfferNotificationItemVM) —— 结构几乎逐行同构的同盟邀约通知
- ↔ 同级：[MapNotificationVM](../MapNotificationVM) —— 那张类型构造器表的拥有者，也是唯一的构造入口
- → 数据源：`AcceptCallToWarOfferMapNotification`（zh: [../../campaign-ext/AcceptCallToWarOfferMapNotification](../../campaign-ext/AcceptCallToWarOfferMapNotification)，en: [../../campaign/AcceptCallToWarOfferMapNotification](../../campaign/AcceptCallToWarOfferMapNotification)）
- → 决议类型：`AcceptCallToWarAgreementDecision`（zh: [../../campaign-ext/AcceptCallToWarAgreementDecision](../../campaign-ext/AcceptCallToWarAgreementDecision)，en: [../../campaign/AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision)）
- → 行为接口：`IAllianceCampaignBehavior`（zh: [../../campaign-ext/IAllianceCampaignBehavior](../../campaign-ext/IAllianceCampaignBehavior)，en: [../../campaign/IAllianceCampaignBehavior](../../campaign/IAllianceCampaignBehavior)）
- → 事件源：[CampaignEvents](../../campaign-ext/CampaignEvents) —— 五个非序列化监听的来源
- ↑ VM 基类：[ViewModel](../../core-extra/ViewModel)
