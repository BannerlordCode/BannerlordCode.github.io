---
title: "DelayedStateChanger"
description: "DelayedStateChanger: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 11 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs."
---
# DelayedStateChanger

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class DelayedStateChanger : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`

## Overview

DelayedStateChanger lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is DelayedStateChanger → BrushWidget. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DelayedStateChanger is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain DelayedStateChanger → BrushWidget. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DelayedStateChanger` | `public DelayedStateChanger(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `Start` | `public void Start()` | method |
| `AutoStart` | `public bool AutoStart` | property |
| `Trigger` | `public bool Trigger` | property |
| `StateResetable` | `public bool StateResetable` | property |
| `IncludeChildren` | `public bool IncludeChildren` | property |
| `Delay` | `public float Delay` | property |
| `State` | `public string State` | property |
| `TargetWidget` | `public Widget TargetWidget` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
- [same namespace DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget)
