---
title: "MissionBattleUIBaseView"
description: "MissionBattleUIBaseView：TaleWorlds.MountAndBlade.View.MissionViews 的 public 类，继承 MissionView；公开成员 8 个（方法 7、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionBattleUIBaseView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionBattleUIBaseView 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs。它是一个 public 类（abstract），实现/继承 MissionView，继承链为 MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 8 个：7 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionBattleUIBaseView 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews`，继承链 MissionBattleUIBaseView → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 7/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsViewCreated` | `public bool IsViewCreated` | 属性 |
| `OnCreateView` | `protected abstract void OnCreateView();` | 方法 |
| `OnDestroyView` | `protected abstract void OnDestroyView();` | 方法 |
| `OnSuspendView` | `protected abstract override void OnSuspendView();` | 方法 |
| `OnResumeView` | `protected abstract override void OnResumeView();` | 方法 |
| `OnMissionScreenInitialize` | `public override void OnMissionScreenInitialize()` | 方法 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnMissionScreenFinalize` | `public override void OnMissionScreenFinalize()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../MissionView/)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView/)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [同命名空间 MissionBoundaryCrossingView](../MissionBoundaryCrossingView/)
