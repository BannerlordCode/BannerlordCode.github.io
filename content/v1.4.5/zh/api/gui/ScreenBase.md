---
title: "ScreenBase"
description: "TaleWorlds.ScreenSystem 中由 ScreenManager 栈驱动的抽象屏幕基类，负责屏幕生命周期、ScreenLayer 所有权和 UI 更新边界。"
---
# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public abstract class ScreenBase`  
**Base:** `object`  
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenBase.cs`

## 一句话职责

`ScreenBase` 把一个可被 `ScreenManager` 压入屏幕栈的 UI 场景组织成生命周期 hook 和有序 `ScreenLayer` 集合；派生屏幕在这些 hook 中创建 ViewModel、Gauntlet movie、场景层和输入处理。

## 心智模型

它不是一个可以由 mod 随意构造并手动驱动的方法集合，而是 UI 栈中的资源拥有者。构造函数只建立组件和 layer 列表，初始状态是未初始化、inactive、paused。`SetAndActivateRootScreen`、`PushScreen` 或 `CleanAndPushScreen` 通过内部 handle 驱动 `OnInitialize`、`OnActivate`、`OnDeactivate`、`OnFinalize` 等 protected hook。

初始化只发生一次，激活和停用可以重复。另一个屏幕压栈后，旧屏幕通常是 paused + inactive 但仍留在栈中；`PopScreen` 会让它重新激活并恢复。激活会先激活 layer，并把 `OnReady` 延迟到下一次屏幕帧；最终化是终点，不能把旧屏幕或旧 layer 带回下一帧。

## 何时使用 / 何时不要使用

- 需要全屏页面、地图视图或拥有输入 layer 的 UI 状态时继承 `ScreenBase`：在 `OnInitialize` 创建资源，在 `OnActivate` 恢复可见性/焦点，在 `OnDeactivate` 暂停，在 `OnFinalize` 释放。
- Gauntlet 页面让 `GauntletLayer` 承载 [ViewModel](../../core-extra/ViewModel)；屏幕只负责二者寿命和挂载，不要把屏幕变成数据模型。
- 只需要跨屏幕提示或输入覆盖时，考虑 [ScreenManager](../ScreenManager) 的 `AddGlobalLayer`；不要为一个覆盖层复制完整屏幕。
- 不要调用内部 `HandleInitialize`、`HandleActivate`、`HandleFinalize`，也不要从后台线程改变栈；使用 `PushScreen`、`PopScreen` 或 `CleanAndPushScreen`。
- 不要重新挂载已 `RemoveLayer` 或已最终化的 layer。`RemoveLayer` 会停用并最终化它，不是暂时隐藏；暂时切换使用 layer 状态或分类 API。

## 生命周期与更新顺序

| 阶段 | `ScreenBase` 行为 | 派生类时机 |
|---|---|---|
| 构造 | 建立 `_components`、`_layers`；`IsActive=false`、`IsPaused=true`。 | 只保存构造参数，不依赖引擎或 UI。 |
| 初始化 | `HandleInitialize` 只进入一次 `OnInitialize`。 | 创建 Gauntlet/场景 layer、ViewModel 和一次性订阅。 |
| 激活 | 设为 active，激活所有未激活 layer，再调用 `OnActivate`；下一次 `FrameTick` 调用一次 `OnReady`。 | 加载 movie、激活 ViewModel、设置焦点。 |
| 暂停/恢复 | 压入新屏幕时旧屏幕暂停并停用；弹出后前一个屏幕激活并恢复。 | 处理临时覆盖，不要当作销毁。 |
| 停用 | 先停用 layer，再调用 `OnDeactivate`。 | 停止高频 UI 工作，保留可回退资源。 |
| 帧更新 | active 屏幕运行 `OnFrameTick`、`OnPostFrameTick`；前一个屏幕可运行 idle tick。 | 只做 UI 帧工作并检查依赖仍有效。 |
| 最终化 | 调用 `OnFinalize`，最终化剩余 layer，清空 layer 事件并设 `IsFinalized=true`。 | 解除订阅、释放 movie 和资源；之后不再访问。 |

## 状态、组件与 Layer

- `IsInitialized`、`IsActive`、`IsPaused`、`IsFinalized` 是只读生命周期观察点，不是绕过管理器改变状态的开关。
- `Layers` 是有序的 `MBReadOnlyList<ScreenLayer>`；管理器将顶部屏幕层与全局层合并为 `SortedLayers`。
- `OnAddLayer` 和 `OnRemoveLayer` 观察 layer 集合变化；最终化时会清空，不能当作跨屏幕事件总线。
- `AddComponent` / `FindComponent<T>` 管理屏幕组件。`AddLayer` 拒绝 null、已最终化或重复 layer；active 屏幕添加 layer 时会立即激活并触发 `OnAddLayer`。
- `HasLayer`、`FindLayer<T>` 和 `FindLayer<T>(string name)` 找不到时返回 null。`RemoveLayer` 会停用、最终化、移出集合、触发 `OnRemoveLayer` 并刷新全局顺序。
- `SetLayerCategoriesState(string[] categoryIds, bool isActive)` 只切换名称命中的 layer；`SetLayerCategoriesStateAndToggleOthers` 对未命中 layer 取反；`SetLayerCategoriesStateAndDeactivateOthers` 只停用未命中 layer。

## 真实示例：CustomBattleScreen 的 Gauntlet 生命周期

以下取自 `Modules.CustomBattle/.../CustomBattleScreen.cs`：

```csharp
private void LoadMovie()
{
    if (!_isMovieLoaded)
    {
        _gauntletMovie = _gauntletLayer.LoadMovie("CustomBattleScreen", _dataSource);
        _isMovieLoaded = true;
    }
}

protected override void OnInitialize()
{
    _dataSource = new CustomBattleVM(_customBattleState);
    _gauntletLayer = new GauntletLayer("CustomBattle", 1, true);
    LoadMovie();
    AddLayer(_gauntletLayer);
}

protected override void OnFinalize()
{
    UnloadMovie();
    RemoveLayer(_gauntletLayer);
    _dataSource = null;
    _gauntletLayer = null;
    base.OnFinalize();
}
```

真实实现还在 `OnActivate` 重新加载 movie、让 ViewModel active，并用 `ScreenManager.TrySetFocus` 设置 layer 焦点；`OnDeactivate` 卸载 movie 并停用 ViewModel。这个顺序确保 UI 资源由屏幕拥有，而不是由全局 manager 猜测。

## 真实调用路径

`Modules.SandBox/.../MapScreen.cs` 的 `OpenOptions` 调用 `ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false))`。管理器会暂停地图屏幕、初始化并激活 options 屏幕；返回时 `PopScreen` 最终化 options，再恢复地图屏幕。mod 应调用管理器入口，不要直接调用派生类生命周期回调：

```csharp
public void OpenOptionsFromMap()
{
    if (ScreenManager.TopScreen is MapScreen)
    {
        ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false));
    }
}
```

## 依赖图

- **上游：** [ScreenManager](../ScreenManager) 持有栈并驱动生命周期；[MBSubModuleBase](../../core/MBSubModuleBase) 或游戏状态 listener 通常触发 UI 模块接入。
- **屏幕内部：** [ScreenLayer](../ScreenLayer) 提供输入、焦点和渲染单元；[ScreenComponent](../ScreenComponent) 提供屏幕级辅助组件。
- **下游：** [GauntletLayer](../../engine/GauntletLayer) 承载 movie，[ViewModel](../../core-extra/ViewModel) 提供绑定状态和命令；二者必须在屏幕最终化前清理。
- **边界：** [UI 生命周期崩溃边界](../../../architecture/crash-boundary) 说明主线程、焦点和最终化失败。

## 风险与清理边界

- `AddLayer(null)`、加入已最终化 layer 或重复加入同一 layer 会触发断言。
- `RemoveLayer` 会立即最终化 layer；之后不要调用它的 movie、Input 或事件，也不要让 ViewModel 持有已释放控件。
- `ScreenBase` 最终化会清空 layer 事件；派生类仍必须在 `OnFinalize` 取消 Campaign、引擎或自定义事件订阅。
- `OnFrameTick` 只在 active 时运行；异步回调必须确认屏幕仍存活，并在最终化后停止投递。
- 屏幕栈和 layer 变更属于主线程 UI 所有权。Gauntlet movie 必须在 layer 最终化前 `ReleaseMovie`，否则 `GauntletLayer` 会断言。

## 导航

- **↑ Parent：** [GUI API 目录](../)
- **↔ Sibling：** [ScreenManager](../ScreenManager)、[ScreenLayer](../ScreenLayer)、[ScreenComponent](../ScreenComponent)
- **Children / 相关类型：** [GauntletLayer](../../engine/GauntletLayer)、[ViewModel](../../core-extra/ViewModel)、[GameStateScreenManager](../../mission-ext/GameStateScreenManager)
- **上游入口：** [MBSubModuleBase](../../core/MBSubModuleBase)
