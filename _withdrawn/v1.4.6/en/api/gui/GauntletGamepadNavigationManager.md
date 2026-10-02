---
title: "GauntletGamepadNavigationManager"
description: "GauntletGamepadNavigationManager: a public class in TaleWorlds.GauntletUI.GamepadNavigation; 15 exposed members (6 methods, 9 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GauntletGamepadNavigationManager

**Namespace:** `TaleWorlds.GauntletUI.GamepadNavigation`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class GauntletGamepadNavigationManager`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

GauntletGamepadNavigationManager lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs. It is a public class; the inheritance chain is GauntletGamepadNavigationManager. It exposes 15 public/protected members: 6 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GauntletGamepadNavigationManager lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.GamepadNavigation`, inheritance chain GauntletGamepadNavigationManager. The surface is property-led (properties 9/15, methods 6/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GamepadNavigation/GauntletGamepadNavigationManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Instance` | `public static GauntletGamepadNavigationManager Instance` | property |
| `IsTouchpadMouseEnabled` | `public bool IsTouchpadMouseEnabled` | property |
| `IsFollowingMobileTarget` | `public bool IsFollowingMobileTarget` | property |
| `IsHoldingDpadKeysForNavigation` | `public bool IsHoldingDpadKeysForNavigation` | property |
| `IsCursorMovingForNavigation` | `public bool IsCursorMovingForNavigation` | property |
| `IsInWrapMovement` | `public bool IsInWrapMovement` | property |
| `LastTargetedWidget` | `public Widget LastTargetedWidget` | property |
| `TargetedWidgetHasAction` | `public bool TargetedWidgetHasAction` | property |
| `AnyWidgetUsingNavigation` | `public bool AnyWidgetUsingNavigation` | property |
| `Initialize` | `public static void Initialize()` | method |
| `TryNavigateTo` | `public bool TryNavigateTo(Widget widget)` | method |
| `TryNavigateTo` | `public bool TryNavigateTo(GamepadNavigationScope scope)` | method |
| `OnFinalize` | `public void OnFinalize()` | method |
| `Update` | `public void Update(float dt)` | method |
| `SetAllDirty` | `public void SetAllDirty()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GamepadNavigationForcedScopeCollection](../GamepadNavigationForcedScopeCollection/)
- [same namespace GamepadNavigationScope](../GamepadNavigationScope/)
- [same namespace GamepadNavigationTypes](../GamepadNavigationTypes/)
