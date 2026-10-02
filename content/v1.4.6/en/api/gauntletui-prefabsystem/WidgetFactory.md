---
title: "WidgetFactory"
description: "WidgetFactory: a public class in TaleWorlds.GauntletUI.PrefabSystem; 17 exposed members (12 methods, 3 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs."
---
# WidgetFactory

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetFactory`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs`

## Overview

WidgetFactory lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs. It is a public class; the inheritance chain is WidgetFactory. It exposes 17 public/protected members: 12 methods, 3 properties, 1 events, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetFactory is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetFactory. The surface is method-led (methods 12/17, properties 3/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetFactory.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext` | property |
| `WidgetAttributeContext` | `public WidgetAttributeContext WidgetAttributeContext` | property |
| `GeneratedPrefabContext` | `public GeneratedPrefabContext GeneratedPrefabContext` | property |
| `WidgetFactory` | `public WidgetFactory(ResourceDepot resourceDepot, string resourceFolder)` | constructor |
| `Initialize` | `public void Initialize(List<string>assemblyOrder = null)` | method |
| `AddCustomType` | `public void AddCustomType(string name, string path)` | method |
| `IEnumerable` | `public IEnumerable<string>GetPrefabNames()` | method |
| `IEnumerable` | `public IEnumerable<string>GetWidgetTypes()` | method |
| `IsBuiltinType` | `public bool IsBuiltinType(string name)` | method |
| `GetBuiltinType` | `public Type GetBuiltinType(string name)` | method |
| `IsCustomType` | `public bool IsCustomType(string typeName)` | method |
| `GetCustomTypePath` | `public string GetCustomTypePath(string name)` | method |
| `CreateBuiltinWidget` | `public Widget CreateBuiltinWidget(UIContext context, string typeName)` | method |
| `GetCustomType` | `public WidgetPrefab GetCustomType(string typeName)` | method |
| `OnUnload` | `public void OnUnload(string typeName)` | method |
| `CheckForUpdates` | `public void CheckForUpdates()` | method |
| `PrefabChange;` | `public event Action PrefabChange;` | event |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
