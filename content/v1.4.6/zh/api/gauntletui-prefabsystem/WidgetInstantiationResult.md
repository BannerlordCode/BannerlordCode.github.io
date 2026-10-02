---
title: "WidgetInstantiationResult"
description: "WidgetInstantiationResult：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 11 个（方法 5、属性 4、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs。"
---
# WidgetInstantiationResult

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetInstantiationResult`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs`

## 概述

WidgetInstantiationResult 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs。它是一个 public 类，继承链为 WidgetInstantiationResult。public/protected 成员共 11 个：5 方法、4 属性、2 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetInstantiationResult 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 WidgetInstantiationResult。成员构成以方法为主（方法 5/11，属性 4/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Widget` | `public Widget Widget` | 属性 |
| `Template` | `public WidgetTemplate Template` | 属性 |
| `CustomWidgetInstantiationData` | `public WidgetInstantiationResult CustomWidgetInstantiationData` | 属性 |
| `List` | `public List<WidgetInstantiationResult>Children` | 属性 |
| `WidgetInstantiationResult` | `public WidgetInstantiationResult(Widget widget, WidgetTemplate widgetTemplate, WidgetInstantiationResult customWidgetInstantiationData)` | 构造函数 |
| `AddExtensionData` | `public void AddExtensionData(string name, object data, bool passToChildWidgetCreation = false)` | 方法 |
| `GetExtensionData` | `public T GetExtensionData<T>(string name)` | 方法 |
| `AddExtensionData` | `public void AddExtensionData(object data, bool passToChildWidgetCreation = false)` | 方法 |
| `GetExtensionData` | `public T GetExtensionData<T>() where T : class` | 方法 |
| `WidgetInstantiationResult` | `public WidgetInstantiationResult(Widget widget, WidgetTemplate widgetTemplate) : this(widget, widgetTemplate, null)` | 构造函数 |
| `GetLogicalOrDefaultChildrenLocation` | `public WidgetInstantiationResult GetLogicalOrDefaultChildrenLocation()` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
