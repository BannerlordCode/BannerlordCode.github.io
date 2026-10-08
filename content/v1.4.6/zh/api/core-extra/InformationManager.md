---
title: "InformationManager"
description: "纯静态的信息通道：所有游戏方法都是对一组静态事件的无条件转发，UI 侧订阅，逻辑侧调用。"
---
# InformationManager

**Namespace:** `TaleWorlds.Library`
**Module:** `TaleWorlds.Library`
**Type:** `public static class InformationManager`
**Base:** `System.Object`
**Source:** `TaleWorlds.Library/InformationManager.cs`

## 概述

这是 mod 与游戏 UI 之间最常用的一条通道，也是 1.4.6 里设计最「薄」的一个类：**所有 public 方法体都只有一件事——取对应静态事件，判 null，非空就 invoke**。它自己不排队、不缓存、不加锁、不记状态。真正的实现全在 UI 侧：`TaleWorlds.ScreenSystem` 里的 `ScreenBase`/`GauntletLayer` 在进屏幕时给这些 `*Internal` 事件赋值，退出时由 `Clear()` 一次性置 null。

命名约定很明确：**`Show*` / `Display*` / `Add*` 是逻辑侧调用的入口**（public static 方法），**`*Internal` 结尾的是 UI 侧订阅的槽位**（public static event 或字段）。`Clear()` 会把其中九个置 null，但**唯独漏了 `OnAddSystemNotification`**——这是个真实的不对称。

因为全部是静态可变状态，它的适用前提是「调用发生在主线程、且当前确实有 UI 在监听」。没 UI 时所有调用都是安全的 no-op。

## 心智模型

三种使用姿势：

1. **发消息**（逻辑 → UI）：`DisplayMessage(new InformationMessage(...))`、`ShowInquiry(new InquiryData(...), pauseGameActiveState: true)`、`AddSystemNotification("...")`。没有订阅者就静默丢弃。
2. **查状态**（UI 相关）：`IsAnyInquiryActive()`、`GetIsAnyTooltipActive()`、`GetIsAnyTooltipActiveAndExtended()`。三个都依赖 `IsAnyInquiryActiveInternal` / `IsAnyTooltipActiveInternal` 这两个**可空**委托，null 时返回 `false`。
3. **注册 tooltip**（扩展 UI）：`RegisterTooltip<TRegistered, TTooltip>(onRefreshData, movieName)` 往静态字典里塞一条记录，之后 `ShowTooltip(typeof(TRegistered), args)` 就能弹出。必须配对 `UnregisterTooltip<TRegistered>()`。

**静态订阅的生命周期**是最大的坑：`DisplayMessageInternal` 这类事件是 `static`，UI 退屏时靠 `InformationManager.Clear()` 统一置 null。mod 如果自己在静态初始化时订阅了其中一个 handler，**`Clear()` 不会通知你**，你会拿着一个已经脱离 UI 的 handler 继续发消息。反过来，如果你在 `OnSubModuleUnloaded` 里不取消自己挂到 `OnShowTooltip` 上的处理器，UI 重建后会有两个订阅者，消息弹两遍。

`IsAnyTooltipActiveDelegate` 的两个 `out` 参数是 `isAnyTooltipActive` 和 `isAnyTooltipExtended`；`GetIsAnyTooltipActiveAndExtended()` 走 `&&` 组合，所以「有 tooltip 但没展开」时它返回 false。

常见误用：在 async 回调里发消息（没有主线程上下文，UI 状态不确定）；把 `InformationManager` 当事件总线用来传业务数据（它没有队列和顺序保证）；注册 tooltip 后不注销（静态字典只增不减，mod 卸载后残留）。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `DisplayMessage` | `public static void DisplayMessage(InformationMessage message)` | 在当前屏幕顶部显示一条信息。`DisplayMessageInternal` 为 null 时静默返回。 |
| `HideAllMessages` | `public static void HideAllMessages()` | 隐藏（不销毁）所有信息。转发 `HideAllMessagesInternal`。 |
| `ClearAllMessages` | `public static void ClearAllMessages()` | 清除所有信息。转发 `ClearAllMessagesInternal`，与 `HideAllMessages` 是两码事。 |
| `AddSystemNotification` | `public static void AddSystemNotification(string message)` | 往系统通知队列塞一条纯文本。转发 `OnAddSystemNotification`。**注意 `Clear()` 不会清这个事件**。 |
| `ShowTooltip` | `public static void ShowTooltip(Type type, params object[] args)` | 按注册时用的 `TRegistered` 类型弹 tooltip。`args` 交给注册时的 `onRefreshData` 回调。找不到对应注册或事件为 null 都静默返回。 |
| `HideTooltip` | `public static void HideTooltip()` | 收起 tooltip。转发 `OnHideTooltip`。 |
| `ShowInquiry` | `public static void ShowInquiry(InquiryData data, bool pauseGameActiveState = false, bool prioritize = false)` | 弹出问答/确认窗口。`pauseGameActiveState` 为真时会冻结活动状态（配合 [GameStateManager](../GameStateManager) 的禁用请求机制）。转发 `OnShowInquiry`。 |
| `ShowTextInquiry` | `public static void ShowTextInquiry(TextInquiryData textData, bool pauseGameActiveState = false, bool prioritize = false)` | 同上，但带输入框。转发 `OnShowTextInquiry`。 |
| `HideInquiry` | `public static void HideInquiry()` | 关闭当前 inquiry。转发 `OnHideInquiry`。 |
| `IsAnyInquiryActive` | `public static bool IsAnyInquiryActive()` | 是否有 inquiry 打开。`IsAnyInquiryActiveInternal`（`Func<bool>` 字段）为 null 时返回 false。 |
| `GetIsAnyTooltipActive` | `public static bool GetIsAnyTooltipActive()` | 是否有 tooltip。`IsAnyTooltipActiveInternal`（委托）为 null 时返回 false，否则取 `out isAnyTooltipActive`。 |
| `GetIsAnyTooltipActiveAndExtended` | `public static bool GetIsAnyTooltipActiveAndExtended()` | 是否有**已展开**的 tooltip。取 `isAnyTooltipActive && isAnyTooltipExtended`，同样在委托为 null 时返回 false。 |
| `RegisterTooltip` | `public static void RegisterTooltip<TRegistered, TTooltip>(Action<TTooltip, object[]> onRefreshData, string movieName) where TTooltip : TooltipBaseVM` | 用 `typeof(TRegistered)` 作键、`typeof(TTooltip)` + 回调 + movie 名作值，塞进静态字典。**同键重复注册会覆盖旧值**（`Dictionary` 索引器赋值，不抛）。 |
| `UnregisterTooltip` | `public static void UnregisterTooltip<TRegistered>()` | 按 `typeof(TRegistered)` 移除。找不到时只 `Debug.Print("Unable to unregister tooltip because it was not found: ...")`，**不抛**。 |
| `RegisteredTypes` | `public static IReadOnlyDictionary<Type, InformationManager.TooltipRegistry> RegisteredTypes { get; }` | 当前所有已注册 tooltip 的只读视图（直接暴露内部字典的引用，不是副本）。用于自检有没有重复注册。 |
| `Clear` | `public static void Clear()` | 把九个槽位置 null：`DisplayMessageInternal`、`HideAllMessagesInternal`、`ClearAllMessagesInternal`、`OnShowInquiry`、`OnShowTextInquiry`、`OnHideInquiry`、`IsAnyInquiryActiveInternal`、`OnShowTooltip`、`OnHideTooltip`。**不清 `OnAddSystemNotification`，也不清 `_registeredTypes` 字典。** |
| `DisplayMessageInternal` | `public static event Action<InformationMessage> DisplayMessageInternal` | UI 侧订阅槽位。mod 一般不该赋值。 |
| `ClearAllMessagesInternal` | `public static event Action ClearAllMessagesInternal` | 同上。 |
| `HideAllMessagesInternal` | `public static event Action HideAllMessagesInternal` | 同上。 |
| `OnAddSystemNotification` | `public static event Action<string> OnAddSystemNotification` | 系统通知订阅槽位。**`Clear()` 不碰它**。 |
| `OnShowTooltip` | `public static event Action<Type, object[]> OnShowTooltip` | tooltip 弹出订阅槽位。 |
| `OnHideTooltip` | `public static event Action OnHideTooltip` | tooltip 收起订阅槽位。 |
| `OnShowInquiry` | `public static event Action<InquiryData, bool, bool> OnShowInquiry` | inquiry 弹出订阅槽位，三个参数与 `ShowInquiry` 一一对应。 |
| `OnShowTextInquiry` | `public static event Action<TextInquiryData, bool, bool> OnShowTextInquiry` | 文本 inquiry 弹出订阅槽位。 |
| `OnHideInquiry` | `public static event Action OnHideInquiry` | inquiry 关闭订阅槽位。 |
| `IsAnyInquiryActiveInternal` | `public static Func<bool> IsAnyInquiryActiveInternal` | **字段不是事件**。UI 侧赋值一个委托，`IsAnyInquiryActive()` 调它。 |
| `IsAnyTooltipActiveInternal` | `public static InformationManager.IsAnyTooltipActiveDelegate IsAnyTooltipActiveInternal` | **字段不是事件**。委托签名 `void IsAnyTooltipActiveDelegate(out bool isAnyTooltipActive, out bool isAnyTooltipExtended)`。 |
| `TooltipRegistry` | `public struct TooltipRegistry { public Type TooltipType; public object OnRefreshData; public string MovieName; }` | tooltip 注册记录。`OnRefreshData` 存的是 `object`（实际是 `Action<TTooltip, object[]>`），要用得自己转型。 |
| `TooltipRegistry` | `public TooltipRegistry(Type tooltipType, object onRefreshData, string movieName)` | 结构体构造，字段式存储，赋值即可。 |

## 怎么用

### 怎么拿到它

`InformationManager` 是 `TaleWorlds.Library/InformationManager.cs:7` 的 `public static class InformationManager`——**纯静态类**，全部成员都是 static。

它同时是**事件的消费者和事件的拥有者**，两种用法：

- **调它**（UI 侧）：`DisplayMessage(InformationMessage)`（`:71`）、`HideAllMessages()`（`:82`）、`ClearAllMessages()`（`:93`）、`AddSystemNotification(string)`（`:104`）、`ShowTooltip(Type, params object[])`（`:115`）、`HideTooltip()`（`:126`）、`ShowInquiry(InquiryData, bool pauseGameActiveState = false, bool prioritize = false)`（`:137`）、`ShowTextInquiry(...)`（`:148`）、`HideInquiry()`（`:159`），以及查询 `IsAnyInquiryActive()`（`:65`）、`GetIsAnyTooltipActive()`（`:170`）。
- **订阅它**（想接管 UI 的人）：九个静态事件，`DisplayMessageInternal`（`:12`）、`ClearAllMessagesInternal`（`:17`）、`HideAllMessagesInternal`（`:22`）、`OnAddSystemNotification`（`:27`）、`OnShowTooltip`（`:32`）、`OnHideTooltip`（`:37`）、`OnShowInquiry`（`:42`）、`OnShowTextInquiry`（`:47`）、`OnHideInquiry`（`:52`）。

**每个调用的实现都是同一个形状**——`DisplayMessage`（`:71-80`）：

```
Action<InformationMessage> displayMessageInternal = InformationManager.DisplayMessageInternal;
if (displayMessageInternal == null) { return; }
displayMessageInternal(message);
```

### 典型用法

```csharp
using TaleWorlds.Library;

// 发消息：UI 没起来时静默丢弃，不报错
InformationManager.DisplayMessage(new InformationMessage("你获得了一把剑。"));   // InformationManager.cs:71
InformationManager.AddSystemNotification("存档已覆盖");                          // :104

// 询问框（第三个参数是 pauseGameActiveState）
var inquiry = new InquiryData("确认？", true);
if (InformationManager.IsAnyInquiryActive()) { InformationManager.HideInquiry(); }   // :65 / :159
InformationManager.ShowInquiry(inquiry, pauseGameActiveState: true);                  // :137

// 接管显示：订阅内部事件。注意是静态事件，不退订就永久挂着
InformationManager.DisplayMessageInternal += OnShowMessage;      // :12
void OnShowMessage(InformationMessage msg) { Debug.Print(msg.ToString(), 0); }
```

### 最容易踩的坑

**在 UI 尚未初始化时发消息，然后以为「消息丢了是 bug」。** `DisplayMessage`（`:71-80`）第一句取出 `DisplayMessageInternal`，**为 null 就 `return`**——没有异常、没有排队、没有日志。所有 `Show*` / `Hide*` / `Display*` 都是这个形状。所以战斗逻辑在菜单界面触发的消息、在 `OnSubModuleLoad` 阶段发的提示，都会无声消失。判断依据是那个事件有没有被 UI 订阅：`if (InformationManager.DisplayMessageInternal != null)` 只能说明「有人订阅」，不能说明「UI 在显示」。

第二个坑是这九个事件都是 `public static event`，**生命周期跟进程走**。如果你的 mod 在初始化时 `+=` 而从不 `-=`，那么每次重新加载战役（甚至重新进入菜单）都会多挂一层处理器。后果：一条消息触发 N 次、弹 N 个窗、以及旧 lambda 捕获的 ViewModel 无法回收。退订必须传出**同一个委托实例**——写成 `e => {...}` 就退不掉。

第三，`ShowTooltip(Type type, params object[] args)`（`:115`）的签名是 `params object[]`，**编译期不做类型检查**。传错参数个数或顺序不会报错，只会在 UI 侧的强制转换里炸，位置离调用点很远。

## 真实示例

发消息与弹确认框（无 UI 订阅时全部是安全 no-op）：

```csharp
InformationManager.DisplayMessage(new InformationMessage("交易完成"));

if (InformationManager.IsAnyInquiryActive())
{
    return;
}

InformationManager.ShowInquiry(
    new InquiryData(
        "确定要放弃这笔交易吗？",
        "这笔交易一旦取消就无法恢复。",
        true,
        true,
        "确定",
        "取消",
        OnAffirmativeClicked,
        OnNegativeClicked),
    pauseGameActiveState: true,
    prioritize: false);
```

注册一个自定义 tooltip，用类型做键：

```csharp
public class MyLocationTooltipVM : TooltipBaseVM
{
    public MyLocationTooltipVM(Type invokedType, object[] invokedArgs)
        : base(invokedType, invokedArgs)
    {
    }

    public string TooltipTitle { get; set; }

    public int ProfitValue
    {
        get => _profitValue;
        set => SetField(ref _profitValue, value, nameof(ProfitValue));
    }

    private int _profitValue;

    protected override void OnFinalizeInternal()
    {
        TooltipTitle = null;
    }
}

public class MyLocation
{
}

InformationManager.RegisterTooltip<MyLocation, MyLocationTooltipVM>(
    (tooltip, args) =>
    {
        MyLocation location = (MyLocation)args[0];
        tooltip.TooltipTitle = location.Name;
        tooltip.ProfitValue = location.TradeProfit;
    },
    "MyLocationTooltip");

// 使用
InformationManager.ShowTooltip(typeof(MyLocation), someLocation);
InformationManager.HideTooltip();

// 卸载 mod 时务必注销
InformationManager.UnregisterTooltip<MyLocation>();
```

处理 inquiry 的结果（需要在有 UI 的上下文里订阅）：

```csharp
public class MyInquiryHook
{
    private readonly Action<InquiryData, bool, bool> _previous;

    public MyInquiryHook()
    {
        _previous = null;
        InformationManager.OnShowTextInquiry += OnShowTextInquiry;
    }

    public void Dispose()
    {
        InformationManager.OnShowTextInquiry -= OnShowTextInquiry;
    }

    private void OnShowTextInquiry(TextInquiryData data, bool pause, bool prioritize)
    {
        if (_previous != null)
        {
            _previous(data, pause, prioritize);
        }
    }
}
```

## 风险与边界

- **全部是进程级静态可变状态。** 没有实例隔离，也没有线程安全保证。所有调用应留在主线程。
- **`Clear()` 的覆盖范围不完整。** 它不清 `OnAddSystemNotification`，也不清 `_registeredTypes` 字典。mod 依赖 `Clear()` 做「彻底重置」会踩空。
- **静态事件订阅泄漏。** 订阅了 `*Internal` 之后 UI 退屏不会通知你；下次进屏又订阅一次就变成双发。务必在对应位置 `-=`。
- **无 UI 时静默丢弃。** 所有 public 方法在事件为 null 时直接 return。逻辑层「发了消息」不代表玩家看得到——别把业务状态变化依赖于消息是否被显示。
- **`IsAnyInquiryActive` 依赖可空委托。** 委托为 null 时返回 `false`，语义上「没有 inquiry」——但也可能是「UI 还没接上」。两者无法区分。
- **`GetIsAnyTooltipActiveAndExtended` 比 `GetIsAnyTooltipActive` 严格。** 「有但没展开」时前者为 false。做「玩家正在看 tooltip 就别弹别的」判断时用后者会误判。
- **tooltip 注册表无淘汰。** `_registeredTypes` 是静态字典，只在 `UnregisterTooltip` 时减少。mod 热重载或重复注册会留下无效条目（重注册同键是覆盖，不抛）。
- **`RegisterTooltip` 的 `OnRefreshData` 存为 `object`。** 从 `RegisteredTypes` 读出来必须自己转型成 `Action<TTooltip, object[]>`，强转失败就是 `InvalidCastException`。
- **`UnregisterTooltip` 找不到只打日志。** 「我以为注销了」不代表真的注销了，静态字典里可能还挂着旧条目。
- **`ShowInquiry` 的 `pauseGameActiveState: true` 会冻结活动状态。** 配合 [GameStateManager](../GameStateManager) 的 `RegisterActiveStateDisableRequest` 语义，忘记关窗口会让状态一直 `OnIdleTick`。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Library/InformationManager.cs` 逐行比对，**public 表面完全一致**：九个事件、两个可空委托字段、三个查询方法、八个转发方法、`RegisterTooltip` / `UnregisterTooltip` / `RegisteredTypes` / `Clear`、嵌套 `TooltipRegistry` 结构体与 `IsAnyTooltipActiveDelegate` 委托全都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/InformationManager.cs`（153 行）与 `bannerlord-1.4.6/TaleWorlds.Library/InformationManager.cs`（265 行）逐成员比对 public/protected 表面。**与 1.4.6 的 public/protected 表面 0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化**。嵌套结构体 `TooltipRegistry` 两边都有，**写法差异属反编译形态**：1.4.5 用 C# 12 主构造器写成一行，1.4.6 反编译成块体（第 240 行的结构体 + 内部构造器），语义相同。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 对端 UI：[ViewModel](../ViewModel) 是 inquiry / tooltip 内容侧的数据载体
- 冻结语义：[GameStateManager](../GameStateManager) 处理 `pauseGameActiveState` 带来的活动状态禁用
- 宿主：[Game](../Game) 决定当前是哪个屏幕在监听这些静态事件

- 上一级：[v1.4.6 内容根](../../../)

## 导航

- 同桶：[`../ViewModel`](../ViewModel) · [`../GameStateManager`](../GameStateManager) · [`../Game`](../Game)
- 父索引：[`../_index`](../_index)
