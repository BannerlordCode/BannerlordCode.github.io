---
title: "OptionsGamepadOptionItemListPanel"
description: "OptionsGamepadOptionItemListPanel: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad, inheriting ListPanel; 8 exposed members (2 methods, 3 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# OptionsGamepadOptionItemListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class OptionsGamepadOptionItemListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

OptionsGamepadOptionItemListPanel lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs. It is a public class, implementing/inheriting ListPanel; the inheritance chain is OptionsGamepadOptionItemListPanel → ListPanel → Container → Widget → PropertyOwnerObject. It exposes 8 public/protected members: 2 methods, 3 properties, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: OptionsGamepadOptionItemListPanel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad`, inheritance chain OptionsGamepadOptionItemListPanel → ListPanel → Container → Widget → PropertyOwnerObject. The surface is property-led (properties 3/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadOptionItemListPanel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnActionTextChanged;` | `public event OptionsGamepadOptionItemListPanel.OnActionTextChangeEvent OnActionTextChanged;` | event |
| `TargetKey` | `public OptionsGamepadKeyLocationWidget TargetKey` | property |
| `ActionText` | `public string ActionText` | property |
| `OptionsGamepadOptionItemListPanel` | `public OptionsGamepadOptionItemListPanel(UIContext context) : base(context)` | constructor |
| `SetKeyProperties` | `public void SetKeyProperties(OptionsGamepadKeyLocationWidget currentTarget, Widget parentAreaWidget)` | method |
| `KeyId` | `public int KeyId` | property |
| `OnActionTextChangeEvent` | `public delegate void OnActionTextChangeEvent();` | method |
| `OnActionTextChangeEvent` | `public delegate void OnActionTextChangeEvent()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ListPanel](../../gui/ListPanel/)
- [same namespace OptionsGamepadCategoryWidget](../OptionsGamepadCategoryWidget/)
- [same namespace OptionsGamepadKeyLocationWidget](../OptionsGamepadKeyLocationWidget/)
- [same namespace OptionsGamepadVisualWidget](../OptionsGamepadVisualWidget/)
