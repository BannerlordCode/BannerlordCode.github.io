---
title: "EventBase"
description: "事件系统的事件类型标记基类：EventManager 只接受继承自它的类型作为注册与触发键，类本身零成员。"
---
# EventBase

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class EventBase`
**Base:** `System.Object`
**File:** `TaleWorlds.Library/EventSystem/EventBase.cs`

## 概述

整个文件只有 9 行、一个空类、零字段零属性零方法。它存在的唯一意义是给 `EventManager` 提供一个**类型约束标记**：`EventManager.RegisterEvent<T>` 与 `UnregisterEvent<T>` 的方法体第一件事就是 `typeof(T).IsSubclassOf(typeof(EventBase))`，不成立就 `Debug.FailedAssert("Events have to derived from EventSystemBase")`。

也就是说，事件总线的"钥匙孔"就是 `EventBase`。你写一个 `class MyEvent : EventBase`，它就自动获得被 `RegisterEvent` / `TriggerEvent` 接受的资格；你写一个不继承它的类，调用会被拒绝并打断言。注意断言**不 return**——`RegisterEvent` 在断言之后没有 else 分支，直接结束方法体，事件不会被注册。

它与 CampaignSystem 里的 `IMbEvent`/`MbEvent<T>` 是两套独立机制：`IMbEventBase` 是接口，走 `Campaign`'s 自己的事件通道；`EventBase` 是类，走 `TaleWorlds.Library.EventSystem`。两者不通用。

## 心智模型

典型使用顺序只有两步，因为没有第三步：

1. **声明事件类型**：`public class InventoryTransferItemEvent : EventBase { public ItemObject Item { get; private set; } public bool IsBuyForPlayer { get; private set; } }`（源码 `TaleWorlds.CampaignSystem/Inventory/InventoryTransferItemEvent.cs`，构造函数 `(ItemObject item, bool isBuyForPlayer)`）。它就是纯数据载体，不需要任何方法。
2. **注册 / 触发**：持有 `EventManager` 的那一侧（通常是 `Game` 的 `EventManager` 属性）在初始化时 `RegisterEvent<MyEvent>(handler)`；生产侧 `TriggerEvent(new MyEvent { ... })`。

`EventManager` 内部是 `DictionaryByType`，键是事件类型，值是 `Action<T>` 的集合。`TriggerEvent<T>(T eventObj)` 走 `_eventsByType.InvokeActions<T>(eventObj)`——**按事件的运行时类型分发**，所以传基类实例不会触发子类的处理器（这里没有多态回退逻辑）。

常见误用：以为继承了 `EventBase` 就能自动收到事件——不会，**必须显式 `RegisterEvent`**；以为 `TriggerEvent` 会自动 `UnregisterEvent`——不会，处理器泄漏到你 `UnregisterEvent` 或 `EventManager.Clear()` 为止；把 `EventBase` 当成有基类能力的抽象基类去覆写方法——它没有可覆写的东西。

## 关键成员

本类**没有任何 public / protected 成员**：无构造函数、无属性、无方法、无字段、无嵌套类型。`Object` 继承来的 `ToString` / `Equals` / `GetHashCode` 全部是 `System.Object` 的实现，不属于本类的 API 面。

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| （无） | `public class EventBase` | 纯类型标记。唯一作用是让 `EventManager.RegisterEvent<T>` / `UnregisterEvent<T>` 的 `typeof(T).IsSubclassOf(typeof(EventBase))` 检查通过。 |

## 怎么用

### 怎么拿到它

`EventBase` 在 `TaleWorlds.Library.EventSystem` 里，**整个文件只有 10 行、一个声明**：

```
public class EventBase          // TaleWorlds.Library/EventSystem/EventBase.cs:6
```

没有成员、没有方法、没有属性。它唯一的作用是**当类型标记用**——判定某个事件的类型是否受认可。

配套的总线是同目录的 `TaleWorlds.Library/EventSystem/EventManager.cs` 里的 `public class EventManager`（`TaleWorlds.Library/EventSystem/EventManager.cs:7`），它有公开构造器 `public EventManager()`（`TaleWorlds.Library/EventSystem/EventManager.cs:10`，内部 `new DictionaryByType()`），四个方法：`RegisterEvent<T>(Action<T>)`（`TaleWorlds.Library/EventSystem/EventManager.cs:16`）、`UnregisterEvent<T>(Action<T>)`（`TaleWorlds.Library/EventSystem/EventManager.cs:27`）、`TriggerEvent<T>(T)`（`TaleWorlds.Library/EventSystem/EventManager.cs:38`）、`Clear()`（`TaleWorlds.Library/EventSystem/EventManager.cs:44`）。

注意别和 `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs` 搞混——那是 1506 行的 UI 事件管理器（处理鼠标、焦点、拖拽），里面**没有** `RegisterEvent` / `TriggerEvent`。这一页讲的是 `TaleWorlds.Library` 那一个。

### 典型用法

自定义一个事件类型，让它成为总线认可的形状，然后注册与触发：

```csharp
using TaleWorlds.Library.EventSystem;

public class MyPanelOpenedEvent : EventBase     // 必须继承 EventBase
{
    public readonly string PanelId;
    public MyPanelOpenedEvent(string panelId) { PanelId = panelId; }
}

// 总线是普通对象，自己持有
var bus = new EventManager();                  // TaleWorlds.Library/EventSystem/EventManager.cs:10

void OnPanelOpened(MyPanelOpenedEvent e) { Debug.Print(e.PanelId, 0); }

bus.RegisterEvent<MyPanelOpenedEvent>(OnPanelOpened);   // TaleWorlds.Library/EventSystem/EventManager.cs:16
bus.TriggerEvent(new MyPanelOpenedEvent("trade"));       // TaleWorlds.Library/EventSystem/EventManager.cs:38

// 退订要传同一个委托实例
bus.UnregisterEvent<MyPanelOpenedEvent>(OnPanelOpened); // TaleWorlds.Library/EventSystem/EventManager.cs:27
bus.Clear();                                           // TaleWorlds.Library/EventSystem/EventManager.cs:44 清空全部
```

### 最容易踩的坑

**事件类型忘了继承 `EventBase`。** `RegisterEvent<T>` 的实现是 `if (typeof(T).IsSubclassOf(typeof(EventBase))) { _eventsByType.Add<T>(eventObjType); return; } Debug.FailedAssert("Events have to derived from EventSystemBase", ...)`（`TaleWorlds.Library/EventSystem/EventManager.cs:16-25`）——断言之后**没有 else、没有 return、也没有抛异常**，方法就那么结束了。所以注册静默失败：不报错、不进字典，之后 `TriggerEvent` 什么都不会触发。`UnregisterEvent<T>`（`TaleWorlds.Library/EventSystem/EventManager.cs:27-36`）是同一形状的守卫，同样只断言。`TriggerEvent<T>`（`TaleWorlds.Library/EventSystem/EventManager.cs:38-41`）则**根本没有类型检查**，直接 `_eventsByType.InvokeActions<T>(eventObj)`——也就是说触发端不校验，校验只发生在注册端，错误会显得莫名其妙（「广播了但没人收」）。

第二个坑是注册端检查的是 `IsSubclassOf` 而不是 `IsAssignableFrom`，所以 `EventBase` 自己本身不算合法事件类型——如果你打算拿 `EventBase` 当通用事件参数（`RegisterEvent<EventBase>(...)`），它同样会被断言拦下，而且同样静默。

## 真实示例

声明一个事件并走完注册与触发（`EventManager` 由 `Game` 持有）：

```csharp
// 1. 事件类型：纯数据，继承标记基类
public class LedgerChangedEvent : EventBase
{
    public int EntryCount;
    public string Reason;
}

// 2. 订阅侧：初始化时注册
EventManager events = Game.Current.EventManager;
events.RegisterEvent<LedgerChangedEvent>(OnLedgerChanged);

private void OnLedgerChanged(LedgerChangedEvent evt)
{
    Debug.Print("ledger changed: " + evt.Reason + " (" + evt.EntryCount + ")", 0);
}

// 3. 生产侧：随时触发
Game.Current.EventManager.TriggerEvent(new LedgerChangedEvent
{
    EntryCount = 12,
    Reason = "trade"
});

// 4. 退订（否则处理器一直留在字典里）
Game.Current.EventManager.UnregisterEvent<LedgerChangedEvent>(OnLedgerChanged);
```

注册被拒绝时的行为（断言不阻断，但不注册）：

```csharp
public class NotAnEvent
{
}

// 会走 Debug.FailedAssert 分支，事件不会进入字典
Game.Current.EventManager.RegisterEvent<NotAnEvent>(o => Debug.Print("never", 0));
```

## 风险与边界

- **无断言阻断。** `RegisterEvent` / `UnregisterEvent` 的 `Debug.FailedAssert` 之后方法就结束，**不抛异常**。注册失败的表现是「事件永远没人收」，而不是崩溃。排查时去看 `sails.log` 里的断言行。
- **没有自动退订。** 处理器是 `DictionaryByType` 里的强引用。订阅者被其它对象持有时会一起泄漏，直到 `UnregisterEvent` 或 `EventManager.Clear()`。
- **`TriggerEvent` 按运行时类型精确匹配。** `DictionaryByType.InvokeActions<T>` 不做基类回退——触发子类实例时，订阅基类的处理器不会被调用。
- **与 `IMbEvent` 是两套系统。** `TaleWorlds.CampaignSystem` 的 `MbEvent<T>` 走 `IMbEventBase` 接口，**不继承 `EventBase`**。混用会得到「注册被拒」或「Campaign 事件收不到」。
- **无线程同步。** `DictionaryByType` 没有锁。跨线程 `TriggerEvent` 与 `RegisterEvent` 并发有风险。
- **生命周期绑在 `Game` 上。** `Game` 的 `Destroy()` 会 `EventManager.Clear()` 并把 `EventManager` 置 null。换局后静态缓存的 `EventManager` 引用全部失效。

## 跨版本提示

用 `bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Library/EventSystem/EventBase.cs` 逐行比对：**两个版本都是同样的 9 行空类，public 表面完全一致（都为空）**。事件约束逻辑在 `EventManager` 里，`bannerlord-1.3.15/TaleWorlds.Library/EventSystem/EventManager.cs` 的 `RegisterEvent` / `UnregisterEvent` 同样用 `IsSubclassOf(typeof(EventBase))` 判定。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventBase.cs`（6 行）与 `bannerlord-1.4.6/TaleWorlds.Library/EventSystem/EventBase.cs`（10 行）逐成员比对 public/protected 表面。**三版都是空类，public 表面均为空（0 成员）**。1.4.5 只有 6 行（`namespace TaleWorlds.Core;` 式 file-scoped 写法），1.3.15 与 1.4.6 各 10 行，行数差只是 namespace 块的括号换行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 约束施加方：[EventManager](../EventManager) 的 `RegisterEvent<T>` / `UnregisterEvent<T>` 靠它做 `IsSubclassOf` 检查
- 典型宿主：[Game](../Game) 的 `EventManager` 属性（`Destroy()` 时被 `Clear()` 并置 null）
- 兄弟机制：`TaleWorlds.CampaignSystem` 的 `IMbEvent` / `MbEvent<T>` 是不相干的另一套
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../EventManager`](../EventManager) · [`../Game`](../Game)
- 父索引：[`../_index`](../_index)
