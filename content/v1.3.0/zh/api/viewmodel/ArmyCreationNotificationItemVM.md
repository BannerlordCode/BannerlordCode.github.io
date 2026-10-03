---
title: "ArmyCreationNotificationItemVM"
description: "「军队成立」地图通知条目：唯一带 public Army 属性的通知，构造器挂三个 CampaignEvents 自监听（队伍加入 / 军队解散 / 氏族换王国），任何一条命中就自毁，OnFinalize 负责摘干净。"
---

# ArmyCreationNotificationItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyCreationNotificationItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/ArmyCreationNotificationItemVM.cs`（全文 76 行）

## 概述

**本批里唯一在通知条目上暴露一个域对象 public 属性的类**：`public Army Army { get; }`。其他通知把 `Army` / `Alley` 全锁在私有字段里（见 [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) 的 `private Alley _alley`），只有本类把它放了出来——**而且是只读的，没有 setter**。

构造器（第 16–38 行）做的五件事：`this.Army = data.CreatedArmy`；`NotificationIdentifier = "armycreation"`；装 `_onInspect`（移镜头到军队领袖队伍的位置）；挂三个 `CampaignEvents` 监听。`OnFinalize`（第 68–74 行）逐个 `ClearListeners(this)` 把它们摘掉。

## 心智模型

**把它想成「一句需要持续成立的陈述」**：一句陈述要留在地图上，它的内容就必须一直为真。

`_onInspect` 的实现暴露了这句话的内容是什么：

```csharp
this._onInspect = delegate()
{
    Army army = this.Army;
    CampaignVec2? campaignVec;
    if (army == null) { campaignVec = null; }
    else
    {
        MobileParty leaderParty = army.LeaderParty;
        campaignVec = ((leaderParty != null) ? new CampaignVec2?(leaderParty.Position) : null);
    }
    base.GoToMapPosition(campaignVec ?? MobileParty.MainParty.Position);
};
```

**镜头目标 = 这支军队的领袖队伍位置；拿不到就退回玩家自己的位置。** `GoToMapPosition` 是基类的 `internal void GoToMapPosition(CampaignVec2)`，判空后转调 `FastMoveCameraToPosition`（外部程序集两者都不可见，见 [AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM)）。

三个自监听事件就是「陈述不再为真」的三种情况：

```csharp
private void OnClanChangedKingdom(Clan clan, Kingdom oldKingdom, Kingdom newKingdom, ...) {
    if (clan == MobileParty.MainParty.ActualClan && oldKingdom != newKingdom) { base.ExecuteRemove(); } }

private void OnArmyDispersed(Army arg1, Army.ArmyDispersionReason arg2, bool isPlayersArmy) {
    if (arg1 == this.Army) { base.ExecuteRemove(); } }

private void OnPartyJoinedArmy(MobileParty party) {
    if (party == MobileParty.MainParty && party.Army == this.Army) { base.ExecuteRemove(); } }
```

第三条是**玩家自己也加入了这支军队**——注意它同时判 `party == MobileParty.MainParty` 和 `party.Army == this.Army`，两条都要满足。这意味着通知既能被「别人的军队解散」干掉，也能被「玩家自己的队伍加入了目标军队」干掉。

**`OnFinalize` 是本类与「无事件的暗巷通知」最大的结构差异**：它显式列举了三个 `ClearListeners`，而不是在事件回调里顺手 `RemoveListeners(this)`。**这个写法的好处是玩家手动删通知时监听也会被摘掉**——不漏。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Army` | `public Army Army { get; }` | **只读、无 setter。** 值在构造器里从 `data.CreatedArmy` 一次性取得，之后不再更新——**军队解散后它仍然指向那个对象（可能是 null）**。要做逻辑判断时先判 null。 |
| 构造 | `public ArmyCreationNotificationItemVM(ArmyCreationMapNotification data) : base(data)` | 取 `CreatedArmy`、设 `NotificationIdentifier = "armycreation"`、装 `_onInspect`、挂三个事件。**由 [MapNotificationVM](../MapNotificationVM) 反射构造，参数必须是单个数据对象。** |
| `OnFinalize` | `public override void OnFinalize()` | 先 `base.OnFinalize()`，再对 `OnPartyJoinedArmyEvent` / `ArmyDispersed` / `OnClanChangedKingdomEvent` 各调一次 `ClearListeners(this)`。**这是清理，不改任何状态，也不返回任何东西。** |

私有成员：`OnClanChangedKingdom` / `OnArmyDispersed` / `OnPartyJoinedArmy` 三个事件回调。

继承来但本页依赖的成员：`_onInspect`、`ExecuteRemove()`、`GoToMapPosition(CampaignVec2)`（internal）、`Data`。

## 真实示例

`Army` 属性是 public 的，所以外部可以拿它做逻辑——但构造器签名锁死了数据类型，派生时只能沿同一个方向走：

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapNotificationTypes;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes;
using TaleWorlds.Library;

// 派生一条自己的「军队变化」通知：复用官方的自毁模式，
// 但把镜头目标从「领袖队伍」换成「军队里人数最多的那支队伍」。
public class MyArmyChangeNotificationItemVM : ArmyCreationNotificationItemVM
{
    private readonly MobileParty _focusParty;

    public MyArmyChangeNotificationItemVM(ArmyCreationMapNotification data)
        : base(data)
    {
        this.NotificationIdentifier = "my_army_change";
        this._focusParty = data.CreatedArmy != null ? data.CreatedArmy.LeaderParty : null;
        // 重新装 _onInspect：父类那个是 private 闭包，只能整体替换
        this._onInspect = delegate
        {
            if (this._focusParty != null)
            {
                MBDebug.Print("焦点队伍 " + this._focusParty.Name);
            }
        };
    }

    // 军队解散后要清掉自己持有的队伍引用，
    // 顺便把通知摘掉——否则 _focusParty 会一直指着已解散的队伍。
    public override void OnFinalize()
    {
        base.OnFinalize();
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

上例里 `ArmyCreationMapNotification.CreatedArmy` 的类型是 `Army`，它继承 `CampaignObjectBase`，`LeaderParty` 是 `MobileParty`——所以 `data.CreatedArmy.LeaderParty` 的解引用链在 1.3.0 源码里逐段对得上。

**注意：本类没有 public 构造器以外的入口注册表钩子。** 想让它被造出来，仍需通过 [MapNotificationVM](../MapNotificationVM) 的 `RegisterMapNotificationType` 用**你自己的数据子类**注册一份；官方类型 `ArmyCreationMapNotification` 已经绑定了本类（第 52 行），再注册会覆盖官方那条。

## 风险与边界

- **`Army` 是快照，可能指向已解散的军队。** 属性无 setter，构造后不再更新。`OnArmyDispersed` 命中后通知就消失了，所以「读到 null」和「读到已解散对象」都取决于通知还挂不挂着。
- **无 setter。** C# 里赋值编译失败；XML 绑定写入走 `SetPropertyValue`，会被**静默忽略**（见 [ViewModel](../../core-extra/ViewModel)）。
- **`_onInspect` 里 `MobileParty.MainParty.Position` 是裸访问。** 在战役之外（菜单、加载中）触发点击会 NRE。
- **三个事件回调都不判 `MobileParty.MainParty` 的 null。** `OnPartyJoinedArmy` 第一句就 `party == MobileParty.MainParty`，`MainParty` 为 null 时只是比较返回 false，不会崩；但 `OnClanChangedKingdom` 里的 `MobileParty.MainParty.ActualClan` 会崩。
- **`OnFinalize` 逐个 `ClearListeners` 而不是一次 `RemoveListeners(this)`。** 这是**更精确**的写法（只摘本类挂的那三个），但派生类挂第四个事件时必须在 `base.OnFinalize()` 之后自己清——`RemoveListeners(this)` 会把全部清掉，包括官方那三个，行为等价但顺序不同。
- **`NotificationIdentifier = "armycreation"` 无空格无下划线**，与 `ArmyDispersionItemVM` 的 `"armydispersion"` 同一风格；而两个暗巷通知与两个王国通知用的是 `"alley_leader_died"` / `"ransom"` 风格。**UI 侧按这个字符串选 prefab，抄写时不要擅自改格式。**
- **零保护：`data.CreatedArmy` 为 null 时 `this.Army` 就是 null**，而 `OnArmyDispersed` 的 `arg1 == this.Army` 判的是引用相等——**`null == null` 为真**，也就是说一条没有军队数据的通知会被任何一次军队解散事件干掉。

## 跨版本提示

**public 面在五棵源码树里零变化**：一个 `public Army Army { get; }`、一个构造器、一个 `public override void OnFinalize()`。行数 76 → 77 → 77 → 77 → 77，差异只有 decompiled 拆行（`: base(data)` 独立成行、`delegate() {` → `delegate`）与 Token 注释的 RVA 重编号。1.5.3 也没有新成员。

**跨版本风险全在上游**：

- `Army.LeaderParty` 与 `MobileParty.Position` 的形状在五棵树里稳定；
- `CampaignEvents.OnPartyJoinedArmyEvent` / `ArmyDispersed` / `OnClanChangedKingdomEvent` 三个事件的委托签名也没变；
- 但 `ArmyCreationMapNotification.CreatedArmy` 的构造器形参类型由 `Army` 决定——若你派生的数据子类换了这个类型，`Activator` 依然能造出 VM，但 `this.Army` 会是 null，**这属于数据侧的问题，不是本类的。**

**结论：拿这个类当 `MapNotificationItemBaseVM` 派生模板是安全的，跨 1.3 → 1.5 不会编译不过。**

## 依赖关系

- 基类与生命周期：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 提供 `_onInspect` / `ExecuteAction()` / `ExecuteRemove()` / `GoToMapPosition`（internal）/ `Data`；UI 底座是 [ViewModel](../../core-extra/ViewModel)
- 注册与反射构造：[MapNotificationVM](../MapNotificationVM) 的 `PopulateTypeDictionary` / `RegisterMapNotificationType` / `GetNotificationFromData`
- 输入数据：[ArmyCreationMapNotification](../../campaign/ArmyCreationMapNotification) 提供 `CreatedArmy`，基类为 [InformationData](../../core-extra/InformationData)
- 域对象：[Army](../../campaign/Army) 是本类唯一暴露的 public 属性；`Army.LeaderParty` / `Army.Parties` / `Army.Cohesion` 定义在它上面
- 坐标与队伍：[MobileParty](../../campaign/MobileParty) 提供 `Position` / `LeaderParty` / `Army` / `ActualClan`；[CampaignVec2](../../campaign/CampaignVec2) 是镜头参数类型
- 自毁触发源：[CampaignEvents](../../campaign/CampaignEvents) 的 `OnPartyJoinedArmyEvent` / `ArmyDispersed` / `OnClanChangedKingdomEvent`；摘监听走 [CampaignEventDispatcher](../../campaign/CampaignEventDispatcher)
- 氏族换王国的原因枚举：[ChangeKingdomActionDetail](../../campaign-ext/ChangeKingdomActionDetail)
- 兄弟通知：[ArmyDispersionItemVM](../ArmyDispersionItemVM)（同族的解散侧）· [AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM) · [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM)
- 桶首页：[viewmodel API 分区](../)
