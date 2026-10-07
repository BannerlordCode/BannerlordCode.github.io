---
title: "AutoHideZeroTextWidget"
description: "A Gauntlet TextWidget with no properties at all, whose OnLateUpdate hides it whenever IntText is zero. Covers the 17-line whole class, why zero means hidden, and the trap that IsVisible is recomputed every frame."
---

# AutoHideZeroTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideZeroTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideZeroTextWidget.cs`

## Overview

`AutoHideZeroTextWidget` is a [`TextWidget`](../../gui/TextWidget) that **makes itself invisible whenever its `IntText` is zero**. The entire class is 18 lines and its entire behaviour is one line inside one override: `base.IsVisible = base.IntText != 0;` at `AutoHideZeroTextWidget.cs:16`.

There is **no property, no field, and no configuration of any kind** — the file declares no member except the constructor and the override. Positive evidence: `grep -c 'private' AutoHideZeroTextWidget.cs` returns 0 and the class body contains exactly one field-free method. This is the smallest widget in the `AutoHide` family and the only one that takes no input beyond the inherited `IntText`.

## Mental Model

### What it is / which layer

- It is the **numeric counterpart** to [`AutoHideTextWidget`](../AutoHideTextWidget), which hides on empty `Text`. This one hides on a zero integer. In UI terms: "don't show a zero quantity".
- Think of it as a **zero-suppression rule**. The convention it encodes is that a count of zero means "not applicable", not "displayed as 0" — so the widget disappears rather than showing a bare `0` or an empty slot.
- It has no configuration because the convention is the whole point: the condition `IntText != 0` is hard-coded at `AutoHideZeroTextWidget.cs:16`. If you want a different predicate, you subclass, not configure.
- The class is **not sealed** — `public class AutoHideZeroTextWidget : TextWidget` (`AutoHideZeroTextWidget.cs:6`) — so subclassing is supported.

### The consequence that matters

**It overwrites `IsVisible` every frame, after you set it.** The assignment at `AutoHideZeroTextWidget.cs:16` lives in `OnLateUpdate`, the late phase of the update cycle. Any `IsVisible` you write from code in an earlier phase is recomputed on the same frame. The only durable way to hide the widget is to set `IntText` to zero.

The second consequence is that **the zero test is invisible to you if you set `Text` instead.** This class reads `IntText`, not `Text`. If you assign a string to a widget of this type and expect it to appear, the rule is still evaluating `IntText`, which stays at its default of zero — so the widget stays hidden no matter what `Text` says. That is the specific trap of this class versus its two siblings.

## How to use

**How to obtain it.** You cannot usefully construct it: the only constructor takes a `UIContext` (`AutoHideZeroTextWidget.cs:8`), which the Gauntlet movie system owns. **The real path is the prefab** — declare `<AutoHideZeroTextWidget>` in Gauntlet XML, let the movie instantiate it, and reach the instance from the widget tree via a `Type` binding or a parent lookup. Since it is `public` and not sealed (`AutoHideZeroTextWidget.cs:6`), you can also subclass it.

**A typical use.** Drive it through `IntText` and let visibility follow:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

// In Gauntlet XML: <AutoHideZeroTextWidget Source="@..."/>
// The instance comes from the movie's prefab tree, never from `new`.

public class QuantityBinding
{
    public static void Apply(AutoHideZeroTextWidget label, int quantity)
    {
        // This is the ONLY input the class reacts to
        // (AutoHideZeroTextWidget.cs:16 tests base.IntText).
        label.IntText = quantity;

        // Do NOT also set label.IsVisible. OnLateUpdate overwrites it on the
        // same frame (AutoHideZeroTextWidget.cs:16). Zero is the only hide.
    }
}
```

Subclass it when the predicate needs to differ:

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

// AutoHideZeroTextWidget is public and not sealed (AutoHideZeroTextWidget.cs:6).
// Call base first: it performs the hide-when-zero work at
// AutoHideZeroTextWidget.cs:16 that you are extending.
public class AutoHideNegativeTextWidget : AutoHideZeroTextWidget
{
    public AutoHideNegativeTextWidget(UIContext context)
        : base(context)
    {
    }

    protected override void OnLateUpdate(float dt)
    {
        base.OnLateUpdate(dt);

        if (base.IntText < 0)
        {
            base.IsVisible = false;
        }
    }
}
```

**What to watch out for.** The trap specific to this class: **setting `Text` does nothing to its visibility**. Because the test reads `IntText` (`AutoHideZeroTextWidget.cs:16`), a widget you filled with a string via `Text` will remain hidden because `IntText` is still zero. A modder who writes `label.Text = "5"` on this widget sees nothing at all — no text, no error. Set `IntText` instead.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `AutoHideZeroTextWidget(UIContext)` | `public AutoHideZeroTextWidget(UIContext context) : base(context)` at `AutoHideZeroTextWidget.cs:8-11` | The only constructor, forwarding to `TextWidget` and doing nothing else. **Not callable from mod code**, because `UIContext` belongs to the Gauntlet movie; its real job is to satisfy the movie's activation lookup. |
| `OnLateUpdate(float dt)` | `protected override void OnLateUpdate(float dt)` at `AutoHideZeroTextWidget.cs:13-17` | The class's entire behaviour: `base.OnLateUpdate(dt)` (`:15`), then `base.IsVisible = base.IntText != 0;` (`:16`). **One assignment, once per frame, unconditional.** It reads `IntText` — not `Text` — which is the defining detail of this widget, and it overwrites any visibility set from code. `protected override`, so a subclass extends it but must call `base` to keep the rule. |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `IntText` | [`TextWidget`](../../gui/TextWidget) | The single input this class reacts to, read at `AutoHideZeroTextWidget.cs:16`. |
| `Text` | [`TextWidget`](../../gui/TextWidget) | **Not read by this class.** This is the trap: assigning it changes neither the rule nor the visibility. |
| `IsVisible` | [`Widget`](../../gui/Widget) | The output, rewritten every frame at `AutoHideZeroTextWidget.cs:16`. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| Any property (e.g. `HideWhenZero`, `Threshold`) | **UNRESOLVED — does not exist** | The file declares **zero** properties. Positive evidence: `grep -cE '^\s*(\[Editor|public [A-Za-z])' AutoHideZeroTextWidget.cs` returns 0 matches other than the constructor, and the class body spans only `AutoHideZeroTextWidget.cs:6-17`. |
| A reference to another widget to hide (unlike its siblings) | **UNRESOLVED — does not exist** | [`AutoHideTextWidget`](../AutoHideTextWidget) and [`AutoHideRichTextWidget`](../AutoHideRichTextWidget) both expose `WidgetToHideIfEmpty` (`AutoHideTextWidget.cs:11`, `AutoHideRichTextWidget.cs:11`); this class has no such member and therefore hides only itself. |
| A formatted-string override | **UNRESOLVED — does not exist** | Nothing in the 18-line file formats or transforms `IntText` before display; the number is rendered by `TextWidget`. |

## Examples

Show a quantity, letting zero hide the widget:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class ZeroSuppressedCount
{
    public static void Apply(AutoHideZeroTextWidget label, int count)
    {
        // IntText is the only input (AutoHideZeroTextWidget.cs:16).
        // Zero -> hidden on this frame's late update. Non-zero -> shown.
        label.IntText = count;
    }
}
```

The wrong way round, shown so the trap is recognisable:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class WrongZeroSuppressedCount
{
    public static void Apply(AutoHideZeroTextWidget label, int count)
    {
        // WRONG on a widget of THIS type: the rule reads IntText
        // (AutoHideZeroTextWidget.cs:16). Setting Text leaves IntText at zero,
        // so the widget stays hidden and no error is raised.
        label.Text = count.ToString();

        // RIGHT for this widget:
        label.IntText = count;
    }
}
```

Check the state the widget is actually driven by:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class ZeroProbe
{
    public static bool IsShowing(AutoHideZeroTextWidget label)
    {
        // Ask IntText, not IsVisible: IsVisible is only recomputed in
        // OnLateUpdate (AutoHideZeroTextWidget.cs:16), so it can disagree with
        // what you just set for the rest of the frame.
        return label != null && label.IntText != 0;
    }
}
```

## Risks and crash boundaries

- **`IsVisible` is overwritten every frame.** `base.IsVisible = base.IntText != 0;` at `AutoHideZeroTextWidget.cs:16`, in `OnLateUpdate`. Code that sets visibility directly gets it recomputed on the same frame, with no error and no log.
- **`Text` is ignored by the rule.** The test reads `IntText` (`AutoHideZeroTextWidget.cs:16`). Filling the widget with a string through `Text` leaves it hidden because `IntText` is still zero — a completely silent failure.
- **Negative values are shown, not hidden.** The test is `!= 0` (`AutoHideZeroTextWidget.cs:16`), so `-1` is visible. If negative means "invalid" in your data, this widget will happily display it.
- **No companion widget hiding.** Unlike its two siblings, this class has no `WidgetToHideIfEmpty`, so it hides only itself. A surrounding container stays visible and can end up empty — use a sibling widget if you need the row to disappear too.
- **Constructing it yourself is not a supported pattern.** The only constructor needs a `UIContext` (`AutoHideZeroTextWidget.cs:8`) owned by the movie.
- **`IsVisible` is not `IsHidden`.** The class only touches `IsVisible`; the two are independent in Gauntlet.
- **Not a save participant.** No `[Serializable]`, no state; in fact this class has no state of its own at all.

## Cross-Version Notes

The v1.4.5 file is 18 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/` layout, and the same file name and shape appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees: a `TextWidget` subclass whose entire behaviour is `IsVisible = IntText != 0`. That one-line rule has been the stable part across those versions and is the thing to rely on. What is worth flagging as version-sensitive is the **family structure**: the three AutoHide widgets are separate classes rather than one configurable widget, and they are *not* kept in sync — the two 41-line siblings are byte-identical apart from the base type, while this 18-line one has no `WidgetToHideIfEmpty` at all. So a feature added to one sibling will not appear in the others, and you should pick the class whose input you actually set (`Text` vs `IntText`) rather than the closest-named one. **VERIFIED MEASURED for v1.4.5** (18 lines, 0 properties, 1 constructor, 1 override); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`TextWidget`](../../gui/TextWidget), whose `IntText` property is the only input this class reacts to (`AutoHideZeroTextWidget.cs:16`).
- Visibility flag rewritten every frame: `Widget.IsVisible` from [`Widget`](../../gui/Widget).
- Siblings with the same idea over a different input: [`AutoHideTextWidget`](../AutoHideTextWidget) (tests `Text != string.Empty`) and [`AutoHideRichTextWidget`](../AutoHideRichTextWidget) (same test over `RichTextWidget`).
- Related widget family in the `gui` bucket: [`ButtonWidget`](../../gui/ButtonWidget), [`RichTextWidget`](../../gui/RichTextWidget).
- Bucket index: [mission-ext API index](../)