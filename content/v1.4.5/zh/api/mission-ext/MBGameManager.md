---
title: "MBGameManager"
description: "Mount & Blade 游戏会话的加载、SubModule 生命周期分发和安全结束协调器：解释 Current、GameLoadingState、MissionState 与 IsEnding 的实际时序。"
---
# MBGameManager

| 元数据 | 值 |
|---|---|
| Namespace | `TaleWorlds.MountAndBlade` |
| Module | `TaleWorlds.MountAndBlade` |
| Type | `public abstract class MBGameManager : GameManagerBase` |
| Base | [`GameManagerBase`](../../core-extra/GameManagerBase) |
| 源文件 | `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs` |

**Namespace:** `TaleWorlds.MountAndBlade`

**Module:** `TaleWorlds.MountAndBlade`

**Type:** `public abstract class MBGameManager : GameManagerBase`

**Base:** [`GameManagerBase`](../../core-extra/GameManagerBase)

**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MBGameManager.cs`

## 概述

`MBGameManager` 把具体游戏模式的加载器接入引擎状态机，向所有已加载的 SubModule 分发生命周期回调，并在有 Mission 时以正确顺序收束整个游戏会话。它掌握会话级 `Current`、加载完成闩锁与结束闩锁的交接时机，而非供任意模组直接实例化的业务服务。

## ↑ 父级导航

- [任务与 Mount & Blade 扩展索引](../)
- [版本首页](../../../)

## ↔ 同级导航

- [GameLoadingState](../GameLoadingState) - 驱动加载步骤并最终调用 `OnLoadFinished` 的状态。
- [MultiplayerSubModule](../MultiplayerSubModule) - 使用同一 SubModule 生命周期的多人模式入口之一。
- [CustomBattleSubModule](../CustomBattleSubModule) - 另一个以 SubModule 参与游戏启动的模式入口。

## 心智模型：会话总线，不是模组服务容器

`MBGameManager` 位于三个层级交会处：具体游戏模式的加载实现位于下方，[`GameManagerBase`](../../core-extra/GameManagerBase) 的 `Game`、组件和静态 `Current` 位于上方；[`Module`](../../core/Module) 持有所有已加载的 [`MBSubModuleBase`](../../core/MBSubModuleBase)，[`GameStateManager`](../../core-extra/GameStateManager) 则持有当前的状态栈。

```text
SandBoxGameManager / MultiplayerGameManager / EditorGameManager
                         |
                         v
                  MBGameManager.Current
                         |
      +------------------+------------------+
      |                                     |
GameLoadingState -> Game / GameStateManager  Module.CurrentModule
                                              |
                                    CollectSubModules()
                                              |
                                      MBSubModuleBase hooks
```

具体管理器由游戏或官方模式代码构造；其基类构造函数会立刻把它写入 `GameManagerBase.Current`，而 `MBGameManager.Current` 只是该静态值的强制转换视图。它不是由模组创建、缓存或替换的全局服务。加载完成前，`GameLoadingState` 每 tick 调用该管理器的 `DoLoadingForGameManager()`；完成后才调用 `OnLoadFinished()`，由后者或基类实现把 `IsLoaded` 置为真。

## 依赖关系

- [`GameManagerBase`](../../core-extra/GameManagerBase) 提供静态 `Current`、`Game`、组件容器和基础加载步骤。
- [`Module`](../../core/Module) 通过 `CollectSubModules()` 提供实际接收回调的 [`MBSubModuleBase`](../../core/MBSubModuleBase) 实例。
- [`GameLoadingState`](../GameLoadingState) 驱动派生加载器，[`GameStateManager`](../../core-extra/GameStateManager) 持有加载与结束期间改写的状态栈。
- [`MissionState`](../../campaign-ext/MissionState) 在 Mission 结束后读取 `IsEnding`，决定清空整个栈还是只弹出任务状态。

### 何时使用，何时不要用

- 在 [`MBSubModuleBase`](../../core/MBSubModuleBase) 的真实生命周期钩子中注册类型、模型、Behavior 或观察游戏开始/结束；`MBGameManager` 会把对应回调送达那里。
- 仅在引擎已经创建会话后读取 `MBGameManager.Current`，并把它当作可消失的会话级引用。需要任务对象时使用 [`Mission.Current`](../../mission/Mission)，需要状态栈时使用 `Game.Current.GameStateManager`。
- 不要从普通模组代码 `new` 派生的 `MBGameManager`，也不要手工调用 `BeginGameStart`、`OnGameStart`、`OnGameEnd` 等分发方法。这样会改写全局 `Current`，或令同一个 SubModule 收到重复且失序的初始化/清理通知。
- 不要把 `EndGame()` 当作“关当前 Mission”的通用 API。正常任务结束应由 Mission 自己的结束路径处理；它会改写整个游戏状态栈。

## 创建、持有与生命周期

### 从模式选择到加载完成

公开的 `StartNewGame(MBGameManager gameLoader)` 是游戏模式切换的入口，不是“创建一个新战役”的捷径。它的固定行为如下：

1. 调用 `Module.CurrentModule.OnBeforeGameStart(gameLoader)`；该方法先向所有已加载 SubModule 调用 `OnBeforeGameStart(manager, disabledModules)`，再根据列表停用请求停用的模块。
2. 通过 `GameStateManager.Current.CreateState<GameLoadingState>()` 创建加载状态，把 `gameLoader` 交给 `SetLoadingParameters`，并用 `CleanAndPushState` 清空旧状态栈后压入它。
3. `GameLoadingState.OnTick` 重复调用 `gameLoader.DoLoadingForGameManager()`；返回完成后，将 `GameStateManager.Current` 切换为 `Game.Current.GameStateManager`，再调用 `gameLoader.OnLoadFinished()`。

官方 Sandbox 的真实入口就是 `SandBoxSubModule.StartGame`：它构造 `new SandBoxGameManager(loadResult)` 并传给 `MBGameManager.StartNewGame(...)`。`SandBoxGameManager` 在自己的加载步骤中加载模块数据、创建或载入 `Campaign`、等待每个 SubModule 的 `DoLoading(Game.Current)`，最后把状态推到角色创建、地图等界面。模组通常应参与其中的 SubModule 钩子，而不是复制该启动链。

### 分发给 MBSubModuleBase 的真实行为

下列覆写均按 `Module.CurrentModule.CollectSubModules()` 返回的顺序遍历并逐个转发，管理器不吞异常、不做重试，也不为模组提供隔离：

| 管理器阶段 | 发送到每个 `MBSubModuleBase` 的钩子 | 适合放置的工作 |
|---|---|---|
| `BeginGameStart` | `BeginGameStart(game)` | 游戏启动已开始，但不要假定全部对象已注册。 |
| `OnNewCampaignStart` | `OnCampaignStart(game, starterObject)` | 为新的 Campaign 连接 Campaign 专用服务。 |
| `InitializeSubModuleGameObjects` | `InitializeSubModuleGameObjects(game)` | 配置 SubModule 自己的游戏对象。 |
| `RegisterSubModuleTypes` | `RegisterSubModuleTypes()` | 先登记序列化/对象类型，不能依赖尚未装载的对象。 |
| `RegisterSubModuleObjects` / `AfterRegisterSubModuleObjects` | 同名钩子，带 `isSavedCampaign` | 注册 XML 对象，再做依赖已注册对象的后处理。 |
| `InitializeGameStarter` | `InitializeGameStarter(game, starter)` | 向 starter 添加 Model、Behavior 等启动内容。 |
| 初始化完成 / 新建 / 读档 | `OnGameInitializationFinished`、`OnAfterGameInitializationFinished`、`OnNewGameCreated`、`OnGameLoaded`、`OnAfterGameLoaded` | 选择与新档或读档相符的恢复工作。 |
| `OnGameStart` | `OnGameStart(game, gameStarter)` | 管理器先创建 `MonsterMissionDataCreator`，随后分发；之后安装 `MissionGameModels` 并绑定怪物骨骼查询委托。 |
| `OnGameEnd` | `OnGameEnd(game)` | 先分发，再恢复被禁模块、清除 `MissionGameModels`，最后由基类清空 `Current` 和 `Game`。 |

`OnGameInitializationFinished` 还有一个不属于 SubModule 的副作用：它遍历 `Game.Current.ObjectManager` 的 `SkeletonScale`，根据骨骼名计算并写入骨骼索引。因此它不是可安全重复调用的“通知”。

## 关键成员与结束时机

### `Current`、`IsLoaded` 与 `IsEnding`

- `Current` 返回 `(MBGameManager)GameManagerBase.Current`。在任何管理器构造期间都会被改写；`OnGameEnd` 的基类收尾会置空它。因此静态字段初始化器、模组加载期和异步延续中都不能假定它非空或仍指向同一会话。
- `IsLoaded` 由管理器控制，只能在派生类中写入。基类的 `OnLoadFinished()` 会设为 `true`；`SandBoxGameManager` 在完成其额外 UI/读档收尾后同样设为 `true`。它表示加载管线已交棒，**不**表示当前 Mission 存在。
- `IsEnding` 初始为 `false`，一旦 `CheckAndSetEnding()` 成功便保持为 `true`，直到该管理器实例被销毁。它是“本会话正在结束”的一次性闩锁，不是暂停标志，也不能被重置来开始另一局。

### `CheckAndSetEnding()`：只保证一次闩锁

此方法在私有锁上检查并设置 `IsEnding`：第一个调用者得到 `true`，其后的调用者得到 `false`。这避免两个 `EndGame` 延续同时开始清理；但它只保护这个布尔值，**不**让 `Mission`、`Game` 或 `GameStateManager` 变成线程安全对象。

不要从后台线程触发结束流程，也不要在等待 `EndGame` 的同时自行 `PopState` 或 `CleanStates`。`EndGame` 是 `async void`，调用方不能 await 它；锁外的状态栈与 Mission 操作仍必须留在引擎预期的游戏线程和生命周期内。

### `EndGame()`：先让加载落地，再处理 Mission

`EndGame()` 的实际流程不是立即销毁对象：

1. 只要存在 `Current` 且 `IsLoaded` 为假，就每 100 ms 等待加载完成；管理器消失也会停止等待。
2. 如果已有管理器且 `CheckAndSetEnding()` 失败，或 `Game.Current.GameStateManager` 为 `null`，直接返回。
3. 若 `Mission.Current` 非空但顶部状态不是 [`MissionState`](../../campaign-ext/MissionState)，持续 `PopState()`，直到到达该 Mission 的状态。
4. 顶部是 `MissionState` 时，对其 `CurrentMission.EndMission()`，随后每 1 ms 等待 `Mission.Current` 变为 `null`；没有 MissionState 时才直接 `CleanStates()`。

这正好解释了 [`MissionState`](../../campaign-ext/MissionState) 的收尾分支：Mission 进入 `Over` 后，若 `MBGameManager.Current.IsEnding` 为真，它调用 `CleanStates()`；否则只 `PopState()` 返回上一状态。直接清空状态或在 Mission 仍活动时另开新会话，会绕过这条协调链。

平台邀请和平台请求多人模式也经由作业调用 `MBGameManager.Current.OnSessionInvitationAccepted(...)` 或 `OnPlatformRequestedMultiplayer()`；默认实现分别在邀请类型不是 `None` 时、或无条件时调用 `EndGame()`。覆写时若不保留等价的结束路径，平台切换可能留下活动状态或 Mission。

## 真实的 SubModule 与状态转换示例

下面是官方 `SandBoxSubModule` 的实际启动入口；这是一段游戏模式代码，不是要求普通模组复制的构造模式：

```csharp
private void StartGame(LoadResult loadResult)
{
    MBGameManager.StartNewGame(new SandBoxGameManager(loadResult));
    MouseManager.ShowCursor(false);
}
```

`StartNewGame` 随即把 [`GameLoadingState`](../GameLoadingState) 压为根状态。读档路径完成后，`SandBoxGameManager.OnLoadFinished` 再通过真实的 `Game.Current.GameStateManager` 创建并压入 `MapState`；新档则转向角色创建或过场状态。这个路径说明状态迁移由游戏加载器拥有，而不是由任意 SubModule 随意清栈。

普通 SubModule 参与注册时，官方 Sandbox 使用的是下列真实获取路径：

```csharp
public override void RegisterSubModuleObjects(bool isSavedCampaign)
{
    Campaign.Current.SandBoxManager.InitializeSandboxXMLs(isSavedCampaign);
}

public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)
{
    Campaign.Current.SandBoxManager.InitializeCharactersAfterLoad(isSavedCampaign);
}
```

这两个钩子由 manager 的 `RegisterSubModuleObjects` 和 `AfterRegisterSubModuleObjects` 依序分发。它们依赖 `Campaign.Current` 与先前已注册的对象，因而不能挪到 `OnSubModuleLoad`，也不应自行构造 manager。`OnGameEnd` 期间 `Current` 仍可读取；基类调用在所有 SubModule 收到结束回调之后才会把它置空。

## 风险与排查

- **重复结束：** 自行调用 `EndGame()` 后又直接清栈，或覆写平台回调却不走受控结束，会与 `MissionState` 的结束 tick 竞争。用 `IsEnding` 只作观察；不要把它当作自行清理的许可。
- **静态初始化：** 在字段初始化器、`OnSubModuleLoad` 或线程延续中抓取 `Current`，可能得到 `null`、旧管理器，或刚被另一派生实例替换的管理器。只在相应游戏阶段即时读取并空值检查。
- **加载时误判：** `IsLoaded == false` 时 `EndGame()` 会等待；若你的覆写没有在加载收尾正确设定它，结束请求会长期悬挂。派生加载器应保证其 `OnLoadFinished` 最终调用基类或设置该属性。
- **Mission 与状态栈错配：** `Mission.Current` 存在但栈顶不是 `MissionState` 时，引擎会不断弹栈寻找它。模组若插入自定义状态，必须有可正常弹出的父子关系，不能让持久状态阻断此路径。
- **回调异常：** 生命周期分发是逐项直接调用；任一 SubModule 的异常会中断本次管理器阶段，后续模块与引擎收尾都可能未执行。把注册依赖放在正确阶段，并让清理代码可处理部分初始化。

## 相关类型

- [MBSubModuleBase](../../core/MBSubModuleBase) - 模组真正覆写的生命周期端点。
- [GameManagerBase](../../core-extra/GameManagerBase) - `Current`、`Game`、组件与加载步骤状态机的父类。
- [Module](../../core/Module) - 持有并收集激活 SubModule，同时实现 `OnBeforeGameStart` 的停用处理。
- [GameStateManager](../../core-extra/GameStateManager) - `GameLoadingState`、`MissionState` 与状态栈操作的所有者。
- [Mission](../../mission/Mission) - `Mission.Current` 的实际任务对象；不是游戏会话本身。
- [MissionState](../../campaign-ext/MissionState) - 将 Mission 的 `Over` 状态接回 `CleanStates` 或 `PopState` 的状态。
- [SandBoxGameManager](../../campaign-ext/SandBoxGameManager) - 具体 Campaign 加载器与真实派生示例。
