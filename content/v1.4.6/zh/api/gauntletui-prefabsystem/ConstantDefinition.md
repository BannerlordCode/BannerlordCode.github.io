---
title: "ConstantDefinition"
description: "ConstantDefinition：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 15 个（方法 2、属性 12、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs。"
---
# ConstantDefinition

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class ConstantDefinition`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs`

## 概述

ConstantDefinition 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs。它是一个 public 类，继承链为 ConstantDefinition。public/protected 成员共 15 个：2 方法、12 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ConstantDefinition 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 ConstantDefinition。成员构成以属性为主（属性 12/15，方法 2/15），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | 属性 |
| `Value` | `public string Value` | 属性 |
| `SpriteName` | `public string SpriteName` | 属性 |
| `BrushName` | `public string BrushName` | 属性 |
| `LayerName` | `public string LayerName` | 属性 |
| `Additive` | `public string Additive` | 属性 |
| `Prefix` | `public string Prefix` | 属性 |
| `Suffix` | `public string Suffix` | 属性 |
| `MultiplyResult` | `public float MultiplyResult` | 属性 |
| `OnTrueValue` | `public string OnTrueValue` | 属性 |
| `OnFalseValue` | `public string OnFalseValue` | 属性 |
| `Type` | `public ConstantDefinitionType Type` | 属性 |
| `ConstantDefinition` | `public ConstantDefinition(string name)` | 构造函数 |
| `GetValue` | `public string GetValue(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | 方法 |
| `GetActualValueOf` | `public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
- [同命名空间 GeneratedPrefabContext](../GeneratedPrefabContext)
