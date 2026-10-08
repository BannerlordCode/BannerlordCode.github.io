---
title: "GameStateManager"
description: "状态栈管理器：维护有序的 GameState 列表，负责 push/pop/clean 时的停用、终结、激活与回调广播。"
---
# GameStateManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class GameStateManager`
**Base:** `System.Object`
**Source:** `TaleWorlds.Core/GameStateManager.cs`

## 概述

这是 UI/逻辑状态的单页栈管理器。它内部维护一个 `List<GameState> _gameStates`（有序、不去重）、一个监听器列表、一个「用户请求暂停活动状态」的弱引用列表，以及一个待执行作业队列。核心动作只有四个：`PushState`、`PopState`、`CleanAndPushState`、`CleanStates`——后三者都只是**往队列里塞一个 job 然后立刻 `DoGameStateJobs()` 排干**，真正的状态迁移发生在 `OnPushState` / `OnPopState` / `OnCleanAndPushState` / `OnCleanStates` 这四个 private 方法里。

游戏里有两个实例，通过 `GameStateManager.Current` 区分：`GameType.Game` 那一档是 [Game](../Game) 的私有栈（`Game.CreateGameManager()` 创建），`Global` 那一档是 [Module](../../core/Module) 构造函数里直接 new 出来的全局栈，后者在 `Module` 构造时就被赋给 `Current`，因此**整局游戏早期它才是当前栈**。

每个 `GameState` 带一个 `Level` 字段，`PushState` 用 `FindLastIndex(state => state.Level <= gameState.Level)` 决定插入位置——**Level 相同的 state 会插在已有同级 state 之后，Level 小的插在前面**。这就是「地图上盖一个菜单」这类嵌套能工作的原因。

## 心智模型

典型调用顺序（以一个 mod 自定义菜单为例）：

1. `CreateState<T>()` 或 `CreateState<T>(args...)` 造出 state。`CreateState` 会把它挂上 `state.GameStateManager = this`，并广播 `OnCreateState(state)` 给所有监听器。
2. `RegisterListener(...)` 注册自己的 `IGameStateManagerListener`（**去重**，重复注册返回 false）。
3. `PushState(state, level)`。主线程断言 → 入队 → 排干 → `OnPushState`：找到插入位 → 若活动状态变了，旧活动状态 `HandleDeactivate()`（仅当 `Activated` 为真）→ 广播 `OnPushState(newActive, isTopGameState)` → 新状态 `HandleInitialize()` + `HandleActivate()` → `Owner.OnStateChanged(oldActive)` → `Common.MemoryCleanupGC(false)`。
4. 每帧 `OnTick(dt)`：先 `CleanRequests()` 清掉已死的弱引用，然后若 `ActiveStateDisabledByUser` 为真走 `ActiveState.OnIdleTick(dt)` 直接 return，否则 `ActiveState.OnTick(dt)`。
5. 收尾 `PopState(level)` 或 `CleanStates(level)`。

常见误用最致命的一条：**从非主线程调 `PushState` / `PopState`**。这两个方法开头就有 `TWParallel.IsMainThread()` 断言 + `Debug.FailedAssert("State should be changed from main thread")`——但**它不 return，断言之后照样入队**。也就是说开发版会刷日志、正式版也会继续执行，状态栈就坏了。异步回调里要改状态，必须 marshal 回主线程。

第二条是 `PopState(level)` 找不到匹配层级时 `_gameStates[num]` 越界——`FindLastIndex` 返回 -1 时直接 `this._gameStates[-1]` 抛 `ArgumentOutOfRangeException`。所以 pop 之前先确认那个层还在。

第三条是**误以为 `Current` 只有一个**。全局栈（`Global`）和局内栈（`Game`）会来回切换 `Current`；`Game.OnTick` 里明确检查 `GameStateManager.Current == this.GameStateManager` 才 tick。你在后台线程缓存 `GameStateManager.Current` 会拿到过期的那个。

第四条是**忘记解绑监听器**。`UnregisterListener` 要手动调；状态栈活到局末，监听器持有你的对象会一直泄漏。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Current` | `public static GameStateManager Current { get; set; }` | 当前活动状态栈的静态单例。**setter 有副作用**：赋新值前会先对旧实例 `CleanStates(0)`（清空整个栈），再写入。这是全局栈与局内栈切换的机制所在。 |
| `Listeners` | `public IReadOnlyCollection<IGameStateManagerListener> Listeners { get; }` | 只读视图，每次 get 都新建 `AsReadOnly()` 包装。**遍历它时不要增删监听器**。 |
| `GameStates` | `public IEnumerable<GameState> GameStates { get; }` | 只读视图，顺序即栈底到栈顶。用它做调试输出比 `ActiveState` 信息量大。 |
| `CurrentType` | `public GameStateManager.GameStateManagerType CurrentType { get; private set; }` | `Game` 或 `Global`，构造时确定。用来判断「我拿到的是不是局内栈」。 |
| `Owner` | `public IGameStateManagerOwner Owner { get; private set; }` | 状态变化的通知目标。[Game](../Game) 或 [Module](../../core/Module)。栈空时会回调 `OnStateStackEmpty()`。 |
| `ActiveState` | `public GameState ActiveState { get; }` | 栈顶。**栈为空时返回 null**——不是抛异常。 |
| `ActiveStateDisabledByUser` | `public bool ActiveStateDisabledByUser { get; }` | 只要禁用请求列表非空就为真。典型用途是「过场动画中冻结 UI 逻辑」，此时 `OnTick` 走 `OnIdleTick` 而不是 `OnTick`。 |
| `StateActivateCommand` | `public static string StateActivateCommand` | 公开静态字段，控制台里用来强制切状态的命令名。改它会影响调试命令行行为。 |
| `GameStateManagerType` | `public enum GameStateManagerType { Game, Global }` | 嵌套枚举，区分局内栈与全局栈，构造时固定。 |
| `.ctor` | `public GameStateManager(IGameStateManagerOwner owner, GameStateManager.GameStateManagerType gameStateManagerType)` | 建四个内部集合。**构造本身不把自己设为 `Current`**——全局栈是 `Module` 构造函数显式赋的，局内栈也由 `Game.CreateGameManager()` 之后另行处理。 |
| `RegisterListener` | `public bool RegisterListener(IGameStateManagerListener listener)` | 注册监听器，内部用 `Contains` 去重。**返回 false 表示之前已注册过**，不会重复添加。 |
| `UnregisterListener` | `public bool UnregisterListener(IGameStateManagerListener listener)` | 移除监听器，返回 `List.Remove` 的结果。 |
| `GetListenerOfType` | `public T GetListenerOfType<T>()` | 返回**第一个**能转型成 `T` 的监听器，没有则返回 `default(T)`（引用类型即 null）。 |
| `RegisterActiveStateDisableRequest` | `public void RegisterActiveStateDisableRequest(object requestingInstance)` | 登记一个「请冻结活动状态」的请求，存为 `WeakReference` 避免延长生命周期。传对象实例，不要传 lambda 或临时对象，否则马上被回收。 |
| `UnregisterActiveStateDisableRequest` | `public void UnregisterActiveStateDisableRequest(object requestingInstance)` | 按 `WeakReference.Target` 相等移除。**找到第一个就 return**。 |
| `OnSavedGameLoadFinished` | `public void OnSavedGameLoadFinished()` | 无条件广播给所有监听器。读档完成后由上层调用。 |
| `OnTick` | `public void OnTick(float dt)` | 每帧驱动：清死引用 → 若被冻结则 `ActiveState.OnIdleTick(dt)` 并 return → 否则 `ActiveState.OnTick(dt)`。栈空时什么都不做。 |
| `LastOrDefault` | `public T LastOrDefault<T>() where T : GameState` | 在栈里从顶向下找第一个 `is T` 的 state。**找活动状态时它比 `ActiveState` 更稳**（活动态可能是某个基类实例）。 |
| `CreateState` | `public T CreateState<T>() where T : GameState, new()` | 无参构造 + `HandleCreateState`（挂 `GameStateManager` 引用并广播 `OnCreateState`）。 |
| `CreateState` | `public T CreateState<T>(params object[] parameters) where T : GameState, new()` | 用 `Activator.CreateInstance(typeof(T), parameters)` 构造后同样走 `HandleCreateState`。要求 `T` 有匹配的公开构造。 |
| `PushState` | `public void PushState(GameState gameState, int level = 0)` | 压栈。**主线程断言但不阻断**。按 `Level` 找插入位；若活动状态改变则旧态 `HandleDeactivate`、广播 `OnPushState(newActive, isTopGameState)`、新态 `HandleInitialize` + `HandleActivate`、通知 owner。 |
| `PopState` | `public void PopState(int level = 0)` | 弹掉 `Level == level` 的**最后一个** state。目标态依次 `HandleDeactivate` + `HandleFinalize`；新活动态为空时视队列情况回调 `Owner.OnStateStackEmpty()`。 |
| `CleanAndPushState` | `public void CleanAndPushState(GameState gameState, int level = 0)` | 清掉所有 `Level >= gameState.Level` 的 state（逐个 `HandleDeactivate` + `HandleFinalize`），然后 `OnPushState(gameState)`，最后额外调一次 `Owner.OnStateChanged(previousActive)`。**无主线程断言**。 |
| `CleanStates` | `public void CleanStates(int level = 0)` | 清空 `Level >= level` 的所有 state（逐个 `HandleDeactivate` + `HandleFinalize`），广播 `OnCleanStates()`，新活动态 `HandleActivate()`，栈空则回调 `Owner.OnStateStackEmpty()`。`Current` 的 setter 内部就是调 `CleanStates(0)`。 |
| `FindPredecessor` | `internal GameState FindPredecessor(GameState gameState)` | 返回栈中该 state 的前一个，栈底则返回 null。internal，外部程序集用不到，但它是 `PopState` 语义的基础。 |

`CleanStates` 的内部展开：`OnCleanStates(popLevel)` 按 `Level >= popLevel` 找到边界、逐个 `HandleDeactivate` + `HandleFinalize` 移除，然后广播 `OnCleanStates()` 给所有监听器；若活动态因此变了，新活动态 `HandleActivate()`，栈真的空了则回调 `Owner.OnStateStackEmpty()`，最后 `Owner.OnStateChanged(previousActive)`。**`GameStateManager.Current` 的 setter 内部就是调 `CleanStates(0)`**——也就是说换栈会把旧栈整个清空，所有 `GameState` 的 `HandleFinalize` 都会被触发。

`OnPushState` / `OnPopState` / `OnCleanAndPushState` / `OnCleanStates` 这四个状态迁移方法都是 `private`；`IGameStateManagerListener` 的 `OnCreateState` / `OnPushState` / `OnPopState` / `OnCleanStates` / `OnSavedGameLoadFinished` 是外部可见的挂载点。

## 怎么用

### 怎么拿到它

`GameStateManager` 是 `TaleWorlds.Core/GameStateManager.cs:9` 的 `public class GameStateManager`，**不继承 `MBObjectBase`**——它是 [GameState](../GameState) 栈的管理者。

公开构造器 `public GameStateManager(IGameStateManagerOwner owner, GameStateManager.GameStateManagerType gameStateManagerType)`（`:86`）。两个出口：

- `public static GameStateManager Current`（`:14`）
- `Game.GameStateManager` 属性——`Game.CreateGameManager()` 建的正是**局内私有那一档** `new GameStateManager(this, GameStateManagerType.Game)`；跨局的全局栈在 `Module.GlobalGameStateManager` 上。

**创建状态必须走它，不能自己 new。** `public T CreateState<T>() where T : GameState, new()`（`:181`）先 `new T()` 再 `HandleCreateState(t)`；`public T CreateState<T>(params object[] parameters)`（`:189`）走 `Activator.CreateInstance(typeof(T), parameters)`。`HandleCreateState`（`:203`）做两件事：`state.GameStateManager = this;` 然后广播 `OnCreateState`。**漏掉这一步，新状态的 `GameStateManager`（`GameState.cs:44`，setter 是 internal）就是 null**，之后所有压栈/弹栈都会失效。

两个类型判定：`public GameState ActiveState`（`:73`）和 `public IEnumerable<GameState> GameStates`（`:53`）。

### 典型用法

```csharp
using TaleWorlds.Core;

GameStateManager mgr = Game.Current.GameStateManager;

// 创建：必须用 CreateState，让 HandleCreateState 注入 GameStateManager 并广播（:181）
MyState st = mgr.CreateState<MyState>();                 // GameStateManager.cs:181

// 带参数创建：约束仍然是 new()，但走 Activator（:189）
MyState withArgs = mgr.CreateState<MyState>(someArg);

// 压栈/弹栈：先自己 newGameStateManager 不行
mgr.PushState(st);                                       // :235，内部先断言主线程（:239）
mgr.PopState();                                          // :247，签名 PopState(int level = 0)

// 读当前状态；ActiveState 可能为 null
GameState top = mgr.ActiveState;                         // :73
foreach (GameState s in mgr.GameStates) { /* :53 */ }
```

### 最容易踩的坑

**自己 `new MyState()` 然后压栈。** `GameState` 的构造器是 `protected`（`GameState.cs:67`），外部 new 不了——这挡住了最直接的错法。真正的陷阱是：如果你把状态**从一个别的 `GameStateManager` 里 `CreateState` 出来**再压进当前栈，`HandleCreateState`（`:203`）已经把 `state.GameStateManager` 指向了那个**另一个 manager**，而 `GameState.GameStateManager`（`GameState.cs:44`）的 setter 是 internal、**没有任何公开修正途径**。后果是这个状态的弹栈、tick 都作用到错误的栈上，表现为「界面关不掉」或「界面跳了两层」。

第二个坑是 `OnTick(float dt)`（`:208`）里 `ActiveStateDisabledByUser` 的分支：

```
this.CleanRequests();
if (this.ActiveState != null) {
    if (this.ActiveStateDisabledByUser) { this.ActiveState.OnIdleTick(dt); return; }
```

也就是说 `ActiveStateDisabledByUser` 为真时**只跑 `OnIdleTick`、直接 return**——你的状态的 `OnTick` 不会被调，界面完全不动但 `OnIdleTick` 还在跑。这正是「加了模组后游戏不暂停但界面卡住」的成因：有人在调 `RegisterActiveStateDisableRequest`（`:143`）却没配对调 `UnregisterActiveStateDisableRequest`（`:152`）。

第三，`RegisterListener`（`:109-118`）**重复注册返回 false**，而 `GameState.RegisterListener`（`GameState.cs:73`）遇到 null 只断言不返回——两者行为不同，不要混用。

## 真实示例

一个带层级的自定义 state 栈操作（列表页、覆盖层、任务）：

```csharp
GameStateManager states = GameStateManager.Current;

// 1. 注册监听器
states.RegisterListener(new MyStateListener());

// 2. 造 state 并压栈
MyOverlayState overlay = states.CreateState<MyOverlayState>();
states.PushState(overlay, level: 10);

// 3. 叠一个更高层的确认框
MyConfirmState confirm = states.CreateState<MyConfirmState>();
states.PushState(confirm, level: 20);

// 4. 关闭最上面那层
states.PopState(20);

// 5. 一把清掉第 10 层及以上的所有 state
states.CleanStates(10);
```

冻结活动状态（典型是过场或 mod 的长计算）：

```csharp
GameStateManager states = GameStateManager.Current;
object ownerToken = this;
states.RegisterActiveStateDisableRequest(ownerToken);
// 期间 OnTick 走 ActiveState.OnIdleTick 而不是 OnTick
states.UnregisterActiveStateDisableRequest(ownerToken);
```

从 `IGameStateManagerListener` 内部反查栈状态：

```csharp
public void OnPushState(GameState activeState, bool isTopGameState)
{
    GameStateManager states = GameStateManager.Current;
    if (states != null && states.ActiveStateDisabledByUser)
    {
        Debug.Print("push happened while frozen", 0);
    }
    GameState found = states.LastOrDefault<MyOverlayState>();
    if (found == null)
    {
        states.CleanAndPushState(states.CreateState<MyOverlayState>(), 10);
    }
}
```

## 风险与边界

- **主线程亲和且断言不阻断。** `PushState` / `PopState` 里的 `Debug.FailedAssert` 只是打日志，**代码继续执行**。从 async/await 续体、任务线程里调它们会真的破坏状态栈。用 `SynchronizationContext` 或在 `OnApplicationTick` 里排队。
- **`PopState` 会越界。** 目标 `level` 不存在时 `FindLastIndex` 返回 -1，随后 `this._gameStates[-1]` 抛 `ArgumentOutOfRangeException`。pop 前先确认。
- **`Current` 的 setter 会清空旧栈。** 任何写 `GameStateManager.Current = x` 的代码都会让旧栈所有 state 走 `HandleFinalize`。切换局内/全局栈时把这点算进去。
- **`ActiveState` 可能为 null。** 栈空时返回 null，`OnTick` 内部有判空但你的代码没有自动保护。
- **监听器是强引用且不自动解绑。** 局末不 `UnregisterListener` 就泄漏整个监听器对象图。
- **禁用请求用弱引用。** 传 lambda、临时对象、值类型装箱的 `WeakReference` 会立刻失效，冻结失效而且没有报错。
- **`CleanAndPushState` 没有主线程断言。** 它比 `PushState` 更危险：非主线程调用不会留下任何日志痕迹。
- **每次 get `Listeners` / `GameStates` 都新建包装。** 在 `foreach` 里访问这些属性会每次分配；更糟的是遍历 `Listeners` 时增删会抛 `InvalidOperationException`。
- **`MemoryCleanupGC` 副作用。** 每次 push/pop 结束都会 `Common.MemoryCleanupGC(false)`，这是全局 GC 行为，不要在这些回调里堆积大对象期望活到下一帧。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/GameStateManager.cs` 逐行比对，**public 表面完全一致**：`Current`（含 setter）、`Listeners`、`GameStates`、`CurrentType`、`Owner`、`ActiveState`、`ActiveStateDisabledByUser`、`StateActivateCommand`、构造器、`RegisterListener` / `UnregisterListener` / `GetListenerOfType<T>`、两个 `CreateState<T>` 重载、`OnTick`、`LastOrDefault<T>`、`PushState` / `PopState` / `CleanAndPushState` / `CleanStates`、`OnSavedGameLoadFinished`、嵌套枚举 `GameStateManagerType`。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameStateManager.cs`（399 行）与 `bannerlord-1.4.6/TaleWorlds.Core/GameStateManager.cs`（492 行）逐成员比对 public/protected 表面。**与 1.4.6 的 public/protected 表面 0 新增 / 0 移除 / 0 可访问性变化**（各 22 个成员）。唯一一处写法差异是嵌套枚举 `JobType` 的限定写法：1.4.5 写 `public readonly JobType Job`，1.4.6 写 `public readonly GameStateManager.GameStateJob.JobType Job` —— **反编译形态差异、不是语义差异**，类型是同一个。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 宿主：[Game](../Game) 的 `CreateGameManager()` 创建 `GameType.Game` 那一档并成为 `Owner`
- 全局栈宿主：[Module](../../core/Module) 构造时创建 `GameType.Global` 那一档
- 管理器基类：[GameManagerBase](../GameManagerBase) 持有 `Game`，间接驱动本类的 `OnTick`

- 上一级：[v1.4.6 内容根](../../../)

## 导航

- 同桶：[`../GameState`](../GameState) · [`../Game`](../Game) · [`../GameManagerBase`](../GameManagerBase)
- 父索引：[`../_index`](../_index)
