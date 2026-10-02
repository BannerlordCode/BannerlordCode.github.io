---
title: "MBSubModuleBase"
description: "每个 Bannerlord 模块入口类都必须继承的抽象基类。三十一个虚方法钩子覆盖整条游戏生命周期，从 OnSubModuleLoad、OnBeforeGameStart、OnGameStart、InitializeGameStarter、OnCampaignStart、OnGameLoaded，一直到 OnApplicationTick、任务回调与 OnGameEnd。本文固定真实的访问修饰符、真实调用顺序，以及那些会让 mod 静默失效的坑。"
---
# MBSubModuleBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MBSubModuleBase`
**Base:** 无（普通 `System.Object`，没有基类也没有接口）
**Source:** `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`

## 概述

`MBSubModuleBase` 是整个 Bannerlord 里唯一一个"所有模块都必须继承"的类，也是引擎想通知模块"发生某件事"时唯一会去查的类型。它自己没有任何状态，构造函数里也没有任何逻辑：整个类型就是三十一个空的 `virtual` 方法，唯一作用是充当游戏生命周期上的具名检查点。引擎用反射构造出你子类的一个实例，把它存进 `Dictionary<SubModuleInfo, MBSubModuleBase>`，然后在十几个不同时刻遍历这个字典——模块加载、配置变更、开始游戏、战役开始、读档、每一帧、应用任务回调、任务初始化、游戏结束。什么都不重写的 mod 照样能跑；而在错误时机重写了错误钩子的 mod 通常什么可见效果都没有，并且静默失败。所以下面精确到修饰符和顺序的部分，比方法清单本身重要得多。

## 心智模型

要把它理解成**"游戏时间线上的具名回调集合"**，而不是一个你去调用的服务。这类里没有任何方法由你直接调用——驱动方是 `Module`（`TaleWorlds.MountAndBlade/Module.cs`），它持有实例字典并触发这些钩子。

**引擎真实的调用顺序：**

1. `Module.Initialize()` → `ModuleHelper.InitializeModules(...)` → `LoadSubModules(...)` → `AddSubModule(...)`（反射 `new`，随后 `Managed.AddTypes`）→ `InitializeSubModuleBases()` → 对每个已知子模块调用 **`OnSubModuleLoad()`**。
2. 热加载的模块走 `loadNewModules` 分支：先 **`OnSubModuleLoad()`**，再 `OnNewModuleLoaded()` → **`OnNewModuleLoad()`**。
3. `Module.SetInitialModuleScreenAsRootScreen()` → 在根界面压栈之前调用 **`OnBeforeInitialModuleScreenSetAsRoot()`**。
4. `Module.OnInitialModuleScreenActivated(...)` → `InitialState` 压栈之后，对每个子模块调用 **`OnInitialState()`**。
5. 配置变更 → `EngineController.ConfigChange` → `Module.OnConfigChanged()` → **`OnConfigChanged()`**。
6. 模块启用/停用 → `Module.ActivateModule(id)` / `Module.DeactiveModule(id)` → **`OnSubModuleActivated()`** / **`OnSubModuleDeactivated()`**。
7. `MBGameManager.StartNewGame(gameLoader)` → `Module.OnBeforeGameStart(mbGameManager)` → 对每个子模块调用 **`OnBeforeGameStart(mbGameManager, disabledModules)`**。
8. `Module.OnApplicationTick(dt)` → **`OnApplicationTick(dt)`**；多人模式下 `Module.OnNetworkTick(dt)` → **`OnNetworkTick(dt)`**。

**三个真正会浪费时间的坑：**

- **修饰符并不统一。** `OnGameLoaded`、`OnCampaignStart`、`OnNewGameCreated`、`RegisterSubModuleObjects`、`AfterRegisterSubModuleObjects`、`OnInitialState`、`OnGameEnd`、`DoLoading` 以及任务相关钩子声明为 `public virtual`，写 `protected internal override void OnGameLoaded(...)` **编译不过**。而 `OnGameStart`、`InitializeGameStarter`、`OnApplicationTick`、`AfterAsyncTickTick`、`OnNetworkTick`、`OnSubModuleLoad`、`OnSubModuleUnloaded`、`OnBeforeInitialModuleScreenSetAsRoot`、`RegisterSubModuleTypes`、`OnNewModuleLoad`、`OnBeforeGameStart` 是 `protected internal virtual`，这三种写法都合法：`public override`、`protected internal override`、`protected override`。游戏自带的 `SandBox`/`StoryMode` 模块对后一组两种拼法都用过，都没问题。
- **`OnApplicationTick` 只对*已激活*的模块触发。** `Module.OnApplicationTick` 遍历的是 `Module.CollectSubModules()`，而它基于 `ModuleHelper.GetActiveModules()` 构建。一旦你的模块被停用（被别的 mod 在 `OnBeforeGameStart` 里停掉，或被 DLC/内容过滤器过滤），你的逐帧钩子就彻底不会被调用。
- **`DoLoading` 是跨所有子模块做逻辑与的。** `SandBoxGameManager` 执行 `flag = flag && mbsubModuleBase.DoLoading(Game.Current)`，聚合结果为 false 时会退回加载步骤。返回 `false` 是*重试信号*，不是"否决"——永远返回 `false` 的模块会把加载界面永久卡死。基类实现返回 `true`。

## 何时该用 / 何时不该用

**该用 `MBSubModuleBase` 的场景：**
- 你在写一个必须被 `ModuleHelper` 发现的模块——`SubModule.xml` 里 `SubModuleClassTypeName` 指向的类必须继承它，并且要有**无参构造函数**（引擎调用的是 `GetConstructor(Instance|Public|NonPublic|CreateInstance, null, new Type[0], null)`）。
- 每个游戏需要注册一次 `GameModel`：`OnGameStart` 和 `InitializeGameStarter` 是仅有的两个能拿到 `IGameStarter` 的钩子。
- 你想否决某个模块：在 `OnBeforeGameStart` 里把它的 id 追加到 `disabledModules`——这是**唯一**受支持的做法，没有返回值可以设置。

**不该用 `MBSubModuleBase` 的场景：**
- 你想要按战役触发的响应式逻辑——那属于通过 `IGameStarter` 注册的 `CampaignBehaviorBase`，它给你 `RegisterEvents`、`SyncData` 以及自动的存档存活。引擎会为每个战役重新注册 behavior，而子模块实例不会。
- 你想要按任务触发的响应式逻辑——那是 `MissionBehavior` / `MissionBehaviorBase`，由 `OnMissionBehaviorInitialize` 驱动。
- 你想逐帧轮询世界状态并做有意义的处理。`OnApplicationTick` 在**每一帧**都会触发，包括 `Game.Current` 为 null、战役尚未加载的那些帧。你在那里读的任何东西都必须做 null 保护。

## 依赖关系

- [Module](../Module/) — 引擎侧驱动方，持有实例字典并触发本页所有钩子。
- [IGameStarter](../../core-extra/IGameStarter/) — `OnGameStart` 与 `InitializeGameStarter` 拿到的模型注册接口。
- [GameStateManager](../../core-extra/GameStateManager/) — `OnBeforeInitialModuleScreenSetAsRoot` 和战役钩子所夹住的状态栈。
- [Game](../../core-extra/Game/) — 多数钩子的入参；游戏未运行时为 null。
- [CampaignGameStarter](../../campaign/CampaignGameStarter/) — `OnCampaignStart` 触发时 `starterObject` 的真实类型。
- [模块系统架构](../../../architecture/module-system/) — `SubModule.xml` 如何把类绑定到这个基类。

## 主要成员

### 模块生命周期

#### `protected internal virtual void OnSubModuleLoad()`
实例构造之后的第一个钩子，也是唯一一个在游戏存在之前、在 DLL 加载时可靠运行的钩子。在这里注册 Harmony patch、静态缓存或元数据。**约定：**绝不能抛异常——这里的异常发生在任何错误 UI 存在之前。

#### `protected internal virtual void OnNewModuleLoad()`
只在运行时热加载的模块上触发（即 `Module.LoadSubModules` 的 `loadNewModules` 分支），启动时就存在的模块不会触发。同时重写 `OnSubModuleLoad` 和 `OnNewModuleLoad` 会让热加载模块做两份工作；选一个并加保护。

#### `protected internal virtual void OnSubModuleUnloaded()`
`OnSubModuleLoad` 的拆卸对偶。此时进程通常已经在回退，不要触碰游戏对象。

### 开始游戏 / 否决

#### `protected internal virtual void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)`
在任何游戏开始之前由 `Module.OnBeforeGameStart(mbGameManager)` 调用。**这是模块否决钩子：**把模块 id 追加到 `disabledModules`，`Module` 会对每个当前处于激活状态的 id 调用 `DeactiveModule(id)`，进而触发该模块子模块的 `OnSubModuleDeactivated()`。之后还会调用 `InformationManager.ClearAllMessages()`，所以你在这里排队的消息会被丢弃。

#### `public virtual bool DoLoading(Game game)`
返回加载界面这一步是否完成。调用方用逻辑与聚合它，聚合为 false 时重跑加载步骤。**约定：**返回 `true`；只有当你的异步步骤确实没做完、希望引擎回来继续时才返回 `false`。

### 模型注册

#### `protected internal virtual void OnGameStart(Game game, IGameStarter gameStarterObject)`
**每一种**游戏开始都会触发——新游戏、读档、编辑器、多人。`gameStarterObject` 就是你往里 `AddModel(...)` 的 `IGameStarter`。这是模型必须在所有模式下都存在的正确钩子。

#### `protected internal virtual void InitializeGameStarter(Game game, IGameStarter starterObject)`
同样在所有模式下触发，并且在战役流程中早于 `OnGameStart`。因为它同样覆盖所有加载模式，这是注册"新游戏和读档都必须存在"的 `CampaignBehaviorBase` 最安全的地方。

### 战役 / 存档生命周期

#### `public virtual void OnCampaignStart(Game game, object starterObject)`
仅新战役触发（普通读档**不会**触发）。`starterObject` 是 `CampaignGameStarter`，转型后调用 `AddBehavior(...)`。

#### `public virtual void OnGameLoaded(Game game, object initializerObject)`
仅读档触发。`initializerObject` **不是**战役 starter——它是存档路径传入的任何对象（通常是加载进度/`InitializationArgs` 形态的东西），不要转型成 `CampaignGameStarter`。

#### `public virtual void OnNewGameCreated(Game game, object initializerObject)`
在全新的战役对象创建之后、加载完成之前触发。

#### `public virtual void RegisterSubModuleObjects(bool isSavedCampaign)` / `AfterRegisterSubModuleObjects(bool isSavedCampaign)`
在创建自定义 `MBObjectManager` 类型的前后调用。`isSavedCampaign` 告诉你当前是否正在恢复存档，因此你可以只为新战役注册类型——或者始终注册、再用 `SyncData` 在读档时填充。

### 逐帧

#### `protected internal virtual void OnApplicationTick(float dt)`
对**已激活**模块的每一应用帧触发。它在战役存在之前和之后都会跑，所以对 `Game.Current` 和 `Campaign.Current` 的每一次读取都要加保护。

#### `protected internal virtual void AfterAsyncTickTick(float dt)`
同样频率，在异步/同步上下文 tick 排空之后。

#### `protected internal virtual void OnNetworkTick(float dt)`
仅当 `GameNetwork.MultiplayerDisabled` 为 false 时。

### 任务 / 结束

#### `public virtual void OnBeforeMissionBehaviorInitialize(Mission mission)` / `OnMissionBehaviorInitialize(Mission mission)`
夹住任务行为被挂载的时刻。用它们注入 `MissionBehaviorBase` 实例或压入 `MissionBehavior` 回调，不要去碰 Agent——在 `Before` 阶段 Agent 还不存在。

#### `public virtual void OnGameEnd(Game game)`
游戏拆除时触发。`Module.OnGameEnd()` 也会在这里重新激活所有未激活的模块，所以如果你缓存了模块状态，顺序很关键。

#### `public virtual void InitializeSubModuleGameObjects(Game game)`
为 `Game.Current.ObjectManager` 创建你自己 `ManagedObject` 子类的扩展点；必须在每次加载时都能被再次调用。

## 使用示例

### 示例 1 —— 一个完整的模块入口类

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // SubModule.xml 必须把 "MyMod.MySubModule" 填进 SubModuleClassTypeName。
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnSubModuleLoad()
        {
            // 在任何 Game 存在之前运行。只做注册，不要查询世界。
            MBDebug.Print("MyMod loaded");
        }

        public override void OnBeforeGameStart(MBGameManager mbGameManager, List<string> disabledModules)
        {
            // 否决模块的唯一受支持方式就是把它的 id 追加进来。
            if (mbGameManager != null && !MyConfig.Enabled)
            {
                disabledModules.Add("SomeOtherModuleId");
            }
        }

        protected internal override void OnApplicationTick(float dt)
        {
            // 仅当本模块处于激活状态时触发。每次读取世界都要加保护。
            if (Game.Current == null || Campaign.Current == null)
            {
                return;
            }
            MyTickSystem.Update(dt);
        }

        public override bool DoLoading(Game game)
        {
            // 跨所有子模块做逻辑与；false 意味着"再跑一次加载"。
            return true;
        }
    }
}
```

### 示例 2 —— 在 `InitializeGameStarter` 里注册模型与行为

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.Engine;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
        {
            // 在每一种加载模式下都运行：新游戏、读档、编辑器、多人。
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new MyCampaignBehavior());
            starterObject.AddModel(new MyGameModel());
        }

        public override void OnGameLoaded(Game game, object initializerObject)
        {
            // 仅读档。initializerObject 不是 CampaignGameStarter。
            MBDebug.Print("save loaded, campaign = " + (Campaign.Current != null));
        }
    }
}
```

## 风险与崩溃边界

- **存档序列化。** 这个基类上没有任何东西参与序列化。你在 `OnSubModuleLoad` 或 `OnCampaignStart` 里设在子模块实例上的字段，活在一个不会随存档存活的普通单例里。必须跨读档存活的东西应该放进 `CampaignBehaviorBase.SyncData(IDataStore)`，并使用你自己占用的 `DataStore.GetStruct<int>()` 槽位。
- **自定义 `MBObjectManager` 类型。** `InitializeSubModuleGameObjects` 和 `RegisterSubModuleObjects` 创建的对象归 `Game.Current.ObjectManager` 所有。当一个"没有这些对象"的存档在你的模块启用状态下被载入时，这些对象并不存在；引擎的 `SaveableTypeDefiner` 体系意味着你还需要一个存档类型定义器。在后续补丁里新增 `SaveableTypeDefiner` 会改变全局定义 id 空间，并让更旧的存档失效。
- **跨域依赖。** `MBSubModuleBase` 在 `TaleWorlds.MountAndBlade`，但 `OnCampaignStart` 递给你的是 `TaleWorlds.CampaignSystem.CampaignGameStarter`，而 `Game` 本身也引用 `TaleWorlds.CampaignSystem` 的类型。如果你从一个同时会在**编辑器**或**专用服务器**上加载的子模块里引用 `Campaign.Current`，会直接空引用——那些模式里根本没有 `Campaign`。
- **加载顺序。** `OnSubModuleLoad` 的顺序是 `Dictionary<SubModuleInfo, MBSubModuleBase>` 的枚举顺序，也就是 `ModuleHelper.GetModules` 返回的顺序——**不是**你声明的依赖顺序。绝不要假设另一个模块的 `OnSubModuleLoad` 已经跑过了。需要跨模块握手就用 `RegisterSubModuleTypes` 或你自己的显式钩子。
- **ID 稳定性。** `disabledModules` 里引用的模块 id、`ModuleHelper` 调用里的 id，以及 `SubModule.xml` 的 `DependantModules` 里引用的 id，都是来自你模块文件夹名的纯字符串。改文件夹名或改 `ModuleInfo.Id` 会破坏所有存过该 id 的存档，以及所有 DLC/依赖声明。
- **反射构造。** `Module.AddSubModule` 通过 `BindingFlags.Instance | Public | NonPublic | CreateInstance` 调用**无参**构造函数。带必需参数的构造函数意味着你的模块被静默地从未创建——没有异常，没有日志行，你的钩子就是永远不触发。
- **逐帧开销。** `OnApplicationTick` 对每个激活模块每帧都跑。在那里调 `MBDebug.Print` 是帧时间严重回退的常见原因；把它放到配置开关后面。

## 跨版本提示

- **v1.3.0：** 该类型是 `public abstract class MBSubModuleBase`，没有基类也没有接口，与上文完全一致。上述三十一个钩子全部存在，修饰符也如上。
- **v1.3.15 / v1.4.5：** 钩子集合稳定，`protected internal` 与 `public` 的划分不变，为 v1.3.0 写的重写签名依然能编译。后续版本在时间线末尾追加钩子（`OnSubModuleActivated` / `OnSubModuleDeactivated` / `ShutDownWithDelay` 时代的成员出现在 `Module` 驱动方而不是这个基类上），但现有成员没有任何一个被改过修饰符。
- **不属于这个类的成员：** 没有 `OnNewGameDataEnded`，没有 `InitializeCampaign`，也没有 `OnMissionEnd`。如果某篇教程把这些写在 `MBSubModuleBase` 上，它描述的是别的类型或者 mod 自己的兼容垫片。

## 参见

- ↑ 上级目录：[Core API 索引](../)
- ↔ 同级：[Module](../Module/) —— 持有实例字典并触发这些钩子的驱动方
- ↪ Starter 契约：[IGameStarter](../../core-extra/IGameStarter/)
- ↪ 状态栈：[GameStateManager](../../core-extra/GameStateManager/)
- ↪ 战役世界：[Campaign](../../campaign/Campaign/)
- ↪ 战役注册：[CampaignGameStarter](../../campaign/CampaignGameStarter/)
- ↑ 架构：[模块系统](../../../architecture/module-system/)