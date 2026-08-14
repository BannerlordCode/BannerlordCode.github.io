---
title: "CampaignEventDispatcher"
description: "战役层的同步事件转发器：把 Action、Campaign 生命周期和 tick 产生的 OnXxx 调用按 receiver 顺序转发到 CampaignEvents、IssueManager、QuestManager 以及扩展 receiver。"
---

# CampaignEventDispatcher

**Namespace:** `TaleWorlds.CampaignSystem`<br>
**Module:** `TaleWorlds.CampaignSystem`<br>
**Type:** `public class CampaignEventDispatcher : CampaignEventReceiver`<br>
**Base:** [CampaignEventReceiver](../CampaignEventReceiver/)<br>
**1.3.15 source:** `R:\Bannerlord\bannerlord-1.3.15\TaleWorlds.CampaignSystem\CampaignEventDispatcher.cs`<br>
**1.4.5 comparison:** `R:\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem\CampaignEventDispatcher.cs`

## 一句话职责

它不保存事件业务状态，也不产生世界变更；它只把战役代码已经发出的 `OnXxx` 调用同步扇出给一组 `CampaignEventReceiver`。

它的价值在于固定事件顺序和接收者边界，而不是提供新的业务操作；mod 应从它转发出的 `CampaignEvents` 订阅事实，并把状态修改留给真实的 Action 或 Model。

## 心智模型

`CampaignEventDispatcher` 是 **receiver fan-out 层**，不是 mod 通常订阅的事件容器。

- `Campaign` 初始化时创建一个 dispatcher，并把 `CampaignEvents`、`IssueManager`、`QuestManager` 放入 receiver 数组；之后通过公开的 `Campaign.AddCampaignEventReceiver` 才能追加 receiver。
- `CampaignEventDispatcher.Instance` 实际读取 `Campaign.Current.CampaignEventDispatcher`。没有活动战役时返回 `null`，所以菜单、模块加载和卸载阶段不能无条件解引用它。
- 每个公开的 `OnXxx`/tick 方法都做同一件事：按数组顺序逐个调用 receiver 的同名虚方法。源码没有异常隔离、优先级或异步队列。
- `CampaignEvents` 才是 mod 最常用的静态事件表。它重写 receiver 方法，再把调用交给 `MbEvent`；行为应订阅 `CampaignEvents.XEvent`，而不是直接调用 dispatcher 的 `OnXxx`。

一次英雄死亡的真实链路是：

1. `KillCharacterAction.Apply` 完成对应的死亡流程，在 1.3.15 `KillCharacterAction.cs:58` 先发 `OnBeforeHeroKilled`，在 `:149` 再发 `OnHeroKilled`。
2. `CampaignEventDispatcher.Instance.OnHeroKilled(...)` 遍历 receiver 数组。
3. 数组中的 `CampaignEvents.OnHeroKilled(...)` 调用 `HeroKilledEvent` 的 `MbEvent.Invoke`。
4. `CampaignBehaviorBase.RegisterEvents()` 中通过 `AddNonSerializedListener` 注册的 handler 同步运行。

因此，dispatcher 是“把调用送到各个接收层”的桥；它不是“英雄死亡对象”、不是 `*Action`，也不是一个让 mod 手动广播假事件的 API。

## 生命周期、持有者与层级

### 创建与持有

- `Campaign` 构造期间只创建 `_campaignPeriodicEventManager`；在 `Campaign.OnInitialize()` 中创建 `CampaignEvents`、`CustomPeriodicCampaignEvents` 和 `CampaignEventDispatcher`。1.3.15 的初始化位置是 `Campaign.cs:1889-1891`。
- 初始 receiver 数组是 `{ CampaignEvents, IssueManager, QuestManager }`。这解释了为什么问题和任务系统也能收到同一组 campaign 回调。
- `Campaign.AddCampaignEventReceiver(CampaignEventReceiver receiver)` 是公开的追加入口，但 dispatcher 自己的构造函数和 `AddCampaignEventReceiver` 方法是 `internal`。追加的 receiver 没有对应的移除方法，生命周期必须由调用方自己保证。
- `CampaignEventDispatcher` 随 `Campaign.Current` 存活；不要缓存跨战役、跨读档的 dispatcher 引用。每次需要时从 `CampaignEventDispatcher.Instance` 重新取得并判空。

### 调度位置

- 世界变更通常由 [KillCharacterAction](../KillCharacterAction/)、[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) 和 [DeclareWarAction](../DeclareWarAction/) 等 action 在状态变更后调用 dispatcher。
- `Campaign` 在读档早期、读档完成、新档创建和 session 开始阶段调用相应的 `OnGameEarlyLoaded`、`OnGameLoaded`、`OnNewGameCreated`、`OnSessionStart`、`OnAfterSessionStart` 等方法。
- `Campaign` 的主 tick 会把 `Tick(float)`、`HourlyTick()`、`QuarterHourlyTick()`、`DailyTick()`、`WeeklyTick()` 和实体 tick 交给 dispatcher；[CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) 还会把按部队、据点、家族、城镇和英雄分片的 tick 转回 dispatcher。
- 所有这些调用都是触发方当前线程上的同步调用。dispatcher 不会替 handler 排队，也不会为慢 handler 自动分帧。

## 何时使用，何时禁用

### 推荐用法：订阅 `CampaignEvents`

当需求是“某个世界事实发生后执行逻辑”时，使用 [CampaignEvents](../CampaignEvents/) 的事件属性，并把 owner 设为一个长期存活的 [CampaignBehaviorBase](../CampaignBehaviorBase/) 实例。事件能让行为避开每小时扫描全部 `Hero`、`Settlement` 或 `MobileParty`。

### 不要把 dispatcher 当作以下东西

- **不要用 `OnXxx` 改变世界。** `OnSettlementOwnerChanged`、`OnHeroKilled`、`OnWarDeclared` 只是通知入口；要改变所有权、杀死英雄或宣战，应调用相应的 `*Action.Apply`，让 action 负责状态、规则和事件顺序。
- **不要手动调用 `CampaignEventDispatcher.Instance.OnXxx(...)` 来“广播”事件。** 这样会在没有完成真实状态变更时骗过原生行为，造成重复日志、重复结算或顺序错误。
- **不要直接继承它来替代行为订阅。** 只有需要作为 campaign-level receiver 接入整套虚拟回调的基础设施才应使用 `CampaignEventReceiver`；普通 mod 用 `CampaignBehaviorBase.RegisterEvents()`。
- **不要在 `Campaign.Current` 为空的阶段调用它。** 这包括战役尚未创建、战役已经切换和模块卸载路径。
- **不要在回调里做阻塞 I/O、长循环或等待 UI。** 一个 receiver 抛出的未捕获异常会沿当前同步调用返回，dispatcher 没有 `try/catch`。

## 依赖图

**上游：**

- [Campaign](../../campaign/Campaign/) 持有 dispatcher，并在初始化、tick、读档和存档阶段调用它。
- [KillCharacterAction](../KillCharacterAction/)、[ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/)、[DeclareWarAction](../DeclareWarAction/) 等 action 在完成或进入对应状态边界时调用具体 `OnXxx`。
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) 将按对象的小时/每日/AI 分片调度桥接为 dispatcher 的 tick 回调。

**下游：**

- [CampaignEvents](../CampaignEvents/) 将回调转成可订阅的 `MbEvent`；[CampaignBehaviorBase](../CampaignBehaviorBase/) 通常在 `RegisterEvents()` 中消费它。
- [CampaignEventReceiver](../CampaignEventReceiver/) 定义全套虚拟回调；`IssueManager`、`QuestManager` 和通过 `Campaign.AddCampaignEventReceiver` 追加的 receiver 也会被调用。
- [SaveManager](../../save-system/SaveManager/) 相关流程通过 `OnBeforeSave`、`OnSaveStarted`、`OnSaveOver` 回调通知 campaign 系统，但事件监听器本身不是存档业务数据。

**相邻类型：**

- [CampaignGameStarter](../CampaignGameStarter/) 负责登记行为；[CampaignBehaviorManager](../CampaignBehaviorManager/) 负责行为列表、注册事件和移除行为。
- [MBCampaignEvent](../MBCampaignEvent/) 是自定义时间周期事件实体，不是 `CampaignEvents` 的 `MbEvent` 成员。

## 关键成员与副作用时机

### `public static CampaignEventDispatcher Instance { get; }`

返回当前 `Campaign` 的 dispatcher；当 `Campaign.Current == null` 时返回 `null`。它是运行时观察/清理入口，不代表能安全调用任意 `OnXxx`。不要把返回值保存到全局静态字段。

### `public override void RemoveListeners(object o)`

把 `RemoveListeners(o)` 转发给数组中的每一个 receiver。对默认的 `CampaignEvents` 来说，这会在所有 `MbEvent` 上按 owner 清除监听；对自定义 receiver 则取决于它的重写实现。它只清除监听，不从 dispatcher 数组中移除 receiver。

行为被 `CampaignBehaviorManager.RemoveBehavior<T>()` 移除时，管理器正是通过 `CampaignEventDispatcher.Instance.RemoveListeners(behavior)` 清理该行为。一次性 quest/issue 也在结束时走同一入口。若 mod 自己动态管理 listener，应使用稳定的 owner，并在 owner 结束时清理。

### `internal CampaignEventDispatcher(IEnumerable<CampaignEventReceiver>)` 与 `internal void AddCampaignEventReceiver(...)`

构造函数把可枚举 receiver 固化为数组；追加方法会复制旧数组并把 receiver 放在末尾。两者不是普通 mod 的构造/注册 API。公开的 `Campaign.AddCampaignEventReceiver` 能间接追加 receiver，但没有自动注销、事件优先级或重复检测。

### 事件型转发：`OnBeforeHeroKilled`、`OnHeroKilled`、`OnSettlementOwnerChanged`、`OnWarDeclared` 等

这些方法不执行业务规则，只传递原始参数。`Before` 方法表示 action 尚未完成最终应用，普通 `On` 通常表示状态边界已经到达；具体时机必须以对应 action 的源码为准。参数中的 `ActionDetail`、`showNotification`、旧/新对象等是给消费者判断上下文的，不是要求 dispatcher 自己解释或修改的状态。

### 生命周期转发：`OnNewGameCreated`、`OnGameLoaded`、`OnGameLoadFinished`、`OnSessionStart`、`OnAfterSessionStart`

这些回调控制 behavior 的初始化窗口。事件监听在行为进入 [CampaignBehaviorManager](../CampaignBehaviorManager/) 后注册；世界对象、模型和菜单是否可用取决于具体阶段。不要在 `RegisterEvents()` 里假定“完整战役世界”已经就绪，应把依赖 settlement、model 或 menu 的初始化放到合适的生命周期回调。

### tick 转发：`Tick`、`HourlyTick*`、`DailyTick*`、`WeeklyTick`、`TickPartialHourlyAi`

这些方法是原生调度器的桥接面，不是“每次真实帧都会调用”的保证：部分 tick 由 campaign 周期事件触发，实体 tick 由 [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) 以欠账/轮询方式分片执行。高频 handler 必须短小、可重复、可处理对象已失活的情况。

## 真实获取与订阅示例

下面是 1.3.15 原生行为使用的同一订阅形态。它只记录收到的英雄死亡通知；计数通过 `SyncData` 保存，事件监听本身通过 `AddNonSerializedListener` 注册，不把委托闭包当作存档字段。

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.SaveSystem;

public sealed class HeroDeathLedgerBehavior : CampaignBehaviorBase
{
    private int _observedHeroDeaths;

    public override void RegisterEvents()
    {
        CampaignEvents.HeroKilledEvent.AddNonSerializedListener(
            this,
            new Action<Hero, Hero, KillCharacterAction.KillCharacterActionDetail, bool>(OnHeroKilled));
    }

    private void OnHeroKilled(
        Hero victim,
        Hero killer,
        KillCharacterAction.KillCharacterActionDetail detail,
        bool showNotification)
    {
        if (victim != null)
        {
            _observedHeroDeaths++;
        }
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("ObservedHeroDeaths", ref _observedHeroDeaths);
    }

    public void Detach()
    {
        CampaignEventDispatcher dispatcher = CampaignEventDispatcher.Instance;
        if (dispatcher != null)
        {
            dispatcher.RemoveListeners(this);
        }
    }
}
```

`CampaignEventDispatcher.Instance` 是真实的运行时获取路径；`Detach` 只清除此 owner 的监听。它不会撤销一个通过 `Campaign.Current.AddCampaignEventReceiver(...)` 追加的 receiver，因此长期基础设施必须自行设计生命周期，普通 mod 不应把临时 UI 对象直接注册为 receiver。

## 事件、行为与存档边界

- `CampaignEvents.XEvent` 的 listener 是非序列化委托。读档后 behavior 会由行为管理器重新装配并再次注册；应该把持久状态放在 behavior 的 `SyncData`，不要依赖闭包或静态字段恢复。
- dispatcher 的 receiver 数组按注册顺序调用；新增 receiver 会改变后续调用顺序。不要把两个互相依赖的行为建立在未声明的数组顺序上。
- handler 中若调用 `ChangeOwnerOfSettlementAction.Apply`、`KillCharacterAction.Apply` 等 action，可能嵌套触发新的 dispatcher 回调。避免在同一事件中无条件再次触发同类 action，以免递归或重复结算。
- `OnBeforeSave` 等存档事件适合刷新 behavior 的保存缓存；不要在存档回调中创建临时 receiver、修改保存对象图或进行不可重复的世界操作。
- 原生对象可能已被 `OnPartyRemoved`、`OnMobilePartyDestroyed`、`OnHeroKilled` 通知标记为失活或即将移除。handler 中应重新检查对象状态，不要把它们永久缓存给后续 tick。

## 版本风险

1.3.15 与 1.4.5 的核心结构一致：`Instance`、receiver 数组、`RemoveListeners` 以及按数组顺序转发均未改变；周期 tick 的桥接也保持一致。

1.4.5 在 dispatcher 中新增了 `OnHeroActivated` 和 `CollectMetadataEntries` 两个回调，不能把 1.4.5 的完整方法集合反向当成 1.3.15 API。本文的事件名、参数和示例以 1.3.15 源码为准；跨版本 mod 应针对新增/缺失回调做条件编译或隔离，不要反射调用不存在的 `OnXxx`。

## 导航

### ↑ Parent

- [Campaign extension API index](../)
- [Campaign](../../campaign/Campaign/)

### ↔ Sibling

- [CampaignEvents](../CampaignEvents/) — mod 通常真正订阅的事件表
- [CampaignEventReceiver](../CampaignEventReceiver/) — dispatcher 转发的虚拟回调契约
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager/) — tick 和自定义周期事件调度

### Related

- [CampaignBehaviorBase](../CampaignBehaviorBase/) · [CampaignBehaviorManager](../CampaignBehaviorManager/) · [CampaignGameStarter](../CampaignGameStarter/)
- [MBCampaignEvent](../MBCampaignEvent/) · [CampaignTime](../CampaignTime/)
- [KillCharacterAction](../KillCharacterAction/) · [ChangeOwnerOfSettlementAction](../ChangeOwnerOfSettlementAction/) · [DeclareWarAction](../DeclareWarAction/)
- [SaveManager](../../save-system/SaveManager/)
