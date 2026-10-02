---
title: "GameMenuPartyItemButtonWidget"
description: "GameMenuPartyItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay, inheriting ButtonWidget; 16 exposed members (2 methods, 13 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuPartyItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuPartyItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameMenuPartyItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is GameMenuPartyItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 16 public/protected members: 2 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuPartyItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`, inheritance chain GameMenuPartyItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 13/16, methods 2/16), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PartyBackgroundBrush` | `public Brush PartyBackgroundBrush` | property |
| `CharacterBackgroundBrush` | `public Brush CharacterBackgroundBrush` | property |
| `BackgroundImageWidget` | `public ImageWidget BackgroundImageWidget` | property |
| `GameMenuPartyItemButtonWidget` | `public GameMenuPartyItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `Relation` | `public int Relation` | property |
| `Location` | `public string Location` | property |
| `Power` | `public string Power` | property |
| `Description` | `public string Description` | property |
| `Profession` | `public string Profession` | property |
| `Name` | `public string Name` | property |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy` | property |
| `IsPartyItem` | `public bool IsPartyItem` | property |
| `ContextMenu` | `public Widget ContextMenu` | property |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace ArmyOverlayWidget](../ArmyOverlayWidget/)
- [same namespace OverlayBaseWidget](../OverlayBaseWidget/)
- [same namespace OverlayPopupWidget](../OverlayPopupWidget/)
- [same namespace PowerLevelComparerWidget](../PowerLevelComparerWidget/)
