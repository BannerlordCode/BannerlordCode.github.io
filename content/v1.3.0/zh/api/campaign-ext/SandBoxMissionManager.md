---
title: "SandBoxMissionManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SandBoxMissionManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxMissionManager : ISandBoxMissionManager`
**Base:** `ISandBoxMissionManager`
**File:** `SandBox/SandBoxMissionManager.cs`

## 概述

`SandBoxMissionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxMissionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenTournamentFightMission
`public IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament fight mission` 相关逻辑。

### OpenTournamentHorseRaceMission
`public IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament horse race mission` 相关逻辑。

### OpenTournamentJoustingMission
`public IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament jousting mission` 相关逻辑。

### OpenTournamentArcheryMission
`public IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 处理 `open tournament archery mission` 相关逻辑。

## 使用示例

```csharp
var manager = SandBoxMissionManager.Current;
```

## 参见

- [完整类目录](../catalog)