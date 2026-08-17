---
title: "GameState"
description: "TaleWorlds.Core 的抽象基类：游戏流程中一个阶段（主菜单、战役地图、Mission、视频、加载界面等）的状态容器，提供 OnActivate/OnDeactivate/OnFinalize 生命周期钩子与监听器，由 GameStateManager 的栈驱动激活与停用。"
---

# GameState

## 元数据

- **Namespace:** `TaleWorlds.Core`
- **Module:** `TaleWorlds.Core`
- **Type:** `public abstract class GameState : MBObjectBase`
- **Base:** `MBObjectBase`
- **源码:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameState.cs`

## 一句话职责

`GameState` 是游戏流程里“一个阶段 / 一个屏幕”的抽象状态：主菜单、战役地图、Mission、视频播放、加载界面都是它的具体子类，它把该阶段的激活、停用与清理时机暴露成可重写的钩子，由 [GameStateManager](../GameStateManager) 的栈在切换时调用。

## 心智模型

把 `GameState` 理解成游戏流程里的一个“房间”：你进入房间时引擎调用 `OnActivate`（开灯、摆好家具），你离开时调用 `OnDeactivate`（关灯、收好东西），房间彻底拆掉时调用 `OnFinalize`（连地基一起清掉）。一次只会有一个房间亮着灯——`IsActive` 为 true 的那个就是栈顶状态。引擎里真实的房间有 `InitialState`（启动选择）、`GameLoadingState`（加载）、`MissionState`（战斗）、`VideoPlaybackState`（过场）、`BannerBuilderState`、`EditorState`、`PlayerGameState` 等；它们都只是重写了这几个钩子来做自己的事。`GameState` 本身不持有你的 Gauntlet UI，它只是“时机”的来源：真正把界面挂上去的做法，是在 `OnActivate` 里向当前 `ScreenBase` 加一个 `GauntletLayer`，并在 `OnDeactivate` 里对称地移除并释放。所以一个 modder 自定义状态，本质是“接管一段激活/停用窗口”，而不是去替换整个 UI 系统。

## 何时用，何时不用

### 适合使用 GameState 的场景

- 你要插入一段**全新的、独占的游戏阶段**：比如一个独立的编辑器、一个自制的战役前设置流程、一个需要完全接管输入与渲染的自定义场景。此时继承 `GameState`、重写生命周期钩子，并通过 [GameStateManager](../GameStateManager) 把它推入栈是正确的入口。
- 该阶段的进入/退出必须有明确的边界（进入即激活、离开即停用、退出即清理），并且你希望前一个阶段能原样回到栈中。

### 不适合使用 GameState 的场景

- **只想在已有界面上叠一层临时 UI**（提示框、HUD 装饰、配置面板）：直接用 `GauntletLayer` 加到当前 [ScreenManager](../../gui/ScreenManager) 的 `TopScreen` 上即可，不要为此发明一个新状态。新状态会接管整个激活窗口，成本高且更容易破坏原阶段的输入。
- **只想读/改游戏数据或挂一个 MissionBehavior**：走 [MBSubModuleBase](../../core/MBSubModuleBase) 的模块生命周期与 Mission 行为系统，而非状态栈。
- 需要把 UI 当成可复用服务长期存在：状态在 `OnDeactivate` / `OnFinalize` 后会被停用或销毁，不要把 layer、ViewModel 或 Movie 当作跨状态的单例缓存。

## 依赖关系

```text
GameStateManager(栈) ──push/pop──▶ GameState(本类型)
        │  OnActivate/OnDeactivate/OnFinalize
        ▼
   GauntletLayer / ScreenBase (在钩子里挂 UI)
        │
        ▼
   ScreenManager (当前屏幕与输入焦点)
```

- 驱动方：[GameStateManager](../GameStateManager) 负责把状态压入/弹出栈并触发本类的钩子。
- UI 宿主：[GauntletLayer](../../engine/GauntletLayer) 承载 Movie，[ScreenManager](../../gui/ScreenManager) 决定当前 `TopScreen` 与输入焦点。
- 注册入口：[MBSubModuleBase](../../core/MBSubModuleBase) 的模块生命周期是启动自定义流程、订阅状态变化的常规位置。
- 类型枚举：[GameStateManagerType](../GameStateManagerType) 区分 Game / Global 两种管理器（如后台菜单与战斗内流程）。

## 风险与边界

- **不对称的 layer 清理会泄漏 UI 与输入。** 在 `OnActivate` 里 `AddLayer` 了 `GauntletLayer`，却没在 `OnDeactivate` 里 `RemoveLayer` + `ReleaseMovie` + 释放 ViewModel，会导致界面停在屏上、输入仍被旧层捕获，前一个阶段“看起来回来了但实际没干净”。清理顺序应为：先移除 layer，再释放 Movie，最后 `ViewModel.OnFinalize` 并清空引用。
- **在过渡期间触碰游戏状态。** `PushState`/`PopState` 是同步切换，一次切换会同时停用旧状态、初始化并激活新状态、触发 GC；不要在 `OnActivate`/`OnDeactivate` 中又去调用 [GameStateManager](../GameStateManager) 的 push/pop，也不要在 `OnFinalize` 之后访问 `_listeners` 或 `GameStateManager`（源码在 `HandleFinalize` 里把它们置为 null）。
- **Screen 寿命 ≠ GameState 寿命。** `GameState` 只是时机源；你挂的 `GauntletLayer` 活在 `ScreenBase` 上。状态停用但 Screen 还在时，layer 仍可能在接收输入；状态被 finalize 时，你持有的 layer/ViewModel 引用会过期。所有 UI 资源必须在 `OnDeactivate` 内对称释放，不要依赖 `OnFinalize` 帮你兜底。
- **监听器激活计数陷阱。** `HandleActivate` 只在 `_listeners` 非空且本次是首次激活时才广播 `OnActivate` 给监听器（`NumberOfListenerActivations` 控制）；若你在状态已激活后才 `RegisterListener`，监听器收不到本次的 `OnActivate`，需要在注册后自行补齐初始化逻辑。
- **后台线程。** 虽然 `OnActivate` 等钩子本身没有线程断言，但你挂的 UI、输入与 `UIContext` 必须在游戏 UI 阶段运行；不要在任意业务/后台线程里创建或刷新 layer。

## 关键成员与时机

| 成员 | 用途 | 何时调用 / 注意 |
|---|---|---|
| `OnInitialize()` | 状态首次进入栈时的一次性初始化。 | 由 manager 在 `OnActivate` 之前调用一次；放不依赖激活窗口的资源准备。 |
| `OnActivate()` | 状态成为栈顶、开始交互。 | 在这里创建并 `AddLayer` 你的 `GauntletLayer`，绑定 ViewModel。基类会把 `Activated` 置 true、广播给监听器。 |
| `OnDeactivate()` | 状态离开栈顶、被新状态覆盖或即将弹出。 | 在这里 `RemoveLayer`、释放 Movie 与 ViewModel，把 `Activated` 置 false。必须与 `OnActivate` 对称。 |
| `OnFinalize()` | 状态被弹出栈、永久销毁。 | 释放一次性资源和监听器列表；此后 `GameStateManager` 与 `_listeners` 均为 null，不要再访问。 |
| `OnTick(float dt)` / `OnIdleTick(float dt)` | 每帧更新；被用户禁用时只跑 idle tick。 | 由 manager 的 `OnTick` 转发；`ActiveStateDisabledByUser` 为 true 时只调 `OnIdleTick`。 |
| `IsActive` | 当前是否为栈顶活动状态。 | 由 `GameStateManager.ActiveState == this` 推导；常用于守卫只在该状态活动时才执行的逻辑。 |
| `Activated` | 是否已完成激活（基类在 `OnActivate`/`OnDeactivate` 中维护）。 | 只读观察点，不要手动设。 |
| `Predecessor` | 栈中紧邻本状态下方的那个状态。 | 通过 `GameStateManager.FindPredecessor` 计算；返回 null 表示本状态在栈底。 |
| `Level` | 状态在栈中的层级，影响插入/清理顺序。 | push/pop/clean 都按 `Level` 决定插入点与要清哪些状态。 |
| `IsMenuState` / `IsMusicMenuState` | 标记是否为（音乐）菜单类状态。 | 虚属性，供音频/系统根据状态类型切换策略，按需重写。 |
| `RegisterListener` / `UnregisterListener` / `GetListenerOfType<T>()` | 注册 / 注销 / 按类型取状态监听器。 | 监听器会在初始化、激活、停用、销毁时被广播对应钩子；注意激活计数限制。 |

## 最小真实示例：自定义状态 + Gauntlet 界面

下面是一段完整的、基于真实 API 的形状：自定义状态在 `OnActivate` 把 `GauntletLayer` 挂到当前 `TopScreen`，在 `OnDeactivate` 对称清理；另有 `MBSubModuleBase` 在初始菜单提供入口把它推入栈。

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

public class MyMenuState : GameState
{
    private GauntletLayer _gauntletLayer;
    private GauntletMovieIdentifier _movie;
    private MyMenuVM _dataSource;

    protected override void OnActivate()
    {
        base.OnActivate();
        _dataSource = new MyMenuVM();
        _gauntletLayer = new GauntletLayer("MyMenu", 100, false);
        _movie = _gauntletLayer.LoadMovie("MyMenu", _dataSource);
        ScreenManager.TopScreen.AddLayer(_gauntletLayer);
    }

    protected override void OnDeactivate()
    {
        ScreenManager.TopScreen.RemoveLayer(_gauntletLayer);
        _gauntletLayer.ReleaseMovie(_movie);
        _gauntletLayer = null;
        _movie = null;
        _dataSource.OnFinalize();
        _dataSource = null;
        base.OnDeactivate();
    }
}
```

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.LocalFaction;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected override void OnSubModuleLoad()
    {
        base.OnSubModuleLoad();
        Module.CurrentModule.AddInitialStateOption(new InitialStateOption(
            "MyMenu",
            "打开我的菜单",
            9999,
            () => GameStateManager.Current.PushState(GameStateManager.Current.CreateState<MyMenuState>()),
            false));
    }
}
```

要点：`CreateState<MyMenuState>()` 要求状态有无参构造函数（满足 `where T : GameState, new()`），它在创建时把 `GameStateManager` 回指给自己并广播 `OnCreateState`；随后 `PushState` 触发 `OnInitialize` → `OnActivate`。关闭时由对端 `PopState` 触发 `OnDeactivate` → `OnFinalize`。

## 导航

- **↑ Parent：** [core-extra API](../)
- **↔ Sibling：** [GameStateManager](../GameStateManager)
- **相关：** [GauntletLayer](../../engine/GauntletLayer) · [ScreenManager](../../gui/ScreenManager) · [MBSubModuleBase](../../core/MBSubModuleBase) · [GameStateManagerType](../GameStateManagerType)
