---
title: "ScrollbarWidget"
description: "ScrollbarWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting ImageWidget; 16 exposed members (4 methods, 11 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScrollbarWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ScrollbarWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

ScrollbarWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs. It is a public class, implementing/inheriting ImageWidget; the inheritance chain is ScrollbarWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 16 public/protected members: 4 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScrollbarWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain ScrollbarWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 11/16, methods 4/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollbarWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsDiscrete` | `public bool IsDiscrete` | property |
| `Locked` | `public bool Locked` | property |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis` | property |
| `ReverseDirection` | `public bool ReverseDirection` | property |
| `ValueFloat` | `public float ValueFloat` | property |
| `ValueInt` | `public int ValueInt` | property |
| `MinValue` | `public float MinValue` | property |
| `MaxValue` | `public float MaxValue` | property |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize` | property |
| `Handle` | `public Widget Handle` | property |
| `ScrollbarArea` | `public Widget ScrollbarArea` | property |
| `ScrollbarWidget` | `public ScrollbarWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | method |
| `SetValueForced` | `public void SetValueForced(float value)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ImageWidget](../ImageWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
