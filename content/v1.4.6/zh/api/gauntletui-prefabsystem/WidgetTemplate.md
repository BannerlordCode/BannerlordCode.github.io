---
title: "WidgetTemplate"
description: "WidgetTemplate：TaleWorlds.GauntletUI.PrefabSystem 的 public 类；公开成员 34 个（方法 23、属性 10、字段 0）。源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs。"
---
# WidgetTemplate

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetTemplate`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs`

## 概述

WidgetTemplate 位于 TaleWorlds.GauntletUI.PrefabSystem 模块，源文件 TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs。它是一个 public 类，继承链为 WidgetTemplate。public/protected 成员共 34 个：23 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：WidgetTemplate 是 TaleWorlds.GauntletUI.PrefabSystem 的顶层类型，命名空间与模块目录一致，继承链 WidgetTemplate。成员构成以方法为主（方法 23/34，属性 10/34），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation` | 属性 |
| `Id` | `public string Id` | 属性 |
| `Type` | `public string Type` | 属性 |
| `ChildCount` | `public int ChildCount` | 属性 |
| `WidgetAttributeTemplate>GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate>GivenParameters` | 属性 |
| `Prefab` | `public WidgetPrefab Prefab` | 属性 |
| `RootTemplate` | `public WidgetTemplate RootTemplate` | 属性 |
| `WidgetAttributeTemplate>>Attributes` | `public Dictionary<Type, Dictionary<string, WidgetAttributeTemplate>>Attributes` | 属性 |
| `Tag` | `public object Tag` | 属性 |
| `WidgetTemplate` | `public WidgetTemplate(string type)` | 构造函数 |
| `AddExtensionData` | `public void AddExtensionData(string name, object data)` | 方法 |
| `GetExtensionData` | `public T GetExtensionData<T>(string name) where T : class` | 方法 |
| `RemoveExtensionData` | `public void RemoveExtensionData(string name)` | 方法 |
| `AddExtensionData` | `public void AddExtensionData(object data)` | 方法 |
| `GetExtensionData` | `public T GetExtensionData<T>() where T : class` | 方法 |
| `RemoveExtensionData` | `public void RemoveExtensionData<T>() where T : class` | 方法 |
| `IEnumerable` | `public IEnumerable<WidgetAttributeTemplate>GetAttributesOf<T>() where T : WidgetAttributeKeyType` | 方法 |
| `TValue>` | `public IEnumerable<WidgetAttributeTemplate>GetAttributesOf<TKey, TValue>() where TKey : WidgetAttributeKeyType where TValue : WidgetAttributeValueType` | 方法 |
| `IEnumerable` | `public IEnumerable<WidgetAttributeTemplate>AllAttributes` | 属性 |
| `GetFirstAttributeIfExist` | `public WidgetAttributeTemplate GetFirstAttributeIfExist<T>() where T : WidgetAttributeKeyType` | 方法 |
| `SetAttribute` | `public void SetAttribute(WidgetAttributeTemplate attribute)` | 方法 |
| `GetChildAt` | `public WidgetTemplate GetChildAt(int i)` | 方法 |
| `AddChild` | `public void AddChild(WidgetTemplate child)` | 方法 |
| `RemoveChild` | `public void RemoveChild(WidgetTemplate child)` | 方法 |
| `SwapChildren` | `public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)` | 方法 |
| `Instantiate` | `public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate>parameters)` | 方法 |
| `OnRelease` | `public void OnRelease()` | 方法 |
| `LoadFrom` | `public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)` | 方法 |
| `SetRootTemplate` | `public void SetRootTemplate(WidgetPrefab prefab)` | 方法 |
| `AddAttributeTo` | `public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)` | 方法 |
| `RemoveAttributeFrom` | `public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)` | 方法 |
| `RemoveAttributeFrom` | `public void RemoveAttributeFrom<T>(string name) where T : WidgetAttributeKeyType` | 方法 |
| `RemoveAttributeFrom` | `public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)` | 方法 |
| `Save` | `public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)` | 方法 |

## 参见

- [↑ gauntletui-prefabsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConstantDefinition](../ConstantDefinition)
- [同命名空间 ConstantDefinitionType](../ConstantDefinitionType)
- [同命名空间 CreateGeneratedWidget](../CreateGeneratedWidget)
- [同命名空间 CustomWidgetType](../CustomWidgetType)
