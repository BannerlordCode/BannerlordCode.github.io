---
title: "PowerLevelComparerWidget"
description: "PowerLevelComparerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay, inheriting Widget; 14 exposed members (1 methods, 12 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PowerLevelComparerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PowerLevelComparerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PowerLevelComparerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is PowerLevelComparerWidget → Widget → PropertyOwnerObject. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PowerLevelComparerWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`, inheritance chain PowerLevelComparerWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/PowerLevelComparerWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PowerLevelComparerWidget` | `public PowerLevelComparerWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsCenterSeperatorEnabled` | `public bool IsCenterSeperatorEnabled` | property |
| `CenterSpace` | `public float CenterSpace` | property |
| `DefenderPower` | `public double DefenderPower` | property |
| `AttackerPower` | `public double AttackerPower` | property |
| `InitialAttackerBattlePower` | `public double InitialAttackerBattlePower` | property |
| `InitialDefenderBattlePower` | `public double InitialDefenderBattlePower` | property |
| `AttackerPowerWidget` | `public Widget AttackerPowerWidget` | property |
| `DefenderPowerWidget` | `public Widget DefenderPowerWidget` | property |
| `PowerListPanel` | `public ListPanel PowerListPanel` | property |
| `AttackerPowerListPanel` | `public ListPanel AttackerPowerListPanel` | property |
| `DefenderPowerListPanel` | `public ListPanel DefenderPowerListPanel` | property |
| `CenterSeperatorWidget` | `public Widget CenterSeperatorWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ArmyOverlayWidget](../ArmyOverlayWidget/)
- [same namespace GameMenuPartyItemButtonWidget](../GameMenuPartyItemButtonWidget/)
- [same namespace OverlayBaseWidget](../OverlayBaseWidget/)
- [same namespace OverlayPopupWidget](../OverlayPopupWidget/)
