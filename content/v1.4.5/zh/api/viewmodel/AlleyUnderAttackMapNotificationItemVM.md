---
title: "AlleyUnderAttackMapNotificationItemVM"
description: "「你的暗巷正在被攻击」这条地图通知的条目视图模型。点击只是把镜头移到该暗巷所属城镇；它唯一的自动行为是监听 CampaignEvents.SettlementEntered，玩家主队进城即自行解绑并消失——而这条解绑路径是它没有 OnFinalize 的直接后果。"
---
# AlleyUnderAttackMapNotificationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class AlleyUnderAttackMapNotificationItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/AlleyUnderAttackMapNotificationItemVM.cs`

## 概述

玩家家族在城镇的暗巷被敌方势力攻击时，地图通知面板会出现这一行。整个实现只有 31 行，是本目录里最短的通知条目之一：

```csharp
public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data)
    : base(data)
{
    _alley = data.Alley;
    base.NotificationIdentifier = "alley_under_attack";
    CampaignEvents.SettlementEntered.AddNonSerializedListener(this, OnSettlementEnter);
    _onInspect = delegate
    {
        GoToMapPosition(_alley.Settlement.Position);
    };
}
```

三件事，一件比一件值得注意：

1. **点击只移动镜头**，不打开任何界面。`GoToMapPosition(_alley.Settlement.Position)` 把地图视角移到暗巷所在的城镇——暗巷攻击的具体地点、敌军队列、损失情况都不在这里展示。对比同目录的 `AlleyLeaderDiedMapNotificationItemVM` 会弹一个说明面板并提供跳转按钮。
2. **自动消失的条件只有一个**：玩家主队进入该暗巷所在城镇。`OnSettlementEnter` 检查 `party != null && party.IsMainParty && settlement == _alley.Settlement`，命中就 `CampaignEventDispatcher.Instance.RemoveListeners(this)` 然后 `ExecuteRemove()`。
3. **解绑发生在回调内部，而不是 `OnFinalize` 里**。这是本类型最需要注意的结构特点，下面详述。

## 心智模型

把它读成**「一个镜头定位器 + 一条写在回调里的自毁路径」**：

- **谁 new 它**：`MapNotificationVM` 第 123 行注册 `_itemConstructors.Add(typeof(AlleyUnderAttackMapNotification), typeof(AlleyUnderAttackMapNotificationItemVM))`，第 199 行 `Activator.CreateInstance` 反射构造。**代码里无法替换**。
- **谁持引用**：`MapNotificationVM` 的通知条目列表。
- **绑到哪个 View 属性**：只有基类的（`TitleText`、`DescriptionText`、`NotificationIdentifier`、`IsFocused`、`RemoveInputKey`）。本类不新增任何 `[DataSourceProperty]`。
- **什么时候 Dispose**：列表回收条目时调用 `OnFinalize()`——**而本类没有覆写它**。这是有后果的，见下。
- **这是本目录里唯一一个"解绑只覆盖一条路径"的类型。** 它注册了 `CampaignEvents.SettlementEntered`，解绑却只写在 `OnSettlementEnter` 这一个回调里：

  ```csharp
  private void OnSettlementEnter(MobileParty party, Settlement settlement, Hero hero)
  {
      if (party != null && party.IsMainParty && settlement == _alley.Settlement)
      {
          CampaignEventDispatcher.Instance.RemoveListeners(this);
          ExecuteRemove();
      }
  }
  ```

  **只有玩家主队进入那个特定城镇时才会解绑。** 任何其它移除路径——玩家点了 dismiss、被 `MapNotificationVM` 在场景切换时整体清空、暗巷被摧毁后由别处清理——都不会走到这行 `RemoveListeners`。此时 `CampaignEvents.SettlementEntered` 上仍挂着一个持有 `Alley` 引用的死对象，而**回调本身每次都会先读 `_alley.Settlement`**。这就是泄漏。
  对照本目录的 `ArmyCreationNotificationItemVM`：它同样注册三个 `CampaignEvents` 监听，但它**覆写了 `OnFinalize` 并在其中逐个 `ClearListeners(this)`**。那才是正确写法。
- **`RemoveListeners(this)` 而不是 `ClearListeners`**。前者在全局事件分发器上按 key 移除本对象的**全部**监听，后者是逐个事件调用。用 `RemoveListeners(this)` 一次性清干净是安全的；问题不在这里，而在于**只在一条路径上调用**。
- **不判断攻击是否已经结束**。即使敌人撤退、战斗结束、暗巷毫发无损，只要玩家还没进那个城镇，通知就一直在。它跟踪的是"玩家是否已处理"，不是"威胁是否解除"。
- **常见误用**：把它当成暗巷战况面板。它不显示任何战斗信息，只是一枚镜头快捷方式。
- **常见误用二**：继承它并在 `OnFinalize` 里"顺手"解绑时忘了调用 `base.OnFinalize()`——那会破坏基类的清理。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public AlleyUnderAttackMapNotificationItemVM(AlleyUnderAttackMapNotification data)` | 反射调用。存 `_alley`、设 `NotificationIdentifier = "alley_under_attack"`、订阅 `CampaignEvents.SettlementEntered`、把 `_onInspect` 设为移动镜头的闭包。**不覆写 `OnFinalize`。** |
| `_onInspect`（基类 `protected Action`） | 构造函数中赋值的匿名委托 | 玩家点击时执行 `GoToMapPosition(_alley.Settlement.Position)`。不解引用判断——`_alley` 为 null 会直接 NRE。 |
| `OnSettlementEnter` | `private void OnSettlementEnter(MobileParty party, Settlement settlement, Hero hero)` | 唯一的事件回调。三重条件（party 非空、是主队、聚落等于 `_alley.Settlement`）命中后**先 `RemoveListeners(this)` 再 `ExecuteRemove()`**。这个 `RemoveListeners` 是全类唯一的解绑点。 |
| `_alley` | `private Alley _alley` | 唯一的字段。非 `readonly`，构造后不再赋值，被两个不同位置（`_onInspect` 与 `OnSettlementEnter`）反复解引用。 |
| `NotificationIdentifier` | 基类属性，设为 `"alley_under_attack"` | 选择通知的图标与布局资源。与 `AlleyLeaderDied` 的 `"alley_leader_died"` 是两套独立资源。 |
| `OnFinalize` | **未覆写**（继承基类） | 关键缺失项：基类实现不会解绑 `CampaignEvents.SettlementEntered`。这是本类型唯一的泄漏来源。 |

## 真实示例

复刻它的自动消失条件——注意它判断的是"玩家是否已到场"，而不是"威胁是否解除"：

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public bool ShouldDismissOnEnter(MobileParty party, Settlement settlement, Alley alley)
{
    // 与 OnSettlementEnter 完全相同的三重条件
    if (party == null || !party.IsMainParty)
    {
        return false;
    }

    return settlement == alley.Settlement;
}
```

补上原版缺的那条解绑路径——继承时把 `OnFinalize` 写对：

```csharp
public class MyAlleyUnderAttackNotificationItemVM : AlleyUnderAttackMapNotificationItemVM
{
    public MyAlleyUnderAttackNotificationItemVM(AlleyUnderAttackMapNotification data)
        : base(data)
    {
    }

    public override void OnFinalize()
    {
        // 先让基类走完它自己的清理
        base.OnFinalize();

        // 再补上原版漏掉的那一步：按 key 清掉本对象在全局分发器上的全部监听。
        // 只依赖 OnSettlementEnter 里那一行 RemoveListeners，
        // 意味着"被 dismiss 或被整体清空"这两条路径会留下永久监听的死对象。
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

监听暗巷是否真的被打掉，从而提前撤下通知（原版没有这个行为）：

```csharp
using TaleWorlds.CampaignSystem.Settlements;

public class MyReactiveAlleyNotificationItemVM : AlleyUnderAttackMapNotificationItemVM
{
    public MyReactiveAlleyNotificationItemVM(AlleyUnderAttackMapNotification data)
        : base(data)
    {
        // AfterSettlementEntered 的委托签名与 SettlementEntered 相同：
        // (MobileParty, Settlement, Hero)。
        CampaignEvents.AfterSettlementEntered.AddNonSerializedListener(this, OnAfterSettlementEntered);
    }

    private void OnAfterSettlementEntered(MobileParty party, Settlement settlement, Hero hero)
    {
        ExecuteRemove();
    }

    public override void OnFinalize()
    {
        base.OnFinalize();
        CampaignEventDispatcher.Instance.RemoveListeners(this);
    }
}
```

## 风险与边界

- **泄漏是本类型的主要风险，且由结构决定**。注册了 `CampaignEvents.SettlementEntered` 却没有 `OnFinalize`；解绑只存在于"玩家主队进入该城镇"这一条路径上。玩家 dismiss、场景切换、暗巷被其它系统清理——任何一条不经过 `OnSettlementEnter` 的移除都会把监听留在全局分发器上。死对象仍持有 `Alley` 引用，且每次任何人进入任何城镇都会执行一次回调并解引用 `_alley.Settlement`。**继承这个类时第一件事就是覆写 `OnFinalize` 并调 `RemoveListeners(this)`。**
- **回调每次都会解引用 `_alley`**，包括在玩家进入**别的**城镇时（条件短路发生在 `_alley.Settlement` 之前？不——`party.IsMainParty` 先判，若不是主队直接 return；但若是主队且进入了别的城镇，仍会读 `_alley.Settlement` 做比较）。所以泄漏期间每次主队进城都会 NRE 风险敞口。
- **不判断威胁是否解除**。敌人撤退了通知还在。要做正确行为得自己监听战斗结束并调用 `ExecuteRemove()`。
- **点击路径无 null 防御**：`_onInspect` 里直接 `_alley.Settlement.Position`。数据侧保证非空，但绕过 `MapNotificationVM` 手工构造且 `_alley == null` 时，点击即 NRE。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。「暗巷正在被攻击」这件事本身由战役侧持久化，这条通知行不是。
- **`GoToMapPosition` 只是移动镜头**，不改变任何游戏状态，也不暂停地图。
- **native 边界**：无。纯托管。但 `Alley.Settlement.Position` 最终指向地图坐标，那属于战役侧数据。
- **跨版本**：`CampaignEvents.SettlementEntered` 的委托签名是 `MbEvent<MobileParty, Settlement, Hero>`；`Alley.Settlement` 与 `MapNotificationItemBaseVM.GoToMapPosition` 都是 v1.4.5 的形状。若上游补上 `OnFinalize` 覆写，本页关于泄漏的结论即失效。

## 依赖关系

- ↑ 父类：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) —— 提供 `_onInspect`、`ExecuteRemove()`、`GoToMapPosition`、`NotificationIdentifier`
- ↔ 同级：[MapNotificationVM](../MapNotificationVM) —— 类型构造器表的拥有者与唯一构造入口
- ↔ 同级：[AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) —— 同一暗巷体系，但那个版本**一个监听都不注册**，对比可看清"注册了却不覆写 OnFinalize"的后果
- ↔ 同级：[ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM) —— 同样订阅多个 `CampaignEvents`，但**在 `OnFinalize` 里正确解绑**，是本类型的正确写法参照
- → 数据源：`AlleyUnderAttackMapNotification`（zh: [../../campaign-ext/AlleyUnderAttackMapNotification](../../campaign-ext/AlleyUnderAttackMapNotification)，en: [../../campaign/AlleyUnderAttackMapNotification](../../campaign/AlleyUnderAttackMapNotification)）
- → 聚落与队伍：[Settlement](../../campaign/Settlement)、[MobileParty](../../campaign/MobileParty)、[Hero](../../campaign/Hero)
- → 事件源：[CampaignEvents](../../campaign-ext/CampaignEvents) —— `SettlementEntered` 的来源
- → 暗巷：`TaleWorlds.CampaignSystem.Settlements.Alley`
