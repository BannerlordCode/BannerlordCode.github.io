---
title: "DelayedStateChanger"
description: "DelayedStateChanger: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 11 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DelayedStateChanger

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class DelayedStateChanger : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

DelayedStateChanger lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is DelayedStateChanger → BrushWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DelayedStateChanger lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain DelayedStateChanger → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/DelayedStateChanger.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../BrushWidget/)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
- [same namespace DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget/)
