---
title: "PatrolPoint"
description: "PatrolPoint：SandBox 的 public 类，继承 StandingPoint；公开成员 15 个（方法 7、属性 2、字段 6）。源文件 SandBox/Objects/PatrolPoint.cs。"
---
# PatrolPoint

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class PatrolPoint : StandingPoint`
**File:** `SandBox/Objects/PatrolPoint.cs`

## 概述

PatrolPoint 位于 SandBox 模块，源文件 SandBox/Objects/PatrolPoint.cs。它是一个 public 类，实现/继承 StandingPoint，继承链为 PatrolPoint → StandingPoint。public/protected 成员共 15 个：7 方法、2 属性、6 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PatrolPoint 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects），继承链 PatrolPoint → StandingPoint。成员构成以方法为主（方法 7/15，属性 2/15），对外主要以操作入口暴露。继承链上的 StandingPoint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/PatrolPoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SelectedRightHandItem` | `protected string SelectedRightHandItem` | 属性 |
| `SelectedLeftHandItem` | `protected string SelectedLeftHandItem` | 属性 |
| `AssignItemToBone` | `protected void AssignItemToBone(AnimationPoint.ItemForBone newItem)` | 方法 |
| `SetAgentItemsVisibility` | `public void SetAgentItemsVisibility(bool isVisible)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | 方法 |
| `OnInit` | `protected override void OnInit()` | 方法 |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | 方法 |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | 方法 |
| `PatrollingSpeed` | `public readonly float PatrollingSpeed` | 字段 |
| `LoopAction` | `public string LoopAction` | 字段 |
| `RightHandItem` | `public string RightHandItem` | 字段 |
| `RightHandItemBone` | `public HumanBone RightHandItemBone` | 字段 |
| `LeftHandItem` | `public string LeftHandItem` | 字段 |
| `LeftHandItemBone` | `public HumanBone LeftHandItemBone` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CheckpointArea](../CheckpointArea)
- [同命名空间 DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [同命名空间 DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [同命名空间 GenericMissionEventBox](../GenericMissionEventBox)
