---
title: "TutorialArea"
description: "TutorialArea：TaleWorlds.MountAndBlade 的 public 类，继承 MissionObject；公开成员 30 个（方法 26、属性 3、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/TutorialArea.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialArea

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TutorialArea : MissionObject`
**File:** `TaleWorlds.MountAndBlade/TutorialArea.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

TutorialArea 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/TutorialArea.cs。它是一个 public 类，实现/继承 MissionObject，继承链为 TutorialArea → MissionObject → ScriptComponentBehavior → DotNetObject。public/protected 成员共 30 个：26 方法、3 属性、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TutorialArea 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 TutorialArea → MissionObject → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 26/30，属性 3/30），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/TutorialArea.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<TrainingIcon>TrainingIconsReadOnly` | 属性 |
| `TypeOfTraining` | `public TutorialArea.TrainingType TypeOfTraining` | 属性 |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | 方法 |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | 方法 |
| `OnInit` | `protected internal override void OnInit()` | 方法 |
| `AfterMissionStart` | `public override void AfterMissionStart()` | 方法 |
| `MarkTrainingIcons` | `public void MarkTrainingIcons(bool mark)` | 方法 |
| `GetActiveTrainingIcon` | `public TrainingIcon GetActiveTrainingIcon()` | 方法 |
| `GetIndexFromTag` | `public int GetIndexFromTag(string tag)` | 方法 |
| `List` | `public List<string>GetSubTrainingTags()` | 方法 |
| `ActivateTaggedWeapons` | `public void ActivateTaggedWeapons(int index)` | 方法 |
| `EquipWeaponsToPlayer` | `public void EquipWeaponsToPlayer(int index)` | 方法 |
| `DeactivateAllWeapons` | `public void DeactivateAllWeapons(bool resetDestructibles)` | 方法 |
| `ActivateBoundaries` | `public void ActivateBoundaries()` | 方法 |
| `HideBoundaries` | `public void HideBoundaries()` | 方法 |
| `GetBreakablesCount` | `public int GetBreakablesCount(int index)` | 方法 |
| `MakeDestructible` | `public void MakeDestructible(int index)` | 方法 |
| `MarkAllTargets` | `public void MarkAllTargets(int index, bool mark)` | 方法 |
| `ResetMarkingTargetTimers` | `public void ResetMarkingTargetTimers(int index)` | 方法 |
| `MakeInDestructible` | `public void MakeInDestructible(int index)` | 方法 |
| `AllBreakablesAreBroken` | `public bool AllBreakablesAreBroken(int index)` | 方法 |
| `GetBrokenBreakableCount` | `public int GetBrokenBreakableCount(int index)` | 方法 |
| `GetUnbrokenBreakableCount` | `public int GetUnbrokenBreakableCount(int index)` | 方法 |
| `ResetBreakables` | `public void ResetBreakables(int index, bool makeIndestructible = true)` | 方法 |
| `HasMainAgentPickedAll` | `public bool HasMainAgentPickedAll(int index)` | 方法 |
| `CheckMainAgentEquipment` | `public void CheckMainAgentEquipment(int index)` | 方法 |
| `CheckWeapons` | `public void CheckWeapons(int index)` | 方法 |
| `IsPositionInsideTutorialArea` | `public bool IsPositionInsideTutorialArea(Vec3 position, out string[]volumeBoxTags)` | 方法 |
| `TrainingType` | `public enum TrainingType` | 属性 |
| `TrainingType` | `public enum TrainingType` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MissionObject](../MissionObject/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
