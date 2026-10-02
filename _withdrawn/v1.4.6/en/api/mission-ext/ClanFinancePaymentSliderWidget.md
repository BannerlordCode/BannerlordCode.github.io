---
title: "ClanFinancePaymentSliderWidget"
description: "ClanFinancePaymentSliderWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan, inheriting SliderWidget; 9 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClanFinancePaymentSliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ClanFinancePaymentSliderWidget : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ClanFinancePaymentSliderWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is ClanFinancePaymentSliderWidget → SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClanFinancePaymentSliderWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan`, inheritance chain ClanFinancePaymentSliderWidget → SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanFinancePaymentSliderWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ClanFinancePaymentSliderWidget` | `public ClanFinancePaymentSliderWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `InitialFillWidget` | `public Widget InitialFillWidget` | property |
| `NewIncreaseFillWidget` | `public Widget NewIncreaseFillWidget` | property |
| `NewDecreaseFillWidget` | `public Widget NewDecreaseFillWidget` | property |
| `CurrentRatioIndicatorWidget` | `public Widget CurrentRatioIndicatorWidget` | property |
| `CurrentSize` | `public int CurrentSize` | property |
| `TargetSize` | `public int TargetSize` | property |
| `SizeLimit` | `public int SizeLimit` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SliderWidget](../../gui/SliderWidget/)
- [same namespace ClanFinanceTextWidget](../ClanFinanceTextWidget/)
- [same namespace ClanLordStatusWidget](../ClanLordStatusWidget/)
- [same namespace ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget/)
- [same namespace ClanPartyRoleSelectionToggleWidget](../ClanPartyRoleSelectionToggleWidget/)
