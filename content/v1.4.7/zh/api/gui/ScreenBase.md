---
title: "ScreenBase"
description: "所有界面的基类：管理一个界面的生命周期（初始化 / 激活 / 暂停 / 每帧 / 结束）、它的 ScreenLayer 栈与 ScreenComponent 列表。Gauntlet 界面从这里派生。"
---
# ScreenBase

**命名空间：** `TaleWorlds.ScreenSystem`
**模块：** `TaleWorlds.ScreenSystem`
**类型：** `public abstract class ScreenBase`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.ScreenSystem/ScreenBase.cs`（声明见第 9 行）

## 概述

`ScreenBase` 是屏幕上「一屏」的抽象基类——主菜单、战役地图、角色创建、任务内界面、结算界面，全都是它的派生类。一个 `ScreenBase` 实例管理三样东西：自己的**生命周期状态**（`IsInitialized` / `IsActive` / `IsPaused` / `IsFinalized`）、自己的 **[ScreenLayer](../ScreenLayer) 栈**（输入、焦点、绘制顺序都在这里），以及自己的 `ScreenComponent` 列表。

它的关键概念是**「屏幕栈」**：界面不是并列的，而是压栈的。[ScreenManager](../ScreenManager) 维护一个 `ScreenBase` 列表，`PushScreen` 把新界面压到最上面，`PopScreen` 弹出最上面那个。弹栈时，被弹出的屏幕会拿到 `OnDeactivate` / `OnFinalize`，而新栈顶拿到 `OnActivate` / `OnResume`。

生命周期回调有明显的分层：`OnInitialize` 一次性；`OnActivate` / `OnDeactivate` 每次压栈 / 弹栈；`OnPause` / `OnResume` 在它被别的屏幕盖住 / 重新露出时；`OnFrameTick` / `OnIdleTick` / `OnPostFrameTick` 每帧；`OnReady` 在所有资源加载完成之后。**把这几层用混是 UI bug 的主要来源**——例如把每帧要做的事写进 `OnActivate`，结果屏幕只是被暂时盖住就不再更新。

## 心智模型

把 `ScreenBase` 想成**「一屏的状态机 + 一叠图层」**。写一个界面的正确顺序是：

1. **`OnInitialize` 里搭结构。** `AddLayer`、`AddComponent`、设置 `MouseVisible` 都在这里。**只跑一次**。
2. **`OnActivate` 里准备「显示态」。** 每次这屏被压到栈顶都会跑。适合：把数据从 ViewModel 拉过来、显示光标、激活某个 layer。**不要在这里做重建结构的操作**——那属于 `OnInitialize`。
3. **`OnFrameTick` 里做每帧更新。** 参数是 `dt`。**这是唯一每帧跑的地方**，性能敏感。
4. **`OnDeactivate` / `OnFinalize` 里解引用。** `OnDeactivate` 可以多次跑（每次被盖住），`OnFinalize` 只跑一次（在 `ScreenManager` 清理屏幕时）。**解除事件订阅必须放在 `OnFinalize`**，否则会有泄漏。
5. **层用名字或类型查找。** `FindLayer<T>()` / `FindLayer<T>(string name)` / `HasLayer(layer)`。名字查找是跨 ScreenBase 共享层的手段（比如全局 HUD 层）。

**最常见的三个错误**：在 `OnActivate` 里 `AddLayer`（会重复添加）；在 `OnFrameTick` 里改结构（布局错乱）；以及把 `OnDeactivate` 当成「彻底销毁」——实际上它之后屏幕还可能被重新激活。

## 何时使用 / 何时不要使用

- **使用**：实现任何自定义界面（派生 + 覆写生命周期）。
- **使用**：压入 / 弹出界面（通过 [ScreenManager](../ScreenManager) 的 `PushScreen` / `PopScreen`）。
- **使用**：管理本屏的 layer 栈与 category 状态（`SetLayerCategoriesState`）。
- **使用**：处理焦点变化（`OnFocusChangeOnGameWindow`）。
- **不要**：在 `OnActivate` 里 `AddLayer` / `AddComponent`——那属于 `OnInitialize`。
- **不要**：在 `OnFrameTick` 里做层结构变更。
- **不要**：假设 `OnDeactivate` 之后这屏就没了——它可能被重新激活。

## 成员说明

### 一、生命周期状态

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `bool IsInitialized { get; private set; }` | 是否已 `OnInitialize`。**在 `OnInitialize` 内部它还是 false**。 |
| `bool IsActive { get; private set; }` | 是否处于栈顶激活态。被别的屏幕盖住时为 false。 |
| `bool IsPaused { get; private set; }` | 是否被暂停（被盖住时通常为 true）。 |
| `bool IsFinalized { get; private set; }` | 是否已 `OnFinalize`。**为 true 之后不要再做任何事**。 |
| `void Activate()` / `ActivateAllLayers()` | 激活本屏 / 激活本屏全部 layer。由 `ScreenManager` 压栈时调用。 |
| `void Deactivate()` / `DeactivateAllLayers()` | 停用本屏 / 停用本屏全部 layer。 |
| `protected ScreenBase()` | 构造函数。`MouseVisible` 等需要在其中设定默认值。 |

### 二、生命周期回调

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `protected virtual void OnInitialize()` | **一次性**初始化。搭结构（`AddLayer` / `AddComponent`）的唯一正确位置。 |
| `protected virtual void OnActivate()` | 每次压到栈顶。准备显示态。 |
| `protected virtual void OnDeactivate()` | 每次被盖住 / 弹栈。**可以多次运行**。 |
| `protected virtual void OnPause()` / `OnResume()` | 被别的屏幕盖住 / 重新露出。 |
| `protected virtual void OnFrameTick(float dt)` | **每帧**，参数是 dt。唯一的每帧回调。 |
| `protected virtual void OnPostFrameTick(float dt)` | 帧末。在本屏逻辑之后运行，适合提交跨屏状态。 |
| `protected virtual void OnIdleTick(float dt)` | 空闲 tick（游戏暂停 / 窗口无输入时）。**不要在这里跑游戏逻辑**。 |
| `protected virtual void OnReady()` | 所有资源加载完成之后。**Gauntlet prefab 加载完的时机**，数据绑定要在这里建立。 |
| `protected virtual void OnFinalize()` | 一次性销毁。**解除事件订阅、放引用的正确位置**。 |
| `public virtual void OnFocusChangeOnGameWindow(bool focusGained)` | 游戏窗口获得 / 失去焦点。暂停 / 恢复输入的正确钩子。 |
| `public virtual bool MouseVisible { get; set; }` | 是否显示鼠标光标。 |
| `public virtual void UpdateLayout()` | 重新计算布局。分辨率变化或层内容变化后调用。 |

### 三、层管理

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddLayer(ScreenLayer layer)` | 加一层。**只能在 `OnInitialize` 里做**——在 `OnActivate` 里调会重复添加。 |
| `void RemoveLayer(ScreenLayer layer)` | 移除一层。 |
| `bool HasLayer(ScreenLayer layer)` | 判断某层是否属于本屏。 |
| `T FindLayer<T>() where T : ScreenLayer` | 按类型找层。找不到返回 `null`。 |
| `T FindLayer<T>(string name) where T : ScreenLayer` | 按名字 + 类型找层。跨屏共享层（全局 HUD）用名字。 |
| `void SetLayerCategoriesState(string[] categoryIds, bool isActive)` | 批量开关某几类层。 |
| `void SetLayerCategoriesStateAndToggleOthers(string[] categoryIds, bool isActive)` | 开启指定类别并**关闭其它所有**。 |
| `void SetLayerCategoriesStateAndDeactivateOthers(string[] categoryIds, bool isActive)` | 同上，但语义不同（关闭的是「非指定类别」的层）。 |

### 四、组件与事件

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddComponent(ScreenComponent component)` | 加一个屏幕组件（非 layer 的 UI 元素容器）。 |
| `T FindComponent<T>() where T : ScreenComponent` | 按类型找组件。 |
| `event ScreenBase.OnLayerAddedEvent OnAddLayer` | 层被加入时触发。参数是新增的 layer。**在 `OnFinalize` 里解除订阅**。 |
| `event ScreenBase.OnLayerRemovedEvent OnRemoveLayer` | 层被移除时触发。 |
| `public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)` | 事件委托类型。 |
| `public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)` | 事件委托类型。 |

## 示例

### 示例 1：一个标准的自定义屏幕

结构在 `OnInitialize` 建，显示态在 `OnActivate` 准备，每帧逻辑在 `OnFrameTick`，解引用在 `OnFinalize`。

```csharp
using TaleWorlds.ScreenSystem;

public class MyScreen : ScreenBase
{
    private GauntletLayer _gauntletLayer;
    private float _elapsed;

    public MyScreen()
    {
        MouseVisible = true;
    }

    // 结构：只跑一次
    protected override void OnInitialize()
    {
        base.OnInitialize();

        _gauntletLayer = new GauntletLayer("MyLayer", 100, true);
        AddLayer(_gauntletLayer);
    }

    // 显示态：每次压到栈顶都会跑
    protected override void OnActivate()
    {
        base.OnActivate();
        _elapsed = 0f;
    }

    // 每帧
    protected override void OnFrameTick(float dt)
    {
        base.OnFrameTick(dt);
        _elapsed += dt;
    }

    // 资源加载完成：数据绑定在这里建立
    protected override void OnReady()
    {
        base.OnReady();
    }

    // 一次性销毁：解除订阅、放引用
    protected override void OnFinalize()
    {
        base.OnFinalize();
        _gauntletLayer = null;
    }
}
```

### 示例 2：开关图层

`SetLayerCategoriesState` 用来实现「同一屏里互斥的 tab」。

```csharp
using TaleWorlds.ScreenSystem;

private static readonly string[] StatsTab = { "StatsTab" };
private static readonly string[] GearTab  = { "GearTab" };

public void ShowStats()
{
    // 开启 stats，同时关掉其它所有
    SetLayerCategoriesStateAndToggleOthers(StatsTab, true);
}

public void ShowGear()
{
    SetLayerCategoriesStateAndToggleOthers(GearTab, true);
}
```

### 示例 3：按名字查找全局层

跨屏共享的层（HUD、提示条）用名字找，因为它的类型通常不是本屏的。

```csharp
using TaleWorlds.ScreenSystem;

public void PokeHud()
{
    // 找不到返回 null，必须判空
    var hud = FindLayer<GauntletLayer>("GlobalHudLayer");
    if (hud != null)
    {
        // hud 在另一块屏幕上也存在，按名字找的是本屏挂载的那个
    }
}
```

## 风险与边界

- **`OnInitialize` 只跑一次，`OnActivate` 每次都跑**。把 `AddLayer` 写在 `OnActivate` 里会重复添加层——症状是界面叠了几层输入 / 焦点行为异常。
- **`OnDeactivate` 不是销毁**。它可以多次运行，屏幕之后可能被重新激活。只有 `OnFinalize` 是一次性的。
- **`OnFinalize` 之后不要再碰这个对象**。`ScreenManager.CleanScreens()` 会触发它，之后引用即失效。
- **事件订阅的泄漏**。`OnAddLayer` / `OnRemoveLayer` 订阅外部对象时，不在 `OnFinalize` 里解除会一直持有这屏。
- **`OnIdleTick` 不是游戏 tick**。窗口无输入 / 暂停时它仍跑。在这里执行游戏逻辑会让玩家切出去时损失资源。
- **`OnReady` 的时机**。它比 `OnInitialize` 晚（资源已加载）。数据绑定放 `OnInitialize` 会拿到未加载的 prefab。
- **`UpdateLayout` 的成本**。每帧调用会重复计算布局。只在分辨率变化或层内容变化后调用。
- **`FindLayer` 返回 null**。按类型 / 名字查找都可能找不到，任何结果都要判空。
- **单线程 + 原生互操作**：所有回调都在主线程 UI 循环里执行。Layer 的绘制与输入处理会穿透到 native，不能从后台线程触碰。

## 依赖关系

- 上游 / 提供者：
  - [ScreenManager](../ScreenManager) 维护屏幕栈并驱动本类的 `Activate` / `Deactivate` / `OnFrameTick`。
  - [ScreenLayer](../ScreenLayer) 是本类管理的图层类型。
  - [GauntletLayer](../../engine/GauntletLayer) 是最常用的具体 layer 实现。
- 相互 / 下游：
  - [ViewModel](../../core-extra/ViewModel) 提供本屏的数据绑定面。
  - [Game](../../core-extra/Game) 的 `GameStateManager` 与屏幕栈协同完成状态切换。

## 参见

- ↑ 父级：[gui 索引](../)
- ↔ 相关：[ScreenManager](../ScreenManager) · [ScreenLayer](../ScreenLayer) · [GauntletLayer](../../engine/GauntletLayer) · [ViewModel](../../core-extra/ViewModel) · [Game](../../core-extra/Game)