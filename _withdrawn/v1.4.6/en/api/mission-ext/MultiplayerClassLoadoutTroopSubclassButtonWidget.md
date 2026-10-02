---
title: "MultiplayerClassLoadoutTroopSubclassButtonWidget"
description: "MultiplayerClassLoadoutTroopSubclassButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout, inheriting ButtonWidget; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerClassLoadoutTroopSubclassButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerClassLoadoutTroopSubclassButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerClassLoadoutTroopSubclassButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is MultiplayerClassLoadoutTroopSubclassButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerClassLoadoutTroopSubclassButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.ClassLoadout`, inheritance chain MultiplayerClassLoadoutTroopSubclassButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/ClassLoadout/MultiplayerClassLoadoutTroopSubclassButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerClassLoadoutTroopSubclassButtonWidget` | `public MultiplayerClassLoadoutTroopSubclassButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SetState` | `public override void SetState(string stateName)` | method |
| `TroopType` | `public string TroopType` | property |
| `IconBrush` | `public Brush IconBrush` | property |
| `IconWidget` | `public BrushWidget IconWidget` | property |
| `PerksNavigationScopeTargeter` | `public NavigationScopeTargeter PerksNavigationScopeTargeter` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace ClassLoadoutAlternativeUsageItemTabButtonWidget](../ClassLoadoutAlternativeUsageItemTabButtonWidget/)
- [same namespace ClassLoadoutTroopTupleCultureColorBrushWidget](../ClassLoadoutTroopTupleCultureColorBrushWidget/)
- [same namespace MultiplayerClassLoadoutItemTabControllerButtonWidget](../MultiplayerClassLoadoutItemTabControllerButtonWidget/)
- [same namespace MultiplayerClassLoadoutItemTabListPanel](../MultiplayerClassLoadoutItemTabListPanel/)
