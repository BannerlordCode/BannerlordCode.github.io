---
title: "WidgetCreationData"
description: "WidgetCreationData: a public class in TaleWorlds.GauntletUI.PrefabSystem; 13 exposed members (4 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs."
---
# WidgetCreationData

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetCreationData`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs`

## Overview

WidgetCreationData lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs. It is a public class; the inheritance chain is WidgetCreationData. It exposes 13 public/protected members: 4 methods, 6 properties, 3 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetCreationData is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetCreationData. The surface is property-led (properties 6/13, methods 4/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetCreationData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Parent` | `public Widget Parent` | property |
| `Context` | `public UIContext Context` | property |
| `WidgetFactory` | `public WidgetFactory WidgetFactory` | property |
| `BrushFactory` | `public BrushFactory BrushFactory` | property |
| `SpriteData` | `public SpriteData SpriteData` | property |
| `PrefabExtensionContext` | `public PrefabExtensionContext PrefabExtensionContext` | property |
| `WidgetCreationData` | `public WidgetCreationData(UIContext context, WidgetFactory widgetFactory, Widget parent)` | constructor |
| `WidgetCreationData` | `public WidgetCreationData(UIContext context, WidgetFactory widgetFactory)` | constructor |
| `WidgetCreationData` | `public WidgetCreationData(WidgetCreationData widgetCreationData, WidgetInstantiationResult parentResult)` | constructor |
| `AddExtensionData` | `public void AddExtensionData(string name, object data)` | method |
| `GetExtensionData` | `public T GetExtensionData<T>(string name) where T : class` | method |
| `AddExtensionData` | `public void AddExtensionData(object data)` | method |
| `GetExtensionData` | `public T GetExtensionData<T>() where T : class` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
