---
title: "PrefabExtension"
description: "PrefabExtension: a public class in TaleWorlds.GauntletUI.PrefabSystem; 7 exposed members (7 methods, 0 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs."
---
# PrefabExtension

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public abstract class PrefabExtension`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs`

## Overview

PrefabExtension lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs. It is a public class (abstract); the inheritance chain is PrefabExtension. It exposes 7 public/protected members: 7 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrefabExtension is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain PrefabExtension. The surface is method-led (methods 7/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/PrefabExtension.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterAttributeTypes` | `protected internal virtual void RegisterAttributeTypes(WidgetAttributeContext widgetAttributeContext)` | method |
| `OnWidgetCreated` | `protected internal virtual void OnWidgetCreated(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, int childCount)` | method |
| `OnSave` | `protected internal virtual void OnSave(PrefabExtensionContext prefabExtensionContext, XmlNode node, WidgetTemplate widgetTemplate)` | method |
| `OnAttributesSet` | `protected internal virtual void OnAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | method |
| `DoLoading` | `protected internal virtual void DoLoading(PrefabExtensionContext prefabExtensionContext, WidgetAttributeContext widgetAttributeContext, WidgetTemplate template, XmlNode node)` | method |
| `OnLoadingFinished` | `protected internal virtual void OnLoadingFinished(WidgetPrefab widgetPrefab)` | method |
| `AfterAttributesSet` | `protected internal virtual void AfterAttributesSet(WidgetCreationData widgetCreationData, WidgetInstantiationResult widgetInstantiationResult, Dictionary<string, WidgetAttributeTemplate>parameters)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
