---
title: "BarterItemVisualBrushWidget"
description: "The barter row's icon widget: picks a sprite, masked texture or image identifier from a hard-coded Type string, once, on its first update. Covers the one-shot UpdateVisual gate and the seven barter type strings."
---

# BarterItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterItemVisualBrushWidget.cs`

## Overview

`BarterItemVisualBrushWidget` is the **icon of one barter item row**. The file is 227 lines. Where its siblings in this folder decide visibility, this one decides *what picture to show*: it picks between three visual mechanisms based on a `Type` string.

`UpdateVisual()` (`BarterItemVisualBrushWidget.cs:177-213`) hides all three candidate widgets, then re-shows exactly one by switching on `Type` (`BarterItemVisualBrushWidget.cs:184-202`). The seven recognised strings map as: `"fief_barterable"` → a sprite looked up as `FiefImagePath + "_t"` (`:186`); `"mercenary_join_faction_barterable"` (`:190`), `"join_faction_barterable"`, `"leave_faction_barterable"` → the `MaskedTextureWidget` (`:193`); `"set_prisoner_free_barterable"` (`:195`), `"item_barterable"`, `"marriage_barterable"` → the `ImageIdentifierWidget` (`:198`); anything else → the `SpriteWidget` (`:201`).

The class uses a **C# 12 primary constructor**: `public class BarterItemVisualBrushWidget(UIContext context) : BrushWidget(context)` (`BarterItemVisualBrushWidget.cs:7`) — the only widget in this folder written that way, so it declares no explicit constructor.

## Mental Model

### What it is / which layer

- It is a **three-way visual switch**, not a general brush widget. It owns no item data; it owns a `Type` string and four child widget references, and its job is to show the right one and hide the other two.
- The `Type` strings are a **closed vocabulary agreed with the module XML**, not a free-form tag. A value outside the seven recognised ones lands in the `default` branch (`BarterItemVisualBrushWidget.cs:200-201`) and silently shows a bare `SpriteWidget` — which usually means an empty icon rather than an error.
- It also does brush-state registration: `RegisterStatesOfWidgetFromBrush()` (`BarterItemVisualBrushWidget.cs:165-174`) copies each layer name of the sprite brush into the widget's state list so `ContainsState` / `SetState` (`BarterItemVisualBrushWidget.cs:204-207`) can select a per-type visual state.
- The class is **not sealed** (`BarterItemVisualBrushWidget.cs:7`), so you may subclass it — but the one-shot behaviour below constrains what subclassing can achieve.

### The consequence that matters

**`UpdateVisual()` runs exactly once, ever.** The call is gated by `if (!_imageDetermined)` at `BarterItemVisualBrushWidget.cs:147`, and `_imageDetermined = true` is set immediately after (`:151`). So **setting `Type` after the widget's first update does not re-run the switch** — the sprite/texture/identifier choice is already frozen.

What *does* keep running every frame is the second half of `OnParallelUpdate`: `if (_imageDetermined && Type == "fief_barterable")` (`BarterItemVisualBrushWidget.cs:153`) re-applies layout — clipping, fixed size policies, a `PositionYOffset` of `18f`, vertical centring (`:154-161`). So the fief case is the one type where a late `Type` change has a visible effect, and it is a *layout* effect only. Everything else is inert after the first frame.

The second consequence is a crash hazard: `UpdateVisual()` writes `SpriteWidget.IsVisible`, `MaskedTextureWidget.IsVisible`, `ImageIdentifierWidget.IsVisible` (`:180-182`) and finally `SpriteClipWidget.IsVisible` (`:212`) **with no null checks**. All four children must be bound in the prefab. Notably, the *other* method in the same class, `RegisterStatesOfWidgetFromBrush`, *does* null-check its argument (`:167-169`) — so the guardless style is inconsistent within a single file, and you cannot infer safety from the surrounding code.

## How to use

**How to obtain it.** The primary constructor takes a `UIContext` (`BarterItemVisualBrushWidget.cs:7`), which the Gauntlet movie system owns, so **the acquisition path is the prefab**: declare `<BarterItemVisualBrushWidget>` in Gauntlet XML with all four children (`SpriteWidget`, `SpriteClipWidget`, `MaskedTextureWidget`, `ImageIdentifierWidget`), bind them by `Type`, and the movie instantiates and wires it. Because it is `public` and not sealed (`BarterItemVisualBrushWidget.cs:7`), you can also subclass it.

**A typical use.** Set the type **before the widget's first update** and let the switch pick the visual:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class BarterIconBinder
{
    // `icon` comes from the prefab tree; you never construct it.
    public static void Apply(BarterItemVisualBrushWidget icon, string barterType)
    {
        if (icon == null)
            return;

        // Both setters are plain compare-and-notify (Type is declared at
        // BarterItemVisualBrushWidget.cs:111 and FiefImagePath at :128). They do
        // NOT re-run UpdateVisual() — that is gated on the first update (:147).
        // Set the type before the widget ticks.
        icon.Type = barterType;

        // Only meaningful for "fief_barterable", where the sprite is looked up
        // as FiefImagePath + "_t" (BarterItemVisualBrushWidget.cs:186).
        icon.FiefImagePath = "some_fief_sprite_prefix";
        icon.HasVisualIdentifier = true;
    }
}
```

Report the type the widget actually took, rather than assuming the switch applied:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class BarterIconState
{
    public static void Describe(BarterItemVisualBrushWidget icon)
    {
        if (icon == null)
            return;

        // Read back which child ended up visible. An unrecognised Type falls
        // into the default branch (BarterItemVisualBrushWidget.cs:200-201) and
        // shows a bare SpriteWidget — no error, just an empty icon.
        Debug.Print(
            "type=" + icon.Type +
            " sprite=" + (icon.SpriteWidget != null && icon.SpriteWidget.IsVisible) +
            " masked=" + (icon.MaskedTextureWidget != null && icon.MaskedTextureWidget.IsVisible) +
            " identifier=" + (icon.ImageIdentifierWidget != null && icon.ImageIdentifierWidget.IsVisible),
            0);
    }
}
```

**What to watch out for.** The trap is the one-shot gate. A modder who binds a barter row, lets it tick, and *then* sets `Type` to `"item_barterable"` sees no change: `UpdateVisual()` has already run (`BarterItemVisualBrushWidget.cs:147-151`) and will not run again, so the sprite stays whatever the initial (empty) type produced. Set `Type` as part of row construction, before the first update — or subclass and run your own `UpdateVisual` equivalent.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Type` | `[Editor(false)] public string Type { get; set; }` at `BarterItemVisualBrushWidget.cs:111`, backing field `_type` at `:11` initialised to `""` | The barter type string that selects which visual mechanism is used. Backing field `_type` at `:11` initialised to `""`; getter `:113-116`, setter `:117-124` which compares, assigns, and fires `OnPropertyChanged(value, "Type")` (`:122`). Read twice per frame: once by the switch in `UpdateVisual()` (`:184`) and once by the per-frame fief layout branch (`:153`). **Recognised values are a closed set**: `"fief_barterable"` → sprite via `FiefImagePath + "_t"` (`:186`); `"mercenary_join_faction_barterable"` (`:190`) / `"join_faction_barterable"` / `"leave_faction_barterable"` → `MaskedTextureWidget` (`:193`); `"set_prisoner_free_barterable"` (`:195`) / `"item_barterable"` / `"marriage_barterable"` → `ImageIdentifierWidget` (`:198`); anything else → `SpriteWidget` (`:201`). **Setting it after the first update does not re-run the switch.** |
| `SpriteWidget` | `[Editor(false)] public BrushWidget SpriteWidget { get; set; }` at `BarterItemVisualBrushWidget.cs:26`, field at `:17` | The brush that draws a sprite, and the mechanism used by the fief case and the default case. Declared as a plain compare-and-notify property. Read without a null check at `BarterItemVisualBrushWidget.cs:180`, `:186`, `:188`, `:204`, `:206`, `:212` — **leaving it unbound crashes on the first update.** |
| `SpriteClipWidget` | `[Editor(false)] public Widget SpriteClipWidget { get; set; }` at `BarterItemVisualBrushWidget.cs:43`, field at `:23` | The clipping container around `SpriteWidget`. For the fief case it gets `ClipContents = true` (`:155`) and supplies the sprite's suggested width and height (`:158-159`); at the end of `UpdateVisual()` its visibility is set to whatever `SpriteWidget`'s ended up as (`:212`). Also dereferenced without a null check. |
| `MaskedTextureWidget` | `[Editor(false)] public MaskedTextureWidget MaskedTextureWidget { get; set; }` at `BarterItemVisualBrushWidget.cs:77`, field at `:19` | The masked-texture path, used by the three faction-membership barter types (`:193`). Its visibility is unconditionally forced to `false` at the top of `UpdateVisual()` (`:181`) and then set back by the switch — so it is never accidentally left showing. Null-unsafe at `:181`. |
| `ImageIdentifierWidget` | `[Editor(false)] public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` at `BarterItemVisualBrushWidget.cs:60`, field at `:21` | The image-identifier path, used by the prisoner-release, item and marriage barter types (`:198`). Same visibility discipline as `MaskedTextureWidget` (`:182`), same null-unsafe access. |
| `HasVisualIdentifier` | `[Editor(false)] public bool HasVisualIdentifier { get; set; }` at `BarterItemVisualBrushWidget.cs:94`, field at `:15` | Whether this row has a visual identifier of its own. **Set and read nowhere else in this file** — it occurs only at its own declaration and inside its own setter. Positive evidence: `grep -c 'HasVisualIdentifier' BarterItemVisualBrushWidget.cs` returns 4, all inside the property at `BarterItemVisualBrushWidget.cs:93-107`. So it is a declared, bindable flag whose consumer lives outside this class; setting it has no locally observable effect. |
| `FiefImagePath` | `[Editor(false)] public string FiefImagePath { get; set; }` at `BarterItemVisualBrushWidget.cs:128`, field at `:13` | The sprite-name prefix for the fief case. Read exactly once, at `BarterItemVisualBrushWidget.cs:186`, as `GetSprite(FiefImagePath + "_t")` — so the engine looks up a sprite whose name is your value with `"_t"` appended. **Only consulted when `Type == "fief_barterable"`, and only during the one-shot `UpdateVisual()`**, so changing it later changes nothing. |
| `UpdateVisual()` | `private void UpdateVisual()` at `BarterItemVisualBrushWidget.cs:177-213` | The switch. Hides all three candidate widgets (`:180-182`), selects one by `Type` (`:184-202`), applies a per-type brush state if the brush has one (`:204-207`), writes the sprite across all brush styles when one was resolved (`:210`), then mirrors `SpriteWidget.IsVisible` onto `SpriteClipWidget` (`:212`). **`private` and called only once** (`:150`), so a subclass cannot re-trigger it. |
| `RegisterStatesOfWidgetFromBrush(BrushWidget)` | `private void RegisterStatesOfWidgetFromBrush(BrushWidget widget)` at `BarterItemVisualBrushWidget.cs:165-174` | Copies each brush layer's name into the widget's state list so `ContainsState` / `SetState` (`BarterItemVisualBrushWidget.cs:204-207`) can pick a per-type visual state. **This is the one method in the class that null-checks its argument** (`:167-169`) — which is why the class reads inconsistently about safety. `private`, called once from `OnParallelUpdate` (`:149`). |
| `SetWidgetSpriteForAllStyles(BrushWidget, Sprite)` | `private void SetWidgetSpriteForAllStyles(BrushWidget widget, Sprite sprite)` at `BarterItemVisualBrushWidget.cs:215-225` | Assigns the sprite to the widget (`:217`) and then walks `widget.Brush.Styles` writing the sprite into every layer of every style (`:221-224`). Used so the resolved sprite appears regardless of which brush style is active. `private`, called once from `UpdateVisual()` (`:210`). |
| `OnParallelUpdate(float dt)` | `protected override void OnParallelUpdate(float dt)` at `BarterItemVisualBrushWidget.cs:144-162` | The frame entry point. On the first pass it calls `RegisterStatesOfWidgetFromBrush(SpriteWidget)` (`:149`), `UpdateVisual()` (`:150`) and sets `_imageDetermined = true` (`:151`). On every later pass, if `Type == "fief_barterable"`, it re-applies the layout block (`:154-161`). **`protected override`, so this is the one genuine subclassing seam the class offers.** |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `IsVisible` | [`Widget`](../../gui/Widget) | Written on three child widgets and the clip container (`BarterItemVisualBrushWidget.cs:180-182`, `:212`). |
| `ContainsState` / `SetState` | [`BrushWidget`](../../gui/BrushWidget) | Queried and set at `BarterItemVisualBrushWidget.cs:204-207` to select a per-type brush state. |
| `Brush.Styles` | [`BrushWidget`](../../gui/BrushWidget) | Walked at `BarterItemVisualBrushWidget.cs:221-224` so the resolved sprite applies to every style. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A public `UpdateVisual` or refresh trigger | **UNRESOLVED — does not exist** | `UpdateVisual()` is `private` (`BarterItemVisualBrushWidget.cs:177`) and is called exactly once, from inside the `!_imageDetermined` branch at `:150`. Positive evidence: `grep -n 'UpdateVisual' BarterItemVisualBrushWidget.cs` returns two hits — the definition at `:177` and the single call at `:150`. |
| A `Refresh()`-style method, as on [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget) | **UNRESOLVED — absent in v1.4.5** | That sibling has a private `Refresh()` re-triggered by property setters (`BarterTupleItemButtonWidget.cs:31`, `:49`). This class has no equivalent: its property setters only notify, so there is no way to re-derive the visual after the first frame. |
| A typed enum for `Type` instead of `string` | **UNRESOLVED — absent in v1.4.5** | `Type` is a `string` (`BarterItemVisualBrushWidget.cs:111`) and the switch at `:184-202` compares against string literals. There is no enum, so a typo is a `default`-branch fallback rather than a compile error. |

## Examples

Bind the four children before the first update, or the first frame throws:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class BarterIconPreflight
{
    // UpdateVisual() writes SpriteWidget.IsVisible (:180), MaskedTextureWidget
    // (:181), ImageIdentifierWidget (:182) and SpriteClipWidget (:212) with no
    // null checks, so all four must be bound in the prefab.
    public static bool IsFullyBound(BarterItemVisualBrushWidget icon)
    {
        return icon != null
            && icon.SpriteWidget != null
            && icon.SpriteClipWidget != null
            && icon.MaskedTextureWidget != null
            && icon.ImageIdentifierWidget != null;
    }
}
```

Pick the icon for a barter type, in one place, with the mapping spelled out:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public class BarterIconBinder
{
    private readonly BarterItemVisualBrushWidget _icon;

    public BarterIconBinder(BarterItemVisualBrushWidget icon)
    {
        _icon = IsFullyBound(icon) ? icon : null;
    }

    private static bool IsFullyBound(BarterItemVisualBrushWidget icon)
    {
        return icon != null
            && icon.SpriteWidget != null
            && icon.SpriteClipWidget != null
            && icon.MaskedTextureWidget != null
            && icon.ImageIdentifierWidget != null;
    }

    // Call this BEFORE the widget's first update. UpdateVisual() runs once
    // (BarterItemVisualBrushWidget.cs:147-151) and never again.
    public void Apply(string barterType)
    {
        if (_icon == null)
            return;

        _icon.Type = barterType;
        // Only consulted for "fief_barterable", and only during that one-shot
        // call, as GetSprite(FiefImagePath + "_t") (:186).
        _icon.FiefImagePath = "fief_settlement";
    }
}
```

Detect the unrecognised-type case, which otherwise shows an empty icon silently:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class BarterIconDiagnostics
{
    private static readonly string[] KnownTypes =
    {
        "fief_barterable",
        "mercenary_join_faction_barterable",
        "join_faction_barterable",
        "leave_faction_barterable",
        "set_prisoner_free_barterable",
        "item_barterable",
        "marriage_barterable",
    };

    public static void WarnIfUnknown(BarterItemVisualBrushWidget icon)
    {
        if (icon == null || Array.IndexOf(KnownTypes, icon.Type) >= 0)
            return;

        // Falls into the default branch at BarterItemVisualBrushWidget.cs:200-201,
        // which shows a bare SpriteWidget. No exception, no log.
        Debug.Print("unrecognised barter type: " + icon.Type, 0);
    }
}
```

The late-`Type` trap, shown so the symptom is recognisable:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter;

public static class LateTypeChange
{
    public static void TooLate(BarterItemVisualBrushWidget icon)
    {
        if (icon == null)
            return;

        // WRONG if the widget has already had its first update:
        // UpdateVisual() is gated by `if (!_imageDetermined)`
        // (BarterItemVisualBrushWidget.cs:147) and sets _imageDetermined = true
        // at :151, so the switch at :184-202 will not run again. The icon keeps
        // whatever the initial (empty) Type produced. No error is raised.
        icon.Type = "item_barterable";
    }
}
```

## Risks and crash boundaries

- **`NullReferenceException` on the first update if any child widget is unbound.** `UpdateVisual()` writes four child widgets without null checks (`BarterItemVisualBrushWidget.cs:180-182`, `:212`). It is called from `OnParallelUpdate` (`:150`) on the widget's first tick, so the throw happens inside the UI update and the stack trace points at the widget rather than at your missing binding. Note the class is inconsistent about this: `RegisterStatesOfWidgetFromBrush` does null-check its argument (`:167-169`).
- **The visual is chosen once and then frozen.** `UpdateVisual()` runs only under `if (!_imageDetermined)` (`BarterItemVisualBrushWidget.cs:147`), which is cleared at `:151`. Changing `Type` or `FiefImagePath` afterwards has no effect on the sprite/texture/identifier choice. The exception is the fief layout branch at `:153`, which does re-apply every frame.
- **An unrecognised `Type` fails silently.** The `default` branch at `BarterItemVisualBrushWidget.cs:200-201` shows a bare `SpriteWidget`. Since `Type` is a `string` (`:111`) and not an enum, a typo compiles and produces an empty icon with no diagnostic.
- **`HasVisualIdentifier` does nothing in this class.** Declared at `BarterItemVisualBrushWidget.cs:94`, read nowhere else in the file. Its consumer is external, so setting it has no locally observable effect.
- **The fief sprite name is derived, not literal.** `GetSprite(FiefImagePath + "_t")` at `BarterItemVisualBrushWidget.cs:186` — a `"_t"` suffix you must not include in your value, or the lookup misses and `SpriteWidget` shows nothing.
- **`UpdateVisual()` is private and non-virtual.** `BarterItemVisualBrushWidget.cs:177`. You cannot re-trigger it or replace it; the override point is `OnParallelUpdate` (`:144`).
- **Layout is mutated every frame for the fief case.** `BarterItemVisualBrushWidget.cs:154-161` reassigns `ClipContents`, both size policies, both suggested sizes, `PositionYOffset` and `VerticalAlignment` on every update, so anything else you set on `SpriteWidget` for that type is overwritten continuously.
- **Not a save participant.** No `[Serializable]`; the fields are two strings, a bool and four widget references.

## Cross-Version Notes

The v1.4.5 file is 227 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/` layout. The same file name and namespace appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees with the same shape and the same `"..._barterable"` type vocabulary, which is agreed with the module XML and is therefore the part most likely to be **added to** rather than changed — a new barter kind would appear as a new `case` in the switch at `BarterItemVisualBrushWidget.cs:184-202`, not as a new API. The one-shot `_imageDetermined` gate (`:147`) is a managed-side decision with no native symbol protecting it and is the piece most likely to be reworked; do not build behaviour on the assumption that a late `Type` change will always be ignored, but equally do not rely on it being re-run. The C# 12 **primary constructor** at `:7` is a language-version marker: this file requires a compiler newer than the one that built the older trees, so if you copy this shape into a mod targeting `bannerlord-1.3.x`, use an explicit constructor instead. **VERIFIED MEASURED for v1.4.5** (227 lines, 6 properties, 3 private methods, 1 override, primary constructor; every cited line number checked with `sed -n`); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`BrushWidget`](../../gui/BrushWidget), supplying `ContainsState`, `SetState` (used at `BarterItemVisualBrushWidget.cs:204-207`), `Brush.Styles` (`:221-224`) and the `OnParallelUpdate` seam (overridden at `:144`).
- Widget visibility and size policies: [`Widget`](../../gui/Widget) — `IsVisible`, `ClipContents`, `WidthSizePolicy`, `ScaledSuggestedWidth`/`ScaledSuggestedHeight`, `PositionYOffset`, `VerticalAlignment`, all written at `BarterItemVisualBrushWidget.cs:154-161` and `:180-182`.
- Child widgets it toggles between: `MaskedTextureWidget` and `ImageIdentifierWidget`, both Gauntlet widgets in `TaleWorlds.GauntletUI` — described here rather than linked, because they have no pages in this slice's buckets.
- The row this icon belongs to: [`BarterTupleItemButtonWidget`](../BarterTupleItemButtonWidget), which drives the row's slider-versus-count state.
- The quantity controls in the same barter folder: [`BarterItemCountControlButtonWidget`](../BarterItemCountControlButtonWidget) and [`BarterItemCountTextWidget`](../BarterItemCountTextWidget).
- Bucket index: [mission-ext API index](../)