---
title: "GameStateManager"
description: '管理 GameState 栈的推送/弹出与激活，驱动整个游戏界面在菜单、地图、任务之间的状态切换。'
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** 无
**File:** `TaleWorlds.Core/GameStateManager.cs`

## 一句话职责

它是一个有顺序的「界面状态栈」调度器：谁被压入栈顶谁就获得控制权（被激活、开始 Tick），谁被弹出谁就被销毁，引擎每帧只驱动栈顶那一个状态。

## 心智模型

- **生命周期**：一个 `GameStateManager` 在游戏启动时由 `IGameStateManagerOwner`（通常是引擎/游戏宿主）创建，并通过静态属性 `GameStateManager.Current` 暴露给全局。整个进程通常只有一个「Game」型实例，外加一个「Global」型实例用于启动/加载界面。
- **谁持有/创建**：由宿主（`IGameStateManagerOwner`）`new` 出来并赋给 `Current`；mod 代码一般只读取 `Current`，不负责创建。
- **所属层**：Foundation / UI 层的核心枢纽。它位于 `TaleWorlds.Core`，向上支撑 Campaign（地图）与 Mission（战斗）两类状态，向下通过 `Owner.OnStateChanged` / `OnStateStackEmpty` 通知宿主。
- **栈模型**：内部 `_gameStates` 是按 `Level` 排序的列表，索引最大者即 `ActiveState`。`PushState` 把新状态插入到同 `Level` 的最后一个状态之后；`PopState`/`CleanStates` 按 `Level` 回收。

## 何时用 / 何时不要用

- **用**：mod 需要在运行时切换到自定义界面（例如打开一个自建的 `GameState` 子类），或读取当前活动状态、在主循环里驱动 Tick、注册状态切换监听（`IGameStateManagerListener`）。
- **不要用**：需要「弹窗/询问框」时用 [InformationManager](../InformationManager)（如 `ShowInquiry`），而不是自己 Push 一个状态；需要持久化游戏进程请用 `Game`/`Save` 体系，而不是操作状态栈。直接 `new` 一个 `GameState` 而不经过 `CreateState` 会跳过监听器的 `OnCreateState` 回调，属于错误用法。

## 依赖图
- [GameState](../GameState) — 栈中存放的对象，本类的核心操作目标
- [Game](../Game) — 游戏宿主，通常通过 `IGameStateManagerOwner` 持有本类
- [IGameStateManagerOwner](../IGameStateManagerOwner) — 创建并持有 manager 的宿主接口
- [GameStateManagerType](../GameStateManagerType) — 区分 `Game` / `Global` 两种管理器
- [WaitForGameState](../WaitForGameState) — 等待某个状态就绪的协程辅助
- [Hero](../../campaign/Hero) — 地图状态下的核心数据对象
- [崩溃边界与线程模型](../../../architecture/crash-boundaries) — 理解 OnTick 与状态切换为何必须在主线程
- [SDK 总览](../../../architecture/sdk-overview) — 各层（Foundation/Campaign/Mission/UI）的关系

## 风险段

- **错误阶段调用**：`OnTick(float dt)` 必须每帧由引擎主线程调用。在后台线程或异步回调里改状态栈，会与 `DoGameStateJobs` 的同步遍历产生重入/竞态。
- **重入陷阱**：`PushState`/`PopState` 会同步执行 `OnPushState`/`OnPopState`，并在其中回调所有 `IGameStateManagerListener`。在监听器回调里再次 `PushState` 会立即嵌套执行，可能破坏栈顺序——如需连续切换，攒成多个 job 由同一次 `DoGameStateJobs` 消化，而非在回调内递归。
- **覆盖 `Current` 会清空旧栈**：`Current` 的 setter 会先对旧 manager 调 `CleanStates(0)`（销毁全部状态）。只有在启动/重置时赋值；运行中随意改写会抹掉所有界面状态。
- **存档损坏**：`OnSavedGameLoadFinished()` 只是通知监听器「读档完成」，不要在其中重新创建 manager 或清零状态；错误地 `CleanStates` 会删除正在恢复的 Campaign 状态。
- **禁用请求泄漏**：`RegisterActiveStateDisableRequest` 用 `WeakReference` 记录请求方；若请求方长期存活却忘记 `UnregisterActiveStateDisableRequest`，`ActiveState` 会一直停在 `OnIdleTick`（不响应输入），表现为界面「卡住但没崩」。

## 成员说明

### 静态属性 `Current`
`get; set;`。进程内当前活动的管理器。读取它拿实例；**写入会先清空旧管理器的全部状态**，仅限启动期使用。

### 属性 `ActiveState`
`get`。返回 `_gameStates` 最后一个元素（栈顶），栈空时返回 `null`。这是当前真正在运行的界面状态。

### 属性 `CurrentType` / `Owner`
`get`。`CurrentType` 为 `GameStateManagerType`（Game 或 Global）；`Owner` 是创建它的 `IGameStateManagerOwner`，所有栈变化通过 `Owner.OnStateChanged` / `OnStateStackEmpty` 上抛。

### 属性 `ActiveStateDisabledByUser`
`get`。当存在未注销的禁用请求时为 `true`，此时 `OnTick` 只调 `ActiveState.OnIdleTick(dt)` 而不调 `OnTick`，界面处于「挂起」状态。

### 构造函数
`GameStateManager(IGameStateManagerOwner owner, GameStateManagerType gameStateManagerType)`——由宿主调用，mod 不应直接 `new`。

### `PushState(GameState, int level = 0)`
把状态压栈并激活。副作用：停用旧栈顶（`HandleDeactivate`）、`HandleInitialize` + `HandleActivate` 新栈顶、通知监听器、最后调 `Common.MemoryCleanupGC(false)` 回收内存。**调用时机**：想进入新界面时。

### `PopState(int level = 0)`
弹出指定 `level` 的栈顶状态，`HandleDeactivate` + `HandleFinalize` 后激活下一个；若栈空且后续没有 Push job，调用 `Owner.OnStateStackEmpty()`。

### `CleanAndPushState(GameState, int level = 0)`
先移除所有 `Level >= 参数` 的旧状态，再压入新状态。适合「从深层界面直接跳回地图」这类替换式切换。

### `CleanStates(int level = 0)`
移除所有 `Level >= 参数` 的状态。会触发 `OnCleanStates` 监听器。

### `CreateState<T>()` / `CreateState<T>(params object[])`
`where T : GameState, new()`。安全创建状态的唯一正确入口：内部会设置 `state.GameStateManager = this` 并逐个通知监听器 `OnCreateState`。带 `params` 的重载用 `Activator.CreateInstance` 传构造参数。**务必用它而非 `new T()`**。

### `RegisterListener` / `UnregisterListener` / `GetListenerOfType<T>()`
增删/按类型查找 `IGameStateManagerListener`。监听器可收到 `OnPushState`、`OnPopState`、`OnCreateState`、`OnCleanStates`、`OnSavedGameLoadFinished` 等事件。返回 `bool` 表示是否成功（重复注册返回 `false`）。

### `RegisterActiveStateDisableRequest(object)` / `UnregisterActiveStateDisableRequest(object)`
成对使用，用 `WeakReference` 登记「请求挂起当前状态」的对象。必须对称注销，否则状态被永久挂起。

### `OnTick(float dt)`
每帧由引擎调用，驱动 `ActiveState` 的 Tick（或挂起时的 IdleTick）。

### `OnSavedGameLoadFinished()`
读档完成后广播给所有监听器。

### `LastOrDefault<T>()`
返回栈中最后一个 `T` 类型状态（无则 `null`），常用于「当前是否在某个特定界面」的判断。

### 静态字段 `StateActivateCommand`
字符串命令钩子，宿主用于触发状态激活，mod 一般只读不写。

## 最小真实示例

**示例 1 — 读取当前活动状态并驱动 Tick（最常见的只读用法）**

```csharp
GameStateManager manager = GameStateManager.Current;
GameState active = manager.ActiveState;
MapState map = manager.LastOrDefault<MapState>();
manager.OnTick(0.016f);
```

**示例 2 — 通过正确入口创建并压入一个地图状态**

```csharp
MapState mapState = GameStateManager.Current.CreateState<MapState>();
GameStateManager.Current.PushState(mapState, 0);
```

## 导航

- ↑ Parent：[core-extra 索引](../)
- ↔ Sibling：[GameState](../GameState)、[Game](../Game)、[IGameStateManagerOwner](../IGameStateManagerOwner)、[GameStateManagerType](../GameStateManagerType)、[WaitForGameState](../WaitForGameState)
- 相关：[Hero](../../campaign/Hero)、[崩溃边界](../../../architecture/crash-boundaries)、[SDK 总览](../../../architecture/sdk-overview)
