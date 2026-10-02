---
title: "WidgetTemplate"
description: "WidgetTemplate: a public class in TaleWorlds.GauntletUI.PrefabSystem; 34 exposed members (23 methods, 10 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs."
---
# WidgetTemplate

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetTemplate`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs`

## Overview

WidgetTemplate lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs. It is a public class; the inheritance chain is WidgetTemplate. It exposes 34 public/protected members: 23 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetTemplate is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetTemplate. The surface is method-led (methods 23/34, properties 10/34), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetTemplate.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LogicalChildrenLocation` | `public bool LogicalChildrenLocation` | property |
| `Id` | `public string Id` | property |
| `Type` | `public string Type` | property |
| `ChildCount` | `public int ChildCount` | property |
| `WidgetAttributeTemplate>GivenParameters` | `public Dictionary<string, WidgetAttributeTemplate>GivenParameters` | property |
| `Prefab` | `public WidgetPrefab Prefab` | property |
| `RootTemplate` | `public WidgetTemplate RootTemplate` | property |
| `WidgetAttributeTemplate>>Attributes` | `public Dictionary<Type, Dictionary<string, WidgetAttributeTemplate>>Attributes` | property |
| `Tag` | `public object Tag` | property |
| `WidgetTemplate` | `public WidgetTemplate(string type)` | constructor |
| `AddExtensionData` | `public void AddExtensionData(string name, object data)` | method |
| `GetExtensionData` | `public T GetExtensionData<T>(string name) where T : class` | method |
| `RemoveExtensionData` | `public void RemoveExtensionData(string name)` | method |
| `AddExtensionData` | `public void AddExtensionData(object data)` | method |
| `GetExtensionData` | `public T GetExtensionData<T>() where T : class` | method |
| `RemoveExtensionData` | `public void RemoveExtensionData<T>() where T : class` | method |
| `IEnumerable` | `public IEnumerable<WidgetAttributeTemplate>GetAttributesOf<T>() where T : WidgetAttributeKeyType` | method |
| `TValue>` | `public IEnumerable<WidgetAttributeTemplate>GetAttributesOf<TKey, TValue>() where TKey : WidgetAttributeKeyType where TValue : WidgetAttributeValueType` | method |
| `IEnumerable` | `public IEnumerable<WidgetAttributeTemplate>AllAttributes` | property |
| `GetFirstAttributeIfExist` | `public WidgetAttributeTemplate GetFirstAttributeIfExist<T>() where T : WidgetAttributeKeyType` | method |
| `SetAttribute` | `public void SetAttribute(WidgetAttributeTemplate attribute)` | method |
| `GetChildAt` | `public WidgetTemplate GetChildAt(int i)` | method |
| `AddChild` | `public void AddChild(WidgetTemplate child)` | method |
| `RemoveChild` | `public void RemoveChild(WidgetTemplate child)` | method |
| `SwapChildren` | `public void SwapChildren(WidgetTemplate child1, WidgetTemplate child2)` | method |
| `Instantiate` | `public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate>parameters)` | method |
| `OnRelease` | `public void OnRelease()` | method |
| `LoadFrom` | `public static WidgetTemplate LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, XmlNode node)` | method |
| `SetRootTemplate` | `public void SetRootTemplate(WidgetPrefab prefab)` | method |
| `AddAttributeTo` | `public void AddAttributeTo(WidgetAttributeContext widgetAttributeContext, string name, string value)` | method |
| `RemoveAttributeFrom` | `public void RemoveAttributeFrom(WidgetAttributeContext widgetAttributeContext, string fullName)` | method |
| `RemoveAttributeFrom` | `public void RemoveAttributeFrom<T>(string name) where T : WidgetAttributeKeyType` | method |
| `RemoveAttributeFrom` | `public void RemoveAttributeFrom(WidgetAttributeKeyType keyType, string name)` | method |
| `Save` | `public void Save(PrefabExtensionContext prefabExtensionContext, XmlNode parentNode)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
