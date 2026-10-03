---
title: "ArmyCreationNotificationItemVM"
description: "「你（或你的王国）新建了一支军队」这条地图通知的条目视图模型。它公开一个只读 Army 属性供外部查询，点击只把镜头移到军旗位置，并订阅三个 CampaignEvents 在玩家入军、军队解散、家族换王国时自行消失——且在 OnFinalize 里逐个解绑，是本目录的规范写法。"
---
# ArmyCreationNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyCreationNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/ArmyCreationNotificationItemVM.cs`

## 概述

一支新军队建立时，地图通知面板出现这一行。与本目录里那些"政治要约"类通知不同，本类的内容极简：**只暴露一个 `Army` 属性**，没有任何文字、旗帜或数值的自定义填充——标题与描述全部由基类根据数据生成。

构造函数：

```csharp
public ArmyCreationNotificationItemVM(ArmyCreationMapNotification data)
    : base(data)
{
    Army = data.CreatedArmy;
    base.NotificationIdentifier = "armycreation";
    _onInspect = delegate
    {
        GoToMapPosition(Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position);
    };
    CampaignEvents.OnPartyJoinedArmyEvent.AddNonSerializedListener(this, OnPartyJoinedArmy);
    CampaignEvents.ArmyDispersed.AddNonSerializedListener(this, OnArmyDispersed);
    CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(this, OnClanChangedKingdom);
}
```

三个值得注意的点：

1. **`public Army Army { get; }` 是 get-only 的**，构造时从 `data.CreatedArmy` 赋值，之后永不改变。这是本类型对外暴露的唯一成员，也是外部想拿到"这条通知对应哪支军队"时的入口。
2. **点击是"安全降级"的镜头移动**：`Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position`。三级空传播——军队可能已解散、军旗可能还没生成，都退回到主队位置。而它的三个事件回调（尤其是 `OnArmyDispersed`）正是在军队真的解散时把整行撤掉，所以这两个空传播是并行的双保险。
3. **`OnFinalize` 正确解绑三个监听**，用 `ClearListeners(this)` 逐个清：

   ```csharp
   public override void OnFinalize()
   {
       base.OnFinalize();
       CampaignEvents.OnPartyJoinedArmyEvent.ClearListeners(this);
       CampaignEvents.ArmyDispersed.ClearListeners(this);
       CampaignEvents.OnClanChangedKingdomEvent.ClearListeners(this);
   }
   ```

   这是本目录里**该写的标准形态**。对照 `AlleyUnderAttackMapNotificationItemVM`：那个注册了一个监听却不覆写 `OnFinalize`，解绑只写在回调内部，会泄漏。

## 心智模型

把它读成**「一条带军队句柄的地图通知，自动消失条件覆盖了玩家的三种后续动作」**：

- **谁 new 它**：`MapNotificationVM` 第 118 行 `_itemConstructors.Add(typeof(ArmyCreationMapNotification), typeof(ArmyCreationNotificationItemVM))`，第 199 行 `Activator.CreateInstance` 反射构造。**无法替换。**
- **谁持引用**：`MapNotificationVM` 的通知条目列表。
- **绑定到哪个 View 属性**：只有基类的。本类不新增 `[DataSourceProperty]`；它的 `Army` 属性**不是**绑定点（无 `[DataSourceProperty]` 特性），而是给 C# 代码用的查询入口。
- **什么时候 Dispose**：列表回收时调 `OnFinalize()`，本类覆写它并逐个 `ClearListeners(this)`。**无泄漏路径。**
- **三种自动消失的语义各不相同，值得分开看**：
  - `OnPartyJoinedArmy(MobileParty party)` —— 玩家主队**加入了**这支军队（`party == MobileParty.MainParty && party.Army == Army`）。通知的目的是"告诉你有支军队可用"，你用了它，提示就没必要了。
  - `OnArmyDispersed(Army, Army.ArmyDispersionReason, bool)` —— 这支军队**解散了**。注意第二个参数 `Army.ArmyDispersionReason` 被命名为 `arg2` 且**完全未使用**，判定只看第一个参数是否是同一个 `Army` 引用。
  - `OnClanChangedKingdom(Clan, Kingdom, Kingdom, ..., bool)` —— 玩家的家族换了王国（`oldKingdom != newKingdom`）。军队归属随之改变，通知作废。
- **`OnClanChangedKingdom` 用 `MobileParty.MainParty.ActualClan` 而不是 `Clan.PlayerClan`**。这两者在绝大多数情况下相同，但 `ActualClan` 跟随实际归属（含被俘、附庸等异常状态）。这是本类与目录里政治类通知（用 `Clan.PlayerClan`）的一处细微差异。
- **点击路径不检查 `IsMainParty` 之类的守卫**，只靠空传播兜底。若 `MobileParty.MainParty` 本身为 null（战役未初始化），兜底值也会 NRE。
- **常见误用**：把 `Army` 当成实时状态查询。军队解散后属性仍然指向那个（已失效的）`Army` 引用；它不会变成 null，也不会通知你。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Army` | `public Army Army { get; }` | **get-only 属性**，构造时从 `data.CreatedArmy` 赋值。外部代码据此知道这条通知对应哪支军队。**不是绑定属性**，也不随军队解散更新。 |
| 构造函数 | `public ArmyCreationNotificationItemVM(ArmyCreationMapNotification data)` | 反射调用。赋 `Army`、设 `NotificationIdentifier = "armycreation"`、设 `_onInspect`、订阅三个 `CampaignEvents`。 |
| `_onInspect`（基类 `protected Action`） | 构造函数中赋值的闭包 | `GoToMapPosition(Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position)`——三级空传播，军队/军旗缺失时退回主队位置。 |
| `OnPartyJoinedArmy` | `private void OnPartyJoinedArmy(MobileParty party)` | 玩家主队加入这支军队时 `ExecuteRemove()`。判据是 `party == MobileParty.MainParty && party.Army == Army`。 |
| `OnArmyDispersed` | `private void OnArmyDispersed(Army arg1, Army.ArmyDispersionReason arg2, bool isPlayersArmy)` | 参数对应的军队就是 `Army` 时 `ExecuteRemove()`。`arg2`（解散原因）与 `isPlayersArmy` **均未使用**——解散原因是什么完全不影响判定。 |
| `OnClanChangedKingdom` | `private void OnClanChangedKingdom(Clan, Kingdom oldKingdom, Kingdom newKingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool)` | 玩家的家族换王国且 `oldKingdom != newKingdom` 时 `ExecuteRemove()`。用 `MobileParty.MainParty.ActualClan` 判定身份。 |
| `OnFinalize` | `public override void OnFinalize()` | `base.OnFinalize()` 之后对三个事件各调一次 `ClearListeners(this)`。**本目录解绑的规范写法。** |
| `NotificationIdentifier` | 基类属性，设为 `"armycreation"` | 选择通知图标与布局资源。 |

## 真实示例

通过 `Army` 属性把这条通知与战役对象连起来（这是本类对外的主要用途）：

```csharp
using TaleWorlds.CampaignSystem.Party;

// Army 是 get-only 的，只在构造时赋值一次，之后永不更新。
public bool IsStillAValidArmy(ArmyCreationNotificationItemVM item)
{
    Army army = item.Army;
    if (army == null)
    {
        return false;
    }

    // 军队解散后属性仍指向那个对象，所以要向战役侧确认它还活着。
    return army.LeaderParty != null;
}
```

复刻它的自动消失判据——三条各管一件事：

```csharp
using TaleWorlds.CampaignSystem.Party;

public class MyArmyNotificationWatcher : CampaignBehaviorBase
{
    private Army _watched;

    public void Watch(Army army)
    {
        _watched = army;
    }

    public override void RegisterEvents()
    {
        CampaignEvents.OnPartyJoinedArmyEvent.AddNonSerializedListener(this, OnPartyJoinedArmy);
        CampaignEvents.ArmyDispersed.AddNonSerializedListener(this, OnArmyDispersed);
    }

    private void OnPartyJoinedArmy(MobileParty party)
    {
        if (party == MobileParty.MainParty && party.Army == _watched)
        {
            _watched = null;
        }
    }

    private void OnArmyDispersed(Army army, Army.ArmyDispersionReason reason, bool isPlayersArmy)
    {
        // 与原版一致：只看第一个参数，解散原因与是否玩家军队都不参与判定。
        if (army == _watched)
        {
            _watched = null;
        }
    }

    public override void UnregisterEvents()
    {
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

复刻点击时的三级降级镜头移动：

```csharp
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public void FocusArmyLeaderOrFallBack(Army army)
{
    // 与 _onInspect 的 Army?.LeaderParty?.Position ?? MobileParty.MainParty.Position 等价。
    Vec2 target = army != null && army.LeaderParty != null
        ? army.LeaderParty.Position
        : MobileParty.MainParty.Position;

    Debug.Print("Focusing at " + target);
}
```

## 风险与边界

- **生命周期是本目录里最规范的**：注册三个监听，`OnFinalize` 里逐个 `ClearListeners(this)`。**无泄漏路径。** 继承本类时若新增监听，必须同步在 `OnFinalize` 里补上对应解绑，否则就退化成 `AlleyUnderAttackMapNotificationItemVM` 那种泄漏结构。
- **`Army` 属性会过期但不会报警**。军队解散后属性仍指向原对象、不会变 null、也不会触发 `PropertyChanged`（它不是 `[DataSourceProperty]`，且 get-only）。**任何缓存了这条通知的代码都必须自己去向战役侧确认军队是否还活着。**
- **`OnArmyDispersed` 忽略解散原因**。`Army.ArmyDispersionReason` 与 `isPlayersArmy` 两个参数在回调里完全没用到。也就是说"玩家主动解散"和"被 AI 打散"会得到完全相同的处理——都是撤下通知、都不做任何额外提示。
- **`MobileParty.MainParty.ActualClan` 可能与 `Clan.PlayerClan` 不同**（家族被俘、附庸等异常状态）。本类用 `ActualClan`，而同目录政治类通知用 `Clan.PlayerClan`。这个差异是有意还是历史遗留无法从源码判断，**依赖它做判定的 mod 要注意**。
- **点击路径的三级空传播最后一级仍会 NRE**：若 `MobileParty.MainParty` 本身为 null（战役未完全初始化），`?? MobileParty.MainParty.Position` 求值即崩。空传播只保护了前两级。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。「有一支新军队」这件事由战役侧持久化，这条通知行不是。
- **本类不填充任何文字**。标题与描述全部来自基类根据 `ArmyCreationMapNotification` 生成。若你需要自定义文案，必须覆写 `RefreshValues()`——原版没有覆写。
- **native 边界**：无。纯托管。`Army.LeaderParty.Position` 返回的是战役侧的地图坐标。
- **跨版本**：三个 `CampaignEvents` 访问器（`OnPartyJoinedArmyEvent` / `ArmyDispersed` / `OnClanChangedKingdomEvent`）与 `Army.ArmyDispersionReason` 均为 v1.4.5 形状。

## 依赖关系

- ↑ 父类：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) —— 提供 `_onInspect`、`ExecuteRemove()`、`GoToMapPosition`、`NotificationIdentifier`
- ↔ 同级：[MapNotificationVM](../MapNotificationVM) —— 类型构造器表与唯一构造入口
- ↔ 同级：[ArmyDispersionItemVM](../ArmyDispersionItemVM) —— 军队**解散**时的那一条，与本类构成军队生命周期的两端
- ↔ 同级：[AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM) —— 同样订阅 `CampaignEvents` 却不覆写 `OnFinalize` 的反例，对照可看清解绑规范
- → 数据源：[ArmyCreationMapNotification](../../campaign/ArmyCreationMapNotification)
- → 军队：[Army](../../campaign-ext/Army)、[MobileParty](../../campaign/MobileParty)
- → 事件源：[CampaignEvents](../../campaign-ext/CampaignEvents) —— 三个监听的来源
- ↑ 坐标类型：[MBBindingList 所在程序集](../../core-extra/MBBindingList) 同属 `TaleWorlds.Library` 的 `Vec2`
