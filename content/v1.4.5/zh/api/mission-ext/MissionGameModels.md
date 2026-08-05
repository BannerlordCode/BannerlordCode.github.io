---
title: "MissionGameModels — Mission 范围的战斗模型束"
description: "基于 v1.4.5 源码说明 MissionGameModels 的构造、Current 绑定与清理、mission-only 模型查找、战斗/伤害/士气/部署/攻城消费者，以及空引用边界。"
---
# MissionGameModels

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public sealed class MissionGameModels : GameModelsManager`  
**Base:** `GameModelsManager`  
**Source path:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionGameModels.cs`

## 概述

它是 live mission 层的模型束，不是 campaign 模型集合。构造时从 game starter 的模型列表中抓取最后注册的 mission model 实现，并把结果缓存到强类型属性上，让 Mission、战斗计算、部署 UI 和攻城器械逻辑能快速读取。安全使用的关键是：只在 mission/game 生命周期内读取，并对 `Current` 与具体模型属性做 null 边界判断。

## 一句话职责

把当前游戏的 mission 模型列表绑定成快速访问属性，供 Agent 属性、天气、伤害、士气、部署、刷兵、旗帜、阵型、拾取、船只和攻城器械计算使用。

## 心智模型

`MissionGameModels` 是 campaign `GameModels` 的 mission 侧兄弟。`MBGameManager.OnGameStart` 中通过 `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)` 从 `gameStarter.Models` 构造它。构造函数先设置 `MissionGameModels.Current = this`，再调用 `GetSpecificGameBehaviors()` 用 `GetGameModel<T>()` 拉取具体模型。

查找逻辑来自 [GameModelsManager](../../campaign/GameModels)：它从模型列表末尾向前找，返回最后一个可赋给目标类型的模型，找不到则返回 null。这给出了常见的“后注册模型覆盖前注册模型”行为，但也意味着如果某个 mission 模型在 manager 构造前没有注册，对应属性就会保持 null。

这个对象不是 [Campaign.Current.Models](../../campaign/GameModels)。Campaign models 计算经济、外交、遭遇菜单、存档世界规则；Mission models 计算 live mission 中的战斗和场景行为。不要跨 game end 缓存 `MissionGameModels.Current`；`MBGameManager.OnGameEnd` 会调用 `MissionGameModels.Clear()`，把 `Current` 设为 null。

## 何时使用 / 何时不要使用

在 mission 代码、mission behavior、mission view 或战斗 helper 中需要当前 mission 的模型实现时使用它。典型消费者包括 [Mission](../../mission/Mission)、`MissionCombatMechanicsHelper`、`SandboxAgentStatCalculateModel`、竞技大会逻辑、order-of-battle UI、攻城器械逻辑和物品拾取逻辑。

不要在 campaign hourly tick 中假定它总是可用。不要把它存进静态字段。不要用它替换 campaign 规则；campaign 模型通过 [CampaignGameStarter](../../campaign/CampaignGameStarter).`AddModel` 安装，mission 模型应在 `MBGameManager` 构造 `MissionGameModels` 之前通过 mission game starter 安装。

## 依赖与调用链

| 关系 | 源码确认的含义 |
|------|----------------|
| 构造 | `MBGameManager.OnGameStart` 调用 `Game.Current.AddGameModelsManager<MissionGameModels>(gameStarter.Models)`。 |
| 清理 | `MBGameManager.OnGameEnd` 调用 `MissionGameModels.Clear()`，所以 `Current` 变为 null。 |
| 模型来源 | `GameModelsManager.GetGameModel<T>()` 从 `gameStarter.Models` 里返回最后一个匹配模型。 |
| Mission 运行时 | [Mission](../../mission/Mission) 用这些模型计算镜头缩放、天气、部署结束后的属性初始化、命中反应、死亡/昏迷判定、粒子、友伤例外和伤害倍率。 |
| Mission state | [MissionState](../../campaign-ext/MissionState) 激活、停用和终结消耗这些模型的 mission。 |
| Campaign 边界 | [Campaign](../../campaign/Campaign) 与 [GameModels](../../campaign/GameModels) 拥有 campaign 规则；`MissionGameModels` 不持久化战役状态。 |
| 攻城 | [SiegeEventManager](../../campaign/SiegeEventManager) 持有 campaign 攻城状态；`MissionSiegeEngineCalculationModel` 只计算 mission 侧攻城器械数值。 |

## 崩溃、生命周期、线程与空引用风险

- `MissionGameModels.Current` 在 `OnGameStart` 构造前为 null，`OnGameEnd` 清理后也为 null。
- 单个属性也可能为 null，只要没有注册匹配模型。源码调用点并不一致：有些做 null-check，但许多地方默认模型存在。
- 缓存下来的属性可能在 game end 或 reload 后指向旧模型束。应在使用它的 mission 阶段重新读取 `MissionGameModels.Current`。
- 它不是存档根。持久决策应写入 campaign behavior 数据，不要写在 mission model 实例里。
- 缺失 combat 模型可能在很晚才崩溃：伤害、士气、部署、攻城消费者经常位于 mission tick 或 hit processing 深处。

## 关键公开成员

| 成员 | 用途、副作用与时机 |
|------|--------------------|
| `Current` | 静态当前 mission 模型管理器；构造函数设置，`Clear()` 清空。 |
| `AgentStatCalculateModel` | Agent 技能、移动、负重、镜头缩放、属性初始化、武器误差；被 `Mission` 与 sandbox 模型大量使用。 |
| `ApplyWeatherEffectsModel` | 可选 mission 天气效果；`Mission` 调用前做 null-check。 |
| `StrikeMagnitudeModel` | 原始/调整后的 strike magnitude、投射物/挥砍/突刺计算；战斗机械使用。 |
| `AgentApplyDamageModel` | 伤害、碰撞反应、友伤例外、击倒/落马判定。 |
| `AgentDecideKilledOrUnconsciousModel` | Agent 伤害结算中的死亡/昏迷概率。 |
| `MissionDifficultyModel` | 战斗难度伤害倍率；部分调用点会 null-check。 |
| `BattleMoraleModel` | 编队与伤亡士气计算，包含旗帜交互。 |
| `BattleInitializationModel` | 部署与 order-of-battle 权限，mission screen/order-of-battle UI 会读取。 |
| `BattleSpawnModel` | 战斗刷兵与援军选择。 |
| `BattleBannerBearersModel` | 旗手选择与旗帜交互。 |
| `FormationArrangementsModel` | 阵型排列规则。 |
| `AutoBlockModel` | 战斗中的自动格挡判定。 |
| `DamageParticleModel` | 命中处理中血/汗/投射物粒子选择。 |
| `ItemPickupModel` | mission 物品拾取权限与行为。 |
| `MissionShipParametersModel` | 海战/船只场景的 mission 参数。 |
| `MissionSiegeEngineCalculationModel` | mission 侧攻城器械计算，不持有 campaign 攻城状态。 |
| `Clear()` | 静态清理；game end 时把 `Current` 设为 null。 |

## 真实 C# 示例

### 只在 mission 存活时读取 mission model

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class MainAgentSkillProbe : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Logic;

    public override void OnMissionTick(float dt)
    {
        Agent agent = Mission.Current?.MainAgent;
        AgentStatCalculateModel statModel = MissionGameModels.Current?.AgentStatCalculateModel;
        if (agent == null || statModel == null)
        {
            return;
        }

        int athletics = statModel.GetEffectiveSkill(agent, DefaultSkills.Athletics);
        float maxCameraZoom = statModel.GetMaxCameraZoom(agent);
    }
}
```

这些 null guard 很重要，因为 `Current` 和具体 model 属性都受生命周期约束。

### 在 manager 构造前注册 mission model

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.ComponentInterfaces;

public sealed class MyMissionModelSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        if (gameStarterObject is BasicGameStarter basicGameStarter)
        {
            basicGameStarter.AddModel<BattleMoraleModel>(new CustomBattleMoraleModel());
        }
    }
}
```

`MissionGameModels` 在 `MBGameManager.OnGameStart` 构造 manager 时从 `gameStarter.Models` 拉取模型。晚于这个时点注册，已缓存的属性不会更新。

## 导航

**Parent**

- [Mission-ext API index](../)
- [Mission](../../mission/Mission)

**Sibling**

- [AgentStatCalculateModel](../AgentStatCalculateModel)
- [AgentApplyDamageModel](../AgentApplyDamageModel)
- [BattleMoraleModel](../BattleMoraleModel)
- [BattleInitializationModel](../BattleInitializationModel)
- [BattleSpawnModel](../BattleSpawnModel)
- [MissionSiegeEngineCalculationModel](../MissionSiegeEngineCalculationModel)

**Related / Children**

- [MissionState](../../campaign-ext/MissionState)
- [GameStateManager](../../core-extra/GameStateManager)
- [Campaign GameModels](../../campaign/GameModels)
- [CampaignGameStarter](../../campaign/CampaignGameStarter)
- [SiegeEventManager](../../campaign/SiegeEventManager)
