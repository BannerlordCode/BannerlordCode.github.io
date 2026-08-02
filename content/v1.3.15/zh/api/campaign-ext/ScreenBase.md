---
title: "ScreenBase"
description: "Bannerlord 屏幕系统的抽象基类：每个游戏界面（地图、菜单、对话、编辑器等）都是一个 ScreenBase，它持有一组 ScreenLayer、由 ScreenManager/引擎驱动生命周期并在每帧接收 OnFrameTick；现代 mod 自定义 UI 通常不在子类里画控件，而是在现有 ScreenBase 上加一层 GauntletLayer。"
---
# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem  
**Module:** TaleWorlds.ScreenSystem  
**Type:** `public abstract class ScreenBase`  
**Base:** `System.Object`  
**File:** `TaleWorlds.ScreenSystem/ScreenBase.cs`

## 概述

`ScreenBase` 是 Bannerlord **屏幕层（ScreenSystem）** 的抽象基类。一个「屏幕」对应游戏里一段完整的、独占输入与渲染的界面状态——战役地图界面、村庄菜单、商队对话、理发/旗纹编辑器、任务结算画面等，都是一个 `ScreenBase` 的子类。引擎每进入这样一种状态，就创建一个子类实例，`ScreenManager` 把它压入屏幕栈并驱动它的生命周期；屏幕自己不直接画像素，而是持有一叠 `ScreenLayer`，由层负责具体 UI 的布局与输入。

对 mod 开发者最关键的一点：**你几乎不需要自己继承 `ScreenBase`。** 自定义界面早已转向 Gauntlet（XML 电影 + `ViewModel` 数据绑定），而 Gauntlet 的载体是 `GauntletLayer`（`ScreenLayer` 的子类）。现代 mod 的典型做法是「拿到当前屏幕上层的 `ScreenBase`，往它上面 `AddLayer` 一个 `GauntletLayer`」，从而在不接管整个屏幕的前提下塞进自己的界面。

## 心智模型

把 `ScreenBase` 想成**「界面状态机 + 一层层 UI 的容器」**：

- **它不画 UI，它托管层。** 屏幕上能看到的东西来自 `Layers`（`MBReadOnlyList<ScreenLayer>`）。`GauntletLayer` 是其中最常用的一种（承载 Gauntlet 电影）。
- **生命周期由引擎/`ScreenManager` 驱动，不由你直接 `new`。** 你写子类时只覆写 `OnInitialize/OnActivate/OnFrameTick/OnDeactivate/OnFinalize` 等钩子；引擎通过 `HandleInitialize → OnInitialize` 这类 `internal` 包装按正确顺序调用它们。
- **帧循环只有激活时才跑。** `ScreenManager` 每帧对栈顶屏幕调用 `FrameTick(dt)`，而 `FrameTick` 内部只在 `IsActive == true` 时才调用 `OnFrameTick(dt)`。失活/暂停的屏幕不会 tick。
- **相对 `GauntletLayer` 的位置：** `ScreenBase`（容器）⊃ `ScreenLayer`（一层 UI）⊇ `GauntletLayer`（数据绑定的那一层）。`ViewModel` 是 `GauntletLayer` 的数据源，而不是屏幕直接持有。

生命周期顺序（真实调用链，来自 `ScreenBase.cs`）：

```
引擎 new 子类 → ScreenManager 压栈
  → HandleInitialize()  → OnInitialize()          // 一次性初始化
  → HandleActivate()    → OnActivate()            // 进入并接收输入（先激活既有层，再调本钩子）
  → 每帧 FrameTick(dt)  → OnFrameTick(dt)         // 仅当 IsActive
  → 每帧 PostFrameTick()→ OnPostFrameTick(dt)
  → HandleDeactivate()  → OnDeactivate()          // 离开（先停层，再调本钩子）
  → HandleFinalize()    → OnFinalize()            // 释放；随后逐层 HandleFinalize
```

**谁拥有它：** `ScreenManager.TopScreen` 是栈顶当前屏幕；`ScreenManager` 还维护整个屏幕栈，并负责 `HandleActivate/Deactivate/Pause/Resume/Finalize` 的调用时机。屏幕本身**不知道**自己被谁压栈，也不该主动 `new` 自己——它由游戏状态切换（如进入地图、打开菜单）触发创建。

## 何时用 / 何时不要用

**适合直接继承 `ScreenBase` 的场景：**
- 你要做一个**全新的、独占式的游戏界面状态**（例如一个完全自有的全屏小游戏或工具界面），并且愿意自己管理整叠层与输入。
- 你正在写引擎级/底层框架代码，需要新的游戏状态配套一个全新屏幕。

**不要继承 `ScreenBase` 的场景（典型 mod UI）：**
- 你只是想给现有界面（地图、物品栏、对话）**叠加一块自定义面板/菜单/HUD**。正确做法是拿到当前 `ScreenBase`，往它上面 `AddLayer` 一个 `GauntletLayer`，用 Gauntlet XML + `ViewModel` 描述界面。这样你不用接管生命周期、不用关心激活/暂停，卸载时 `RemoveLayer` 即可，且天然随原屏幕的进出而进出。
- 你只想要一行提示/确认框：优先用 `InformationManager`/内置 Gauntlet 组件，而非新建屏幕。

> 经验法则：**「加一层」优先于「建一个屏」。** 自定义 `ScreenBase` 是重量级选择，只有在没有现成屏幕可挂靠时才考虑。

## 依赖图

**上游（谁创建 / 驱动 / 包含它）：**
- [`ScreenManager`](../../gui/ScreenManager) — 拥有屏幕栈，驱动 `Handle*` 生命周期，并暴露 `ScreenManager.TopScreen` 作为获取当前屏幕的真实入口。
- [`ScreenLayer`](../ScreenLayer) — 屏幕持有的 UI 层基类；`AddLayer`/`RemoveLayer` 操作的就是它。
- [`GameStateManager`](../../core-extra/GameStateManager) — 管理游戏状态栈；引擎通常把「当前激活的游戏状态」与「栈顶 `ScreenBase`」配对，状态切换即触发屏幕的进出。

**下游（它承载 / 你通常往里塞的东西）：**
- [`GauntletLayer`](../../engine/GauntletLayer) — `ScreenLayer` 的子类，承载 Gauntlet 电影；mod 自定义 UI 的主入口。
- [`ViewModel`](../../core-extra/ViewModel) — Gauntlet 的数据绑定源，经 `GauntletLayer.LoadMovie(movieName, vm)` 注入，由层持有而不是屏幕直接持有。

## 风险与崩溃边界

- **`OnFrameTick` 不可阻塞、不可做重活。** 它在渲染帧循环里每帧调用一次，任何长耗时同步操作（磁盘 IO、反射扫描、大列表重建）都会拖垮帧率甚至被引擎判定卡死。把重活挪到后台线程或按需节流。
- **只在 `IsActive` 时才会 tick。** 不要在 `OnFrameTick` 里假设屏幕一定可见；暂停/失活的屏幕不会收到 tick。需要持续刷新的逻辑要自己处理激活态。
- **`Deactivate` 时必须反订阅 / 释放。** 覆写 `OnDeactivate`/`OnFinalize` 时，务必移除你在 `OnActivate`/`OnInitialize` 里订阅的事件、定时器和外部引用，否则残留引用会在屏幕销毁后继续触发回调，导致对 `IsFinalized` 对象的访问甚至崩溃。
- **Layer / ViewModel 的寿命要成对管理。** `AddLayer` 之后必须保证有对应的 `RemoveLayer`（通常在 `OnDeactivate` 或模块卸载时）；`RemoveLayer` 会 `HandleFinalize` 该层。忘记移除会泄漏层、导致输入被幽灵层拦截。`GauntletLayer` 及其 `ViewModel` 也随层一起销毁，别在外部长期持有已移除层的 `ViewModel` 引用。
- **`AddLayer(null)` 或已 `IsFinalized` 的层会触发 `Debug.FailedAssert`。** 不要在层已销毁后再加回；也不要把同一个层实例 `AddLayer` 两次（`_layers.Contains` 检查会 assert）。
- **不要在屏幕外手动驱动生命周期。** `HandleActivate/HandleDeactivate/HandleFinalize` 都是 `internal`，由引擎按正确顺序调用；子类只覆写 `On*` 钩子，不要自行调用它们来强行切换状态。

## 主要成员

### 生命周期钩子（覆写用）

这些 `protected virtual` 钩子由引擎经 `Handle*` 包装按序调用，子类按需覆写：

#### `protected virtual void OnInitialize()`
屏幕第一次被初始化时调用一次。在这里创建长期持有的层、组件和数据结构。**注意**：调用时 `IsActive` 仍为 `false`，不要假设已激活。之后直到 `OnFinalize` 前不再调用。

#### `protected virtual void OnActivate()`
屏幕成为栈顶、开始接收输入后调用。引擎会**先激活既有层、再调 `OnActivate`**。**典型用途**：订阅游戏事件、启动需要在屏幕上可见时运行的定时器、把预建的层 `AddLayer` 进来。

#### `protected virtual void OnDeactivate()`
屏幕被新屏幕压在下面或退出时调用（失活）。**典型用途**：反订阅 `OnActivate` 里订阅的事件、暂停屏幕相关逻辑。注意引擎会先停掉各层再调本钩子。

#### `protected virtual void OnFrameTick(float dt)`
每帧、且 `IsActive == true` 时调用，`dt` 是自上一帧的秒数。**限制**：必须轻量（见上方风险段）。

#### `protected virtual void OnPostFrameTick(float dt)`
`OnFrameTick` 之后每帧调用（同样仅当激活）。适合在 UI 已更新后做收尾同步。

#### `protected virtual void OnResume()` / `protected virtual void OnPause()`
屏幕从暂停恢复 / 被暂停时调用（例如窗口失去焦点期间引擎暂停游戏）。适合暂停/恢复与游戏世界相关的逻辑。

#### `protected virtual void OnFinalize()`
屏幕从栈中彻底移除、销毁前调用。负责释放 `OnInitialize` 申请的资源、断开所有引用。引擎随后会逐层调用 `HandleFinalize`。

#### `public virtual void OnFocusChangeOnGameWindow(bool focusGained)`
游戏窗口获得/失去焦点时回调，可用于暂停输入或显示「点击继续」。

### 层管理（直接调用）

#### `public void AddLayer(ScreenLayer layer)`
把一层 UI 加到屏幕。屏幕激活时该层会立刻 `HandleActivate`；屏幕未激活则入栈待激活。**副作用**：若 `layer` 为 `null` 或已 `IsFinalized`，触发 `Debug.FailedAssert`；重复添加同样 assert；添加后触发 `OnAddLayer` 事件。

```csharp
ScreenBase screen = ScreenManager.TopScreen;
GauntletLayer layer = new GauntletLayer("MyModLayer", 100);
screen.AddLayer(layer);   // 直接传 GauntletLayer，因为它本就是 ScreenLayer
```

#### `public void RemoveLayer(ScreenLayer layer)`
移除并 `HandleFinalize` 该层，然后调用 `ScreenManager.RefreshGlobalOrder()` 重排全局层级。**必须在用完层后调用**，否则层会一直拦截输入。

#### `public bool HasLayer(ScreenLayer layer)`
判断某层是否已在屏幕中。

#### `public T FindLayer<T>()` / `public T FindLayer<T>(string name)`
按类型或名称在现有层中查找，找不到返回 `null`（值类型返回 `default`）。

#### `public MBReadOnlyList<ScreenLayer> Layers`
当前屏幕持有的所有层（只读视图）。可以遍历，但不要从外部直接增删，改用 `AddLayer`/`RemoveLayer`。

#### `public void ActivateAllLayers()` / `public void DeactivateAllLayers()`
批量激活/停用当前所有层（不改变屏幕自身的激活态）。

#### `public void Activate()` / `public void Deactivate()`
手动切换屏幕自身激活态的公开包装（引擎内部用 `HandleActivate`/`HandleDeactivate`）。一般 mod 代码无需调用。

### 状态标志

| 属性 | 含义 |
|------|------|
| `IsActive` | 屏幕是否处于激活、正在 tick 与接收输入。 |
| `IsPaused` | 是否被暂停（`OnPause` 后为真）。 |
| `IsInitialized` | 是否已走完 `OnInitialize`。 |
| `IsFinalized` | 是否已销毁（销毁后不要再碰它）。 |
| `MouseVisible` | 鼠标指针是否显示（可覆写）。 |
| `DebugInput` | 转发到 `Input.DebugInput` 的调试输入上下文。 |

## 最小真实示例

### 示例 1：拿到当前屏幕并叠加一个 Gauntlet UI 层（最常见 mod 模式）

```csharp
// 1) 真实获取：当前栈顶屏幕由 ScreenManager 暴露
ScreenBase screen = ScreenManager.TopScreen;
if (screen == null)
{
    return; // 没有活动屏幕（例如正在加载）
}

// 2) 建一个 Gauntlet 层（name + 渲染顺序 localOrder；shouldClear 默认 false）
GauntletLayer gauntletLayer = new GauntletLayer("MyModOverlay", 100);

// 3) 准备数据并加载电影（XML prefab 名 + ViewModel）
MyViewModel vm = new MyViewModel();
gauntletLayer.LoadMovie("MyModOverlay", vm);

// 4) 加到当前屏幕——它随屏幕激活/失活自动开关
screen.AddLayer(gauntletLayer);

// 5) 卸载时务必成对移除（通常在行为/模块的 Dispose 或 OnDeactivate 里调用）
screen.RemoveLayer(gauntletLayer);
```

要点：`ScreenManager.TopScreen` 是源码中真实可用的入口（如官方 `DCSHelperVM` 即用它 `AddLayer`）；`GauntletLayer` 继承自 `ScreenLayer`，所以可直接传入 `AddLayer`。

### 示例 2：在自己的 ScreenBase 子类里管理一层

```csharp
public class MyModScreen : ScreenBase
{
    private GauntletLayer _layer;
    private MyViewModel _vm;

    protected override void OnInitialize()
    {
        _vm = new MyViewModel();
        _layer = new GauntletLayer("MyModScreenLayer", 100);
        _layer.LoadMovie("MyModScreen", _vm);
    }

    protected override void OnActivate()
    {
        // 屏幕激活后再加层，确保随屏幕一起可见
        AddLayer(_layer);
    }

    protected override void OnDeactivate()
    {
        // 离开时移除，避免幽灵层拦截输入
        RemoveLayer(_layer);
    }

    protected override void OnFinalize()
    {
        _layer = null;
        _vm = null;
    }
}
```

## 跨版本提示

- **v1.3.15（本页）：** 生命周期钩子为 `OnInitialize` / `OnFinalize` / `OnPause` / `OnResume` / `OnActivate` / `OnDeactivate` / `OnFrameTick` / `OnPostFrameTick` / `OnIdleTick`；`FrameTick` 内部只在 `IsActive` 时调用 `OnFrameTick`。获取当前屏幕用 `ScreenManager.TopScreen`。
- **v1.4.5：** 在 1.3.15 基础上新增了 `OnReady()`（屏幕激活后第一个 `FrameTick` 时触发一次，用于「屏幕已就绪」的初始化），并补充了 `MouseVisible` 等少量细节；其余 API 与 1.3.15 一致。写跨版本 mod 时，依赖 `OnReady` 的逻辑需做版本判断。

## 导航

- ↑ 父级：[战役扩展 API 索引](../)
- ↔ 同级：[ScreenManager](../../gui/ScreenManager)、[ScreenLayer](../ScreenLayer)
- 相关：[GauntletLayer](../../engine/GauntletLayer)、[ViewModel](../../core-extra/ViewModel)、[GameStateManager](../../core-extra/GameStateManager)
