---
title: PlayerSiege
description: PlayerSiege - 玩家参与的围攻战静态工具类
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerSiege`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerSiege
**命名空间:** TaleWorlds.CampaignSystem.Siege
**模块:** TaleWorlds.CampaignSystem
**类型:** static class

## 概述
`PlayerSiege` 是一组静态属性与方法，封装"玩家参与的围攻战"在战役层的入口与收尾逻辑。它从 `MobileParty.MainParty.SiegeEvent` 或当前定居点的 `SiegeEvent` 推导出 `PlayerSiegeEvent`，并提供 `BesiegedSettlement`、`PlayerSide`（攻/守）、`IsRebellion` 等便捷查询。

核心方法包括：`StartSiegePreparation` 切换到围攻策略菜单；`StartPlayerSiege` 激活玩家围攻并通知 `MapState`；`StartSiegeMission` 根据 `SiegeState` 打开对应的攻城战 Mission（含城墙战部署）；`FinalizePlayerSiege` 关闭玩家围攻并通知 `MapState`；`OnSiegeEventFinalized` 处理围攻结束后的菜单路由（叛变/守方胜利/军团成员归队等）。

## 心智模型
把它当作"玩家围攻战的状态机遥控器"：`PlayerSiegeEvent` 是当前状态的真相来源（来自 `MobileParty.MainParty.SiegeEvent` 或定居点），其它属性都是它的衍生视图。`StartPlayerSiege` 是"进入围攻态"的入口，`FinalizePlayerSiege` 是"退出围攻态"的出口，`StartSiegeMission` 是"从战役层进入战斗层"的桥梁。`OnSiegeEventFinalized` 处理战斗结束后的菜单跳转，区分叛变、守方击退攻方、玩家是军团成员但非军团长等场景。

## 主要属性
\| 属性 \| 类型 \| 说明 \|
\|------\|------\|------\|
\| `PlayerSiegeEvent` \| `SiegeEvent` \| 当前玩家围攻事件，来自主队或当前定居点 \|
\| `BesiegedSettlement` \| `Settlement` \| 被围攻的定居点 \|
\| `PlayerSide` \| `BattleSideEnum` \| 玩家所在方（攻/守），由 `BesiegerCamp` 是否非空判定 \|
\| `IsRebellion` \| `bool` \| 是否为叛变围攻 \|

## 主要方法
### StartSiegePreparation
```csharp
public static void StartSiegePreparation()
```
退出当前菜单并激活 `menu_siege_strategies` 围攻策略菜单。

### StartPlayerSiege
```csharp
public static void StartPlayerSiege(BattleSideEnum playerSide, bool isSimulation = false, Settlement settlement = null)
```
设置主队为 hold 移动模式、调用 `MapState.OnPlayerSiegeActivated`、触发 `OnPlayerSiegeStarted` 事件。`isSimulation=true` 时跳过 `MapState` 通知。

### StartSiegeMission
```csharp
public static void StartSiegeMission(Settlement settlement = null)
```
根据 `BesiegedSettlement.CurrentSiegeState` 决定打开哪种 Mission：`OnTheWalls` 时收集双方准备就绪的攻城武器，判断是否有攻城塔，调用 `CampaignMission.OpenSiegeMissionWithDeployment`；其它有效状态不动作；`Invalid` 触发断言失败。

### FinalizePlayerSiege
```csharp
public static void FinalizePlayerSiege()
```
刷新被围攻定居点视觉、主队 hold、调用 `MapState.OnPlayerSiegeDeactivated`。`PlayerSiegeEvent` 为 null 时直接返回。

### OnSiegeEventFinalized
```csharp
public static void OnSiegeEventFinalized(bool besiegerPartyDefeated)
```
围攻战结束后的菜单路由：叛变场景退出到上一菜单；守方场景根据攻方是否被击败切换到 `siege_attacker_defeated` 或 `siege_attacker_left`；玩家是军团成员但非军团长时让主队离开定居点并切到 `army_wait` 菜单。

## 使用示例
### 示例: 启动一场城墙攻防战
**场景**: 玩家选择"登上城墙"后进入战斗 Mission。
```csharp
// 假设 PlayerSiege.BesiegedSettlement.CurrentSiegeState 已经是 OnTheWalls
PlayerSiege.StartSiegeMission();
// 内部会调用 CampaignMission.OpenSiegeMissionWithDeployment 打开部署+战斗 Mission
```
**要点**: `StartSiegeMission` 只在 `OnTheWalls` 状态有效，调用前必须确认状态；`FinalizePlayerSiege` 不会自己改 `SiegeEvent` 状态，只是关闭玩家侧 UI 与视觉；`OnSiegeEventFinalized` 由 `SiegeEvent` 内部在战斗结束时调用，mod 一般不直接调用。

## 参见
- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
