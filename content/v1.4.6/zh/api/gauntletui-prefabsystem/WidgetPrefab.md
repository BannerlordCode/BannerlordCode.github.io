---
title: "WidgetPrefab"
description: "WidgetPrefab：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 13 个（方法 7、属性 5、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs。"
---
# WidgetPrefab

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetPrefab`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs`

## 概述

WidgetPrefab 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs。它是一个 public 类，继承链为 WidgetPrefab。public/protected 成员共 13 个：7 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetPrefab 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 WidgetPrefab。成员构成以方法为主（方法 7/13，属性 5/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VisualDefinitionTemplate>VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate>VisualDefinitionTemplates` | 属性 |
| `ConstantDefinition>Constants` | `public Dictionary<string, ConstantDefinition>Constants` | 属性 |
| `string>Parameters` | `public Dictionary<string, string>Parameters` | 属性 |
| `XmlElement>CustomElements` | `public Dictionary<string, XmlElement>CustomElements` | 属性 |
| `RootTemplate` | `public WidgetTemplate RootTemplate` | 属性 |
| `WidgetPrefab` | `public WidgetPrefab()` | 构造函数 |
| `LoadFrom` | `public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)` | 方法 |
| `Save` | `public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)` | 方法 |
| `Instantiate` | `public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)` | 方法 |
| `Instantiate` | `public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate>parameters)` | 方法 |
| `OnRelease` | `public void OnRelease()` | 方法 |
| `GetConstantValue` | `public ConstantDefinition GetConstantValue(string name)` | 方法 |
| `GetParameterDefaultValue` | `public string GetParameterDefaultValue(string name)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
