---
title: "IntegerInputTextWidget"
description: "IntegerInputTextWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting EditableTextWidget; 9 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IntegerInputTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class IntegerInputTextWidget : EditableTextWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

IntegerInputTextWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs. It is a public class, implementing/inheriting EditableTextWidget; the inheritance chain is IntegerInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IntegerInputTextWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain IntegerInputTextWidget → EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/IntegerInputTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EnableClamp` | `public bool EnableClamp` | property |
| `UpdateValueOnDone` | `public bool UpdateValueOnDone` | property |
| `IntegerInputTextWidget` | `public IntegerInputTextWidget(UIContext context) : base(context)` | constructor |
| `HandleInput` | `public override void HandleInput(IReadOnlyList<int>lastKeysPressed)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetAllText` | `public override void SetAllText(string text)` | method |
| `IntText` | `public int IntText` | property |
| `MaxInt` | `public int MaxInt` | property |
| `MinInt` | `public int MinInt` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface EditableTextWidget](../EditableTextWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
