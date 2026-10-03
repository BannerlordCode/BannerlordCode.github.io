---
title: "ArmyCohesionBoostedByPlayerEvent"
description: "一个没有任何成员的信标事件。全文只有两行——继承 EventBase 与一个空类体。它在玩家点击「提升凝聚力」按钮时被 TriggerEvent 触发，但真正的 BoostCohesionWithInfluence 要等到 ExecuteDone 才发生；而在原版源码树里没有任何人监听它。"
---
# ArmyCohesionBoostedByPlayerEvent

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement  
**Module:** TaleWorlds.CampaignSystem.ViewModelCollection  
**Type:** `public class ArmyCohesionBoostedByPlayerEvent : EventBase`  
**Base:** `EventBase`（`TaleWorlds.Library.EventSystem`）  
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyCohesionBoostedByPlayerEvent.cs`

## 概述

整个文件只有五行——去掉 `using` 与命名空间之后，类的全部内容是：

```csharp
public class ArmyCohesionBoostedByPlayerEvent : EventBase
{
}
```

**零字段、零属性、零方法、零构造函数。** 它是一个纯粹的信标（marker）：存在的全部意义就是"玩家刚刚点了提升军队凝聚力的按钮"这一事实本身。它不携带任何数据——没有金额、没有军队引用、没有任何载荷。监听者想知道发生了什么，必须自己去读战役状态。

它走的是 `TaleWorlds.Library.EventSystem` 那套事件系统，接口只有三个静态入口：

```csharp
public void RegisterEvent<T>(Action<T> eventObjType)      // 订阅
public void UnregisterEvent<T>(Action<T> eventObjType)    // 退订
public void TriggerEvent<T>(T eventObj)                   // 触发
```

全树唯一的触发点在 `ArmyManagementVM.ExecuteBoostCohesionManual()`：

```csharp
public void ExecuteBoostCohesionManual()
{
    OnBoostCohesion();
    Game.Current.EventManager.TriggerEvent(new ArmyCohesionBoostedByPlayerEvent());
}
```

## 心智模型

把它读成**「一次点击的信标，而不是一次结算的通知」**：

- **谁 new 它**：`ArmyManagementVM.ExecuteBoostCohesionManual()`（`ArmyManagementVM.cs:1386-1390`）。**全树仅此一处**，由 Gauntlet 把该方法绑定到军队管理界面的"提升凝聚力"按钮上。
- **谁持引用**：**没有人持引用**。`TriggerEvent` 传入的是 `new ArmyCohesionBoostedByPlayerEvent()` 的临时实例，派发完即被 GC 回收。它与本目录其它视图模型的根本区别就在这里——不是"被某个列表持有"，而是"根本不被持有"。
- **绑到哪个 View 属性**：**不适用**。它不是 `ViewModel`，没有 `[DataSourceProperty]`，不参与任何数据绑定。它是按钮的**下游产物**。
- **什么时候 Dispose**：**没有 Dispose**。它不持有资源，不需要 `OnFinalize`，也不注册任何东西。生命周期只有"被 new 出来 → 被派发 → 被丢弃"这一瞬间。
- 🔴 **最重要的一点：它表示"点了"，不表示"生效了"。** 这两件事在原版里隔着一个面板。`OnBoostCohesion()` 只做账面记账：

  ```csharp
  private void OnBoostCohesion()
  {
      if (CanBoostCohesion)
      {
          TotalCost += CohesionBoostCost;
          _boostedCohesion += 10;
          _influenceSpentForCohesionBoosting += CohesionBoostCost;
          OnRefresh();
      }
  }
  ```

  真正改动军队的是 `ApplyCohesionChange()`，它调 `MobileParty.MainParty.Army.BoostCohesionWithInfluence(num, _influenceSpentForCohesionBoosting)`，而它**只在 `ExecuteDone()` 里、且当 `NewCohesion > Cohesion` 时才被调用**（`ArmyManagementVM.cs:1296-1299`）。也就是说：**玩家点了三次按钮然后点"取消"，这个事件触发了三次，而凝聚力一次都没有真的加上。** 在监听器里读 `Army.Cohesion` 去做结算逻辑，是错的。
- 🔴 **它是无条件触发的。** 上面那段 `if (CanBoostCohesion)` 在 `OnBoostCohesion()` 内部，而 `TriggerEvent` 在它**外面**。所以即使按钮当前不可用（ cohesion 已接近 100、影响力不够、玩家还没进军队），**事件照样触发**。监听器不能假设"收到事件 = 操作成功了"，必须自己复查 `CanBoostCohesion` 与实际状态。
- 🔴 **原版没有任何人监听它。** 全树检索 `ArmyCohesionBoostedByPlayerEvent` 只得到三处命中：类声明、构造函数（`this` 自引用）、以及上面那个 `new`。**没有任何 `RegisterEvent<ArmyCohesionBoostedByPlayerEvent>(...)`。** 它是一个纯粹留给模组的扩展点。
- **常见误用**：当成"凝聚力已变更"的结算钩子，用来改军队属性、加 buff、刷日志。见上——时机不对。
- **正确用法**：当成"玩家表达了提升凝聚力的意图"的信号。比如在触发时给玩家一个额外奖励、或记录统计——这些都不依赖凝聚力真的落地。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类型本身 | `public class ArmyCohesionBoostedByPlayerEvent : EventBase` | **唯一成员**。类体为空（`ArmyCohesionBoostedByPlayerEvent.cs:5-7`）。全部语义就是类型身份本身——`TriggerEvent<T>` 按泛型实参分派，监听器按类型匹配。 |
| （继承）`EventBase` | `TaleWorlds.Library.EventSystem.EventBase` | 标记基类。它本身不带任何成员，只用于把本事件纳入 `EventManager` 的类型化派发体系，使 `RegisterEvent<T>` / `TriggerEvent<T>` 能按类型而非按委托实例匹配。 |

注意：**没有任何公有字段或属性可供读取**。监听者拿不到金额、军队或任何上下文。

## 真实示例

订阅这个事件——注意退订必须成对，`EventManager` 不会替你做：

```csharp
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Library.EventSystem;

public class MyCohesionSignalListener
{
    private readonly string _label;

    public MyCohesionSignalListener(string label)
    {
        _label = label;
    }

    public void Subscribe()
    {
        Game.Current.EventManager.RegisterEvent<ArmyCohesionBoostedByPlayerEvent>(OnBoostClicked);
    }

    public void Unsubscribe()
    {
        // 必须退订：EventManager 持有的是你这个对象的委托，
        // 漏掉这一步等于让一个死对象一直挂在全局管理器上。
        Game.Current.EventManager.UnregisterEvent<ArmyCohesionBoostedByPlayerEvent>(OnBoostClicked);
    }

    private void OnBoostClicked(ArmyCohesionBoostedByPlayerEvent evt)
    {
        // 事件不携带任何数据，evt 是空的。
        // 也别在这里读 Army.Cohesion 当作"已经加过了"——
        // 真正的 BoostCohesionWithInfluence 要等玩家点"确定"才发生。
        MBInformationManager.AddQuickInformation(new TextObject("{=MyCoh}Cohesion boost requested"), -1000);
    }
}
```

想要"凝聚力真的落地"的钩子，应该监听别处或自己包一层：

```csharp
public class MyCohesionCommitWatcher
{
    public void Subscribe()
    {
        // 原版没有提供"已结算"事件。真要精确，就在 ExecuteDone 会经过的
        // 战役事件上挂钩，或直接改用下面的轮询/动作钩子。
        CampaignEvents.OnArmyOverlaySetDirtyEvent.AddNonSerializedListener(this, OnOverlayDirty);
    }

    private void OnOverlayDirty()
    {
        Army army = MobileParty.MainParty.Army;
        if (army != null)
        {
            MBInformationManager.ShowHint("Army cohesion now " + (int)army.Cohesion);
        }
    }
}
```

自己发一个带载荷的等价事件，替掉那个空壳：

```csharp
public class MyCohesionBoostCommittedEvent : EventBase
{
    public Army Army { get; }
    public int SpentInfluence { get; }
    public int NewCohesion { get; }

    public MyCohesionBoostCommittedEvent(Army army, int spentInfluence, int newCohesion)
    {
        Army = army;
        SpentInfluence = spentInfluence;
        NewCohesion = newCohesion;
    }
}
```

## 风险与边界

- 🔴 **时机错配是本类型最大的坑**。事件在**点击**时触发，而 `Army.BoostCohesionWithInfluence` 在**确认面板**时才执行（`ArmyManagementVM.cs:1147-1154` 的 `ApplyCohesionChange`，由 `ExecuteDone` 在 `:1296` 调用）。玩家点完取消就什么都没有发生。任何在监听器里做"按已付代价结算"的逻辑都会算错。
- 🔴 **无条件触发**。`TriggerEvent` 位于 `if (CanBoostCohesion)` 之外（`ArmyManagementVM.cs:1388-1389`），所以不可用状态下也会触发。监听器必须自己复查可用性与实际结果。
- **不携带数据**。没有金额、没有 `Army` 引用、没有是否成功的标志。想区分"点了 10 点的按钮"和"点了 20 点的按钮"是做不到的，只能自己读 `ArmyManagementVM`（而它没有暴露那个按钮实例）。
- **不参与序列化**。事件对象是瞬时的，`EventManager` 不持有它超过一次派发。
- **生命周期成本为零**：无字段、无 `OnFinalize`、无 native 句柄。唯一的"资源"是监听者自己在 `EventManager` 上的注册。
- **订阅必须成对**。`RegisterEvent<T>(Action<T>)` 与 `UnregisterEvent<T>(Action<T>)` 接受的是**委托实例**。`UnregisterEvent` 用的是引用相等——如果你在注册和退订时各写了一个 lambda，**退订会静默失败**，留下一个永久订阅。这是最常见的泄漏路径。
- **`Game.Current.EventManager` 的可用期**。它在 UI/game 初始化后才可用；战役未启动时调用 `RegisterEvent` 可能 NRE。订阅应放在界面打开或 `OnGameStart` 之后。
- **native 边界**：无。纯托管，且完全不含游戏逻辑。
- **跨版本**：`EventManager` 的 `RegisterEvent<T>` / `UnregisterEvent<T>` / `TriggerEvent<T>` 三个签名与 `ArmyManagementVM.ExecuteBoostCohesionManual()` 的调用位置是 v1.4.5 的形状。上游若把 `TriggerEvent` 挪进 `if` 内或改到 `ApplyCohesionChange` 旁边，本页的核心结论即失效。

## 依赖关系

- ↑ 基类：`EventBase`，来自 `TaleWorlds.Library.EventSystem`（同程序集可见 [MBBindingList](../../core-extra/MBBindingList)）
- ↔ 同级：[ArmyManagementVM](../ArmyManagementVM) —— **全树唯一的触发方**，`ExecuteBoostCohesionManual()` 第 1386-1390 行
- ↔ 同级：[ArmyManagementBoostEventVM](../ArmyManagementBoostEventVM) —— 同一界面的另一个扩展点，同样在原版里无人构造
- ↔ 同级：[ArmyManagementItemVM](../ArmyManagementItemVM) —— 同界面的条目视图模型，可与本页对照"有状态 VM"与"无状态信标"的差别
- → 事件宿主：[Game](../../core-extra/Game) —— `Game.Current.EventManager`
- → 军队对象：[Army](../../campaign-ext/Army)（真正的 `BoostCohesionWithInfluence` 在 [ArmyManagementCalculationModel](../../campaign/ArmyManagementCalculationModel) 侧）
- → 派生物：[MobileParty](../../campaign/MobileParty)、[Hero](../../campaign/Hero)
