---
title: "MapEvents 家族"
description: "世界地图遭遇、参与方、围城转换与进入 Mission 战斗的边界。"
---

# MapEvents 家族

**一句话职责：** MapEvent 表示战役地图上的遭遇或战斗，并在解决或交给 Mission 前协调参与 Party。

## 心智模型与阅读顺序

从 [MapEvent](../../campaign/MapEvent) 开始，再读 [SiegeEvent](../SiegeEvent)。先通过 [Party](../party) 和 [Settlements](../settlements) 了解参与方，最后读 [StartBattleAction](../StartBattleAction)。

## 何时使用

战役层检查参与方、阵营和战斗状态时使用 MapEvent；进入 Mission 后使用 Mission API。不要从 UI 回调强行推进，也不要在解决后保留引用。

## 依赖关系

- 上游：Party、Settlement、Encounter Actions 与 CampaignTime。
- 下游：Mission、Agents、战斗奖励、士气与存档。
- 同级：[Actions](../actions)、[Party](../party)、[Settlements](../settlements)。

## 最小真实入口

```csharp
MapEvent mapEvent = MapEvent.PlayerMapEvent;
if (mapEvent != null) { /* 检查双方与参与队伍 */ }
```

查询参与方前先判断生命周期状态；没有遭遇时该入口可以为空。

## 风险边界

MapEvent 解决可能创建/销毁 Party 并把控制权交给 Mission。使用既有 Action/Event 边界，不要在解决回调中改参与方名册。

## 导航

- [上级：Campaign-Ext](..)
- [同级：Party](../party) · [Settlements](../settlements)
- [相关：Mission](../../mission)
