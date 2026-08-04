---
title: "ScreenManager"
description: "TaleWorlds.ScreenSystem 的静态屏幕协调器，维护顶部屏幕、屏幕栈、全局层、输入焦点和 UI 主线程切换。"
---
# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public static class ScreenManager`  
**Base:** `object`  
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs`

## 一句话职责

`ScreenManager` 把游戏状态产生的 `ScreenBase` 实例组织成主线程屏幕栈，并协调顶部屏幕的 layer、全局 layer、输入命中、焦点、布局和 tick。

## 心智模型

这是静态协调器，不存在 `new ScreenManager()` 实例，也没有供 mod 直接写入的公开屏幕列表。引擎启动阶段调用 `Initialize(IScreenManagerEngineConnection)` 注入窗口/输入桥；栈最后一项是 `TopScreen`，下面的屏幕可以保留但处于 paused/inactive。

每个栈操作都是完整生命周期事务。`PushScreen` 暂停并停用旧顶部，再初始化、激活和恢复新屏幕；`PopScreen` 停用并最终化旧顶部，再恢复前一个屏幕；`CleanAndPushScreen` 先最终化全部旧栈，再建立新屏幕。它们都要求主线程，因为一次切换会同时改变 ViewModel、Gauntlet movie、焦点和引擎 layer 状态。

## 何时使用 / 何时不要使用

- 可返回的 options、百科、存档/读档或自定义页面使用 `PushScreen`。
- 关闭当前页面并返回使用 `PopScreen`；不要手动调用 `TopScreen.OnDeactivate` 或反射修改栈。
- 需要不可回退的新根流程使用 `CleanAndPushScreen`；不要用它做临时弹层。
- 只需跨屏幕输入覆盖时使用 `AddGlobalLayer`；不要把同一个 layer 挂进多个屏幕。
- `TopScreen` 和 `SortedLayers` 是观察入口，不是替换栈的写入口。

## 栈操作时序

| API | 旧栈处理 | 新屏幕处理 | 适用语义 |
|---|---|---|---|
| `SetAndActivateRootScreen(screen)` | 要求 `TopScreen == null`，否则抛异常。 | 加入、初始化、激活、恢复并触发 `OnPushScreen`。 | 建立第一个根屏幕。 |
| `PushScreen(screen)` | 暂停旧顶部，若 active 则停用；不最终化、不移除。 | 加入、初始化、激活、恢复并触发 `OnPushScreen`。 | 可回退的临时页面。 |
| `PopScreen()` | 暂停、停用、最终化当前顶部，触发 `OnPopScreen` 并移除。 | 有前一个屏幕时激活并恢复它。 | 关闭当前页面。 |
| `CleanAndPushScreen(screen)` | 从栈顶到底部暂停、停用、最终化并移除全部屏幕，再清理内存。 | 加入并完整初始化、激活、恢复。 | 不允许回退的新根流程。 |
| `CleanScreens()` | 清空全部屏幕并最终化。 | 不加入新屏幕。 | 退出或重置。 |
| `ReplaceTopScreen(screen)` | 最终化并移除旧顶部，不保留返回路径。 | 初始化、激活、恢复替代屏幕。 | 直接替换顶部。 |

这些 API 是同步切换，不是异步队列。源码在 `PushScreen`、`PopScreen`、`CleanAndPushScreen` 和清理路径检查 `TWParallel.IsMainThread()`；错误线程会触发 failed assert。

## TopScreen、SortedLayers 与全局 Layer

- `TopScreen` 是私有栈最后一项的只读视图；其 layer 变化会让排序缓存失效并重新计算。
- `SortedLayers` 合并顶部屏幕层与全局层并排序；输入命中、焦点和 tick 都依赖它。
- `FocusedLayer` 是当前键鼠/手柄焦点层；`FirstHitLayer` 是本输入帧首先命中的层，二者都可能因停用/最终化而失效。
- `AddGlobalLayer(GlobalLayer layer, bool isFocusable)` 插入全局集合并立即激活 layer；`RemoveGlobalLayer` 移除并停用。全局层的 movie、ViewModel 和事件仍由拥有者释放。
- `Scale`、`UsableArea`、`IsLateTickInProgress` 是布局/渲染观察点；不要为了打开页面重复调用引擎桥接初始化。

## Tick 与观察事件

`Tick(float dt)` 处理全局 early tick、输入更新、顶部 `FrameTick`、前一个屏幕的 idle tick、排序 layer tick、全局 layer tick、late update 和顶部 post-frame tick。`LateTick(float dt)` 处理 active、未最终化 layer 的 render tick，并以 `IsLateTickInProgress` 标记阶段。`OnPushScreen` 和 `OnPopScreen` 只是观察事件，不能替代 `ScreenBase.OnInitialize` / `OnFinalize` 的资源 hook。

## 真实获取、初始化与注册路径

引擎在启动阶段调用 `ScreenManager.Initialize(IScreenManagerEngineConnection)`；mod 不应自行构造连接或重复初始化。源码 `Modules.Native/.../ViewSubModule.cs` 在加载时订阅 `OnPushScreen`，卸载时解除，并从真实 `ViewCreator` 工厂压入 options screen：

```csharp
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

protected override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    ScreenManager.OnPushScreen += OnScreenManagerPushScreen;
}

private void OnScreenManagerPushScreen(ScreenBase pushedScreen)
{
    Debug.Print("Pushed screen: " + pushedScreen.GetType().Name);
}

protected override void OnSubModuleUnloaded()
{
    ScreenManager.OnPushScreen -= OnScreenManagerPushScreen;
    base.OnSubModuleUnloaded();
}

private void OpenOptionsFromMainMenu()
{
    ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(fromMainMenu: true));
}
```

不需要也不应该先获取 manager 实例；地图 `OpenOptions`、`OpenSaveLoad` 也使用同一 `PushScreen` 路径。

## 依赖图

- **上游：** [IScreenManagerEngineConnection](../IScreenManagerEngineConnection) 是引擎连接契约；[MBSubModuleBase](../../core/MBSubModuleBase) 的模块生命周期承载 UI 注册。
- **栈成员：** [ScreenBase](../ScreenBase) 执行单屏幕生命周期；[ScreenLayer](../ScreenLayer) 提供输入、焦点和渲染排序。
- **下游：** [GauntletLayer](../../engine/GauntletLayer) 承载 movie，[ViewModel](../../core-extra/ViewModel) 通过当前 screen 参与绑定和命令。
- **边界：** [UI 生命周期崩溃边界](../../../architecture/crash-boundary) 说明主线程、焦点和清理顺序。

## 风险与清理边界

- `PushScreen`、`PopScreen`、`CleanAndPushScreen` 和 `CleanScreens` 要求主线程；跨线程操作可能破坏 TopScreen、焦点和输入排序。
- `SetAndActivateRootScreen` 在已有 `TopScreen` 时抛出异常；它不是普通导航入口。
- `PopScreen`、`CleanScreens`、`CleanAndPushScreen` 和 `ReplaceTopScreen` 都最终化被移除屏幕。不要继续使用其 layer、movie 或 ViewModel。
- 静态 `OnPushScreen` / `OnPopScreen` 订阅必须在模块卸载时解除，否则会出现重复回调和失效引用。
- `TopScreen` 在启动、清栈和 manager 最终化后可能为 null；缓存的 `FocusedLayer` 也必须在切换回调中重新确认。
- `AddGlobalLayer` 激活 layer，`RemoveGlobalLayer` 只停用并移除；拥有者仍必须释放全局 layer 的资源。

## 导航

- **↑ Parent：** [GUI API 目录](../)
- **↔ Sibling：** [ScreenBase](../ScreenBase)、[ScreenLayer](../ScreenLayer)、[IScreenManagerEngineConnection](../IScreenManagerEngineConnection)
- **Children / 相关类型：** [GauntletLayer](../../engine/GauntletLayer)、[ViewModel](../../core-extra/ViewModel)、[GameStateScreenManager](../../mission-ext/GameStateScreenManager)
- **上游入口：** [MBSubModuleBase](../../core/MBSubModuleBase)
