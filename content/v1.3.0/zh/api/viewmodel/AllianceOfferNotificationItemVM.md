---
title: "AllianceOfferNotificationItemVM"
description: "结盟提议的地图通知条目：五个 CampaignEvents 决定它何时自毁，其中「别的氏族加入玩家王国」这条会置起接力标记，OnFinalize 据此补一条 StartAllianceDecision 到玩家王国。"
---

# AllianceOfferNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AllianceOfferNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/AllianceOfferNotificationItemVM.cs`（全文 120 行）

## 概述

这是 [AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) 的孪生结构：同样是「构造器挂事件 + `OnFinalize` 收尾」的两段式结构，同样在 `OnFinalize` 里可能补一条王国决策。差别在两处：**只有一个王国参数**（`readonly Kingdom _offeringKingdom`，没有 `KingdomToCallToWarAgainst`），以及它监听的事件组合把「和平 / 解盟」换成了「结盟成立 / 宣战」。

它的 `_onInspect` 分支也是三段：先用 `new StartAllianceDecision(Clan.PlayerClan, _offeringKingdom).CanMakeDecision(out textObject)` 试能不能做决策；能就 `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>().OnAllianceOfferedToPlayer(data.OfferingKingdom)` 并移除通知；不能就弹一句 "This alliance offer is no longer relevant." 再移除。

## 心智模型

**把它想成「一条只活到玩家王国结构发生变化为止的邀请」。** 它的 `_offeringKingdom` 就是这条邀请的全部内容——没有第二个王国、没有影响力量、没有额外参数，所以整个类只有两个字段。

四个自监听事件就是它的四条死线：

- `WarDeclared`：玩家的 `MapFaction` 和提议方开战了，邀请作废；
- `OnAllianceStartedEvent`：玩家王国和提议方已经结盟了，邀请**已经兑现**，通知消失；
- `KingdomDestroyedEvent`：玩家王国或提议方任何一方覆灭；
- `OnClanChangedKingdomEvent`：玩家自己换王国，或者**别的氏族加入了玩家王国**。

后两条的差别是本类的核心设计。看源码：

```csharp
private void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ...)
{
    if (clan == Clan.PlayerClan) { this.RemoveAllianceOfferNotification(false); return; }
    if (newKingdom == Clan.PlayerClan.Kingdom) { this.RemoveAllianceOfferNotification(true); }
}
```

第二个分支的语义是：**当玩家王国的 clan 数量变了、这条提案的权重也变了，但它本身还有效**——所以通知先消失，然后在 `OnFinalize` 里以决策的形式重新出现在王国面板上。这正是 `RemoveAllianceOfferNotification(bool shouldDecisionCreatedOnClosed)` 这个私有辅助方法存在的理由：它把「移除」和「是否接力」两件事绑成一次原子操作，因为 `ExecuteRemove()` 之后 VM 就不可信了，标记必须在那之前写进去。

`OnFinalize` 的接力条件比号召参战那边更宽：只要求 `Clan.PlayerClan.Kingdom != null`、`Clans.Count > 1`，以及 `UnresolvedDecisions` 里还没有同 `KingdomToStartAllianceWith` 的 `StartAllianceDecision`。**注意它匹配 `KingdomToStartAllianceWith == _offeringKingdom`，与号召参战那边匹配 `CallingKingdom` 是同一套去重思路。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public AllianceOfferNotificationItemVM(AllianceOfferMapNotification data)` | 由 `MapNotificationVM.GetNotificationFromData` 反射调用，**参数必须是单个 `InformationData` 派生类**。派生类改变这个形状会让 `Activator.CreateInstance` 抛异常。 |
| `OnFinalize` | `public override void OnFinalize()` | 唯一的 public 方法。清监听 → 若接力标记为真且王国条件满足，构造 `StartAllianceDecision` 再 `CanMakeDecision` 通过后 `Kingdom.AddDecision(decision, true)`。**第二个参数 `true` 是 `ignoreInfluenceCost`，补出来的决策不扣影响力。** |

私有成员：`_offeringKingdom`（`readonly Kingdom`）、`_shouldDecisionBeCreatedOnClosed`，以及 `OnAllianceStarted` / `OnKingdomDestroyed` / `OnClanChangedKingdom` / `OnWarDeclared` / `RemoveAllianceOfferNotification` 五个私有方法。

继承来、但本页行为依赖它们的成员：`NotificationIdentifier`（本类第 43 行也被写成 `"ransom"`，与号召参战通知同一个字符串）、`_onInspect`、`ExecuteRemove()`。

## 真实示例

要拦下「玩家点开结盟提议」这条路径，1.3.0 里能碰到的官方钩子只有 `IAllianceCampaignBehavior` 的 `OnAllianceOfferedToPlayer`。派发它的是本类的 `_onInspect`，所以一个 campaign behavior 就能在「玩家接受」这个时点上插入自己的逻辑：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;

// 我自己的 behavior：在官方把结盟提案交给玩家之前拦一道
public class MyAllianceOfferBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior
{
    public override void RegisterEvents()
    {
        // 官方 AllianceOfferNotificationItemVM 在点击时调用
        // Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>().OnAllianceOfferedToPlayer(...)
        // 所以这里只需要保证自己也在容器里，就能收到同一个时点。
        CampaignEvents.OnAllianceStartedEvent.AddNonSerializedListener(
            this, new System.Action<Kingdom, Kingdom>(this.OnAllianceStarted));
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnAllianceStarted(Kingdom playerKingdom, Kingdom partner)
    {
        // 真正的结盟已经发生：官方那条地图通知会在同一个事件里自毁。
        // 这里是 mod 观察「玩家的结盟提议落地」的唯一稳定时点。
        if (playerKingdom == Clan.PlayerClan.Kingdom || partner == Clan.PlayerClan.Kingdom)
        {
            MBDebug.Print("玩家王国参与了结盟");
        }
    }

    // IAllianceCampaignBehavior 还有很多成员，全部留空表示不干预
    public void OnAllianceOfferedToPlayer(Kingdom proposerKingdom) { }
    public void OnAllianceOfferedToPlayerKingdom(Kingdom proposerKingdom) { }
    public void OnCallToWarAgreementProposedToPlayerKingdom(Kingdom proposerKingdom, Kingdom target) { }
    public void OnCallToWarAgreementProposedToPlayer(Kingdom proposerKingdom, Kingdom target) { }
    public void OnKingdomCreation(Kingdom kingdom) { }
    public void OnStartKingdomDecision(KingdomDecision decision) { }
}
```

在 `MBSubModuleBase.InitializeGameStarter` 里 `gameStarterObject.AddCampaignBehavior<MyAllianceOfferBehavior>()` 即可（见 [IGameStarter](../../core-extra/IGameStarter)）。**这类 behavior 与本类的 VM 是完全解耦的**——VM 只负责让 UI 上那条通知活着、点得动，行为拦截得靠 campaign behavior。

## 风险与边界

- **`NotificationIdentifier` 与号召参战通知共用 `"ransom"`**（本类第 43 行）。1.3.0 的 UI 侧不区分这两条通知，想区分只能自己派生子类重写。
- **`RemoveListeners(this)` 是全局按监听者清空的。** `OnFinalize` 第一步就调它，会把 `this` 在整个 `CampaignEvents` 系统里的注册全部摘掉——不止这四个。派生类要挂第五个监听，必须在 `base.OnFinalize()` 之后自己清。
- **结盟成立时通知直接消失、不补决策**（`OnAllianceStarted` 传 `false`）。因为提案已经兑现，没有东西需要再决策。
- **补决策的双重判空**：`Clan.PlayerClan.Kingdom != null` 和 `Clans.Count > 1` 都要满足。玩家是唯一氏族时这条通知就纯粹消失。
- **`StartAllianceDecision` 去重只看王国，不看玩家是否已经投过票。** `UnresolvedDecisions.FirstOrDefault(s => (s as StartAllianceDecision)?.KingdomToStartAllianceWith == _offeringKingdom)` 为 null 才会补。
- **`CanMakeDecision` 的返回值被丢弃。** `out textObject` 拿到的失败理由在这条路径上不显示——失败就什么都不补，也没有任何提示。
- **两个构造器版本的 `AllianceOfferMapNotification` 只有一个带 `offeringKingdom`。** 用无参版造的数据，`_offeringKingdom` 会是 null，后面每个比较都会走「不相等」分支，通知点开必然显示「不再相关」。

## 跨版本提示

**public 面在 1.3.0 → 1.5.3 完全不变**：一个构造器 + 一个 `public override void OnFinalize()`。1.3.15 行数 121→122，1.4.6/1.4.7/1.5.3 涨到 126 行，差异全部来自 Token 注释重排、decompiled 排版从 `delegate() {` 改成 `delegate`、以及 LINQ 调用被换成 `Enumerable.FirstOrDefault` 的静态形式。

**上游有两处会打断编译的改动：**

- `StartAllianceDecision.CanMakeDecision(out TextObject)` 在 1.3.15 起多一个 `bool` 形参（本类内部传 `false`）。抄这段代码到新版必须跟目标版本签名走。
- `Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>().OnAllianceOfferedToPlayer(...)` 在 **1.5.3 被包了 null 检查**：取到 behavior 后先判空再调。1.3.0 是裸调——没注册 `IAllianceCampaignBehavior` 时直接 NRE。
- 本地化串 1.3.0 是无 key 的硬编码英文，1.3.15 起换成 `{=4vPm9bFW}`。

## 依赖关系

- 基类与生命周期：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 定义 `ExecuteAction` / `ExecuteRemove` / `_onInspect`；[ViewModel](../../core-extra/ViewModel) 是其 UI 绑定底座
- 注册表与持有者：[MapNotificationVM](../MapNotificationVM) 用 `Activator.CreateInstance` 造出本类实例并挂上移除/聚焦回调
- 输入数据：[AllianceOfferMapNotification](../../campaign/AllianceOfferMapNotification) 提供 `OfferingKingdom` 与 `IsValid()`
- 决策落点：[StartAllianceDecision](../../campaign/StartAllianceDecision) 是 `_onInspect` 与 `OnFinalize` 共同构造的对象，基类为 [KingdomDecision](../../campaign/KingdomDecision)
- 交棒对象：[IAllianceCampaignBehavior](../../campaign/IAllianceCampaignBehavior) 的 `OnAllianceOfferedToPlayer` 接管玩家接受后的流程
- 失效事件源：[CampaignEvents](../../campaign/CampaignEvents) 的 `WarDeclared` / `OnAllianceStartedEvent` / `KingdomDestroyedEvent` / `OnClanChangedKingdomEvent`
- 玩家身份：[Clan](../../campaign/Clan).PlayerClan 与 [Hero](../../campaign/Hero).MainHero
- 同族实现：[AcceptCallToWarOfferNotificationItemVM](../AcceptCallToWarOfferNotificationItemVM) 结构几乎逐行相同，多一个被攻击的王国参数
- 桶首页：[viewmodel API 分区](../)
