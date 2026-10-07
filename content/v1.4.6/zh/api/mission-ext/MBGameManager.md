---
title: "MBGameManager"
description: "abstract 的游戏生命周期总控：把一整套 GameManagerBase 的抽象生命周期转成对所有子模块的扇出调用，并提供 StartNewGame / EndGame 这两个一进一出的静态入口。"
---
# MBGameManager

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MBGameManager : GameManagerBase`
**Source:** `TaleWorlds.MountAndBlade/MBGameManager.cs`

## 概述

`MBGameManager` 是「Mount & Blade 游戏」这一层的生命周期总控，继承 [GameManagerBase](../../core-extra/GameManagerBase)。它自己几乎不持有游戏状态——`IsEnding` 和 `IsLoaded` 两个布尔是仅有的字段级成员——**它做的事情是把基类的十来个抽象生命周期方法，转成对 `Module.CurrentModule.CollectSubModules()` 收集到的全部子模块的扇出调用**。真正的游戏逻辑住在各个模块里。

`public abstract`，而且这是本批次五个类型里**唯一一个真正可继承的类型**。它的构造函数是 `protected`，派生类实例化后由 `MBGameManager.StartNewGame(gameLoader)` 接管加载流程。游戏本体里真实存在的派生类有四个：`SandBoxGameManager`（`SandBox`）、`CustomGameManager`（`TaleWorlds.MountAndBlade.CustomBattle`）、`EditorGameManager`（`TaleWorlds.MountAndBlade`）、`MultiplayerGameManager`（`TaleWorlds.MountAndBlade.Multiplayer`）。

不过要说清楚：**mod 一般不需要派生它**。它提供的绝大多数成员是给游戏本体与各模块用的；mod 侧几乎只需要读 `MBGameManager.Current` 拿三个布尔（`IsEnding`、`IsLoaded`、由 `CheckAndSetEnding()` 给出的一次性许可），以及在需要时调静态的 `EndGame()`。

## 心智模型

**`Current` 不是「当前正在玩的游戏」，而是「最近构造出来的 GameManagerBase」。** `GameManagerBase.Current` 是在**基类构造函数**里赋值的（`protected GameManagerBase() { GameManagerBase.Current = this; ... }`），不是 `Initialize()` 里。而 `MBGameManager.Current` 只是把它强转一遍：`(MBGameManager)GameManagerBase.Current`。后果有两个：一是在 `GameManagerBase` 构造完成之前读它是 null；二是**如果当前活跃的 GameManagerBase 不是 MBGameManager 的派生类，这个强转会抛 `InvalidCastException`**，而不是返回 null。

**`IsEnding` 与 `CheckAndSetEnding()` 是一对「一次性许可」。** `CheckAndSetEnding()` 在锁里检查 `IsEnding`：已经为真就返回 false（表示「别人已经在收尾了」），否则置真并返回 true（表示「你拿到了收尾权」）。`EndGame()` 用的就是它。`IsEnding` 的 setter 是 private，外部改不了。

**`IsLoaded` 由引擎置位，派生类可写。** setter 是 `protected`，`OnLoadFinished()` 的实现就是 `this.IsLoaded = true;`。所以派生类可以在加载过程中改它，但 mod 读到的永远是引擎设的那个值。

**「开始」有两条路，别搞混。** `protected static void StartNewGame()` 直接调 `MBAPI.IMBGame.StartNew()`，连同 `protected static void LoadModuleData(bool isLoadGame)` 调 `MBAPI.IMBGame.LoadModuleData(isLoadGame)`——这两条是给派生类在自己流程里用的底层入口。真正的启动是那个 public 静态重载 `StartNewGame(MBGameManager gameLoader)`，它做三步：先 `Module.CurrentModule.OnBeforeGameStart(gameLoader)` 通知模块、然后 `GameStateManager.Current.CreateState<GameLoadingState>()` 建一个加载状态、把参数灌进去，最后 `CleanAndPushState(..., 0)` 压栈。游戏本体调用它的形式是 `MBGameManager.StartNewGame(new SandBoxGameManager(loadResult))`。

**`EndGame()` 是 `async void`，不是可等待的任务。** 它先用 `await Task.Delay(100)` 轮询等 `MBGameManager.Current` 变 null 或 `IsLoaded` 变真；拿到收尾权后，把 `Game.Current.GameStateManager` 里的状态一路 `PopState(0)` 直到栈顶是 `MissionState` 或者弹空。如果栈顶是 `MissionState`，就对 `CurrentMission` 调 `EndMission()`，然后再 `await Task.Delay(1)` 轮询等 `Mission.Current` 变 null；如果弹空了，就 `CleanStates(0)` 清栈。**因为是 `async void`，调用方拿不到 Task，也捕获不到异常。**

**扇出调用是本类的主形态，但各方法的前后动作不一样。** 大部分 override 就是一句 `foreach (MBSubModuleBase x in Module.CurrentModule.CollectSubModules()) x.某方法(...)`。三个例外值得记：`OnGameInitializationFinished` 在扇出之后还会遍历 `Game.Current.ObjectManager.GetObjectTypeList<SkeletonScale>()` 给每个骨骼填 `SetBoneIndices`；`OnGameStart` 在扇出**之前**先 `new MonsterMissionDataCreator()` 赋给 `Game.Current.MonsterMissionDataCreator`、扇出**之后**才 `AddGameModelsManager<MissionGameModels>` 并给 `Monster.GetBoneIndexWithId` / `GetBoneHasParentBone` 挂委托；`OnGameEnd` 在扇出之后还调 `Module.CurrentModule.OnGameEnd()`、`MissionGameModels.Clear()` 与 `base.OnGameEnd(game)`。

**它没有实现 `OnAfterCampaignStart`。** `GameManagerBase` 里 `public abstract void OnAfterCampaignStart(Game game)` 是抽象成员，而 `MBGameManager.cs` 里 `OnAfterCampaignStart` 出现次数为 **0**。也就是说 `MBGameManager` 是个**不完整的实现**，任何派生类都还必须自己实现这个方法（`SandBoxGameManager` 就实现了）。

**五个覆写属性全部转发到静态配置。** `ApplicationTime` → `MBCommon.GetApplicationTime()`；`CheatMode` / `IsDevelopmentMode` → `NativeConfig` 的同名成员；`IsEditModeOn` → `MBEditor.IsEditModeOn`；`UnitSpawnPrioritization` → 把 `BannerlordConfig.UnitSpawnPrioritization` 强转成 `UnitSpawnPrioritizations`。这五个是**只读的转发**，派生类想换行为只能再 `override`。

## 关键成员

### 单例与状态

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Current` | `public new static MBGameManager Current` | `(MBGameManager)GameManagerBase.Current`。**当前活跃对象不是派生类时抛 InvalidCastException，不是返回 null** |
| `IsEnding` | `public bool IsEnding { get; private set; }` | 是否已进入收尾。构造函数置 false，之后只能由 `CheckAndSetEnding` 置真 |
| `IsLoaded` | `public bool IsLoaded { get; protected set; }` | 加载是否完成。由 `OnLoadFinished` 置真；**setter 是 protected，派生类可写** |
| `CheckAndSetEnding` | `public bool CheckAndSetEnding()` | 锁保护的一次性收尾许可。已在收尾返回 false，成功取得返回 true |

### 进入与退出

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `StartNewGame` | `public static void StartNewGame(MBGameManager)` | **公开启动入口**。通知模块 → 建一个 `GameLoadingState` 并灌入 loader 参数 → `CleanAndPushState(..., 0)` 压栈 |
| `StartNewGame` | `protected static void StartNewGame()` | 无参重载，直接调 `MBAPI.IMBGame.StartNew()`。给派生类在自有流程里用 |
| `LoadModuleData` | `protected static void LoadModuleData(bool)` | 调 `MBAPI.IMBGame.LoadModuleData(...)`，布尔参数表示是否读档 |
| `EndGame` | `public static async void EndGame()` | **异步收尾**。轮询等加载完成 → 取收尾权 → 弹状态栈直到 `MissionState` 或弹空 → 结束任务或清栈。**async void，调用方拿不到 Task** |
| `OnLoadFinished` | `public override void OnLoadFinished()` | `IsLoaded = true`。派生类覆写它时要记得自己置位 |
| `OnSessionInvitationAccepted` | `public virtual void OnSessionInvitationAccepted(SessionInvitationType targetGameType)` | 收到非 `None` 的会话邀请时调 `EndGame()` |
| `OnPlatformRequestedMultiplayer` | `public virtual void OnPlatformRequestedMultiplayer()` | 平台请求切多人时调 `EndGame()` |

### 生命周期扇出

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `BeginGameStart` | `public override void BeginGameStart(Game game)` | 扇出到各子模块同名钩子 |
| `OnNewCampaignStart` | `public override void OnNewCampaignStart(Game game, object starterObject)` | 扇出到各子模块的战役启动钩子 |
| `OnGameStart` | `public override void OnGameStart(Game game, IGameStarter gameStarter)` | **扇出前后各有动作**：先建 `MonsterMissionDataCreator`，扇出之后注册 `MissionGameModels` 并给 `Monster` 的两个静态委托赋值 |
| `InitializeSubModuleGameObjects` | `public override void InitializeSubModuleGameObjects(Game game)` | 扇出 |
| `RegisterSubModuleObjects` | `public override void RegisterSubModuleObjects(bool isSavedCampaign)` | 扇出。参数告诉子模块这是读档还是新档 |
| `AfterRegisterSubModuleObjects` | `public override void AfterRegisterSubModuleObjects(bool isSavedCampaign)` | 扇出 |
| `RegisterSubModuleTypes` | `public override void RegisterSubModuleTypes()` | 扇出 |
| `InitializeGameStarter` | `public override void InitializeGameStarter(Game game, IGameStarter starterObject)` | 扇出。**Behavior 的注册入口就在这条链上** |
| `OnGameInitializationFinished` | `public override void OnGameInitializationFinished(Game game)` | 扇出后**还会**给每个 `SkeletonScale` 填骨骼索引 |
| `OnAfterGameInitializationFinished` | `public override void OnAfterGameInitializationFinished(Game game, object initializerObject)` | 扇出 |
| `OnGameLoaded` / `OnAfterGameLoaded` | `public override void OnGameLoaded(Game game, object initializerObject)` / `OnAfterGameLoaded(Game game)` | 读档两阶段扇出 |
| `OnNewGameCreated` | `public override void OnNewGameCreated(Game game, object initializerObject)` | 新档创建后扇出 |
| `OnGameEnd` | `public override void OnGameEnd(Game game)` | 扇出**之后**调 `Module.CurrentModule.OnGameEnd()`、`MissionGameModels.Clear()` 与 `base.OnGameEnd(game)` |

### 覆写的配置属性

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `ApplicationTime` | `public override float ApplicationTime` | 转发 `MBCommon.GetApplicationTime()` |
| `CheatMode` | `public override bool CheatMode` | 转发 `NativeConfig.CheatMode` |
| `IsDevelopmentMode` | `public override bool IsDevelopmentMode` | 转发 `NativeConfig.IsDevelopmentMode` |
| `IsEditModeOn` | `public override bool IsEditModeOn` | 转发 `MBEditor.IsEditModeOn` |
| `UnitSpawnPrioritization` | `public override UnitSpawnPrioritizations UnitSpawnPrioritization` | 转发 `BannerlordConfig.UnitSpawnPrioritization`（强转枚举） |

### 构造与辅助

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `MBGameManager()` | `protected MBGameManager()` | 置 `IsEnding = false`，并调 `NativeConfig.OnConfigChanged()`。**基类构造函数已经把 `GameManagerBase.Current` 指向 this 了** |
| `GetXmlInformationFromModule` | `protected List<MbObjectXmlInformation> GetXmlInformationFromModule()` | 转发 `XmlResource.XmlInformationList`。给自定义 MBObjectManager 用 |

## 怎么用

### 怎么拿到它

`MBGameManager` 是 `TaleWorlds.MountAndBlade/MBGameManager.cs:12` 的 `public abstract class MBGameManager : GameManagerBase`——**它把 [GameManagerBase](../../core-extra/GameManagerBase) 那 16 个抽象成员全部实现了**，所以模组派生它只需覆写想改的那几个。

所以 [GameManagerBase](../../core-extra/GameManagerBase) 那一页里「必须实现 11 个方法 + 5 个属性」的清单，**对派生自 `MBGameManager` 的类不适用**——`OnGameStart`（`GameManagerBase.cs:262`）之类在这里已有 override（`:90`、`:99`、`:126`、`:153`…）。

**构造器是 `protected MBGameManager()`（`:35`）**，只做两件事：`this.IsEnding = false;` 和 `NativeConfig.OnConfigChanged();`（`:36-37`）。而基类构造器（`GameManagerBase.cs:46`）已经把 `GameManagerBase.Current = this` 写好了。

读取用 `public new static MBGameManager Current`（`:21`）——注意关键字是 **`new`**：它遮蔽（hide）了基类的 `Current`（`GameManagerBase.cs:12`），getter 是强转型 `(MBGameManager)GameManagerBase.Current`（`:24`）。**这个转型在别人派生 `GameManagerBase` 而不是 `MBGameManager` 时会抛 `InvalidCastException`。**

三个受保护静态工具：`StartNewGame()`（`:42`，转 `MBAPI.IMBGame.StartNew()`）、`LoadModuleData(bool isLoadGame)`（`:48`）、`public static void StartNewGame(MBGameManager gameLoader)`（`:54`）。

### 典型用法

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyGameManager : MBGameManager          // MBGameManager.cs:12
{
    public override void OnGameInitializationFinished(Game game)      // :126，覆写它而不是 base 的
    {
        base.OnGameInitializationFinished(game);    // 必须调 base：它会遍历所有子模块并 SetBoneIndices
        myBehavior = CampaignBehaviorBase.GetCampaignBehavior<MyBehavior>();
    }

    public override void OnAfterGameInitializationFinished(Game game, object initializerObject) { }  // :144

    public override bool IsEditModeOn => false;    // 继承自 GameManagerBase 的抽象属性（GameManagerBase.cs:316）
}

// 开新局
MBGameManager.StartNewGame(new MyGameManager());     // :54
// 读
MBGameManager.Current;                               // :21
GameManagerBase.Current;                            // GameManagerBase.cs:12，同一个对象
```

### 最容易踩的坑

**覆写 `OnGameInitializationFinished(Game game)`（`:126`）时不调 `base`。** 基类实现做两件不可省的事：遍历 `Module.CurrentModule.CollectSubModules()` 给每个子模块转发 `OnGameInitializationFinished(game)`（`:128-131`）；**然后为每个 `SkeletonScale` 遍历 `BoneNames`，用 `Skeleton.GetBoneIndexFromName(...)` 逐个算出 `sbyte[]` 并调 `skeletonScale.SetBoneIndices(array)`**（`:132-139`）。跳掉 base 的后果非常具体：**所有角色的骨骼索引不再被填充**——而 [SkeletonScale](../../core-extra/SkeletonScale) 的 `SetBoneIndices`（`SkeletonScale.cs:110`）本身还会把 `BoneNames` 置 null，于是此后任何依赖骨骼名的代码都拿到 null。表现是「自定义模型的人物不显示手臂/腿」，而不是任何报错。

第二个坑是 `MBGameManager.Current`（`:21`）的强转型。它用 `new` 遮蔽了基类属性，getter 是裸转型 `(MBGameManager)GameManagerBase.Current`。如果某个 mod 派生了 `GameManagerBase` 而非 `MBGameManager`，那么 `GameManagerBase.Current` 指向它的实例时，`MBGameManager.Current` **抛 `InvalidCastException`**。你的代码里不能假设 `MBGameManager.Current` 永远可用。

第三，`IsLoaded`（`:32`）的 setter 是 **protected**，不是 public：`public bool IsLoaded { get; protected set; }`。模组可以读、可以子类里写，但**外部无法在运行期把它置 true**——它由引擎在加载完成后写入。用它当「局已就绪」的标志是可以的，但别指望自己能改。

第四，`public static void StartNewGame(MBGameManager gameLoader)`（`:54`）要求 `GameStateManager.Current` 已经非 null——它第一件事就是 `GameStateManager.Current.CreateState<GameLoadingState>()`（`:58`）。在 `Game` 尚未建立、因而局内状态栈不存在的阶段调它就是空引用。

## 真实示例

绝大多数 mod 只需要读 `Current` 的状态位。注意强转可能抛，所以先判 null：

```csharp
MBGameManager manager = MBGameManager.Current;
if (manager == null || manager.IsEnding)
{
    return;
}

Debug.Print("loaded=" + manager.IsLoaded
    + " cheat=" + manager.CheatMode
    + " dev=" + manager.IsDevelopmentMode
    + " edit=" + manager.IsEditModeOn
    + " applicationTime=" + manager.ApplicationTime, 0);
```

想接管加载流程时，写一个自己的 `MBGameManager` 派生类并交给静态入口。注意 `GameManagerBase` 里的 `OnAfterCampaignStart` 是抽象成员，`MBGameManager` 没有实现它，这里必须补上：

```csharp
public class ProfileGameManager : MBGameManager
{
    public override void OnAfterCampaignStart(Game game)
    {
        Debug.Print("campaign started, profile game manager active", 0);
    }

    public override void OnGameEnd(Game game)
    {
        Debug.Print("profile game manager shutting down", 0);
        base.OnGameEnd(game);
    }
}
```

把它挂进模块的加载流程，与游戏本体 `MBGameManager.StartNewGame(new SandBoxGameManager(loadResult))` 的形状一致：

```csharp
public class ProfileSubModule : MBSubModuleBase
{
    public override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        game.CreateGameManager();
        game.DoLoading();
        Debug.Print("profile module boot done", 0);
    }
}
```

需要提前结束游戏时用 `CheckAndSetEnding()` 先取许可，避免与引擎正在进行的收尾打架：

```csharp
MBGameManager manager = MBGameManager.Current;
if (manager != null && !manager.IsEnding && manager.IsLoaded)
{
    if (manager.CheckAndSetEnding())
    {
        Debug.Print("obtained the ending permit", 0);
        MBGameManager.EndGame();
    }
}
```

## 风险与边界

- **抽象但派生门槛不低**：构造函数是 `protected`，必须自己实现 `GameManagerBase` 的抽象成员——其中 `OnAfterCampaignStart` **本类没有实现**，是派生类必须补上的第一个坑。
- **`Current` 会抛而不是返回 null**：`new static MBGameManager Current` 是 `(MBGameManager)GameManagerBase.Current` 的强转。当前活跃的 GameManagerBase 不是派生类时抛 `InvalidCastException`。判空只挡住了「还没构造」，挡不住「类型不对」。
- **`Current` 的赋值时机是基类构造函数**，不是 `Initialize()`。所以对象一构造出来 `Current` 就指向它，即便加载还没开始。
- **`EndGame()` 是 `async void`**：调用方拿不到 Task、await 不了、异常也捕获不到。要确定收尾完成只能自己轮询 `IsEnding` 与 `Mission.Current`。
- **`EndGame()` 内部有两段轮询**：先 `Task.Delay(100)` 等加载完成，再 `Task.Delay(1)` 等任务销毁。加在一起最坏情况要等上百毫秒起步。
- **`IsLoaded` 是 protected 可写**：派生类能改，mod 只能读。自己覆写 `OnLoadFinished` 却忘了 `IsLoaded = true`，会让 `EndGame()` 的第一段轮询永远等下去。
- **`CheckAndSetEnding()` 是一次性许可**：返回 false 不代表出错，只代表已经有人在收尾。忽略返回值会导致两个流程同时拆游戏状态。
- **扇出方法不检查模块异常**：所有 override 都是裸 `foreach`，某个子模块抛异常会中断整条扇出，后面的模块拿不到调用。
- **五个配置属性是只读转发**：想换行为只能再 `override`，写 `NativeConfig.CheatMode` 之类的底层配置才是另一条路。
- **`OnGameStart` 的赋值顺序有讲究**：`MonsterMissionDataCreator` 在扇出**之前**设，`AddGameModelsManager<MissionGameModels>` 与 `Monster` 的两个静态委托在扇出**之后**设。在子模块的 `OnGameStart` 里读 `Monster.GetBoneIndexWithId` 可能拿到 null。
- **`StartNewGame(MBGameManager)` 与 `StartNewGame()` 是两回事**：前者是完整的加载状态机压栈，后者只是转调原生 `StartNew`。名字一样，作用差三个数量级。
- **主线程假设**：所有生命周期扇出都发生在游戏主循环里，`EndGame` 的状态栈操作同理。

## 依赖关系

- 基类：[GameManagerBase](../../core-extra/GameManagerBase) —— 抽象生命周期成员的来源，`Current` 的真正持有者。
- 游戏与状态：[Game](../../core-extra/Game) —— `BeginGameStart` / `OnGameStart` 等方法的参数类型；[GameStateManager](../../core-extra/GameStateManager) —— `StartNewGame` 与 `EndGame` 都操作它；[GameModel](../../core-extra/GameModel) —— `IGameStarter` 那一侧的起点。
- 模型注册：`GameModelsManager`（`TaleWorlds.Core`，与 [GameStateManager](../../core-extra/GameStateManager) 同桶，尚未撰写页）。
- 模块层：[MBSubModuleBase](../../core/MBSubModuleBase) —— 扇出目标；[Module](../../core/Module) —— `Module.CurrentModule` 与 `CollectSubModules()` 的来源。
- 战斗：[Mission](../../mission/Mission) 与 `MissionState` —— `EndGame` 的收尾路径会一路操作到它们（`MissionState` 尚未撰写页，现为纯文本）。
- 底层转发：`NativeConfig` · `BannerlordConfig` · `MBEditor` · `MBCommon` · `MBAPI.IMBGame` · `XmlResource`（均为引擎或原生绑定层，尚未撰写页）。
- 桶导览：[mission-ext 桶导览](../) · 架构：[模块地图](../../../architecture/module-map)