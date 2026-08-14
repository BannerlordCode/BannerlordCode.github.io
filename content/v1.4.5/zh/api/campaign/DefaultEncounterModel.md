---
title: "DefaultEncounterModel"
description: "Bannerlord 1.4.5 的默认 EncounterModel 实现：遭遇阈值、首领与防守方选择、战斗组件路由、投降、贿赂、加入、逃跑和传送规则。"
---
# DefaultEncounterModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class DefaultEncounterModel : EncounterModel`  
**基类：** [`EncounterModel`](../EncounterModel)  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultEncounterModel.cs`

## 一句话职责

`DefaultEncounterModel` 是 v1.4.5 的战役遭遇默认实现，负责相遇阈值、双方首领和防守方、战斗组件路由、投降/贿赂概率、加入部队、逃跑和事件结束后的传送候选。

## 心智模型

这是一个负责计算的 Model，但有一个重要桥接点：`CreateMapEventComponentForEncounter` 会选择组件工厂，或要求 `Campaign.Current.MapEventManager` 创建由管理器拥有的事件。它不会取代 [`StartBattleAction`](../../campaign-ext/StartBattleAction)；后者决定何时开始遭遇，并在组件/事件建立后派发 `OnStartBattle`。

默认实现会随战役模型列表安装，并通过 `Campaign.Current.Models.EncounterModel` 读取。模组若继承它，应只改动明确需要改变的一条规则，并继承其余实现。若直接实现 [`EncounterModel`](../EncounterModel)，则必须实现所有抽象成员，并保留相同的生命周期契约。

## 依赖

该模型由 [`GameModels`](../GameModels) 组装，并通过 `Campaign.Current.Models.EncounterModel` 查询。[`StartBattleAction`](../../campaign-ext/StartBattleAction) 将真实的 `PartyBase` 和 [`MapEvent.BattleTypes`](../BattleTypes) 传入模型；随后由所选组件或 [`MapEventManager`](../MapEventManager) 路径创建并注册活动的 [`MapEvent`](../MapEvent)。[`PlayerEncounter`](../PlayerEncounter) 在把战役遭遇状态接到菜单和 Mission 入口时读取这个事件。

## 默认阈值

v1.4.5 源码返回以下值：

| 成员 | 默认值 |
| --- | ---: |
| `NeededMaximumLandDistanceForEncounteringMobileParty` | `0.5f` |
| `NeededMaximumNavalDistanceForEncounteringMobileParty` | `0f` |
| `MaximumAllowedLandDistanceForEncounteringMobilePartyInArmy` | `1.5f` |
| `MaximumAllowedNavalDistanceForEncounteringMobilePartyInArmy` | `0f` |
| `NeededMaximumDistanceForEncounteringTown` | `0.05f` |
| `NeededMaximumDistanceForEncounteringBlockade` | `3f` |
| `NeededMaximumDistanceForEncounteringVillage` | `1f` |
| `GetEncounterJoiningRadius` | `3f` |
| `GetSettlementBeingNearFieldBattleRadius` | `3f` |
| `PlayerParleyDistance` | `MobileParty.MainParty.SeeingRange` |
| `MinimumNumberOfMenForAttackingVillageViaScene` | `1` |

这些是战役地图距离，不是 Mission 场景中的米数。海上默认值为零是源码事实，不能不加判断地复用陆地阈值。

## 组件路由

`CreateMapEventComponentForEncounter(attackerParty, defenderParty, battleType)` 的路由契约如下：

| `MapEvent.BattleTypes` | 默认路径 |
| --- | --- |
| `FieldBattle` | 调用 `FieldBattleEventComponent.CreateFieldBattleEvent`，返回组件。 |
| `Raid` | 调用 `RaidEventComponent.CreateRaidEvent`，返回组件；工厂同时处理突袭相关的定居点状态和奖励。 |
| `Hideout` | 调用 `HideoutEventComponent.CreateHideoutEvent(attackerParty, defenderParty, isSendTroops: false)`，返回组件。 |
| `BlockadeBattle` | 调用 `BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(attackerParty, defenderParty, isSallyOut: false)`，返回组件。 |
| `BlockadeSallyOutBattle` | 使用同一封锁工厂，但传入 `isSallyOut: true`，返回组件。 |
| `Siege` | 调用 `Campaign.Current.MapEventManager.StartSiegeMapEvent`；这一分支不从模型返回组件。 |
| `SallyOut` | 调用 `Campaign.Current.MapEventManager.StartSallyOutMapEvent`，由管理器创建。 |
| `SiegeOutside` | 调用 `Campaign.Current.MapEventManager.StartSiegeOutsideMapEvent`，由管理器创建。 |

这一区分很重要，因为返回组件的分支与管理器分支有不同的注册和初始化路径。事件创建后，应结合 [`MapEventManager`](../MapEventManager)、[`MapEvent`](../MapEvent) 和 [`MapEvent.BattleTypes`](../BattleTypes) 阅读后续状态。

## 规则行为

### 敌对、会面和首领

`IsEncounterExemptFromHostileActions` 会在适用的移动部队设置为避免敌对行为时返回 true；缺少必要输入时默认实现也按免除敌对处理。`CanMainHeroDoParleyWithParty` 要求主部队可用、没有活动玩家地图事件或当前定居点、主角不是俘虏、双方处于战争关系，并通过访问与距离规则。叛军会被明确拒绝；移动部队不能使用该实现发起会面；经过检查的城堡/城镇还会经 `MapDistanceModel` 和 `SettlementAccessModel` 判断。

当围城事件只有一个参与方时，`GetLeaderOfSiegeEvent` 返回该方的 `LeaderHero`。有多个参与方时，默认实现会综合派系归属、王国/军团领袖、氏族等级、军团关系、健康部队数量和军团规模排序。`GetLeaderOfMapEvent` 使用等价的地图事件 side 排序。`GetCharacterSergeantScore` 在排除伤兵后，结合氏族等级/领袖地位、军团领袖身份和部队规模计算分数。

`GetDefenderPartiesOfSettlement` 与 `GetNextDefenderPartyOfSettlement` 委托给定居点的 `Town`、`Village` 或 `Hideout`。其他定居点形态可能返回空防守方集合，所以调用者不能对每个 `Settlement` 都假定结果非空。

### 投降和贿赂

两个计算都会比较防守方和进攻方的当前实力。防守方实力近似为零时默认返回 `1f`；进攻方实力近似为零，或防守方不弱于进攻方时返回 `0f`。

投降的默认指数参数为：

| 防守方 | 阈值 | 缩放值 |
| --- | ---: | ---: |
| 村民 | `0.23f` | `-13f` |
| 商队 | `0.30f` | `-10f` |
| 陆地匪徒 | `0.10f` | `-15f` |
| 沙漠匪徒 | `0.005f` | `-15f` |
| 海上匪徒 | `0.20f` | `-15f` |

结果由实力比计算，并可能受到主角 `DefaultPerks.Roguery.Scarface` 加成，最大限制为 `1f`。

贿赂使用的默认参数是：村民阈值 `0.30f`、缩放 `-10f`；商队 `0.52f`、`-10f`；匪徒 `0.20f`、`-15f`。返回的 `ExplainedNumber` 上限为 `1f`，并通过 `PerkHelper` 加入同一 Roguery 特长的贡献。默认实现只认识这些防守方类别；传入不支持的类别会走 failed-assert 路径，不会得到有意义的自定义结果。

### 逃跑、加入、指挥和传送

`GetMapEventSideRunAwayChance` 对围城、突围、围城外战斗、突袭以及玩家自己的地图事件 side 返回零。其他事件只有在更新次数至少为 8、side 士气较低、最近四轮满足源码条件时才开始计算，基础值为 `0.2f`，然后按首领 Valor 特性降低。

`FindNonAttachedNpcPartiesWhoWillJoinPlayerEncounter` 会在主部队或当前战斗位置附近搜索。它排除主部队、已经在地图事件中的部队、木筏状态、围城、定居点和已附属部队，然后检查海陆兼容性、部队角色、`CanPartyJoinBattle`、派系关系和 `ShouldBeIgnored`，最后把不重复的结果追加到调用方的玩家方和敌方列表。围城和封锁上下文可能改变搜索中心与半径。

`CanPlayerForceBanditsToJoin` 直接检查 Roguery 的 `PartnersInCrime` 特长；没有特长时填写 `TextObject explanation`。`IsPartyUnderPlayerCommand` 识别主部队、主角拥有/领导的派系、以主部队为目标的护卫、主部队领导的军团以及定居点所有者路径。最后一条源码路径会读取 `party.MapEvent` 的定居点，因此调用时必须处于预期的活动地图事件上下文。

`GetPartiesToTeleportOnMapEventFinalize` 从失败方/对立方中选择活动、健康的移动部队，排除驻军和部分附属军团部队。这个结果由地图事件结算消费，并不是要求调用者立刻执行传送。

## 真实示例

通过战役门面读取当前实现：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

EncounterModel model = Campaign.Current.Models.EncounterModel;
float surrenderChance = model.GetSurrenderChance(defenderParty, attackerParty);
```

在战役启动阶段安装一条窄范围的派生规则：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public sealed class LargerEncounterJoinRadius : TaleWorlds.CampaignSystem.GameComponents.DefaultEncounterModel
{
    public override float GetEncounterJoiningRadius => 4f;
}

public void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    if (gameStarterObject is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddModel(new LargerEncounterJoinRadius());
    }
}
```

实际战斗变更仍应让 `StartBattleAction` 选择上下文，并调用本模型的组件路由：

```csharp
using TaleWorlds.CampaignSystem.Actions;

StartBattleAction.Apply(attackerParty, defenderParty);
```

不要把 `CreateMapEventComponentForEncounter` 当成普通模组代码中对 Action 的替代。Action 还会在适当时把部队接入已有事件，并派发 `OnStartBattle`。

## 风险与生命周期边界

- **管理器分支不返回组件：** `Siege`、`SallyOut` 和 `SiegeOutside` 通过 `Campaign.Current.MapEventManager` 启动。假定每种战斗类型都有非空返回值是错误的。
- **变更拥有者错误：** 模型负责计算和路由；`StartBattleAction`、地图事件组件和 `MapEventManager` 负责注册、事件派发与状态变更。绕过它们可能让部队脱离事件或漏派战役事件。
- **定居点防守方为空：** 对不支持的定居点形态，`GetDefenderPartiesOfSettlement` 可能返回 null。枚举前必须判断。
- **实力和部队类别：** 投降/贿赂会读取活动编组和部队分类。被销毁、为空或类别不支持的部队可能给出误导结果或触发断言；应在活动遭遇流程中使用真实 `MobileParty`。
- **地图事件时机：** 逃跑和传送查询要求活动 `MapEvent`、已填充的 side、更新次数以及有效的失败方/玩家方。不要跨事件结算缓存结果。
- **加入搜索副作用：** 方法会修改调用方列表，并可能在出现 ignored 部队时清空候选。把这些列表视为遭遇状态的一部分。
- **玩家指挥权的空路径：** 默认 `IsPartyUnderPlayerCommand` 的一条路径会读取 `party.MapEvent.MapEventSettlement`。只在预期的活动地图事件上下文中调用，或者在自己的派生实现中加入防护。
- **启动顺序：** 必须在 `GameModels` 构造前通过 `CampaignGameStarter` 添加模型。模型门面组装后再替换，不会追溯更新 `Campaign.Current.Models.EncounterModel`。
- **存档边界：** 模型实例是启动服务，地图事件和玩家遭遇才是存档拥有的运行时状态。不要序列化临时组件，也不要在 `MapEventManager` 结束并移除事件后继续持有其部队引用。

## 版本说明

本文的阈值、部队筛选、特长常量、事件路由和管理器方法名均来自 v1.4.5 源码。跨版本发布自定义模型前，必须重新核对目标版本。

## 导航

- **父级：** [Campaign API](./)
- **同级：** [EncounterModel](../EncounterModel) · [GameModels](../GameModels) · [MapEventManager](../MapEventManager)
- **相关：** [MapEvent](../MapEvent) · [MapEvent.BattleTypes](../BattleTypes) · [PlayerEncounter](../PlayerEncounter) · [CampaignGameStarter](../CampaignGameStarter) · [StartBattleAction](../../campaign-ext/StartBattleAction)
- **组件页面：** [FieldBattleEventComponent](../FieldBattleEventComponent) · [RaidEventComponent](../RaidEventComponent)
- **英文页面：** [English page](../../../../en/api/campaign/DefaultEncounterModel)
