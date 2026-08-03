---
title: "GauntletLayer"
description: "GauntletUI 的宿主层：把一个绑定了 ViewModel 的 XAML 电影（movie）渲染成可交互 UI，挂到当前 ScreenBase/ScreenManager 上参与输入命中、聚焦与绘制——这是 Bannerlord 模组显示自定义面板与 HUD 的主要机制。"
---
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI  
**Module:** TaleWorlds.Engine  
**Type:** `public class GauntletLayer : ScreenLayer`  
**Base:** `ScreenLayer`  
**File:** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## 概述

`GauntletLayer` 是 `ScreenLayer` 的子类，也是整个 **GauntletUI** 系统接入游戏的桥梁。它内部持有一个 `UIContext`，负责：

- 通过 `UIResourceManager` 提供的 `WidgetFactory` / `SpriteData` / `FontFactory` / `BrushFactory` 把一份 **电影（movie，即 XAML/Widget 模板）** 实例化为真正的控件树（`Widget`）；
- 把这份电影绑定到一个 **ViewModel（即 XAML 的 `DataContext`）**，让控件属性随 VM 的属性变化更新；
- 把自己交给某个 `ScreenBase` 的图层栈，由 `ScreenManager` 在每一帧驱动命中测试、聚焦、输入与绘制。

一句话：**没有 `GauntletLayer`，就没有任何用 GauntletUI 写的模组界面。** 据点面板、任务 HUD、设置窗口、物品栏替换……背后都是这个类型。

## 心智模型

把三层东西叠在一起理解：

```
ScreenBase (当前屏幕，挂在 ScreenManager 栈顶)
   └── GauntletLayer  ← 你 new 出来的层，add 到 ScreenBase 上
         └── UIContext (内部) 驱动每帧 Tick / Render
               └── GauntletMovie (由 LoadMovie 实例化)
                     ├── RootWidget (控件树，来自 XAML 模板)
                     └── DataSource (ViewModel，即 DataContext)
```

- **电影（movie）** 是一份 UI 模板（GUI prefab 里注册的那个名字，例如 `"Clan"`、`"Inventory"`），由 `UIResourceManager` 按名字查找。它只描述“界面长什么样”。
- **ViewModel** 描述“界面显示什么数据、能做什么动作”。`LoadMovie` 把两者绑在一起：模板里 `{Binding Path=...}` 的取值来源就是你传进去的 `ViewModel`。
- **GauntletLayer** 把绑定好的电影放进一个 `UIContext`，再作为一个 `ScreenLayer` 加入 `ScreenBase`。之后每一帧引擎会调用层的 `Tick` / `RenderTick` / `ProcessEvents`，让控件树随 VM 更新、响应鼠标键盘、画到屏幕上。

### 生命周期

1. `new GauntletLayer(name, localOrder, shouldClear)` —— 构造即创建内部 `TwoDimensionView` 与 `UIContext`，此时**还没有任何 UI**。
2. `LoadMovie(movieName, dataSource)` —— 实例化电影、建立 `DataSource → RootWidget` 的绑定，电影进入 `_movieIdentifiers` 列表，开始随层更新。
3. `screenBase.AddLayer(layer)` —— 层进入屏幕图层栈，引擎开始对其每帧驱动（`OnActivate` → `Tick`/`RenderTick`/`ProcessEvents` → `LateUpdate`）。
4. 运行期：VM 属性变化通过 `INotifyPropertyChanged` 推送；玩家与控件交互通过 `DataSource` 上的命令/事件回到你的代码。
5. `ReleaseMovie(id)` —— 释放电影、解绑 `DataSource`、销毁控件树。
6. `screenBase.RemoveLayer(layer)` —— 层离开屏幕栈；屏幕关闭时 `OnFinalize` 会清理 `UIContext`。

> 注意：`GauntletLayer` **没有** `layer.DataSource` 这样的属性。DataContext 是在 `LoadMovie` 时连同电影一起绑定的，并保存在返回的 `GauntletMovieIdentifier.DataSource` 上（见 [GauntletMovieIdentifier](.././GauntletMovieIdentifier)）。这也意味着“换数据”要么改同一个 VM 的属性，要么 `ReleaseMovie` 后 `LoadMovie` 一份新的。

## 何时用 / 何时不要用

**用 `GauntletLayer` 当：**
- 你要给游戏加任何自定义可视化界面：信息面板、物品栏/商队增强、战斗 HUD、设置页、弹出对话框。
- 你希望用 XAML 描述布局、用 `ViewModel` 驱动数据（这是官方推荐的、可维护的 UI 写法）。

**不要用 `GauntletLayer` 当：**
- 你只想在屏幕上画几行调试文本或简单图元 —— 直接继承 `ScreenLayer` 重写 `RenderTick` / 用 `ScreenManager.EngineInterface` 即可，不必引入整条 GauntletUI 管线。
- 你**不准备提供 ViewModel / DataContext**：GauntletUI 的数据绑定强依赖 `ViewModel`。没有 VM，要么用纯静态 XAML（无数据），要么干脆别用 Gauntlet 层。
- 你在屏幕之外“裸奔”地使用它：`GauntletLayer` 必须挂在一个 **`ScreenBase`** 上（直接或间接经由 `ScreenManager.TopScreen`）。没有宿主屏幕，`Tick`/`RenderTick` 不会被驱动，UI 永远不会出现，且 `UIContext` 不会被激活。

## 依赖图

```
上游（谁创建 / 提供资源 / 负责宿主）        本层                     下游（被本层驱动）
─────────────────────────────────────      ┌──────────────┐      ─────────────────────────────
ScreenManager (TopScreen) ── 提供当前屏幕 ─►│              │─ 驱动 ─► Widget 树 / 属性绑定（GauntletUI）
ScreenBase (AddLayer/RemoveLayer) ─ 宿主 ──►│ GauntletLayer │      GauntletMovie（由 LoadMovie 实例化）
UIResourceManager ── WidgetFactory/Sprite ─►│              │─ 持有 ─► GauntletMovieIdentifier
ViewModel (DataContext) ── 经 LoadMovie ───►│              │      （Movie + DataSource）
```

- 上游：[ScreenBase](../../campaign-ext/ScreenBase)（图层宿主，`AddLayer`/`RemoveLayer`）、[ScreenManager](../../gui/ScreenManager)（屏幕栈，`TopScreen` 即“当前屏幕”）、[UIResourceManager](.././UIResourceManager)（注册的电影模板与控件工厂）、[ViewModel](../../core-extra/ViewModel)（DataContext 来源）。
- 下游：[GauntletMovieIdentifier](.././GauntletMovieIdentifier)（`LoadMovie` 的返回值，封装了 `Movie` 与 `DataSource`）；更下层的 `Widget` 属性绑定属于 GauntletUI 运行时，由 `UIContext` 直接驱动。

## 风险（崩溃 / 内存泄漏 / 输入异常）

> 这一段是写 `GauntletLayer` 最容易翻车的地方，**务必在拆除 UI 时严格按顺序执行**。

1. **必须先 `ReleaseMovie` 再 `RemoveLayer`，否则触发断言/崩溃。** 源码 `OnFinalize` 中有 `Debug.FailedAssert("Movie was not released before finalizing layer: ...")`：如果屏幕关闭时电影还挂在层上，游戏会断言失败。固定顺序：**`ReleaseMovie(id)` → `RemoveLayer(layer)` → 置空引用**。
2. **ViewModel 事件泄漏 = 幽灵 UI / 内存泄漏（最常见坑）。** 电影持有 `DataSource`（你的 VM）。如果你的 VM 订阅了游戏事件（`Campaign.Current` 的每日 tick、`IMission` 的 `OnMissionTick`、消息系统等）却**没有在 `ReleaseMovie` 时退订**，VM 会被电影/层一直引用而无法回收：界面关了但事件还在触发，轻则内存涨、重则对已销毁控件操作时抛 `NullReferenceException`。**在 VM 提供一个 `OnFinalize`/`UnSubscribeEvents` 并在释放电影前调用。**
3. **只能在主线程（UI 线程）碰 DataContext。** `Tick`/`RenderTick`/`ProcessEvents` 由引擎主线程驱动。从异步/后台线程直接改 VM 属性并 `RaisePropertyChanged` 不是线程安全的，可能导致绑定更新崩在渲染线程。跨线程改数据要先 `Dispatch` 回主线程。
4. **聚焦（focus）会吞掉游戏输入。** 把 `GauntletLayer.IsFocusLayer = true` 后，层会抢占输入焦点，游戏下方的画面收不到键盘鼠标——这适合模态对话框，但**非模态 HUD 千万别开**。反之，若面板需要接收文本输入，要确保可编辑控件获得焦点。
5. **`IsFocusedOnInput()` 用来让游戏“让位”给输入框。** 当焦点在 `EditableTextWidget` 上时它返回 `true`。在行为/控制代码里处理按键前先查它，避免玩家打字时游戏还在响应同一按键。
6. **资源刷新会让旧电影标识符失效。** 引擎在切换语言/重载资源时会调用 `OnResourceRefreshBegin`/`OnResourceRefreshEnd`，期间所有电影被释放并重建。如果你把 `GauntletMovieIdentifier` 缓存成了字段，刷新后它是悬空引用；要么重新 `LoadMovie` 拿新标识符，要么用 `GetMovieIdentifier(name)` 重新查询。
7. **不要保留过期的 DataContext 引用去“刷新界面”。** `ReleaseMovie` 之后 `GauntletMovieIdentifier.DataSource` 虽还在，但已经不再绑定到任何控件树；继续改它不会更新任何 UI。要更新界面就改**仍在使用中**的那个 VM 的属性。

## 主要成员

### 电影：加载与释放

#### `public GauntletLayer(string name, int localOrder, bool shouldClear = false)`
构造函数。`name` 是层的名字（也用作 `UIContext.Name`，调试可见）；`localOrder` 决定同屏多层的叠放次序（数值越大越靠上）；`shouldClear` 为 `true` 时每帧先清屏（用于独占的全屏界面，避免下层透出）。构造时会立即创建内部 `TwoDimensionView` 与 `UIContext` —— **但此时还没有电影，UI 不会显示**，必须再 `LoadMovie`。

#### `public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`
**这是你 99% 时间唯一要主动调用的成员。** 按名字从 `UIResourceManager` 找到电影模板，实例化并把它与 `dataSource` 绑定为 `DataContext`，加入层的电影列表。返回 `GauntletMovieIdentifier`，后续的 `ReleaseMovie` / `GetMovieIdentifier` 都靠它或靠名字定位。

- 副作用：创建控件树（`RootWidget`）、建立 `DataSource → Widget` 的绑定、电影开始随层每帧 `Update`。
- 调用时机：层已 `AddLayer` 到屏幕之后、或之前均可，但**必须在释放前保持 `dataSource` 有效**。

```csharp
MyViewModel vm = new MyViewModel();
GauntletMovieIdentifier movieId = _layer.LoadMovie("MyModPanel", vm);
// 之后可用 movieId 或名字取回：
//   _layer.GetMovieIdentifier("MyModPanel")
```

#### `public void ReleaseMovie(GauntletMovieIdentifier identifier)`
释放指定电影：解绑 `DataSource`、销毁 `RootWidget` 控件树、从层列表移除。幂等（已释放不会重复释放）。**必须在 `RemoveLayer` 之前调用，否则 `OnFinalize` 断言。**

#### `public GauntletMovieIdentifier GetMovieIdentifier(string movieName)`
按电影名在当前层里查找已加载的电影标识符；没有则返回 `null`。适合在你没保存 `LoadMovie` 返回值时，拆除阶段重新取回标识符去 `ReleaseMovie`。

### 数据绑定：ViewModel 即 DataContext

`GauntletLayer` 本身**没有** `DataSource` 属性；数据绑定发生在 `LoadMovie` 这一步，绑定关系保存在 `GauntletMovieIdentifier.DataSource` 上（类型 `ViewModel`）。运行期：

- VM 实现 `INotifyPropertyChanged`；属性变化 `RaisePropertyChanged` 后，绑定自动把新值推到对应 `Widget` 属性。
- 引擎每帧布局刷新时会调用 `UpdateLayout()`，它对每个电影执行 `DataSource.RefreshValues()`（重推全部值）再 `Movie.RefreshBindingWithChildren()`。你**通常不需要手动调**——改属性用 `RaisePropertyChanged` 即可；需要强制全量刷新时才考虑。
- 想“换数据”就改当前 VM 的属性；想彻底换一套 UI/数据，就 `ReleaseMovie` 后重新 `LoadMovie`。

### 输入与焦点

#### `public override bool IsFocusedOnInput()`
当前焦点控件是 `EditableTextWidget`（文本输入框）时返回 `true`。**用途：** 在你的行为/控制逻辑里决定要不要把按键转发给游戏——玩家正在输入框打字时返回 `true`，此时应跳过游戏的快捷键处理。

#### 输入上下文与聚焦（来自基类 `ScreenLayer`）
- `GauntletLayer` 每帧通过 `ProcessEvents()` 把 `base.Input`（`InputContext`）喂给 `UIContext`，鼠标/键盘落到控件上。
- `IsFocusLayer`（`ScreenLayer` 属性）：设 `true` 让层抢占焦点（模态面板用）；非模态 HUD 保持 `false`，否则会吞掉游戏输入。
- 当层内控件获得焦点时，源码会调 `ScreenManager.TrySetFocus(this)`；失焦且非 `IsFocusLayer` 时调 `ScreenManager.TryLoseFocus(this)`——这就是焦点在层与游戏间切换的机制。
- `OnOnScreenKeyboardDone(string)` / `OnOnScreenKeyboardCanceled()`：移动端/主机虚拟键盘回调，会把文本送进 `UIContext`；一般无需重写。

### 层生命周期与宿主（引擎驱动，通常不用你调）

- `OnActivate()` / `OnDeactivate()`：层被 `AddLayer`/`RemoveLayer` 时由引擎调用，分别激活/停用 `UIContext` 并开关 `TwoDimensionView` 渲染。
- `Tick(dt)` / `RenderTick(dt)` / `LateUpdate(dt)` / `Update(keys)`：每帧驱动 `UIContext.Update`、电影 `Update`、渲染与输入派发。**不要手动调。**
- `OnResourceRefreshBegin(out List<GauntletMovieIdentifier>)` / `OnResourceRefreshEnd(List<...>)`：引擎在资源重载时调用，会先释放全部电影、再按保存的标识符重建。模组一般不直接调用；若你缓存了电影标识符，重载后要用 `GetMovieIdentifier` 重新取得。
- `OnFinalize()`：层被屏幕销毁时调用，会 `ClearContext()` 并断言“电影是否已释放”。
- `DrawDebugInfo()`：调试用，按 `Shift+F` 可抓控件层级快照；开发期排查布局很有用。

## 示例

### 示例 1：在自定义 `ScreenBase` 中托管一个面板（完整生命周期）

最常见的写法：继承 `ScreenBase`，在 `OnInitialize` 里建层并加载电影，在 `OnDeactivate` 里按“释放电影 → 移除层 → 置空”的顺序拆除。

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.ScreenSystem;
using TaleWorlds.Library;

public class MyModPanelScreen : ScreenBase
{
    private GauntletLayer _layer;
    private MyModViewModel _vm;

    protected override void OnInitialize()
    {
        base.OnInitialize();

        _vm = new MyModViewModel();                 // 你的 ViewModel（DataContext）
        _layer = new GauntletLayer("MyModPanel", 100, false);
        // LoadMovie 一步完成：实例化电影 + 绑定 DataSource
        _layer.LoadMovie("MyModPanel", _vm);
        this.AddLayer(_layer);                      // 挂到本屏幕的图层栈
    }

    protected override void OnDeactivate()
    {
        base.OnDeactivate();

        // 拆除顺序：先 ReleaseMovie，再 RemoveLayer，最后置空
        GauntletMovieIdentifier id = _layer.GetMovieIdentifier("MyModPanel");
        if (id != null)
        {
            _layer.ReleaseMovie(id);                // 解绑 VM、销毁控件树
        }
        this.RemoveLayer(_layer);                   // 离开屏幕图层栈
        _layer = null;
        _vm = null;                                 // VM 不再被电影引用，可被回收
    }
}
```

### 示例 2：在任务中叠加一个 HUD，并在行为拆除时正确释放

从 `MissionBehavior` 往“当前屏幕”上叠一层 HUD（非模态，保持 `IsFocusLayer = false`）。拆除钩子是 `MissionBehavior.OnRemoveBehavior()`（不是 `OnMissionEnd`），必须释放电影并移除层。

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.MountAndBlade;
using TaleWorlds.ScreenSystem;

public class MyHudBehavior : MissionBehavior
{
    private GauntletLayer _hudLayer;
    private MyHudViewModel _vm;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();

        _vm = new MyHudViewModel();
        _hudLayer = new GauntletLayer("MyHud", 1, false);
        _hudLayer.LoadMovie("MyHud", _vm);          // 绑定数据，电影开始更新
        ScreenManager.TopScreen.AddLayer(_hudLayer); // 挂到当前屏幕最上层
    }

    public override void OnRemoveBehavior()
    {
        // 关键：释放电影 → 移除层 → 置空，避免断言与幽灵 UI
        GauntletMovieIdentifier id = _hudLayer.GetMovieIdentifier("MyHud");
        if (id != null)
        {
            _hudLayer.ReleaseMovie(id);
        }
        ScreenManager.TopScreen.RemoveLayer(_hudLayer);
        _hudLayer = null;
        _vm = null;

        base.OnRemoveBehavior();
    }
}
```

> 提示：`ScreenManager.TopScreen` 即“当前正在显示的屏幕”（在 1.3.15 里没有 `ScreenManager.CurrentScreen`，请用 `TopScreen`）。若该屏幕随后被关闭，你仍必须已在上一步 `RemoveLayer`，否则 `OnFinalize` 会断言电影未释放。

## 参见

- ↑ 父级（bucket 索引）：[engine 目录](./)
- ↔ 同级 / 上游：[ScreenBase](../../campaign-ext/ScreenBase)（图层宿主）、[ScreenManager](../../gui/ScreenManager)（`TopScreen` 与屏幕栈）、[UIResourceManager](.././UIResourceManager)（电影模板与控件工厂）、[GauntletMovieIdentifier](.././GauntletMovieIdentifier)（`LoadMovie` 返回值）
- 相关类型：[ViewModel](../../core-extra/ViewModel)（DataContext 来源）、[MBSubModuleBase](../../core/MBSubModuleBase)（模组入口，通常在那里装配行为与屏幕）
