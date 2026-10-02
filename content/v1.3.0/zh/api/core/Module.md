---
title: "Module"
description: "引擎侧的单例，持有整个模块图：构建子模块实例字典、驱动每个 MBSubModuleBase 钩子、持有全局 GameStateManager、GameTextManager 与 JobManager，并暴露原生层回调用的模块启用/停用与初始界面选项 API。"
---
# Module

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Module : DotNetObject, IGameStateManagerOwner`
**Base:** `DotNetObject`（实现 `TaleWorlds.DotNet.DotNetObject`、`IGameStateManagerOwner`）
**Source:** `TaleWorlds.MountAndBlade/Module.cs`

## 概述

`Module` 是把一堆 DLL 文件变成可运行游戏的进程级对象。它的构造函数是 `private`；引擎调用 `internal static Module.CreateModule()`（一个原生层 `[MBCallback]` 入口）把它 new 出来，此后所有访问都走 `Module.CurrentModule`。实例字典 `Dictionary<SubModuleInfo, MBSubModuleBase>` 就住在它里面，因此 `CollectSubModules()` 是枚举所有存活模块实例的标准方式，也是这个类决定"哪些实例能拿到 `OnApplicationTick`"的地方。它还持有其他子系统依赖的三个单例——`GlobalGameStateManager`（在构造时就写入 `GameStateManager.Current`）、`GlobalTextManager`、`JobManager`——以及产出主菜单按钮的初始界面选项列表。尽管它位于 `TaleWorlds.MountAndBlade`，它的大部分数据来自 `TaleWorlds.ModuleManager` 的类型：`ModuleInfo`、`SubModuleInfo`、`ModuleHelper`。

## 心智模型

把 `Module` 理解成**"持有每个模块实例并触发每个模块钩子的加载器"**。你只读它，永远不要构造它——构造函数是私有的，`CreateModule()` 是 `internal` 的。

**构造顺序（`Module.cs` 私有构造函数内的源码顺序）：**

1. `MBDebug.Print("Creating module...")`。
2. `StartupInfo = new GameStartupInfo()`，`_testContext = new TestContext()`。
3. `_subModuleBases = new Dictionary<SubModuleInfo, MBSubModuleBase>()`——**此时为空**。
4. `GlobalGameStateManager = new GameStateManager(this, GameStateManagerType.Global)`。
5. `GameStateManager.Current = GlobalGameStateManager`——注意这个 setter 有副作用：它会先对之前的 `Current` 调用 `CleanStates(0)`。
6. `GlobalTextManager = new GameTextManager()`，`JobManager = new JobManager()`。

**三个坑：**

- **`Module` 实现了 `IGameStateManagerOwner`，但两个方法都是空的显式实现。** `void IGameStateManagerOwner.OnStateStackEmpty()` 与 `void IGameStateManagerOwner.OnStateChanged(GameState oldState)` 有声明、什么也不做。不要指望全局状态栈会通知模块，它不会。真正对状态变化有反应的是 `Game`（以及战役侧自己的管理器）。
- **`Module` 在 `TaleWorlds.MountAndBlade`，而 `ModuleInfo`、`SubModuleInfo`、`ModuleHelper` 在 `TaleWorlds.ModuleManager`。** 它们是不同程序集，需要不同的 `using`。单独一句 `using TaleWorlds.ModuleManager;` 拿不到 `Module.CurrentModule`，`using TaleWorlds.MountAndBlade;` 也拿不到 `ModuleHelper.GetModules(...)`。
- **`CollectSubModules()` 只过滤出*已激活*的模块。** 它遍历 `ModuleHelper.GetActiveModules()`，所以在 `DeactiveModule(id)` 之后，你的实例仍在 `_subModuleBases` 里、仍会收到显式调用，但它会从 `CollectSubModules()` 中消失——因此也从逐帧的 `OnApplicationTick` 循环中消失。

## 何时该用 / 何时不该用

**该用 `Module` 的场景：**
- 你需要驱动主菜单、模块界面和编辑器的全局状态栈：`Module.CurrentModule.GlobalGameStateManager`。
- 你想枚举模块实例（`CollectSubModules()`）、把 `SubModuleInfo` 的类名解析成 `Type`（`GetSubModuleType(string)`），或者增改主菜单选项（`AddInitialStateOption`、`OverrideInitialStateOption`）。
- 你想在*引擎*层面否决模块加载——但应该从 `MBSubModuleBase.OnBeforeGameStart` 做，而不是在这里。

**不该用 `Module` 的场景：**
- 你需要按游戏或按战役的状态。`Module` 的生命周期长于游戏；挂在它上面的任何东西都不会被存档，而且会跨"回主菜单 → 开新游戏"泄漏，除非你在 `MBSubModuleBase.OnGameEnd` 里显式清理。
- 你想对游戏事件做反应。用通过 `IGameStarter` 注册的 `GameModel`，或 `CampaignBehaviorBase`。
- 你想要模块*元数据*。那是 `ModuleInfo` / `ModuleHelper`，另一个命名空间的另一个类型。

## 依赖关系

- [MBSubModuleBase](../MBSubModuleBase/) — 存放在 `Module._subModuleBases` 里的实例类型，由本类的每个循环触发。
- [IGameStarter](../../core-extra/IGameStarter/) — 游戏开始后子模块钩子收到的参数。
- [GameStateManager](../../core-extra/GameStateManager/) — `Module.GlobalGameStateManager` 就是它，以 `GameStateManagerType.Global` 创建。
- [Game](../../core-extra/Game/) — `Game.Current.GameStateManager` 是另一个非全局管理器，游戏运行期间它会取代 `GameStateManager.Current`。
- [ModuleHelper](../../campaign-ext/ModuleHelper/) — `TaleWorlds.ModuleManager`；`CollectSubModules()` 实际遍历的模块列表来源。
- [ModuleInfo](../../campaign-ext/ModuleInfo/) — 每个模块的元数据（`Id`、`SubModules`、`IsActive`、`IsNative`、`IsOfficial`）。
- [模块系统架构](../../../architecture/module-system/) — `SubModule.xml` 如何变成 `SubModuleInfo`。

## 主要成员

### 单例与生命周期

#### `public static Module CurrentModule { get; private set; }`
唯一的访问入口。setter 是私有的，值由 `internal static Module.CreateModule()` 写入、由 `internal static Module.FinalizeCurrentModule()` 清空。拆卸过程中 `CurrentModule` 会变成 `null`，所以如果你要跨 `await` 使用它，请先缓存到局部变量。

#### `public MBReadOnlyList<MBSubModuleBase> CollectSubModules()`
基于 `ModuleHelper.GetActiveModules()` 重新构建并返回一份新的只读 `MBSubModuleBase` 列表。**不做缓存**——每次调用都新分配一个 `MBList`，而 `Module.OnApplicationTick` 每帧调用它一次。不要在你自己的 `OnApplicationTick` 里再调它；把引用缓存到 `OnSubModuleLoad`。

#### `public Type GetSubModuleType(string name)`
把 `SubModuleInfo.SubModuleClassTypeName` 映射到其存活实例的具体 `Type`，找不到返回 `null`。适合用来特性检测另一个 mod（"`SandBoxSubModule` 存在且已加载吗？"），而不必硬引用它的程序集。

### 状态、文本、任务

#### `public GameStateManager GlobalGameStateManager { get; private set; }`
构造函数里创建并立即安装为 `GameStateManager.Current` 的管理器。它能跨"回主菜单"存活，因为它挂在 `Module` 上而不是 `Game` 上。`Game.Current.GameStateManager` 是每个游戏的管理器，游戏活动时接管 `GameStateManager.Current`。

#### `public GameTextManager GlobalTextManager { get; private set; }`
持有全局（非战役）文本；`LoadDefaultTexts()` 由 `Module.Initialize()` 调用。战役内文本在 `Game.Current.GameTextManager` 上。

#### `public JobManager JobManager { get; private set; }`
引擎自己的延迟任务队列，在 `Module.OnApplicationTick` 末尾 tick。战役里大部分任务调度走 `Campaign.Current` / `Game.Current.GameManager`。

### 模块启用与停用

#### `public void DeactiveModule(string moduleId)`
如果该模块存在、处于激活状态且不是原生模块：打日志、调 `ModuleHelper.OnModuleDeactivated(id)`，然后对该模块的每个子模块触发 `OnSubModuleDeactivated()`。**其他什么都不撤销**——DLL 仍然加载，实例仍留在 `_subModuleBases` 里。

#### `public void ActivateModule(string moduleId)`
镜像操作：`ModuleHelper.OnModuleActivated(id)`，然后对每个子模块触发 `OnSubModuleActivated()`。`Module.OnGameEnd()` 会为游戏结束时处于未激活状态的每个模块调用它，所以你为一个游戏停用的模块会在下一个游戏回来。

### 初始界面（主菜单）选项

#### `public void AddInitialStateOption(InitialStateOption initialStateOption)` / `public void OverrideInitialStateOption(string id, InitialStateOption newInitialStateOption)`
`Add` 是追加；`Override` 替换 `Id` 匹配的条目，**没有匹配时什么都不做**（不抛异常、无返回值）。要替换原版条目你必须知道它确切的 id。构造函数是 `InitialStateOption(string id, TextObject name, int orderIndex, Action action, Func<ValueTuple<bool, TextObject>> isDisabledAndReason, TextObject enabledHint = null, Func<bool> isHidden = null)`——`isDisabledAndReason` 与 `isHidden` **不是**可选参数，所以构造一个普通的、永远可用的条目也至少要写 `() => (false, null)`。

#### `public IEnumerable<InitialStateOption> GetInitialStateOptions()`
返回按 `OrderIndex` 排序的列表。初始界面 UI 渲染的就是它，所以这里的顺序就是你按钮的顺序。

#### `public InitialStateOption GetInitialStateOptionWithId(string id)` / `public void ExecuteInitialStateOptionWithId(string id)`
查找与触发。`Execute...` 在 id 未知时是空操作，因为它只做了 null 检查再调 `DoAction()`。

### 多人与平台

#### `public bool MultiplayerRequested { get; }`
当启动类型为 `Multiplayer`、`PlatformServices.SessionInvitationType == SessionInvitationType.Multiplayer`，或 `PlatformServices.IsPlatformRequestedMultiplayer` 时为 true。它每次 get 都重新计算——**不做缓存**。

#### `public async void ShutDownWithDelay(string reason, int seconds)`
每秒倒计时一次（每次都打印），随后若还有存活游戏则调 `MBGameManager.EndGame()`，再调 `Utilities.QuitGame()`。由 `_isShuttingDown` 保护，第二次调用是空操作。声明为 `async void`——里面的异常会逃逸到同步上下文，所以不要依赖它做你在乎的清理工作。

## 使用示例

### 示例 1 —— 不做硬引用地特性检测另一个模块

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.ModuleManager;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnSubModuleLoad()
        {
            Type sandBox = Module.CurrentModule.GetSubModuleType("SandBox.SandBoxSubModule");
            bool hasSandbox = sandBox != null;
            MBDebug.Print("SandBox present = " + hasSandbox);
        }
    }
}
```

### 示例 2 —— 增改主菜单选项

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Localization;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // InitialStateOption(string id, TextObject name, int orderIndex, Action action,
    //                     Func<(bool, TextObject)> isDisabledAndReason,
    //                     TextObject enabledHint = null, Func<bool> isHidden = null)
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnSubModuleLoad()
        {
            Module module = Module.CurrentModule;
            module.AddInitialStateOption(new InitialStateOption(
                "MyModOptions",
                new TextObject("{=MyModOptionsTitle}My Mod Options", null),
                10,
                MyOptionsScreen.Open,
                () => (false, null)));
            // Override 只能替换已存在的条目；未知 id 会被忽略。
            module.OverrideInitialStateOption("Native", new InitialStateOption(
                "Native", new TextObject("{=MyModResume}Resume", null), 0,
                MyOptionsScreen.Open, () => (false, null)));
        }

        public override void OnInitialState()
        {
            foreach (InitialStateOption option in Module.CurrentModule.GetInitialStateOptions())
            {
                MBDebug.Print("option " + option.Id);
            }
            Module.CurrentModule.ExecuteInitialStateOptionWithId("MyModOptions");
        }
    }
}
```

### 示例 3 —— 查看与切换全局状态栈

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        public override void OnBeforeInitialModuleScreenSetAsRoot()
        {
            // 触发时 GameStateManager.Current 仍然是全局管理器。
            GameStateManager global = Module.CurrentModule.GlobalGameStateManager;
            MBDebug.Print("active global state = " + (global.ActiveState == null ? "none" : global.ActiveState.GetType().Name));
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** `Module` 从不被序列化。它跨游戏持有 `StartupInfo`、子模块字典和初始界面选项。把玩法状态缓存在这里会让它泄漏到下一个游戏——务必在 `MBSubModuleBase.OnGameEnd` 里清理。
- **`GameStateManager.Current` 会被游戏劫持。** 构造函数设置 `Current = GlobalGameStateManager`，而 `Current` 的 setter 会对**被换掉的那个**实例调 `CleanStates(0)`。游戏开始时 `Game` 的管理器顶替它；游戏结束时 `Module.OnApplicationTick` 把它还原（`if (GameStateManager.Current == null) GameStateManager.Current = GlobalGameStateManager;`）。任何在切换前把 `GameStateManager.Current` 存进字段的代码，现在持有的是一个已被清空的管理器。永远重新读取，不要缓存。
- **跨域依赖。** `Module.cs` 引用了 `TaleWorlds.AchievementSystem`、`TaleWorlds.ActivitySystem`、`TaleWorlds.Avatar.PlayerServices`、`TaleWorlds.Diamond.ClientApplication`、`TaleWorlds.PlatformService` 与 `TaleWorlds.ScreenSystem`。在一个必须在专用服务器或早期 bootstrap 上下文里加载的模块中引用 `Module`，可能强迫这些程序集在平台服务就绪之前加载；而 `Module.LoadPlatformServices()` 在专用服务器和测试模式下是**被跳过**的。
- **加载顺序。** `LoadSubModules` 按枚举顺序处理 `ModuleHelper.GetModules(...)`，边走边调 `AddSubModule`（反射 `new` + `Managed.AddTypes`），然后在**第二遍**才执行 `OnSubModuleLoad()`。所以构造顺序 ≠ 相对于另一个模块构造的钩子顺序。不要假设你的 `OnSubModuleLoad` 在依赖的之前或之后运行——要显式协商。
- **ID 稳定性。** 每个接受 `moduleId` 的方法都是对 `ModuleHelper` 表的原始字符串查找，而键是启动时的模块文件夹名。改名文件夹或改 `ModuleInfo.Id` 会让字符串失效，而查找失败返回 `null` / 静默无操作，而不是抛异常。
- **`CurrentModule` 为 null。** `FinalizeCurrentModule()` 会把静态字段置空。你模块里任何静态构造函数、后台线程或 `async` 续体在关机后触碰 `Module.CurrentModule` 都会拿到 `NullReferenceException`。
- **用字符串做枚举。** `CheckIfSubmoduleCanBeLoadable` 用 `Enum.TryParse<Platform>` / `<Runtime>` 解析 `SubModuleInfo.Tags` 的值。`SubModule.xml` 里的标签值拼错会掉出 switch 分支并被当作有效，于是你以为要排除的子模块照样被加载。

## 跨版本提示

- **v1.3.0：** `Module` 是 `TaleWorlds.MountAndBlade` 里的 `public sealed class Module : DotNetObject, IGameStateManagerOwner`，构造函数私有。`GlobalGameStateManager`、`GlobalTextManager`、`JobManager`、`StartupInfo`、`IsOnlyCoreContentEnabled`、`MultiplayerRequested`、`ReturnToEditorState` 与 `LoadingFinished` 全部存在，语义如上。`InitialStateOption` 本身位于 `TaleWorlds.MountAndBlade`（`InitialStateOption.cs`），**不在** `TaleWorlds.Core`——这是个常见误认，因为启动期用到的其他类型看起来都来自 `Core`。
- **v1.3.15 / v1.4.5：** 形状稳定。后续补丁拓宽了 `LoadPlatformServices` 里的平台分支并加入平台模块扩展，但 `CollectSubModules`、`ActivateModule` / `DeactiveModule`、初始界面选项 API 与 `GetSubModuleType` 的签名和语义保持不变。
- **另外注意：** `GameType` 与 `GameStartupType` 在 v1.3.0 里**不是** `Module` 的成员——`GameStartupType` 通过 `Module.StartupInfo.StartupType` 暴露，多人游戏类型列表则通过 `AddMultiplayerGameMode(MultiplayerGameMode)` / `GetMultiplayerGameTypes()` 填充，而不是这里的某个 `GameType` 集合。

## 参见

- ↑ 上级目录：[Core API 索引](../)
- ↔ 同级：[MBSubModuleBase](../MBSubModuleBase/) —— 本类存储并触发的实例类型
- ↪ 状态栈：[GameStateManager](../../core-extra/GameStateManager/)
- ↪ 每个游戏的世界：[Game](../../core-extra/Game/)
- ↪ 模块元数据：[ModuleHelper](../../campaign-ext/ModuleHelper/) · [ModuleInfo](../../campaign-ext/ModuleInfo/)
- ↑ 架构：[模块系统](../../../architecture/module-system/) · [SDK 总览](../../../architecture/sdk-overview/)