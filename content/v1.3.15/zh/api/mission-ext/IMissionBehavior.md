---
title: "IMissionBehavior"
description: "每个任务扩展点都实现的空标记接口——`Mission.GetMissionBehavior<T>` 的约束条件，也是所有任务 Behavior 必须经过的那道门。"
---
# IMissionBehavior

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** TaleWorlds.MountAndBlade
**Type:** `public interface IMissionBehavior`
**Base:** 无（标记接口，零成员）
**Source:** `TaleWorlds.MountAndBlade/IMissionBehavior.cs`

## 概述

`IMissionBehavior` 是一个**空标记接口**——源文件只有九行，一个成员都没有。它全部的工作是给任务系统一个统一的公共类型，让"一个参与任务的东西"可以被识别出来。每个任务扩展点都直接或间接实现了它：[MissionBehavior](../../mission/MissionBehavior/)（抽象行为基类）、[MissionLogic](../MissionLogic/)、[MissionNetwork](../MissionNetwork/)，以及整族能力式标记接口（`IAgentStateDecider`、`IBattlePowerCalculationLogic`、`ICommanderInfo`、`IFlagRemoved`、`IAnalyticsFlagInfo`、`IRoundComponent`、`IPlayerInputEffector`、`IVehicleHandler`、`IMissionAgentSpawnLogic`）。

它的实际意义在 `Mission.GetMissionBehavior<T>() where T : class, IMissionBehavior`。由于泛型约束同时要求 `class` **和** `IMissionBehavior`，你只能查找"实现了该标记的类"——永远不能是结构体，也永远不能是无关类型。这条约束就是这个接口存在的全部理由，也正是为什么一个实现了更窄能力接口的 mod，即使派生自 `MissionLogic`，依然可以通过同一次查找被找到。

## 心智模型

把它理解成**"每个任务侧对象都必须携带、才能被 `Mission.GetMissionBehavior<T>()` 发现的通行证"**：

- **你几乎从不直接实现它。** 实践中你派生自 [MissionBehavior](../../mission/MissionBehavior/)（回调驱动的基类）或 [MissionLogic](../MissionLogic/)，两者都已实现它。你写的是 `: MissionBehavior, IMyCapabilityInterface`——绝不是单独写 `: IMissionBehavior`，因为裸接口根本不给任何回调。
- **mod 里的典型调用顺序。** 通过任务的行为初始化器（即传给 `MissionState.OpenNew` 的 `InitializeMissionBehaviors` 委托）注册你的 Behavior，或事后用 `Mission.AddMissionBehavior` 加入。在 `OnMissionBehaviorAdded` / `OnMissionTick` / `OnAgentHit` 内部，用 `Mission.Current.GetMissionBehavior<IOtherCapability>()` 解析另一个系统的组件。这次查找是对 `Mission.MissionBehaviors` 的线性扫描，开销很小但不为零。
- **`class` 约束是这份契约的另一半。** `where T : class, IMissionBehavior` 会直接排除结构体——那是编译错误，不是运行期意外。它同时意味着查找未命中时返回 `default(T)`，也就是对每个合法的 `T` 而言是 `null`。
- **坑：裸实现会给你一个"引擎找得到、但什么也不做"的对象。** 接口上没有任何回调。以这种方式注册进去的 Behavior 是静默空操作，而不是报错。
- **坑：能力接口是另一种视角，不是基类。** `IAgentStateDecider : IMissionBehavior` **不是**"只保留了部分方法的 MissionBehavior"。`GetMissionBehavior<IAgentStateDecider>()` 成功时找到的是一个恰好实现了该接口的对象；它是否也响应 `OnMissionTick` 取决于它真正的基类。请转型到接口，而不是转型到行为基类。
- **坑：多个 Behavior 可能满足同一个能力接口。** `GetMissionBehavior<T>()` 返回 `MissionBehaviors` 顺序中**第一个**匹配项，而这个顺序是 `HandleOpenNew` 的默认集合、随后是初始化委托的列表、再随后是 handler 的 `OnAddBehaviors` 列表。该顺序由数据驱动，不构成稳定性保证。

### 何时使用

**使用 `IMissionBehavior` 的场景：**
- 你在声明自己的任务能力接口，好让别的 mod 能用 `Mission.GetMissionBehavior<IMyCapability>()` 找到你的组件。
- 你正在为某个"任意任务组件"辅助方法写泛型约束（`where T : class, IMissionBehavior`）。
- 你在为 mod 兼容层梳理"哪些类型参与任务 Behavior 集合"。

**不要用 `IMissionBehavior` 的场景：**
- 你想要行为回调。派生自 [MissionBehavior](../../mission/MissionBehavior/) 或 [MissionLogic](../MissionLogic/)——它们已经实现了它并提供钩子。
- 你想要任务的生命周期事件（`OnMissionScreenPreLoad`、`OnEndMissionInternal`、`OnMissionStateActivated` 等）。那些都在 [MissionBehavior](../../mission/MissionBehavior/) 上。
- 你想让自己的东西被*加入*任务。那是 `Mission.AddMissionBehavior` / `RemoveMissionBehavior`，它们接收具体的 `MissionBehavior`，而不是这个接口。
- 你想要 agent 侧的扩展点。那些是扩展了本标记的能力接口（`IAgentStateDecider`、`IPlayerInputEffector` 等）。
- 你想要战役侧的扩展。那是 [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)，属于完全独立的生命周期。

## 怎么用

### 怎么拿到它

**你永远拿不到它的实例——它是一个纯编译期约束。** `public interface IMissionBehavior`（`bannerlord-1.3.15/TaleWorlds.MountAndBlade/IMissionBehavior.cs:6`）的接口体是空的（`:7-8`），零成员、零默认实现、零静态工厂。它存在的唯一理由就是给一条泛型签名当约束：`Mission.GetMissionBehavior<T>() where T : class, IMissionBehavior`（`Mission.cs:4389`）。

运行时的真实链路是这样接起来的：**`MissionBehavior : IMissionBehavior`**（`MissionBehavior.cs:11`）——`public abstract class MissionBehavior : IMissionBehavior`——再往上 **`MissionLogic : MissionBehavior`**（`MissionLogic.cs:9`）。所以你派生自 `MissionBehavior` 或 `MissionLogic` 时就已经实现了这个标记，**写不写 `: IMissionBehavior` 都不影响可发现性**；反过来，单独写 `: IMissionBehavior` 得到的东西引擎找得到，但什么回调也没有。

在 `bannerlord-1.3.15` 整棵托管树里 `IMissionBehavior` 共命中 21 行、分布在 21 个文件（其中 1 行是它自己的声明），全部是「某类型 `: IMissionBehavior`」或泛型约束里的引用。

### 典型用法

标记接口的价值在**发现原版组件**上——`IMissionAgentSpawnLogic : IMissionBehavior`（`IMissionAgentSpawnLogic.cs:8`），所以引擎自己的增援生成逻辑同样能被 `GetMissionBehavior` 捞出来。读的时候只碰接口上有的成员，不要转成任何具体生成类：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static bool ReinforcementsStillRunning(Mission mission, BattleSideEnum side)
{
    // 约束只要求 class + IMissionBehavior，所以能力接口完全可以直接当 T 用
    IMissionAgentSpawnLogic spawnLogic = mission.GetMissionBehavior<IMissionAgentSpawnLogic>();
    if (spawnLogic == null)
    {
        // 未命中时方法体返回 default(T)（Mission.cs:4399），而 class 约束保证那就是 null
        return false;
    }

    return spawnLogic.IsSideSpawnEnabled(side)    // IMissionAgentSpawnLogic.cs:17
        && !spawnLogic.IsSideDepleted(side);     // IMissionAgentSpawnLogic.cs:21
}
```

它内部是 `for (int i = 0; i < this.MissionBehaviors.Count; i++)` 的**正向线性扫描**，逐个做 `this.MissionBehaviors[i] as T`（`Mission.cs:4391-4398`）——所以它是 O(n) 且**首个匹配即返回**，不是「挑一个最合适的」。

### 最容易踩的坑

**引擎确实提供了一个存在性检查方法，但它的约束不是这个标记接口，所以它对能力接口用不了。** `Mission.HasMissionBehavior<T>()`（`Mission.cs:2447`）的声明是 `public bool HasMissionBehavior<T>() where T : MissionBehavior`——约束落在**具体基类**上，不是 `IMissionBehavior`。后果：`mission.HasMissionBehavior<IAgentStateDecider>()` 这行**编译直接失败**（CS0456 之类的约束不满足），而它在引擎内部只是 `return this.GetMissionBehavior<T>() != null;`（`Mission.cs:2449`）——也就是说它能做的事，你的代码用 `GetMissionBehavior<T>() != null` 一行就能做，而且对能力接口同样成立。写 mod 的探测逻辑时不要去照抄那个看起来更省事的 `HasMissionBehavior` 形状：**查行为基类用它，查能力接口只能自己写 `!= null`。**

## 依赖关系

- [MissionBehavior](../../mission/MissionBehavior/) — 实现了 `IMissionBehavior` 并提供全部回调的抽象类；你真正该派生的基类。
- [MissionLogic](../MissionLogic/) — 另一条实现分支；logic 被放进单独的列表，其 tick 方式与普通 Behavior 不同。
- [MissionNetwork](../MissionNetwork/) — 网络分支；该类型的 Behavior 走网络路径而不是本地路径。
- [IMissionAgentSpawnLogic](../IMissionAgentSpawnLogic/) — 扩展本标记的能力接口，用于发现生成逻辑。
- [Mission](../../mission/Mission/) — 拥有 `MissionBehaviors`、`AddMissionBehavior`、`RemoveMissionBehavior` 与 `GetMissionBehavior<T>`。
- [MissionState](../MissionState/) — 创建任务、收集 Behavior 集合并调用 `InitializeStartingBehaviors`。
- [Agent](../../mission/Agent/) — 多数回调签名围绕的 `Agent` 类型。
- [Team](../../mission/Team/) — 队伍变更与生成处理器的另一个常见回调参数。
- [MissionDifficultyModel](../MissionDifficultyModel/) — 另一类任务侧扩展点（模型而非 Behavior），作为对照。
- [CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/) — 战役侧对应物，用来对照两套生命周期。

## 主要成员

#### `public interface IMissionBehavior`

声明本身：**没有成员、没有方法、没有属性**。
- **它给你带来什么：** 让 `Mission.GetMissionBehavior<T>()` 能写出一个受 `class` 约束的 `T`，并让你的能力接口参与与所有原版任务组件相同的发现机制。
- **它不给你什么：** 任何行为。裸实现者身上没有任何引擎会调的东西，也没有任何东西能让这个对象存活下去。
- **隐式实现：** 实现 `IMissionBehavior` 不会给你的类型添加任何方法。任何声明它的类在其他方面原样编译。
- **类型系统约束：** 与 `class` 搭配，它把结构体彻底排除在查找空间之外。任何能传给 `GetMissionBehavior<T>()` 的 `T` 都被保证是引用类型——这也正是未命中永远是 `null` 而绝不会是装箱的零值的原因。

## 使用示例

### 示例 1 — 声明你自己的任务能力接口

```csharp
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // 刻意留空：一个能力标记，可通过任务被发现。
    public interface IMyGarrisonRoster
    {
        int AliveGarrisonCount { get; }
    }

    // 派生自 MissionBehavior（而不是那个标记）才能拿到回调。
    public class MyGarrisonBehavior : MissionBehavior, IMyGarrisonRoster
    {
        private int _alive;

        public int AliveGarrisonCount => _alive;

        public override void OnMissionBehaviorAdded()
        {
            // 注册守军需要的任何东西。标记接口本身什么都不提供。
            Debug.Print("garrison behavior attached");
        }

        public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent,
            AgentState agentState, KillingBlow blow)
        {
            if (affectedAgent.IsFriendOf(Mission.Current.MainAgent))
            {
                _alive--;
            }
        }
    }
}
```

### 示例 2 — 找到另一个 mod 的能力组件

```csharp
public bool IsGarrisonAlive(Mission mission)
{
    // 合法，因为 IMyGarrisonRoster 是一个受 class 约束的标记。
    // 未命中返回 null——务必判空。
    var roster = mission.GetMissionBehavior<IMyGarrisonRoster>();
    if (roster == null)
    {
        return false;
    }
    return roster.AliveGarrisonCount > 0;
}
```

### 示例 3 — 为"任意任务组件"写辅助方法

```csharp
public static class MissionComponentProbe
{
    // 与 Mission.GetMissionBehavior<T> 相同的两条约束。
    public static bool Exists<T>(Mission mission) where T : class, IMissionBehavior
    {
        // 因为有 class 约束，对每个合法的 T，default(T) 都是 null。
        return mission.GetMissionBehavior<T>() != null;
    }
}
```

### 示例 4 — 正确的加入方式

```csharp
public void Attach(Mission mission)
{
    // AddMissionBehavior 接收具体的 MissionBehavior，而不是标记。
    mission.AddMissionBehavior(new MyGarrisonBehavior());
}
```

### 示例 5 — 区分能力接口与行为基类

```csharp
public void Describe(Mission mission)
{
    // 能力视角：只有接口上的成员是安全的。
    var decider = mission.GetMissionBehavior<IAgentStateDecider>();
    if (decider != null)
    {
        Debug.Print("agent state decider present");
        return;
    }

    // 行为视角：只对确实是 MissionBehavior 的对象成立。
    var behaviour = mission.GetMissionBehavior<MissionBehavior>();
    if (behaviour != null)
    {
        Debug.Print("a plain behaviour is present, but no state decider");
    }
}
```

## 风险与崩溃边界

- **崩溃边界 —— 任务之外 `Mission.Current` 为 null。** `GetMissionBehavior<T>` 是 [Mission](../../mission/Mission/) 上的实例方法，所以你必须持有 `Mission` 引用（或 `Mission.Current`）并且身处任务之中。从战役地图代码调用它会在第一次解引用时抛异常。
- **裸实现是静默空操作。** 只实现 `IMissionBehavior` 并被加入任务的类是可被发现的，但收不到任何回调。没有异常也没有警告——该组件就永远什么都不做。请派生自 `MissionBehavior` 或 `MissionLogic`。
- **首个匹配，不是最佳匹配。** `GetMissionBehavior<T>()` 返回 `MissionBehaviors` 中第一个满足 `T` 的条目。当有两个 Behavior 实现同一个能力接口时，胜者取决于它们被加入的顺序（来自 `AddDefaultMissionBehaviorsTo` 的默认集合、然后是初始化委托、再是 handler 的 `OnAddBehaviors`）。该顺序跨版本不是稳定性保证。
- **结构体在编译期就被排除。** `where T : class, IMissionBehavior` 对结构体 `T` 是硬性编译错误。这是刻意设计，但也意味着你无法构造一个无状态的值类型能力组件并用这种方式查找它。
- **未命中的返回值是 `default(T)`。** 对每个合法的 `T` 都是 `null`。请务必判空；接口本身没有提供 `TryGet` 形式。
- **`MissionLogic` / `MissionNetwork` 的分流很重要。** `MissionState.AddBehaviorsToMission` 把 Behavior 分成三路（`MissionLogic[]`、`MissionBehavior[]`、`MissionNetwork[]`），`Mission.AddMissionBehavior` 把每一个路由进对应的列表。一个同时实现了 `IMissionBehavior` 与 `MissionLogic` 的对象走 logic 路径而不是普通 Behavior 路径——按普通 Behavior 去理解 `OnMissionTick` 的预期是不匹配的。
- **生命周期只有一个任务。** 这里没有战役作用域的东西，也没有任何东西被序列化。在一个任务里找到的组件，会在任务结束时消失；不要把引用缓存过 `OnMissionStateFinalized`。
- **跨域依赖。** 接口位于 `TaleWorlds.MountAndBlade`，但每个实现都会碰到 `TaleWorlds.Core`（`Vec3`、`GameState`）、`TaleWorlds.Library`（集合、日志）以及原生场景互操作。你的程序集必须引用 `TaleWorlds.MountAndBlade` 与 `TaleWorlds.Core`，否则组件加载失败。
- **加载顺序。** Behavior 必须在它所依赖的回调被触发之前加入。在另一个 Behavior 的 `OnMissionBehaviorAdded` 里加入是可以的；在战斗开始之后才加入，则会错过此前所有的 `OnAgentCreated`/`OnAgentHit`。
- **ID 稳定性。** 这里没有标识符，但*能力接口的名字*实际上是一条公开契约：如果你的 mod 发布了 `IMyGarrisonRoster`，别的 mod 可能依赖它。改名对他们就是破坏性变更。

## 跨版本提示

- **v1.3.x（本页）：** 该接口为空，而且已经空了很长一个时期；[MissionBehavior](../../mission/MissionBehavior/) 声明 `: IMissionBehavior`，而 `Mission.GetMissionBehavior<T> where T : class, IMissionBehavior` 是已发布程序集里唯一的消费者形态。
- **v1.4.x：** 未变。新版本增加了更多扩展本标记的能力接口（载具处理器、回合组件等），但标记本身仍保持零成员——这正是它实现起来廉价、被扫描时安全的原因。
- **v1.5.x：** 预计会有更多任务能力接口和更多多重实现的类。稳定契约是这两条泛型约束，以及标记保持为空这一点。请针对 `Mission.GetMissionBehavior<T>()` 构建，而不是自己去枚举 `MissionBehaviors`，这样查找顺序仍然是引擎的决定。

## 参见

- ↑ 父级目录：[Mission-Ext API 索引](./)
- ↑ 任务基类：[MissionBehavior](../../mission/MissionBehavior/) — 你真正该派生的类
- ↔ 同级：[MissionLogic](../MissionLogic/) — 另一条实现分支
- ↔ 同级：[MissionNetwork](../MissionNetwork/) — 网络实现分支
- ↔ 同级：[MissionState](../MissionState/) — 创建任务并划分 Behavior 集合
- ↔ 同级：[MissionDifficultyModel](../MissionDifficultyModel/) — 一个"是模型而非 Behavior"的任务侧扩展点
- ↑ 任务：[Mission](../../mission/Mission/) — `GetMissionBehavior<T>`、`AddMissionBehavior`、`MissionBehaviors`
- ↑ Agent：[Agent](../../mission/Agent/)
- ↑ 战役侧对应物：[CampaignBehaviorBase](../../campaign-ext/CampaignBehaviorBase/)