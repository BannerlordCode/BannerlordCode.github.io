---
title: "PlayerSiege"
description: "面向玩家的围城流程门面：准备菜单、地图状态激活、攻城 Mission 与结束后的菜单分支。"
---
# PlayerSiege

**命名空间：** `TaleWorlds.CampaignSystem.Siege`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class PlayerSiege`  
**基类：** 无  
**源码：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/PlayerSiege.cs`

## 职责

`PlayerSiege` 将玩家队伍当前关联的围城事件转换为 Campaign UI 所需的准备菜单、地图状态、战役事件和攻城 Mission 流程。它读取主队或当前据点的实时事件关系，并把结束结果转交给菜单与地图状态生命周期，而不是另存一份可脱离据点的围城数据。

## 心智模型

这是静态流程门面，不保存一份独立的 `PlayerSiegeEvent`。读取 `PlayerSiegeEvent` 时先检查 `MobileParty.MainParty.SiegeEvent`；为空时再回退到 `MobileParty.MainParty.CurrentSettlement.SiegeEvent`。真正的事件由 [`SiegeEventManager`](../SiegeEventManager) 创建，通常必须先于 `StartPlayerSiege`。

正常顺序是：创建事件，调用 `StartPlayerSiege`，用 `StartSiegePreparation` 打开准备菜单，确认据点处于有效墙上阶段后才调用 `StartSiegeMission`。结束通常由 [`SiegeEvent`](../SiegeEvent) 发起，它先调用 `OnSiegeEventFinalized`，再调用 `FinalizePlayerSiege`。不要把这些方法当成可从 Mission View 随意调用的“开始/停止围城开关”。

## 流程与依赖

```text
EncounterGameMenuBehavior
  -> Campaign.Current.SiegeEventManager.StartSiegeEvent(settlement, MobileParty.MainParty)
  -> PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker)
  -> PlayerSiege.StartSiegePreparation()
策略菜单/遭遇后续
  -> PlayerSiege.StartSiegeMission()
SiegeEvent.FinalizeSiegeEvent()
  -> PlayerSiege.OnSiegeEventFinalized(besiegerPartyDefeated)
  -> PlayerSiege.FinalizePlayerSiege()
```

`StartPlayerSiege` 在主队不是军团领队时让主队停下；非模拟流程会激活 `MapState`，并派发 `OnPlayerSiegeStarted`。`FinalizePlayerSiege` 标记据点视觉状态为脏、让主队停下，并关闭地图状态钩子。真正清理据点和事件的是 `SiegeEvent.FinalizeSiegeEvent`，不是这里清空某个静态字段。

Mission 交接依赖 [`CampaignMission`](../CampaignMission)、[`Settlement.SiegeState`](../SiegeState)、[`PlayerEncounter`](../PlayerEncounter) 和 [`MapState`](../MapState)。菜单和战役回调可通过 [`CampaignEvents`](../CampaignEvents) 追踪。

## 状态属性

### `PlayerSiegeEvent`

`public static SiegeEvent PlayerSiegeEvent { get; }`

每次读取都从主队或当前据点解析事件。结束阶段它可能变成 `null`；使用事件前必须重新检查。

### `BesiegedSettlement`

`public static Settlement BesiegedSettlement { get; }`

返回 `PlayerSiegeEvent?.BesiegedSettlement`，即决定墙体阶段、攻城器械和据点队伍视觉状态的据点。

### `PlayerSide`

`public static BattleSideEnum PlayerSide { get; }`

当 `MobileParty.MainParty.BesiegerCamp` 非空时返回 `Attacker`，否则返回 `Defender`。它反映实时队伍关系，不要在事件建立前缓存它。

### `IsRebellion`

`public static bool IsRebellion { get; }`

有据点时转发 `BesiegedSettlement.IsUnderRebellionAttack()`。它只影响结束时菜单分支，不是开始叛乱的命令。

## 方法与时机

### `StartPlayerSiege`

`public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)`

准备主队，可按 `isSimulation` 激活地图状态，并派发 `OnPlayerSiegeStarted`。当前 v1.4.5 中内部的 `SetPlayerSiegeEvent` 没有创建事件；调用者必须先通过 `SiegeEventManager.StartSiegeEvent` 建立事件。`playerSide` 和 `settlement` 仍是公开契约的一部分，但后续流程从主队和据点的实时关系读取状态。

### `StartSiegePreparation`

`public static void StartSiegePreparation()`

如果已有菜单上下文就退出，然后激活 `menu_siege_strategies`。它必须在有效玩家围城事件存在时调用；它只是菜单转换，不会创建事件。

### `StartSiegeMission`

`public static void StartSiegeMission(Settlement settlement = null)`

当据点为 `Settlement.SiegeState.OnTheWalls` 时，从双方 `ISiegeEventSide` 收集已准备/已激活的器械，取得城墙等级和中心场景，并调用 `CampaignMission.OpenSiegeMissionWithDeployment`。无效状态会触发源码断言；`InTheLordsHall` 不是墙上部署路径。突围/伏击 Mission 应使用 [`PlayerEncounter.StartSiegeAmbushMission`](../PlayerEncounter)。

### `OnSiegeEventFinalized`

`public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)`

根据结束结果选择后续菜单：叛乱直接离开菜单；守方玩家进入 `siege_attacker_defeated` 或 `siege_attacker_left`；进攻方玩家若属于其他军团，则可能离开据点并回到 `army_wait`。布尔值必须来自事件结束流程，不能由 UI 任意猜测。

### `FinalizePlayerSiege`

`public static void FinalizePlayerSiege()`

若仍能解析到事件，就标记被围据点队伍的视觉状态为脏、让主队停下，并调用 `MapState.OnPlayerSiegeDeactivated`。它不会自行清除 `Settlement.SiegeEvent`；那是 `SiegeEvent.FinalizeSiegeEvent` 与 `Settlement.FinalizeSiegeEvent` 的职责。

## 真实玩家入口示例

下面的顺序与城镇菜单的围城 consequence 一致：

```csharp
Settlement settlement = Settlement.CurrentSettlement;

if (settlement != null && settlement.IsFortification && !settlement.IsUnderSiege)
{
    Campaign.Current.SiegeEventManager.StartSiegeEvent(settlement, MobileParty.MainParty);
    PlayerSiege.StartPlayerSiege(BattleSideEnum.Attacker);
    PlayerSiege.StartSiegePreparation();
}
```

只有准备流程留下了活动事件、且据点仍处于墙上阶段时才启动攻城 Mission：

```csharp
Settlement settlement = PlayerSiege.BesiegedSettlement;

if (PlayerSiege.PlayerSiegeEvent != null &&
    settlement != null &&
    settlement.CurrentSiegeState == Settlement.SiegeState.OnTheWalls)
{
    PlayerSiege.StartSiegeMission();
}
```

## 崩溃边界

- `StartPlayerSiege` 不会补建缺失事件。在 `SiegeEventManager.StartSiegeEvent` 之前调用，可能激活没有事件可消费的菜单和地图状态。
- `PlayerSiegeEvent` 可能从主队或当前据点解析。队伍离开据点会改变结果；不要跨越多个菜单阶段缓存它。
- 不要对 `InTheLordsHall`、`Invalid`、已结束事件或空据点调用 `StartSiegeMission`。墙上部署输入和场景只对 `OnTheWalls` 路径有效。
- 不要用 `FinalizePlayerSiege` 绕过仍在运行的 MapEvent 或 Mission。事件结束顺序必须完成据点引用清理和战役回调派发。
- `StartPlayerSiege(BattleSideEnum playerSide, isSimulation: true)` 会跳过地图状态激活，但仍派发玩家围城战役事件；模拟代码不能假定随后存在可见的 `MapState`。

## 导航

- **父级：** [Campaign API 目录](../)
- **同级：** [`SiegeEventManager`](../SiegeEventManager)、[`SiegeEvent`](../SiegeEvent)、[`SiegeState`](../SiegeState)、[`CampaignMission`](../CampaignMission)
- **相关：** [`Settlement`](../Settlement)、[`PlayerEncounter`](../PlayerEncounter)、[`MapState`](../MapState)、[`CampaignEvents`](../CampaignEvents)
