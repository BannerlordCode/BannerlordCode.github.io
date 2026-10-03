---
title: "ArmyDispersionItemVM"
description: "「军队解散」地图通知条目：全文 25 行，一个构造器、一个 _onInspect，没有属性也没有 OnFinalize —— 点开只是打开王国界面看那支军队。"
---

# ArmyDispersionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyDispersionItemVM : MapNotificationItemBaseVM`
**Base:** `MapNotificationItemBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/ArmyDispersionItemVM.cs`（全文 25 行）

## 概述

**这是本批 20 页里最短的一页。** 全文 25 行、零个字段声明、零个属性、零个私有方法——构造器里只有两句实质内容：`NotificationIdentifier = "armydispersion"`，以及把 `_onInspect` 设成一个「打开王国界面 → 移除自己」的闭包。

```csharp
public ArmyDispersionItemVM(ArmyDispersionMapNotification data) : base(data)
{
    ArmyDispersionItemVM self = this;
    base.NotificationIdentifier = "armydispersion";
    this._onInspect = delegate()
    {
        INavigationHandler navigationHandler = self.NavigationHandler;
        if (navigationHandler != null)
        {
            navigationHandler.OpenKingdom(data.DispersedArmy);
        }
        self.ExecuteRemove();
    };
}
```

（源码里那个 `ArmyDispersionItemVM <>4__this = this;` 是 decompiler 为 C# 闭包里的 `this` 生成的临时变量，手写 C# 里就是直接用 `this`。）

## 心智模型

**把它想成「一个按钮：点它就打开那支军队的王国界面」。**

它与同族的 [ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM) 正好是一对：**成立**通知用 `GoToMapPosition` 移镜头，**解散**通知用 `NavigationHandler.OpenKingdom` 开界面。前者是「看看它在哪儿」，后者是「看看它现在归谁」。所以本类**完全不需要持有 `Army` 字段**——`data` 被闭包捕获，`data.DispersedArmy` 每次点击现取。

**三条实现细节值得单独指出：**

**第一，`ExecuteRemove()` 在 `if` 外面。** `navigationHandler` 为 null 时点击依然会把通知删掉。这与 [AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) 的写法正好相反——那里 `ExecuteRemove()` 在 `if` **里面**，handler 为 null 时通知留着不动。**两个兄弟在同一件事上做了相反的选择，读源码时别把它们当成同一种模式。**

**第二，本类没有覆写 `OnFinalize`。** 因为它一个 `CampaignEvents` 监听都没挂。没有需要清理的东西时覆写就是多余的。

**第三，它不暴露 `DispersedArmy`。** 数据对象 [ArmyDispersionMapNotification](../../campaign/ArmyDispersionMapNotification) 上有 `public Army DispersedArmy { get; private set; }` 和 `public Army.ArmyDispersionReason DispersionReason { get; private set; }`，但本类把两个都关在闭包里，**外部拿不到军队，也拿不到解散原因**。想读只能自己再 new 一个数据对象或者从别处拿通知数据。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 构造 | `public ArmyDispersionItemVM(ArmyDispersionMapNotification data) : base(data)` | **本类唯一的 public 成员。** 设 `NotificationIdentifier = "armydispersion"`，把 `_onInspect` 指向「开王国界面 + 删自己」。由 [MapNotificationVM](../MapNotificationVM) 的 `Activator.CreateInstance(vmType, new object[] { data })` 反射调用——**参数形状必须是单个数据对象，这是硬约束**。 |

私有成员：**无**。全文只有构造器里一个 decompiler 生成的闭包临时变量。

继承来但本页行为依赖的成员：`ExecuteAction()`（玩家点击 → 执行 `_onInspect`）、`ExecuteRemove()`（把通知从地图通知列表摘掉并走 `OnFinalize`）、`NavigationHandler`（`public INavigationHandler { get; private set; }`，由 `SetNavigationHandler` 挂上）、`Data`。

## 真实示例

最短的复用：照着它的形状写一条自己的通知，闭包捕获数据对象，`if` 判空后调 `NavigationHandler`：

```csharp
using System;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes;
using TaleWorlds.Library;
using TaleWorlds.Localization;

public class MySettlementLostMapNotification : InformationData
{
    public Settlement LostSettlement { get; private set; }

    public MySettlementLostMapNotification(Settlement lost, TextObject description)
        : base(description)
    {
        this.LostSettlement = lost;
    }

    public override TextObject TitleText
    {
        get { return new TextObject("{=aBcDeF12}聚落易主", null); }
    }

    public override string SoundEventPath
    {
        get { return string.Empty; }
    }
}

public class MySettlementLostItemVM : MapNotificationItemBaseVM
{
    public MySettlementLostItemVM(MySettlementLostMapNotification data)
        : base(data)
    {
        this.NotificationIdentifier = "my_settlement_lost";

        // 官方写法：闭包捕获 data，if 判空后调 NavigationHandler，
        // ExecuteRemove() 放在 if 外面（handler 为 null 也会删掉自己）。
        this._onInspect = delegate
        {
            INavigationHandler handler = this.NavigationHandler;
            if (handler != null)
            {
                handler.OpenKingdom(data.LostSettlement.SettlementFaction);
            }
            this.ExecuteRemove();
        };
    }
}
```

[Settlement](../../campaign/Settlement) 上的归属方属性叫 `MapFaction`（`public IFaction`），而 `OpenKingdom` 是 [MapNavigationExtensions](../../campaign/MapNavigationExtensions) 挂在 `INavigationHandler` 上的**扩展方法**——接口本身没有它。`OpenKingdom(this INavigationHandler, IFaction)` 与 `OpenKingdom(this INavigationHandler, Settlement)` 两个重载都在那个静态类里。注册进 [MapNotificationVM](../MapNotificationVM) 之后，这条通知就会随 `MBInformationManager.AddNotice(...)` 出现在地图上。

## 风险与边界

- **零 public/protected 成员（除构造器）。** 对外能调的全是基类方法：`ExecuteAction()` / `ExecuteRemove()` / `ExecuteSetFocused()` / `ExecuteSetUnfocused()` / `ManualRefreshRelevantStatus()` / `SetNavigationHandler()` / `SetFastMoveCameraToPosition()` / `SetRemoveInputKey()`。按「本类声明的成员」做反射枚举会得到空集。
- **不暴露 `Army` 和 `DispersionReason`。** 想知道「哪支军队、什么原因散的」只能从别处拿数据对象。
- **`NavigationHandler` 为 null 时点击只删通知、不做任何事。** 因为 `ExecuteRemove()` 在 `if` 外面。这是本类刻意选的语义（通知一定会消失），但也意味着构造后没挂 handler 的实例点起来像坏了。
- **`data` 被闭包强引用。** 闭包持有 `data`（`ArmyDispersionMapNotification`）→ 持有 `Army`。通知一直挂着，这条链就一直活着。通知被移除后闭包随 VM 一起可回收。
- **没有 `OnFinalize` 覆写，所以没有清理代码可看。** 派生时若加了事件监听，**必须自己补 `public override void OnFinalize()`**——否则会重蹈 [AlleyUnderAttackMapNotificationItemVM](../AlleyUnderAttackMapNotificationItemVM) 的覆辙（手动删除泄漏监听）。
- **`IsValid()` 未被覆写。** 父类 [InformationData](../../core-extra/InformationData) 默认恒返回 true。军队解散是不可逆的，所以这条通知**不需要**有效性检查——但你若派生它并处理可逆事件，就得覆写 `IsValid()`。
- **`NotificationIdentifier = "armydispersion"` 无分隔符。** 与 `ArmyCreationNotificationItemVM` 的 `"armycreation"` 同一风格，但和 `"alley_leader_died"` 不同。**这是 UI 侧的 prefab 键，别改格式。**

## 跨版本提示

**public 面在 1.3.0 → 1.5.3 五棵树里零变化**：只有一个构造器。行数 25 → 26 → 26 → 26 → 26，全部差异是 decompiled 排版（构造器签名与 `: base(data)` 拆成两行、`delegate() {` → `delegate`）。1.5.3 没有新成员、没有新字段。

**跨版本上没有编译风险**，因为本类只依赖三样东西：`ArmyDispersionMapNotification` 的类型、[MapNavigationExtensions](../../campaign/MapNavigationExtensions) 里的 `OpenKingdom(this INavigationHandler, Army)` 扩展方法、以及基类的 `_onInspect` / `NavigationHandler` / `ExecuteRemove`。前两者在五棵树里都没变。

**真要说风险，是 `OpenKingdom(IFaction)` 的实参**：`data.DispersedArmy` 是 `Army`（继承 `CampaignObjectBase` → `IFaction`），而军队解散后这个引用可能仍存在但已无实际意义。1.5.3 也没加判空——**所以本类的点击路径在极端时序下仍然依赖 `NavigationHandler` 实现类的健壮性。**

## 依赖关系

- 基类与生命周期：[MapNotificationItemBaseVM](../MapNotificationItemBaseVM) 提供 `_onInspect` / `ExecuteAction()` / `ExecuteRemove()` / `NavigationHandler`；UI 底座是 [ViewModel](../../core-extra/ViewModel)
- 注册与反射构造：[MapNotificationVM](../MapNotificationVM) 的 `PopulateTypeDictionary` / `RegisterMapNotificationType` / `GetNotificationFromData`
- 输入数据：[ArmyDispersionMapNotification](../../campaign/ArmyDispersionMapNotification) 提供 `DispersedArmy` 与 `DispersionReason`，基类为 [InformationData](../../core-extra/InformationData)
- 跳转目标：[MapNavigationExtensions](../../campaign/MapNavigationExtensions) 的 `OpenKingdom(this INavigationHandler, Army)`（**扩展方法，不是接口成员**）；接口本体 [INavigationHandler](../../campaign/INavigationHandler) 只有四个成员
- 域对象：[Army](../../campaign/Army)（`CampaignObjectBase` 的子类，因而实现 `IFaction`）；解散原因枚举 `Army.ArmyDispersionReason` 定义在它上面
- 兄弟通知：[ArmyCreationNotificationItemVM](../ArmyCreationNotificationItemVM)（成立侧，暴露 public `Army` 属性 + 三个事件）
- 反例对照：[AlleyLeaderDiedMapNotificationItemVM](../AlleyLeaderDiedMapNotificationItemVM) 把 `ExecuteRemove()` 放在 `if` 里面，与本类相反
- 桶首页：[viewmodel API 分区](../)
