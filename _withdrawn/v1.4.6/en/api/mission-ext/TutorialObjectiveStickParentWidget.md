---
title: "TutorialObjectiveStickParentWidget"
description: "TutorialObjectiveStickParentWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial, inheriting TextWidget; 7 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialObjectiveStickParentWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialObjectiveStickParentWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TutorialObjectiveStickParentWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is TutorialObjectiveStickParentWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 1 methods, 3 properties, 1 constructors, 2 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialObjectiveStickParentWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`, inheritance chain TutorialObjectiveStickParentWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialObjectiveStickParentWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StickMiddle` | `public Widget StickMiddle` | property |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `TutorialObjectiveStickParentWidget` | `public TutorialObjectiveStickParentWidget(UIContext context) : base(context)` | constructor |
| `MovementType` | `public int MovementType` | property |
| `StickAnimStage` | `public class StickAnimStage` | property |
| `StickAnimStage` | `public class StickAnimStage` | nested type |
| `AnimTypes` | `public enum AnimTypes` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextWidget](../../gui/TextWidget/)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget/)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget/)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget/)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget/)
