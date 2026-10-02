---
title: "WidgetExtensions"
description: "WidgetExtensions: a public class in TaleWorlds.GauntletUI.PrefabSystem; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs."
---
# WidgetExtensions

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public static class WidgetExtensions`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs`

## Overview

WidgetExtensions lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs. It is a public class; the inheritance chain is WidgetExtensions. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetExtensions is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetExtensions. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetExtensions.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SetWidgetAttributeFromString` | `public static void SetWidgetAttributeFromString(object target, string name, string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate>visualDefinitionTemplates, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, XmlElement>customElements, Dictionary<string, string>defaultParameters)` | method |
| `GetWidgetAttributeType` | `public static Type GetWidgetAttributeType(object target, string name)` | method |
| `SetWidgetAttribute` | `public static void SetWidgetAttribute(UIContext context, object target, string name, object value)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
