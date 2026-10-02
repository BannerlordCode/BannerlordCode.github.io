---
title: "MissionEntitySelectionUIHandler"
description: "MissionEntitySelectionUIHandler：TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer 的 public 类，继承 MissionView；公开成员 4 个（方法 3、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionEntitySelectionUIHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionEntitySelectionUIHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionEntitySelectionUIHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionEntitySelectionUIHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionEntitySelectionUIHandler 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionEntitySelectionUIHandler.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionEntitySelectionUIHandler → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionEntitySelectionUIHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`，继承链 MissionEntitySelectionUIHandler → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionEntitySelectionUIHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionEntitySelectionUIHandler` | `public MissionEntitySelectionUIHandler(Action<WeakGameEntity>onSelect = null, Action<WeakGameEntity>onHover = null)` | 构造函数 |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `TickDebug` | `public void TickDebug()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../MissionView/)
- [同命名空间 BarterView](../BarterView/)
- [同命名空间 BoardGameView](../BoardGameView/)
- [同命名空间 DeploymentMissionView](../DeploymentMissionView/)
- [同命名空间 DeploymentView](../DeploymentView/)
