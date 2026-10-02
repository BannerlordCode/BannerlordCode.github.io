---
title: "EventManager"
description: "EventManager: a public class in TaleWorlds.GauntletUI; 37 exposed members (8 methods, 25 properties, 1 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EventManager

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class EventManager`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

EventManager lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs. It is a public class; the inheritance chain is EventManager. It exposes 37 public/protected members: 8 methods, 25 properties, 1 fields, 3 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EventManager lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain EventManager. The surface is property-led (properties 25/37, methods 8/37), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/EventManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Time` | `public float Time` | property |
| `UsableArea` | `public Vec2 UsableArea` | property |
| `LeftUsableAreaStart` | `public float LeftUsableAreaStart` | property |
| `TopUsableAreaStart` | `public float TopUsableAreaStart` | property |
| `PageSize` | `public Vector2 PageSize` | property |
| `UIEventManager` | `public static EventManager UIEventManager` | property |
| `MousePositionInReferenceResolution` | `public Vector2 MousePositionInReferenceResolution` | property |
| `IsControllerActive` | `public bool IsControllerActive` | property |
| `Context` | `public UIContext Context` | property |
| `OnDragStarted;` | `public event Action OnDragStarted;` | event |
| `OnDragEnded;` | `public event Action OnDragEnded;` | event |
| `Root` | `public Widget Root` | property |
| `FocusedWidget` | `public Widget FocusedWidget` | property |
| `HoveredWidget` | `public Widget HoveredWidget` | property |
| `List` | `public List<Widget>MouseOveredWidgets` | property |
| `DragHoveredWidget` | `public Widget DragHoveredWidget` | property |
| `DraggedWidget` | `public Widget DraggedWidget` | property |
| `DraggedWidgetPosition` | `public Vector2 DraggedWidgetPosition` | property |
| `LatestMouseDownWidget` | `public Widget LatestMouseDownWidget` | property |
| `LatestMouseUpWidget` | `public Widget LatestMouseUpWidget` | property |
| `LatestMouseAlternateDownWidget` | `public Widget LatestMouseAlternateDownWidget` | property |
| `LatestMouseAlternateUpWidget` | `public Widget LatestMouseAlternateUpWidget` | property |
| `MousePosition` | `public Vector2 MousePosition` | property |
| `LocalFrameNumber` | `public ulong LocalFrameNumber` | property |
| `DeltaMouseScroll` | `public float DeltaMouseScroll` | property |
| `RightStickVerticalScrollAmount` | `public float RightStickVerticalScrollAmount` | property |
| `RightStickHorizontalScrollAmount` | `public float RightStickHorizontalScrollAmount` | property |
| `AddAfterFinalizedCallback` | `public void AddAfterFinalizedCallback(Action callback)` | method |
| `ClearFocus` | `public void ClearFocus()` | method |
| `IsPointInsideUsableArea` | `public bool IsPointInsideUsableArea(Vector2 p)` | method |
| `OnFocusedWidgetChanged;` | `public event Action OnFocusedWidgetChanged;` | event |
| `HitTest` | `public static bool HitTest(Widget widget, Vector2 position)` | method |
| `FocusTest` | `public bool FocusTest(Widget root)` | method |
| `AddLateUpdateAction` | `public void AddLateUpdateAction(Widget owner, Action<float>action, int order)` | method |
| `UpdateLayout` | `public void UpdateLayout()` | method |
| `GetIsHitThisFrame` | `public bool GetIsHitThisFrame()` | method |
| `MinParallelUpdateCount` | `public const int MinParallelUpdateCount` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
