---
title: "GauntletLayer"
description: "Gauntlet UI 的具体图层实现：从 XML prefab 加载界面、绑定 ViewModel、渲染并处理点击与手柄导航。自定义 UI 面板几乎总是通过它进入引擎。"
---
# GauntletLayer

**命名空间：** `TaleWorlds.Engine.GauntletUI`
**模块：** `TaleWorlds.Engine.GauntletUI`
**类型：** `public class GauntletLayer : ScreenLayer`
**基类：** `TaleWorlds.ScreenSystem.ScreenLayer`
**源文件：** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`（声明见第 15 行）

## 概述

`GauntletLayer` 是 [ScreenLayer](../ScreenLayer) 的具体实现，也是 Gauntlet UI 的入口。Gauntlet 是游戏的声明式 UI 框架：界面用 XML prefab 描述（控件树、位置、绑定路径），代码侧提供一个 [ViewModel](../../core-extra/ViewModel) 作为数据源，两者在运行时对接。

它做四件事：**加载与释放 movie**（`LoadMovie` / `ReleaseMovie`，`GauntletMovieIdentifier` 是句柄）、**驱动渲染与布局**（`RenderTick` / `UpdateLayout`）、**把 2D 输入转成 UI 事件**（`ProcessEvents` / `HitTest`）、以及**手柄导航**（`GamepadNavigationContext`、`GetIsAvailableForGamepadNavigation`）。`UIContext` 是它持有的渲染上下文，`TwoDimensionView` 与 `TwoDimensionPlatform` 是底层绘制句柄。

它还实现了 `IScreenLayer` 的 `FocusTest` / `IsFocusedOnInput` / `OnOnScreenKeyboardDone`，把宿主平台软键盘的回调接到 UI 上。

## 心智模型

**心智模型一：movie 是「资源」，ViewModel 是「数据」，两者都要显式管理。**

1. **`LoadMovie(prefabName, dataSource)` 返回 `GauntletMovieIdentifier`，必须持有它**。释放只能通过 `ReleaseMovie(identifier)`——**引用计数式的**，同一个 movie 被两个层加载时，要释放两次才能真正卸载。
2. **movie 与 VM 的绑定在加载时建立**。VM 的属性名要在 prefab 的绑定路径里写对；写错不会编译报错，只是绑定静默失败（这时开 `ViewModel.UIDebugMode`）。
3. **布局在 `UpdateLayout()` 里算**。分辨率变化、控件动态显隐之后必须调它，否则控件位置停留在旧值。

**心智模型二：层级的输入处理链是「先 EarlyProcessEvents，再具体响应」。**

`GauntletLayer.Update(lastKeysPressed)` 会把按键转成 Gauntlet 的输入事件传给 UI 树；UI 树里焦点在哪个控件，决定谁响应。它覆写了 `EarlyProcessEvents` 的语义（继承自基类），你在派生类里处理完按键仍然要声明消费。

**心智模型三：`IsAvailableForGamepadNavigation` 决定手柄能不能用。** 返回 false 时，UI 只响应鼠标。这是主机 / PC 差异最容易踩的坑——UI 在 PC 上能用手柄，在手柄断开时又不行。

**常见错误**：不 `ReleaseMovie` 导致 movie 泄漏（长时间游玩后内存上涨）；prefabs 改了名不重编译资源导致加载失败；以及在 `RenderTick` 里改 VM 状态（应该改状态然后 `OnPropertyChanged`，让绑定去更新）。

## 何时使用 / 何时不要使用

- **使用**：实现任何基于 Gauntlet prefab 的自定义界面。
- **使用**：作为全局 HUD 层（通过 [ScreenManager](../ScreenManager) 的 `AddGlobalLayer`）。
- **使用**：需要手柄导航的界面（检查 `GetIsAvailableForGamepadNavigation`）。
- **使用**：作为调试层（`DrawDebugInfo`）。
- **不要**：在 `RenderTick` 里改逻辑状态——那是每帧绘制阶段。
- **不要**：在 `OnFinalize` 之前不 `ReleaseMovie`。
- **不要**：把 [ScreenLayer](../ScreenLayer) 的通用能力（不依赖 Gauntlet）也塞进来——那样就无法在无 Gauntlet 的上下文里复用了。

## 成员说明

### 一、构造与上下文

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public GauntletLayer(string name, int localOrder, bool shouldClear = false)` | 构造函数。`shouldClear` 表示该层会清屏（对话框），否则是叠加层。**必须调 base**，base 的 `localOrder` 决定叠放次序。 |
| `UIContext UIContext { get; private set; }` | Gauntlet 渲染上下文。由基类流程创建，派生类不要替换。 |
| `IGamepadNavigationContext GamepadNavigationContext { get; private set; }` | 手柄导航上下文。手柄导航类 UI 逻辑从这里取焦点信息。 |
| `public readonly TwoDimensionView TwoDimensionView` | 底层 2D 绘制句柄。**原生互操作对象，不要长期缓存它的状态**。 |
| `public readonly ITwoDimensionPlatform TwoDimensionPlatform` | 底层平台接口。 |

### 二、movie 生命周期

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)` | **加载 UI 的核心调用**。`movieName` 是 XML prefab 名，`dataSource` 是 ViewModel。返回句柄，**必须持有并最终释放**。 |
| `void ReleaseMovie(GauntletMovieIdentifier identifier)` | 释放 movie。**引用计数**：同一 prefab 被多次 `LoadMovie` 时要释放对应次数。 |
| `GauntletMovieIdentifier GetMovieIdentifier(string movieName)` | 按名字查已加载的 movie。返回 null 表示未加载。 |
| `void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)` | 资源热重载开始。返回受影响的 movie 列表。 |
| `void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)` | 资源热重载结束。重新加载这些 movie。 |

### 三、渲染与布局

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected override void Tick(float dt)` | 每逻辑帧。**逻辑更新放这里**。 |
| `protected override void LateUpdate(float dt)` | 帧末。 |
| `protected override void RenderTick(float dt)` | **绘制帧**。不要在这里改逻辑状态——渲染与逻辑分离是本框架的基本约定。 |
| `protected override void UpdateLayout()` | 重新计算布局。分辨率变化或控件显隐后必须调。 |
| `protected override void RefreshGlobalOrder(ref int currentOrder)` | 重算全局绘制顺序。**覆写必须调 base**。 |

### 四、输入与命中

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public override void ProcessEvents()` | 处理 UI 事件（点击、悬停等）。由框架在输入分发后调用。 |
| `public override bool HitTest(Vector2 position)` | 位置命中测试。Gauntlet 的实现会走 UI 树的命中测试。 |
| `public override bool HitTest()` | 无参数命中测试。 |
| `public override bool FocusTest()` | 是否可获得焦点。 |
| `public override bool IsFocusedOnInput()` | 当前是否正在接收输入。**键盘处理用它门控**。 |
| `protected override void OnLoseFocus()` | 失去焦点。软键盘 / 输入模式切换时需要处理。 |
| `protected override void OnOnScreenKeyboardDone(string inputText)` | 平台软键盘输入完成。**主机平台上输入框依赖它**。 |
| `protected override void OnOnScreenKeyboardCanceled()` | 平台软键盘取消。 |

### 五、状态回调

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected override void OnActivate()` | 层激活。可多次运行。 |
| `protected override void OnDeactivate()` | 层停用。 |
| `protected override void OnFinalize()` | 层销毁。**`ReleaseMovie` 应该在 `OnFinalize` 之前完成**。 |
| `public bool GetIsAvailableForGamepadNavigation()` | 当前是否支持手柄导航。手柄断开 / 平台不支持时为 false。**UI 的输入提示图标应据此切换**。 |
| `public override void DrawDebugInfo()` | 绘制调试信息（UI 树结构、绑定状态）。 |

## 示例

### 示例 1：加载并管理一个 Gauntlet 界面

movie 必须持有句柄并在销毁前释放——这是最常见的资源泄漏点。

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

public class MyPanelLayer : GauntletLayer
{
    private GauntletMovieIdentifier _movie;
    private MyPanelViewModel _viewModel;

    public MyPanelLayer() : base("MyPanelLayer", 100, false)
    {
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();

        // 引用计数式释放：加载几次就要放几次
        if (_movie != null)
        {
            ReleaseMovie(_movie);
            _movie = null;
        }
        _viewModel = null;
    }

    public void ShowPanel()
    {
        _viewModel = new MyPanelViewModel();
        _viewModel.RefreshValues();

        // 核心调用：prefab 名 + 数据源，返回的句柄必须持有
        _movie = LoadMovie("MyPanelPrefab", _viewModel);
    }
}
```

### 示例 2：数据更新走绑定，不走绘制

逻辑改状态 → `OnPropertyChanged` → 绑定刷新。**不要在 `RenderTick` 里直接改 VM**。

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;

public class CounterLayer : GauntletLayer
{
    private GauntletMovieIdentifier _movie;
    private CounterViewModel _viewModel;

    public CounterLayer() : base("CounterLayer", 100, true)
    {
    }

    protected internal override void Tick(float dt)
    {
        base.Tick(dt);

        // 逻辑更新放 Tick，不是 RenderTick
        if (_viewModel != null && NeedsUpdate())
        {
            _viewModel.Refresh();
        }
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        if (_movie != null) { ReleaseMovie(_movie); _movie = null; }
    }
}
```

### 示例 3：布局变化后强制重算

控件显隐或分辨率变化后必须 `UpdateLayout()`，否则控件停留在旧位置。

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine.GauntletUI;

protected override void OnActivate()
{
    base.OnActivate();

    // 内容变化后重算布局
    UpdateLayout();
}

public void OnScaleChanged(float newScale)
{
    // ScreenManager.OnScaleChange 之后需要重排
    UpdateLayout();
}
```

## 风险与边界

- **movie 泄漏**。`LoadMovie` 必须配对 `ReleaseMovie`，且是引用计数。忘记释放的表现是长时间游玩后内存持续上涨，最终被引擎回收掉整个 UI。
- **`RenderTick` 不是逻辑阶段**。在里面改 VM 状态会造成渲染与逻辑不同步（尤其是联机），且某些平台的渲染线程与逻辑线程是分开的。
- **绑定失败是静默的**。prefab 里的绑定路径与 ViewModel 属性名不匹配时不会抛异常。调试先开 `ViewModel.UIDebugMode`。
- **`UpdateLayout` 的时机**。分辨率变化、控件显隐、动态插入列表项之后都要调。漏调的症状是控件重叠或停留在旧位置。
- **`shouldClear` 决定清屏行为**。对话框用 `true`（清屏），HUD 用 `false`（叠加）。设错会导致 HUD 出现在对话框之下或之上。
- **`RefreshGlobalOrder` 覆写必须调 base**。它参与全局绘制 / 输入排序。
- **原生互操作**。`TwoDimensionView` / `TwoDimensionPlatform` 是 native 句柄，**不要跨帧缓存它们的状态**；绘制只在主线程。
- **平台差异**。软键盘（`OnOnScreenKeyboardDone`）只在主机平台有效；手柄导航（`GetIsAvailableForGamepadNavigation`）在 PC 上取决于手柄连接状态。**UI 的输入提示必须处理这两种情况**。
- **资源热重载**。`OnResourceRefreshBegin` / `OnResourceRefreshEnd` 会在开发期被调用；在这两个回调之间不要持有 movie 句柄。

## 依赖关系

- 上游 / 提供者：
  - [ScreenLayer](../ScreenLayer) 是本类的基类，提供绘制顺序、输入分发与焦点框架。
  - [ScreenBase](../ScreenBase) 持有并驱动本层；[ScreenManager](../ScreenManager) 分配全局顺序与全局层注册。
- 相互 / 下游：
  - [ViewModel](../../core-extra/ViewModel) 是 `LoadMovie` 的数据源，也是绑定解析的另一端。
  - [Game](../../core-extra/Game) 与 [MBSubModuleBase](../../core/MBSubModuleBase) 决定本层何时被创建与销毁。

## 参见

- ↑ 父级：[engine 索引](../)
- ↔ 相关：[ScreenLayer](../../gui/ScreenLayer) · [ScreenBase](../../gui/ScreenBase) · [ScreenManager](../../gui/ScreenManager) · [ViewModel](../../core-extra/ViewModel) · [Game](../../core-extra/Game)