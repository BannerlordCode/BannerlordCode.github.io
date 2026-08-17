---
title: "GameStateManager"
description: "TaleWorlds.Core 的状态栈协调器：通过 PushState/PopState/CleanAndPushState/CleanStates 在主线程上切换游戏阶段，并在每次切换时驱动对应 GameState 的 OnInitialize/OnActivate/OnDeactivate/OnFinalize 与监听器广播。"
---

# GameStateManager

## 元数据

- **Namespace:** `TaleWorlds.Core`
- **Module:** `TaleWorlds.Core`
- **Type:** `public class GameStateManager`
- **Base:** `System.Object`
- **源码:** `bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`

## 一句话职责

`GameStateManager` 是持有 `GameState` 栈的协调器：它把“进入主菜单 / 加载 / 进入 Mission / 播放视频 / 回到地图”等阶段表示为栈上的状态，通过 push/pop/clean 在主线程上切换它们，并在切换的每个节点触发状态的生命周期钩子与监听器。

## 心智模型

把它想成“房间调度器”：游戏流程是一摞房间，`_gameStates` 列表的最后一个就是当前亮灯的房间（`ActiveState`）。你调用 `PushState` 相当于在栈顶再摞一间新房间——调度器先让旧房间 `OnDeactivate`，再把新房间 `OnInitialize` 然后 `OnActivate`；`PopState` 则把栈顶房间 `OnDeactivate` + `OnFinalize` 后拆掉，并让下面的房间重新 `OnActivate`；`CleanAndPushState` / `CleanStates` 会先把同层及以上（按 `Level` 比较）的房间全部停用并销毁，再建立新的根流程。所有请求都进一个 `Queue<GameStateJob>`，由 `DoGameStateJobs` 同步排空，因此一次调用可能连着发生多段激活/停用/销毁，且 `PushState`/`PopState` 都断言必须在主线程。游戏里有 Game 与 Global 两种管理器（见 [GameStateManagerType](../GameStateManagerType)）：Global 多见于启动/菜单阶段，Game 多见于战役内流程。对一个 modder 而言，最常用的就是 `GameStateManager.Current` 这个静态入口去创建并推入自己的 [GameState](../GameState)，以及正确地弹出它。

## 何时用，何时不用

### 适合使用 GameStateManager 的场景

- 你要启动一段**新的、独占的游戏阶段**（自定义编辑器、自制设置流程、独立场景），需要进入/退出有清晰边界，并希望前一个阶段保留在栈中可回退。用 `CreateState<T>()` 造状态，`PushState` 推入。
- 该新流程**不应可回退**（例如开始新游戏要清掉整个菜单栈）：用 `CleanAndPushState` 一次性清掉旧根再建新根。

### 不适合使用 GameStateManager 的场景

- **只是给当前界面叠一层临时 UI**：直接用 `GauntletLayer` 加在 [ScreenManager](../../gui/ScreenManager) 的 `TopScreen` 上，不要推一个新状态。推状态会接管整个激活窗口，代价大且易破坏原阶段输入。
- **只想读/改数据或挂 MissionBehavior**：走 [MBSubModuleBase](../../core/MBSubModuleBase) 与 Mission 行为系统。
- **用 `PopState` 当“关闭某个全局 UI”的开关**：状态栈不是 UI 开关；临时弹层请用 layer 的显隐或 `RegisterActiveStateDisableRequest` 来禁用激活态，而不是靠出栈。

## 依赖关系

```text
MBSubModuleBase(模块入口) ──▶ GameStateManager.Current (静态入口)
        │  PushState / PopState / CleanAndPushState / CleanStates
        ▼
   _gameStates 栈 ──▶ GameState (各阶段状态)
        │  OnInitialize/OnActivate/OnDeactivate/OnFinalize
        ▼
   GauntletLayer + ScreenManager (UI 与输入)
```

- 入口：[MBSubModuleBase](../../core/MBSubModuleBase) 的模块生命周期是启动/订阅状态流程的常规位置；`GameStateManager.Current` 是静态访问点。
- 被管理方：[GameState](../GameState) 是栈中元素，钩子由本管理器在切换时驱动。
- UI 衔接：[GauntletLayer](../../engine/GauntletLayer) 在状态钩子里挂 Movie，[ScreenManager](../../gui/ScreenManager) 维护 `TopScreen` 与输入焦点。
- 类型区分：[GameStateManagerType](../GameStateManagerType) 标记 Game / Global；[GameStateScreenManager](../../mission-ext/GameStateScreenManager) 是把状态与 `ScreenBase` 桥接的 Mission 侧封装。

## 风险与边界

- **必须在主线程调用 push/pop。** `PushState` 与 `PopState` 都断言 `TWParallel.IsMainThread()`；从后台线程切换状态会触发 `FailedAssert` 并破坏栈、焦点与输入排序。
- **不匹配的 push/pop 会留下孤儿 UI。** 推入状态却在错误时机或不对称地弹出，会导致被覆盖状态的 `OnDeactivate` 没跑、它挂的 `GauntletLayer` 没移除，输入仍被旧层捕获，前一个阶段“看起来回来了但没干净”。确保每个状态在自己的 `OnDeactivate` 中清理 layer（见 [GameState](../GameState) 风险节）。
- **`CleanAndPushState` / `CleanStates` 会销毁同层及以上状态。** 它们按 `Level` 把 `Level >= 传入level` 的状态全部 `OnDeactivate` + `OnFinalize` 并移除。误用会清掉你本想保留的阶段；需要可回退就只用 `PushState`。
- **不要在过渡期间再触发切换或触碰游戏状态。** 一次 `DoGameStateJobs` 可能连发多段生命周期；在 `OnActivate`/`OnDeactivate` 中又去 push/pop，或在 `OnFinalize` 之后访问已置空的 `GameStateManager`/监听器列表，会制造重入与空引用。
- **`Current` 的 setter 会清掉旧管理器。** `GameStateManager.Current` 赋值时会对旧值先 `CleanStates()`；不要把它当普通变量反复重设，否则会清空整个状态栈。
- **`ActiveStateDisabledByUser` 只影响 tick 形态。** 注册了 `RegisterActiveStateDisableRequest` 后，活动状态只跑 `OnIdleTick` 而非 `OnTick`；这不是“暂停游戏逻辑”的通用开关，且请求用 `WeakReference` 跟踪，要注意请求方对象是否已被回收。

## 关键成员与时机

| 成员 | 用途 | 何时调用 / 注意 |
|---|---|---|
| `Current` | 静态当前管理器（Game/Global 之一）。 | 启动自定义流程或订阅状态变化的入口；赋值时会对旧管理器 `CleanStates()`。 |
| `ActiveState` | 栈顶活动状态（`_gameStates` 最后一项）。 | 只读；栈空时为 null。不要缓存后假设它长期有效。 |
| `GameStates` | 当前栈上全部状态的只读视图。 | 观察用；不要在遍历时直接 push/pop。 |
| `CurrentType` | 当前是 Game 还是 Global 管理器。 | 由构造时 `GameStateManagerType` 决定，只读。 |
| `CreateState<T>()` / `CreateState<T>(params object[])` | 创建并初始化一个状态（设回指、广播 `OnCreateState`）。 | 要求 `T : GameState, new()`；无参版用 `new T()`，带参版用 `Activator` 构造。 |
| `PushState(GameState, int level = 0)` | 把状态压入栈并激活，覆盖旧栈顶。 | 主线程；旧栈顶若已激活会先 `OnDeactivate`，新状态 `OnInitialize`→`OnActivate`。 |
| `PopState(int level = 0)` | 弹出指定层级的栈顶状态，恢复下一个。 | 主线程；被弹状态 `OnDeactivate`→`OnFinalize`，下方状态重新 `OnActivate`；栈空时通知 `OnStateStackEmpty`。 |
| `CleanAndPushState(GameState, int level = 0)` | 清掉同层及以上状态后推入新根。 | 不可回退的新根流程；会销毁被清状态。 |
| `CleanStates(int level = 0)` | 清掉同层及以上的所有状态。 | 重置/退出流程；栈空触发 `OnStateStackEmpty`。 |
| `LastOrDefault<T>()` | 取栈上最后一个某类型状态。 | 例如 `LastOrDefault<MissionState>()` 判断当前是否处于战斗。 |
| `RegisterListener` / `UnregisterListener` / `GetListenerOfType<T>()` | 管理状态栈监听器（创建/推送/弹出/清理事件）。 | 监听器在每次栈变化时被广播；模块卸载时务必注销，避免重复回调与失效引用。 |
| `RegisterActiveStateDisableRequest` / `UnregisterActiveStateDisableRequest` | 用 `WeakReference` 标记“活动状态应只跑 idle tick”。 | 临时禁用活动状态的常规 tick；请求方被回收后会在 `CleanRequests` 中自动移除。 |
| `OnTick(float dt)` | 每帧转发给 `ActiveState`（禁用时转 `OnIdleTick`）。 | 由引擎主循环调用；mod 一般不必直接调。 |

## 最小真实示例：从模块启动并退出一个自定义流程

下面用真实 API 展示：在 `MBSubModuleBase` 的初始菜单选项里创建并推入自定义状态，以及稍后弹出它、用 `CleanAndPushState` 进入“新游戏”根流程、用 `LastOrDefault` 判断当前阶段。

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
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

    private void StartNewGame()
    {
        GameStateManager.Current.CleanAndPushState(
            GameStateManager.Current.CreateState<GameLoadingState>());
    }

    private void CloseMyMenu()
    {
        if (GameStateManager.Current.ActiveState is MyMenuState)
        {
            GameStateManager.Current.PopState();
        }
    }

    private bool IsInMission()
    {
        return GameStateManager.Current.LastOrDefault<MissionState>() != null;
    }
}
```

要点：`CreateState<MyMenuState>()` 创建后回指 `GameStateManager` 并广播 `OnCreateState`；`PushState` 触发 `OnInitialize`→`OnActivate`，`PopState` 触发 `OnDeactivate`→`OnFinalize`；`CleanAndPushState` 会先清掉同层及以上的状态再建立 `GameLoadingState` 这一新根。`MyMenuState`、`GameLoadingState`、`MissionState` 均为 `GameState` 的真实子类。

## 导航

- **↑ Parent：** [core-extra API](../)
- **↔ Sibling：** [GameState](../GameState)
- **相关：** [GauntletLayer](../../engine/GauntletLayer) · [ScreenManager](../../gui/ScreenManager) · [MBSubModuleBase](../../core/MBSubModuleBase) · [GameStateManagerType](../GameStateManagerType) · [GameStateScreenManager](../../mission-ext/GameStateScreenManager)
