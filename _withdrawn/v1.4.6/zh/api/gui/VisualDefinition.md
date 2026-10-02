---
title: "VisualDefinition"
description: "VisualDefinition：TaleWorlds.GauntletUI 的 public 类；公开成员 9 个（方法 2、属性 6、字段 0）。canonical 桶 gui。源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VisualDefinition

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class VisualDefinition`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## 概述

VisualDefinition 位于 TaleWorlds.GauntletUI 模块，源文件 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs。它是一个 public 类，继承链为 VisualDefinition。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualDefinition 落在 canonical 桶 `gui`（命中规则 `rule:TaleWorlds.GauntletUI`），命名空间 `TaleWorlds.GauntletUI`，继承链 VisualDefinition。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/VisualDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `TransitionDuration` | `public float TransitionDuration` | 属性 |
| `DelayOnBegin` | `public float DelayOnBegin` | 属性 |
| `EaseType` | `public AnimationInterpolation.Type EaseType` | 属性 |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction` | 属性 |
| `VisualState>VisualStates` | `public Dictionary<string, VisualState>VisualStates` | 属性 |
| `VisualDefinition` | `public VisualDefinition(string name, float transitionDuration, float delayOnBegin, AnimationInterpolation.Type easeType, AnimationInterpolation.Function easeFunction)` | 构造函数 |
| `AddVisualState` | `public void AddVisualState(VisualState visualState)` | 方法 |
| `GetVisualState` | `public VisualState GetVisualState(string state)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 AlignmentAxis](../AlignmentAxis/)
- [同命名空间 AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [同命名空间 AnimationInterpolation](../AnimationInterpolation/)
- [同命名空间 AudioProperty](../AudioProperty/)
