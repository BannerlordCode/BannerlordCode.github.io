---
title: "BattleMoraleModel"
description: "计算一场 Mission 中 Team 与 Agent 士气的规则模型：击杀、失能、惊逃、伤亡比例与海战事件如何改变士气数值并驱动 AI 单位的溃逃与撤退。"
---
# BattleMoraleModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`  
**Base:** `MBGameModel<BattleMoraleModel>`  
**Source:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`  
**Default:** `SandBox.GameComponents/SandboxBattleMoraleModel.cs`（SP 战役；自定义战斗用 `CustomBattleMoraleModel`，多人用 `MultiplayerBattleMoraleModel`）

## 一句话职责

`BattleMoraleModel` 决定一场 `Mission` 中每个 `Team` 与 `Agent` 的士气数值如何随击杀、失能、惊逃、伤亡比例以及海战事件而增减，并据此驱动 AI 单位是否进入溃逃、撤退或继续作战的状态。

## 心智模型

把 `BattleMoraleModel` 当成**“战斗士气计算器”**：它本身不持有任何战斗状态，只提供一组纯函数，由 `Mission` 层在战斗进行期反复调用。实例由 `MissionGameModels` 持有（通过 `MissionGameModels.Current.BattleMoraleModel` 访问），属于运行期战斗层，与战役层解耦。当一名 `Agent` 被击杀/击昏（`OnAgentRemoved`）或逃跑（`OnAgentFleeing`）时，`AgentMoraleInteractionLogic` 这个内置 `MissionBehavior` 会调用它算出“友军最大损失 / 敌军最大增益”两个上界，再按半径与编队挑选附近单位，用 `CalculateMoraleChangeToCharacter` 折算成每个单位实际增减并调用 `Agent.ChangeMorale` 落地。要改变士气规则就替换/继承这个 Model；要直接让某队溃逃应走引擎的撤退逻辑，而不是绕开模型手动改写士气。

```text
Agent 失能/惊逃
   -> AgentMoraleInteractionLogic (MissionBehavior)
       -> MissionGameModels.Current.BattleMoraleModel
            CalculateMaxMoraleChangeDueToAgentIncapacitated / Panicked   (上界)
            CalculateMoraleChangeToCharacter                               (按抗性折算)
       -> Agent.ChangeMorale                                              (落地)
   -> Team / AI 感知平均士气 -> 溃逃 / 撤退决策
```

### 注册与调用者

- 获取入口：`MissionGameModels.Current.BattleMoraleModel`（静态单例，仅在 `Mission` 进行期有效）。源码 `AgentMoraleInteractionLogic` 全程使用这一路径。
- 默认实现按游戏模式区分：SP 战役默认是 `SandboxBattleMoraleModel`，自定义战斗是 `CustomBattleMoraleModel`，多人模式是 `MultiplayerBattleMoraleModel`。三者都继承本抽象类并填充全部抽象方法。
- 调用时机：只在 `Mission` 战斗进行期、且相关 `Agent`/`Formation`/`Team` 仍有效时被调用。`SandboxBattleMoraleModel.CalculateCasualtiesFactor` 内部会读取 `Mission.Current.GetRemovedAgentRatioForSide`，因此必须在 `Mission.Current != null` 时调用。

## 何时用 / 何时不要用

**用：**

- 想自定义士气规则（例如某兵种被击杀对友军冲击更小、英雄被俘不触发惊逃）时，继承 `BattleMoraleModel` 并替换默认实例。
- 在自定义 `MissionBehavior` 里**只读**地查询模型：用 `CalculateMaxMoraleChangeDueToAgentIncapacitated` 预测一次击杀的士气后果并做 UI/统计，用 `CanPanicDueToMorale` 预判某单位是否会因士气崩溃而逃。
- 用 `GetAverageMorale(Formation)` 读取某编队当前平均士气，辅助你自己的 AI 或演出逻辑。

**不要用：**

- **不要绕开模型直接强行让 `Team` 溃逃**：溃逃/撤退是 `Team`/`Mission` 与 AI 在感知平均士气后作出的行为，应改模型数值来间接影响，而不是手动改 `Team` 状态或对象字段。
- **不要在 `Mission` 已结束或 `Mission.Current == null` 时调用**：`CalculateCasualtiesFactor` 会读 `Mission.Current`，此时会空引用。
- **不要对已 `IsActive() == false` 或已从场景移除的 `Agent` 调用**：传入的 `affectedAgent`/`affectorAgent` 必须是仍有效的实例，否则 `GetBattleImportance()`、`.Team`、`.Formation` 会空引用。
- **不要在模型方法里保存/修改战斗状态**：这些方法是“纯查询”，应返回数值，把副作用（落地士气）交给调用方（`Agent.ChangeMorale`），否则多个 `MissionBehavior` 重复施加会叠加出错。

## 依赖图

**上游（创建 / 提供上下文）**

| Type | Relation |
| --- | --- |
| [`Mission`](../../mission/Mission/) | 战斗实例；`CalculateCasualtiesFactor` 通过 `Mission.Current.GetRemovedAgentRatioForSide` 读伤亡比例。 |
| [`Agent`](../../mission/Agent/) | 失能/惊逃的主体与施加者；模型对 `Agent.Character`、`Team`、`Formation` 只读。 |
| [`Team`](../../mission/Team/) | 提供 `Side` 用于区分敌我阵营计算伤亡系数；士气最终影响 `Team` 的溃逃决策。 |
| [`Formation`](../../mission/Formation/) | `GetAverageMorale` 遍历编队单位；`CalculateMax...` 内部读取队长 Perk 与阵型。 |
| [`Campaign`](../../campaign/Campaign/) | `SandboxBattleMoraleModel.GetEffectiveInitialMorale` 读取 `Campaign.Current.Models.CharacterDevelopmentModel` 等战役 Perk。 |

**下游 / 调用方**

| Type | Relation |
| --- | --- |
| [`MissionBehavior`](../../mission/MissionBehavior/) | 内置的 `AgentMoraleInteractionLogic` 在 `OnAgentRemoved`/`OnAgentFleeing` 中调用本模型并把结果落地。 |
| [`AgentApplyDamageModel`](../AgentApplyDamageModel/) | 同属战斗规则模型家族；前者管“伤害”，本模型管“伤害带来的士气后果”，两者以 `KillingBlow` 串联。 |
| `Agent.ChangeMorale` | 模型只算数值，真正的士气增减由调用方用此方法落到单个 `Agent`。 |

## 风险

1. **`Mission.Current == null` 时空引用**：`CalculateCasualtiesFactor(BattleSideEnum)` 内部访问 `Mission.Current.GetRemovedAgentRatioForSide`。在标题界面、大地图或 `Mission` 结束后调用会崩溃。任何调用前先判 `Mission.Current != null`。
2. **传入已移除的 `Agent`**：模型方法普遍读取 `agent.GetBattleImportance()`、`agent.Team`、`agent.Formation`、`agent.Character`。`OnAgentRemoved` 之外若你缓存了 `Agent` 引用并在其死亡后调用，会空引用或读到脏数据。优先在事件回调内就地调用。
3. **`affectorAgent` 可能为 `null`**：击杀来源缺失时（如环境死亡）`affectorAgent` 为 `null`；默认实现会用 `affectorAgent?.Formation` 等安全读取，但你的自定义重写必须同样做空判断，否则崩溃。
4. **自定义重写返回 NaN / 负值**：模型约定返回值是“最大变化量”且应为非负（`SandboxBattleMoraleModel` 用 `MathF.Max(..., 0f)` 兜底）。若你返回 NaN 或负数，`Agent.ChangeMorale` 会把士气推到非法区间，可能导致 AI 异常或显示异常。
5. **替换模型造成的“双份施加”**：士气落地由 `AgentMoraleInteractionLogic` 负责。若你既替换了模型又在自己的 `MissionBehavior` 里手动 `Agent.ChangeMorale`，同一事件会被施加两次。让模型只算、落地交给引擎。
6. **跨 `Mission` 缓存模型引用**：`MissionGameModels.Current` 随场景切换而变；不要把它存成静态字段跨场景复用，每次从 `MissionGameModels.Current` 现取。
7. **存档坏数据**：模型本身不进存档（它是运行期规则），但被它影响的 `Agent` 士气是运行时状态。若你的重写逻辑依赖外部未存档的数据，重开战斗后数值可能不一致——保持重写纯函数化、仅依赖传入参数与 `Mission`/`Agent` 当前状态。

## 成员说明

> 下面按主题分组列出 mod 可见的关键成员。每个成员标注**用途 + 副作用 + 调用时机**。纯内部字段不逐一罗列（9 个 `const float` 见末尾「基础常量」）。

### 一、击杀 / 失能时的士气上界

| 成员 | 类型 | 用途 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `CalculateMaxMoraleChangeDueToAgentIncapacitated` | `(float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain)` | **用途**：一名 `Agent` 被击杀或击昏时，返回“友军（受影响方）最大士气损失”与“敌军（施加方）最大士气增益”两个上界。**副作用**：无，纯查询；默认实现会按武器类型（近战 0.75 / 远程 0.5 / 攻城 0.25）、击杀者 Perk/队长 Perk、阵型、持旗者加成折算，并用 `CalculateCasualtiesFactor` 放大损失。**时机**：`AgentMoraleInteractionLogic.OnAgentRemoved` 内，且仅当 `agentState` 为 `Killed`/`Unconscious` 时。 |
| `CalculateMaxMoraleChangeDueToAgentPanicked` | `(float affectedSideMaxMoraleLoss, float affectorSideMaxMoraleGain)` | **用途**：一名 `Agent` 因惊逃离开战场时给出双方士气上界。**副作用**：无；默认实现用 `GetBattleImportance() * 2f`（增益）与 `importance * casualtiesFactor * 1.1f`（损失），并叠加队长 Perk 与持旗者。**时机**：`AgentMoraleInteractionLogic.OnAgentFleeing` 内。 |
| `CalculateMoraleChangeToCharacter` | `float` | **用途**：把一个“最大变化量”按该单位的士气抗性折算成实际增减值。**副作用**：无；默认实现为 `maxMoraleChange / MathF.Max(1f, agent.Character.GetMoraleResistance())`，即抗性越高变化越小。**时机**：落地前对附近每个受影响的 `Agent` 调用一次。 |

### 二、初始士气与惊逃许可

| 成员 | 类型 | 用途 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `GetEffectiveInitialMorale` | `float` | **用途**：单位进入战场时的初始士气（基础值在 `BattleSide` 初始化时传入）。**副作用**：无；`CustomBattleMoraleModel` 直接返回 `baseMorale`，`SandboxBattleMoraleModel` 会叠加大量战役 Perk（领导力、军队加成、攻城士气等）。**时机**：`Agent` 生成、配属 `Formation` 并设定初始士气时。 |
| `CanPanicDueToMorale` | `bool` | **用途**：判断该 `Agent` 是否允许因士气过低而惊逃。**副作用**：无；默认实现里高阶层且队长有 `Leadership.LoyaltyAndHonor` Perk 的单位不会逃。`CustomBattleMoraleModel` 永远返回 `true`。**时机**：AI 评估是否触发惊逃前调用。 |

### 三、队伍 / 阵营级别

| 成员 | 类型 | 用途 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `CalculateCasualtiesFactor` | `float` | **用途**：给定 `BattleSideEnum`，返回伤亡放大系数（阵亡越多系数越大，放大友军士气损失）。**副作用**：无；默认实现为 `1f + 该方已移除比例 * 2f`，`Mission.Current == null` 或 `None` 时返回 1。**时机**：每次计算击杀/惊逃冲击时内部调用。 |
| `GetAverageMorale` | `float` | **用途**：返回某 `Formation` 内人类 AI 单位的平均士气（0–100，无单位返回 0）。**副作用**：无；遍历 `formation.Arrangement.GetAllUnits()` 并对 `Agent` 调用 `GetMorale()`。**时机**：需要编队整体士气（如演出、自定义指挥 AI）时。 |

### 四、海战事件（v1.3.15 起即存在于抽象类；SP 默认实现返回 0 或原士气）

| 成员 | 类型 | 用途 / 副作用 / 调用时机 |
|------|------|--------------------------|
| `CalculateMoraleChangeOnShipSunk` | `float` | **用途**：一艘船被击沉时给相关单位的士气冲击。`SandboxBattleMoraleModel` 返回 `0f`（SP 无海战），海战模式另有实现。**时机**：海战船沉没事件。 |
| `CalculateMoraleOnRamming` | `float` | **用途**：撞船瞬间该 `Agent` 的士气值；默认实现直接返回该 `Agent` 当前士气。**时机**：撞船事件。 |
| `CalculateMoraleOnShipsConnected` | `float` | **用途**：两船相接时该 `Agent` 的士气值；默认实现返回当前士气。**时机**：接船事件。 |

### 五、基础常量

抽象类暴露 9 个 `public const float`，是默认实现的基数，自定义重写可复用：

- `BaseMoraleGainOnKill = 3f` / `BaseMoraleLossOnKill = 4f`：击杀时增益/损失的基础乘数（默认实现用 `battleImportance * 3f` 与 `* 4f`）。
- `BaseMoraleGainOnPanic = 2f` / `BaseMoraleLossOnPanic = 1.1f`：惊逃时的对应基数。
- `MeleeWeaponMoraleMultiplier = 0.75f` / `RangedWeaponMoraleMultiplier = 0.5f` / `SiegeWeaponMoraleMultiplier = 0.25f`：按武器类别缩放冲击。
- `BurningSiegeWeaponMoraleBonus = 0.25f`：燃烧攻城武器额外加成。
- `CasualtyFactorRate = 2f`：伤亡比例的放大率（对应 `CalculateCasualtiesFactor` 中的 `* 2f`）。

## 示例

### 示例 1：在自定义 MissionBehavior 中只读查询击杀的士气后果（真实获取路径）

下面的行为监听击杀/击昏事件，用 `MissionGameModels.Current.BattleMoraleModel` 读取该模型给出的双方士气上界并打日志。**落地由引擎负责，不要在此重复施加。**

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class MoraleProbeBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)
    {
        base.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);

        if (affectedAgent == null || !affectedAgent.IsHuman) return;
        if (agentState != AgentState.Killed && agentState != AgentState.Unconscious) return;
        if (MissionGameModels.Current == null) return;

        BattleMoraleModel moraleModel = MissionGameModels.Current.BattleMoraleModel;
        (float loss, float gain) = moraleModel.CalculateMaxMoraleChangeDueToAgentIncapacitated(
            affectedAgent, agentState, affectorAgent, in killingBlow);

        InformationManager.DisplayMessage(new InformationMessage(
            $"{affectedAgent.Name}: 友军士气冲击 -{loss:F1}, 敌军士气增益 +{gain:F1}"));
    }
}
```

### 示例 2：继承模型改变惊逃规则（自定义重写，纯函数无副作用）

继承 `BattleMoraleModel` 后，只需重写你想改的方法。下面让“队长带有 `Leadership.LoyaltyAndHonor` 的单位永不惊逃”，其余直接委托默认行为；注意所有重写都返回非负数值、对 `null` 参数做保护。

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem.CharacterDevelopment;

public class NoPanicEliteMoraleModel : BattleMoraleModel
{
    public override (float, float) CalculateMaxMoraleChangeDueToAgentIncapacitated(
        Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow)
    {
        // 直接复用内置默认实现的计算，这里保持原行为
        return base.CalculateMaxMoraleChangeDueToAgentIncapacitated(
            affectedAgent, affectedAgentState, affectorAgent, in killingBlow);
    }

    public override (float, float) CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent)
    {
        return base.CalculateMaxMoraleChangeDueToAgentPanicked(agent);
    }

    public override float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange)
    {
        return maxMoraleChange / MathF.Max(1f, agent.Character.GetMoraleResistance());
    }

    public override float GetEffectiveInitialMorale(Agent agent, float baseMorale)
    {
        return baseMorale;
    }

    public override bool CanPanicDueToMorale(Agent agent)
    {
        if (agent == null || !agent.IsHuman) return true;
        Agent captain = agent.Formation?.Captain;
        if (captain != null && captain.Character is CharacterObject hero && hero.GetPerkValue(Leadership.LoyaltyAndHonor))
        {
            return false;
        }
        return true;
    }

    public override float CalculateCasualtiesFactor(BattleSideEnum battleSide)
    {
        float factor = 1f;
        if (Mission.Current != null && battleSide != BattleSideEnum.None)
        {
            factor += Mission.Current.GetRemovedAgentRatioForSide(battleSide) * 2f;
        }
        return MathF.Max(0f, factor);
    }

    public override float GetAverageMorale(Formation formation)
    {
        return base.GetAverageMorale(formation);
    }

    public override float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin) => 0f;
    public override float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip) => AgentComponentExtensions.GetMorale(agent);
    public override float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip) => AgentComponentExtensions.GetMorale(agent);
}
```

> 让这个派生模型真正生效，需要把它注册为当前游戏模式的战斗士气模型（覆盖 `SandboxBattleMoraleModel` / `CustomBattleMoraleModel` / `MultiplayerBattleMoraleModel` 之一）。注册入口取决于游戏模式，由对应模块在初始化 `MissionGameModels` 时挂入；替换时确保**全部**抽象方法都有实现，且返回值非负。

## 跨版本提示

- 本页语义以完整 `bannerlord-1.4.5` 源码为准。`BattleMoraleModel` 抽象类（9 个抽象方法 + 9 个常量）在 **v1.3.15 与 v1.4.5 完全一致**，三个海战方法（`CalculateMoraleChangeOnShipSunk` / `CalculateMoraleOnRamming` / `CalculateMoraleOnShipsConnected`）在 v1.3.15 已存在，SP 默认实现返回 0 或原士气。
- 获取模型一律用 `MissionGameModels.Current.BattleMoraleModel`；它是战斗进行期的静态单例，不要在 `Mission` 外调用。
- 跨版本兼容写法：只读模型 + 通过引擎落地士气，不要缓存 `Agent`/`Team` 引用跨场景复用。

## 导航

- ↑ 父级：[任务扩展 API 索引](../)
- ↔ 同级：[MBGameManager](../MBGameManager/) · [MissionLogic](../MissionLogic/) · [AgentApplyDamageModel](../AgentApplyDamageModel/)
- 相关 Mission 类型：[Mission](../../mission/Mission/) · [Agent](../../mission/Agent/) · [Team](../../mission/Team/) · [Formation](../../mission/Formation/) · [MissionBehavior](../../mission/MissionBehavior/)
- 战役相关：[Campaign](../../campaign/Campaign/)
