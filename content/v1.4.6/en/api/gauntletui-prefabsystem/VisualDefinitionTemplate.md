---
title: "VisualDefinitionTemplate"
description: "VisualDefinitionTemplate: a public class in TaleWorlds.GauntletUI.PrefabSystem; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs."
---
# VisualDefinitionTemplate

**Namespace:** `TaleWorlds.GauntletUI.PrefabSystem`
**Module:** `TaleWorlds.GauntletUI.PrefabSystem`
**Type:** `public class VisualDefinitionTemplate`
**File:** `TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs`

## Overview

VisualDefinitionTemplate lives in the TaleWorlds.GauntletUI.PrefabSystem module, source file TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs. It is a public class; the inheritance chain is VisualDefinitionTemplate. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VisualDefinitionTemplate is a top-level type in TaleWorlds.GauntletUI.PrefabSystem, namespace matching the module directory; inheritance chain VisualDefinitionTemplate. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.PrefabSystem/VisualDefinitionTemplate.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `TransitionDuration` | `public float TransitionDuration` | property |
| `DelayOnBegin` | `public float DelayOnBegin` | property |
| `EaseType` | `public AnimationInterpolation.Type EaseType` | property |
| `EaseFunction` | `public AnimationInterpolation.Function EaseFunction` | property |
| `VisualStateTemplate>VisualStates` | `public Dictionary<string, VisualStateTemplate>VisualStates` | property |
| `VisualDefinitionTemplate` | `public VisualDefinitionTemplate()` | constructor |
| `AddVisualState` | `public void AddVisualState(VisualStateTemplate visualState)` | method |
| `CreateVisualDefinition` | `public VisualDefinition CreateVisualDefinition(BrushFactory brushFactory, SpriteData spriteData, Dictionary<string, VisualDefinitionTemplate>visualDefinitionTemplates, Dictionary<string, ConstantDefinition>constants, Dictionary<string, WidgetAttributeTemplate>parameters, Dictionary<string, string>defaultParameters)` | method |

## See Also

- [↑ gauntletui-prefabsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConstantDefinition](../ConstantDefinition)
- [same namespace ConstantDefinitionType](../ConstantDefinitionType)
- [same namespace CreateGeneratedWidget](../CreateGeneratedWidget)
- [same namespace CustomWidgetType](../CustomWidgetType)
