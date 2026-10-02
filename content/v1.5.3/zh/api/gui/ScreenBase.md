---
title: "ScreenBase"
description: "所有界面的抽象基类：管理图层栈、组件、激活状态与焦点，并提供 OnInitialize/OnTick/OnFinalize 等生命周期钩子。"
---

# ScreenBase

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenBase`
**Base:** 无（抽象基类）
**Source:** `bannerlord-1.5.3/TaleWorlds.ScreenSystem/ScreenBase.cs`

## 概述

`ScreenBase` 是 Bannerlord 所有界面的基类——地图界面、任务界面、菜单、设置、你自己写的 mod 界面都在它的继承树里。它管理**图层栈**（`Layers`）、**组件**（`ScreenComponent`）、激活/暂停/初始化/结束四种状态，并留出 9 个 `protected virtual` 钩子供子类填充。`ScreenManager` 只认识它，不认识任何具体界面类型。

## 心智模型

**状态机（由 ScreenManager 驱动）**

```
PushScreen   → HandleInitialize() → OnInitialize() → HandleActivate() → OnActivate() → OnActivateAllLayers() → HandleResume() → OnResume()
PopScreen    → HandlePause() → OnPause() → HandleDeactivate() → OnDeactivate() → DeactivateAllLayers() → HandleFinalize() → OnFinalize()
```

四个只读属性标记状态：`IsInitialized`、`IsActive`、`IsPaused`、`IsFinalized`。判断当前该不该干活，看它们比看自己的字段可靠。

**图层栈**

`Layers` 是 `MBReadOnlyList<ScreenLayer>`，一个界面可以叠多层（例如背景层 + 主 UI 层 + 提示层）。`AddLayer` / `RemoveLayer` / `HasLayer` / `FindLayer<T>()` / `FindLayer<T>(name)` 管理。`SetLayerCategoriesState(string[] categoryIds, bool isActive)` 及其两个变体按**图层类别 id** 批量开关——这是官方实现「界面内多个面板互斥显示」的方式。

**焦点**

`DebugInput` 是输入上下文；焦点由 [ScreenManager](../ScreenManager) 在所有图层的 `FocusTest()` 里竞争决定。`OnFocusChangeOnGameWindow(bool focusGained)` 通知窗口焦点变化。

**常见误用与坑**

1. **在构造函数里建 UI**。构造函数在 `new` 时就跑，此时 `ScreenManager` 还没把它压栈（`TopScreen` 还是旧的）。UI 构建放 `OnInitialize`。
2. **在 `OnDeactivate` 里释放资源**。`OnDeactivate` 只是「不可见」，之后可能还会 `OnActivate` 回来。真正的释放放 `OnFinalize`。
3. **`OnFrameTick` 与 `OnPostFrameTick` 混用**。前者是界面帧更新，后者是渲染后处理（改相机、做后处理特效）。UI 逻辑放前者。
4. **`OnIdleTick` 不是每帧**。它是引擎空闲时的补偿 tick，频率不保证。
5. **图层顺序**：`AddLayer` 的插入顺序 + 图层自身的 localOrder 共同决定渲染与命中优先级。别指望「后加的一定在上面」——全局 order 由 `RefreshGlobalOrder` 统一计算。

## 成员与调用时机

**生命周期钩子（全部 `protected virtual`，子类覆盖）**

- `OnInitialize()`：界面被压栈时。构建 UI 树、加载数据、订阅事件。**只跑一次**。
- `OnFinalize()`：界面被弹出栈时。释放资源、解绑事件。**只跑一次**。
- `OnActivate()` / `OnDeactivate()`：界面进入/离开可见激活态。可能多次（`OnDeactivate` 后再 `OnActivate`）。
- `OnPause()` / `OnResume()`：界面被压在下层 / 回到顶层。可多次。
- `OnFrameTick(float dt)`：界面每帧更新。UI 动画与输入响应。
- `OnPostFrameTick(float dt)`：渲染后的更新。
- `OnIdleTick(float dt)`：空闲补偿 tick。
- `OnReady()`：界面就绪回调。
- `public virtual void UpdateLayout()`：布局重算。分辨率变化时会触发。

**图层管理**

- `MBReadOnlyList<ScreenLayer> Layers`：只读图层列表。
- `void AddLayer(ScreenLayer)` / `void RemoveLayer(ScreenLayer)` / `bool HasLayer(ScreenLayer)`。
- `T FindLayer<T>() where T : ScreenLayer` / `T FindLayer<T>(string name)`：按类型或名字找图层。
- `void ActivateAllLayers()` / `void DeactivateAllLayers()`：批量激活。
- `void SetLayerCategoriesState(string[] categoryIds, bool isActive)`：按类别开关。
- `void SetLayerCategoriesStateAndToggleOthers(string[] categoryIds, bool isActive)`：打开这些、关掉其他。
- `void SetLayerCategoriesStateAndDeactivateOthers(string[] categoryIds, bool isActive)`：同上但语义相反，注意区分。
- `event OnLayerAddedEvent OnAddLayer` / `event OnLayerRemovedEvent OnRemoveLayer`：图层增删事件。

**组件**

- `void AddComponent(ScreenComponent component)`：注册组件。
- `T FindComponent<T>() where T : ScreenComponent`：按类型取组件。
- `public virtual bool MouseVisible { get; set; }`：是否显示鼠标指针。

**状态与焦点**

- `bool IsInitialized` / `IsActive` / `IsPaused` / `IsFinalized`：只读状态。
- `IInputContext DebugInput`：输入上下文。
- `public virtual void OnFocusChangeOnGameWindow(bool focusGained)`：窗口焦点变化。

## 真实示例

```csharp
public class MySupplyScreen : ScreenBase
{
    private GauntletLayer _gauntletLayer;
    private SupplyVM _viewModel;

    protected override void OnInitialize()
    {
        // UI 构建放这里，不放构造函数
        _viewModel = new SupplyVM();
        _gauntletLayer = new GauntletLayer("my_supply_layer", 0);
        var movie = _gauntletLayer.LoadMovie("my_supply_ui", _viewModel);
        AddLayer(_gauntletLayer);
        OnAddLayer += OnLayerAdded;
    }

    protected override void OnFinalize()
    {
        OnAddLayer -= OnLayerAdded;
        if (_gauntletLayer != null)
            _gauntletLayer.ReleaseMovie(_gauntletLayer.GetMovieIdentifier("my_supply_ui"));
        _viewModel = null;
        base.OnFinalize();
    }

    protected override void OnFrameTick(float dt)
    {
        base.OnFrameTick(dt);
        if (_viewModel != null) _viewModel.Tick(dt);
    }

    public override bool MouseVisible { get => true; set { } }

    private void OnLayerAdded(ScreenLayer addedLayer)
    {
        // 多层面板互斥：点开其中一个就关掉同类别其他面板
        SetLayerCategoriesStateAndDeactivateOthers(new[] { "supply_category" }, true);
    }
}
```

## 风险与边界

- **不序列化**：界面状态不进存档。读档后所有界面重建。
- **状态机由 ScreenManager 驱动**：不要在自己的逻辑里直接调 `OnFinalize` 等（它们是 `protected`）或 `HandleXxx`（内部）。通过 `PushScreen` / `PopScreen` 改变状态。
- **资源生命周期**：`GauntletLayer` 的 movie 必须在 `OnFinalize` 里 `ReleaseMovie`，否则长时间切换界面会累积显存占用。
- **事件订阅泄漏**：`OnAddLayer` / `OnRemoveLayer` 在界面存活期间反复触发，订阅前先退订旧处理器。
- **跨域方向**：ScreenSystem 层可以引用 GauntletUI；CampaignSystem 与 Mission 层不能反向引用它。想从战役逻辑弹界面，通过事件通知让界面侧模块执行 [ScreenManager](../ScreenManager) 的调用。

## 依赖关系

- [ScreenManager](../ScreenManager) — 栈的拥有者与生命周期驱动者
- [GauntletLayer](../../engine/GauntletLayer) — 最常用的图层实现，负责 UIContext 与命中测试
- [MissionState](../../mission/MissionState) — 任务界面的栈序由任务状态决定