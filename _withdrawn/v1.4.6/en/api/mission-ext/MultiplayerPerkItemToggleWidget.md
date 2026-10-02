---
title: "MultiplayerPerkItemToggleWidget"
description: "MultiplayerPerkItemToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks, inheriting ToggleButtonWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerPerkItemToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerPerkItemToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerPerkItemToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs. It is a public class, implementing/inheriting ToggleButtonWidget; the inheritance chain is MultiplayerPerkItemToggleWidget → ToggleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPerkItemToggleWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Perks`, inheritance chain MultiplayerPerkItemToggleWidget → ToggleButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Perks/MultiplayerPerkItemToggleWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerPerkItemToggleWidget` | `public MultiplayerPerkItemToggleWidget(UIContext context) : base(context)` | constructor |
| `HandleClick` | `protected override void HandleClick()` | method |
| `IconType` | `public string IconType` | property |
| `IconWidget` | `public BrushWidget IconWidget` | property |
| `IsSelectable` | `public bool IsSelectable` | property |
| `ContainerPanel` | `public MultiplayerPerkContainerPanelWidget ContainerPanel` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ToggleButtonWidget](../ToggleButtonWidget/)
- [same namespace MultiplayerPerkContainerPanelWidget](../MultiplayerPerkContainerPanelWidget/)
- [same namespace MultiplayerPerkPopupWidget](../MultiplayerPerkPopupWidget/)
