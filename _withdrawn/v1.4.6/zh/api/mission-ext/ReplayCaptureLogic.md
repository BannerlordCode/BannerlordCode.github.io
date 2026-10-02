---
title: "ReplayCaptureLogic"
description: "ReplayCaptureLogic：TaleWorlds.MountAndBlade.View.MissionViews 的 public 类，继承 MissionView；公开成员 4 个（方法 2、属性 0、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayCaptureLogic.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ReplayCaptureLogic

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class ReplayCaptureLogic : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayCaptureLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ReplayCaptureLogic 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayCaptureLogic.cs。它是一个 public 类，实现/继承 MissionView，继承链为 ReplayCaptureLogic → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 4 个：2 方法、1 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ReplayCaptureLogic 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews`，继承链 ReplayCaptureLogic → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 2/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/ReplayCaptureLogic.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ReplayCaptureLogic` | `public ReplayCaptureLogic()` | 构造函数 |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | 方法 |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | 方法 |
| `CaptureFrameRate` | `public const float CaptureFrameRate` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../MissionView/)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView/)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView/)
