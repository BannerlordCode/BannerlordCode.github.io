---
title: "ConstantDefinition"
description: "ConstantDefinition: a public class in TaleWorlds.GauntletUI.PrefabSystem; 15 exposed members (2 methods, 12 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs."
---
# ConstantDefinition

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class ConstantDefinition`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs`

## Overview

ConstantDefinition lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs. It is a public class; the inheritance chain is ConstantDefinition. It exposes 15 public/protected members: 2 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConstantDefinition is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain ConstantDefinition. The surface is property-led (properties 12/15, methods 2/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/ConstantDefinition.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `Value` | `public string Value` | property |
| `SpriteName` | `public string SpriteName` | property |
| `BrushName` | `public string BrushName` | property |
| `LayerName` | `public string LayerName` | property |
| `Additive` | `public string Additive` | property |
| `Prefix` | `public string Prefix` | property |
| `Suffix` | `public string Suffix` | property |
| `MultiplyResult` | `public float MultiplyResult` | property |
| `OnTrueValue` | `public string OnTrueValue` | property |
| `OnFalseValue` | `public string OnFalseValue` | property |
| `Type` | `public ConstantDefinitionType Type` | property |
| `ConstantDefinition` | `public ConstantDefinition(string name)` | constructor |
| `GetValue` | `public string GetValue(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | method |
| `GetActualValueOf` | `public static string GetActualValueOf(string value, BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
- [same namespace GeneratedPrefabContext](../GeneratedPrefabContext)
