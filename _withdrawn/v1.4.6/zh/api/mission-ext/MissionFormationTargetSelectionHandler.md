---
title: "MissionFormationTargetSelectionHandler"
description: "MissionFormationTargetSelectionHandler：TaleWorlds.MountAndBlade.View.MissionViews 的 public 类，继承 MissionView；公开成员 8 个（方法 3、属性 0、字段 3）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionFormationTargetSelectionHandler

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionFormationTargetSelectionHandler : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MissionFormationTargetSelectionHandler 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs。它是一个 public 类，实现/继承 MissionView，继承链为 MissionFormationTargetSelectionHandler → MissionView → MissionBehavior → IMissionBehavior。public/protected 成员共 8 个：3 方法、3 字段、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MissionFormationTargetSelectionHandler 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.MissionViews`，继承链 MissionFormationTargetSelectionHandler → MissionView → MissionBehavior → IMissionBehavior。成员构成以方法为主（方法 3/8，属性 0/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionFormationTargetSelectionHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<MBReadOnlyList<Formation>>OnFormationFocused;` | 事件 |
| `MissionFormationTargetSelectionHandler` | `public MissionFormationTargetSelectionHandler()` | 构造函数 |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | 方法 |
| `SetIsFormationTargetingDisabled` | `public void SetIsFormationTargetingDisabled(bool isDisabled)` | 方法 |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | 方法 |
| `MaxDistanceForFocusCheck` | `public const float MaxDistanceForFocusCheck` | 字段 |
| `MinDistanceForFocusCheck` | `public const float MinDistanceForFocusCheck` | 字段 |
| `MaxDistanceToCenterForFocus` | `public readonly float MaxDistanceToCenterForFocus` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionView](../MissionView/)
- [同命名空间 MissionAgentContourControllerView](../MissionAgentContourControllerView/)
- [同命名空间 MissionAgentLabelView](../MissionAgentLabelView/)
- [同命名空间 MissionAgentStatusUIHandler](../MissionAgentStatusUIHandler/)
- [同命名空间 MissionBattleUIBaseView](../MissionBattleUIBaseView/)
