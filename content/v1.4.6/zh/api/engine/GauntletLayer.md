---
title: "GauntletLayer"
description: "TaleWorlds.Engine.GauntletUI 里的 ScreenLayer 实现：加载 Prefab movie、绑定 ViewModel、参与命中测试与手柄导航。"
---
# GauntletLayer

**Namespace:** `TaleWorlds.Engine.GauntletUI`
**Module:** `TaleWorlds.Engine.GauntletUI`
**Type:** `public class GauntletLayer : ScreenLayer`
**Source:** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## 概述

`GauntletLayer` 是 Bannerlord 所有 XML-Prefab 界面的载体。它继承 `ScreenLayer`（`TaleWorlds.ScreenSystem` 命名空间），因此能挂进 [ScreenBase](../../gui/ScreenBase) 的 layer 列表；它自己负责三件事：持有两个 `GauntletMovieIdentifier`（一个给本层 UI、一个给下层透出），把 `ViewModel` 作为 `dataSource` 绑给 movie，以及参与渲染层的命中测试、焦点判定与手柄导航。

它不是抽象类，但绝大多数用法都是继承它并加一个 `ViewModel`。一个完整界面通常长这样：`class MyScreen : ScreenBase` 持有 `MyLayer : GauntletLayer`，`MyLayer` 再持有 `MyViewModel`，movie XML 通过 `ViewModel` 的属性名绑定控件。

注意命名空间的错位：`GauntletLayer` 的源码在 `TaleWorlds.Engine.GauntletUI` 目录下（不是 `TaleWorlds.GauntletUI`），而它的基类 `ScreenLayer` 在 `TaleWorlds.ScreenSystem`。混用这两个命名空间时 `using` 都要写上。

## 心智模型

生命周期由 `ScreenLayer` 的 internal 句柄驱动，顺序是：`ScreenBase.AddLayer` → layer 的 `OnInitialize` → `HandleActivate` → 每帧 `Tick` → `LateUpdate` → `RenderTick` → `Update(lastKeysPressed)` → `OnFinalize`。`GauntletLayer` 只在 `Tick` / `LateUpdate` / `RenderTick` / `Update` 这几处插入自己的逻辑，其余交给基类。

movie 的加载是显式的：在 `OnActivate`（或更早的 `OnInitialize`）里调 `LoadMovie(movieName, viewModel)` 拿到一个 `GauntletMovieIdentifier`，在 `OnFinalize` 里必须 `ReleaseMovie(identifier)`。忘记释放会在每次进出界面时泄漏一份 movie 资源。

常见误用有三类。一是**在 `OnFinalize` 之前重复 `LoadMovie` 同一个 movie**：每次都会新建一个 identifier，旧的没释放就会累积。二是**把 `HitTest` 覆盖成常量 true**：该 layer 会吞掉所有鼠标点击，下层界面再也点不到。三是**在 `RenderTick` 里改 ViewModel**：渲染阶段的属性写入不会触发绑定刷新，表现为界面要下一次 tick 才更新。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `GamepadNavigationContext` | `public IGamepadNavigationContext GamepadNavigationContext { get; private set; }` | 手柄导航上下文，由基类在激活时注入。用它判断当前焦点在哪个控件上 |
| `UIContext` | `public UIContext UIContext { get; private set; }` | 该 layer 的 UI 上下文，控件查找与输入分发都经由它。未激活时可能是 null |
| `TwoDimensionView` | `public readonly TwoDimensionView TwoDimensionView` | 底层 2D 渲染视图。需要直接操作绘制命令时才用 |
| `TwoDimensionPlatform` | `public readonly ITwoDimensionPlatform TwoDimensionPlatform` | 2D 平台抽象（贴图、渲染目标）。自定义绘制或离屏渲染的入口 |
| 构造函数 | `public GauntletLayer(string name, int localOrder, bool shouldClear = false)` | `name` 是 layer 名，`SetLayerCategoriesState` 就是按它匹配的；`localOrder` 决定同层内的相对顺序；`shouldClear` 表示是否清空下层内容 |
| `LoadMovie` | `public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)` | 加载 XML prefab 并绑定数据源，返回的 identifier 必须保留到 `ReleaseMovie`。`dataSource` 为 null 会导致绑定全部落空 |
| `GetMovieIdentifier` | `public GauntletMovieIdentifier GetMovieIdentifier(string movieName)` | 按 movie 名反查已加载的 identifier，用于把两个 layer 绑到同一份 movie 定义上 |
| `ReleaseMovie` | `public void ReleaseMovie(GauntletMovieIdentifier identifier)` | 释放 movie 资源。传 null 或已释放的 identifier 不安全 |
| `OnResourceRefreshBegin` | `public void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)` | 资源热重载开始时由引擎调；把当前持有的 identifier 交出去暂存，返回 void |
| `OnResourceRefreshEnd` | `public void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)` | 资源热重载结束后把暂存的 identifier 挂回来 |
| `OnActivate` | `protected override void OnActivate()` | 激活钩子。通常在这里（或更早）`LoadMovie`，并把 `UIContext` 的输入回调接到 ViewModel 上 |
| `OnDeactivate` | `protected override void OnDeactivate()` | 停用钩子。用来断开输入订阅 |
| `OnFinalize` | `protected override void OnFinalize()` | 销毁钩子。**必须**在这里 `ReleaseMovie`，否则每次进出界面都会泄漏 |
| `Tick` | `protected override void Tick(float dt)` | 帧更新，位置在输入处理之前 |
| `LateUpdate` | `protected override void LateUpdate(float dt)` | 帧内后段更新，适合处理本帧累积的输入意图 |
| `RenderTick` | `protected override void RenderTick(float dt)` | 渲染前的最后更新。这里改 ViewModel 不会即时反映到画面 |
| `Update` | `protected override void Update(IReadOnlyList<int> lastKeysPressed)` | 按键派发钩子，参数是本帧按下的键列表 |
| `RefreshGlobalOrder` | `protected override void RefreshGlobalOrder(ref int currentOrder)` | 参与全局 layer 排序。基类用 `ref currentOrder` 累加相对次序，派生类一般不需要改 |
| `ProcessEvents` | `public override void ProcessEvents()` | 处理排队中的 UI 事件（点击、悬停）。由基类在正确时机调用 |
| `HitTest` | `public override bool HitTest(Vector2 position)` | 指定坐标的命中测试。返回 true 会吞掉该点上的所有输入 |
| `HitTest` | `public override bool HitTest()` | 无参重载：只要 layer 处于激活态就命中。用于「全屏阻挡」型界面 |
| `FocusTest` | `public override bool FocusTest()` | 焦点资格判定。返回 false 时该 layer 不会被 `ScreenManager.TrySetFocus` 选中 |
| `IsFocusedOnInput` | `public override bool IsFocusedOnInput()` | 当前焦点是否真的落在本 layer 的输入框上，用于决定要不要接管打字输入 |
| `GetIsAvailableForGamepadNavigation` | `public bool GetIsAvailableForGamepadNavigation()` | 本 layer 当前是否可参与手柄导航。控件全部禁用时应返回 false |
| `OnLoseFocus` | `protected override void OnLoseFocus()` | 失去焦点时的清理，通常要重置控件的选中态 |
| `OnOnScreenKeyboardDone` | `public override void OnOnScreenKeyboardDone(string inputText)` | 系统软键盘输入完成，把文本灌进 ViewModel 对应属性 |
| `OnOnScreenKeyboardCanceled` | `public override void OnOnScreenKeyboardCanceled()` | 系统软键盘被取消，清理输入状态 |
| `UpdateLayout` | `public override void UpdateLayout()` | 重算布局。分辨率或 `ScreenManager.Scale` 变化时被引擎调 |
| `DrawDebugInfo` | `public override void DrawDebugInfo()` | 在调试构建里画出命中盒与焦点信息 |

## 真实示例

```csharp
// 读者侧演示 ViewModel：不是游戏 API，只示意 dataSource 与刷新形状
public class MyLedgerViewModel : ViewModel
{
    public string EntryName { get; set; }

    public bool RefreshRequested { get; set; }

    public void Rebuild() { }
}

// 读者侧演示 layer：不是游戏 API，只示意 LoadMovie / ReleaseMovie 的配对形状
public class MyLedgerLayer : GauntletLayer
{
    private GauntletMovieIdentifier _movie;

    private MyLedgerViewModel _viewModel;

    public MyLedgerLayer(string name, int order)
        : base(name, order)
    {
    }

    public void Bind(MyLedgerViewModel viewModel)
    {
        _viewModel = viewModel;
        if (_movie != null)
        {
            ReleaseMovie(_movie);
        }

        // 换数据源就重载 movie，绑定才会指向新的 ViewModel
        _movie = LoadMovie("LedgerGauntlet", _viewModel);
    }

    protected override void OnActivate()
    {
        base.OnActivate();
        if (_movie == null && _viewModel != null)
        {
            _movie = LoadMovie("LedgerGauntlet", _viewModel);
        }
    }

    protected override void Tick(float dt)
    {
        base.Tick(dt);
        if (_viewModel != null && _viewModel.RefreshRequested)
        {
            _viewModel.RefreshRequested = false;
            _viewModel.Rebuild();
        }
    }

    protected override void OnFinalize()
    {
        if (_movie != null)
        {
            ReleaseMovie(_movie);
            _movie = null;
        }

        base.OnFinalize();
    }

    public override bool HitTest(Vector2 position)
    {
        // 只在真正有内容的矩形内吞掉鼠标
        return position.X >= 0f && position.X <= 400f && position.Y >= 0f && position.Y <= 300f;
    }

    public override void OnOnScreenKeyboardDone(string inputText)
    {
        if (_viewModel != null)
        {
            _viewModel.EntryName = inputText;
        }
    }
}
```

挂进界面：

```csharp
public class MyLedgerScreen : ScreenBase
{
    private MyLedgerLayer _layer;

    protected override void OnInitialize()
    {
        _layer = new MyLedgerLayer("my_ledger_layer", 0);
        AddLayer(_layer);
    }

    protected override void OnReady()
    {
        _layer.Bind(new MyLedgerViewModel());
    }
}
```

## 风险与边界

- **movie 资源必须成对释放**：`LoadMovie` 与 `ReleaseMovie` 数量不匹配会在反复进出界面后累积泄漏，而 `OnFinalize` 是唯一的正确释放点。
- **`UIContext` 依赖激活态**：未激活时访问它可能得到 null。把属性写入放进 `OnActivate` 之后的路径。
- **`HitTest` 决定输入归属**：默认实现可能覆盖整个可用区域，派生类若不重写，下层界面的点击全部失效。
- **`HitTest()` 无参与 `HitTest(Vector2)` 是两条独立路径**：只重写带坐标的那个并不会阻止无参重载的默认命中行为。
- **`RenderTick` 里的属性写入不即时生效**：绑定刷新发生在更早的阶段，同帧改动会延迟一帧显示。
- **资源热重载会打断 identifier**：`OnResourceRefreshBegin` / `OnResourceRefreshEnd` 之间的窗口里，手上缓存的 identifier 不可用于渲染判断。
- **`Update` 的按键列表是「本帧按下」而非「当前按住」**：判断长按要自己维护状态机。
- **命名空间跨模块**：本类在 `TaleWorlds.Engine.GauntletUI`，基类在 `TaleWorlds.ScreenSystem`，movie 类型 `GauntletMovieIdentifier` 与 `ViewModel` 分别来自其它模块。`using` 缺一个就编译不过。
- **主线程亲和**：所有这些覆写都在渲染主线程执行，不要在里面做阻塞等待。
- **坐标类型**：`HitTest` 用 `System.Numerics.Vector2`，而 `ScreenManager.UsableArea` 是 `TaleWorlds.Core.Vec2`，两者不能直接互传。

## 跨版本提示

1.4.5 的参考源位于 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Engine.GauntletUI/`。1.4.6 相对它新增了 `GamepadNavigationContext` 与 `UIContext` 两个公开只读属性，把原先散落在内部的手柄导航与 UI 上下文提升成了可访问成员。构造签名 `GauntletLayer(string name, int localOrder, bool shouldClear = false)` 与 `LoadMovie` / `ReleaseMovie` / `GetMovieIdentifier` 三个核心成员跨版本一致——这三个是所有自定义界面的必需面。

## 依赖关系

- 基类：[ScreenBase](../../gui/ScreenBase) — 它的 layer 容器就是 `GauntletLayer` 的挂载点。
- 栈管理：[ScreenManager](../../gui/ScreenManager) — `TrySetFocus`、`Scale`、`UsableArea` 与焦点事件都来自这里。
- 战役侧：[Campaign](../../campaign/Campaign) — ViewModel 背后的业务数据源通常取自 `Campaign.Current`。
- 类型同源：`GauntletMovieIdentifier`、`ViewModel`、`UIContext`、`IGamepadNavigationContext` 均来自 `TaleWorlds.GauntletUI` / `TaleWorlds.Core.ViewModelCollection`，与本类分属不同程序集。
- 父级：engine API 目录导览位于版本根 `../../../`。