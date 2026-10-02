---
title: "WidgetCreationData"
description: "WidgetCreationData：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 13 个（方法 4、属性 6、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs。"
---
# WidgetCreationData

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetCreationData`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## 概述

WidgetCreationData 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs。它是一个 public 类，继承链为 WidgetCreationData。public/protected 成员共 13 个：4 方法、6 属性、3 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetCreationData 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 WidgetCreationData。成员构成以属性为主（属性 6/13，方法 4/13），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Parent` | `public Widget Parent` | 属性 |
| `Context` | `public UIContext Context` | 属性 |
| `WidgetFactory` | `public WidgetFactory WidgetFactory` | 属性 |
| `BrushFactory` | `public BrushFactory BrushFactory` | 属性 |
| `SpriteData` | `public SpriteData SpriteData` | 属性 |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext` | 属性 |
| `WidgetCreationData` | `public WidgetCreationData(UIContext context, WidgetFactory widgetFactory, Widget parent)` | 构造函数 |
| `WidgetCreationData` | `public WidgetCreationData(UIContext context, WidgetFactory widgetFactory)` | 构造函数 |
| `WidgetCreationData` | `public WidgetCreationData(WidgetCreationData widgetCreationData, WidgetInstantiationResult parentResult)` | 构造函数 |
| `AddExtensionData` | `public void AddExtensionData(string name, object data)` | 方法 |
| `GetExtensionData` | `public T GetExtensionData<T>(string name) where T : class` | 方法 |
| `AddExtensionData` | `public void AddExtensionData(object data)` | 方法 |
| `GetExtensionData` | `public T GetExtensionData<T>() where T : class` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
