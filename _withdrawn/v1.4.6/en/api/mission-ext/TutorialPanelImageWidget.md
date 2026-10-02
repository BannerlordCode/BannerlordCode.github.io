---
title: "TutorialPanelImageWidget"
description: "TutorialPanelImageWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial, inheriting ImageWidget; 7 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialPanelImageWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TutorialPanelImageWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TutorialPanelImageWidget : ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialPanelImageWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TutorialPanelImageWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialPanelImageWidget.cs. It is a public class, implementing/inheriting ImageWidget; the inheritance chain is TutorialPanelImageWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 3 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TutorialPanelImageWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tutorial`, inheritance chain TutorialPanelImageWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 3/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tutorial/TutorialPanelImageWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TutorialPanelImageWidget` | `public TutorialPanelImageWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `TutorialPanel` | `public BrushListPanel TutorialPanel` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ImageWidget](../../gui/ImageWidget/)
- [same namespace ElementNotificationWidget](../ElementNotificationWidget/)
- [same namespace TutorialArrowWidget](../TutorialArrowWidget/)
- [same namespace TutorialDirectionArrowWidget](../TutorialDirectionArrowWidget/)
- [same namespace TutorialHighlightItemBrushWidget](../TutorialHighlightItemBrushWidget/)
