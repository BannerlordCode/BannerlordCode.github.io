---
title: "VisualStateTemplate"
description: "VisualStateTemplate：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 6 个（方法 4、属性 1、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs。"
---
# VisualStateTemplate

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class VisualStateTemplate`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs`

## 概述

VisualStateTemplate 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs。它是一个 public 类，继承链为 VisualStateTemplate。public/protected 成员共 6 个：4 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：VisualStateTemplate 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 VisualStateTemplate。成员构成以方法为主（方法 4/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public string State` | 属性 |
| `VisualStateTemplate` | `public VisualStateTemplate()` | 构造函数 |
| `SetAttribute` | `public void SetAttribute(string name, string value)` | 方法 |
| `string>GetAttributes` | `public Dictionary<string, string>GetAttributes()` | 方法 |
| `ClearAttribute` | `public void ClearAttribute(string name)` | 方法 |
| `CreateVisualState` | `public VisualState CreateVisualState(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate>visualDefinitionTemplates, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
