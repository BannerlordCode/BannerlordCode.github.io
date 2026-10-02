---
title: "WidgetInstantiationResult"
description: "WidgetInstantiationResult: a public class in TaleWorlds.GauntletUI.PrefabSystem; 11 exposed members (5 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs."
---
# WidgetInstantiationResult

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetInstantiationResult`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs`

## Overview

WidgetInstantiationResult lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs. It is a public class; the inheritance chain is WidgetInstantiationResult. It exposes 11 public/protected members: 5 methods, 4 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetInstantiationResult is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetInstantiationResult. The surface is method-led (methods 5/11, properties 4/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetInstantiationResult.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Widget` | `public Widget Widget` | property |
| `Template` | `public WidgetTemplate Template` | property |
| `CustomWidgetInstantiationData` | `public WidgetInstantiationResult CustomWidgetInstantiationData` | property |
| `List` | `public List<WidgetInstantiationResult>Children` | property |
| `WidgetInstantiationResult` | `public WidgetInstantiationResult(Widget widget, WidgetTemplate widgetTemplate, WidgetInstantiationResult customWidgetInstantiationData)` | constructor |
| `AddExtensionData` | `public void AddExtensionData(string name, object data, bool passToChildWidgetCreation = false)` | method |
| `GetExtensionData` | `public T GetExtensionData<T>(string name)` | method |
| `AddExtensionData` | `public void AddExtensionData(object data, bool passToChildWidgetCreation = false)` | method |
| `GetExtensionData` | `public T GetExtensionData<T>() where T : class` | method |
| `WidgetInstantiationResult` | `public WidgetInstantiationResult(Widget widget, WidgetTemplate widgetTemplate) : this(widget, widgetTemplate, null)` | constructor |
| `GetLogicalOrDefaultChildrenLocation` | `public WidgetInstantiationResult GetLogicalOrDefaultChildrenLocation()` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
