---
title: "LauncherBoolBrushWidget"
description: "LauncherBoolBrushWidget: a public class in TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets, inheriting BrushWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# LauncherBoolBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`
**Module:** `TaleWorlds.MountAndBlade.Launcher.Library`
**Type:** `public class LauncherBoolBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

LauncherBoolBrushWidget lives in the TaleWorlds.MountAndBlade.Launcher.Library module, source file TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is LauncherBoolBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LauncherBoolBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Launcher.Library.CustomWidgets`, inheritance chain LauncherBoolBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Launcher.Library/CustomWidgets/LauncherBoolBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LauncherBoolBrushWidget` | `public LauncherBoolBrushWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `BoolVariable` | `public bool BoolVariable` | property |
| `TargetWidget` | `public BrushWidget TargetWidget` | property |
| `OnTrueBrush` | `public Brush OnTrueBrush` | property |
| `OnFalseBrush` | `public Brush OnFalseBrush` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace LauncherCircleLoadingAnimWidget](../LauncherCircleLoadingAnimWidget/)
- [same namespace LauncherDragWindowAreaWidget](../LauncherDragWindowAreaWidget/)
- [same namespace LauncherHintTriggerWidget](../LauncherHintTriggerWidget/)
- [same namespace LauncherHintWidget](../LauncherHintWidget/)
