---
title: "GameStateManager"
description: "Bannerlord 界面之下的状态栈引擎：一个管理器持有一个有序的 GameState 列表，按 Level 压栈与弹栈，并且只 tick 栈顶。涵盖 CreateState<T>、PushState、CleanAndPushState、RegisterActiveStateDisableRequest 以及静态 GameStateManager.Current 的切换行为。"
---
# GameStateManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameStateManager`
**Base:** 无
**Source:** `TaleWorlds.Core/GameStateManager.cs`

## 概述

`GameStateManager` 是决定玩家正面对着哪个界面的栈机。它持有一个有序的 `List<GameState>`，把**最后一个**元素当作活动状态，并且只 tick 那一个。`Module` 会用一个 `GameStateManagerType.Global` 创建它来管理主菜单、splash 视频、档位选择和编辑器；`Game` 则为游戏内状态另建一个。当前生效的是哪一个通过静态 `GameStateManager.Current` 公布，而模块和游戏都会覆写它。mod 对界面做的一切——压入覆盖层、关闭菜单、让游戏暂停——都走这个类，并且每个操作都通过一个内部的 `Queue<GameStateJob>` 延迟执行，由 `DoGameStateJobs()` 同步排空。

## 心智模型

把它理解成**"一摞界面的所有者，加上修改这摞界面的任务队列"**，而不是某个状态对象本身。

**一次压栈的真实调用顺序：**

1. 你调用 `PushState(state, level)`。它**不**直接改动任何东西——它入队一个 `GameStateJob(JobType.Push, state, level)`。
2. `DoGameStateJobs()` 把它出队并运行 `OnPushState(state)`。
3. `OnPushState` 把新状态插到"最后一个 `Level` 小于等于新状态 Level 的状态"之后——正是这一点维持了 Level 的有序性。然后它比较前后的 `ActiveState`：若栈顶变了，就对旧栈顶调 `HandleDeactivate()`、对每个监听器触发 `IGameStateManagerListener.OnPushState`、对新栈顶调 `HandleInitialize()` 再 `HandleActivate()`，最后 `Owner.OnStateChanged(旧栈顶)`。
4. `OnPushState` 与 `OnPopState` 末尾都会执行 `Common.MemoryCleanupGC(false)`。

**三个坑：**

- **栈空时 `ActiveState` 是 `null`**——它不抛异常，也不返回哨兵值。`this._gameStates.Count <= 0` 时显式返回 `null`。任何在压栈/弹栈回调之外读取 `GameStateManager.Current.ActiveState` 的地方都需要 null 检查。
- **`ActiveStateDisabledByUser` 会把 `OnTick` 换成 `OnIdleTick`。** 只要有任何一个已注册的请求存活，`OnTick(dt)` 就调 `ActiveState.OnIdleTick(dt)` 并**提前返回**——正常的 tick 被完全跳过。这些请求以 `WeakReference` 持有，并在每次 tick 开头的 `CleanRequests()` 里被清理，所以忘记调 `UnregisterActiveStateDisableRequest` 会在引用对象被回收之后恢复游戏……真正危险的窗口是请求的宿主对象一直存活的情况。
- **重入压栈是入队而不是嵌套。** 因为每个公开的修改方法都是先入队再排空，从监听器回调里发起的 `PushState` 会追加到队列里，并被**同一个** `while (_gameStateJobs.Count > 0)` 循环排空。`OnPopState` 显式检查 `_gameStateJobs.Peek().Job` 来判断栈是否真的空了，正是为此。

## 何时该用 / 何时不该用

**该用 `GameStateManager` 的场景：**
- 你要压入或弹出一个全屏状态：`PushState`、`PopState`、`CleanAndPushState`、`CleanStates`，全都按 Level 区分。
- 你需要在不拥有状态的前提下观察栈变化：`RegisterListener(IGameStateManagerListener)` 会给你 `OnCreateState`、`OnPushState`、`OnPopState`、`OnCleanStates`、`OnSavedGameLoadFinished`。
- 你需要在模态覆盖层期间冻结活动状态：`RegisterActiveStateDisableRequest(object)` / `UnregisterActiveStateDisableRequest(object)`。

**不该用 `GameStateManager` 的场景：**
- 你要的是战役内界面。那些仍然是 `GameState` 对象，但战役通过 `IGameStateManagerOwner` 实现来构建它们，而且 `Game.Current.GameStateManager` 与全局的那个是不同实例——动手前先确认 `Current` 是哪一个。
- 你想每帧跑代码。用 `CampaignBehaviorBase` 或任务 tick，不要用 `OnTick`。
- 你需要一个单例管理器。`CreateState<T>()` 是唯一的构造方式（`where T : GameState, new()`），而且管理器完全允许同一个类型存在多个实例。

## 依赖关系

- [GameState](../GameState/) — 被这个管理器叠放的对象；`CreateState<T>` 要求 `T : GameState, new()`。
- [IGameStateManagerOwner](../IGameStateManagerOwner/) — 接收 `OnStateChanged(oldState)` 与 `OnStateStackEmpty()`。
- [IGameStateManagerListener](../IGameStateManagerListener/) — 你可以订阅的五项栈通知。
- [GameStateManagerType](../GameStateManagerType/) — `Game` 或 `Global`，存放在只读的 `CurrentType` 上。
- [Module](../../core/Module/) — 在构造函数里创建 `Global` 管理器并把它安装为 `GameStateManager.Current`。
- [Game](../Game/) — 拥有游戏期的管理器，游戏运行期间它接管 `GameStateManager.Current`。

## 主要成员

### 栈修改

#### `public void PushState(GameState gameState, int level = 0)`
入队一次压栈。新状态会落在所有 `Level <= level` 的状态之上，也就是说 `level` 是个**排序键**，不是栈深度——连续两次以 level 0 压栈，第二次才是活动状态。

#### `public void PopState(int level = 0)`
入队一次弹栈，移除**最后一个 `Level` 等于** `level` 的状态，然后激活新的栈顶。如果没有任何状态的 Level 匹配，`FindLastIndex` 返回 `-1`，方法就会去索引 `-1`——那是一个未加保护的 `ArgumentOutOfRangeException`。永远弹出你压入时的那个 level。

#### `public void CleanAndPushState(GameState gameState, int level = 0)`
入队一个组合任务：所有 `Level >= gameState.Level` 的状态先被停用、收尾、移除，*然后*新状态才被压入。这就是主菜单用的"替换这一层的整个界面"调用（`CleanAndPushState(CreateState<InitialState>(), 0)`）。

#### `public void CleanStates(int level = 0)`
入队移除所有位于 `level` 及以上的状态，对所有监听器触发 `OnCleanStates()`，并激活新的栈顶（或调用 `Owner.OnStateStackEmpty()`）。注意静态 `Current` 的**setter** 也会以 level `0` 调用它，所以给 `Current` 赋新值会把旧管理器整个栈清空。

### 创建与查看

#### `public T CreateState<T>() where T : GameState, new()` / `public T CreateState<T>(params object[] parameters) where T : GameState, new()`
两者都用 `Activator.CreateInstance`（无参那个是泛型调用，另一个走 `Type` + `object[]`），然后执行 `HandleCreateState`：设置 `state.GameStateManager = this`，并对每个监听器触发 `OnCreateState(state)`。**约定：**创建*不会*激活状态——你仍然必须把它压栈。

#### `public GameState ActiveState { get; }`
栈顶，或者 `null`。每次 get 都重新计算；没有缓存字段。

#### `public IEnumerable<GameState> GameStates { get; }` / `public T LastOrDefault<T>() where T : GameState`
`GameStates` 是底层列表的只读包装；`LastOrDefault<T>()` 从后往前找最近一个指定类型的状态，这就是"栈里如果还有地图界面就把它找出来"的写法。

#### `public IReadOnlyCollection<IGameStateManagerListener> Listeners { get; }`
只读*视图*——`this._listeners.AsReadOnly()`——每次访问都新建。它不是快照：如果监听器正在被并发添加，不要缓存后再枚举。

### 监听器

#### `public bool RegisterListener(IGameStateManagerListener listener)` / `public bool UnregisterListener(IGameStateManagerListener listener)`
注册时若监听器已存在则返回 `false`（且什么都不添加）。注销直接返回 `List.Remove` 的 `true` / `false`。

#### `public T GetListenerOfType<T>()`
线性扫描监听器列表，首个匹配者获胜，无匹配返回 `default(T)`。监听器按模块/游戏初始化顺序添加，所以"首个匹配"依赖加载顺序——不要注册两个同类型监听器还指望命中特定那个。

#### `public void OnSavedGameLoadFinished()`
把 `OnSavedGameLoadFinished()` 扇出给每个监听器。这个类里没有别的地方会触发它；读档路径负责调用。

### tick 节流

#### `public void RegisterActiveStateDisableRequest(object requestingInstance)` / `public void UnregisterActiveStateDisableRequest(object requestingInstance)`
以 `WeakReference` 存下你的对象。只要至少有一个请求存活，`OnTick` 就走 `OnIdleTick` 而不是 `OnTick`。注册按引用幂等（`Contains` 检查比较的是对象本身，不是 `WeakReference`）。

#### `public bool ActiveStateDisabledByUser { get; }`
当 `_activeStateDisableRequests.Count > 0` 时为 true。只读；列表是私有的，只能通过上面两个方法修改。

#### `public void OnTick(float dt)`
先清理已失效的弱引用，然后依据 `ActiveState` 的 null 检查，要么调 `ActiveState.OnIdleTick(dt)`（被禁用时），要么调 `OnTick(dt)`。

### 单例

#### `public static GameStateManager Current { get; set; }`
setter **不是**普通赋值：它在存新值之前先对被换掉的管理器调用 `CleanStates(0)`。切换前你没有弹出的任何状态都会被无声地收尾。

#### `public static string StateActivateCommand`
一个公开的静态字符串，被 `GameState.HandleActivate()` 读取：当它非空时会调用 `CommandLineFunctionality.CallFunction(StateActivateCommand, "", out flag)`。原生层用它从激活事件驱动控制台命令；mod 在这里赋一个无效值，每次激活都会触发一次引擎级调用。

## 使用示例

### 示例 1 —— 创建并压入一个状态

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MyOverlayState : GameState
    {
        protected override void OnActivate()
        {
            MBDebug.Print("overlay active");
        }
    }

    public class MyPusher
    {
        public void Show()
        {
            // 游戏内界面用 GameStateManagerType.Game；Current 就是存活的那个。
            GameStateManager manager = GameStateManager.Current;
            MyOverlayState state = manager.CreateState<MyOverlayState>();
            manager.PushState(state, 10);
            MBDebug.Print("active now = " + manager.ActiveState.GetType().Name);
        }

        public void Hide()
        {
            // 弹出你压入时用的那个 Level，否则会索引 -1 并抛异常。
            GameStateManager.Current.PopState(10);
        }
    }
}
```

### 示例 2 —— 不拥有状态也能观察栈

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MyStackWatcher : IGameStateManagerListener
    {
        public void OnCreateState(GameState gameState) { }
        public void OnPushState(GameState gameState, bool isTopGameState) { }
        public void OnPopState(GameState gameState) { }
        public void OnCleanStates() { }
        public void OnSavedGameLoadFinished() { }

        public void Attach()
        {
            GameStateManager.Current.RegisterListener(this);
        }

        public void FindMapScreen()
        {
            // LastOrDefault 从后往前扫描存活栈。
            GameState found = GameStateManager.Current.LastOrDefault<GameState>();
            MBDebug.Print("top of stack = " + (found == null ? "none" : found.GetType().Name));
        }
    }
}
```

### 示例 3 —— 模态窗口期间冻结活动状态

```csharp
using TaleWorlds.Core;

namespace MyMod
{
    public class MyModal
    {
        // 模态打开期间保持存活的请求对象。
        private readonly object _request = new object();

        public void Open()
        {
            GameStateManager.Current.RegisterActiveStateDisableRequest(_request);
        }

        public void Close()
        {
            // 既要让对象被回收，也必须丢掉请求，否则 OnTick 会一直走 OnIdleTick。
            GameStateManager.Current.UnregisterActiveStateDisableRequest(_request);
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** `GameStateManager` 不持有任何被序列化的数据，也不创建可保存对象。携带玩法数据的 `GameState` 必须走战役自己的存档路径，而不是状态栈；被弹出的状态会经过 `HandleFinalize()`，后者把 `_listeners` 与 `GameStateManager` 都置为 `null`，于是指向已弹出状态的引用就是纯粹的负担，之后任何 `IsActive` 读取都会抛异常。
- **跨域依赖。** 存在两个管理器——`Module.GlobalGameStateManager`（`GameStateManagerType.Global`）和 `Game.Current.GameStateManager`。静态 `Current` 在两者间切换：`Current` 的 **setter** 会对被换出的实例调用 `CleanStates(0)`。把 `GameStateManager.Current` 缓存进字段并跨越"开始游戏 / 回主菜单"边界，你会持有一个被清空的栈。
- **加载顺序。** `CreateState<T>` 要求 `T : GameState, new()`，所以该类型必须有公共无参构造函数，**并且**能在那一刻已加载的程序集里被 `Activator` 解析。`Module.FindMissions()` 和 `AddSubModule` 的 `Managed.AddTypes(...)` 注册都在第一个游戏之前跑完；但某个 `SubModule.xml` 加载失败的模块里声明的类型就是不存在。
- **ID 稳定性。** `Level` 这个 int 是状态唯一的身份，而且完全**由调用方指定**。两个不同的 mod 都以 level 0 压栈时，第二个会静默抢走栈顶。这里没有注册表、没有唯一 id、压栈也没有去重；如果你需要身份，就自己维护一张实例到键的映射。
- **弹出没人压过的 level。** `FindLastIndex(state => state.Level == level)` 返回 `-1` 后去索引 `_gameStates[-1]`，会从 tick 循环里抛 `ArgumentOutOfRangeException`，而且报错位置对你的调用点毫无提示价值。
- **空的 `ActiveState`。** 拆卸过程中或从 `async` 续体里读 `GameStateManager.Current.ActiveState.SomeMember` 会拿到 `NullReferenceException`。`Module.FinalizeModule()` 并不会防御性地清空全局栈。
- **线程亲和性。** 这里没有任何线程安全保证。`Module.OnApplicationTick` 在主线程调 `OnTick`；后台 `Task` 调 `PushState` 会与 `Queue<GameStateJob>` 竞争。

## 跨版本提示

- **v1.3.0：** `GameStateManager` 是 `public class GameStateManager`，无基类。公开接口恰好是：`Current`、`Listeners`、`CurrentType`、`Owner`、`GameStates`、`ActiveStateDisabledByUser`、`ActiveState`、两个监听器注册方法、`GetListenerOfType<T>`、两个 disable-request 方法、`OnSavedGameLoadFinished`、`LastOrDefault<T>`、两个 `CreateState<T>` 重载、`OnTick`、`PushState`、`PopState`、`CleanAndPushState`、`CleanStates`，以及公开静态 `StateActivateCommand`。
- **嵌套的 `GameStateManagerType { Game, Global }` 枚举和嵌套的私有 `GameStateJob` 结构体不是你能从外部使用的成员**——`GameStateJob` 是 `private`，所以这个队列完全是实现细节，没有任何公开的查看入口。
- **v1.3.15 / v1.4.5：** push / pop / clean 这一族以及两个 `CreateState<T>` 重载保持稳定。后续版本扩展的是栈的*内容*（新增状态类型）和战役侧的所有者实现，但 Level 排序约定和 `Current` setter 的 `CleanStates(0)` 副作用都没有变化。

## 参见

- ↑ 上级目录：[Core-extra API 索引](../)
- ↔ 同级：[GameState](../GameState/) — 被叠放的对象
- ↔ 同级：[IGameStateManagerListener](../IGameStateManagerListener/) · [IGameStateManagerOwner](../IGameStateManagerOwner/)
- ↖ 创建方：[Module](../../core/Module/) — 构建全局管理器
- ↪ 每个游戏的所有者：[Game](../Game/)
- ↑ 架构：[SDK 总览](../../../architecture/sdk-overview/)