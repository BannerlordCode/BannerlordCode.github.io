---
title: "BlockadeBattleMapEvent"
description: "封锁战与封锁出击使用的 MapEvent 组件，负责海军力量检查、解除封锁和围城清理。"
---
# BlockadeBattleMapEvent

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class BlockadeBattleMapEvent : MapEventComponent`  
**基类：** [MapEventComponent](../MapEventComponent)  
**源码文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/BlockadeBattleMapEvent.cs`

## 一句话职责

它为海上封锁或封锁出击 `MapEvent` 提供海战规则，在需要时打开玩家封锁菜单，解除弱封锁，并在防守方失败后结束关联围城。

## 心智模型

`BlockadeBattleMapEvent` 是挂在围城相关 `MapEvent` 上的海军 Encounter 组件。`PlayerEncounter` 与 `DefaultEncounterModel` 根据 `isSallyOut` 调用 `CreateBlockadeBattleMapEvent`。工厂把事件初始化为 `BlockadeBattle` 或 `BlockadeSallyOutBattle`，通过 `Campaign.Current.MapEventManager` 登记后返回组件。

这个组件不只是事件标签。初始化时，如果防守方是主队伍就激活 `player_blockade_got_attacked`；否则比较攻击方海军力量和围城营地力量。攻击方超过后者的 1.2 倍时，组件解除封锁、结束 `MapEvent`，并让符合条件的非玩家海军队伍向被围定居点港口移动。防守方失败时，`OnFinalize` 还会结束关联 `SiegeEvent`。

## 何时使用，何时不要使用

- 读取 `PlayerEncounter.Battle?.Component` 和 `MapEvent.EventType`，识别活动封锁或封锁出击。
- 让 `DefaultEncounterModel`、`PlayerEncounter` 或对应的管理器 Encounter 流程调用工厂；不要把它用于普通野战。
- 源码流程需要管理器入口时使用 `Campaign.Current.MapEventManager.StartBlockadeBattleMapEvent`，以保持事件登记契约。
- 不要手动调用 `CheckLiftingBlockade` 或 `OnFinalize`；它们依赖已初始化的围城参战方、事件状态和引擎结束顺序。
- 不要假定 `SimulationContext` 随地形改变；本组件始终返回 `SeaBattle`。

## 依赖关系

```text
PlayerEncounter / DefaultEncounterModel
  -> BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent
  -> MapEvent.Initialize(BlockadeBattle 或 BlockadeSallyOutBattle)
  -> 攻击方海军力量 vs BesiegerCamp
  -> 解除封锁、港口移动或围城结束
```

- 事件宿主：[MapEvent](../MapEvent) 持有参战方、事件状态和结束流程。
- Encounter 入口：[PlayerEncounter](../PlayerEncounter)、[DefaultEncounterModel](../DefaultEncounterModel) 与 [MapEventManager](../MapEventManager) 选择封锁流程。
- 围城输入：[SiegeEvent](../SiegeEvent) 与 [BesiegerCamp](../BesiegerCamp) 提供封锁状态、围城队伍和被围定居点。
- 表现流程：`GameMenu.ActivateGameMenu("player_blockade_got_attacked")` 将主队伍被攻击转入封锁菜单。
- 移动：封锁解除后只对符合条件的非玩家海军攻击方调用 `MobileParty.SetMoveGoToSettlement`。

## 状态与操作

| 成员 | 含义与时机 |
|---|---|
| `MapEvent` | 继承的事件引用，用于事件类型、参战方、状态和围城访问。 |
| `SimulationContext` | 始终返回 `SeaBattle`。 |
| `CreateBlockadeBattleMapEvent` | 根据 `isSallyOut` 创建并登记封锁或封锁出击事件。 |
| `OnInitialize` | 主队伍防守时打开玩家菜单，否则执行首次解除封锁检查。 |
| `OnPartyAdded` | 初始化结束且防守方不是主队伍时，在新队伍加入后再次检查封锁力量。 |
| `CheckLiftingBlockade` | 比较攻击方和围城方海军力量；满足条件时解除、结束事件并重定向海军队伍。 |
| `OnFinalize` | 防守方失败时结束关联的 `SiegeEvent`。 |

## 真实示例

Encounter 诊断可以读取活动组件而不触发封锁流程：

```csharp
using TaleWorlds.CampaignSystem.Encounters;
using TaleWorlds.CampaignSystem.MapEvents;

MapEvent battle = PlayerEncounter.Battle;
if (battle?.Component is BlockadeBattleMapEvent blockade)
{
    bool isSallyOut = battle.EventType == MapEvent.BattleTypes.BlockadeSallyOutBattle;
    MapEvent.PowerCalculationContext context = blockade.SimulationContext;
}
```

源码通过 Encounter model 或 PlayerEncounter 启动此组件。mod 若确实需要启动封锁，应沿用同一 Campaign 入口，保持 `SiegeEvent`、参战方、港口导航和事件管理器一致。

## 风险与存档边界

- 力量检查假定防守方领袖拥有活动 `SiegeEvent` 和 `BesiegerCamp`；在非封锁事件上使用本组件可能解引用无效围城状态。
- `OnInitialize` 可能打开游戏菜单。从无关 tick 或错误 UI 阶段调用工厂会意外重新进入 Encounter 流程。
- 攻击方力量超过 `besiegerPower * 1.2f` 时，组件会结束事件并重定向队伍。观察者不能继续把旧事件当作活动状态。
- 后续队伍加入会触发 `OnPartyAdded`，可能使封锁在初始比较后解除。不要缓存第一次比较作为永久结果。
- `OnFinalize` 只在防守方失败时调用 `SiegeEvent.FinalizeSiegeEvent`。绕过事件结束会让围城和封锁状态在存档中不一致。
- 初始化标志是运行时协调状态。存档/读档和事件登记必须走引擎流程，不要复制组件或私有标志。

## 版本说明

本页依据 v1.4.5 `BlockadeBattleMapEvent`、`PlayerEncounter.StartBattleInternal`、`DefaultEncounterModel.CreateMapEventComponentForEncounter`、`MapEventManager.StartBlockadeBattleMapEvent` 和 `SiegeEvent.DeactivateBlockade` 编写。1.2 倍海军力量阈值和菜单 ID 可能随版本变化。

## 导航

- 父级：[Campaign API](../)
- 同级：[MapEventComponent](../MapEventComponent) · [ForceSuppliesEventComponent](../ForceSuppliesEventComponent) · [ForceVolunteersEventComponent](../ForceVolunteersEventComponent) · [SiegeAmbushEventComponent](../SiegeAmbushEventComponent)
- 相关：[MapEvent](../MapEvent) · [PlayerEncounter](../PlayerEncounter) · [MapEventManager](../MapEventManager) · [SiegeEvent](../SiegeEvent) · [BesiegerCamp](../BesiegerCamp)
- English: [BlockadeBattleMapEvent](../../../../en/api/campaign/BlockadeBattleMapEvent)
