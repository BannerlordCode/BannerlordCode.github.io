---
title: "MissionGauntletCheatView"
description: "MissionGauntletCheatView：SandBox.GauntletUI.Missions 的 public 类，继承 MissionCheatView；公开成员 5 个（方法 5、属性 0、字段 0）。canonical 桶 sandbox。源文件 SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionGauntletCheatView

**Namespace:** `SandBox.GauntletUI.Missions`
**Module:** `SandBox.GauntletUI`
**Type:** `public class MissionGauntletCheatView : MissionCheatView`
**File:** `SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs`
**Bucket:** `sandbox` (rule:SandBox)

## 概述

MissionGauntletCheatView 位于 SandBox.GauntletUI 模块，源文件 SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs。它是一个 public 类，实现/继承 MissionCheatView，继承链为 MissionGauntletCheatView → MissionCheatView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionGauntletCheatView 落在 canonical 桶 `sandbox`（命中规则 `rule:SandBox`），命名空间 `SandBox.GauntletUI.Missions`，继承链 MissionGauntletCheatView → MissionCheatView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox.GauntletUI/Missions/MissionGauntletCheatView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |
| `GetIsCheatsAvailable` | `public override bool GetIsCheatsAvailable()` | 方法 |
| `InitializeScreen` | `public override void InitializeScreen()` | 方法 |
| `FinalizeScreen` | `public override void FinalizeScreen()` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionCheatView](../../mission-ext/MissionCheatView/)
- [同命名空间 MissionGauntletAgentAlarmStateView](../MissionGauntletAgentAlarmStateView/)
- [同命名空间 MissionGauntletArenaPracticeFightView](../MissionGauntletArenaPracticeFightView/)
- [同命名空间 MissionGauntletBarterView](../MissionGauntletBarterView/)
- [同命名空间 MissionGauntletBoardGameView](../MissionGauntletBoardGameView/)
