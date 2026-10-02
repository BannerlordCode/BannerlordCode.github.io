---
title: "MoraleWidget"
description: "MoraleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD, inheriting Widget; 16 exposed members (3 methods, 12 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MoraleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MoraleWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MoraleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MoraleWidget → Widget → PropertyOwnerObject. It exposes 16 public/protected members: 3 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MoraleWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD`, inheritance chain MoraleWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 12/16, methods 3/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MoraleWidget` | `public MoraleWidget(UIContext context) : base(context)` | constructor |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IncreaseLevel` | `public int IncreaseLevel` | property |
| `MoralePercentage` | `public int MoralePercentage` | property |
| `Container` | `public Widget Container` | property |
| `ItemContainer` | `public Widget ItemContainer` | property |
| `ItemBrush` | `public Brush ItemBrush` | property |
| `ItemGlowBrush` | `public Brush ItemGlowBrush` | property |
| `ItemBackgroundBrush` | `public Brush ItemBackgroundBrush` | property |
| `TeamColorAsStr` | `public string TeamColorAsStr` | property |
| `TeamColorAsStrSecondary` | `public string TeamColorAsStrSecondary` | property |
| `FlowArrowWidget` | `public MoraleArrowBrushWidget FlowArrowWidget` | property |
| `ExtendToLeft` | `public bool ExtendToLeft` | property |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DuelArenaFlagVisualBrushWidget](../DuelArenaFlagVisualBrushWidget/)
- [same namespace HUDExtensionBrushWidget](../HUDExtensionBrushWidget/)
- [same namespace MoraleArrowBrushWidget](../MoraleArrowBrushWidget/)
- [same namespace MultiplayerDeathCardWidget](../MultiplayerDeathCardWidget/)
