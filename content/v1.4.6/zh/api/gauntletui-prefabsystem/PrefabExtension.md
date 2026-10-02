---
title: "PrefabExtension"
description: "PrefabExtension：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 7 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs。"
---
# PrefabExtension

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public abstract class PrefabExtension`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs`

## 概述

PrefabExtension 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs。它是一个 public 类（abstract），继承链为 PrefabExtension。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PrefabExtension 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 PrefabExtension。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterAttributeTypes` | `protected internal virtual void RegisterAttributeTypes(WidgetAttributeContext widgetAttributeContext)` | 方法 |
| `OnWidgetCreated` | `protected internal virtual void OnWidgetCreated(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, int childCount)` | 方法 |
| `OnSave` | `protected internal virtual void OnSave(PrefabExtensionContext prefabExtensionContext, XmlNode node, WidgetTemplate widgetTemplate)` | 方法 |
| `OnAttributesSet` | `protected internal virtual void OnAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | 方法 |
| `DoLoading` | `protected internal virtual void DoLoading(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, WidgetTemplate template, XmlNode node)` | 方法 |
| `OnLoadingFinished` | `protected internal virtual void OnLoadingFinished(WidgetPrefab widgetPrefab)` | 方法 |
| `AfterAttributesSet` | `protected internal virtual void AfterAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
