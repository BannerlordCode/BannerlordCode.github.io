---
title: "ScreenManager"
description: "TaleWorlds.ScreenSystem 的静态屏幕栈、TopScreen、全局 Layer 与主线程切换契约。"
---

# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public static class ScreenManager`  
**Base:** 无  
**Source:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs`

## 一句话职责

`ScreenManager` 是整个 UI 的静态所有者：它维护屏幕栈，决定 `TopScreen`，把顶层屏幕的 Layer 与全局 Layer 合并为输入/渲染顺序，并把 push、pop、暂停、恢复和最终化串成一致的主线程状态机。

## 心智模型

不要寻找一个 `new ScreenManager()` 实例；这是静态入口，由引擎在启动时通过 `EngineScreenManager.Initialize` 注入 `IScreenManagerEngineConnection`。屏幕自身由 `ScreenManager` 的私有列表持有，列表最后一项是 `TopScreen`。顶层屏幕负责当前 UI，下面的屏幕可以保留在栈中但处于 paused/inactive 状态。

每个栈变更都是一次生命周期事务，而不只是修改列表：`PushScreen` 暂停并停用旧顶层，再初始化、激活和恢复新屏幕；`PopScreen` 停用并最终化旧顶层，再恢复前一个屏幕；`CleanAndPushScreen` 先从栈顶到底部暂停、停用并最终化全部屏幕，再建立新屏幕。三个入口都要求主线程，因此后台事件应把工作派发回游戏主线程后再切换 UI。

## 何时使用 / 何时不要使用

- 打开一个可以返回的 options、encyclopedia、保存/加载或自定义页面时使用 `PushScreen`；它保留当前页面，适合临时覆盖。
- 完成流程并返回上一页时使用 `PopScreen`；不要手动调用 `TopScreen.OnDeactivate` 或从反射中修改栈。
- 需要从一个干净根页面开始时使用 `CleanAndPushScreen`。它会摧毁栈内所有屏幕，不能用于希望用户返回原页面的弹层。
- 只需在已有屏幕上显示 Gauntlet 或输入覆盖时，使用该屏幕的 `AddLayer`，或使用 `AddGlobalLayer` 管理跨屏幕 Layer；不要把同一个 Layer 同时挂进多个屏幕。
- 读取当前屏幕可用 `TopScreen`，读取排序后的输入/渲染 Layer 可用 `SortedLayers`；这些是观察结果，不是手动替换栈的入口。

## 栈操作的时序

| API | 旧栈处理 | 新屏幕处理 | 适用语义 |
| --- | --- | --- | --- |
| `SetAndActivateRootScreen(screen)` | 要求 `TopScreen == null`，否则抛异常。 | 加入栈，Initialize、Activate、Resume，并触发 `OnPushScreen`。 | 进程/游戏状态刚建立根屏幕时。 |
| `PushScreen(screen)` | 对旧顶层 Pause；若 active 则 Deactivate，但不 Finalize、不移除。 | 加入栈，Initialize、Activate、Resume，并触发 `OnPushScreen`。 | 可回退的临时页面。 |
| `PopScreen()` | Pause、Deactivate、Finalize 当前顶层，触发 `OnPopScreen` 并移除。 | 若仍有屏幕，Activate 并 Resume 新顶层。 | 关闭当前页面并回退。 |
| `CleanAndPushScreen(screen)` | 从栈顶到底部 Pause、Deactivate、Finalize、移除所有屏幕，并执行内存清理。 | 加入并完整 Initialize、Activate、Resume。 | 不允许回退的全新根流程。 |
| `ReplaceTopScreen(screen)` | Finalize 并移除旧顶层，然后压入新屏幕。 | Initialize、Activate、Resume。 | 替换当前顶层而不保留它。 |

这些方法不是异步队列。源码在 `PushScreen`、`PopScreen`、`CleanAndPushScreen` 和清理路径上检查 `TWParallel.IsMainThread()`；错误线程会触发 failed assert。把 `TopScreen` 的变化当作在同一主线程调用中完成，随后才让 `OnPushScreen` / `OnPopScreen` 观察者处理事件。

## TopScreen、SortedLayers 与全局 Layer

- `TopScreen` 是栈最后一项的只读属性。它会随栈集合变化更新，并接收 `OnAddLayer` / `OnRemoveLayer` 观察以刷新排序。
- `SortedLayers` 将 `TopScreen.Layers` 与 `_globalLayers` 合并并按 Layer 排序。输入命中、focus 和 Tick 都依赖它，因此在同一帧反复增删 Layer 会改变输入顺序。
- `FocusedLayer` 是当前键鼠/手柄焦点 Layer；`FirstHitLayer` 是输入命中结果。它们会随 active/finalized 状态变化，不应被当作永久引用。
- `AddGlobalLayer(GlobalLayer layer, bool isFocusable)` 按 `InputRestrictions.Order` 插入并立即激活其 Layer；`RemoveGlobalLayer` 移除并停用。全局 Layer 要跨屏幕存在时才使用，并在模块卸载或功能关闭时成对移除。
- `Scale`、`UsableArea`、`IsLateTickInProgress` 是渲染/布局观察点。`EngineInterface` 和 `Initialize(IScreenManagerEngineConnection)` 属于引擎桥接，不是普通 mod 为了打开页面而重复初始化的 API。

## 生命周期 Tick 与观察事件

`Tick(float dt)` 先处理全局 Layer 的 early tick，再更新输入和当前屏幕；随后运行顶层 `FrameTick`、前一个屏幕的 idle tick、排序 Layer 的 tick、全局 Layer 的 tick、late update 和顶层 post-frame tick。`LateTick(float dt)` 再处理 active、未最终化 Layer 的渲染 tick，并以 `IsLateTickInProgress` 标记阶段。不要在 `OnPushScreen` 或 Layer 事件里假设一个后台线程可以安全地立刻改栈。

`OnPushScreen` 和 `OnPopScreen` 是屏幕生命周期观察事件。订阅者应只记录或协调外部资源，并在对应模块卸载时解除订阅；它们不是替代 `ScreenBase.OnInitialize` / `OnFinalize` 的初始化钩子。

## 真实获取、初始化与注册路径

`ScreenManager` 的引擎连接由 `TaleWorlds.Engine.EngineScreenManager` 在引擎初始化阶段注入：

```csharp
internal static void Initialize()
{
    ScreenManager.Initialize(new ScreenManagerEngineConnection());
}
```

普通 UI 代码直接使用静态入口。源码中的 `ViewSubModule` 在模块加载时注册 `OnPushScreen`，在模块卸载时解除；这才是观察屏幕变化的真实注册方式：

```csharp
protected override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    ScreenManager.OnPushScreen += OnScreenManagerPushScreen;
}

protected override void OnSubModuleUnloaded()
{
    ScreenManager.OnPushScreen -= OnScreenManagerPushScreen;
    base.OnSubModuleUnloaded();
}
```

页面打开则沿用 `MapScreen.OpenOptions` 的真实调用：`ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false))`。这里不需要也不应该先“获取 manager 实例”。

## 风险与清理边界

- `CleanAndPushScreen`、`PopScreen` 和 `OnFinalize` 会最终化屏幕及其 Layer；任何缓存的 `TopScreen`、`GauntletLayer` 或 `ViewModel` 引用都必须在 `OnPopScreen`/模块清理时重新验证。
- `PushScreen` 让旧屏幕暂停并停用但仍保留在栈中。旧页面若在 `OnDeactivate` 解除事件、在 `OnActivate` 未重新订阅，就会出现回退后 UI 不响应；反过来不清理则会重复订阅。
- `TopScreen` 可能为 null（启动、清栈或引擎 finalization 后），读取其 Layer 前必须判断；`SortedLayers` 中的 Layer 也可能已 inactive 或 finalized。
- 栈 API 的主线程断言不是可忽略的提示。跨线程 push/pop 可能破坏 TopScreen、焦点和输入排序，最坏情况下在下一帧访问已停用资源并崩溃。
- 全局 Layer 不属于某个屏幕；忘记 `RemoveGlobalLayer` 会把输入限制、焦点或强引用带过整个游戏状态，直到 ScreenManager finalization。
- ScreenManager finalization 会解除内部集合事件、置空屏幕列表和全局 Layer 集合。模块卸载后不要再次调用栈或全局 Layer API。

## 依赖图

- **上游：** [EngineScreenManager](../engine/EngineScreenManager) 注入引擎连接；源码中的模块级订阅者通过本页的静态事件入口注册和解除观察。
- **下游：** [ScreenBase](./ScreenBase) 执行单屏幕生命周期；[GauntletLayer](../engine/GauntletLayer) 和 [ViewModel](../core-extra/ViewModel) 通过当前屏幕参与输入、绑定和渲染。
- **边界：** [UI 生命周期崩溃边界](../../architecture/crash-boundary) 说明主线程、焦点和清理顺序。

## 参见与导航

- [GUI API 目录](../_index)
- [ScreenBase：派生屏幕的生命周期与 Layer 所有权](./ScreenBase)
- [GauntletLayer：UI movie 与输入 Layer](../engine/GauntletLayer)
- [ViewModel：Gauntlet 数据绑定](../core-extra/ViewModel)
- [UI 生命周期崩溃边界](../../architecture/crash-boundary)
