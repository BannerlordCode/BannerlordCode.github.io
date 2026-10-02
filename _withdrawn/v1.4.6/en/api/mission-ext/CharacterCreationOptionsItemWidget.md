---
title: "CharacterCreationOptionsItemWidget"
description: "CharacterCreationOptionsItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options, inheriting Widget; 8 exposed members (2 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CharacterCreationOptionsItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CharacterCreationOptionsItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CharacterCreationOptionsItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CharacterCreationOptionsItemWidget → Widget → PropertyOwnerObject. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterCreationOptionsItemWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Options`, inheritance chain CharacterCreationOptionsItemWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Options/CharacterCreationOptionsItemWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CharacterCreationOptionsItemWidget` | `public CharacterCreationOptionsItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnGamepadNavigationIndexUpdated` | `protected override void OnGamepadNavigationIndexUpdated(int newIndex)` | method |
| `Type` | `public int Type` | property |
| `ActionOptionWidget` | `public Widget ActionOptionWidget` | property |
| `NumericOptionWidget` | `public Widget NumericOptionWidget` | property |
| `SelectionOptionWidget` | `public Widget SelectionOptionWidget` | property |
| `BooleanOptionWidget` | `public Widget BooleanOptionWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
