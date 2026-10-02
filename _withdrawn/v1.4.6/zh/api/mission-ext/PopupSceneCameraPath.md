---
title: "PopupSceneCameraPath"
description: "PopupSceneCameraPath：TaleWorlds.MountAndBlade.View.Scripts 的 public 类，继承 ScriptComponentBehavior；公开成员 32 个（方法 13、属性 2、字段 15）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PopupSceneCameraPath

**Namespace:** `TaleWorlds.MountAndBlade.View.Scripts`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneCameraPath : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

PopupSceneCameraPath 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 PopupSceneCameraPath → ScriptComponentBehavior → DotNetObject。public/protected 成员共 32 个：13 方法、2 属性、15 字段、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PopupSceneCameraPath 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.View.Scripts`，继承链 PopupSceneCameraPath → ScriptComponentBehavior → DotNetObject。成员构成以方法为主（方法 13/32，属性 2/32），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/Scripts/PopupSceneCameraPath.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `OnEditorInit` | `protected override void OnEditorInit()` | 方法 |
| `Initialize` | `public void Initialize()` | 方法 |
| `SetInitialState` | `public void SetInitialState()` | 方法 |
| `SetPositiveState` | `public void SetPositiveState()` | 方法 |
| `SetNegativeState` | `public void SetNegativeState()` | 方法 |
| `SetIsReady` | `public void SetIsReady(bool isReady)` | 方法 |
| `GetCameraFade` | `public float GetCameraFade()` | 方法 |
| `Destroy` | `public void Destroy()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | 方法 |
| `LookAtEntity` | `public string LookAtEntity` | 字段 |
| `SkeletonName` | `public string SkeletonName` | 字段 |
| `AttachmentOffset` | `public Vec3 AttachmentOffset` | 字段 |
| `InitialPath` | `public string InitialPath` | 字段 |
| `InitialAnimationClip` | `public string InitialAnimationClip` | 字段 |
| `InitialSound` | `public string InitialSound` | 字段 |
| `InitialPathDuration` | `public float InitialPathDuration` | 字段 |
| `PositivePath` | `public string PositivePath` | 字段 |
| `PositiveAnimationClip` | `public string PositiveAnimationClip` | 字段 |
| `PositiveSound` | `public string PositiveSound` | 字段 |
| `PositivePathDuration` | `public float PositivePathDuration` | 字段 |
| `NegativePath` | `public string NegativePath` | 字段 |
| `NegativeAnimationClip` | `public string NegativeAnimationClip` | 字段 |
| `NegativeSound` | `public string NegativeSound` | 字段 |
| `NegativePathDuration` | `public float NegativePathDuration` | 字段 |
| `InterpolationType` | `public enum InterpolationType` | 属性 |
| `PathAnimationState` | `public struct PathAnimationState` | 属性 |
| `InterpolationType` | `public enum InterpolationType` | 嵌套类型 |
| `PathAnimationState` | `public struct PathAnimationState` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [同命名空间 CharacterDebugSpawner](../CharacterDebugSpawner/)
- [同命名空间 CharacterSpawner](../CharacterSpawner/)
- [同命名空间 HandMorphTest](../HandMorphTest/)
- [同命名空间 HandPose](../HandPose/)
