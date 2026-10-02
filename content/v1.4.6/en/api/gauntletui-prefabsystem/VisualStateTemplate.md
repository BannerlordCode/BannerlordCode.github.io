---
title: "VisualStateTemplate"
description: "VisualStateTemplate: a public class in TaleWorlds.GauntletUI.PrefabSystem; 6 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs."
---
# VisualStateTemplate

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class VisualStateTemplate`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs`

## Overview

VisualStateTemplate lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs. It is a public class; the inheritance chain is VisualStateTemplate. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualStateTemplate is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain VisualStateTemplate. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/VisualStateTemplate.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `public string State` | property |
| `VisualStateTemplate` | `public VisualStateTemplate()` | constructor |
| `SetAttribute` | `public void SetAttribute(string name, string value)` | method |
| `string>GetAttributes` | `public Dictionary<string, string>GetAttributes()` | method |
| `ClearAttribute` | `public void ClearAttribute(string name)` | method |
| `CreateVisualState` | `public VisualState CreateVisualState(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate>visualDefinitionTemplates, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
