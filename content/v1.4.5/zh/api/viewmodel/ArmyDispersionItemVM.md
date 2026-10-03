---
title: "ArmyDispersionItemVM"
description: "「一支军队解散了」这条地图通知的条目视图模型。整个实现只有 18 行：不填充任何文字、不订阅任何事件，点击只是用空安全的 NavigationHandler 跳到那支军队的王国页然后自行撤下——它是本目录里最小也最干净的通知条目。"
---
# ArmyDispersionItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyDispersionItemVM : MapNotificationItemBaseVM`  
**Base:** `MapNotificationItemBaseVM`  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes/ArmyDispersionItemVM.cs`

## 概述

一支军队解散时，地图通知面板出现这一行。**整个文件只有 18 行**，是本目录里最小的通知条目：

```csharp
public ArmyDispersionItemVM(ArmyDispersionMapNotification data)
    : base(data)
{
    ArmyDispersionItemVM armyDispersionItemVM = this;
    base.NotificationIdentifier = "armydispersion";
    _onInspect = delegate
    {
        armyDispersionItemVM.NavigationHandler?.OpenKingdom(data.DispersedArmy);
        armyDispersionItemVM.ExecuteRemove();
    };
}
```

没有字段、没有事件订阅、没有 `OnFinalize` 覆写、没有 `RefreshValues` 覆写。全部行为就是上面那个闭包。

**它与同目录的 `AlleyLeaderDiedMapNotificationItemVM` 形成一组值得细看的对照**：那份也弹窗、也跳转，但把 `ExecuteRemove()` 关在 `if (NavigationHandler != null && _alley != null)` 里面——handler 为 null 时点了等于没点。本类用的是**空传播** `NavigationHandler?.OpenKingdom(...)`，所以 handler 为 null 时**只是不跳转，`ExecuteRemove()` 依然执行**。同样的 null 场景，一份留下点不掉的通知，一份正常消失。

`OpenKingdom` 是一个 `INavigationHandler` 的**扩展方法**，有 7 个重载（无参 / `Army` / `Settlement` / `Clan` / `PolicyObject` / `IFaction` / `KingdomDecision`）。这里传的是 `data.DispersedArmy`，静态类型是 `Army`，所以选中的是 `OpenKingdom(this INavigationHandler, Army army)` 那个重载。

## 心智模型

把它读成**「一次性跳转 + 立即自毁，没有状态、没有补偿、没有副作用」**：

- **谁 new 它**：`MapNotificationVM` 第 111 行 `_itemConstructors.Add(typeof(ArmyDispersionMapNotification), typeof(ArmyDispersionItemVM))`，第 199 行 `Activator.CreateInstance` 反射构造。**无法替换。**
- **谁持引用**：`MapNotificationVM` 的通知条目列表。
- **绑定到哪个 View 属性**：只有基类的。本类不新增任何 `[DataSourceProperty]`，标题与描述完全由基类根据 `ArmyDispersionMapNotification` 生成。
- **什么时候 Dispose**：列表回收时调 `OnFinalize()`，本类不覆写。**因为它不注册任何监听，所以没有泄漏路径。** 代价是它也**永远不会自动消失**——军队都已经解散了，没有"事情被解决"这个时刻可供监听。
- **数据只被闭包捕获，没有存进字段**。`data.DispersedArmy` 在构造时没有被赋给任何成员，只在点击时从捕获的 `data` 上读。这意味着**通知行不持有 `Army` 引用**——与 `ArmyCreationNotificationItemVM` 存 `public Army Army { get; }` 形成对比。
- **`armyDispersionItemVM = this` 的局部别名**是反编译器为了在匿名委托里引用 `this` 而生成的写法，不是原程序员的意图。
- **不判断军队为何解散**。玩家主动解散、被 AI 打散、因 cohesion 归零而崩溃，在这一行上没有任何区别——没有文案差异，也没有分叉行为。
- **常见误用**：想从通知里读出解散原因或损失情况。读不到。本类不暴露任何属性，闭包里的 `data.DispersedArmy` 也是私有的。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造函数 | `public ArmyDispersionItemVM(ArmyDispersionMapNotification data)` | 反射调用。设 `NotificationIdentifier = "armydispersion"`，并把 `_onInspect` 指向"跳转 + 移除"的闭包。**不订阅任何事件，不覆写 `OnFinalize`。**（`ArmyDispersionItemVM.cs:7-17`） |
| `_onInspect`（基类 `protected Action`） | 构造函数中赋值的闭包（`ArmyDispersionItemVM.cs:12-16`） | `NavigationHandler?.OpenKingdom(data.DispersedArmy)` 之后**无条件** `ExecuteRemove()`。空传播只保护跳转，不保护移除。 |
| `NotificationIdentifier` | 基类属性，设为 `"armydispersion"` | 选择通知图标与布局资源。与 `ArmyCreationNotificationItemVM` 的 `"armycreation"` 是两套独立资源。 |

注意：本类**没有自己的字段**。与 `ArmyCreationNotificationItemVM`、`AlleyUnderAttackMapNotificationItemVM`、`AlleyLeaderDiedMapNotificationItemVM` 不同，它连一个 `_alley` / `Army` 句柄都不留。

## 真实示例

复刻它的点击行为——重点是那个空传播与无条件移除的组合：

```csharp
using TaleWorlds.CampaignSystem.Party;

public void OnDispersionNotificationInspected(ArmyDispersionMapNotification data)
{
    // 空传播：handler 为 null 时跳过跳转。
    // ExecuteRemove() 在 if 之外：无论是否跳转，通知都会消失。
    // 这正是本类与 AlleyLeaderDiedMapNotificationItemVM 的关键差别。
    NavigationHandler?.OpenKingdom(data.DispersedArmy);
    ExecuteRemove();
}
```

自己查解散原因（通知本身不给，得向战役侧要）：

```csharp
using TaleWorlds.CampaignSystem.Party;

public string DescribeWhyArmyEnded(Army army)
{
    if (army == null)
    {
        return "unknown";
    }

    // ArmyDispersionItemVM 不区分解散原因；要区分必须自己查。
    if (!army.IsActive)
    {
        return "inactive";
    }

    if (army.LeaderParty == null)
    {
        return "leader lost";
    }

    return "still active";
}
```

写一个比原版更完整的通知条目，保留它的空安全但补上原因提示：

```csharp
public class MyArmyDispersionNotificationItemVM : ArmyDispersionItemVM
{
    private readonly Army.ArmyDispersionReason _reason;

    public MyArmyDispersionNotificationItemVM(ArmyDispersionMapNotification data)
        : base(data)
    {
        _reason = data.DispersionReason;
    }

    public override void RefreshValues()
    {
        base.RefreshValues();
        DescriptionText = "The army dissolved. Reason code: " + (int)_reason;
    }
}
```

## 风险与边界

- **无监听、无 `OnFinalize`、无字段——本类型的生命周期成本为零。** 它不注册任何东西，所以既没有泄漏风险，也没有任何自动清理逻辑可依赖。与本目录里 `AlleyUnderAttackMapNotificationItemVM`（注册监听却不覆写 `OnFinalize`）正好是两个极端。
- **它不会自动消失**。军队解散是一个**终态**——没有"之后事情被解决"的时刻，所以原版没有、也不需要监听。通知的归宿只有玩家点击或 `MapNotificationVM` 整体清空。
- **点击路径的空传播只保护了一半**。`NavigationHandler?.OpenKingdom(...)` 安全，但紧随其后的 `ExecuteRemove()` 依赖基类的 `OnRemove` 回调链。若通知项从未被加入 `MapNotificationVM` 的列表（比如手工构造），`ExecuteRemove()` 可能因为 `OnRemove` 为 null 而无效——**这与 `AlleyLeaderDied` 那种"根本不调用"是两种不同的失败**，后者是确定的行为，前者取决于装配是否完整。
- **`data.DispersedArmy` 在点击时才被读**。若通知数据对象在点击前被复用或清理，闭包里读到的是那份快照的当前值，而不是构造时的值。
- **不区分解散原因**。玩家主动解散与 cohesion 崩溃产生的通知完全一致。想给玩家更精确的反馈必须自己扩展（见上方示例）。
- **不填充任何自定义文案**。标题与描述全部由基类从数据生成，原版没有覆写 `RefreshValues()`。
- **序列化**：无。没有 `SyncData`、不接触 `IDataStore`。
- **`OpenKingdom` 是扩展方法，7 个重载**。传 `Army` 选中 `OpenKingdom(this INavigationHandler, Army army)`。若你的编译上下文没引入扩展方法所在的命名空间，`NavigationHandler?.OpenKingdom(...)` 会编译失败——这是扩展方法最常见的踩坑点。
- **native 边界**：无。纯托管。
- **跨版本**：`ArmyDispersionMapNotification` 与 `INavigationHandler.OpenKingdom(Army)` 的重载集合是 v1.4.5 的形状。上游增删重载会改变这里的重载决议结果。

## 依赖关系

- ↑ 父类：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) —— 提供 `_onInspect`、`ExecuteRemove()`、`NavigationHandler`、`DescriptionText`、`NotificationIdentifier`
- ↔ 同级：[MapNotificationVM](../MapNotificationVM) —— 类型构造器表与唯一构造入口
- ↔ 同级：[ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM) —— 军队生命周期的另一端：建立时的那一条，公开 `Army` 属性且有三个监听
- ↔ 同级：[AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) —— 同样"跳转 + 移除"，但把 `ExecuteRemove()` 关在 null 检查**里面**；与本类的空传播写法对照能看清差别
- → 数据源：`ArmyDispersionMapNotification`（zh: [../../campaign-ext/ArmyDispersionMapNotification](../../campaign-ext/ArmyDispersionMapNotification)，en: [../../campaign/ArmyDispersionMapNotification](../../campaign/ArmyDispersionMapNotification)）
- → 军队与队伍：[Army](../../campaign-ext/Army)、[MobileParty](../../campaign/MobileParty)
- ↑ 扩展方法宿主：`INavigationHandler`，`TaleWorlds.CampaignSystem.ViewModelCollection` 提供的 `OpenKingdom` 扩展
