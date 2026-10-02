---
title: "PopupSceneSpawnPoint"
description: "PopupSceneSpawnPoint：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScriptComponentBehavior；公开成员 21 个（方法 8、属性 1、字段 12）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PopupSceneSpawnPoint

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSpawnPoint : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PopupSceneSpawnPoint 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 PopupSceneSpawnPoint → ScriptComponentBehavior → DotNetObject。public/protected 成员共 21 个：8 方法、1 属性、12 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PopupSceneSpawnPoint 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View`，继承链 PopupSceneSpawnPoint → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 8/21，属性 1/21），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSpawnPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AddedPrefabComponent` | `public CompositeComponent AddedPrefabComponent` | 属性 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `InitializeWithAgentVisuals` | `public void InitializeWithAgentVisuals(AgentVisuals humanVisuals, AgentVisuals mountVisuals = null)` | 方法 |
| `SetInitialState` | `public void SetInitialState()` | 方法 |
| `SetPositiveState` | `public void SetPositiveState()` | 方法 |
| `SetNegativeState` | `public void SetNegativeState()` | 方法 |
| `Destroy` | `public void Destroy()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `InitialAction` | `public string InitialAction` | 字段 |
| `NegativeAction` | `public string NegativeAction` | 字段 |
| `InitialFaceAnimCode` | `public string InitialFaceAnimCode` | 字段 |
| `PositiveFaceAnimCode` | `public string PositiveFaceAnimCode` | 字段 |
| `NegativeFaceAnimCode` | `public string NegativeFaceAnimCode` | 字段 |
| `PositiveAction` | `public string PositiveAction` | 字段 |
| `LeftHandWieldedItem` | `public string LeftHandWieldedItem` | 字段 |
| `RightHandWieldedItem` | `public string RightHandWieldedItem` | 字段 |
| `BannerTagToUseForAddedPrefab` | `public string BannerTagToUseForAddedPrefab` | 字段 |
| `AttachedPrefabOffset` | `public Vec3 AttachedPrefabOffset` | 字段 |
| `PrefabItem` | `public string PrefabItem` | 字段 |
| `PrefabBone` | `public HumanBone PrefabBone` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 AgentVisuals](../AgentVisuals/)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator/)
- [同命名空间 BannerVisual](../BannerVisual/)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator/)
