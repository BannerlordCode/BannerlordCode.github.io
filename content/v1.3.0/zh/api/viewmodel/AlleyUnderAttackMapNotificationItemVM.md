---
title: "AlleyUnderAttackMapNotificationItemVM"
description: "「暗巷被攻击」地图通知条目：构造时挂 CampaignEvents.SettlementEntered，玩家队伍一进那条暗巷就自毁；点开只是把镜头移过去。NotificationIdentifier 误写成 \"alley_under_attack\" 之外还多了自清理逻辑。"
---

# AlleyUnderAttackMapNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyUnderAttackMapNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/AlleyUnderAttackMapNotificationItemVM.cs`（全文 36 行）

## 概述

全文 36 行、**零个 public 成员声明**——和 [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) 一样，它的全部存在理由是构造器里的两行设置：`NotificationIdentifier` 和 `_onInspect`。**但它比那个兄弟多一件事：挂一个 `CampaignEvents.SettlementEntered` 监听来自毁。**

构造器（第 12–21 行）做四件事：

```csharp
public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data) : base(data)
{
    this._alley = data.Alley;
    base.NotificationIdentifier = "alley_under_attack";
    CampaignEvents.SettlementEntered.AddNonSerializedListener(this, new Action<MobileParty, Settlement, Hero>(this.OnSettlementEnter));
    this._onInspect = delegate()
    {
        base.GoToMapPosition(this._alley.Settlement.Position);
    };
}
```

**`_onInspect` 的内容只有一句：把镜头移到暗巷所在聚落的位置。** 它不弹窗、不跳转、不做任何决策——纯粹是个导航行为。对比一下：被攻击通知是「看一眼地图」，主人死了通知是「去做一件事」。

## 心智模型

**把它想成「一条会自动消失的路标，而不是一个任务」。** 这是它与同族通知最本质的区别：主人在暗巷挂着通知**不会**自己消失（[AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) 没有 `OnFinalize`、没有事件监听），而这条被攻击通知一旦玩家亲自走到那里就自动消失。

自毁逻辑只有一个触发条件：

```csharp
private void OnSettlementEnter(MobileParty party, Settlement settlement, Hero hero)
{
    if (party != null && party.IsMainParty && settlement == this._alley.Settlement)
    {
        CampaignEventDispatcher.Instance.RemoveListeners(this);
        base.ExecuteRemove();
    }
}
```

三个条件缺一不可：`party` 非 null（事件在某些路径下会传 null）、`party.IsMainParty`（**只有玩家自己的队伍算**，友军进入不会消掉这条通知）、`settlement == this._alley.Settlement`（**必须是被攻击的那条暗巷所在的聚落**，进同一城里的另一条暗巷不会触发）。

**注意它先 `RemoveListeners(this)` 再 `ExecuteRemove()`，但没有覆写 `OnFinalize`。** 所以清理走的是「事件触发时主动摘」这条路，而不是基类的 `OnFinalize` 钩子。**后果是：玩家右键手动删掉这条通知时（`ExecuteRemove()` 而没有先走 `OnSettlementEnter`），监听不会被摘掉——它会一直挂在 `CampaignEvents.SettlementEntered` 上，直到下一次玩家进那条聚落时才被摘。** 每次误删都泄漏一个挂在静态事件上的 VM 实例。这是一个真实的、可以从源码逐行读出来的行为差异。

`GoToMapPosition` 是基类的 `internal void GoToMapPosition(CampaignVec2 position)`——**`internal`，不是 `protected`**。本类能调它是因为两个类型在同一个程序集（`TaleWorlds.CampaignSystem.ViewModelCollection`）里。**mod 的程序集不在这个程序集里，所以派生类调不到它**——这一点对写派生类是硬约束。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data)` | **本类唯一的 public 成员。** 四件事：存 `_alley`、设 `NotificationIdentifier = "alley_under_attack"`、挂 `CampaignEvents.SettlementEntered`、把 `_onInspect` 指向「移镜头」。由 [MapNotificationVM](../MapNotificationVM) 反射构造。 |

私有成员：`OnSettlementEnter(MobileParty, Settlement, Hero)`、`private Alley _alley`。**没有 `OnFinalize` 覆写**——这是它与另两个暗巷通知最大的结构差异。

继承来但属于本页行为链的成员：`ExecuteAction()`（执行 `_onInspect`）、`ExecuteRemove()`、`GoToMapPosition(CampaignVec2)`（**`internal`，外部程序集不可用**）、`FastMoveCameraToPosition`（**`private protected`，外部程序集同样不可用**）、`NavigationHandler`（`public INavigationHandler { get; private set; }`，走 `SetNavigationHandler` 挂，**这是外部程序集唯一能用的跳转入口，但 `OpenKingdom` / `OpenClan` 是 [MapNavigationExtensions](../../campaign/MapNavigationExtensions) 提供的扩展方法（接口本体没有）**）。

## 真实示例

先说清楚一件事：**外部程序集无法移镜头。** `GoToMapPosition` 是 `internal`，`FastMoveCameraToPosition` 是 `private protected`——两者都只在 `TaleWorlds.CampaignSystem.ViewModelCollection` 这个程序集里可见。所以 mod 的通知能做的只有「自毁」和「交给 `NavigationHandler` 做界面跳转」。

```csharp
using System;
using TaleWorlds.CampaignSystem.MapNotificationTypes;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public class MyUnderAttackMapNotification : InformationData
{
    public Settlement TargetSettlement { get; private set; }

    public MyUnderAttackMapNotification(Settlement target, TextObject description)
        : base(description)
    {
        this.TargetSettlement = target;
    }

    public override TextObject TitleText
    {
        get { return new TextObject("{=aBcDeF12}我方领地受袭", null); }
    }

    public override string SoundEventPath
    {
        get { return string.Empty; }
    }
}

public class MyUnderAttackItemVM : MapNotificationItemBaseVM
{
    private readonly Settlement _target;

    public MyUnderAttackItemVM(MyUnderAttackMapNotification data)
        : base(data)
    {
        this._target = data.TargetSettlement;
        this.NotificationIdentifier = "my_under_attack";

        // 移镜头这条路在外部程序集走不通（GoToMapPosition 是 internal，
        // FastMoveCameraToPosition 是 private protected）。
        // 能做的是交给 NavigationHandler —— 它的实现类才是同程序集里的。
        this._onInspect = delegate
        {
            INavigationHandler handler = this.NavigationHandler;
            if (handler == null)
            {
                return;
            }
            // MapNavigationExtensions 里的扩展方法，接口本体没有。
            handler.OpenKingdom(data.LostSettlement.MapFaction);
            this.ExecuteRemove();
        };

        CampaignEvents.SettlementEntered.AddNonSerializedListener(
            this, new Action<MobileParty, Settlement, Hero>(this.OnSettlementEnter));
    }

    private void OnSettlementEnter(MobileParty party, Settlement settlement, Hero hero)
    {
        if (party != null && party.IsMainParty && settlement == this._target)
        {
            CampaignEventDispatcher.Instance.RemoveListeners(this);
            this.ExecuteRemove();
        }
    }

    // 官方没有覆写 OnFinalize，本例补上：
    // 玩家手动删通知时事件监听不会自动摘，这里兜底。
    public override void OnFinalize()
    {
        base.OnFinalize();
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

**这个 VM 必须通过 `MapNotificationVM.RegisterMapNotificationType(typeof(MyUnderAttackMapNotification), typeof(MyUnderAttackItemVM))` 注册才会被造出来**，否则 `GetNotificationFromData` 查不到类型就静默返回 `null`（见 [MapNotificationVM](../MapNotificationVM)）。`NavigationHandler` 由 `MapNotificationVM` 构造之后用 `SetNavigationHandler` 挂上。

## 风险与边界

- **零 public 成员。** 对外可调的只有基类的 `ExecuteAction()` / `ExecuteRemove()` / `ExecuteSetFocused()` / `ExecuteSetUnfocused()` / `ManualRefreshRelevantStatus()` / `SetNavigationHandler()` / `SetFastMoveCameraToPosition()` / `SetRemoveInputKey()`。
- **没有 `OnFinalize` 覆写 → 手动删除会泄漏事件监听。** 玩家右键删掉这条通知后，VM 仍作为监听者挂在静态事件 `CampaignEvents.SettlementEntered` 上，直到玩家进那条聚落才被摘。反复删会反复泄漏。
- **`GoToMapPosition` 是 `internal`，`FastMoveCameraToPosition` 是 `private protected`。** 两个都只在 `TaleWorlds.CampaignSystem.ViewModelCollection` 程序集内可见，**mod 的派生类一个都调不到**。这意味着「点通知移镜头」这件事外部程序集复现不了；能复用的是「点通知 → `NavigationHandler` 跳别的界面」和「自毁」这两半。
- **`FastMoveCameraToPosition` 为 null 时官方那条 `_onInspect` 静默无反应。** 它由 [MapNotificationVM](../MapNotificationVM) 在构造后挂上；实例不经过那条流程就为 null，而 `GoToMapPosition` 的第一件事就是判它 null 然后 return。
- **`this._alley.Settlement` 有两处不带判空的解引用**：构造器的 `_onInspect` 闭包里直接 `.Settlement.Position`。用 `(TextObject)` 那个无主暗巷的构造器造数据，点开就 NRE。
- **`ManualRefreshRelevantStatus()` 未覆写**，是基类的空实现。所以这条通知的「是否还重要」永远不会被重算——它只靠 `SettlementEntered` 自毁。
- **`IsValid()` 未覆写**，父类 [InformationData](../../core-extra/InformationData) 默认恒返回 true。攻击已经结束（暗巷已归属另一方）时这条通知**不会自己失效**。

## 跨版本提示

**public 面在 1.3.0 → 1.5.3 五棵树里零变化**：只有一个构造器。行数 36 → 37 → 37 → 37 → 37，差异只有 decompiled 排版（`public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data)` 与 `: base(data)` 拆行、`delegate() {` 写成 `delegate`）和 Token 注释的 RVA 重编号。

**跨版本上没有编译层面的风险**：`CampaignEvents.SettlementEntered` 的签名 `Action<MobileParty, Settlement, Hero>` 在五棵树里一致，`AlleyUnderAttackMapNotification.Alley` 与 `Alley.Settlement` 也没变。

**唯一的行为差异是「仍然没有 `OnFinalize`」**——这是从 1.3.0 一路带到 1.5.3 的形状，不是某一版的疏漏。**你在自己的派生类里补 `OnFinalize` 是安全的、且在所有版本上都有效。**

## 依赖关系

- 基类与生命周期：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 提供 `_onInspect` / `ExecuteAction()` / `ExecuteRemove()` / `GoToMapPosition`（internal）/ `FastMoveCameraToPosition`（private protected）；UI 底座是 [ViewModel](../../core-extra/ViewModel)
- 注册与反射构造：[MapNotificationVM](../MapNotificationVM) 的 `PopulateTypeDictionary` / `RegisterMapNotificationType` / `GetNotificationFromData`
- 输入数据：[AlleyUnderAttackMapNotification](../../campaign/AlleyUnderAttackMapNotification) 提供 `Alley`，基类为 [InformationData](../../core-extra/InformationData)
- 自毁触发源：[CampaignEvents](../../campaign/CampaignEvents) 的 `SettlementEntered`；摘监听走 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
- 镜头移动：[CampaignVec2](../../campaign/CampaignVec2) 是 `GoToMapPosition` / `FastMoveCameraToPosition` 的参数类型
- 攻击行为侧：[IAlleyCampaignBehavior](../../campaign/IAlleyCampaignBehavior) 决定「被攻击」这个状态本身，本类只负责呈现
- 兄弟通知：[AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM)（Inquiry + 跳转，零事件）· [ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM)（三个事件 + 有 `OnFinalize`）
- 桶首页：[viewmodel API 分区](../)
