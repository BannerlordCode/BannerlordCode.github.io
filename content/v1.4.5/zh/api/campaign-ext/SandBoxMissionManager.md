---
title: "SandBoxMissionManager"
description: "SandBoxMissionManager 的自动生成类参考。"
---
# SandBoxMissionManager

**Namespace:** SandBox
**Module:** SandBox
**Type:** `public class SandBoxMissionManager : ISandBoxMissionManager`
**Base:** `ISandBoxMissionManager`
**File:** `Modules.SandBox/SandBox/Sandbox/SandBoxMissionManager.cs`

## 概述

`SandBoxMissionManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `SandBoxMissionManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### OpenTournamentFightMission
`public IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament fight mission对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 SandBoxMissionManager 实例
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentFightMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentHorseRaceMission
`public IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament horse race mission对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 SandBoxMissionManager 实例
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentHorseRaceMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentJoustingMission
`public IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament jousting mission对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 SandBoxMissionManager 实例
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentJoustingMission("example", tournamentGame, settlement, culture, false);
```

### OpenTournamentArcheryMission
`public IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)`

**用途 / Purpose:** 打开tournament archery mission对应的资源或界面。

```csharp
// 先通过子系统 API 拿到 SandBoxMissionManager 实例
SandBoxMissionManager sandBoxMissionManager = ...;
var result = sandBoxMissionManager.OpenTournamentArcheryMission("example", tournamentGame, settlement, culture, false);
```

## 使用示例

```csharp
var manager = SandBoxMissionManager.Current;
```

## 参见

- [本区域目录](../)