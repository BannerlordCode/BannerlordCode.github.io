---
title: "WidgetAttributeContext"
description: "WidgetAttributeContext: a public class in TaleWorlds.GauntletUI.PrefabSystem; 7 exposed members (4 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs."
---
# WidgetAttributeContext

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class WidgetAttributeContext`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs`

## Overview

WidgetAttributeContext lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs. It is a public class; the inheritance chain is WidgetAttributeContext. It exposes 7 public/protected members: 4 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WidgetAttributeContext is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain WidgetAttributeContext. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/WidgetAttributeContext.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<WidgetAttributeKeyType>RegisteredKeyTypes` | property |
| `IEnumerable` | `public IEnumerable<WidgetAttributeValueType>RegisteredValueTypes` | property |
| `WidgetAttributeContext` | `public WidgetAttributeContext()` | constructor |
| `RegisterKeyType` | `public void RegisterKeyType(WidgetAttributeKeyType keyType)` | method |
| `RegisterValueType` | `public void RegisterValueType(WidgetAttributeValueType valueType)` | method |
| `GetKeyType` | `public WidgetAttributeKeyType GetKeyType(string key)` | method |
| `GetValueType` | `public WidgetAttributeValueType GetValueType(string value)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
