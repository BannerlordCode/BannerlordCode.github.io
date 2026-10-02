---
title: "WidgetFactory"
description: "WidgetFactory：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 17 个（方法 12、属性 3、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs。"
---
# WidgetFactory

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetFactory`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs`

## 概述

WidgetFactory 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs。它是一个 public 类，继承链为 WidgetFactory。public/protected 成员共 17 个：12 方法、3 属性、1 事件、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetFactory 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 WidgetFactory。成员构成以方法为主（方法 12/17，属性 3/17），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext` | 属性 |
| `WidgetAttributeContext` | `public WidgetAttributeContext WidgetAttributeContext` | 属性 |
| `GeneratedPrefabContext` | `public GeneratedPrefabContext GeneratedPrefabContext` | 属性 |
| `WidgetFactory` | `public WidgetFactory(ResourceDepot resourceDepot, string resourceFolder)` | 构造函数 |
| `Initialize` | `public void Initialize(List<string>assemblyOrder = null)` | 方法 |
| `AddCustomType` | `public void AddCustomType(string name, string path)` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetPrefabNames()` | 方法 |
| `IEnumerable` | `public IEnumerable<string>GetWidgetTypes()` | 方法 |
| `IsBuiltinType` | `public bool IsBuiltinType(string name)` | 方法 |
| `GetBuiltinType` | `public Type GetBuiltinType(string name)` | 方法 |
| `IsCustomType` | `public bool IsCustomType(string typeName)` | 方法 |
| `GetCustomTypePath` | `public string GetCustomTypePath(string name)` | 方法 |
| `CreateBuiltinWidget` | `public Widget CreateBuiltinWidget(UIContext context, string typeName)` | 方法 |
| `GetCustomType` | `public WidgetPrefab GetCustomType(string typeName)` | 方法 |
| `OnUnload` | `public void OnUnload(string typeName)` | 方法 |
| `CheckForUpdates` | `public void CheckForUpdates()` | 方法 |
| `PrefabChange;` | `public event Action PrefabChange;` | 事件 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
