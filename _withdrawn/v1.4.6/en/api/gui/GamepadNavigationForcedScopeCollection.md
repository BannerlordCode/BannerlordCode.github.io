---
title: "GamepadNavigationForcedScopeCollection"
description: "GamepadNavigationForcedScopeCollection: a public class in TaleWorlds.GauntletUI.GamepadNavigation; 14 exposed members (5 methods, 8 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GamepadNavigationForcedScopeCollection

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GamepadNavigationForcedScopeCollection`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

GamepadNavigationForcedScopeCollection lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs. It is a public class; the inheritance chain is GamepadNavigationForcedScopeCollection. It exposes 14 public/protected members: 5 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GamepadNavigationForcedScopeCollection lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.GamepadNavigation`, inheritance chain GamepadNavigationForcedScopeCollection. The surface is property-led (properties 8/14, methods 5/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GamepadNavigationForcedScopeCollection.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsEnabled` | `public bool IsEnabled` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `CollectionID` | `public string CollectionID` | property |
| `CollectionOrder` | `public int CollectionOrder` | property |
| `ParentWidget` | `public Widget ParentWidget` | property |
| `List` | `public List<GamepadNavigationScope>Scopes` | property |
| `ActiveScope` | `public GamepadNavigationScope ActiveScope` | property |
| `PreviousScope` | `public GamepadNavigationScope PreviousScope` | property |
| `GamepadNavigationForcedScopeCollection` | `public GamepadNavigationForcedScopeCollection()` | constructor |
| `IsAvailable` | `public bool IsAvailable()` | method |
| `AddScope` | `public void AddScope(GamepadNavigationScope scope)` | method |
| `RemoveScope` | `public void RemoveScope(GamepadNavigationScope scope)` | method |
| `ClearScopes` | `public void ClearScopes()` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GamepadNavigationScope](../GamepadNavigationScope/)
- [same namespace GamepadNavigationTypes](../GamepadNavigationTypes/)
- [same namespace GauntletGamepadNavigationManager](../GauntletGamepadNavigationManager/)
