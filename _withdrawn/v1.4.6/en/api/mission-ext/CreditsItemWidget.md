---
title: "CreditsItemWidget"
description: "CreditsItemWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits, inheriting Widget; 8 exposed members (1 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsItemWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CreditsItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CreditsItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CreditsItemWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsItemWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CreditsItemWidget → Widget → PropertyOwnerObject. It exposes 8 public/protected members: 1 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CreditsItemWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits`, inheritance chain CreditsItemWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 6/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsItemWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CreditsItemWidget` | `public CreditsItemWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ItemType` | `public string ItemType` | property |
| `CategoryWidget` | `public Widget CategoryWidget` | property |
| `ImageWidget` | `public Widget ImageWidget` | property |
| `SectionWidget` | `public Widget SectionWidget` | property |
| `EntryWidget` | `public Widget EntryWidget` | property |
| `EmptyLineWidget` | `public Widget EmptyLineWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CreditsTextWidget](../CreditsTextWidget/)
- [same namespace CreditsWidget](../CreditsWidget/)
