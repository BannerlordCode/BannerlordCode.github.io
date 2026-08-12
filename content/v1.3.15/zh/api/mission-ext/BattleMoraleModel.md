---
title: "BattleMoraleModel"
description: "把战斗内 Agent 失能、恐慌、伤亡与舰船事件转换为双方士气增减的可替换任务模型。"
---
# BattleMoraleModel

**命名空间:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**模块:** `TaleWorlds.MountAndBlade`  
**类型:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`  
**基类:** `MBGameModel<BattleMoraleModel>`  
**源文件:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`  
**默认实现:** `SandBox.GameComponents/SandboxBattleMoraleModel.cs`（以及 `MountAndBlade` 中的 `CustomBattleMoraleModel`）

## 一句话职责

它回答“这一次击倒、恐慌、伤亡或舰船事件，应该让哪一方士气涨多少、哪一方跌多少”，并返回带方向的士气增量；它不指挥 Agent 移动、不触发溃逃，也不生成或销毁任何单位。路由与恐慌系统把这组增量当作共享规则，因此自定义实现影响的是所有读取者看到的士气结算，而不是某一个 UI 数字。

## 心智模型

这是任务内的战斗士气规则层。`Mission` 在每次 tick、每次击倒/恐慌结算以及每次舰船事件时调用它，把“谁被击倒、用了什么武器、属于哪一阵营”换算成 `(被击方最大士气损失, 击杀方最大士气增益)` 这样的双方增量。路由逻辑和 [`Agent`](../../mission/Agent) 的恐慌/溃逃判定随后消费这些增量。

计算链是：击倒/恐慌/伤亡/舰船事件作为入参，先进入 `MissionGameModels.Current.BattleMoraleModel` 的各个抽象方法得到规模级增量，再由 `CalculateMoraleChangeToCharacter` 按角色 `GetMoraleResistance` 落到单个角色身上，最后回到 [`Agent`](../../mission/Agent) 与 [`Team`](../../mission/Team) 的士气累计。模型本身只算数、不改世界。

使用这个模型，是为了改变所有消费者看到的“士气结算结果”。如果目标是直接让单位溃逃、传送或改编制，应使用 [`MissionBehavior`](../../mission/MissionBehavior) 的公开 API、对应 `*Action` 或 [`Agent`](../../mission/Agent) 的状态 API；不要在计算回调里写 `Position`、招募单位、改 `MobileParty` 编制或触发世界变更，那会把一个只读查询变成每次 tick 都重复执行的副作用。常量（`BaseMoraleLossOnKill = 4`、`BaseMoraleGainOnKill = 3`、`BaseMoraleLossOnPanic = 1.1`、`BaseMoraleGainOnPanic = 2`、近战倍率 `0.75` / 远程 `0.5` / 攻城 `0.25`、伤亡系数率 `2`）只是默认实现的基准，重写时可以不依赖它们。

### 生命周期与注册

`MissionGameModels.Current.BattleMoraleModel` 持有当前实例。默认实例是 `SandboxBattleMoraleModel`，游戏在任务初始化阶段通过 `IGameStarter.AddModel` 注册；自定义模型也必须在任务系统开始查询前完成注册。模块加载早期、标题界面或没有任何活动任务时，`MissionGameModels.Current` 为 `null`，不能在静态字段初始化或菜单构造函数里无条件读取它——这与战役模型不同：**任务模型在 `MissionGameModels.Current` 上，而不在 `Campaign.Current.Models` 上**。任务结束后实例随任务生命周期丢弃，不进存档。

## 依赖图

### 上游

| 类型 | 关系 |
| --- | --- |
| [`Mission`](../../mission/Mission) | 提供活动任务与 `MissionGameModels.Current` 注册表；`CalculateCasualtiesFactor` 通过 `Mission.Current.GetRemovedAgentRatioForSide` 读取该方伤亡比。 |
| [`Agent`](../../mission/Agent) | 提供被影响/影响者单位，以及其 `Team`、`Formation`、`Character`、`Origin`、`HasMount` 等。 |
| [`Formation`](../../mission/Formation) | 提供阵型 `ArrangementOrder`、队长 Perk 与 `GetAllUnits`，用于伤亡系数与平均士气计算。 |
| [`AgentState`](../../core-extra/AgentState) | 表示受影响 Agent 的失能状态（如 `Unconscious`），用于决定“仅击昏”时是否施加死亡级士气冲击。 |
| [`KillingBlow`](../KillingBlow) | 携带致命一击的武器类、武器标志与伤害来源，决定近战/远程/攻城武器倍率。 |
| [`BattleSideEnum`](../../core-extra/BattleSideEnum) | 标识攻击/防守方；`CalculateCasualtiesFactor` 与初始士气的 Perk 分支按 `Side` 走不同路径。 |
| [`IShipOrigin`](../../core-extra/IShipOrigin) | 舰船来源接口，是三个海上事件方法的入参。 |

### 下游

| 类型 | 关系 |
| --- | --- |
| [`MissionBehavior`](../../mission/MissionBehavior) | 士气计算由任务行为在每 tick/事件时调用，结果驱动 [`Agent`](../../mission/Agent) 的恐慌与溃逃。 |
| [`Team`](../../mission/Team) | 通过 `Team.Side` 取阵营，计算得到的增量再回写 `Team` 的士气累计。 |
| [`AgentApplyDamageModel`](../AgentApplyDamageModel) | 相邻任务模型；击杀/伤害由它产生，本模型消费其击杀结果换算成士气增量。 |
| [`AgentComponentExtensions`](../AgentComponentExtensions) | 默认实现通过 `AgentComponentExtensions.GetMorale(agent)` 读取当前士气（海上分支）。 |
| [`MissionGameModels`](../MissionGameModels) | 默认实现回调 `BattleBannerBearersModel.GetActiveBanner`；同属任务模型注册表。 |

### Action、事件与存档边界

模型本身不派发事件、不写任何存档字段。士气增量属于任务运行期的内存态，随任务结束丢弃；不得在回调中修改 `Campaign`、金币、`MobileParty` 编制、`MapEvent` 或 `SaveManager` 数据。所有世界变更应走 [`MissionBehavior`](../../mission/MissionBehavior)、`*Action` 或对应的公开 API，保持回调为纯查询式、相同输入下结果确定性一致，否则会与重放的战役 tick 不一致。

## 成员契约

### 失能 / 恐慌：双方士气增量（元组返回）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateMaxMoraleChangeDueToAgentIncapacitated` | 给定被击倒 Agent 的状态、影响者、致命一击，返回 `(affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain)`：被击方最大士气损失、击杀方最大士气增益。 | 击杀/击昏结算时调用；默认实现按战斗重要度、`CalculateCasualtiesFactor`、武器倍率（近战 `0.75` / 远程 `0.5` / 攻城 `0.25`）与双方 Perk、旗效计算；不改任何状态。 |
| `CalculateMaxMoraleChangeDueToAgentPanicked` | 给定恐慌 Agent，返回 `(affectedSideMaxMoraleLoss, affectorSideMaxMoraleGain)`：其阵营的士气损失与对方增益。 | 单位进入恐慌时调用；默认按战斗重要度与伤亡系数计算。 |
| `CalculateMoraleChangeToCharacter` | 把规模级最大增量除以角色的 `GetMoraleResistance`，得到该角色实际承受的士气变化。 | 把增量落到单个角色前调用；默认 `maxMoraleChange / Max(1, moraleResistance)`。 |

### 初始士气与恐慌阈值

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `GetEffectiveInitialMorale` | 把基础士气结合队伍/军队的 Perk（领导力、侦察、骑术、战术等）换算为有效初始士气。 | Agent 生成或任务初始化时调用；默认实现大量读取 `MobileParty` / `Army` 与 `Campaign.Current.Models.CharacterDevelopmentModel`。 |
| `CanPanicDueToMorale` | 判断该 Agent 是否可能因士气崩溃而恐慌（如高 Tier 且拥有 `Leadership.LoyaltyAndHonor` Perk 的角色可豁免）。 | 每 tick 判定恐慌前置条件时调用；返回 `false` 即永不因士气恐慌。 |

### 伤亡与平均士气

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateCasualtiesFactor` | 按 `Mission.Current.GetRemovedAgentRatioForSide(side)` 给出伤亡系数（基础 `1 + 伤亡比 * 2`）。 | 计算失能/恐慌增量时由模型内部调用；`side == -1` 时返回 `1`，不读取任务。 |
| `GetAverageMorale` | 遍历阵型内受 AI 控制的人类单位，返回 `0–100` 的平均士气。 | 行为需要阵型级士气时调用；无单位返回 `0`。 |

### 海上事件（舰船士气）

| 成员 | 用途 | 调用时机与副作用 |
| --- | --- | --- |
| `CalculateMoraleChangeOnShipSunk` | 舰船沉没时的士气变化；默认实现返回 `0`。 | 舰船沉没事件时调用，入参为沉没船的 `IShipOrigin`。 |
| `CalculateMoraleOnRamming` | 撞击事件时返回该 Agent 当前士气；默认 `GetMorale(agent)`。 | 撞击发生时调用，`rammingShip` / `rammedShip` 为双方舰船来源。 |
| `CalculateMoraleOnShipsConnected` | 接舷事件时返回该 Agent 当前士气；默认 `GetMorale(agent)`。 | 两船连接时调用，`ownerShip` / `targetShip` 为双方舰船来源。 |

## 真实读取路径

以下代码只查询当前任务中已注册的任务模型，并解包元组结果：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public void InspectMoraleDeltas(
    Agent affected, AgentState state, Agent affector, in KillingBlow killingBlow)
{
    // MissionGameModels.Current 需要活动 Mission；菜单/战役外为 null
    if (MissionGameModels.Current == null)
    {
        return;
    }

    BattleMoraleModel morale = MissionGameModels.Current.BattleMoraleModel;

    // 元组返回 (被击方最大士气损失, 击杀方最大士气增益)
    (float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain) =
        morale.CalculateMaxMoraleChangeDueToAgentIncapacitated(affected, state, affector, killingBlow);

    // 初始士气：baseMorale 通常来自队伍/角色基础值
    float effective = morale.GetEffectiveInitialMorale(affected, baseMorale: 50f);
}
```

这段结果适合调试或 UI 预览；普通路由逻辑应直接消费 `Team`/`Agent` 的士气，不要自己再重新结算一遍。

## 替换模型时的安全做法

如果只想增加有限修正，保留原模型作为 delegate，让所有抽象成员成对委托：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class ModBattleMoraleModel : BattleMoraleModel
{
    private readonly BattleMoraleModel _vanilla;

    public ModBattleMoraleModel(BattleMoraleModel vanilla)
    {
        _vanilla = vanilla;
    }

    public override (float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain)
        CalculateMaxMoraleChangeDueToAgentIncapacitated(
            Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
    {
        var result = _vanilla.CalculateMaxMoraleChangeDueToAgentIncapacitated(
            affectedAgent, affectedAgentState, affectorAgent, killingBlow);
        // 例如削弱击杀方士气增益 10%
        return (result.affectedSideMaxMoraleLoss, result.affectorSideMaxMoraleGain * 0.9f);
    }

    public override (float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain)
        CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
        => _vanilla.CalculateMaxMoraleChangeDueToAgentPanicked(agent);

    public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
        => _vanilla.CalculateMoraleChangeToCharacter(agent, maxMoraleChange);

    public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)
        => _vanilla.GetEffectiveInitialMorale(agent, baseMorale);

    public override bool CanPanicDueToMorale(Agent agent)
        => _vanilla.CanPanicDueToMorale(agent);

    public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)
        => _vanilla.CalculateCasualtiesFactor(battleSide);

    public override float GetAverageMorale(Formation formation)
        => _vanilla.GetAverageMorale(formation);

    public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin)
        => _vanilla.CalculateMoraleChangeOnShipSunk(shipOrigin);

    public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip)
        => _vanilla.CalculateMoraleOnRamming(agent, rammingShip, rammedShip);

    public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip)
        => _vanilla.CalculateMoraleOnShipsConnected(agent, ownerShip, targetShip);
}
```

实际注册时应在模块加载的模型注册阶段保存 vanilla delegate；不要在模型已经替换后再次通过 `MissionGameModels.Current.BattleMoraleModel` 查找自己，否则会递归。若要让替换覆盖海上、文化和新版本 Perk 规则，优先委托当前版本的 vanilla model，再加自己的有界因素。

## 风险与调试顺序

1. **任务尚未存在:** `MissionGameModels.Current` 在标题界面和早期模块加载阶段为 `null`；延迟到任务内钩子再获取模型。
2. **回调里改世界:** 在结算中读取/写入 `Campaign`、金币、`MobileParty` 编制、`MapEvent` 或 `SaveManager` 会坏档或崩溃。
3. **生成 / 销毁 Agent:** 在回调里 `Spawn` / `Remove` Agent 会破坏任务 tick 与保存状态。
4. **递归替换:** 替换后通过 `MissionGameModels.Current.BattleMoraleModel` 调自己，会无限递归。
5. **非确定性:** 依赖随机数或时间会让士气与重放的战役 tick 不一致；保持回调为纯函数。
6. **无界 / 负值:** 返回 `NaN` 或负士气会让恐慌/溃逃判定失常，元组两个分量都应 `Max(0, …)`。

## 版本与导航

v1.3.15 与 v1.4.5 的接口与默认实现都包含上述抽象成员；v1.4.5 更明显的差异在海上舰船事件（`IShipOrigin`、撞击、接舷）周边路径。跨版本实现应委托当前版本的 vanilla model，而不是把旧公式复制到新版本。

- [任务扩展 API 目录](../)
- [↔ AgentApplyDamageModel](../AgentApplyDamageModel)
- [↔ MissionGameModels](../MissionGameModels)
- [Mission](../../mission/Mission)
- [Agent](../../mission/Agent)
- [Formation](../../mission/Formation)
- [Team](../../mission/Team)
- [MissionBehavior](../../mission/MissionBehavior)
- [AgentComponentExtensions](../AgentComponentExtensions)
- [AgentState](../../core-extra/AgentState)
- [KillingBlow](../KillingBlow)
- [BattleSideEnum](../../core-extra/BattleSideEnum)
- [IShipOrigin](../../core-extra/IShipOrigin)
- [崩溃与存档边界](../../../architecture/crash-boundaries)
