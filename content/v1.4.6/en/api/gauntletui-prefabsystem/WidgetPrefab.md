---
title: "WidgetPrefab"
description: "WidgetPrefab: a public class in TaleWorlds.GauntletUI.PrefabSystem; 13 exposed members (7 methods, 5 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs."
---
# WidgetPrefab

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetPrefab`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs`

## Overview

WidgetPrefab lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs. It is a public class; the inheritance chain is WidgetPrefab. It exposes 13 public/protected members: 7 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetPrefab is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetPrefab. The surface is method-led (methods 7/13, properties 5/13), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetPrefab.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `VisualDefinitionTemplate>VisualDefinitionTemplates` | `public Dictionary<string, VisualDefinitionTemplate>VisualDefinitionTemplates` | property |
| `ConstantDefinition>Constants` | `public Dictionary<string, ConstantDefinition>Constants` | property |
| `string>Parameters` | `public Dictionary<string, string>Parameters` | property |
| `XmlElement>CustomElements` | `public Dictionary<string, XmlElement>CustomElements` | property |
| `RootTemplate` | `public WidgetTemplate RootTemplate` | property |
| `WidgetPrefab` | `public WidgetPrefab()` | constructor |
| `LoadFrom` | `public static WidgetPrefab LoadFrom(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, string path)` | method |
| `Save` | `public XmlDocument Save(PrefabExtensionContext prefabExtensionContext)` | method |
| `Instantiate` | `public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData)` | method |
| `Instantiate` | `public WidgetInstantiationResult Instantiate(WidgetCreationData widgetCreationData, Dictionary<string, WidgetAttributeTemplate>parameters)` | method |
| `OnRelease` | `public void OnRelease()` | method |
| `GetConstantValue` | `public ConstantDefinition GetConstantValue(string name)` | method |
| `GetParameterDefaultValue` | `public string GetParameterDefaultValue(string name)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
