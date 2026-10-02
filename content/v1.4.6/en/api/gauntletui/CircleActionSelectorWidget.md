---
title: "CircleActionSelectorWidget"
description: "CircleActionSelectorWidget: a public class in TaleWorlds.GauntletUI, inheriting Widget; 13 exposed members (5 methods, 7 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs."
---
# CircleActionSelectorWidget

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class CircleActionSelectorWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs`

## Overview

CircleActionSelectorWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CircleActionSelectorWidget → Widget → PropertyOwnerObject. It exposes 13 public/protected members: 5 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CircleActionSelectorWidget is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain CircleActionSelectorWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/13, methods 5/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleActionSelectorWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CircleActionSelectorWidget` | `public CircleActionSelectorWidget(UIContext context) : base(context)` | constructor |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnimateDistanceFromCenterTo` | `public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)` | method |
| `TrySetSelectedIndex` | `public bool TrySetSelectedIndex(int index)` | method |
| `OnSelectedIndexChanged` | `protected virtual void OnSelectedIndexChanged(int selectedIndex)` | method |
| `AllowInvalidSelection` | `public bool AllowInvalidSelection` | property |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController` | property |
| `IsCircularInputEnabled` | `public bool IsCircularInputEnabled` | property |
| `IsCircularInputDisabled` | `public bool IsCircularInputDisabled` | property |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier` | property |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier` | property |
| `DirectionWidget` | `public Widget DirectionWidget` | property |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
