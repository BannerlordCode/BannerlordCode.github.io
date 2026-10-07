---
title: "GameStateManager"
description: "Bannerlord 界面之下的状态栈引擎：一个管理器持有一个按 Level 排序的 GameState 列表，所有修改都先入队再由 DoGameStateJobs 同步排空，只有栈顶被 OnTick，静态 Current 切换时还会自动 CleanStates(0)。"
---

# GameStateManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class GameStateManager`
**Base:** 无（仅隐式 `System.Object`；不继承 `MBObjectBase`，不实现任何接口——但**它被别人实现为接口**，`Game` 就是 `IGameStateManagerOwner`）
**File:** `TaleWorlds.Core/GameStateManager.cs`（全文 483 行 / 14892 字节）

## 概述

`GameStateManager` 是决定玩家正面对着哪个界面的**栈机**。它持有一个 `private readonly List<GameState> _gameStates`，把最后一个元素当作 `ActiveState`，并且只 tick 那一个。

全树有**两个**实例，由静态 `GameStateManager.Current` 指明当前生效的是哪个：`TaleWorlds.MountAndBlade/Module.cs:89-90` 构造一个 `GameStateManagerType.Global` 的并立刻赋给 `Current`（管主菜单、启动视频、存档选择）；`TaleWorlds.Core/Game.cs:398` 为游戏内状态另建一个 `GameStateManagerType.Game`。`Game` 本身 `sealed class Game : IGameStateManagerOwner`，所以它就是游戏期管理器的 owner。

这四个公开方法——`PushState` / `PopState` / `CleanAndPushState` / `CleanStates`——**都不直接改列表**。它们各自 `this._gameStateJobs.Enqueue(new GameStateJob(...))` 然后立刻 `this.DoGameStateJobs()`，而后者是一个 `while (this._gameStateJobs.Count > 0)` 循环。这意味着所有栈变更都是**先排队、再同步执行**的，重入安全（见「心智模型」）。

## 心智模型

把它当成**「一摞界面的所有者 + 一个串行化的修改队列」**。

**第一，`Level` 是排序键，不是栈深度。** `OnPushState` 里是 `int num = this._gameStates.FindLastIndex((GameState state) => state.Level <= gameState.Level);`，找到就 `Insert(num + 1, gameState)`，找不到就 `Add`。所以连续两次 `PushState(x, 0)` 会让第二个成为栈顶；而 `PushState(x, 5)` 会插到所有 `Level <= 5` 的状态之上。`PopState(level)` 用 `FindLastIndex(state => state.Level == level)` 找**最后一个**同级状态移除。`CleanStates(level)` 和 `CleanAndPushState(state, level)` 则用 `FindLastIndex(state => state.Level >= popLevel)` 找到切割点，**从尾往前**把 `Level` 更高的全部 `HandleDeactivate()` + `HandleFinalize()` + `RemoveAt`。

**第二，队列让重入变成串行而不是递归。** 因为每个公开修改方法都是「入队 → 排空」，从监听器回调里再调 `PushState` 不会立刻插进正在进行的 `OnPushState` 尾巴，而是追加进队列，被**同一个** `while` 循环继续排空。这解释了 `OnPopState` 里那段看似多余的检查：

```csharp
else if (this._gameStateJobs.Count == 0 || (this._gameStateJobs.Peek().Job != GameStateJob.JobType.Push && this._gameStateJobs.Peek().Job != GameStateJob.JobType.CleanAndPushState))
{
    this.Owner.OnStateStackEmpty();
}
```

栈弹空了，但队列里还排着一次 Push —— 那就**还不能**算「栈空」，否则会先通知 owner 关闭游戏、再被紧接着的 Push 拉回来。

**第三，`OnTick` 会被静默替换成 `OnIdleTick`。** `this.CleanRequests()` 之后，如果 `this.ActiveStateDisabledByUser` 为真，就调 `ActiveState.OnIdleTick(dt)` 并 **`return`**——正常的 `OnTick(dt)` 完全跳过。`ActiveStateDisabledByUser` 是 `_activeStateDisableRequests.Count > 0`，而这些请求以 `[WeakReference]` 持有，`CleanRequests` 每次 tick 开头清理已回收的目标。

**第四，tick 的驱动权不在本类。** `GameStateManager.OnTick` 是 public 但没人自动调它——`TaleWorlds.Core/Game.cs:481-483` 的 `Game.OnTick(float dt)` 第一行就是 `if (GameStateManager.Current == this.GameStateManager)`。**非 `Current` 的那个管理器永远不会被 tick**。全局那个管理器由模块侧的 `OnApplicationTick` 驱动。

**第五，`Current` 的 setter 是有副作用的。** 它先对被替换掉的旧实例调 `current.CleanStates(0)`，再赋新值。所以任何你没显式弹出的状态都会被静默走一遍 `HandleDeactivate` + `HandleFinalize`。`Game.cs:387-388` 的拆卸路径就是 `GameStateManager.Current = null; this.GameStateManager = null;`，`Module.cs:505` 回主菜单时 `GameStateManager.Current = this.GlobalGameStateManager;`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Current` | `public static GameStateManager Current { get; set; }` | 当前生效的管理器。**setter 有副作用**：先把旧的 `CleanStates(0)`，再赋新值 |
| `StateActivateCommand` | `public static string StateActivateCommand` | public 静态字符串。被 [GameState](../GameState) 的 `HandleActivate()` 读取，非空时调 `CommandLineFunctionality.CallFunction(StateActivateCommand, "", out flag)`。原生层用它从激活事件驱动控制台命令 |
| `CurrentType` | `public GameStateManager.GameStateManagerType CurrentType { get; private set; }` | `Game` 或 `Global`，构造器写入后只读。**枚举是嵌套的**：`GameStateManager.GameStateManagerType` |
| `Owner` | `public IGameStateManagerOwner Owner { get; private set; }` | 栈变化回调接收方。构造器注入。`Game` 实现它 |
| `Listeners` | `public IReadOnlyCollection<IGameStateManagerListener> Listeners { get; }` | `this._listeners.AsReadOnly()`，**每次访问新建一个 wrapper**，且是视图不是快照 |
| `GameStates` | `public IEnumerable<GameState> GameStates { get; }` | 同样 `AsReadOnly()` 的视图 |
| `ActiveState` | `public GameState ActiveState { get; }` | `Count <= 0 ? null : this._gameStates[Count - 1]`。栈空返回 `null`，**不抛异常也不返回哨兵** |
| `ActiveStateDisabledByUser` | `public bool ActiveStateDisabledByUser { get; }` | `_activeStateDisableRequests.Count > 0` |
| 构造函数 | `public GameStateManager(IGameStateManagerOwner owner, GameStateManagerType gameStateManagerType)` | 四个 `readonly` 字段在这里初始化：`_gameStateJobs`（`Queue<GameStateJob>`）、`_gameStates`、`_listeners`、`_activeStateDisableRequests`。**参数顺序是 owner 在前** |
| `CreateState<T>` ×2 | `public T CreateState<T>() where T : GameState, new()` / `public T CreateState<T>(params object[] parameters) where T : GameState, new()` | `Activator.CreateInstance<T>()` 或 `Activator.CreateInstance(typeof(T), parameters)`，然后 `HandleCreateState`：设 `state.GameStateManager = this` 并对每个监听器 `OnCreateState(state)`。**创建不等于激活——还得自己 PushState** |
| `PushState` | `public void PushState(GameState gameState, int level = 0)` | 入队 `Push` 任务后同步排空。`level` 是排序键 |
| `PopState` | `public void PopState(int level = 0)` | 入队 `Pop` 任务。**`level` 没有匹配时 `FindLastIndex` 返回 -1 然后索引 `[-1]`，抛 `ArgumentOutOfRangeException`** |
| `CleanAndPushState` | `public void CleanAndPushState(GameState gameState, int level = 0)` | 先砍掉 `Level >= gameState.Level` 的全部，再 `OnPushState`。注意它**额外调一次 `this.Owner.OnStateChanged(activeState)`**——比 `CleanStates` 多一次通知 |
| `CleanStates` | `public void CleanStates(int level = 0)` | 砍掉 `Level >= level` 的全部，对监听器发 `OnCleanStates()`。**`Current` 的 setter 会用 level 0 调它** |
| `OnTick` | `public void OnTick(float dt)` | 清理弱引用 → 空栈返回 → 被禁用走 `OnIdleTick` 并 return → 否则 `ActiveState.OnTick(dt)` |
| `RegisterListener` / `UnregisterListener` | `public bool RegisterListener(IGameStateManagerListener)` / `UnregisterListener(...)` | 前者用 `Contains` 去重并返回是否真的加了；后者直接返回 `List.Remove` 的布尔 |
| `GetListenerOfType<T>` | `public T GetListenerOfType<T>()` | 线性扫监听器，**首个 `is T` 匹配者获胜**，无匹配返回 `default(T)` |
| `LastOrDefault<T>` | `public T LastOrDefault<T>() where T : GameState` | `this._gameStates.LastOrDefault((GameState g) => g is T) as T`。**从栈顶往下找第一个匹配类型** |
| `RegisterActiveStateDisableRequest` | `public void RegisterActiveStateDisableRequest(object requestingInstance)` | 以 `WeakReference` 存入。幂等检查 `Contains(requestingInstance)` 比的是**目标对象**不是 `WeakReference` |
| `UnregisterActiveStateDisableRequest` | `public void UnregisterActiveStateDisableRequest(object requestingInstance)` | 正向遍历解包 `WeakReference.Target` 比对，命中即 `RemoveAt` 并 return |
| `OnSavedGameLoadFinished` | `public void OnSavedGameLoadFinished()` | 对所有监听器扇出同名回调。**本类内没有别的地方调它** |
| `FindPredecessor` | `internal GameState FindPredecessor(GameState gameState)` | **`internal` 不是 public**。被 [GameState](../GameState) 的 `Predecessor` 属性调用：`num > 0` 时返回前一个，否则 `null` |
| `_gameStates` / `_listeners` / `_activeStateDisableRequests` / `_gameStateJobs` | `private readonly` 四个字段 | 分别是 `List<GameState>` / `List<IGameStateManagerListener>` / `List<WeakReference>` / `Queue<GameStateJob>` |
| `GameStateManagerType` | `public enum GameStateManagerType { Game, Global }` | **嵌套 public 枚举**，完整名 `GameStateManager.GameStateManagerType` |
| `GameStateJob` / `JobType` | `private struct GameStateJob` / `public enum JobType` | `GameStateJob` **完全 private**，是这个队列的实现细节，外部**没有任何查看入口**。内部 `enum JobType { None, Push, Pop, CleanAndPushState, CleanStates }` |

## 真实示例

创建并压入状态（逐字照抄自 `SandBox.View/Map/MapScreen.cs:1316`）：

```csharp
private void OpenBannerEditorScreen()
{
    if (Campaign.Current.IsBannerEditorEnabled)
    {
        this._partyIconNeedsRefreshing = true;
        Game.Current.GameStateManager.PushState(Game.Current.GameStateManager.CreateState<BannerEditorState>(), 0);
    }
}
```

**`CreateState` 和 `PushState` 写在同一行**——因为创建不激活，两步必须连着做。注意这里用的是 `Game.Current.GameStateManager` 而不是 `GameStateManager.Current`，明确指向游戏期那一个。

带构造参数的状态（`SandBox.View/Map/MapScreen.cs:1326-1331`）：

```csharp
private void OpenFaceGeneratorScreen()
{
    if (Campaign.Current.IsFaceGenEnabled)
    {
        IFaceGeneratorCustomFilter faceGeneratorFilter = CharacterHelper.GetFaceGeneratorFilter();
        BarberState barberState = Game.Current.GameStateManager.CreateState<BarberState>(new object[]
        {
            Hero.MainHero.CharacterObject,
            faceGeneratorFilter
        });
        GameStateManager.Current.PushState(barberState, 0);
    }
}
```

`params object[]` 重载走 `Activator.CreateInstance(typeof(T), parameters)`，所以 `BarberState` 必须有一个**恰好匹配**这两个 `object` 的构造函数。注意这次压栈用的是 `GameStateManager.Current` 而创建用的是 `Game.Current.GameStateManager`——官方自己也不混着省，这是个提醒。

模态窗口期间冻结活动状态（`SandBox.GauntletUI/GauntletSaveLoadScreen.cs:39` 与 `SandBox.View/Map/Managers/SettlementVisualManager.cs:94` 的一对用法）：

```csharp
public class MyModalScreen
{
    private readonly object _disableRequest = new object();
    private GameStateManager _manager;

    public void Open()
    {
        this._manager = Game.Current.GameStateManager;
        this._manager.RegisterActiveStateDisableRequest(this._disableRequest);
    }

    public void Close()
    {
        this._manager.UnregisterActiveStateDisableRequest(this._disableRequest);
        this._manager = null;
    }

    // 下面是本示例自己声明的方法，不是 GameStateManager 的成员
    private void UpdateVisuals()
    {
    }

    private void OnTick()
    {
        if (GameStateManager.Current.ActiveStateDisabledByUser)
        {
            return;
        }
        this.UpdateVisuals();
    }
}
```

注册方（`this`）和请求对象（`this._disableRequest`）可以是两个对象——`RegisterActiveStateDisableRequest` 只存 `WeakReference`，所以**把请求对象做成一个长生命周期的字段**才能保证关闭前它不会被回收。这正是官方 `GauntletSaveLoadScreen` 把 `this` 直接传进去的原因。

栈里还有没有地图界面（`SandBox.GauntletUI/Map/GauntletMapConversationView.cs:267` 与 `TaleWorlds.CampaignSystem/Encounters/PlayerEncounter.cs:1115` 的形状）：

```csharp
MapState mapState = Game.Current.GameStateManager.LastOrDefault<MapState>();
if (mapState != null)
{
    mapState.OnConversationEnded();
}
else
{
    Campaign.Current.PlayerEncounter.DoEnd();
}
```

`LastOrDefault<MapState>()` 从栈顶往下扫，返回**最近一个** `MapState`。典型场景是任务系统：地图上压了一个任务界面，任务结束时不需要知道自己是谁压的，只要找到底下那个 `MapState` 打个招呼。

监听器（实现 [IGameStateManagerListener](../IGameStateManagerListener) 的五个方法）：

```csharp
public class MyStackWatcher : IGameStateManagerListener
{
    public void Attach()
    {
        GameStateManager.Current.RegisterListener(this);
    }

    public void Detach()
    {
        GameStateManager.Current.UnregisterListener(this);
    }

    public void OnCreateState(GameState gameState)
    {
        MBDebug.Print("created " + gameState.GetType().Name);
    }

    public void OnPushState(GameState gameState, bool isTopGameState)
    {
        this._lastPushed = gameState;
    }

    public void OnPopState(GameState gameState) { }
    public void OnCleanStates() { }
    public void OnSavedGameLoadFinished() { }
}
```

`OnPushState` 的第二个参数 `isTopGameState` 来自 `OnPushState` 里的 `bool isTopGameState = this._gameStates.Count == 0;`——**在插入之前**算的，所以它表示「这次压栈前栈是不是空的」。

## 风险与边界

- **`PopState(level)` 弹出不存在的 level 会抛 `ArgumentOutOfRangeException`。** `OnPopState` 里是 `int index = this._gameStates.FindLastIndex(...); GameState gameState = this._gameStates[index];`——`-1` 直接索引。**必须记住自己 push 时用的 level。** 这个异常会从队列排空循环里冒出来，报错位置离你的调用点很远。
- **没有任何状态注册表或去重。** `Level` 是调用方自选的 `int`（`GameState.Level` 是 public 字段），两个 mod 都用 level 0 就互相踩。没有 id、没有 `Contains`、没有「这个状态已经在栈上了」检查。**需要身份就自己维护一张 map。**
- **`ActiveState` 栈空时是 `null`。** 拆卸过程中、从 `async` 续体里、或从监听器回调早期读 `GameStateManager.Current.ActiveState.AnyMember` 都会 `NullReferenceException`。官方代码里遍地是 `GameStateManager.Current.ActiveState is MapState`（如 `SandBox.GauntletUI/SandboxSceneNotificationContextProvider.cs:13`）这种 `is` 判定的写法。
- **`FindPredecessor` 是 `internal`。** 所以 `GameState.Predecessor` 属性外部可用，但你想直接调管理器的方法不行——走 `state.Predecessor`。
- **两个管理器互不相通。** `Game.Current.GameStateManager` 与 `Module.CurrentModule.GlobalGameStateManager` 是独立列表。把 `GameStateManager.Current` 缓存进字段跨越「开始游戏 / 回主菜单」会拿到一个已被 `CleanStates(0)` 清空的实例——**setter 的副作用让它在被替换时就已经空了**。
- **tick 由外部驱动且受 `Current` 门控。** `Game.OnTick` 有 `if (GameStateManager.Current == this.GameStateManager)` 前置判断。你自己 `new GameStateManager(...)` 的第三个实例**永远不会 tick**，除非你手动调 `OnTick`。
- **`GetListenerOfType<T>()` 是「首个匹配」。** 监听器按初始化顺序添加，注册两个同类型监听器再指望命中特定那一个是不行的。
- **`RegisterActiveStateDisableRequest` 存 `WeakReference`。** 忘记 `Unregister` 且请求对象被回收 → 请求自动消失（`CleanRequests` 清理）→ `OnIdleTick` 而不是 `OnTick` 的窗口结束。**真正危险的是宿主对象一直存活**：`GauntletScreen` 忘了退订，游戏就永久 idle tick 且毫无提示。`CleanRequests` 每 tick 跑一次，所以「忘记退订但对象已死」这个较安全的失败模式会自愈。
- **监听器回调里可以重入，但语义要小心。** 回调里的 `PushState` 会排到队尾，本轮 `OnPushState` 的 `activeState2.HandleActivate()` 已经在跑——**新状态会先被当作「旧栈顶」收到 `HandleDeactivate`**（当它不是顶层时）。
- **`CleanAndPushState` 比 `CleanStates` 多一次 `Owner.OnStateChanged`。** 两个都调 `OnStateChanged`，但前者额外调一次。所以监听 owner 的代码在 `CleanAndPushState` 后可能被通知两次。
- **不是 `MBObjectBase`，不参与存档。** 没有 `StringId` / `Id`，`MBObjectManager` 不注册它。`GameState` 才是 `MBObjectBase` 子类。玩法数据要走战役自己的存档路径，不要挂在状态栈上。
- **完全无线程安全。** `Queue<GameStateJob>` 和 `List<GameState>` 都没有锁。后台 `Task` 调 `PushState` 会与主线程竞争。
- **`GameStateJob` 完全 private。** 想查看队列状态（比如「有没有排着 Push」）没有任何公开入口，调试时只能靠 `OnStateStackEmpty` 被调没被调来反推。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/GameStateManager.cs:9`，普通类。两个入口：

- **静态** `GameStateManager.Current`（`GameStateManager.cs:14`）。
- **从 `Game` 上读** `Game.GameStateManager`（`Game.cs:109`，`{ get; private set; }`）。

注意上面那行 `Destroy` 的事实：`Game.Destroy()` 会把 `GameStateManager.Current` 和 `Game.GameStateManager` **都置 null**，所以这两个入口在游戏结束后同样不可用。

**它没有无参构造函数。** 唯一构造是 `GameStateManager(IGameStateManagerOwner owner, GameStateManagerType gameStateManagerType)`（`GameStateManager.cs:86`），两个参数都由 `Game` 在构造时提供 —— 所以你不需要也不该自己造。

**push / pop 是配对的，且带一个你必须记住的 level。** 两个方法签名是 `PushState(GameState gameState, int level = 0)`（`GameStateManager.cs:235`）与 `PopState(int level = 0)`（243），**level 默认都是 0**。

**一段可直接跑的三行配对**：

```csharp
GameStateManager mgr = Game.GameStateManager;
mgr.PushState(myState, 1);
mgr.PopState(1);
```

**这两行是同步生效的，不是排队等下一帧。** 方法体各自只有三句：构造一个 `GameStateJob`、`this._gameStateJobs.Enqueue(item)`、然后立刻 `this.DoGameStateJobs();`。`DoGameStateJobs()`（`GameStateManager.cs:397`）是一个 `while (this._gameStateJobs.Count > 0)` 循环，把队列排空。

**这个设计有一个必须知道的后果：在 `PushState` 里再调 `PushState` 会立刻嵌套执行。** 因为外层的 `DoGameStateJobs` 正在循环里 `Dequeue`，内层新调用的 `DoGameStateJobs` 会把外层还没处理的 job 一并吃掉。所以 job 的执行顺序不是「先到先服务」的纯 FIFO。

**`LastOrDefault<T>()` 是安全取当前状态的入口。** `GameStateManager.cs:175` 的 `public T LastOrDefault<T>() where T : GameState` —— **先判 null 再用**，这是从管理器拿状态的正确姿势。

**最常见的坑：`PopState(level)` 弹出不存在的 level 会抛 `ArgumentOutOfRangeException`。** `OnPopState`（`GameStateManager.cs:299`）里是 `int index = this._gameStates.FindLastIndex((GameState state) => state.Level == level); GameState gameState = this._gameStates[index];` —— `-1` 直接索引。必须记住自己 push 时用的 level；而且因为异常是从队列排空循环里冒出来的，**报错位置离你的调用点很远**。这条已在「风险与边界」首条展开。

## 跨版本提示

`GameStateManager.cs` 在 1.3.0 是 14892 字节，1.3.15 是 14963，1.4.6 / 1.4.7 是 15374，1.5.3 是 15515——**四档递增**。但我把 `public` 行抽出来排序做 `diff`，**1.3.0 与 1.5.3 的输出为空**：public 成员集合跨 1.3 → 1.5 三个大版本**一条都没变**，包括 `Current` / `ActiveState` / `Listeners` / `GameStates` / `CurrentType` / `Owner` / `ActiveStateDisabledByUser`、两个 `CreateState<T>` 重载、四个栈方法、`OnTick`、两个 listener 注册方法、`GetListenerOfType<T>`、`LastOrDefault<T>`、两个 disable-request 方法、`OnSavedGameLoadFinished`，以及 public 静态字段 `StateActivateCommand`。

不变的关键约定：`Level` 的排序语义、`Current` setter 的 `CleanStates(0)` 副作用、`OnPopState` 的 `_gameStateJobs.Peek()` 空栈守卫、`ActiveStateDisabledByUser` 时 `OnIdleTick` + 提前 `return`、`FindPredecessor` 保持 `internal`。变的只有**方法体内部实现**（反编译产物差异、后续版本对 `HandleInitialize` / 监听器扇出的细节调整）。

所以升级时你不必改任何调用代码——**真正变的是栈的内容**：后续版本新增了大量 `GameState` 子类（编队、交易、海战相关），`GameStates` 与 `LastOrDefault<T>()` 扫到的类型集合会变大。你自己压进去的状态不受影响，但「哪些 GameState 类型存在」这件事在每个版本都不同，写依赖类型存在性的代码时要按版本核对。

## 依赖关系

- 栈元素：[GameState](../GameState) 是被叠放的对象，`CreateState<T>()` 的约束是 `where T : GameState, new()`。它是 `MBObjectBase` 子类，`Level` 是它的 public 字段，`HandleInitialize` / `HandleActivate` / `HandleDeactivate` / `HandleFinalize` 都是 `internal`，只能由本类调用
- 所有者接口：[IGameStateManagerOwner](../IGameStateManagerOwner) 只有 `OnStateStackEmpty()` 与 `OnStateChanged(GameState oldState)` 两个方法，[Game](../Game) 实现了它
- 监听者接口：[IGameStateManagerListener](../IGameStateManagerListener) 提供五个通知：`OnCreateState` / `OnPushState(state, isTop)` / `OnPopState` / `OnCleanStates` / `OnSavedGameLoadFinished`
- 枚举：[GameStateManagerType](../GameStateManagerType) 是嵌套的 `Game` / `Global`，通过只读的 `CurrentType` 暴露
- 两个实例的创建方：`TaleWorlds.MountAndBlade/Module.cs:89-90` 建 `Global` 并立刻赋给 `Current`；`TaleWorlds.Core/Game.cs:398` 建游戏期那一个，`Game.cs:481-483` 用 `Current == this.GameStateManager` 门控 tick
- 真实消费方：`SandBox.View/Map/MapScreen.cs`（PushState + CreateState 带参）、`SandBox.GauntletUI/GauntletSaveLoadScreen.cs`（disable request）、`SandBox/CampaignBehaviors/BarberCampaignBehavior.cs`（`GameStateManager.Current.PushState`）、`TaleWorlds.CampaignSystem/Encounters/PlayerEncounter.cs`（`LastOrDefault<MapState>()`）
- 调试辅助：[Debug](../Debug) 的 `ReportMemoryBookmark` 在 `GameState.HandleActivate` 末尾被调；示例里的 `MBDebug.Print` 属于 `TaleWorlds.Engine` 命名空间
- 桶首页：[core-extra API 分区](../)
