---
title: "ScreenManager"
description: "Bannerlord 界面（GUI）层的静态门面：持有屏幕栈、管理当前活动屏（TopScreen）与全局层，并把引擎每帧的 Tick/LateTick/Update 转发给活动屏与其 ScreenLayer。"
---
# ScreenManager

**Namespace:** TaleWorlds.ScreenSystem  
**Module:** TaleWorlds.ScreenSystem  
**Type:** `public static class ScreenManager`  
**Base:** 无（静态类，无基类）  
**File:** `TaleWorlds.ScreenSystem/ScreenManager.cs`

> 注意：本页描述的是 **可手写文档**。它来自对 `TaleWorlds.ScreenSystem/ScreenManager.cs`（1.3.15 / 1.4.5 同源）与 `TaleWorlds.Engine/EngineScreenManager.cs`、`ScreenManagerEngineConnection.cs` 的真实阅读，不是签名生成页。

## 概述

`ScreenManager` 是 Bannerlord 界面系统的**静态门面（facade）**，也是 mod 接触屏幕/界面层的唯一公开入口。它维护一个 `ObservableCollection<ScreenBase>` 屏幕栈（`_screenList`），并从中选出**最顶端、最后加入的屏**作为「当前屏」`TopScreen`。每一帧，引擎通过 `EngineScreenManager` 的 `[EngineCallback]` 回调把 `Tick` / `LateTick` / `EarlyUpdate` / `Update` 转发进来，`ScreenManager` 再把它们派发给 `TopScreen` 及其 `ScreenLayer`（以及所有 `GlobalLayer`）。

对 mod 来说，绝大多数界面需求都归结为两件事：**压入/弹出自己的 `ScreenBase`**，或**在当前的 `TopScreen` 上加一个 `GauntletLayer`** 来承载 Gauntlet UI。`ScreenManager` 就是做这两件事的地方——你通常**不应该**直接去碰 `EngineScreenManager` 或自己构造 `ScreenManagerEngineConnection`。

## 心智模型

把 `ScreenManager` 理解为**「屏幕栈 + 当前屏 + 输入/渲染派发」的总调度器**：

- **屏幕 = 游戏状态单元。** Bannerlord 里没有独立的 `GameStateManager` 层；一个 `ScreenBase`（如主菜单屏、战役地图屏、对话屏）本身就是一段界面/游戏状态。入栈一个屏（`PushScreen`）等于进入该状态，出栈（`PopScreen`）等于回到上一个状态。栈里的屏按加入顺序从上到下排列，`TopScreen` 永远是「正在交互的那一个」。
- **谁创建、谁持有它。** `ScreenManager` 是静态类，没有实例，由引擎在启动时通过 `Initialize(IScreenManagerEngineConnection)` 注入底层连接后一直存活。屏幕栈 `_screenList` 由它私有持有，mod 只能透过 `PushScreen` / `PopScreen` / `TopScreen` 等公开面与之交互。
- **活动屏如何被选中。** 每当 `_screenList` 变化（`CollectionChanged`），`ScreenManager` 取列表中**最后一个**元素作为 `TopScreen`，并把 `TopScreen` 的 `OnAddLayer` / `OnRemoveLayer` 事件挂上，以便 `SortedLayers` 反映当前屏的层集合。换句话说：你压入的屏自动成为 `TopScreen`，无需手动指定。
- **每帧心跳来自引擎，不来自你。** 引擎侧的 `EngineScreenManager.Tick` → `ScreenManager.Tick(dt)` → `TopScreen.FrameTick` + 各 `ScreenLayer.Tick/RenderTick`。mod 一般**不要**手动调用 `Tick` / `LateTick` / `Update` / `EarlyUpdate`，这些由引擎驱动；你只负责在屏的生命周期钩子里（`OnInitialize` / `OnTick` / `OnFrameTick` 等）写逻辑。
- **全局层与屏层并存。** 除屏幕栈外，还有一个 `GlobalLayer` 集合（如游戏内常驻的提示层、调试层）。它们在所有屏幕之上独立 Tick，与 `TopScreen.Layers` 一起参与 `SortedLayers` 的排序与输入命中测试。

## 何时用 / 何时不要用

**使用 `ScreenManager` 的场景：**

- 需要进入一段全新的界面状态：自己写一个 `ScreenBase` 子类，然后 `ScreenManager.PushScreen(new MyScreen())`。
- 需要在**当前已存在的屏**上叠加一个 Gauntlet UI（最常见）：拿到 `ScreenManager.TopScreen`，向它 `AddLayer(gauntletLayer)`。
- 想读取/判断当前活动屏：`ScreenManager.TopScreen`。
- 需要常驻于所有屏之上的 UI：用 `ScreenManager.AddGlobalLayer(globalLayer, isFocusable)`。
- 想在屏切换时收到通知：订阅 `ScreenManager.OnPushScreen` / `ScreenManager.OnPopScreen` 事件。

**不要使用 `ScreenManager` 的场景（以及正确替代）：**

- **不要**手动调用 `Tick` / `LateTick` / `Update` / `EarlyUpdate`——它们由引擎每帧驱动，手动调用会破坏帧节奏甚至崩溃。
- **不要**自己去 `new` 或持有 `EngineScreenManager` / `ScreenManagerEngineConnection`——它们是引擎内部/底层连接（`EngineScreenManager` 是 `internal`，`ScreenManagerEngineConnection` 由引擎在 `EngineScreenManager.Initialize()` 中构造并注入）。mod 永远走 `ScreenManager` 这层静态 API。
- **不要**以为有 `AddScreen` / `RemoveScreen` / `CurrentScreen`——源码里**没有**这些名字。入栈是 `PushScreen` / `CleanAndPushScreen`，出栈是 `PopScreen` / `CleanScreens`，当前屏是 **`TopScreen`**（不是 `Current` / `CurrentScreen`）。
- **不要**从非 UI 线程切换屏幕：`PushScreen` / `PopScreen` / `CleanScreens` / `CleanAndPushScreen` 在 1.4.5 中有主线程 `FailedAssert` 守卫；即使在 1.3.15 没有断言，它们也**只能在主线程（UI 线程）调用**，否则会因访问 `_screenList` 与层状态而导致崩溃或状态错乱。

## 与 EngineScreenManager / ScreenManagerEngineConnection 的区别

这三者名字相近，但职责完全不同，mod 只该碰第一个：

| 类型 | 命名空间 / 程序集 | 可见性 | 角色 |
|------|------------------|--------|------|
| `ScreenManager` | `TaleWorlds.ScreenSystem` | `public static` | **你用的门面**：持有屏幕栈、全局层、当前屏，提供 `PushScreen` / `PopScreen` / `TopScreen` 等。 |
| `EngineScreenManager` | `TaleWorlds.Engine` | `internal` | **引擎桥**：带 `[EngineCallback]` 标记，接收原生引擎每帧回调并转发给 `ScreenManager.Tick/LateTick/EarlyUpdate/Update`，以及在启动时 `ScreenManager.Initialize(new ScreenManagerEngineConnection())`。mod 不可见、不可调用。 |
| `ScreenManagerEngineConnection`（实现 `IScreenManagerEngineConnection`） | `TaleWorlds.Engine` / 接口在 `TaleWorlds.ScreenSystem` | `public class` / `public interface` | **底层连接实现**：把 `ScreenManager` 对鼠标光标、分辨率、调试面板（Imgui）的请求翻译成原生 `Screen` / `MouseManager` / `Imgui` 调用。由引擎注入，mod 不构造。 |

一句话：`ScreenManager` 是「你能调用的调度器」，`EngineScreenManager` 是「引擎驱动它的桥」，而 `ScreenManagerEngineConnection` 是「它通往原生渲染后端的插头」。

## 依赖图

- **上游（创建 / 驱动 / 注入）：**
  - [EngineScreenManager](../engine/EngineScreenManager/) — 引擎每帧回调进入 `ScreenManager` 的入口（`internal`，mod 不直接用）。
  - `IScreenManagerEngineConnection` / `ScreenManagerEngineConnection`（位于 [EngineScreenManager](../engine/EngineScreenManager/) 同体系）——被 `Initialize(...)` 注入，提供光标/分辨率/调试面板后端。
  - [ScreenBase](../campaign-ext/ScreenBase/) —— 被压入栈的单元；`ScreenManager` 持有并驱动它。
- **下游（被它驱动 / 由你在其上叠加）：**
  - [ScreenLayer](../campaign-ext/ScreenLayer/) —— 屏与全局层中的可输入/可渲染层，`SortedLayers` 由它们构成。
  - [GauntletLayer](../engine/GauntletLayer/) —— 承载 Gauntlet UI（XAML + ViewModel）的具体 `ScreenLayer`，通常通过 `TopScreen.AddLayer(...)` 叠加。
  - [ViewModel](../core-extra/ViewModel/) —— Gauntlet UI 的数据绑定源，挂在某块 `GauntletLayer` 上。

## 成员说明

下面按主题分组列出 mod 最常用、且从源码逐条确认过的成员。每个都给出**用途 + 副作用 + 调用时机**。源码中没有的 `AddScreen` / `RemoveScreen` / `CurrentScreen` 一律不存在，请勿使用。

### 栈管理（入栈 / 出栈 / 清屏）

#### `public static void PushScreen(ScreenBase screen)`

把 `screen` 压入屏幕栈，使其成为新的 `TopScreen`。

- **副作用**：先把旧 `TopScreen` 置为暂停（`HandlePause`）并在仍激活时 `HandleDeactivate`；然后对新屏依次调用 `HandleInitialize` → `HandleActivate` → `HandleResume`；触发 `OnPushScreen` 事件；标记全局层顺序脏（`_globalOrderDirty`）。
- **调用时机**：需要进入一段新界面状态时。例如从主菜单进入战役地图、打开一个全屏自定义面板。等价于「进入新游戏状态」。**只能在主线程调用。**
- **要点**：旧屏只是被暂停/隐藏，仍在栈中；之后调用 `PopScreen()` 即可返回它。

```csharp
// 进入一段自定义全屏界面状态
ScreenManager.PushScreen(new RecruitmentScreen());
```

#### `public static void PopScreen()`

把当前 `TopScreen` 从栈顶弹出，回到上一个屏。

- **副作用**：对旧 `TopScreen` 依次 `HandlePause` → `HandleDeactivate` → `HandleFinalize`（**会销毁该屏及其层**），触发 `OnPopScreen`；若栈中还有屏，则重新 `HandleActivate` 上一个屏（若它仍是同一个实例再 `HandleResume`）。
- **调用时机**：你之前 `PushScreen` 进入的屏要退出时。**只能弹你自己压入的屏**——不要去弹出你没压入的系统屏，否则会破坏引擎预期的屏序列并可能让上一个屏状态错乱或崩溃。
- **风险**：`HandleFinalize` 会释放该屏持有的层与资源；若该屏上还挂着你的 `GauntletLayer`，它也会一并被销毁。

```csharp
// 关闭当前自定义屏，回到上一个屏
ScreenManager.PopScreen();
```

#### `public static void CleanScreens()`

**清空整个屏幕栈**：循环对每一个 `TopScreen` 执行 `HandlePause` → `HandleDeactivate` → `HandleFinalize` 并触发 `OnPopScreen`，直到栈空。

- **副作用**：销毁所有屏。通常只在退出到主菜单、硬切换游戏状态时由引擎/系统调用。
- **调用时机**：mod 一般**不要**调用它，除非你明确要丢弃全部界面状态（例如强制回到主菜单）。误用会干掉引擎自身的屏，导致黑屏或崩溃。

#### `public static void CleanAndPushScreen(ScreenBase screen)`

先 `DeactivateAndFinalizeAllScreens()` 清掉全部现有屏，再把 `screen` 作为唯一屏压入（同样走 `HandleInitialize` → `HandleActivate` → `HandleResume` 并触发 `OnPushScreen`）。

- **副作用**：等价于「`CleanScreens()` + `PushScreen(screen)`」，但只触发一次 `OnPushScreen`。
- **调用时机**：需要彻底替换当前界面上下文（而非叠加）时，例如从战役地图直接进入某个独立模块的全屏 UI。会丢弃栈中所有已有屏，谨慎使用。

```csharp
// 彻底替换当前界面上下文，只保留新屏
ScreenManager.CleanAndPushScreen(new ArenaScreen());
```

#### `public static void ReplaceTopScreen(ScreenBase screen)`

仅当栈非空时：把当前 `TopScreen` 暂停/停用/销毁，再把 `screen` 作为新的 `TopScreen` 激活。

- **副作用**：与 `PopScreen` + `PushScreen` 类似，但**不保留**被替换掉的旧屏（直接 `HandleFinalize`）。若栈为空则直接把 `screen` 当作根屏加入。
- **调用时机**：用新屏**原地替换**当前屏（而非返回上一个屏）时。

#### `public static void SetAndActivateRootScreen(ScreenBase screen)`

把 `screen` 作为**根屏**（栈中第一个屏）激活。

- **副作用**：若 `TopScreen` 不为 `null` 会直接 `throw new Exception("TopScreen is not null.")`。成功则 `HandleInitialize` → `HandleActivate` → `HandleResume` 并触发 `OnPushScreen`。
- **调用时机**：引擎在游戏启动、从启动屏进入第一个真实界面时使用。mod 几乎不需要调用；若误在已有屏时调用会抛异常。

#### `public static bool ScreenTypeExistsAtList(ScreenBase screen)`

检查屏幕栈中是否已有**与 `screen` 同 `Type`** 的屏存在。

- **用途**：避免重复压入同一类型的屏（例如防止多次打开同一个面板）。
- **调用时机**：`PushScreen` 之前做去重判断。

```csharp
if (!ScreenManager.ScreenTypeExistsAtList(myScreen))
{
    ScreenManager.PushScreen(myScreen);
}
```

### 当前屏与全局层

#### `public static ScreenBase TopScreen { get; }`

**当前活动屏**——即屏幕栈中最后一个元素。这是源码里「当前屏」的真实名字（**不是** `Current` / `CurrentScreen`）。

- **用途**：拿到当前屏以在其上叠加层（最常见用法），或判断当前处于哪个界面状态。
- **注意**：`get` 是 `private set`，你**不能**赋值；只能通过 `PushScreen` / `PopScreen` 等改变它。没有活动屏时返回 `null`。

```csharp
// 在当前活动屏上叠加一个 Gauntlet UI 层（最常见的 UI 注入方式）
GauntletLayer layer = new GauntletLayer(0);
layer.LoadMovie("MyWidget", myViewModel);
ScreenManager.TopScreen.AddLayer(layer);
```

#### `public static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)`

把一个 `GlobalLayer` 加入全局层集合（常驻于所有屏之上）。

- **副作用**：按 `layer.Layer.InputRestrictions.Order` 插入到合适位置，调用 `layer.Layer.HandleActivate()`，标记全局顺序脏。
- **调用时机**：需要跨屏常驻的 UI（如全局输入提示、常驻小地图、调试浮层）时。不要用于只属于某个屏的 UI——那种应加到具体 `ScreenBase` 上。

#### `public static void RemoveGlobalLayer(GlobalLayer layer)`

从全局层集合移除一个 `GlobalLayer`，并 `HandleDeactivate()` 它。

- **调用时机**：你之前 `AddGlobalLayer` 加入的层要销毁时。只移除你自己的层。

### 输入路由与焦点

#### `public static void TrySetFocus(ScreenLayer layer)`

尝试把输入焦点交给 `layer`。仅当 `layer` 是焦点层或命中焦点测试、且当前 `FocusedLayer` 的 `InputRestrictions.Order` 不高于它时生效。

- **调用时机**：你的层需要抢输入焦点时（如打开模态对话框）。

#### `public static void TryLoseFocus(ScreenLayer layer)`

若 `layer` 是 `FocusedLayer`，释放焦点并尝试把焦点交还给排序最高、仍激活的 `IsFocusLayer` 层；找不到则 `FocusedLayer = null`。

#### `public static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)`

从最上层向下做命中测试，判断在 `position` 处 `layer` 是否被某个更靠上、且消费鼠标按键/滚轮的层挡住。

- **用途**：决定某次点击/滚轮是否应穿透到你的层。

#### `public static bool GetMouseVisibility()` / `IsControllerActive()` / `IsMouseCursorActive()` / `IsMouseCursorHidden()`

查询当前输入设备与鼠标光标可见性状态。常用于根据当前屏决定 UI 是否显示虚拟光标。

### 引擎心跳与生命周期

这些成员由引擎每帧调用，**mod 通常不应手动调用**；这里说明它们做什么、谁在驱动。

#### `public static void Initialize(IScreenManagerEngineConnection engineInterface)`

注入底层引擎连接。引擎在 `EngineScreenManager.Initialize()` 里调用 `ScreenManager.Initialize(new ScreenManagerEngineConnection())`，mod 不调用。

#### `public static void Tick(float dt)`

一帧的主体更新：先 Tick 所有 `GlobalLayer.EarlyTick`，再 `Update()`，然后 `TopScreen.FrameTick` + 上一个屏（前驱）的 `IdleTick`，逐层 `ScreenLayer.Tick`，`LateUpdate`，全局层 `Tick` / `LateTick`，`TopScreen.PostFrameTick`，最后绘制调试信息。由 `EngineScreenManager.Tick` 驱动。

#### `public static void LateTick(float dt)`

渲染阶段：`SortedLayers` 中激活且未 finalize 的层 `RenderTick(dt)`。由 `EngineScreenManager.LateTick` 驱动。

#### `public static void Update(IReadOnlyList<int> lastKeysPressed)`

把本帧按键派发给 `TopScreen.Update` 与各激活全局层。由 `EngineScreenManager.Update` 驱动。

#### `public static void EarlyUpdate(Vec2 usableArea)`

设置可用区域、刷新全局层顺序、做命中测试与输入事件预派发（`EarlyProcessEvents`）。由 `EngineScreenManager.PreTick` 驱动。

#### `public static void OnFinalize()`

反注册所有集合/层事件并清空屏幕栈与全局层，释放 `FocusedLayer`。游戏关闭时由引擎调用。

#### `public static void OnGameWindowFocusChange(bool focusGained)`

窗口获得/失去焦点时由引擎回调：更新 `_isWindowFocused`、通知 `TopScreen.OnFocusChangeOnGameWindow`、获得焦点时触发 `FocusGained` 事件、重置焦点层按键。

#### `public static void OnConstrainStateChanged(bool isConstrained)`

系统约束状态变化（如 ALT+TAB 锁屏）时回调，等价于 `OnGameWindowFocusChange(!isConstrained)`。

### 事件

#### `public static event OnPushScreenEvent OnPushScreen`

每次有屏被压入（成为 `TopScreen`）后触发，参数为该屏。适合做「屏切换后」的初始化或统计。

#### `public static event OnPopScreenEvent OnPopScreen`

每次有屏被弹出（finalize 前）时触发，参数为被弹出的屏。适合清理你挂在该屏上的层/资源。

```csharp
// 监听屏切换，清理自己叠加的层
ScreenManager.OnPopScreen += screen =>
{
    foreach (ScreenLayer layer in screen.Layers)
    {
        if (layer is GauntletLayer gauntlet && gauntlet.MovieName == "MyWidget")
        {
            // 资源已随屏销毁，这里仅做日志/统计
        }
    }
};
```

## 风险段

- **只能在主线程（UI 线程）切换屏幕。** `PushScreen` / `PopScreen` / `CleanScreens` / `CleanAndPushScreen` 在 1.4.5 带 `TWParallel.IsMainThread()` 的 `FailedAssert`；1.3.15 虽无断言，但同样非线程安全。从后台线程（如网络回调、异步任务）调用会破坏 `_screenList` 与层状态并崩溃。一律用引擎已处在 UI 线程的时机（屏生命周期钩子、`OnTick`、事件回调）来切换。
- **不要弹出你没压入的屏。** `PopScreen()` 总是销毁**当前** `TopScreen`。如果你只压了一个自定义屏，却误调两次 `PopScreen`，第二次会销毁系统屏（如战役地图屏），导致返回到错误状态甚至黑屏。配对原则：自己 `PushScreen` 的，自己 `PopScreen`。
- **屏切换会连带销毁其上的层与 ViewModel。** `PopScreen` / `CleanScreens` / `ReplaceTopScreen` 都会 `HandleFinalize` 当前屏，挂在它上面的 `GauntletLayer` 与对应 `ViewModel` 一并释放。若你在屏上叠加了 `GauntletLayer`，不要在屏销毁后还持有其 `ViewModel` 的引用去更新——那会访问已释放对象。
- **不要把 `Tick` / `LateTick` / `Update` / `EarlyUpdate` 当普通方法调。** 它们是引擎每帧驱动的心跳，手动调用会打乱帧顺序、双重 Tick 层，造成输入/渲染异常。你的逻辑应写在屏或层的 `OnTick` / `OnFrameTick` / `OnLateTick` 等钩子里。
- **`TopScreen` 可能为 `null`。** 在没有任何活动屏时（理论上仅在启动/关闭瞬间）访问 `ScreenManager.TopScreen` 会得到 `null`，直接 `TopScreen.AddLayer(...)` 会空引用。叠加层前先判空，或确认当前确实处于某个屏内。
- **全局层顺序由 `InputRestrictions.Order` 决定。** `AddGlobalLayer` 按 order 插入；order 设置不当会导致你的全局层被其他层挡住输入或永远拿不到焦点。

## 最小真实示例

### 示例 1：在当前屏上叠加一个 Gauntlet UI 层（最常见的 UI 注入）

```csharp
// 假设 myViewModel 是某个 ViewModel 实例（见 [ViewModel](../core-extra/ViewModel/)）
GauntletLayer gauntletLayer = new GauntletLayer(0, "GauntletUI", false);
gauntletLayer.LoadMovie("MyPanel", myViewModel);

// 真实「当前屏」是 TopScreen，不是 Current / CurrentScreen
ScreenBase current = ScreenManager.TopScreen;
if (current != null)
{
    current.AddLayer(gauntletLayer);
}
```

### 示例 2：压入一个自定义全屏 ScreenBase，并在退出时返回

```csharp
// RecruitmentScreen 是你写的 ScreenBase 子类
ScreenManager.PushScreen(new RecruitmentScreen());

// 在 RecruitmentScreen 内部决定退出时：
// 只弹你自己压入的屏，回到上一个屏
ScreenManager.PopScreen();
```

## 导航

- ↑ 上级：[gui 目录](./_index.md) · [API 参考](../)
- ↔ 同级 / 相关：
  - [ScreenBase](../campaign-ext/ScreenBase/) — 被压入栈的屏幕/游戏状态单元
  - [ScreenLayer](../campaign-ext/ScreenLayer/) — 屏与全局层中的可输入/可渲染层
  - [EngineScreenManager](../engine/EngineScreenManager/) — 引擎桥（含 `ScreenManagerEngineConnection` 底层连接），mod 不直接用
  - [GauntletLayer](../engine/GauntletLayer/) — 承载 Gauntlet UI 的 `ScreenLayer`
  - [ViewModel](../core-extra/ViewModel/) — Gauntlet UI 的数据绑定源
- 跨版本：核心屏幕栈 API 在 1.3.15 与 1.4.5 形状一致；1.4.5 额外为 `PushScreen` / `PopScreen` / `CleanScreens` / `CleanAndPushScreen` 增加了主线程 `FailedAssert` 守卫（1.3.15 无断言但同样是主线程专用）。1.4.5 移除了 1.3.15 公开过的 `IsWindowFocused` 属性。
