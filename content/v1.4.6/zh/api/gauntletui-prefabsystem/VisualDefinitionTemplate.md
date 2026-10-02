---
title: "VisualDefinitionTemplate"
description: "VisualDefinitionTemplate：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 9 个（方法 2、属性 6、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs。"
---
# VisualDefinitionTemplate

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class VisualDefinitionTemplate`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs`

## 概述

VisualDefinitionTemplate 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs。它是一个 public 类，继承链为 VisualDefinitionTemplate。public/protected 成员共 9 个：2 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualDefinitionTemplate 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 VisualDefinitionTemplate。成员构成以属性为主（属性 6/9，方法 2/9），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `TransitionDuration` | `public float TransitionDuration` | 属性 |
| `DelayOnBegin` | `public float DelayOnBegin` | 属性 |
| `EaseType` | `public AnimationInterpolation.Type EaseType` | 属性 |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction` | 属性 |
| `VisualStateTemplate>VisualStates` | `public Dictionary<string, VisualStateTemplate>VisualStates` | 属性 |
| `VisualDefinitionTemplate` | `public VisualDefinitionTemplate()` | 构造函数 |
| `AddVisualState` | `public void AddVisualState(VisualStateTemplate visualState)` | 方法 |
| `CreateVisualDefinition` | `public VisualDefinition CreateVisualDefinition(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate>visualDefinitionTemplates, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
