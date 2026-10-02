---
title: "ChairUsePoint"
description: "ChairUsePoint：SandBox 的 public 类，继承 AnimationPoint；公开成员 14 个（方法 4、属性 0、字段 10）。源文件 SandBox/Objects/AnimationPoints/ChairUsePoint.cs。"
---
# ChairUsePoint

**Namespace:** `SandBox.Objects.AnimationPoints`
**Module:** `SandBox`
**Type:** `public class ChairUsePoint : AnimationPoint`
**File:** `SandBox/Objects/AnimationPoints/ChairUsePoint.cs`

## 概述

ChairUsePoint 位于 SandBox 模块，源文件 SandBox/Objects/AnimationPoints/ChairUsePoint.cs。它是一个 public 类，实现/继承 AnimationPoint，继承链为 ChairUsePoint → AnimationPoint → StandingPoint。public/protected 成员共 14 个：4 方法、10 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChairUsePoint 是 SandBox 的顶层类型，命名空间与模块目录不同（SandBox.Objects.AnimationPoints），继承链 ChairUsePoint → AnimationPoint → StandingPoint。成员构成以方法为主（方法 4/14，属性 0/14），对外主要以操作入口暴露。继承链上的 StandingPoint 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 SandBox/Objects/AnimationPoints/ChairUsePoint.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetActionCodes` | `protected override void SetActionCodes()` | 方法 |
| `ShouldUpdateOnEditorVariableChanged` | `protected override bool ShouldUpdateOnEditorVariableChanged(string variableName)` | 方法 |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | 方法 |
| `OnTick` | `protected override void OnTick(float dt)` | 方法 |
| `NearTableLoopAction` | `public string NearTableLoopAction` | 字段 |
| `NearTablePairLoopAction` | `public string NearTablePairLoopAction` | 字段 |
| `DrinkLoopAction` | `public string DrinkLoopAction` | 字段 |
| `DrinkPairLoopAction` | `public string DrinkPairLoopAction` | 字段 |
| `DrinkRightHandItem` | `public string DrinkRightHandItem` | 字段 |
| `DrinkLeftHandItem` | `public string DrinkLeftHandItem` | 字段 |
| `EatLoopAction` | `public string EatLoopAction` | 字段 |
| `EatPairLoopAction` | `public string EatPairLoopAction` | 字段 |
| `EatRightHandItem` | `public string EatRightHandItem` | 字段 |
| `EatLeftHandItem` | `public string EatLeftHandItem` | 字段 |

## 参见

- [↑ sandbox 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AnimationPoint](../AnimationPoint)
- [同命名空间 AnimationPoint](../AnimationPoint)
- [同命名空间 DynamicObjectAnimationPoint](../DynamicObjectAnimationPoint)
- [同命名空间 PlayMusicPoint](../PlayMusicPoint)
