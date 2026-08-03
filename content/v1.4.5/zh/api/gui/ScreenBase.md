---
title: "ScreenBase"
description: "TaleWorlds.ScreenSystem 中所有可压入屏幕的生命周期、Layer 所有权和 UI 更新边界。"
---

# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public abstract class ScreenBase`  
**Base:** 无  
**Source:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenBase.cs`

## 一句话职责

`ScreenBase` 是一个屏幕的生命周期和 Layer 容器：`ScreenManager` 决定它何时进入栈、暂停、激活或最终化，派生屏幕在受保护的回调中创建 UI、场景和 `ViewModel`，而 `ScreenBase` 负责把这些 Layer 按顺序纳入输入、更新和渲染循环。

## 心智模型

它不是一个可直接 `new` 出来再随意调用的方法集合，而是 UI 栈中的一个拥有者。构造函数只建立组件和 Layer 列表，初始状态是 inactive、paused、未初始化；只有 `ScreenManager` 的 `SetAndActivateRootScreen`、`PushScreen` 或 `CleanAndPushScreen` 等入口会触发内部 Handle。Handle 再调用你的 `OnInitialize`、`OnActivate`、`OnDeactivate`、`OnFinalize` 等 protected override。

初始化后屏幕可能多次激活/停用，但最终化是终点。激活会先激活 Layer，并把 `OnReady` 延迟到下一次屏幕帧；停用会先停用 Layer。屏幕在栈底被另一个屏幕盖住时通常是 paused + inactive，而不是已经销毁；`PopScreen` 回退时它会重新激活并恢复。`ScreenManager.Tick` 只对当前顶层执行屏幕帧回调，同时让前一个屏幕执行 idle tick，因此不要把后台业务或战役逻辑藏在 UI 屏幕的 tick 中。

## 何时使用 / 何时不要使用

- 需要全屏页面、地图视图或拥有一个或多个输入 Layer 的 UI 状态时，继承 `ScreenBase`，在 `OnInitialize` 创建长期资源，在 `OnActivate` 恢复可见性/焦点，在 `OnDeactivate` 暂停，在 `OnFinalize` 释放。
- Gauntlet 页面通常由 `GauntletLayer` 承载 `ViewModel`；屏幕只负责两者的寿命和挂载，属性绑定与命令放进 `ViewModel`，不要让 `ScreenBase` 变成数据模型。
- 只想显示临时提示或增加全局输入覆盖层时，考虑 `ScreenManager.AddGlobalLayer`；不要为了一个弹层复制一个完整屏幕。
- 不要直接调用内部 `HandleInitialize`、`HandleActivate` 或 `HandleFinalize`，也不要从后台线程改变屏幕栈。使用 `ScreenManager.PushScreen`、`PopScreen` 或 `CleanAndPushScreen`，让管理器维持栈和 TopScreen 一致。
- 不要把已 `RemoveLayer` 或已最终化的 Layer 重新挂回屏幕；`RemoveLayer` 会立即停用并最终化它，不是“暂时隐藏”。暂时切换可见性应使用 Layer 自身状态或 `SetLayerCategoriesState`。

## 生命周期与更新顺序

| 阶段 | `ScreenBase` 行为 | 派生类应做什么 |
| --- | --- | --- |
| 构造 | 建立 `_components`、`_layers`；`IsActive=false`、`IsPaused=true`。 | 只保存构造参数，不依赖引擎或 UI 已就绪。 |
| 初始化 | `HandleInitialize` 先将 `IsInitialized` 设为 true，再调用 `OnInitialize`。 | 创建 `GauntletLayer`、场景 Layer、ViewModel，并在此完成一次性订阅。 |
| 激活 | 设 `IsActive=true`，反向激活 Layer，再调用 `OnActivate`；下一次 `FrameTick` 先调用一次 `OnReady`。 | 加载 movie、设置 ViewModel active state、设置焦点；不要在构造函数做这些事。 |
| 暂停/恢复 | 栈压入新屏幕时旧屏幕 `HandlePause` 后停用其 Layer；回退时 `HandleResume` 再激活 Layer。 | 处理短暂覆盖，不要把暂停当作最终化。 |
| 停用 | 设 `IsActive=false`，反向停用 Layer，再调用 `OnDeactivate`。 | 停止声音、movie 和高频视图更新，但保留可在回退时复用的对象。 |
| 帧更新 | active 屏幕运行 `OnFrameTick`、Layer tick、`OnPostFrameTick`；前一个屏幕可运行 `OnIdleTick`。 | 只做 UI 帧工作，并检查依赖场景/VM 是否仍有效。 |
| 最终化 | 调用 `OnFinalize`，再按反向顺序最终化剩余 Layer，清空 Layer 事件并将 `IsFinalized=true`。 | 解除事件、卸载 movie、移除/释放资源；完成后不再访问屏幕或其 Layer。 |

## 状态、组件与 Layer

### 状态与事件

- `IsInitialized`、`IsActive`、`IsPaused`、`IsFinalized` 是只读生命周期观察点。它们适合在事件回调或调试保护中判断阶段，不是绕过管理器强行改变状态的开关。
- `Layers` 是按 Layer 顺序排序的 `MBReadOnlyList<ScreenLayer>`。屏幕管理器会把当前 `TopScreen.Layers` 与全局 Layer 合并成 `SortedLayers`，再参与输入和渲染排序。
- `MouseVisible` 可由派生屏幕覆盖，用来表达当前屏幕的鼠标策略。
- `OnAddLayer` 和 `OnRemoveLayer` 在 Layer 加入/移除时通知 `ScreenManager` 或其他观察者。最终化时事件会被清空，因此不要把它当成跨屏幕的永久事件总线。

### 添加、查找和移除

- `AddComponent(ScreenComponent component)` / `FindComponent<T>()` 管理屏幕级组件。
- `AddLayer(ScreenLayer layer)` 拒绝 null、已最终化或重复 Layer，并在屏幕已 active 时立即激活新 Layer；添加后会排序并触发 `OnAddLayer`。
- `HasLayer(ScreenLayer layer)`、`FindLayer<T>()` 和 `FindLayer<T>(string name)` 用于复用已拥有的 Layer。找不到时返回 null，调用方要先判断。
- `RemoveLayer(ScreenLayer layer)` 会在 active 屏幕上先停用，再调用 Layer 的最终化，移出列表，触发 `OnRemoveLayer`，并刷新全局顺序。它没有“detach but keep alive”语义。
- `SetLayerCategoriesState(string[] categoryIds, bool isActive)` 只切换名称命中的 Layer；`SetLayerCategoriesStateAndToggleOthers` 会把未命中的 Layer 取反；`SetLayerCategoriesStateAndDeactivateOthers` 会停用未命中的 Layer。三个 API 都依赖稳定的 Layer 名称，不能把它们当作屏幕生命周期替代品。

## 与 Gauntlet 和 ViewModel 的关系

典型 UI 屏幕由 `ScreenBase` 持有 `GauntletLayer`，由该 Layer 持有或绑定 `ViewModel`。源码中的 `CustomBattleScreen` 在 `OnInitialize` 创建 `CustomBattleVM` 和 `GauntletLayer`，加载 movie 后 `AddLayer`；在 `OnActivate` 恢复 movie、激活 ViewModel 并把 Layer 交给 `ScreenManager.TrySetFocus`；在 `OnDeactivate` 停止 movie 和 ViewModel；在 `OnFinalize` 卸载 movie、`RemoveLayer` 并清空引用。这个顺序说明 UI 资源的所有权在屏幕，而不是由全局 manager 猜测。

## 真实调用路径

`MapScreen.OpenOptions` 的源码调用是 `ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false))`。这条路径先让 manager 暂停并停用地图屏幕，再初始化、激活并恢复新的 options 屏幕；用户返回时 `PopScreen` 最终化 options 屏幕，然后恢复地图屏幕。模组应调用同样的屏幕管理入口，而不是自行调用派生类的生命周期回调：

```csharp
public void OpenOptionsFromMap()
{
    if (ScreenManager.TopScreen is MapScreen)
    {
        ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false));
    }
}
```

## 风险与清理边界

- `OnFinalize` 之后，`IsFinalized` 永久为 true；继续访问 `GauntletLayer`、场景、`ViewModel` 或从旧屏幕订阅事件，会把已卸载对象带回下一次 UI 帧。
- `RemoveLayer` 会最终化 Layer。若派生类在 `OnFinalize` 移除自己的 Layer，应同时释放对 Layer 和 ViewModel 的引用；不要在回调之后再次 `AddLayer`。
- Layer 只要被添加到 active 屏幕，就会立即激活；添加包含引擎资源的 Layer 前必须在主线程、正确的 UI 阶段完成初始化。管理器的栈 API 会检查主线程，Layer 变更也应遵守同一主线程所有权。
- ViewModel 的 `OnFinalize`、Gauntlet movie 卸载、事件解除必须和屏幕的最终化配对。仅把字段设为 null 不能解除引擎回调或输入注册。
- 屏幕停用不等于 finalization。不要在 `OnDeactivate` 销毁只能在回退时复用的资源，也不要在 inactive 屏幕继续读取已关闭的 scene 或输入状态。

## 依赖图

- **上游：** [ScreenManager](./ScreenManager) owns the stack and calls this page's lifecycle handles; [ScreenLayer](./ScreenLayer) supplies the input/render units that this screen owns.
- **下游：** [GauntletLayer](../engine/GauntletLayer) hosts the movie and [ViewModel](../core-extra/ViewModel) supplies bound state and commands; their cleanup must finish before the screen is finalized.
- **边界：** [UI 生命周期崩溃边界](../../architecture/crash-boundary) covers main-thread, focus, and finalization failures.

## 参见与导航

- [GUI API 目录](../_index)
- [ScreenManager：屏幕栈、TopScreen 与全局 Layer](./ScreenManager)
- [GauntletLayer：把 movie 和输入挂到屏幕](../engine/GauntletLayer)
- [ViewModel：绑定数据与命令](../core-extra/ViewModel)
- [UI 生命周期崩溃边界](../../architecture/crash-boundary)
