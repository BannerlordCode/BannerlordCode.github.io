---
title: "MultiplayerLobbyArmoryCosmeticItemButtonWidget"
description: "MultiplayerLobbyArmoryCosmeticItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory, inheriting ButtonWidget; 10 exposed members (3 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerLobbyArmoryCosmeticItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is MultiplayerLobbyArmoryCosmeticItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyArmoryCosmeticItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`, inheritance chain MultiplayerLobbyArmoryCosmeticItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MultiplayerLobbyArmoryCosmeticItemButtonWidget` | `public MultiplayerLobbyArmoryCosmeticItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `HandleAlternateClick` | `protected override void HandleAlternateClick()` | method |
| `ItemType` | `public int ItemType` | property |
| `IsUnlocked` | `public bool IsUnlocked` | property |
| `SelectableStateAnimationDuration` | `public float SelectableStateAnimationDuration` | property |
| `SelectableStateAlpha` | `public float SelectableStateAlpha` | property |
| `NonSelectableStateAlpha` | `public float NonSelectableStateAlpha` | property |
| `IsSelectable` | `public bool IsSelectable` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace MultiplayerArmoryCosmeticCategoryButtonWidget](../MultiplayerArmoryCosmeticCategoryButtonWidget/)
- [same namespace MultiplayerArmoryCosmeticsSectionWidget](../MultiplayerArmoryCosmeticsSectionWidget/)
- [same namespace MultiplayerArmoryPageWidget](../MultiplayerArmoryPageWidget/)
- [same namespace MultiplayerLobbyArmoryCosmeticItemBrushWidget](../MultiplayerLobbyArmoryCosmeticItemBrushWidget/)
