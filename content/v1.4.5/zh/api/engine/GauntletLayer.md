---
title: "GauntletLayer：屏幕层、Movie 与输入生命周期"
description: "v1.4.5 Gauntlet UI 的 ScreenLayer 实现：说明 UIContext、LoadMovie、ReleaseMovie、输入顺序和释放边界。"
---
# GauntletLayer

## 元数据

- **Namespace:** `TaleWorlds.Engine.GauntletUI`
- **Module:** `TaleWorlds.Engine.GauntletUI`
- **Type:** `public class GauntletLayer`
- **Base:** `ScreenLayer`
- **源码:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## 一句话职责

`GauntletLayer` 把一个或多个 Gauntlet Movie 挂到 `ScreenLayer` 的输入、焦点、排序、渲染和销毁生命周期上，并负责维护 `UIContext` 与 Movie 资源的释放顺序；它是屏幕栈中的一层，不是全局 UI 管理器或可以跨 Mission 长期保存的对象。

## 心智模型

它是 UI/Engine 层的屏幕层，不是全局 UI 管理器，也不是 `ViewModel`。构造时创建 `TwoDimensionContext`、`UIContext` 和游戏手柄导航上下文；`LoadMovie` 用一个 `ViewModel` 数据源创建 `GauntletMovieIdentifier`/`IGauntletMovie` 并跟踪它。层每帧参与输入、布局和渲染，`OnFinalize` 会检查是否还有未释放的 Movie。

典型寿命是：创建 layer → 配置 `InputRestrictions`/焦点 → `LoadMovie` → 加入 `ScreenBase` 或 `MissionScreen` → 在资源刷新时释放并重新加载 → 关闭时 `ReleaseMovie`、移除 layer、finalize VM。`UIContext` 和 Movie 依赖 UI 资源表与引擎线程，不能把 layer 或 movie 当作跨屏幕可复用的单例。

## 何时用，何时不用

### 适合使用

- 一个 Screen 或 Mission 需要把 Gauntlet Movie 作为可排序的 `ScreenLayer` 加入屏幕栈。
- 需要通过 `UIContext`、`GamepadNavigationContext`、`InputRestrictions` 或 layer 的 hit-test 参与输入和焦点管理。
- 需要在资源热刷新时保存 Movie 标识、释放旧资源并按原数据源重新加载。

### 不适合使用

- 不要用它替代 `ScreenManager`、`ScreenBase` 或 Campaign/Mission 的生命周期管理。
- 不要只释放 ViewModel 而留下 Movie，也不要只移除 layer 而不调用 `ReleaseMovie`。
- 不要从后台线程加载 Movie、访问 `UIContext` 或更改绑定数据；UI 资源、输入和渲染必须在游戏支持的阶段运行。

## 依赖关系

```text
ViewModel → GauntletLayer → UIContext / IGauntletMovie
                  ↓                 ↓
            ScreenLayer input   Gauntlet resources
                  ↓
          ScreenBase / MissionScreen
```

- 上游：[`ViewModel`](../../core-extra/ViewModel) 提供反射绑定属性、通知和命令；`GauntletMovieIdentifier` 记录 movie 名称、数据源和实例。
- 基类：`ScreenLayer` 提供输入上下文、排序、激活/停用、焦点、tick、hit-test 和 finalize。
- 下游：`UIContext`、`IGauntletMovie`、`TaleWorlds.GauntletUI.Data` 和 TwoDimension 资源把数据源变成界面。
- 宿主：`ScreenBase` 或 [`Mission`](../../mission/Mission) 的屏幕对象负责 Add/Remove layer；它们决定 layer 何时有效。

## 关键成员与时机

| 成员 | 用途 | 时机与副作用 |
|---|---|---|
| `GauntletLayer(string name, int localOrder, bool shouldClear)` | 创建有排序位置的屏幕层。 | 构造时初始化 `UIContext` 和输入/导航桥；必须在游戏 UI 系统已准备时创建。 |
| `UIContext` | 访问 Gauntlet widget 树、事件管理器、缩放和可用区域。 | 由 layer 初始化和 finalize；layer 销毁后不应继续使用。 |
| `GamepadNavigationContext` | 连接焦点 widget 与手柄导航。 | 与当前 layer 的 hit-test 和屏幕顺序相关，不能跨 layer 复用。 |
| `LoadMovie(string, ViewModel)` | 用数据源加载 movie 并返回 `GauntletMovieIdentifier`。 | 该标识必须由同一个 layer 保存并释放；数据源属性必须在 movie 加载前可绑定。 |
| `GetMovieIdentifier(string)` | 按名称找到已跟踪的 movie 标识。 | 找不到时不能假定非空；资源刷新期间标识可能已被释放。 |
| `ReleaseMovie(GauntletMovieIdentifier)` | 释放 movie 并从 layer 跟踪列表中移除。 | 每个成功加载的 movie 都必须释放，否则 `OnFinalize` 会断言并保留资源。 |
| `OnResourceRefreshBegin/End` | 保存旧标识、释放旧 movie，并按数据源重新加载。 | 刷新期间不要用旧的 `IGauntletMovie`；重新加载后应重新取得标识。 |
| `Tick`、`LateUpdate`、`RenderTick`、`Update` | 处理输入、布局和渲染更新。 | 由 `ScreenLayer`/屏幕栈调度；不要在任意业务线程手动模拟完整生命周期。 |
| `OnFinalize`、`HitTest`、`FocusTest` | 完成资源清理并参与层命中/焦点判定。 | finalize 前必须已释放全部 movie；输入顺序和 `InputRestrictions` 会影响上层/下层 UI。 |

## 真实 Mission 接入路径

`MissionGauntletSiegeEngineMarker` 的 v1.4.5 调用点展示了完整顺序：

```csharp
_gauntletLayer = new GauntletLayer("MissionSiegeEngineMarker", ViewOrderPriority, false);
_movie = _gauntletLayer.LoadMovie("SiegeEngineMarker", (ViewModel)(object)_dataSource);
((ScreenBase)base.MissionScreen).AddLayer(_gauntletLayer);

((ScreenBase)base.MissionScreen).RemoveLayer(_gauntletLayer);
_gauntletLayer.ReleaseMovie(_movie);
((ViewModel)_dataSource).OnFinalize();
_movie = null;
_gauntletLayer = null;
_dataSource = null;
```

这是 Mission UI 的真实路径：`MissionScreen` 负责宿主层，`_dataSource` 是具体 VM。实际实现还要在关闭钩子中处理 sprite/resource category，并保证关闭代码只执行一次。

## 资源刷新与输入

资源刷新开始时，layer 把当前 `GauntletMovieIdentifier` 复制到列表，再逐个 `ReleaseMovie`；刷新结束时按标识重新 `LoadMovie`。因此刷新期间不能缓存旧的 Movie 接口或把它交给新 layer。

`ScreenLayer.InputRestrictions` 决定键盘、鼠标、滚轮和控制器允许范围；`IsFocusLayer`、`FocusTest`、`HitTest` 共同决定输入落在哪一层。修改输入限制会改变同屏其他 layer 的行为，应由宿主屏幕按顺序配置，而不是在每帧抢焦点。

## 风险与边界

- **Movie 泄漏：** `OnFinalize` 会检查 `_movieIdentifiers`；未调用 `ReleaseMovie` 就 finalize 会触发断言并留下资源引用。
- **释放顺序：** 先停止/移除宿主 layer，再释放 movie，最后调用 VM 的 `OnFinalize` 并清掉数据源。VM 或 movie 释放后不能继续由事件回调写入。
- **UIContext 生命周期：** `UIContext` 在 `ClearContext` 后为空；保存 `Widget`、`IGauntletMovie` 或上下文到下一屏幕会产生过期引用。
- **输入冲突：** layer 的排序、focus 和 `InputRestrictions` 共同决定输入消费。错误顺序可能让 mission 操作层挡住菜单，或让 UI 和游戏同时响应按键。
- **资源/线程边界：** Movie、字体、sprite 和 TwoDimension 资源要求正确的游戏初始化阶段和线程；不要在后台线程创建、刷新或销毁 layer。
- **Mission 生命周期：** `MissionScreen` 关闭后，Mission 行为不能继续 tick 一个已移除的 layer；应在对应 `OnDestroyView`/销毁钩子中对称清理。

## 版本说明

本页以 v1.4.5 `TaleWorlds.Engine.GauntletUI.GauntletLayer` 和 Mission/UI 调用点为准。Gauntlet movie 名称、输入资源和具体 Screen 宿主可能随版本变化；不要把一个模块的 movie 名称当作所有版本的公共 API。

## 导航

- [↑ Engine API 父级](../)
- [↔ ViewModel](../../core-extra/ViewModel)
- [↔ ScreenManager](../../gui/ScreenManager)
- [↔ ScreenBase](../../gui/ScreenBase)
- [相关：Mission](../../mission/Mission)
