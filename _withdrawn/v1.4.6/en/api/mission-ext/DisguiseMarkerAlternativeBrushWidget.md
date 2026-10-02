---
title: "DisguiseMarkerAlternativeBrushWidget"
description: "DisguiseMarkerAlternativeBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission, inheriting BrushWidget; 11 exposed members (1 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisguiseMarkerAlternativeBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DisguiseMarkerAlternativeBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DisguiseMarkerAlternativeBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is DisguiseMarkerAlternativeBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisguiseMarkerAlternativeBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`, inheritance chain DisguiseMarkerAlternativeBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BackgroundGlowWidget` | `public Widget BackgroundGlowWidget` | property |
| `FrameWidget` | `public Widget FrameWidget` | property |
| `FillBarWidget` | `public Widget FillBarWidget` | property |
| `AlarmedHeight` | `public float AlarmedHeight` | property |
| `DefaultHeight` | `public float DefaultHeight` | property |
| `Position` | `public Vec2 Position` | property |
| `DisguiseMarkerAlternativeBrushWidget` | `public DisguiseMarkerAlternativeBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AlarmProgress` | `public int AlarmProgress` | property |
| `AlarmState` | `public string AlarmState` | property |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [same namespace AgentHealthWidget](../AgentHealthWidget/)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
