---
title: "MBCampaignEvent"
description: "按游戏时间重复触发的轻量定时器：Campaign 的 DailyTick/HourlyTick 与你自己的周期逻辑都建立在它之上，用 CampaignTime 计算下一次触发点并在超时后追赶执行。"
---

# MBCampaignEvent

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MBCampaignEvent`
**Base:** 无（普通类，内部持有 `CampaignTime` 字段）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/MBCampaignEvent.cs`

## 概述

`MBCampaignEvent` 是一个**按游戏内时间计时的重复触发器**，不是 .NET 定时器，也不是帧率驱动的 ticker。它只做三件事：记住触发间隔、记住下一次触发时刻、维护一组回调。它不订阅任何东西、不读存档、不知道自己被谁驱动——驱动它的是 [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)，而管理器本身又只在游戏时间推进时被 `Campaign.Tick()` 调用。原生的 `DailyTickEvent` / `HourlyTickEvent` / `QuarterHourlyTickEvent` 全都是它的实例。

## 心智模型

理解它只需要三行状态：

- `NextTriggerTime`：下一次触发的游戏时刻，由 `CampaignTime` 表达。
- `TriggerPeriod`：周期，`CampaignTime` 支持天/小时/分钟任意组合（`CampaignTime.Hours(0.25f)` 就是 15 分钟）。
- `handlers`：回调列表，签名是 `CampaignEventDelegate(MBCampaignEvent, params object[])`。

驱动链是：`Campaign.Tick()` → `_campaignPeriodicEventManager.OnTick(dt)` → `SignalPeriodicEvents()` → 对 `Campaign.Current.CustomPeriodicCampaignEvents` 里的每个事件调 `CheckUpdate()`。`CheckUpdate` 内部是 `while (NextTriggerTime.IsPast && !isEventDeleted)`——**这是追赶循环，不是单次触发**：如果游戏从暂停恢复、或读档后时间已经越过了多个触发点，它会一次性把欠的次数全部补上，每个周期回调一次。

因为原生的 `DailyTick` 回调会转发成 [CampaignEvents](../CampaignEvents) 上的 `DailyTickEvent`，你在 `CampaignEvents.DailyTickEvent` 上订阅，本质上就是在订阅一个 `MBCampaignEvent`。

**常见误用与坑**

1. **用第一个构造函数 `MBCampaignEvent(string eventName)`** —— 它只写 `description`，`TriggerPeriod` 是 `CampaignTime.Zero`、`NextTriggerTime` 是默认值，事件**永远不会触发**。那个构造函数只是给「描述型」用途准备的。
2. **以为 `TriggerPeriod = 0` 能每帧触发**：0 会让 `NextTriggerTime += 0` 变成死循环卡死主线程。要每帧就订阅 `CampaignEvents.Tick` 或用 behavior 组件的 `OnTick`。
3. **忘记 `DeletePeriodicEvent()`**：事件还挂在 `CustomPeriodicCampaignEvents` 上，管理器每轮都遍历它并 `CheckUpdate`，长期开着就是稳定开销与潜在的状态复活。
4. **回调里改时间线**：`RunHandlers` 是同步 for 循环，`CheckUpdate` 是 while 循环。在回调里删除自己（`DeletePeriodicEvent`）是安全的，`isEventDeleted` 会在下一轮 while 判断时终止；但在回调里 `AddHandler` 会让本轮 `handlers.Count` 变大，新回调**可能当轮就被执行**。

## 怎么用

### 怎么拿到它

周期事件不要自己 `new`，用工厂：`CampaignPeriodicEventManager.CreatePeriodicEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`（`CampaignPeriodicEventManager.cs:294`）。它做的事只有一件但很关键——`Campaign.Current.CustomPeriodicCampaignEvents.Add(mbcampaignEvent)`（`:297`）。**只有进了这个列表的事件才会被驱动**：`SignalPeriodicEvents` 反向遍历该列表调 `CheckUpdate()`（`CampaignPeriodicEventManager.cs:326-330`）。原生代码全都走这条工厂，例如战役自己的三个 tick 事件（`Campaign.cs:1244`、`1251`、`1258`）和 `Army` 的（`Army.cs:334`、`336`）。

`MBCampaignEvent` 有两个构造函数。带周期参数的那个（`MBCampaignEvent.cs:32`）会设 `NextTriggerTime = CampaignTime.Now + InitialWait` 并把 `isEventDeleted` 置 false；只传名字的那个（`:26`）**只设 description**，`TriggerPeriod` 和 `NextTriggerTime` 都留在默认值上——它只能用来做「非周期的一次性触发」容器（`MapScreen.cs:2192` 那种用法）。

驱动频率受一个下限约束：`MinimumPeriodicEventInterval` 被设成 `CampaignTime.Hours(0.05f)`（`CampaignPeriodicEventManager.cs:85`），`SignalPeriodicEvents` 只有在这个间隔过去后才推进一次（`:323`）。所以比 3 游戏分钟更密的周期是拿不到的。

### 典型用法

```csharp
public class MySupplyBehavior : CampaignBehaviorBase
{
    private MBCampaignEvent _dailyEvent;

    public override void RegisterEvents()
    {
        // 工厂：同时把事件挂进 Campaign 的驱动列表
        _dailyEvent = CampaignPeriodicEventManager.CreatePeriodicEvent(
            triggerPeriod: CampaignTime.Days(1f),
            initialWait: CampaignTime.Hours(6f));

        _dailyEvent.AddHandler(OnDailySupplyTick);
    }

    private void OnDailySupplyTick(MBCampaignEvent campaignEvent, params object[] delegateParams) { }

    public void StopTicking()
    {
        _dailyEvent.DeletePeriodicEvent();   // 标 isEventDeleted，下一轮 SignalPeriodicEvents 里被移出列表
    }
}
```

### 最容易踩的坑

`AddHandler` 传方法组时 `Unregister(object instance)`（`MBCampaignEvent.cs:56`）能工作，一旦你改成传 lambda 就静默失效：它的实现是逐个比较 `handlers[i].Target == instance`（`:60`），而 lambda 的 `Target` 是编译器生成的闭包对象，不是你的 behavior `this`。后果是这个 handler 在战役剩下的全部时间里仍然每个周期都触发——behavior 已经 `Unregister` 了、`Campaign.cs:1691` 也把 behavior 列表清空了，但事件照样跑，读到的是已被丢弃的对象状态，表现为难以复现的幽灵数值增长。要停就调 `DeletePeriodicEvent()`（`:79`），别依赖 `Unregister`。

## 成员与调用时机

- `MBCampaignEvent(CampaignTime triggerPeriod, CampaignTime initialWait)`：正式构造函数。`initialWait` 是首次触发前的等待时间，`NextTriggerTime = CampaignTime.Now + initialWait`。**这才是要用的那个**。
- `MBCampaignEvent(string eventName)`：仅写 `description`，不设定时器。不要用它做周期事件。
- `void AddHandler(CampaignEventDelegate gameEventDelegate)`：追加回调，无去重。可以加多个。
- `void RunHandlers(params object[] delegateParams)`：手动触发所有回调。管理器内部用它传 `CampaignTime.Now`。自己调它可以「立刻执行一次」，但注意不会推进 `NextTriggerTime`。
- `void CheckUpdate()`：**只由管理器调用**。到点就循环触发并把 `NextTriggerTime` 前移一个周期。
- `void DeletePeriodicEvent()`：置 `isEventDeleted = true`，管理器在下一轮把它从列表移除。这是唯一的取消方式（没有反向引用可调）。
- `void Unregister(object instance)`：按委托 `Target` 移除属于某个对象的所有回调。给「回调挂在别的对象上、想只摘掉自己那部分」的场景用。
- `CampaignTime TriggerPeriod { get; private set; }` / `CampaignTime InitialWait { get; private set; }`：只读属性。想改周期只能删了重建。
- `bool isEventDeleted { get; set; }`：公开可写。置 `true` 即可停用。
- `public string description`：自由文本，供调试/日志。
- `protected List<CampaignEventDelegate> handlers`、`protected CampaignTime NextTriggerTime`：子类可访问。想写自己的定时行为可以继承。

## 真实示例

```csharp
public class MyWeatherBehavior : CampaignBehaviorBase
{
    private MBCampaignEvent _event;

    public override void RegisterEvents()
    {
        // 初次等 6 小时，之后每 12 小时触发一次游戏内时间
        _event = CampaignPeriodicEventManager.CreatePeriodicEvent(CampaignTime.Hours(12f), CampaignTime.Hours(6f));
        _event.AddHandler(MyOnWeatherWindow);
    }

    private void MyOnWeatherWindow(MBCampaignEvent campaignEvent, object[] delegateParams)
    {
        MobileParty party = Campaign.Current.MainParty;
        if (party != null)
            Debug.Print("weather window opened at hour " + CampaignTime.Now.ToHours);
    }
}

// 停用：不需要保留引用也能删掉，但保留引用方便复用一个句柄做状态判断
_event.DeletePeriodicEvent();
```

## 风险与边界

- **只在游戏时间推进时触发**：`SignalPeriodicEvents` 由 `Campaign.Tick()` 驱动，而 `TickPeriodicEvents` 那条路径被 `_dt > 0f` 包着。暂停、开菜单、`TimeControlMode.Stop` 时全部不触发。做「现实时间 N 秒后」的事请用 `[TimerCall]` 那类定时器，不要用这里。
- **不序列化**：`handlers` 与 `NextTriggerTime` 都带 `[CachedData]` 而非存档字段，**读档后会被重新创建**。正确姿势是在 `RegisterEvents()` 里重建定时器（它每次战役启动都会跑），不要试图把 `MBCampaignEvent` 存进存档。
- **追赶语义会造成连发**：读档回溯导致 `NextTriggerTime` 落后很多时，`CheckUpdate` 的 while 会连续调用多次回调。若回调有副作用（发奖、写日志），读档后可能瞬间收到一串。加「上次触发时刻」校验。
- **`Unregister` 按 Target 匹配**：如果多个对象共用同一个静态方法作为回调，`Target` 可能都是同一个静态宿主，`Unregister(instance)` 删不掉。lambda 捕获实例的写法能被正确匹配。
- **注册位置**：`CreatePeriodicEvent` 内部会 `Campaign.Current.CustomPeriodicCampaignEvents.Add(...)`，**要求 `Campaign.Current` 非 null**。只能在战役启动后调用。

## 依赖关系

- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) — 唯一驱动方，`CreatePeriodicEvent` 的提供方
- [Campaign](../Campaign) — 持有事件列表并在 `Tick()` 里驱动管理器
- [CampaignEvents](../CampaignEvents) — 原生周期事件最终从这里以 `IMbEvent` 形态暴露给 mod