---
title: "AgentDecideKilledOrUnconsciousModel"
description: "单个抽象方法的概率模型：返回值是「死亡概率」，out 参数是「濒死但不死的那一段宽度」；消费方 Mission.GetAgentState 还叠了一层 IAgentStateDecider 优先通道。"
---

# AgentDecideKilledOrUnconsciousModel

**Namespace:** TaleWorlds.MountAndBlade.ComponentInterfaces
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**Base:** `MBGameModel<AgentDecideKilledOrUnconsciousModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs`（全文 12 行）

## 概述

全文 12 行，**一个抽象方法**，没有字段、没有属性、没有其它成员：

```csharp
public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>
{
    public abstract float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent, DamageTypes damageType,
        WeaponFlags weaponFlags, out float useSurgeryProbability);
}
```

它决定的是**「这一击打下去，人是死了还是只是昏迷倒地」**。这是模组改写战斗观感性价比最高的一个模型——因为它的输出直接决定了「友军会不会被一刀带走」。

三个官方实现（都在 `TaleWorlds.MountAndBlade` / `SandBox` / `StoryMode` 三个程序集里）：

| 实现类 | 程序集 | 行为 |
| --- | --- | --- |
| [DefaultAgentDecideKilledOrUnconsciousModel](../DefaultAgentDecideKilledOrUnconsciousModel) | `TaleWorlds.MountAndBlade` | `useSurgeryProbability = 0f; return 1f;` —— **永远死** |
| `SandboxAgentDecideKilledOrUnconsciousModel` | `SandBox` | 走 `Campaign.Current.Models.PartyHealingModel.GetSurvivalChance(...)`，`return 1f - 存活概率` |
| `StoryModeAgentDecideKilledOrUnconsciousModel` | `StoryMode` | 对剧情关键角色 `return 0f`（**永远不死**），其余转发 `base.BaseModel` |

## 心智模型

把它当成**「两个概率切片的一段区间分配器」**。整条心智模型就是：搞清楚这两个 `out`/返回值在消费方里怎么变成结果。

**消费方的完整实现在 `Mission.GetAgentState`（`Mission.cs:4702-4745`，带 `[MBCallback(null, false)]` 标记）：**

```csharp
float num;
float agentStateProbability = MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel
    .GetAgentStateProbability(affectorAgent, agent, damageType, weaponFlags, out num);
AgentState agentState = AgentState.None;
bool flag = false;
using (List<MissionBehavior>.Enumerator enumerator = this.MissionBehaviors.GetEnumerator())
{
    while (enumerator.MoveNext())
    {
        IAgentStateDecider agentStateDecider;
        if ((agentStateDecider = (enumerator.Current as IAgentStateDecider)) != null)
        {
            agentState = agentStateDecider.GetAgentState(agent, agentStateProbability, out flag);
            break;
        }
    }
}
if (agentState == AgentState.None)
{
    float randomFloat = MBRandom.RandomFloat;
    if (randomFloat < agentStateProbability) { agentState = AgentState.Killed; flag = true; }
    else
    {
        agentState = AgentState.Unconscious;
        if (randomFloat > 1f - num) { flag = true; }
    }
}
if (flag && affectorAgent != null && affectorAgent.Team != null && agent.Team != null
    && affectorAgent.Team == agent.Team) { flag = false; }
```

从这段能推出四条确定的语义。

**第一条：返回值 `agentStateProbability` 是「死亡概率」。** `MBRandom.RandomFloat < agentStateProbability` → `AgentState.Killed` + `flag = true`。所以 `return 1f` = 必死，`return 0f` = 必死不了。三个官方实现正好落在两端。

**第二条：`out useSurgeryProbability` 是「濒死但不死的那一段宽度」，判据是 `randomFloat > 1f - num`。** 这个区间的 `agentState` 是 `Unconscious`，但 `flag` 会是 `true`。也就是说它是**「用手术把濒死者救回来」这个标记的触发概率**——名字 `useSurgeryProbability` 就是这个意思。

**第三条：两个数不是独立的，它们必须自洽。** 因为 `Killed` 分支先判，落进 `Unconscious` 分支意味着 `randomFloat >= agentStateProbability`。所以：

- 若 `agentStateProbability > 1f - num`，两段区间**重叠**，`flag = true` 的总概率大于 `1f - agentStateProbability`。
- 若 `agentStateProbability + num > 1f`，两段区间**溢出到 [0,1) 之外**，`useSurgeryProbability` 的实际生效概率是 `num - agentStateProbability`。
- 若 `agentStateProbability = 1f`（官方默认值），`Unconscious` 分支**永远不会进**，`num` 取什么值都无效——**这就是 `DefaultAgentDecideKilledOrUnconsciousModel` 里 `useSurgeryProbability = 0f` 与 `return 1f` 配套的原因**。

**第三条也是实践里最容易翻车的地方：沙盒实现返回 `1f - 存活概率` 并设 `useSurgeryProbability = 1f`。** `SandBoxAgentDecideKilledOrUnconsciousModel.cs:33`：

```csharp
return 1f - Campaign.Current.Models.PartyHealingModel.GetSurvivalChance(
    partyBase, characterObject, damageType,
    Extensions.HasAnyFlag<WeaponFlags>(weaponFlags, 17179869184L), partyBase2);
```

当存活概率很低时，`1f - 存活概率` 逼近 1，而 `num = 1f` 让 `1f - num = 0`，于是 `randomFloat > 0` 几乎恒真——**几乎所有非致死一击都会被标记成「用手术救回来」**。这就是 Bannerlord 里「士兵倒地但不死」观感的来源。

**第四条：`IAgentStateDecider` 是一条优先旁路，会完全绕过模型。** 上面那个 `using` 块遍历 `MissionBehaviors`，一旦遇到第一个实现了 [IAgentStateDecider](../IAgentStateDecider) 的行为，就调 `agentStateDecider.GetAgentState(agent, agentStateProbability, out flag)` 并 `break`。**注意它仍然把 `agentStateProbability` 传进去了**，所以你写的模型返回值会影响这条旁路的行为；但**这条旁路的存在意味着你的模型可以被某个行为完全顶掉**。此时 `agentState` 非 `None`，随机分支整段跳过。

**第五条：`flag` 会被友伤强制清零。** 最后那个 `if` 把「攻击方与受害方同队」的情况下的 `flag` 打回 `false`——**状态（死/昏迷）不变，但「用过手术」的标记被抹掉**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `GetAgentStateProbability` | `public abstract float GetAgentStateProbability(Agent affectorAgent, Agent effectedAgent, DamageTypes damageType, WeaponFlags weaponFlags, out float useSurgeryProbability)` | **唯一的抽象成员，必须实现。** 返回值 = 死亡概率（`[0,1]`，实践里没人保证上界）。`out useSurgeryProbability` = 濒死不死的区间宽度。`affectorAgent` 可为 null（环境伤害）；`effectedAgent` 就是被打的那个（`Mission.GetAgentState` 的第二个参数名是 `agent`，但官方实现里叫 `effectedAgent`，注意别按位置理解反了）。`weaponFlags` 是 `WeaponFlags` 位标志。**纯查询，不改任何状态**，且每个 `out` 参数在 C# 里必须赋值才能返回——`out` 不是可选项。 |

类里没有其它成员。它继承 `MBGameModel<AgentDecideKilledOrUnconsciousModel>`，所以你能通过 `this.BaseModel`（`private protected` getter）拿到链上上一层。

## 真实示例

照官方 `StoryModeAgentDecideKilledOrUnconsciousModel` 的形状做「保护特定角色」——注意 **`out` 必须先赋初值**，因为它不是 `out var`，且 C# 要求每条返回路径都赋值：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MyKillChanceModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>
{
    public override float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent, DamageTypes damageType,
        WeaponFlags weaponFlags, out float useSurgeryProbability)
    {
        // out 参数必须在每条返回路径上赋值
        useSurgeryProbability = 1f;
        if (effectedAgent.IsHuman && effectedAgent.Character.IsHero)
        {
            // 英雄不容易死
            return 0.25f;
        }
        return this.BaseModel.GetAgentStateProbability(
            affectorAgent, effectedAgent, damageType, weaponFlags, ref useSurgeryProbability);
    }
}
```

`MBGameModel<T>` 只有 `Initialize(T baseModel)` 一个装配钩子（无参构造由基类默认提供），所以这个派生类只需要实现 `GetAgentStateProbability` 一个成员。`BaseModel` 的 getter 是 `private protected`，**在这个派生类里可读**。

注册（`AddModel<T>` 的泛型重载会接上 `BaseModel`，照抄官方的写法）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        gameStarterObject.AddModel<AgentDecideKilledOrUnconsciousModel>(new MyKillChanceModel());
    }
}
```

绕过模型直接接管——这是 [IAgentStateDecider](../IAgentStateDecider) 的形状，一个行为就能顶掉整个模型：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyStateDecider : MissionBehavior, IAgentStateDecider
{
    public override MissionBehaviorType BehaviorType
    {
        get { return MissionBehaviorType.Logic; }
    }

    public AgentState GetAgentState(Agent affectedAgent, float deathProbability, out bool usedSurgery)
    {
        usedSurgery = false;
        if (affectedAgent.Character.IsHero)
        {
            return AgentState.Unconscious;
        }
        return AgentState.None;
    }
}
```

## 风险与边界

- **`IAgentStateDecider` 旁路会完全绕过模型。** `Mission.GetAgentState` 的 `using` 块遇到第一个 [IAgentStateDecider](../IAgentStateDecider) 就 `break`。它仍然收到你的 `deathProbability` 作为参数，但最终状态由它决定。**「我的模型怎么没生效」的第一个排查点就是这个。**
- **`return 1f` 会让 `useSurgeryProbability` 完全失效。** 因为 `Killed` 分支先判死，`Unconscious` 分支永远不进。这是官方 `DefaultAgentDecideKilledOrUnconsciousModel` 的行为。
- **两个数必须自洽。** `agentStateProbability` 与 `1f - useSurgeryProbability` 谁大谁小决定了「用手术」标记的真实概率。沙盒实现 `1f - 存活概率` 配 `1f` 会让标记几乎恒真——**这是设计而非 bug，但你放大返回值时会一并放大它。**
- **`out` 参数强制赋值。** C# 编译期就要求每条返回路径都赋值，不能「先算返回再补 out」。
- **`affectorAgent` 可以是 null。** `Mission.GetAgentState` 传的是命中回调给的参数，环境伤害（坠落等）会给 null。所有实现都必须处理它——官方沙盒实现里就是 `if (affectorAgent != null && affectorAgent.IsHuman)`。
- **`IAgentStateDecider` 旁路只扫「第一个」。** `break` 在找到之后立刻执行，所以列表里后面的实现者不会被问。`MissionBehaviors` 的遍历是**正序** `using` + `while (enumerator.MoveNext())`，即注册顺序靠前者胜出。而 `MissionBehavior` 的每帧 tick 是**倒序**——**同一个列表上「注册顺序优先」和「倒序优先」并存，别混**。
- **友伤会清掉 `flag`。** 状态不变但标记被抹。所以「友军救人」的记录在友伤场景下不会出现。
- **`Character` 可能为 null。** `effectedAgent.Character` 在某些生成路径（例如纯 `Monster` 创建的 Agent）下可能不是 `BasicCharacterObject`，官方实现里就是直接 `(CharacterObject)effectedAgent.Character` 强转——**在非人类单位上会抛 `InvalidCastException`**。
- **`WeaponFlags` 是位标志，官方沙盒实现用一个裸位常量 `17179869184L` 去 `HasAnyFlag`。** 那个数是 `WeaponFlags` 的第 34 位，源码里没有具名常量——**写自己的实现时别照抄这个数字，去 `WeaponFlags` 找对应的具名成员。**
- **它是 `MBGameModel<T>`，所以覆盖靠注册顺序。** `GetGameModel<T>()` 倒序扫「最外层」。照 [GameModel](../../core-extra/GameModel) 那套装饰链来理解。
- **抽象类只有 12 行。** 行为契约全在 `Mission.GetAgentState` 一处，别从本类推测更多。

## 怎么用

### 怎么拿到它

`public abstract class AgentDecideKilledOrUnconsciousModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>`（`TaleWorlds.MountAndBlade/ComponentInterfaces/AgentDecideKilledOrUnconsciousModel.cs:7`）。它自己不 new：读入口是 `MissionGameModels.Current.AgentDecideKilledOrUnconsciousModel` 那个已注册的实例，写入口是 `GameStarter.AddModel<AgentDecideKilledOrUnconsciousModel>(你的实例)`（见下面示例里的 `InitializeGameStarter`）。

### 典型用法

上面「真实示例」第一段按「是不是英雄」分流，第二段是注册。真正高频的改法是按**伤害维度**分流——同样的两个人，拿矛捅和拿箭射应该是两种死亡率，而 `weaponFlags` 与 `damageType` 两个参数就是为此存在的：

```csharp
public class MyLethalityModel : MBGameModel<AgentDecideKilledOrUnconsciousModel>
{
    public override float GetAgentStateProbability(
        Agent affectorAgent, Agent effectedAgent, DamageTypes damageType,
        WeaponFlags weaponFlags, out float useSurgeryProbability)
    {
        // 远程武器：RangedWeapon 是 WeaponFlags 的第 2 位（值为 2）
        if (weaponFlags.HasFlag(WeaponFlags.RangedWeapon))
        {
            // 先取官方基础概率（含濒死区间宽度），再放大致死率
            float baseChance = this.BaseModel.GetAgentStateProbability(
                affectorAgent, effectedAgent, damageType, weaponFlags, ref useSurgeryProbability);
            return MathF.Min(1f, baseChance * 1.4f);
        }

        // 其余路径原样转发；out 参数由 BaseModel 赋值
        return this.BaseModel.GetAgentStateProbability(
            affectorAgent, effectedAgent, damageType, weaponFlags, ref useSurgeryProbability);
    }
}
```

与上面「真实示例」的差别：那里是**按受害者身份**分流（英雄 / 非英雄）后直接返回一个常数概率；这里先向 `BaseModel` 要一个基准值、再按**攻击手段**（`WeaponFlags` 位标志）缩放它，并显式 `MathF.Min(1f, ...)` 夹住上界——因为本方法不保证返回值落在 `[0,1]`。

### 最容易踩的坑

**`IAgentStateDecider` 旁路会完全绕过模型。** `Mission.GetAgentState` 的 `using` 块遇到第一个 [IAgentStateDecider](../IAgentStateDecider) 就 `break`。它仍收到你的 `deathProbability` 作参数，但最终状态由它决定。「我的模型怎么没生效」的第一个排查点就是这个。

## 跨版本提示

`AgentDecideKilledOrUnconsciousModel` 的 12 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里完全一致——**一个抽象方法，从没变过**。消费方 `Mission.GetAgentState` 的结构（模型 → `IAgentStateDecider` 旁路 → 随机 → 友伤清 flag）在这些版本间也没改。

会变的是三个官方实现：
- 沙盒版依赖 `Campaign.Current.Models.PartyHealingModel.GetSurvivalChance(...)`，而 `PartyHealingModel` 的语义在后续版本被扩展过（编队、俘虏等维度），**所以「存活概率」的数值会变，你的模型继承它的输出时结果也跟着变**。
- `StoryMode` 版依赖 `StoryModeManager.Current.MainStoryLine.TutorialPhase`，这是剧情状态，跨大版本最容易失效。
- `DamageTypes` 与 `WeaponFlags` 两个参数类型都在持续追加成员，但**既有成员的值不变**，所以你的 `==` / `HasAnyFlag` 比较继续有效。

实践结论：**这个模型接口极其稳定，升级风险全在你继承的那一层输出上。** 想跨版本稳定，就自己在 `return` 前把概率夹到 `[0, 1]` 并显式设 `useSurgeryProbability`，不要把 `BaseModel` 的原始输出直接透传。

## 依赖关系

- 基类：`MBGameModel<AgentDecideKilledOrUnconsciousModel>`，覆盖机制见 [GameModel](../../core-extra/GameModel) 与 [MBGameModel](../../core-extra/MBGameModel)
- 消费方：[Mission](../../mission/Mission) 的私有 `GetAgentState(Agent, Agent, DamageTypes, WeaponFlags)`（`Mission.cs:4702`，带 `[MBCallback(null, false)]`），方法带 `[UsedImplicitly]`
- 聚合入口：[MissionGameModels](../MissionGameModels) 的 `AgentDecideKilledOrUnconsciousModel` 只读属性（`MissionGameModels.cs:39` / `:103`），由 `base.GetGameModel<AgentDecideKilledOrUnconsciousModel>()` 填入
- 旁路接口：[IAgentStateDecider](../IAgentStateDecider)（`public AgentState GetAgentState(Agent affectedAgent, float deathProbability, out bool usedSurgery)`，继承 `IMissionBehavior`）
- 官方实现：[DefaultAgentDecideKilledOrUnconsciousModel](../DefaultAgentDecideKilledOrUnconsciousModel)（引擎程序集，`1f` + `0f`）、`SandboxAgentDecideKilledOrUnconsciousModel`（沙盒）、`StoryModeAgentDecideKilledOrUnconsciousModel`（剧情）
- 参数类型：[Blow](../Blow) 的 `AttackType` 走到这里时变成 `WeaponFlags`，`DamageTypes` 在 `TaleWorlds.Core`
- 下游状态：[AgentMoraleInteractionLogic](../AgentMoraleInteractionLogic) 的 `OnAgentRemoved` 依赖 `AgentState` 是 `Killed` 还是 `Unconscious` 来决定触发
- 注册入口：`EditorGame.cs:54`、`SandBox/SandBoxSubModule.cs:38`、`StoryMode/StoryModeSubModule.cs:100` 三处官方注册点
- 桶首页：[mission-ext API 分区](../)