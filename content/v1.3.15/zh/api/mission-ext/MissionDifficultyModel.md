---
title: "MissionDifficultyModel"
description: "任务侧的战斗难度钩子：唯一一个抽象方法，按受击者与攻击者关系缩放每一个伤害数值，由伤害管线调用。"
---
# MissionDifficultyModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`
**Base:** `MBGameModel<MissionDifficultyModel>`
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs`

## 概述

`MissionDifficultyModel` 是一个只有一个方法的任务侧模型：抽象类，恰好只有一个抽象成员 `GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`。它正是 mod 用来改变"战斗对玩家而言有多难"的钩子——原版实现在受击者是主 agent 时返回 `Mission.Current.DamageToPlayerMultiplier`，受击者是友方 agent 时返回 `DamageToFriendsMultiplier`，玩家是友方受击者的攻击者时返回 `DamageFromPlayerToFriendsMultiplier`，其余情况返回 `1f`。

它是一个 `MBGameModel<MissionDifficultyModel>`，因此注册方式与战役模型完全一致：在任务引导阶段通过 `IGameStarter.AddModel<T>` 注册，运行时经 `MissionGameModels.Current.MissionDifficultyModel` 取得。引擎从不直接调用那个抽象方法——它走 `Mission.GetDamageMultiplierOfCombatDifficulty`，后者会在没有注册模型时判空并回落到 `1f`。结果会在 `AttackInformation` 的构造函数里被消费（存为 `CombatDifficultyMultiplier`），并再次被 [MissionCombatMechanicsHelper](../MissionCombatMechanicsHelper/) 使用。

## 心智模型

把它当成**"夹在伤害模型与引擎命中结算之间的、按受击者缩放的伤害系数"**：

- **mod 里的典型调用顺序。** 在你的 [MBSubModuleBase](../../core/MBSubModuleBase/) 重写 `InitializeMissionModel`（或任务版的 starter 钩子）里调用 `game.Models.AddModel<MissionDifficultyModel>(new MyDifficultyModel())`。此后引擎会把每一次战斗伤害查询都路由到你的实例。除此之外不需要任何东西——没有 Behavior 注册，也没有事件订阅。
- **这个调用不是你发起的。** `Mission.GetDamageMultiplierOfCombatDifficulty(victim, attacker)` 由引擎在构造 `AttackInformation` 时调用。你的模型运行在**命中结算过程之中**、伤害被施加之前。不要在里面修改 agent。
- **`victimAgent` 可能是坐骑。** 原版实现开头就是 `victimAgent = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent`。如果你的重写不做同样的归一化，一匹马受到的伤害就会和它的骑手被归入不同类别——同一记物理打击会得到两个不同的系数。
- **`attackerAgent` 是可选的，且经常为 null。** 默认值是 `null`，引擎传什么就用什么；投射物与环境伤害路径并不总会提供攻击者。即使原版模型做了检查，你也绝不能省略判空。
- **坑：返回 `0f` 是灾难，不是"特别难"。** 这个值是施加到伤害上的**乘数**。`0f` 会让目标无敌；负值会产生负血量。请返回一个正的有限浮点数。
- **坑：回落是静默的。** 当 `MissionGameModels.Current.MissionDifficultyModel` 为 null 时，`Mission.GetDamageMultiplierOfCombatDifficulty` 返回 `1f`。如果你的注册发生在引导流程的错误位置，什么都不会失败——战斗只是表现成原版，而且你拿不到任何诊断信息。
- **坑：`MissionGameModels.Current` 是任务域的。** 与 `Campaign.Current.Models` 不同，它在战役地图界面上不可用。任何读取 `MissionDifficultyModel` 的代码都必须位于任务内部。

### 何时使用

**使用 `MissionDifficultyModel` 的场景：**
- 你想按受击者类别（玩家、友方、其他人）改变玩家造成或承受的伤害，又不想动通用伤害模型。
- 你想要随情境变化的难度——护甲等级、兵种 tier、附近友军数量——在打击落下的那一刻施加，而不是烘焙进兵种数值。
- 你在实现一个无障碍或"辅助模式"选项，只软化玩家受到的伤害。

**不要用 `MissionDifficultyModel` 的场景：**
- 你想改基础武器伤害、护甲数值或生命上限。那是伤害模型/装备数据，不是这个乘数。
- 你想改 AI 命中率。那是 `Mission.GetShootDifficulty`，另一条没有模型钩子的路径。
- 你想改士气、编队行为或 agent AI 决策。那些属于 `BattleMoraleModel`、`BattleInitializationModel` 以及任务逻辑类 Behavior。
- 你想要一个*战役级*的难度设置。那是经 `Campaign.Current.Models` 访问的战役自己的难度模型，本钩子并不会查它。
- 你需要事后从 Behavior 里修改伤害。请在 [MissionBehavior](../../mission/MissionBehavior/) 的 `OnAgentHit`/`OnEndMissionInternal` 里做，不要在模型里。

## 怎么用

### 怎么拿到它

**这个类型没有实例可拿——你要做的是实现它的一个子类并注册进去。** 声明是 `public abstract class MissionDifficultyModel : MBGameModel<MissionDifficultyModel>`（`bannerlord-1.3.15/TaleWorlds.MountAndBlade/ComponentInterfaces/MissionDifficultyModel.cs:7`），整个类型只有一个抽象成员 `GetDamageMultiplierOfCombatDifficulty`（`:10`）。它不是 Behavior，没有 `AddMissionBehavior` 那种挂载点。

注册入口是模型注册表的方法 `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`（`TaleWorlds.Core/IGameStarter.cs:13`，实现在 `TaleWorlds.MountAndBlade/BasicGameStarter.cs:47-52`）。实现体三步，都是链式的：

- `T model = this.GetModel<T>();`（`:49`）——`GetModel<T>` 反向扫描 `_models`（`BasicGameStarter.cs:29-33`），所以它拿到的是**当前最后一个已注册的同类型模型**，也就是你将要包裹的那一个。
- `gameModel.Initialize(model);`（`:50`）——把上一层交给你。
- `this._models.Add(gameModel);`（`:51`）——追加到链尾。

消费端是**一次性绑定**：`MissionGameModels` 的构造器（`MissionGameModels.cs:123-129`）先 `MissionGameModels.Current = this;`（`:126`）再调 `this.GetSpecificGameBehaviors();`（`:127`），后者在 `MissionGameModels.cs:104` 执行 `this.MissionDifficultyModel = base.GetGameModel<MissionDifficultyModel>();`。也就是说**绑定只在那一个时刻发生一次**，之后注册的东西永远不会进入这个字段；任务结束时由 `MissionGameModels.Clear()`（`:132-135`）把 `Current` 置回 `null`。

运行时你唯一该用的读取口是 `Mission.GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`（`Mission.cs:6420`），它在 `:6422` 判模型非 null 后转发（`:6424`），模型缺失时 `return 1f;`（`:6426`）。

### 典型用法

写一个**随战场态势缩放玩家所受伤害**的模型：主 agent 附近友军越少，受到的伤害越被压低。注意每个 API 都在本树里核过——`GetNearbyAllyAgents(Vec2 center, float radius, Team team, MBList<Agent> agents)` 在 `Mission.cs:6598`，`IsMainAgent` / `IsFriendOf` 是 `Agent` 上的成员（原版实现在 `DefaultMissionDifficultyModel.cs:16` 与 `:24` 就是这么读的）：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class AllyDensityDifficultyModel : MissionDifficultyModel
{
    // 复用同一个 list：GetNearbyAllyAgents 会先 Clear 它
    private readonly MBList<Agent> _allyScratch = new MBList<Agent>();

    public override float GetDamageMultiplierOfCombatDifficulty(
        Agent victimAgent, Agent attackerAgent = null)
    {
        // 归一化照抄原版 DefaultMissionDifficultyModel.cs:13：坐骑要归到骑手
        Agent victim = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent;
        if (victim == null || !victim.IsMainAgent)
        {
            return 1f;
        }

        Mission mission = Mission.Current;
        if (mission == null)
        {
            return 1f;
        }

        // 注意：这是一次 native 范围查询，会在每一次命中结算中途发生。
        // 真的在意性能就把半径放大，或改成按「当前存活友军数」这类缓存量判断
        mission.GetNearbyAllyAgents(
            victim.GetWorldPosition().AsVec2, 8f, victim.Team, this._allyScratch);

        // 只减伤，不减到 0 —— 0f 会让受击者无敌，负值会把血量推向负数
        float relief = 0.7f - 0.02f * this._allyScratch.Count;
        return relief > 0.5f ? relief : 0.5f;
    }
}
```

`attackerAgent` 在这个实现里故意不读——它默认 `null`，而投射物与环境伤害路径本来就不总会提供它，所以不依赖它是安全的选择。

### 最容易踩的坑

**`MBGameModel<T>.BaseModel` 是 `private protected`，你跨程序集的派生类根本读不到它。** 声明是 `private protected T BaseModel { protected get; private set; }`（`TaleWorlds.Core/MBGameModel.cs:11`），`protected` 部分受 `private` 约束——只有**本程序集内**的派生类能访问。后果：想「在原版难度上再乘一个系数」，直写 `this.BaseModel.GetDamageMultiplierOfCombatDifficulty(...)` **编译不过**；而绕过编译（反射或自己再存一份实例）会让每一次命中结算都多一次反射开销，并且一旦你漏了 `override Initialize(T baseModel)`，缓存下来的就是 `null`，症状是**战斗中途随机抛 NullReferenceException**，而不是一条能指向根因的错误——因为出问题的位置在命中结算管线内部，和「我注册了一个模型」这件事看起来毫无关系。正确写法只有一条：`override Initialize(T baseModel)` 把参数收进自己的私有字段（泛型 `AddModel<T>` 会在注册那一刻替你调用它，`BasicGameStarter.cs:50`）。

顺带一个容易一起踩的点：`IGameStarter` 有**两个** `AddModel` 重载，而非泛型的 `AddModel(GameModel gameModel)`（`BasicGameStarter.cs:41-44`）只做 `_models.Add(gameModel)`，**不调用 `Initialize`**。用它注册同样会让 `BaseModel` 永远停在 null。

## 依赖关系

- [MissionCombatMechanicsHelper](../MissionCombatMechanicsHelper/) — 返回的乘数在伤害管线里的活消费者。
- [Mission](../../mission/Mission/) — 拥有 `GetDamageMultiplierOfCombatDifficulty`、`DamageToPlayerMultiplier` / `DamageToFriendsMultiplier` / `DamageFromPlayerToFriendsMultiplier` 字段，以及存放该模型的 `MissionGameModels` 实例。
- [MissionLogic](../MissionLogic/) — 兄弟任务侧扩展点，用于行为而非模型。
- [MBGameModel](../../core-extra/MBGameModel/) — 承载 `Initialize(T)` 链接契约的基类。
- [GameModel](../../core-extra/GameModel/) — 注册表所存储的模型体系的根。
- [Agent](../../mission/Agent/) — `victimAgent` / `attackerAgent` 两个参数；原版模型读的是 `IsMount`、`RiderAgent`、`IsMainAgent`、`IsFriendOf`。
- [MissionBehavior](../../mission/MissionBehavior/) — 当你需要打击之后的效果而不是打击之前的缩放时的替代方案。
- [DifficultyModel](../../campaign-ext/DifficultyModel/) — 战役侧难度模型，是另一个生命周期完全不同的系统；不要把两者搞混。
- [MBSubModuleBase](../../core/MBSubModuleBase/) — 声明安装模型所用的任务模型注册钩子。

## 主要成员

#### `public abstract float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)`

唯一的成员，也是这个类型的全部意义所在。
- **契约：** 给定一个受击者 agent 和一个可选的攻击者 agent，返回一个正的乘数，施加到正在针对该受击者结算的那一击的伤害上。
- **返回值语义：** `1f` 表示"不改变"。小于 `1f` 减少伤害，大于 `1f` 增加伤害。引擎不做任何钳制——范围由模型自己负责。
- **`victimAgent`：** 可能是坐骑，此时原版实现会替换成骑手。既不是人类也无法解析到骑手的受击者会让原版路径停在 `1f`。
- **`attackerAgent`：** 默认 `null`。原版只在"受击者是主 agent 的友方**且**攻击者是主 agent"这一种情形下检查它，用来在 `DamageFromPlayerToFriendsMultiplier` 与 `DamageToFriendsMultiplier` 之间二选一。
- **何时调用：** 在玩法代码里永远不要自己调它——需要当前值就读 `Mission.Current.GetDamageMultiplierOfCombatDifficulty(...)`，或者在 Behavior 上监听 `OnAgentHit`。
- **副作用：** 不允许有副作用。引擎在命中结算中途构造 `AttackInformation`（因此会调用这个方法）；在这里修改 agent 或生成单位会破坏正在飞行的那一击。

## 使用示例

### 示例 1 — 注册自定义难度模型

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyMission : MBSubModuleBase
{
    public override void OnMissionInitializationFinished()
    {
        // 通过任务模型注册表注册，而不是通过 Behavior。
        base.OnMissionInitializationFinished();
    }

    public override void InitializeMissionModel(int randomSeed, IGameStarter gameModels)
    {
        // 包装已注册的 DefaultMissionDifficultyModel。
        gameModels.AddModel<MissionDifficultyModel>(new AssistDifficultyModel());
    }
}

public class AssistDifficultyModel : MissionDifficultyModel
{
    public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
    {
        // 由引擎在命中结算期间调用。只能是纯函数。
        Agent normalized = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent;
        if (normalized == null || !normalized.IsMainAgent)
        {
            return 1f;
        }
        return 0.6f; // 软化玩家受到的伤害
    }
}
```

### 示例 2 — 在替换之前扩展原版模型

```csharp
public class TierAwareDifficultyModel : MissionDifficultyModel
{
    private MissionDifficultyModel _baseModel;

    public override void Initialize(MissionDifficultyModel baseModel)
    {
        // MBGameModel<T>.Initialize 把已注册的默认模型交给你。
        _baseModel = baseModel;
    }

    public override float GetDamageMultiplierOfCombatDifficulty(Agent victimAgent, Agent attackerAgent = null)
    {
        float vanilla = _baseModel.GetDamageMultiplierOfCombatDifficulty(victimAgent, attackerAgent);
        Agent rider = victimAgent.IsMount ? victimAgent.RiderAgent : victimAgent;
        if (rider == null || !rider.IsMainAgent)
        {
            return vanilla;
        }
        return vanilla * 0.75f;
    }
}
```

### 示例 3 — 在任务 Behavior 里读取当前乘数

```csharp
public class DamageAuditBehavior : MissionBehavior
{
    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
    {
        // 向任务询问；它会路由到已注册的模型，没有模型时回落到 1f。
        float multiplier = Mission.Current.GetDamageMultiplierOfCombatDifficulty(affectedAgent, affectorAgent);
        if (multiplier != 1f)
        {
            Debug.Print($"damage scale for {affectedAgent.Character.Name}: {multiplier}");
        }
    }
}
```

### 示例 4 — 在打击之后做反应，而不是缩放它

```csharp
public class LethalBlowGuardBehavior : MissionBehavior
{
    public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent,
        in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)
    {
        // 不要在这里缩放伤害——那是模型的职责。
        // 打击之后的效果属于 Behavior。
        if (affectedAgent.Health < affectedAgent.HealthLimit * 0.15f && affectedAgent.IsMainAgent)
        {
            Debug.Print("Player is near death.");
        }
    }
}
```

## 风险与崩溃边界

- **崩溃边界 —— 任务之外 `MissionGameModels.Current` 为 null。** 从战役地图代码（每日 tick、菜单）访问模型会在 `.MissionDifficultyModel` 上得到 `NullReferenceException`。请用 `Mission.Current != null` 判断。
- **崩溃边界 —— 模型内部的 `Mission.Current`。** 原版实现读取 `Mission.Current.DamageToPlayerMultiplier` 等字段。你的重写若照做而当前没有任务，就会抛异常。模型只会在任务内部被调用，所以这一点由构造方式保证安全——但直接调用它的单元测试并不安全。
- **`attackerAgent` 为 null 是常态。** 投射物伤害、范围伤害与环境伤害路径并不总会提供攻击者。省略判空的重写会在命中结算中途抛异常，表现为战斗崩溃而不是干净的报错。
- **坐骑归一化。** 跳过 `IsMount ? RiderAgent : self` 这一步，会让坐骑与骑手对同一记物理打击获得不同的难度处理，`AttackInformation.CombatDifficultyMultiplier` 也会与玩家预期不一致。
- **返回 `0f` 或负值是一个活生生的作弊漏洞，不是难度设置。** 该值直接乘到伤害上。`0f` 让受击者免疫；负值把生命值推向负数，并可能把 agent 状态污染到伤害系统之外。请在重写内部钳制。
- **静默回落会掩盖注册失败。** 没有注册模型时 `Mission.GetDamageMultiplierOfCombatDifficulty` 返回 `1f`。因此装在错误引导钩子里的模型会产出原版战斗，且完全没有报错。如果你的改动"毫无效果"，请先验证注册钩子。
- **包装时注册顺序很重要。** `MBGameModel<T>.Initialize(T baseModel)` 收到的是先注册的模型。如果你在默认模型存在之前就注册包装器，`_baseModel` 会是 null，于是每次调用都在命中结算期间抛异常。
- **跨域依赖。** 该类型位于 `TaleWorlds.MountAndBlade` 的 `.ComponentInterfaces` 命名空间，但其实现会伸进 `TaleWorlds.Core`（`Vec3`、`GameState`）以及任务/agent 层。提供该模型的 mod 程序集必须引用 `TaleWorlds.MountAndBlade` 与 `TaleWorlds.Core`。
- **加载顺序边界。** 模型必须在任务模型初始化期间注册，那发生在任务 Behavior 被创建**之后**、战斗开始**之前**。从任务 Behavior 的 `OnMissionBehaviorAdded` 里注册太晚了——最初几下可能已经结算完毕。
- **不参与存档序列化，而且本来也不该。** 这里什么都不持久化。按战役切换的"辅助模式"开关必须存在某个战役 Behavior 的 `SyncData([IDataStore](../../campaign-ext/IDataStore/))`（或设置文件）里，并在调用时由模型读取——不要试图把它存在模型上。
- **ID 稳定性。** 该模型不持有任何标识符，因此没有需要保持稳定的东西——但**模型注册顺序**实际上是一条隐式契约：最后注册并通过 `Initialize` 包装的人会改变所有人的有效行为。请保持链接链浅薄，并把你的 mod 所假设的顺序写进文档。

## 跨版本提示

- **v1.3.x（本页）：** `MissionDifficultyModel` 恰好只有一个抽象成员 `GetDamageMultiplierOfCombatDifficulty`，且是注册于 `MissionGameModels` 的 `MBGameModel<MissionDifficultyModel>`。`DefaultMissionDifficultyModel` 是随附的默认实现，这里只在任务层引用它，没有把它暴露成页面级依赖。
- **v1.4.x：** 形态未变。新版本保留这个单方法契约；如果它们增加了伤害缩放的维度（护甲等级、编队），也是作为**新的**模型类型来做，而不是把这个接口拓宽。
- **v1.5.x：** 预计会围绕命中结算与 AI 增加更多任务模型。这个类型仍然是"针对玩家的"难度缩放。请针对 `Mission.GetDamageMultiplierOfCombatDifficulty` 构建，而不是直接去够 `MissionGameModels.Current`，这样你才能继承 `1f` 的回落行为。

## 参见

- ↑ 父级目录：[Mission-Ext API 索引](./)
- ↔ 同级：[MissionCombatMechanicsHelper](../MissionCombatMechanicsHelper/) — 乘数的消费位置
- ↔ 同级：[MissionState](../MissionState/) — 拥有当前任务的任务生命周期状态
- ↔ 同级：[MissionLogic](../MissionLogic/) — 行为侧扩展点
- ↑ 任务：[Mission](../../mission/Mission/) — `GetDamageMultiplierOfCombatDifficulty` 与 `Damage*Multiplier` 字段
- ↑ 任务 Behavior：[MissionBehavior](../../mission/MissionBehavior/) — 缩放伤害之外的行为替代方案
- ↑ Agent：[Agent](../../mission/Agent/) — 受击者/攻击者参数
- ↑ 模型基类：[MBGameModel](../../core-extra/MBGameModel/)
- ↑ 模型根：[GameModel](../../core-extra/GameModel/)
- ↑ 战役侧对应物：[DifficultyModel](../../campaign-ext/DifficultyModel/)