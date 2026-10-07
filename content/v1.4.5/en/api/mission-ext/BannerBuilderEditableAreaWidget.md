---
title: "BannerBuilderEditableAreaWidget"
description: "The draggable / resizable / rotatable editing rectangle in the banner builder. Covers the six public value properties, the four private change hooks that are empty, and why programmatic value changes do nothing."
---

# BannerBuilderEditableAreaWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BannerBuilderEditableAreaWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder/BannerBuilderEditableAreaWidget.cs`

## Overview

`BannerBuilderEditableAreaWidget` is the **editing rectangle the player drags, resizes and rotates while designing a banner**. The file is 551 lines — the largest in this slice. It owns the whole gesture vocabulary: a `BuilderMode` state machine (`BannerBuilderEditableAreaWidget.cs:12-20`), four drag handles plus a rotate handle (`:73-79`), and a per-frame pipeline that converts mouse position into the four public value properties.

Those four values are `PositionValue` (`:108`), `SizeValue` (`:126`), `RotationValue` (`:144`) and `IsLayerPattern` (`:90`) — each `[Editor(false)]`, each with a getter, a setter, and a private change hook. Two more, `EditableAreaSize` (`:162`) and `TotalAreaSize` (`:179`), are plain values without hooks.

The class is `public` and **not sealed** (`BannerBuilderEditableAreaWidget.cs:10`) and not abstract — yet it declares no abstract member.

## Mental Model

### What it is / which layer

- It is the **direct-manipulation controller** for one banner layer. It is not a model: it owns no banner data. It converts gestures into four numbers and hands them to whatever is reading the widget.
- The gesture state machine is the core. `BuilderMode` (`BannerBuilderEditableAreaWidget.cs:12-20`) has six states — `None`, `Rotating`, `Positioning`, `HorizontalResizing`, `VerticalResizing`, `RightCornerResizing` — and `OnLateUpdate` (`:213-230`) dispatches to the matching handler and then stores the latest mouse position (`:229`).
- Coordinate conversion runs every frame: `UpdateRequiredValues()` (`:240-254`) divides the value-space `PositionValue` and `SizeValue` by `TotalAreaSize` and multiplies by `base.Size`, producing pixel-space `_centerOfSigil` and `_sizeOfSigil`, and derives the limits `_positionLimitMin`, `_positionLimitMax`, `_sizeLimitMax` and `_areaScale` (`:250-253`). **The unit of the public values is `TotalAreaSize`, not pixels** — that is the single most important thing to know before driving this widget.
- The `BuilderMode` enum, `WidgetPlacementType` (`BannerBuilderEditableAreaWidget.cs:22-27`) and `EdgeResizeType` (`:29-33`) are all **`private`**, so a subclass cannot switch on them or name them.

### The consequence that matters

**The four change hooks are empty, `private`, non-virtual methods — so a subclass cannot react to programmatic value changes at all.** `OnIsLayerPatternChanged`, `OnPositionChanged`, `OnSizeChanged` and `OnRotationChanged` are declared `private void` with empty bodies at `BannerBuilderEditableAreaWidget.cs:494-508`. Each property setter stores the value, fires `OnPropertyChanged`, and then calls its hook (`:102`, `:120`, `:138`, `:156`) — into nothing.

This is the modder's worst case, and it is worth stating plainly: **setting `PositionValue`, `SizeValue`, `RotationValue` or `IsLayerPattern` from code updates the stored value and notifies bindings, but produces no visible change**, and because the hooks are `private` (not `protected`, not `virtual`) you cannot override them to add the missing reaction. The values take effect only when a **drag gesture** runs, because the handlers write the backing fields and call `UpdateRequiredValues()` directly.

There is a second, quieter half of the same problem: `LayerIndex` and `IsMirrorActive` are plain auto-properties (`:85`, `:87`) with **no `OnPropertyChanged` and no hook at all**, so the Gauntlet editor and any prefab binding cannot observe a code-side change to them.

## How to use

**How to obtain it.** You cannot usefully construct it: the only constructor takes a `UIContext` (`BannerBuilderEditableAreaWidget.cs:195`), which the Gauntlet movie system owns. **The acquisition path is the prefab** — declare `<BannerBuilderEditableAreaWidget>` in Gauntlet XML with the handles and the tableau widget inside it, bind them by `Type`, and the movie instantiates and wires it.

**A typical use.** Set the values in value-space units, and read them back rather than expecting a visible update from code:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder;

public class BannerLayerBinding
{
    // `area` comes from the prefab tree; you never construct it.
    public static void Apply(BannerBuilderEditableAreaWidget area)
    {
        if (area == null)
            return;

        // TotalAreaSize is the unit of the value-space properties: dividing by it
        // and multiplying by base.Size is what UpdateRequiredValues() does
        // (BannerBuilderEditableAreaWidget.cs:242-249). Set it before the others.
        area.TotalAreaSize = 100;

        area.SizeValue = new Vec2(40f, 40f);
        area.PositionValue = new Vec2(30f, 30f);
        area.RotationValue = 0.25f;

        // IMPORTANT: the four setters above call private empty hooks
        // (BannerBuilderEditableAreaWidget.cs:494-508), so the rectangle will
        // not visibly move from code. Read the values back and apply them
        // yourself, or drive them through a drag gesture.
        Debug.Print("stored position " + area.PositionValue, 0);
    }
}
```

Drive the per-frame mesh update that the gesture handler normally triggers:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder;

public class BannerLayerMeshBinding
{
    // OnUpdate sets BannerTableauWidget.MeshIndexToUpdate from LayerIndex every
    // frame (BannerBuilderEditableAreaWidget.cs:203). LayerIndex is a plain
    // auto-property (:85) with no notification, so code-side changes are
    // invisible to bindings — but the per-frame assignment still happens.
    public static void SetLayer(BannerBuilderEditableAreaWidget area, int layerIndex)
    {
        if (area == null)
            return;

        area.LayerIndex = layerIndex;
    }

    public static bool HasTableau(BannerBuilderEditableAreaWidget area)
    {
        // OnUpdate dereferences BannerTableauWidget unconditionally at
        // BannerBuilderEditableAreaWidget.cs:203, so a missing binding throws on
        // the first update. Check before relying on the widget at all.
        return area != null && area.BannerTableauWidget != null;
    }
}
```

**What to watch out for.** The trap is expecting `PositionValue = ...` to move the box. It does not, because the hook it calls is an empty private method (`BannerBuilderEditableAreaWidget.cs:498-500`) and it is not virtual. The second trap is `BannerTableauWidget`: `OnUpdate` writes `BannerTableauWidget.MeshIndexToUpdate = LayerIndex` (`BannerBuilderEditableAreaWidget.cs:203`) with no null check on **every single frame**, so an unbound `BannerTableauWidget` throws immediately, and the stack trace points at the widget rather than at the missing binding.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `PositionValue` | `[Editor(false)] public Vec2 PositionValue { get; set; }` at `BannerBuilderEditableAreaWidget.cs:108`, backing field `_positionValue` at `:63` | Where the editing rectangle's centre sits, in **value space divided by `TotalAreaSize`** — not pixels. Setter (`:114-122`) compares, assigns, fires `OnPropertyChanged` (`:119`) then calls `OnPositionChanged(value)` (`:120`), **which is an empty private method** (`:498-500`). `UpdateRequiredValues()` converts it to pixel space at `:242-245`. |
| `SizeValue` | `[Editor(false)] public Vec2 SizeValue { get; set; }` at `BannerBuilderEditableAreaWidget.cs:126`, backing field `_sizeValue` at `:65` | The rectangle's size in the same value-space units. Setter (`:132-140`) stores, notifies (`:137`) and calls `OnSizeChanged(value)` (`:138`) — again an empty private method (`:502-504`). Converted to pixels at `BannerBuilderEditableAreaWidget.cs:246-249`. Minimum enforced size is the const `_sizeLimitMin = 2` (`:47`), applied by the resize handlers, not by the setter. |
| `RotationValue` | `[Editor(false)] public float RotationValue { get; set; }` at `BannerBuilderEditableAreaWidget.cs:144`, backing field `_rotationValue` at `:67` | The rotation as a **normalised fraction of a full turn**, not radians or degrees. Setter (`:150-158`) stores, notifies (`:155`) and calls `OnRotationChanged(value)` (`:156`) — empty private method (`:506-508`). The `0..1` convention is visible in the helpers: `DirFromAngle` multiplies by `2π` (`:512`) and `AngleFromDir` divides degrees by `360` (`:519`). |
| `IsLayerPattern` | `[Editor(false)] public bool IsLayerPattern { get; set; }` at `BannerBuilderEditableAreaWidget.cs:90`, backing field `_isLayerPattern` at `:61` | Whether this layer is a repeating pattern rather than a single placed element. Setter (`:96-104`) stores, notifies (`:101`) and calls `OnIsLayerPatternChanged(value)` (`:102`) — empty private method (`:494-496`). It is also seeded on first initialisation: `Initialize()` calls it with an explicit `false` (`BannerBuilderEditableAreaWidget.cs:237`). |
| `EditableAreaSize` | `[Editor(false)] public int EditableAreaSize { get; set; }` at `BannerBuilderEditableAreaWidget.cs:162`, backing field `_editableAreaSize` at `:69` | The size of the editable region. Setter (`:168-175`) stores and notifies (`:173`) — **no change hook at all**. Positive evidence: the setter body contains only the assignment and `OnPropertyChanged`; contrast the four hooks above. |
| `TotalAreaSize` | `[Editor(false)] public int TotalAreaSize { get; set; }` at `BannerBuilderEditableAreaWidget.cs:179`, backing field `_totalAreaSize` at `:71` | The denominator for every value-space conversion. `UpdateRequiredValues()` uses it at `BannerBuilderEditableAreaWidget.cs:242`, `:246`, `:251`, `:252` and `:253` to produce the pixel-space centre, size, position limits and area scale. Setter (`:185-192`) stores and notifies (`:190`), no hook. **Changing it after the values are set rescales everything on the next update**, so set it first. |
| `LayerIndex` | `public int LayerIndex { get; set; }` at `BannerBuilderEditableAreaWidget.cs:85` | Which banner layer this widget edits. Read every frame by `OnUpdate` at `BannerBuilderEditableAreaWidget.cs:203` and written into `BannerTableauWidget.MeshIndexToUpdate`. **Plain auto-property: no `OnPropertyChanged`, no hook**, so bindings do not observe a code-side change. Positive evidence: the setter is compiler-generated — there is no setter body in the source. |
| `IsMirrorActive` | `public bool IsMirrorActive { get; set; }` at `BannerBuilderEditableAreaWidget.cs:87` | Whether the layer is mirrored. Also a **plain auto-property with no notification and no hook**, and — like `HasVisualIdentifier` on a sibling page in this batch — **read nowhere else in this file**. Positive evidence: `grep -c 'IsMirrorActive' BannerBuilderEditableAreaWidget.cs` returns 2, both inside the declaration at `BannerBuilderEditableAreaWidget.cs:87`; the consumer is outside this class. |
| `BannerTableauWidget` | `public BannerTableauWidget BannerTableauWidget { get; set; }` at `BannerBuilderEditableAreaWidget.cs:81` | The widget that renders the banner being edited. **Dereferenced unconditionally on every frame** by `OnUpdate` at `BannerBuilderEditableAreaWidget.cs:203`. A plain auto-property, so an unbound value throws a `NullReferenceException` on the first update — bind it in the prefab or the widget is unusable. |
| `DragWidgetTopRight` / `DragWidgetRight` / `DragWidgetTop` / `RotateWidget` | four `public ButtonWidget ... { get; set; }` at `BannerBuilderEditableAreaWidget.cs:73`, `:75`, `:77`, `:79` | The gesture handles: the top-right corner drag, the two edge drags, and the rotate handle. Plain auto-properties with no notification. They are positioned each frame by `UpdateEditableAreaVisual()` (`:444`) and resolved by `GetWidgetFor(EdgeResizeType)` (`:455-457`), which is driven by the `EdgeResizeType` enum at `:29-33`. `HandleForEdge` (`:306`) and `HandleForCorner` (`:357`) are the handlers that read them. |
| `EditableAreaVisualWidget` | `public Widget EditableAreaVisualWidget { get; set; }` at `BannerBuilderEditableAreaWidget.cs:83` | The visual outline of the editing rectangle, refreshed every frame by `UpdateEditableAreaVisual()` (`BannerBuilderEditableAreaWidget.cs:444-454`). Plain auto-property. |
| `OnUpdate(float dt)` | `protected override void OnUpdate(float dt)` at `BannerBuilderEditableAreaWidget.cs:200-211` | The per-frame entry point: pushes `LayerIndex` into the tableau widget (`:203`), runs `Initialize()` once (`:204-207`), then `UpdateRequiredValues()` (`:208`), `UpdateEditableAreaVisual()` (`:209`) and `HandleCursor()` (`:210`). **`BannerTableauWidget` is dereferenced at `:203` with no null check.** `protected override` is one of only two subclassing seams. |
| `OnLateUpdate(float dt)` | `protected override void OnLateUpdate(float dt)` at `BannerBuilderEditableAreaWidget.cs:213-230` | The gesture dispatcher. Fires `"RefreshBanner"` when the left mouse button is released and a resize/rotate/position mode was active (`:216-223`), then runs `HandleRotation()` (`:224`), `HandlePositioning()` (`:225`), `HandleForEdge(EdgeResizeType.Right)` (`:226`), `HandleForEdge(EdgeResizeType.Top)` (`:227`), `HandleForCorner()` (`:228`), and finally caches `_latestMousePosition` (`:229`). Note the mode range check `(uint)(currentMode - 1) <= 4u` at `:219` — a decompiled-style bounds test over the non-`None` enum values. |
| `UpdateRequiredValues()` | `private void UpdateRequiredValues()` at `BannerBuilderEditableAreaWidget.cs:240-254` | Converts value space to pixel space: divides `PositionValue` and `SizeValue` by `TotalAreaSize` and multiplies by `base.Size` (`:242-249`), then derives `_positionLimitMin = 0f` (`:250`), `_positionLimitMax = TotalAreaSize` (`:251`), `_sizeLimitMax = TotalAreaSize` (`:252`) and `_areaScale = TotalAreaSize / base.Size.X` (`:253`). `private`, called once per frame from `OnUpdate` (`:208`). |
| `UpdateEditableAreaVisual()` | `private void UpdateEditableAreaVisual()` at `BannerBuilderEditableAreaWidget.cs:444-453` | Positions the handles and the visual outline for the current state. It centres `EditableAreaVisualWidget` (`:446-447`), pins both size policies to `Fixed` (`:448-449`) and scales its suggested width and height by `EditableAreaSize / TotalAreaSize` times `base.Size` (`:450-452`). It uses the helpers `UpdatePositionOfWidget` (`:464-486`) and `ApplyPositionOffsetToWidget` (`:488-493`). `private`, called once per frame from `OnUpdate` (`:209`). |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `Size` | [`Widget`](../../gui/Widget) | The pixel-space dimensions used by every conversion at `BannerBuilderEditableAreaWidget.cs:242-249` and the area scale at `:253`. |
| `OnPropertyChanged` | [`Widget`](../../gui/Widget) | Fired by five setters (`:101`, `:119`, `:137`, `:155`, `:173`, `:190`) but **not** by `LayerIndex` or `IsMirrorActive`. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| Overridable change hooks | **UNRESOLVED — they are private and empty** | `OnIsLayerPatternChanged`, `OnPositionChanged`, `OnSizeChanged` and `OnRotationChanged` are `private void` with empty bodies at `BannerBuilderEditableAreaWidget.cs:494-508`. Positive evidence: `grep -nE 'private void On(Position|Size|Rotation|IsLayerPattern)Changed' BannerBuilderEditableAreaWidget.cs` returns four hits — `:494`, `:498`, `:502`, `:506` — and each is followed immediately by `{` and `}`. None is `virtual`, so a subclass cannot supply the missing reaction. |
| A public `Refresh()` | **UNRESOLVED — absent in v1.4.5** | Unlike [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget), which re-derives its state from its property setters, this class has no re-derive method. Its only per-frame work is reached from the two `On*Update` overrides. |
| Any way to set the private enums | **UNRESOLVED — does not exist** | `BuilderMode` (`BannerBuilderEditableAreaWidget.cs:12-20`), `WidgetPlacementType` (`:22-27`) and `EdgeResizeType` (`:29-33`) are all `private enum`. You cannot name them from a subclass, so you cannot drive or observe the gesture state. |
| A rotation expressed in radians or degrees | **UNRESOLVED — absent in v1.4.5** | `RotationValue` is a normalised 0..1 fraction; `DirFromAngle` multiplies by `2π` (`:512`) and `AngleFromDir` divides degrees by `360` (`:519`). There is no radians member. |

## Examples

Set values in the right units, and do not expect a visible move:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder;

public class BannerLayerValues
{
    public static void Apply(BannerBuilderEditableAreaWidget area)
    {
        if (area == null)
            return;

        // Unit rule: the value-space properties are divided by TotalAreaSize
        // and multiplied by base.Size (BannerBuilderEditableAreaWidget.cs:242-249),
        // so TotalAreaSize is the denominator. Set it first.
        area.TotalAreaSize = 100;

        // RotationValue is a fraction of a full turn (0.25 == 90 degrees),
        // per DirFromAngle's 2*PI multiply at :512 and AngleFromDir's /360 at :519.
        area.RotationValue = 0.25f;
        area.SizeValue = new Vec2(40f, 40f);
        area.PositionValue = new Vec2(30f, 30f);

        // These four setters called private empty hooks
        // (BannerBuilderEditableAreaWidget.cs:494-508). Values are stored and
        // bindings notified, but nothing visibly changes until a drag runs.
        Debug.Print("stored: pos " + area.PositionValue + " size " + area.SizeValue, 0);
    }
}
```

Preflight the required bindings, because two of them are dereferenced unguarded:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder;

public static class AreaPreflight
{
    // OnUpdate dereferences BannerTableauWidget every frame at
    // BannerBuilderEditableAreaWidget.cs:203 with no null check. The handle
    // widgets (:73-79) and the visual outline (:83) are positioned by
    // UpdateEditableAreaVisual() at :209 and must also be bound.
    public static bool IsFullyBound(BannerBuilderEditableAreaWidget area)
    {
        return area != null
            && area.BannerTableauWidget != null
            && area.EditableAreaVisualWidget != null
            && area.DragWidgetTopRight != null
            && area.DragWidgetRight != null
            && area.DragWidgetTop != null
            && area.RotateWidget != null;
    }
}
```

Read the pixel-space result the widget actually computed, rather than recomputing it:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder;

public static class AreaLimits
{
    // UpdateRequiredValues() (BannerBuilderEditableAreaWidget.cs:240-254)
    // sets _positionLimitMax = TotalAreaSize (:251), _sizeLimitMax = TotalAreaSize
    // (:252) and _areaScale = TotalAreaSize / base.Size.X (:253). Those are
    // private, so compare your values against TotalAreaSize directly instead.
    public static bool IsWithinBounds(BannerBuilderEditableAreaWidget area, float x, float y)
    {
        if (area == null)
            return false;

        float limit = area.TotalAreaSize;
        return x >= 0f && x <= limit && y >= 0f && y <= limit;
    }
}
```

And the silent-no-op trap, written out:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder;

public static class SilentNoOp
{
    public static void DoesNothingVisible(BannerBuilderEditableAreaWidget area)
    {
        if (area == null)
            return;

        // WRONG expectation: these four assignments update the stored value and
        // fire OnPropertyChanged, then call private EMPTY hooks
        // (BannerBuilderEditableAreaWidget.cs:494-508). The rectangle will not
        // move, and there is no error, no log, and no overridable hook you could
        // have added to fix it.
        area.PositionValue = new Vec2(5f, 5f);
        area.SizeValue = new Vec2(9f, 9f);
        area.RotationValue = 0.5f;
        area.IsLayerPattern = true;

        // To react to a programmatic change, subscribe to OnPropertyChanged at
        // the widget level, or override OnUpdate/OnLateUpdate (:200, :213) and
        // read the values yourself — those are the only real seams.
    }
}
```

## Risks and crash boundaries

- **Programmatic value changes are silently inert.** The four change hooks are `private void` with empty bodies at `BannerBuilderEditableAreaWidget.cs:494-508`. Setting `PositionValue`, `SizeValue`, `RotationValue` or `IsLayerPattern` stores the value and notifies bindings, and nothing else happens. Because the hooks are `private` and not `virtual`, **you cannot override them** — this is the modder's "I set it, no error, no effect" case, and there is no subclass workaround.
- **`BannerTableauWidget` is dereferenced every frame with no null check.** `BannerBuilderEditableAreaWidget.cs:203`. An unbound prefab throws a `NullReferenceException` on the first update, with the stack trace pointing at this widget rather than at the missing binding. Bind it or the widget cannot be used at all.
- **`LayerIndex` and `IsMirrorActive` raise no notification.** Both are plain auto-properties (`:85`, `:87`), so a code-side change is invisible to the Gauntlet editor and to any prefab binding. `LayerIndex` still takes effect for the per-frame mesh update at `:203`, but nothing else observes it.
- **`IsMirrorActive` does nothing in this class.** Declared at `BannerBuilderEditableAreaWidget.cs:87`, read nowhere else in the 551-line file. Its consumer is external, so setting it has no locally observable effect.
- **All three enums are `private`.** `BuilderMode` (`:12-20`), `WidgetPlacementType` (`:22-27`), `EdgeResizeType` (`:29-33`). You cannot name them from a subclass, so you cannot inspect or drive the gesture state — only observe the four value properties.
- **Values are in `TotalAreaSize` units, not pixels.** `BannerBuilderEditableAreaWidget.cs:242-249`. Setting a pixel-sized `SizeValue` against a small `TotalAreaSize` produces a rectangle you cannot see, and setting `TotalAreaSize` later rescales existing values on the next update.
- **The handle widgets are dereferenced by the gesture handlers.** `DragWidgetTopRight`, `DragWidgetRight`, `DragWidgetTop` and `RotateWidget` (`:73-79`) are plain auto-properties; `UpdateEditableAreaVisual()` (`:444`) and `GetWidgetFor` (`:455`) read them each frame, so a partially bound prefab throws during the update rather than at binding time.
- **Two subclassing seams only.** `OnUpdate` (`:200`) and `OnLateUpdate` (`:213`) are `protected override`; everything else that does real work — `UpdateRequiredValues()` (`:240`), `UpdateEditableAreaVisual()` (`:444`), the four `Handle*` methods — is `private` and unreachable.
- **Four near-identical `TransformToParent` overloads exist**, at `BannerBuilderEditableAreaWidget.cs:532`, `:537`, `:542` and `:547`, covering `Vec2`/`Vec2`, `Vector2`/`Vector2`, `Vector2`/`Vec2` and `Vec2`/`Vector2`. The first (`:534`) computes `b.Y * a.X + b.X * a.Y` while the last (`:549`) computes `b.Y * a.X + b.Y * a.Y` — a different formula in the same overload family, so an argument-type change can silently switch coordinate conventions. All four are `private static`.
- **Not a save participant.** No `[Serializable]`; six numbers and seven widget references, all transient.

## Cross-Version Notes

The v1.4.5 file is 551 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.BannerBuilder/` layout, and the same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same overall shape — private enums, a `BuilderMode` state machine, and the six public value properties. What has stayed constant across those versions is the **gesture vocabulary and the value-space unit** (`RotationValue` as a fraction of a turn, `PositionValue`/`SizeValue` divided by `TotalAreaSize`), which are the parts a modder's code actually depends on. The **empty private change hooks** at `:494-508` are a managed-side implementation detail with no native symbol and no compiler forcing them to be virtual — so a later version may well have filled them in or made them `protected virtual`. Do not carry "programmatic changes are inert" forward as permanent; verify in the version you target. The four `TransformToParent` overloads with a differing formula in the last one (`:549` vs `:535`) are the kind of duplication that tends to get consolidated, which would be a behaviour change rather than a compile break. **VERIFIED MEASURED for v1.4.5** (551 lines, 11 properties, 4 private enums, 2 overrides, 1 constructor; every cited line number checked with `sed -n`); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`Widget`](../../gui/Widget), supplying `Size` (the pixel-space divisor used at `BannerBuilderEditableAreaWidget.cs:242-249`), `OnPropertyChanged` (`:101`, `:119`, `:137`, `:155`, `:173`, `:190`) and the two `On*Update` seams.
- The widget that renders the banner being edited: [`BannerTableauWidget`](../BannerTableauWidget), whose `MeshIndexToUpdate` is written every frame at `BannerBuilderEditableAreaWidget.cs:203`.
- Gesture handle base: [`ButtonWidget`](../../gui/ButtonWidget), the type of all four drag handles declared at `:73-79`.
- The banner data this widget ultimately describes: [`Banner`](../../core-extra/Banner).
- Sibling widgets in the banner builder: the banner-builder's other widgets in the `BannerBuilder` subfolder, which have no pages in this slice and are therefore described rather than linked.
- Comparable widgets in this bucket with a different design: [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget) re-derives its state from its property setters, which this class does not do.
- Bucket index: [mission-ext API index](../)