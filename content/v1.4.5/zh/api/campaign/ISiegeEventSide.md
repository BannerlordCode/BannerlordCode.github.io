---
title: "ISiegeEventSide"
description: "统一攻方与守方的队伍、攻城器械、策略、炮击和结束生命周期契约。"
---
# ISiegeEventSide

**命名空间：** `TaleWorlds.CampaignSystem.Siege`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public interface ISiegeEventSide`  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/ISiegeEventSide.cs`

## 职责

`ISiegeEventSide` 为 `SiegeEvent` 的进攻方和防守方提供统一契约；游戏内两个实现不同：[`BesiegerCamp`](../BesiegerCamp) 表示进攻方，[`Settlement`](../Settlement) 表示防守方。

## 心智模型

通过 `SiegeEvent.GetSiegeEventSide(BattleSideEnum)` 获取一侧。这个接口是活动事件一侧的实时视图，不是脱离事件的快照，也不是用来创建新一侧的工厂。属性暴露事件、角色、当前 [`SiegeStrategy`](../SiegeStrategy)、击杀数、器械和飞行物；方法负责按事件类型枚举队伍、更新计数、解析炮击目标和结束一侧。

统一契约让策略和 Mission 代码可以同时处理两种角色，但不代表攻守语义完全相同：`BesiegerCamp` 会在封锁战中按海军能力过滤队伍；`Settlement` 则通过 `EncounterModel` 获取防守队伍；两者都按传入的 `MapEvent.BattleTypes` 决定参与者。

## 生命周期与依赖

```text
SiegeEvent
  -> GetSiegeEventSide(Attacker | Defender)
  -> ISiegeEventSide.InitializeSiegeEventSide()
  -> 策略/建造/炮击 Tick
  -> ISiegeEventSide.FinalizeSiegeEvent()
```

`SiegeEvent` 会把一侧传给 `AdvanceStrategy`、`ConstructionTick`、`BombardTick` 和攻城器械辅助方法。`SiegeStrategyActionModel` 读取 `SiegeStrategy`；`MapEvent` 按围城、突围和封锁战类型消费 `PartyBase`；[`PlayerSiege`](../PlayerSiege) 把双方已准备器械传给 [`CampaignMission`](../CampaignMission)。

## 按职责说明成员

### 身份与状态

- `SiegeEvent SiegeEvent { get; }` 回指所属事件。
- `SiegeStrategy SiegeStrategy { get; }` 是 Action Model 使用的当前策略记录。
- `BattleSideEnum BattleSide { get; }` 标识进攻方或防守方。
- `int NumberOfTroopsKilledOnSide { get; }` 是该侧的事件击杀计数。
- `SiegeEvent.SiegeEnginesContainer SiegeEngines { get; }` 持有建造、预备和部署槽位。
- `MBReadOnlyList<SiegeEvent.SiegeEngineMissile> SiegeEngineMissiles { get; }` 以只读视图暴露活动飞行物记录。

### 队伍枚举

`GetInvolvedPartiesForEventType`、`GetNextInvolvedPartyForEventType` 和 `HasInvolvedPartyForEventType` 接收 `MapEvent.BattleTypes`，默认值为 `Siege`。普通围城使用默认值；匹配封锁战或其他地图事件时要传入实际类型。带 `ref int partyIndex` 的方法是迭代协议：应保留并更新索引，不要假设队伍位置永久稳定。

### 事件更新

- `OnTroopsKilledOnSide(int killCount)` 更新该侧击杀计数。
- `AddSiegeEngineMissile` 与 `RemoveDeprecatedMissiles` 管理炮击 Tick 中的飞行物记录。
- `SetSiegeStrategy(SiegeStrategy strategy)` 修改活动一侧的策略引用，不会立即执行动作。
- `InitializeSiegeEventSide()` 分配一侧运行时状态和默认策略，属于事件创建/读档修复阶段。
- `GetAttackTarget(ISiegeEventSide siegeEventSide, SiegeEngineType siegeEngine, int siegeEngineSlot, out SiegeBombardTargets targetType, out int targetIndex)` 解析炮击目标，并返回目标类型与槽位索引。
- `FinalizeSiegeEvent()` 在父事件结束时释放或关闭一侧的围城状态。

## 真实检查示例

下面读取玩家当前角色对应的一侧，并按真实的围城事件类型枚举队伍：

```csharp
SiegeEvent siegeEvent = PlayerSiege.PlayerSiegeEvent;

if (siegeEvent != null)
{
    ISiegeEventSide side = siegeEvent.GetSiegeEventSide(PlayerSiege.PlayerSide);

    foreach (PartyBase party in side.GetInvolvedPartiesForEventType(MapEvent.BattleTypes.Siege))
    {
        if (party.MobileParty != null)
        {
            MobileParty mobileParty = party.MobileParty;
            string partyId = mobileParty.StringId;
        }
    }
}
```

选择内置策略时，使用角色对应的已注册对象和同一活动一侧：

```csharp
SiegeEvent siegeEvent = PlayerSiege.PlayerSiegeEvent;

if (siegeEvent != null && PlayerSiege.PlayerSide == BattleSideEnum.Attacker)
{
    siegeEvent.GetSiegeEventSide(BattleSideEnum.Attacker)
        .SetSiegeStrategy(DefaultSiegeStrategies.BreachWalls);
}
```

## 崩溃与存档边界

- 普通 Mod 流程不要自行实现或构造一侧。事件的 `BesiegerCamp` 和 `Settlement` 持有可存档状态、事件回链和角色专属队伍规则。
- 不要传错 `MapEvent.BattleTypes`。封锁战会有意排除非海军围城者；用默认 `Siege` 列表代替 `BlockadeBattle` 会得到与地图事件不一致的队伍集合。
- 不要从 Mission 回调调用 `InitializeSiegeEventSide` 或 `FinalizeSiegeEvent`。它们分配和释放父事件所有的状态，必须由 `SiegeEvent` 生命周期成对驱动。
- `SiegeEngineMissiles` 与 `SiegeEngines` 是活动事件状态。事件正在解析炮击或攻城 Mission 正在读取部署数据时，不要修改其内部集合。
- 一侧可能跨越菜单阶段存在，但不能脱离父事件生命周期。读档修复或结束后重新检查 `side.SiegeEvent`、`settlement.SiegeEvent` 与 `PlayerSiege.PlayerSiegeEvent`。

## 导航

- **父级：** [Campaign API 目录](../)
- **同级：** [`SiegeEvent`](../SiegeEvent)、[`SiegeEventManager`](../SiegeEventManager)、[`SiegeStrategy`](../SiegeStrategy)、[`SiegeState`](../SiegeState)
- **实现：** [`BesiegerCamp`](../BesiegerCamp)、[`Settlement`](../Settlement)
- **相关：** [`PlayerSiege`](../PlayerSiege)、[`CampaignMission`](../CampaignMission)、[`SiegeStrategyActionModel`](../SiegeStrategyActionModel)
