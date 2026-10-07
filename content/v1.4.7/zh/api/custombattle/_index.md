---
title: "Custombattle — 自定义战斗：独立于战役的战斗模式"
description: "TaleWorlds.MountAndBlade.CustomBattle 及其子命名空间所在的目录，约 41 个类型，目前一个页面都没有。"
---
# Custombattle — 自定义战斗：独立于战役的战斗模式

这个桶装命名空间 `TaleWorlds.MountAndBlade.CustomBattle` 及其四个子命名空间（`CustomBattle`、`CustomBattleObjects`、`Views`、`SelectionItem`），1.4.7 源码树里约 41 个类型。它是自成体系的一小块：走自己的流程，没有 `Campaign`，也没有战役地图。

对模组作者来说它的意义是**独立**。想做一个不依赖战役的竞技模式或者过场战斗，整条扩展链在这个桶和 [mission-ext](../mission-ext/) 之间：模式怎么定义在这里，怎么把它跑成一场战斗在那边。

## 本区页面（15）

本目录收录 `TaleWorlds.MountAndBlade.CustomBattle` 及其子命名空间的全部类型，约 41 个。撰写进度：15/41。

| 页面 | 说明 |
| --- | --- |
| [CustomBattleData](CustomBattleData) | 自定义战斗数据载体（struct） |
| [CustomBattleProvider](CustomBattleProvider) | 自定义战斗提供者（ICustomBattleProvider 实现） |
| [CustomBattleHelper](CustomBattleHelper) | 自定义战斗辅助工具（static class） |
| [CustomBattleSubModule](CustomBattleSubModule) | 自定义战斗子模块（MBSubModuleBase） |
| [CustomBattleSceneData](CustomBattleSceneData) | 自定义战斗场景数据（struct） |
| [CustomBattlePlayerSide](CustomBattlePlayerSide) | 玩家阵营枚举 |
| [CustomBattlePlayerType](CustomBattlePlayerType) | 玩家类型枚举（Commander/Sergeant） |
| [CustomBattleCompositionData](CustomBattleCompositionData) | 战斗组成数据（struct） |
| [CustomBattleBannerEffects](CustomBattleBannerEffects) | 旗帜效果 |
| [CustomBattleSiegeMachineVM](CustomBattleSiegeMachineVM) | 攻城器械 ViewModel |
| [CustomBattleTimeOfDay](CustomBattleTimeOfDay) | 战斗时间枚举 |
| [GameTypeSelectionGroupVM](GameTypeSelectionGroupVM) | 游戏类型选择 ViewModel |
| [MapSelectionGroupVM](MapSelectionGroupVM) | 地图选择 ViewModel |
| [ArmyCompositionGroupVM](ArmyCompositionGroupVM) | 军队组成 ViewModel |
| [ArmyCompositionItemVM](ArmyCompositionItemVM) | 军队组成项 ViewModel |

## 尚未收录

全部内容都没有页面，按用途是四类：

- **模式定义与启动**：`CustomBattleData`、`CustomBattleProvider`、`CustomBattleSceneData`、`CustomBattleSubModule`、`CustomBattleHelper` —— 这是"一个自定义战斗模式由哪几块拼出来"的答案。
- **阵营与参战方**：`CustomBattlePlayerSide`、`CustomBattlePlayerType`、`CustomBattleCompositionData`、`CustomBattleBannerEffects`。
- **选择界面**：`GauntletCustomBattleMissionCheatView`、`ArmyCompositionGroupVM` / `ArmyCompositionItemVM` / `FactionItemVM` / `GameTypeItemVM` / `MapItemVM` / `PlayerSideItemVM` / `CharacterItemVM` 这一组 —— 建战斗前那套选人和选地图的界面。
- **调试与基准**：`CPUBenchmarkMissionLogic`、`CPUBenchmarkMissionSpawnHandler`。

41 个类型里绝大多数是内部实现，模组真正会碰到的是第一类。所以现阶段想写自定义战斗模式，只能读 `bannerlord-1.4.7/MountAndBlade/CustomBattle/` 的源码，或者先从 [架构总览](../../architecture/) 的分层结论确认自己有没有漏掉更上层的入口。

## 相邻目录

[core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [save-system](../save-system/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [system](../system/) · [modulemanager](../modulemanager/) · [network](../network/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## 参见

- ↑ [版本首页](../../)
- ↑ [API 参考](../)
- ↔ [架构总览](../../architecture/)