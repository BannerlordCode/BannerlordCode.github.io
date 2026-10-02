---
title: "MaterialValueOffsetTextWidget"
description: "MaterialValueOffsetTextWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer, inheriting TextWidget; 5 exposed members (1 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MaterialValueOffsetTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MaterialValueOffsetTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MaterialValueOffsetTextWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is MaterialValueOffsetTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MaterialValueOffsetTextWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer`, inheritance chain MaterialValueOffsetTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/MaterialValueOffsetTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaterialValueOffsetTextWidget` | `public MaterialValueOffsetTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ValueOffset` | `public float ValueOffset` | property |
| `SaturationOffset` | `public float SaturationOffset` | property |
| `HueOffset` | `public float HueOffset` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextWidget](../../gui/TextWidget/)
- [same namespace MaterialValueOffsetImageWidget](../MaterialValueOffsetImageWidget/)
- [same namespace MultiplayerBattleResultColorizedWidget](../MultiplayerBattleResultColorizedWidget/)
- [same namespace MultiplayerEndOfBattleScreenWidget](../MultiplayerEndOfBattleScreenWidget/)
- [same namespace MultiplayerEndOfRoundPanelBrushWidget](../MultiplayerEndOfRoundPanelBrushWidget/)
