---
title: "SandBoxMissionManager"
description: "SandBoxMissionManager：SandBox 的 public 类，继承 ISandBoxMissionManager；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox/SandBoxMissionManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SandBoxMissionManager

**Namespace:** `SandBox`
**Module:** `SandBox`
**Type:** `public class SandBoxMissionManager : ISandBoxMissionManager`
**File:** `SandBox/SandBoxMissionManager.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

SandBoxMissionManager 位于 SandBox 模块，源文件 SandBox/SandBoxMissionManager.cs。它是一个 public 类，实现/继承 ISandBoxMissionManager，继承链为 SandBoxMissionManager → ISandBoxMissionManager。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SandBoxMissionManager 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox`，继承链 SandBoxMissionManager → ISandBoxMissionManager。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/SandBoxMissionManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OpenTournamentFightMission` | `public IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenTournamentHorseRaceMission` | `public IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenTournamentJoustingMission` | `public IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |
| `OpenTournamentArcheryMission` | `public IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ISandBoxMissionManager](../../campaign/ISandBoxMissionManager/)
- [同命名空间 Add1000GoldCheat](../Add1000GoldCheat/)
- [同命名空间 Add100InfluenceCheat](../Add100InfluenceCheat/)
- [同命名空间 Add100RenownCheat](../Add100RenownCheat/)
- [同命名空间 AddCraftingMaterialsCheat](../AddCraftingMaterialsCheat/)
