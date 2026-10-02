---
title: "PropertyOwnerObject"
description: "PropertyOwnerObject: a public class in TaleWorlds.GauntletUI; 18 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs."
---
# PropertyOwnerObject

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class PropertyOwnerObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs`

## Overview

PropertyOwnerObject lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs. It is a public class; the inheritance chain is PropertyOwnerObject. It exposes 18 public/protected members: 9 methods, 9 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PropertyOwnerObject is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain PropertyOwnerObject. The surface is method-led (methods 9/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/PropertyOwnerObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnPropertyChanged` | `protected void OnPropertyChanged<T>(T value, [CallerMemberName]string propertyName = null) where T : class` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(int value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(float value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(bool value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(Vec2 value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(Vector2 value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(double value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(uint value, [CallerMemberName]string propertyName = null)` | method |
| `OnPropertyChanged` | `protected void OnPropertyChanged(Color value, [CallerMemberName]string propertyName = null)` | method |
| `object>PropertyChanged;` | `public event Action<PropertyOwnerObject, string, object>PropertyChanged;` | event |
| `bool>boolPropertyChanged;` | `public event Action<PropertyOwnerObject, string, bool>boolPropertyChanged;` | event |
| `int>intPropertyChanged;` | `public event Action<PropertyOwnerObject, string, int>intPropertyChanged;` | event |
| `float>floatPropertyChanged;` | `public event Action<PropertyOwnerObject, string, float>floatPropertyChanged;` | event |
| `Vec2>Vec2PropertyChanged;` | `public event Action<PropertyOwnerObject, string, Vec2>Vec2PropertyChanged;` | event |
| `Vector2>Vector2PropertyChanged;` | `public event Action<PropertyOwnerObject, string, Vector2>Vector2PropertyChanged;` | event |
| `double>doublePropertyChanged;` | `public event Action<PropertyOwnerObject, string, double>doublePropertyChanged;` | event |
| `uint>uintPropertyChanged;` | `public event Action<PropertyOwnerObject, string, uint>uintPropertyChanged;` | event |
| `Color>ColorPropertyChanged;` | `public event Action<PropertyOwnerObject, string, Color>ColorPropertyChanged;` | event |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
