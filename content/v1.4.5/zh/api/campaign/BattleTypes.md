---
title: "MapEvent.BattleTypes：战斗流程类型"
description: "v1.4.5 中由 MapEvent 嵌套声明的枚举，供遭遇模型、据点参战方选择和围城逻辑识别当前 Campaign 战斗流程。"
---
# MapEvent.BattleTypes

**命名空间：** `TaleWorlds.CampaignSystem.MapEvents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public enum MapEvent.BattleTypes`（嵌套在 `MapEvent` 内）  
**基类：** `System.Enum`（底层类型为 `int`）  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.MapEvents/MapEvent.cs`

## 一句话职责

这个嵌套枚举给 [MapEvent](../MapEvent) 标记当前 Campaign 战斗流程，用来选择遭遇组件、据点/围城参战方规则，并区分劫掠、攻城、出城战、藏身处战斗和封锁战。它**不是**独立的 `BattleTypes` 类，也不是命名空间级枚举；mod 代码应写成 `MapEvent.BattleTypes`。

## 心智模型

`MapEvent.BattleTypes` 是某个 `MapEvent` 持有的分类标签，不是工厂，也不是 Mission 场景编号。`MapEvent._mapEventType` 是可存档字段，`MapEvent.EventType` 暴露当前值。[StartBattleAction](../../campaign-ext/StartBattleAction) 根据进攻方、防守方、据点、当前围城和海军上下文选择它；创建新事件时再把类型传给 `EncounterModel.CreateMapEventComponentForEncounter`。组件和 `MapEvent.Initialize(...)` 准备完事件状态后，事件才会注册进 `Campaign.Current.MapEventManager`。

这个值会受到当前事件上下文影响。在加入参战方时，`MapEvent` 可能把围城攻城改成 `SiegeOutside`，也可能在驻军加入时把已有围城/封锁事件改成 `SallyOut` 或 `BlockadeSallyOutBattle`。因此应在使用时读取 `mapEvent.EventType`，不要只缓存创建入口当时的类型。

`SiegeEvent` 也使用同一个嵌套类型，从攻城营和被围据点中按类型选择参战方。它的 `GetCurrentBattleType()` 会在攻城营领袖有 `MapEvent` 时读取该事件的 `EventType`，否则回退到 `MapEvent.BattleTypes.Siege`。这说明围城对象与围城地图战斗相关，但不是同一个 Campaign 对象。

## 什么时候用，什么时候不要用

- **用于按当前 Campaign 状态分支：** 读取 `MapEvent.EventType`，在发放奖励、更新 UI、选择部队或输出诊断前处理对应流程。
- **使用现有创建 API：** `StartBattleAction.Apply(...)` 及其专用包装会选择类型并创建/加入正确事件；`MapEventManager.StartSiegeMapEvent(...)` 等方法是指定地图事件的直接管理器入口。
- **不要把它实例化成独立类型：** `BattleTypes` 没有自己的对象生命周期。应写 `MapEvent.BattleTypes.Raid`，而不是 `new BattleTypes()` 或虚构的 `TaleWorlds.CampaignSystem.MapEvents.BattleTypes` 类。
- **不要把它当作 Mission 类型：** `Siege`、`SallyOut` 和 `BlockadeBattle` 是 Campaign 事件分类；Mission 投影由玩家遭遇和 Campaign mission 代码在后续边界处理，枚举本身不会创建 Mission。
- **不要写 `MapEvent.EventType`：** 它只是对私有字段的 getter。强行改变类型会跳过组件初始化、参战方选择、据点转换和围城 bookkeeping。
- **不要假定 `None` 就是普通空战斗：** 它是 `MapEvent.Initialize` 的默认值，围城伏击组件路径也使用这个默认值；看到 `None` 时还要检查组件和事件上下文。

## 依赖关系

```text
StartBattleAction / EncounterModel
  -> 选择 MapEvent.BattleTypes
  -> MapEvent.Initialize(...) -> MapEvent.EventType
MapEvent.BattleTypes
  -> MapEventComponent / 模拟规则 / 据点参战方选择
  -> SiegeEvent.GetInvolvedPartiesForEventType(...)
MapEvent.FinalizeEventAux()
  -> SiegeEvent.OnBeforeSiegeEventEnd(..., battleType)
  -> CampaignEventDispatcher.SiegeCompleted(..., battleType)
```

- **创建与选择：** [StartBattleAction](../../campaign-ext/StartBattleAction)、[EncounterModel](../EncounterModel)、[MapEventManager](../MapEventManager) 以及 MapEvents 命名空间下的事件组件。
- **持有与读取：** [MapEvent](../MapEvent) 暴露 `EventType`；[MapEventSide](../MapEventSide)、[Settlement](../Settlement) 和遭遇模型使用它选择参战方与模拟规则。
- **围城边界：** [SiegeEvent](../SiegeEvent)、`BesiegerCamp` 和被围 [Settlement](../Settlement) 用它合并参战方，并解释围城相关战斗的胜负方向。
- **玩家边界：** [CampaignMission](../CampaignMission) 和 [Mission](../../mission/Mission) 通过遭遇消费 Campaign 事件；枚举本身不会创建 Mission。
- **存档：** `MapEvent._mapEventType` 使用 `[SaveableField(110)]` 标记；[SaveManager](../../save-system/SaveManager) 将其作为 `MapEvent` 对象图的一部分恢复。

## 值与调用时机

源码没有显式指定数字，因此 v1.4.5 的值按声明顺序排列：

| 值 | 数字 | 含义与源码调用时机 |
|---|---:|---|
| `None` | `0` | `MapEvent.Initialize` 未提供具体类型时使用的默认/哨兵值。`SiegeAmbushEventComponent.CreateSiegeAmbushEvent` 使用这个默认值；`StartBattleAction.Apply` 也从它开始，再依据上下文解析具体类型。 |
| `FieldBattle` | `1` | 开阔地双方战斗，也包括村庄遭遇或没有据点关联时的回退类型。`ApplyStartBattle` 和 `FieldBattleEventComponent` 使用它。 |
| `Raid` | `2` | 对据点的劫掠。`ApplyStartRaid` 与 `RaidEventComponent.CreateRaidEvent` 使用它；劫掠组件负责村庄伤害和专用结算。 |
| `IsForcingVolunteers` | `3` | 强征志愿兵的村庄遭遇。匹配的组件在初始化时把村庄切换到强征志愿兵状态，结算时再恢复正常。 |
| `IsForcingSupplies` | `4` | 强征物资的村庄遭遇。匹配的组件负责强征物资状态和完成回调。 |
| `Siege` | `5` | 对 fortified settlement 的城墙攻坚。`MapEventManager.StartSiegeMapEvent` 和 `StartBattleAction.ApplyStartAssaultAgainstWalls` 使用它；`SiegeEvent` 在攻城状态收尾时把它解释为攻坚。 |
| `Hideout` | `6` | 藏身处战斗。`HideoutEventComponent.CreateHideoutEvent` 使用它，并提供藏身处专用的结算状态。 |
| `SallyOut` | `7` | 据点驻军/防守方出城迎战围攻方。`ApplyStartSallyOut` 和 `MapEventManager.StartSallyOutMapEvent` 使用它。 |
| `SiegeOutside` | `8` | 围绕被围据点、但防守方不是据点 Party 的外部战斗。`StartBattleAction.Apply` 和 `StartSiegeOutsideMapEvent` 使用它。 |
| `BlockadeBattle` | `9` | 对海上封锁的海战。进攻方在海上且目标是港口时，`StartBattleAction.Apply` 选择它；`BlockadeBattleMapEvent.CreateBlockadeBattleMapEvent(..., isSallyOut: false)` 创建对应组件路径。 |
| `BlockadeSallyOutBattle` | `10` | 针对海上封锁的出城/出港战。同一封锁组件工厂以 `isSallyOut: true` 使用它，`StartBattleAction.Apply` 也会在对应驻军/港口上下文中选择它。 |

### 相关的 `MapEvent` 成员

`MapEvent.EventType` 是公开的当前类型读取入口。`IsFieldBattle`、`IsRaid`、`IsForcingVolunteers`、`IsForcingSupplies`、`IsSiegeAssault`、`IsHideoutBattle`、`IsSallyOut`、`IsSiegeOutside`、`IsBlockade` 和 `IsBlockadeSallyOut` 这些布尔属性，分别把私有字段与对应嵌套枚举值比较。随后 `MapEvent.SimulationContext` 和事件组件依据流程选择模拟规则；这些属性都不会改变事件类型。

## 真实 API 示例

### 按玩家当前地图事件分支

下面使用真实的 Campaign 获取路径，并明确写出嵌套类型限定。`default` 让未来新增枚举值时不会静默落入错误流程。

```csharp
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
if (mapEvent != null && !mapEvent.IsFinalized)
{
    MapEvent.BattleTypes battleType = mapEvent.EventType;
    switch (battleType)
    {
        case MapEvent.BattleTypes.FieldBattle:
        case MapEvent.BattleTypes.Siege:
        case MapEvent.BattleTypes.SiegeOutside:
            Debug.Print($"陆地战斗流程：{battleType}");
            break;
        case MapEvent.BattleTypes.Raid:
            Debug.Print("劫掠流程");
            break;
        case MapEvent.BattleTypes.BlockadeBattle:
        case MapEvent.BattleTypes.BlockadeSallyOutBattle:
            Debug.Print($"封锁流程：{battleType}");
            break;
        default:
            Debug.Print($"其他地图事件流程：{battleType}");
            break;
    }
}
```

### 通过真实 Action 入口开始攻城

`StartBattleAction.ApplyStartAssaultAgainstWalls` 是源码中对应 `Siege` 值的包装入口。它接收真实的 `MobileParty` 和当前 `BesiegedSettlement`，内部把 `attackerParty.Party`、`settlement.Party` 与 `MapEvent.BattleTypes.Siege` 交给遭遇模型路径。

```csharp
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;

MobileParty attackerParty = MobileParty.MainParty;
Settlement settlement = attackerParty.BesiegedSettlement;
if (settlement != null && attackerParty.IsActive && settlement.Party.IsActive)
{
    StartBattleAction.ApplyStartAssaultAgainstWalls(attackerParty, settlement);
}
```

### 从围城对象查询当前类型

`SiegeEvent` 与 `MapEvent` 是两个不同对象，但它的公开方法会消费这个嵌套枚举。应从当前据点重新获取围城对象，再查询当前类型和参战方。

```csharp
using System.Collections.Generic;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Siege;
using TaleWorlds.CampaignSystem.Settlements;

Settlement settlement = MobileParty.MainParty.BesiegedSettlement;
SiegeEvent siegeEvent = settlement?.SiegeEvent;
if (siegeEvent != null && !siegeEvent.ReadyToBeRemoved)
{
    MapEvent.BattleTypes battleType = siegeEvent.GetCurrentBattleType();
    List<PartyBase> parties = siegeEvent.GetInvolvedPartiesForEventType(battleType);
    int involvedPartyCount = parties.Count;
}
```

## 风险、存档与版本边界

- **嵌套类型错误：** `BattleTypes` 声明在 `MapEvent` 内。单独写 `BattleTypes` 会指向错误类型或无法编译；所有引用都应使用 `MapEvent.BattleTypes`。
- **分类可能变化：** 加入参战方时，围城外部、出城和封锁出城流程可能改变私有类型。在分支前即时读取 `EventType`，不要跨越加入方或地图事件转换缓存它。
- **创建层级错误：** 单独一个枚举值不会创建双方、组件、位置、视觉、事件通知或存档注册。应使用符合流程的 `StartBattleAction`、遭遇模型、事件组件工厂或 `MapEventManager` 入口。
- **围城为空：** 没有围城或围城清理后，`Settlement.SiegeEvent` 为 null。调用 `GetCurrentBattleType` 或 `GetInvolvedPartiesForEventType` 前必须重新获取并判空。
- **封锁与封锁出城方向相反：** `BlockadeBattle` 与 `BlockadeSallyOutBattle` 共用组件但参战方向相反。传错布尔值或混用两者会选错参战方和胜负处理。
- **`None` 不是完成状态：** `None` 可能是默认/特殊初始化路径。不要只凭这个值发放结算结果，也不要直接把它当作普通野战。
- **结算与存档：** `MapEventManager` 会在 `WaitingRemoval` 后移除 finalized 事件，而 `MapEvent` 与 `SiegeEvent` 属于 Campaign 存档图。不要保存运行时对象引用，也不要把 `BattleTypes` 的整数值当作跨版本存档契约。

## 版本说明

本页依据 v1.4.5 的反编译 `MapEvent.cs`、`StartBattleAction.cs`、`MapEventManager.cs`、相关事件组件和 `SiegeEvent.cs`。嵌套类型及其值是本版本的源码事实；用于其他 Bannerlord 版本前，应重新核对创建和结算调用点。

## 导航

- **Parent 父级：** [Campaign API](../)
- **Sibling 同级：** [MapEvent](../MapEvent) · [MapEventState](../MapEventState) · [MapEventManager](../MapEventManager) · [SiegeEvent](../SiegeEvent)
- **Related 相关：** [StartBattleAction](../../campaign-ext/StartBattleAction) · [EncounterModel](../EncounterModel) · [CampaignEvents](../CampaignEvents) · [CampaignMission](../CampaignMission) · [Mission](../../mission/Mission) · [SaveManager](../../save-system/SaveManager)
- **双语回链：** [English page](../../../en/api/campaign/BattleTypes)

