---
title: "EventManager"
description: "按类型分发的简单事件总线：DictionaryByType 存 Action<T> 列表，触发时按静态泛型参数精确命中，不做继承链回溯。"
---
# EventManager

**Namespace:** `TaleWorlds.Library.EventSystem`
**Module:** `TaleWorlds.Library`
**Type:** `public class EventManager`
**Base:** `System.Object`
**File:** `TaleWorlds.Library/EventSystem/EventManager.cs`

## 概述

它是游戏里最小也最容易被误用的一个组件：57 行，一个 `DictionaryByType` 字段，五个公开方法。语义只有一句——**「以事件类型为键，存一个 `Action<T>` 列表；触发时按键取出列表并逐个调用。」**

「以事件类型为键」里的**类型**是**静态泛型参数 `T`，不是事件的运行时类型**。`TriggerEvent<T>(T eventObj)` 直接把 `T` 透传给 `_eventsByType.InvokeActions<T>(item)`，而后者用 `typeof(T)` 查字典。**这里没有按基类或接口向上查找的逻辑**——查不到就是静默什么都不做。

约束是 `T` 必须是 [EventBase](../EventBase) 的**子类**。`RegisterEvent` / `UnregisterEvent` 的方法体第一件事就是 `typeof(T).IsSubclassOf(typeof(EventBase))`，不成立就 `Debug.FailedAssert("Events have to derived from EventSystemBase")` 并**跳过注册**（断言不抛异常，发行构建里基本只打日志）。

## 心智模型

三段式，永远是这三段：

1. **订阅**：`eventManager.RegisterEvent<MyEvent>(OnMyEvent)`——在初始化时做；
2. **发布**：`eventManager.TriggerEvent(new MyEvent { … })`——随时；
3. **退订**：`eventManager.UnregisterEvent<MyEvent>(OnMyEvent)`——不写就泄漏到 `Clear()` 为止。

游戏本体里 [Game](../Game) 持有一个 `EventManager` 属性，`Destroy()` 时 `Clear()` 并置 null。所以**任何缓存下来的 `EventManager` 引用在换局后失效**——静态字段里存它是最常见的生命周期事故。

**最坑的一条：`TriggerEvent` 按静态类型分发。** 这样写不会有任何处理器被调用：

```csharp
EventBase evt = new MyEvent();
// Game.Current.EventManager.TriggerEvent(evt);
```

因为 `T` 被推断成 `EventBase`，字典里查的是 `typeof(EventBase)`，而那个键根本注册不上（`EventBase.IsSubclassOf(EventBase)` 为 false）。**正确写法是让 `T` 被推断成具体类型**，也就是把 `new MyEvent()` 直接写在调用实参里。

第二条：**注册没有去重。** `DictionaryByType.Add<T>` 是 `list.Add(value)`，同一个 handler 委托注册两次就会被调用两次；`Remove<T>` 只移除**一个**匹配项。所以重复注册 / 重复退订会不对称。

第三条：**分发时改订阅列表会炸。** `InvokeActions<T>` 是 `foreach (Action<T> action in (List<Action<T>>)obj) action(item);`。处理器内部如果 `UnregisterEvent` 同一个类型，`List` 在枚举中被改 → `InvalidOperationException`。**退订动作要挪到分发之外。**

第四条：**`GetCloneOfEventDictionary()` 是浅拷贝。** `DictionaryByType.GetClone()` 返回 `new Dictionary<Type, object>(this._eventsByType)`——字典本身是新对象，**但里面的 `List<Action<T>>` 值是同一份引用**。当快照用来判断「订阅集合变没变」可以；当「独立副本」来改就会串到原字典。

常见误用：把 `EventBase` 变量传给 `TriggerEvent`（静默 no-op）；在处理器里退订自己；跨局缓存 `EventManager`；以为 `IsSubclassOf` 允许注册 `EventBase` 本身。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `public EventManager()` | 建一个空的 `DictionaryByType`。**无状态共享问题——每个实例各自一份字典。** |
| `RegisterEvent` | `public void RegisterEvent<T>(Action<T> eventObjType)` | `typeof(T).IsSubclassOf(typeof(EventBase))` 为真时 `_eventsByType.Add<T>(handler)`，否则 `Debug.FailedAssert` 后**什么都不做**。**没有去重**——同一 handler 注册 N 次会被调用 N 次。 |
| `UnregisterEvent` | `public void UnregisterEvent<T>(Action<T> eventObjType)` | 同样先判 `IsSubclassOf`，通过则 `_eventsByType.Remove<T>(handler)`。**`DictionaryByType.Remove` 从键里移除一个匹配项就停**——同一个 handler 注册了三次就得起三次。 |
| `TriggerEvent` | `public void TriggerEvent<T>(T eventObj)` | `_eventsByType.InvokeActions<T>(eventObj)`。**键是 `typeof(T)`（静态类型），不做继承链查找**；查不到静默无动作。分发途中修改该类型的列表会 `InvalidOperationException`。 |
| `Clear` | `public void Clear()` | 清空全部订阅。**一次性退订所有类型**——[Game](../Game) 的 `Destroy()` 就是这么做的。 |
| `GetCloneOfEventDictionary` | `public IDictionary<Type, object> GetCloneOfEventDictionary()` | 拿一份订阅字典的浅拷贝（`new Dictionary<Type, object>`）。**值里的 `List<Action<T>>` 是共享引用**，改副本里的列表会改到原字典。用来做「订阅有没有变」的比较是安全的。 |

## 真实示例

声明事件并走完订阅 / 发布 / 退订：

```csharp
// 读者侧事件类型：继承内核标记基类，不属于游戏 API
public class LedgerChangedEvent : EventBase
{
    public int EntryCount;
    public string Reason;
}

// 订阅（初始化时）
EventManager events = Game.Current.EventManager;
events.RegisterEvent<LedgerChangedEvent>(OnLedgerChanged);

// 处理器
private void OnLedgerChanged(LedgerChangedEvent evt)
{
    Debug.Print("ledger changed: " + evt.Reason + " (" + evt.EntryCount + ")", 0);
}

// 发布（必须让 T 被推断成具体类型）
Game.Current.EventManager.TriggerEvent(new LedgerChangedEvent { EntryCount = 12, Reason = "trade" });

// 退订（否则处理器一直在字典里）
Game.Current.EventManager.UnregisterEvent<LedgerChangedEvent>(OnLedgerChanged);
```

`TriggerEvent` 按静态类型分发的陷阱（这段是无输出，不是报错）：

```csharp
Game.Current.EventManager.RegisterEvent<LedgerChangedEvent>(OnLedgerChanged);

EventBase asBase = new LedgerChangedEvent();
Game.Current.EventManager.TriggerEvent(asBase);   // T = EventBase，查不到键，静默无动作

Game.Current.EventManager.TriggerEvent(new LedgerChangedEvent());  // T = LedgerChangedEvent，命中

Game.Current.EventManager.UnregisterEvent<LedgerChangedEvent>(OnLedgerChanged);
```

注册非 `EventBase` 子类会被拒绝（断言不抛异常，只是不注册）：

```csharp
// 读者侧演示类型：故意不继承 EventBase，用来展示注册被拒
public class NotAnEvent
{
    public int Value;
}

Game.Current.EventManager.RegisterEvent<NotAnEvent>(o => Debug.Print("never", 0));
Game.Current.EventManager.TriggerEvent(new NotAnEvent());   // 没有任何处理器被调用
```

按类型快照当前订阅（浅拷贝，只读比较用）：

```csharp
IDictionary<Type, object> snapshot = Game.Current.EventManager.GetCloneOfEventDictionary();

bool hasLedgerHandler = snapshot.ContainsKey(typeof(LedgerChangedEvent));
Debug.Print("ledger subscribed: " + hasLedgerHandler, 0);
Debug.Print("subscribed type count: " + snapshot.Count, 0);
```

重复注册 / 重复退订的不对称：

```csharp
EventManager events = Game.Current.EventManager;

events.RegisterEvent<LedgerChangedEvent>(OnLedgerChanged);
events.RegisterEvent<LedgerChangedEvent>(OnLedgerChanged);   // 注册了两次

events.TriggerEvent(new LedgerChangedEvent { Reason = "double" });   // 处理器被调用两次

events.UnregisterEvent<LedgerChangedEvent>(OnLedgerChanged);   // 只移除一个
events.TriggerEvent(new LedgerChangedEvent { Reason = "still one left" });

events.UnregisterEvent<LedgerChangedEvent>(OnLedgerChanged);
events.UnregisterEvent<LedgerChangedEvent>(OnLedgerChanged);   // 必须起够次数
```

换局时一次性清空（[Game](../Game) 的 `Destroy()` 就是这么做的）：

```csharp
Game.Current.Destroy();
Debug.Print("destroy called; next access to Game.Current.EventManager will be a fresh instance", 0);
```

## 风险与边界

- **`TriggerEvent` 按静态类型分发，不回溯继承链。** 传基类/接口类型的变量等于静默丢弃事件。**这是本类最容易出的 bug**，且不报错。
- **`RegisterEvent` 不去重。** 同一 handler 注册两次就被调两次。
- **`UnregisterEvent` 只移除一个匹配项。** 注册几次就得退几次，否则残留。
- **`RegisterEvent` / `UnregisterEvent` 对非 `EventBase` 子类只断言不注册。** `Debug.FailedAssert` 在发行构建里不抛异常，**注册静默失败**。注意 `IsSubclassOf` 对 `EventBase` 自身返回 false（`T` 就是 `EventBase` 时注册不上）。
- **分发途中改列表会 `InvalidOperationException`。** 处理器里不要 `UnregisterEvent` 同一类型，挪到分发之外。
- **`GetCloneOfEventDictionary` 是浅拷贝。** 字典结构独立，值里的 `List<Action<T>>` 共享。**用它来改订阅是错的。**
- **生命周期绑在 [Game](../Game) 上。** `Destroy()` 会 `Clear()` 并置空引用。**静态缓存 `EventManager` 一定会在换局后拿到失效引用。**
- **没有优先级、没有异常隔离。** 一个处理器抛异常，后面的处理器不会被调用——分发是朴素 `foreach`，没有 try/catch。
- **没有弱引用。** 处理器是字典里的强引用；订阅者被事件总线持有，**退订前不会回收**。
- **没有线程安全。** `Dictionary` 不是并发容器，**不要从非主线程 `TriggerEvent`**。
- **`Clear()` 不可逆且无差别。** 它清掉所有人（包括游戏本体）的订阅，别在运行期当「只清我的」用。
- **同名不同类型。** `TaleWorlds.GauntletUI.EventManager` 是 GUI 层另一个类（本仓存在 `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`），**与本页的 `TaleWorlds.Library.EventSystem.EventManager` 无关**。两个 `using` 同时存在时必须写全限定名。

## 跨版本提示

`bannerlord-1.3.15/TaleWorlds.Library/EventSystem/EventManager.cs` 与 `bannerlord-1.4.6/TaleWorlds.Library/EventSystem/EventManager.cs` 逐行比对，**public 表面完全一致**：7 条 public 成员（构造器 + `RegisterEvent` / `UnregisterEvent` / `TriggerEvent` / `Clear` / `GetCloneOfEventDictionary`），方法体逐字相同，`Debug.FailedAssert` 的消息与断言行号也一致。底层 `TaleWorlds.Library/EventSystem/DictionaryByType.cs` 的 `Add` / `Remove` / `InvokeActions` / `GetClone` / `Clear` 在两版之间也没有变化。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/EventManager.cs`（54 行）与 `bannerlord-1.4.6/TaleWorlds.Library/EventSystem/EventManager.cs`（59 行）逐成员比对 public/protected 表面。**三版 public 表面完全一致（各 2 个成员：构造器 + 两个方法，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。注意 1.4.5 的目录是 `TaleWorlds.Library/TaleWorlds.Library.EventSystem/`（外层与内层目录名不完全相同），本段上文提到的底层 `DictionaryByType.cs` 在 1.4.5 里对应 `bin/TaleWorlds.Library/TaleWorlds.Library.EventSystem/DictionaryByType.cs`。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 约束施加方：[EventBase](../EventBase) 是唯一被接受的类型根——`RegisterEvent` / `UnregisterEvent` 都用 `typeof(T).IsSubclassOf(typeof(EventBase))` 卡它
- 典型宿主：[Game](../Game) 持有一个 `EventManager` 属性并在 `Destroy()` 时 `Clear()`；消息类场景另见 [InformationManager](../InformationManager)
- 底层容器：`TaleWorlds.Library.EventSystem.DictionaryByType`（同目录 `DictionaryByType.cs`，无独立页面）——`Add` 不去重、`Remove` 只去一个、`InvokeActions` 是朴素 `foreach`、`GetClone` 是浅拷贝，本类的全部语义都由它决定
- 同名干扰项：`TaleWorlds.GauntletUI.EventManager` 属于 `gui` 桶，与本类无关
- 桶首页：[core-extra API 分区](../)