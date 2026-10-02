---
title: "TooltipProperty"
description: "TooltipProperty: a public class in TaleWorlds.Core.ViewModelCollection, inheriting ViewModel, ISerializableObject; 22 exposed members (4 methods, 8 properties, 0 fields). Source: TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs."
---
# TooltipProperty

**Namespace:** `TaleWorlds.Core.ViewModelCollection.Information`
**Module:** `TaleWorlds.Core.ViewModelCollection`
**Type:** `public class TooltipProperty : ViewModel, ISerializableObject`
**File:** `TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs`

## Overview

TooltipProperty lives in the TaleWorlds.Core.ViewModelCollection module, source file TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs. It is a public class, implementing/inheriting ViewModel, ISerializableObject; the inheritance chain is TooltipProperty → ViewModel. It exposes 22 public/protected members: 4 methods, 8 properties, 9 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TooltipProperty is a top-level type in TaleWorlds.Core.ViewModelCollection, namespace differing from (TaleWorlds.Core.ViewModelCollection.Information) the module directory; inheritance chain TooltipProperty → ViewModel. The surface is property-led (properties 8/22, methods 4/22), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core.ViewModelCollection/Information/TooltipProperty.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnlyShowWhenExtended` | `public bool OnlyShowWhenExtended` | property |
| `OnlyShowWhenNotExtended` | `public bool OnlyShowWhenNotExtended` | property |
| `TooltipProperty` | `public TooltipProperty()` | constructor |
| `RefreshValue` | `public void RefreshValue()` | method |
| `RefreshDefinition` | `public void RefreshDefinition()` | method |
| `TooltipProperty` | `public TooltipProperty(string definition, string value, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(string definition, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(Func<string>_definitionFunc, Func<string>_valueFunc, object[]valueArgs, int textHeight, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(string definition, string value, int textHeight, Color color, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(string definition, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(Func<string>_definitionFunc, Func<string>_valueFunc, int textHeight, Color color, bool onlyShowWhenExtended = false, TooltipProperty.TooltipPropertyFlags modifier = TooltipProperty.TooltipPropertyFlags.None)` | constructor |
| `TooltipProperty` | `public TooltipProperty(TooltipProperty property)` | constructor |
| `DeserializeFrom` | `public void DeserializeFrom(IReader reader)` | method |
| `SerializeTo` | `public void SerializeTo(IWriter writer)` | method |
| `TextHeight` | `public int TextHeight` | property |
| `TextColor` | `public Color TextColor` | property |
| `DefinitionLabel` | `public string DefinitionLabel` | property |
| `ValueLabel` | `public string ValueLabel` | property |
| `PropertyModifier` | `public int PropertyModifier` | property |
| `TooltipPropertyFlags` | `public enum TooltipPropertyFlags` | property |
| `TooltipPropertyFlags` | `public enum TooltipPropertyFlags` | nested type |

## See Also

- [↑ core-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BasicTooltipViewModel](../BasicTooltipViewModel)
- [same namespace GameNotificationItemVM](../GameNotificationItemVM)
- [same namespace GameNotificationVM](../GameNotificationVM)
- [same namespace HintViewModel](../HintViewModel)
