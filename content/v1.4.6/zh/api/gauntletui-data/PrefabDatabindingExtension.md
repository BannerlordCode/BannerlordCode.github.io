---
title: "PrefabDatabindingExtension"
description: "PrefabDatabindingExtension：TaleWorlds.GauntletUI.Data 的 public 类，继承 PrefabExtension；公开成员 7 个（方法 7、属性 0、字段 0）。源文件 TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs。"
---
# PrefabDatabindingExtension

**Namespace:** `TaleWorlds.GauntletUI.Data`
**Module:** `TaleWorlds.GauntletUI.Data`
**Type:** `public class PrefabDatabindingExtension : PrefabExtension`
**File:** `TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs`

## 概述

PrefabDatabindingExtension 位于 TaleWorlds.GauntletUI.Data 模块，源文件 TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs。它是一个 public 类，实现/继承 PrefabExtension，继承链为 PrefabDatabindingExtension → PrefabExtension。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PrefabDatabindingExtension 是 TaleWorlds.GauntletUI.Data 的顶层类型，命名空间与模块目录一致，继承链 PrefabDatabindingExtension → PrefabExtension。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。继承链上的 PrefabExtension 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.Data/PrefabDatabindingExtension.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterAttributeTypes` | `protected override void RegisterAttributeTypes(WidgetAttributeContext widgetAttributeContext)` | 方法 |
| `OnWidgetCreated` | `protected override void OnWidgetCreated(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, int childCount)` | 方法 |
| `OnSave` | `protected override void OnSave(PrefabExtensionContext prefabExtensionContext, XmlNode node, WidgetTemplate widgetTemplate)` | 方法 |
| `OnAttributesSet` | `protected override void OnAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | 方法 |
| `DoLoading` | `protected override void DoLoading(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, WidgetTemplate template, XmlNode node)` | 方法 |
| `OnLoadingFinished` | `protected override void OnLoadingFinished(WidgetPrefab widgetPrefab)` | 方法 |
| `AfterAttributesSet` | `protected override void AfterAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | 方法 |

## 参见

- [↑ gauntletui-data 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GauntletMovie](../GauntletMovie)
- [同命名空间 GauntletView](../GauntletView)
- [同命名空间 GeneratedGauntletMovie](../GeneratedGauntletMovie)
- [同命名空间 GeneratedWidgetData](../GeneratedWidgetData)
