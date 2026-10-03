---
title: "ArmyCohesionBoostedByPlayerEvent"
description: "全文 10 行的空事件类：继承 EventBase 零成员，只作为 ArmyManagementVM 点「+10 凝聚力」时向教程系统发的一个信号，payload 里什么都不带。"
---

# ArmyCohesionBoostedByPlayerEvent

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyCohesionBoostedByPlayerEvent : EventBase`
**Base:** `EventBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyCohesionBoostedByPlayerEvent.cs`（全文 10 行）

## 概述

```csharp
namespace TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
{
    // Token: 0x0200015A RID: 346
    public class ArmyCohesionBoostedByPlayerEvent : EventBase
    {
    }
}
```

**连 `using System;` 都没用到。** 它是本批唯一一个「零字段、零属性、零方法、零构造器」的类型——比 [GameModel](../../core-extra/GameModel) 还干净（`GameModel` 至少没有基类，本类有 `EventBase`）。

存在的理由只有一个：**`Game.Current.EventManager` 的事件系统要求事件的类型是一个可实例化的类**。看它的两个使用点，都在源码里能对上：

- 触发方是 [ArmyManagementVM](../ArmyManagementVM) 的 `ExecuteBoostCohesionManual()`（第 436–440 行）——玩家点「手动提升凝聚力」按钮时 `Game.Current.EventManager.TriggerEvent<ArmyCohesionBoostedByPlayerEvent>(new ArmyCohesionBoostedByPlayerEvent())`；
- 消费方是 `SandBox.GauntletUI/Tutorial/GauntletTutorialSystem.cs`：第 650 行 `RegisterEvent<ArmyCohesionBoostedByPlayerEvent>` 注册，第 719 行 `UnregisterEvent<ArmyCohesionBoostedByPlayerEvent>` 注销，第 308 行的回调 `OnArmyCohesionByPlayerBoosted` 转发给当前教程项；教程项侧在 `TutorialItemBase.OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent obj)`（虚方法）与 `StoryMode.GauntletUI/Tutorial/ArmyCohesionStep2Tutorial.cs` 的覆写里。

## 心智模型

**把它想成「一声铃」，而不是一个数据包。**

[EventManager](../../core-extra/EventManager) 提供三个泛型方法（源码第 16、27、38 行）：

```csharp
public void RegisterEvent<T>(Action<T> eventObjType)
public void UnregisterEvent<T>(Action<T> eventObjType)
public void TriggerEvent<T>(T eventObj)
```

**`T` 是事件类型，`Action<T>` 是回调，实例本身是可选的载荷。** 本类作为 `T` 用；作为载荷用时它是**空的**——所以回调 `ArmyCohesionBoostedByPlayerEvent obj` 里的 `obj` 什么也读不到。**想知道「提升了谁、提了多少、花了多少影响力」，一个都读不到。** 那些数字都在触发方 `ArmyManagementVM` 的私有字段里（`_boostedCohesion` / `_influenceSpentForCohesionBoosting`），是 `private`，外部读不了。

所以正确的读法是：**这个事件只回答「玩家手动点过一次提升凝聚力」这一件事**，别的什么都不回答。教程系统要的就是这一点——它要的是「第 2 步教学完成了吗」，不是「凝聚力现在是多少」。

**这类信号事件是引擎里 [ViewModel](../../core-extra/ViewModel) 与 UI 无关逻辑之间的标准解耦手段**：VM 不需要认识教程系统，只需要发一声铃；教程系统订阅铃，不反过来持有 VM。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| （无） | `public class ArmyCohesionBoostedByPlayerEvent : EventBase { }` | 源码里没有任何成员声明——没有字段、没有属性、没有方法、没有显式构造器。**它唯一的作用就是作为一个可被 `typeof` / `typeof` 泛型参数引用的类型标识符存在。** |

继承来的：[EventBase](../../core-extra/EventBase) **也是零成员**（1.3.0 里它同样只有 `public class EventBase { }`，共 9 行），**本类没有覆写其中任何一个成员**——因为压根没有可覆写的东西。所以实例被创建、被分发、被丢弃，中间不携带任何状态。

## 真实示例

mod 要在「玩家手动提升凝聚力」这个时点上挂自己的逻辑，`EventManager` 的注册必须在**委托实例上做等值匹配**——看 `UnregisterEvent` 的用法：`GauntletTutorialSystem` 每次都 `new Action<ArmyCohesionBoostedByPlayerEvent>(this.OnArmyCohesionByPlayerBoosted)` 新建一个委托再传进去，因为 C# 委托的 `Equals` 按目标 + 方法比值，新建等价委托是能匹配的。

```csharp
using System;
using TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement;
using TaleWorlds.Core;

// 我的监听器：在同一个时点上做自己的事
public class MyCohesionWatcher
{
    private readonly Action<ArmyCohesionBoostedByPlayerEvent> _handler;

    public MyCohesionWatcher()
    {
        // 必须把委托存成字段：UnregisterEvent 需要传一个等值的委托。
        this._handler = new Action<ArmyCohesionBoostedByPlayerEvent>(this.OnCohesionBoosted);
    }

    public void Register()
    {
        // T 就是这个空类；EventManager 是 Game.Current 上的组件。
        Game.Current.EventManager.RegisterEvent<ArmyCohesionBoostedByPlayerEvent>(this._handler);
    }

    public void Unregister()
    {
        Game.Current.EventManager.UnregisterEvent<ArmyCohesionBoostedByPlayerEvent>(this._handler);
    }

    private void OnCohesionBoosted(ArmyCohesionBoostedByPlayerEvent obj)
    {
        // obj 是空的 —— 想知道具体数值必须自己回头读 Campaign 数据。
        // 注意 Campaign 没有 MainParty 属性，主队伍是 MobileParty 的静态单例。
        Army army = MobileParty.MainParty.Army;
        MBDebug.Print("当前凝聚力 " + (army != null ? army.Cohesion.ToString() : "无军队"));
    }
}
```

**触发侧不需要你做什么**：官方 `ArmyManagementVM.ExecuteBoostCohesionManual()` 已经在调 `TriggerEvent`。你只要保证 `Register()` 在那个按钮可能被点之前跑完（通常挂在 `CampaignBehaviorBase.RegisterEvents()` 或界面初始化时），`Unregister()` 在对象销毁时跑。

## 风险与边界

- **零成员。** 任何「读一下这个事件带的信息」的写法都编译不过或读出默认值。**载荷是空的。**
- **触发点唯一。** 全树 `grep -rn "ArmyCohesionBoostedByPlayerEvent"` 只有五处：类定义、`ArmyManagementVM` 的 `TriggerEvent`、`GauntletTutorialSystem` 的注册 / 注销 / 转发，以及教程项侧的虚方法。**没有任何地方手动 new 它当普通对象用。**
- **事件在 `Game.Current.EventManager` 上，不在 `CampaignEvents`。** 这两套是分开的：`CampaignEvents` 是战役事件（静态、无数监听者），`EventManager` 是引擎事件（挂在 `Game.Current` 上）。**别把 `RegisterEvent` 和 `CampaignEvents.X.AddNonSerializedListener` 搞混。**
- **触发时机在状态变更之后。** `ExecuteBoostCohesionManual()` 先调 `OnBoostCohesion()`（内部 `TotalCost += CohesionBoostCost`、`_boostedCohesion += 10`、`_influenceSpentForCohesionBoosting += CohesionBoostCost`、`OnRefresh()`），**再**发事件。所以回调里读 `Campaign.Current.MainParty.Army.Cohesion` 拿到的是**提升前**的值——真正的写入要等玩家点「完成」时 `ExecuteDone()` → `ApplyCohesionChange()` → `Army.BoostCohesionWithInfluence(...)` 才发生。**这是个容易搞反的时序。**
- **没有序列化。** 它不是 `MBObjectBase` 的成员，不在任何 `[SaveableField]` 之下，不进存档。事件本身是瞬时的。
- **`TriggerEvent<T>` 不要求 `new T()`。** 引擎传的是显式 new 出来的实例；你注册回调时不需要匹配实例，只匹配类型。
- **注册与注销要配对。** `UnregisterEvent` 传的是委托值比较，不是引用比较；传一个 `new` 出来的等价委托**能**正确摘掉，但传错方法或漏传就摘不掉，回调会被触发到对象生命周期结束之后。

## 跨版本提示

**`ArmyCohesionBoostedByPlayerEvent.cs` 在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 五棵树里逐字节等价**：都是 11 行（含 BOM 与尾行），都只含类声明，public/protected 成员数都是 **0**。**跨 1.3 → 1.5 零变化，这是本批里跨版本稳定性与 [GameModel](../../core-extra/GameModel) 并列最高的一个类型。**

**变的是它的消费者与触发方**：

- 触发方 [ArmyManagementVM](../ArmyManagementVM) 在 1.4.6 起从 1661 行涨到 1717 行，但 public 成员集合不变（见该页）；
- 消费方 `GauntletTutorialSystem` 与 `ArmyCohesionStep2Tutorial` 属于 UI 层，内部实现随时可能改。**只要教程回调签名 `OnArmyCohesionByPlayerBoosted(ArmyCohesionBoostedByPlayerEvent)` 不变，你的订阅代码跨版本通用。**

## 依赖关系

- 事件系统基类与派发：[EventBase](../../core-extra/EventBase) 是基类；[EventManager](../../core-extra/EventManager) 提供 `RegisterEvent<T>` / `UnregisterEvent<T>` / `TriggerEvent<T>`，实例是 `Game.Current.EventManager`
- 唯一触发方：[ArmyManagementVM](../ArmyManagementVM) 的 `ExecuteBoostCohesionManual()`（在 `OnBoostCohesion()` 之后发）
- 唯一消费方：`GauntletTutorialSystem` 的 `OnArmyCohesionByPlayerBoosted`，转发到教程项的虚方法；教程项侧实现见 `ArmyCohesionStep2Tutorial`
- **玩家数据面**：回调里要读的实际状态在 [Army](../../campaign/Army)（`public float Cohesion { get; set; }` 与 `BoostCohesionWithInfluence(float, int)`）与 [MobileParty](../../campaign/MobileParty)（`public Army Army` 与静态 `MainParty`）上，不在本事件里。注意 **[Campaign](../../campaign/Campaign) 上没有 `MainParty` 属性**，主队伍统一走 `MobileParty.MainParty`。
- 同桶信号事件：[PartyAddedToArmyByPlayerEvent](../PartyAddedToArmyByPlayerEvent)（同一 VM 的另一个 `Game.Current.EventManager` 事件）
- UI 底座（触发方所属的家族）：[ViewModel](../../core-extra/ViewModel)
- 桶首页：[viewmodel API 分区](../)
