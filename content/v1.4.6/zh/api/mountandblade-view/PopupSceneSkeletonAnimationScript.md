---
title: "PopupSceneSkeletonAnimationScript"
description: "PopupSceneSkeletonAnimationScript：TaleWorlds.MountAndBlade.View 的 public 类，继承 ScriptComponentBehavior；公开成员 13 个（方法 5、属性 0、字段 8）。源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs。"
---
# PopupSceneSkeletonAnimationScript

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class PopupSceneSkeletonAnimationScript : ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs`

## 概述

PopupSceneSkeletonAnimationScript 位于 TaleWorlds.MountAndBlade.View 模块，源文件 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs。它是一个 public 类，实现/继承 ScriptComponentBehavior，继承链为 PopupSceneSkeletonAnimationScript → ScriptComponentBehavior。public/protected 成员共 13 个：5 方法、8 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PopupSceneSkeletonAnimationScript 是 TaleWorlds.MountAndBlade.View 的顶层类型，命名空间与模块目录一致，继承链 PopupSceneSkeletonAnimationScript → ScriptComponentBehavior。成员构成以方法为主（方法 5/13，属性 0/13），对外主要以操作入口暴露。继承链上的 ScriptComponentBehavior 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/PopupSceneSkeletonAnimationScript.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `Initialize` | `public void Initialize()` | 方法 |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `SetState` | `public void SetState(int state)` | 方法 |
| `SkeletonName` | `public string SkeletonName` | 字段 |
| `AttachmentOffset` | `public Vec3 AttachmentOffset` | 字段 |
| `InitialAnimationClip` | `public string InitialAnimationClip` | 字段 |
| `PositiveAnimationClip` | `public string PositiveAnimationClip` | 字段 |
| `NegativeAnimationClip` | `public string NegativeAnimationClip` | 字段 |
| `InitialAnimationContinueClip` | `public string InitialAnimationContinueClip` | 字段 |
| `PositiveAnimationContinueClip` | `public string PositiveAnimationContinueClip` | 字段 |
| `NegativeAnimationContinueClip` | `public string NegativeAnimationContinueClip` | 字段 |

## 参见

- [↑ mountandblade-view 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentVisuals](../AgentVisuals)
- [同命名空间 AgentVisualsCreator](../AgentVisualsCreator)
- [同命名空间 BannerVisual](../BannerVisual)
- [同命名空间 BannerVisualCreator](../BannerVisualCreator)
