---
title: "AutoHideTextWidget"
description: "A Gauntlet TextWidget that hides itself while its Text is empty. Covers WidgetToHideIfEmpty, the OnLateUpdate visibility rule that overwrites any IsVisible you set from code, and how to combine it with another widget."
---

# AutoHideTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs`

## Overview

`AutoHideTextWidget` is a [`TextWidget`](../../gui/TextWidget) that **makes itself invisible whenever its `Text` is the empty string**. The whole class is 41 lines and its entire behaviour is one override: `OnLateUpdate` at `AutoHideTextWidget.cs:32-40` ends with `base.IsVisible = base.Text != string.Empty;` (`AutoHideTextWidget.cs:39`).

It also offers one opt-in extra: `WidgetToHideIfEmpty` (`AutoHideTextWidget.cs:11`), a `Widget` reference which — when set — receives the **same** visibility rule, so a whole container can disappear alongside the label (`AutoHideTextWidget.cs:35-38`).

That is the entire public surface: one property, one constructor, one protected override. Everything else is inherited from `TextWidget`.

## Mental Model

### What it is / which layer

- It is a **presentation-only policy layer**, not a data holder. It owns no state beyond one `Widget` reference; it reads `base.Text` and writes `base.IsVisible`, and does nothing else.
- Think of it as "**hide when empty**", the UI equivalent of rendering nothing for an empty string. It exists so that a screen does not show a dangling label or a one-pixel container when a value is absent.
- The class is **not sealed** — `public class AutoHideTextWidget : TextWidget` (`AutoHideTextWidget.cs:6`) — so you may subclass it. But see the consequence below before you do.

### The consequence that matters

**This class overwrites `IsVisible` every single frame, after you set it.** The assignment at `AutoHideTextWidget.cs:39` lives in `OnLateUpdate`, the late phase of the widget update, so any `IsVisible = false` you set from code in an earlier phase is recomputed and clobbered on the next frame. The only way to keep the widget hidden is to make `Text` empty. This is the single thing that surprises people: "I hid it in code and it came back".

The second consequence is that `WidgetToHideIfEmpty` makes **two** widgets obey one rule, which means that other widget loses its own `IsVisible` too. `AutoHideTextWidget.cs:37` assigns `WidgetToHideIfEmpty.IsVisible` unconditionally whenever the property is non-null — so if you point it at a container that some other system is also showing and hiding, the two systems now fight, and the last writer in `OnLateUpdate` wins.

## How to use

**How to obtain it.** You cannot construct it from code in any useful way — the only constructor takes a `UIContext` (`AutoHideTextWidget.cs:27`), which only the Gauntlet movie system has. **The real acquisition path is the prefab**: you declare `<AutoHideTextWidget>` inside a Gauntlet XML prefab, the movie instantiates it, and you reach the instance from the widget tree through a `Type` on the binding, or from a parent widget's child lookup. There is no factory, no service, and no `new` from mod code.

This class is `public` and not sealed (`AutoHideTextWidget.cs:6`), so unlike the `internal` IMB bridges you can also just **subclass it** for your own "hide when empty" widget with different visibility semantics.

**A typical use.** Bind it in a prefab and drive the text; the visibility takes care of itself:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

// In Gauntlet XML, inside your screen prefab:
//   <AutoHideTextWidget Source="@...">
//     <Widget Source="..."/>            <!-- becomes WidgetToHideIfEmpty if bound -->
//   </AutoHideTextWidget>

public class MyLabelBinding
{
    // The instance is supplied by the movie from the prefab tree; you receive it
    // through a Type binding, then only ever set Text.
    public void Apply(AutoHideTextWidget label, string value)
    {
        // Setter path: AutoHideTextWidget.cs:39 runs on the next OnLateUpdate and
        // makes the widget visible for a non-empty string, hidden for "".
        label.Text = value ?? string.Empty;

        // Do NOT also set label.IsVisible here. OnLateUpdate will overwrite it
        // on the very next frame (AutoHideTextWidget.cs:39). Emptying Text is
        // the only way to keep it hidden.
    }
}
```

Subclass it when you need the same rule with a different predicate:

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

// AutoHideTextWidget is public and not sealed (AutoHideTextWidget.cs:6), so
// subclassing is supported. Override OnLateUpdate and call base first — the base
// does the visibility work (AutoHideTextWidget.cs:39) that you are extending.
public class AutoHideTextWidgetWhenBlank : AutoHideTextWidget
{
    public AutoHideTextWidgetWhenBlank(UIContext context)
        : base(context)
    {
    }

    protected override void OnLateUpdate(float dt)
    {
        base.OnLateUpdate(dt);

        // Extra rule applied after the base one. Note this runs every frame, so
        // keep it cheap.
        if (string.IsNullOrWhiteSpace(base.Text))
        {
            base.IsVisible = false;
        }
    }
}
```

**What to watch out for.** Two traps, both silent. First, setting `IsVisible` from code does nothing lasting, because `AutoHideTextWidget.cs:39` rewrites it each frame. Second, if you set `WidgetToHideIfEmpty`, the referenced widget's own `IsVisible` is now owned by this widget (`AutoHideTextWidget.cs:37`) — so any code that toggles that widget's visibility directly will see it snap back.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `WidgetToHideIfEmpty` | `[Editor(false)] public Widget WidgetToHideIfEmpty { get; set; }` at `AutoHideTextWidget.cs:11` | An optional second widget that gets the same "hide when empty" treatment as this one. Declared at `AutoHideTextWidget.cs:11` with the backing field at `:8`. The setter compares against the current value, assigns, and calls `OnPropertyChanged(value, "WidgetToHideIfEmpty")` (`AutoHideTextWidget.cs:19-23`). Read at `AutoHideTextWidget.cs:35` with a **null guard**, so leaving it null is safe and simply skips the extra widget. `[Editor(false)]` means the Gauntlet editor will not offer it for authoring. |
| `AutoHideTextWidget(UIContext)` | `public AutoHideTextWidget(UIContext context) : base(context)` at `AutoHideTextWidget.cs:27-30` | The only constructor, and it does nothing but forward to `TextWidget`. **You cannot call this from mod code** because `UIContext` is supplied by the Gauntlet movie system, not by you. Its real job is to be the signature the movie's `Activator.CreateInstance` lookup needs. |
| `OnLateUpdate(float dt)` | `protected override void OnLateUpdate(float dt)` at `AutoHideTextWidget.cs:32-40` | The entire behaviour of the class: calls `base.OnLateUpdate(dt)` (`:34`), then applies `WidgetToHideIfEmpty.IsVisible = base.Text != string.Empty` when the property is non-null (`:35-38`), then `base.IsVisible = base.Text != string.Empty` unconditionally (`:39`). **This is the class's contract and its hazard** — the last line runs every frame and overwrites any visibility you set from code. `protected override`, so a subclass can extend it but must call `base` to keep the hide-when-empty rule. |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `Text` | [`TextWidget`](../../gui/TextWidget) | The single input this class reacts to. `AutoHideTextWidget.cs:37` and `:39` both read `base.Text`. |
| `IsVisible` | [`Widget`](../../gui/Widget) | The output this class writes, every frame, at `AutoHideTextWidget.cs:37` and `:39`. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A threshold or `HideWhenZero` option | **UNRESOLVED — absent in v1.4.5** | The rule is a hard-coded `!= string.Empty` at `AutoHideTextWidget.cs:39`. The only variant that exists is [`AutoHideZeroTextWidget`](../AutoHideZeroTextWidget), which is a **separate class** testing `IntText != 0` (`AutoHideZeroTextWidget.cs:16`), not a configurable mode on this one. |
| An `Inverse` / `ShowWhenEmpty` flag | **UNRESOLVED — absent in v1.4.5** | The whole file is 41 lines with one property and one override; there is no second behaviour flag. Positive evidence: `grep -n 'Editor(false)' AutoHideTextWidget.cs` returns one hit, `AutoHideTextWidget.cs:10`. |
| Any async / deferred hide | **UNRESOLVED — absent in v1.4.5** | The check is synchronous inside `OnLateUpdate` (`AutoHideTextWidget.cs:32`); there is no tween, timer, or coroutine anywhere in the file. |

## Examples

Hide and show by changing the text, never by touching `IsVisible`:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class QuantityLabel
{
    // `label` arrives from the prefab via a Type binding; you never new it.
    public static void Show(AutoHideTextWidget label, int quantity)
    {
        if (quantity <= 0)
        {
            // Empty text -> AutoHideTextWidget.cs:39 hides it on the next late update.
            label.Text = string.Empty;
            return;
        }

        label.Text = "x" + quantity;
        // Non-empty text -> visible on the next late update. Note we did not set
        // IsVisible; the widget owns it.
    }
}
```

Hide a whole row by pointing `WidgetToHideIfEmpty` at its container:

```csharp
using TaleWorlds.GauntletUI.Widgets;

public static class ConditionalRow
{
    // In the prefab, both the text and its parent container exist; only the
    // parent needs wiring, which the Type binding does by name.
    public static void Bind(AutoHideTextWidget label)
    {
        if (label == null)
            return;

        // From here on the container's visibility follows the text
        // (AutoHideTextWidget.cs:35-38). Do not also set container.IsVisible —
        // this line will overwrite it next frame.
        label.WidgetToHideIfEmpty = label.Parent;
    }
}
```

Detect the state the widget is actually in, without trusting your own last write:

```csharp
using TaleWorlds.GauntletUI.Widgets;

public static class VisibilityProbe
{
    public static bool IsShowing(AutoHideTextWidget label)
    {
        // Ask the text, not IsVisible: IsVisible is recomputed from it every
        // frame (AutoHideTextWidget.cs:39), but your own write may not have
        // reached the update yet.
        return label != null && !string.IsNullOrEmpty(label.Text);
    }
}
```

## Risks and crash boundaries

- **`IsVisible` is overwritten every frame.** `base.IsVisible = base.Text != string.Empty;` at `AutoHideTextWidget.cs:39`, in `OnLateUpdate`. Setting visibility from code produces a widget that reappears with no error and no log. This is the modder's "I called it and nothing happened" case.
- **`WidgetToHideIfEmpty` takes ownership of another widget's visibility.** `AutoHideTextWidget.cs:37` assigns unconditionally when the property is non-null. Two systems writing the same `IsVisible` produce a per-frame tug-of-war, resolved by update order, not by intent.
- **No null crash on the extra widget** — there is a guard at `AutoHideTextWidget.cs:35`. But `SpriteWidget`-style patterns are not present here; do not assume the same tolerance in sibling widgets.
- **Constructing it yourself is not possible in practice.** The only constructor needs a `UIContext` (`AutoHideTextWidget.cs:27`), which the movie owns. A `new AutoHideTextWidget(someContext)` from mod code will not find a valid context and is not a supported pattern.
- **Not `IsHidden`.** This class touches `IsVisible`, which is different from `IsHidden`; the two are independent in Gauntlet, and a widget can be "hidden" by flag while still logically visible to this rule. Do not use `IsHidden` to mean "empty".
- **No error when the text is whitespace.** `" "` is not `string.Empty`, so a whitespace-only string keeps the widget visible. If your value can be blank-but-not-empty, this class will not hide it.
- **Not a save participant.** No `[Serializable]`, no state; a UI presentation widget with one widget reference.

## Cross-Version Notes

The v1.4.5 file is 41 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/` layout, and the same file name and shape appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees: a `TextWidget` subclass whose entire behaviour is one `OnLateUpdate` assigning `IsVisible` from `Text`. The rule itself — `Text != string.Empty` — is what has stayed constant across those versions, and it is the thing to rely on. `WidgetToHideIfEmpty` is the more version-sensitive member: it is the one piece of optional behaviour here, and the naming (`WidgetToHideIfEmpty`, with `[Editor(false)]`) has been stable but is not protected by any native symbol. Two sibling variants exist as **separate classes rather than configurable modes**, which is the pattern to expect: [`AutoHideRichTextWidget`](../AutoHideRichTextWidget) for rich text and [`AutoHideZeroTextWidget`](../AutoHideZeroTextWidget) for the integer test. **VERIFIED MEASURED for v1.4.5** (41 lines, 1 property, 1 constructor, 1 override); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`TextWidget`](../../gui/TextWidget), whose `Text` property is the only input this class reacts to (`AutoHideTextWidget.cs:37`, `:39`).
- Visibility flag written every frame: `Widget.IsVisible` from [`Widget`](../../gui/Widget).
- Sibling variants with the same rule over a different input: [`AutoHideRichTextWidget`](../AutoHideRichTextWidget) (same body over `RichTextWidget`) and [`AutoHideZeroTextWidget`](../AutoHideZeroTextWidget) (`IntText != 0`).
- Gauntlet movie that instantiates it: the UI layer in `TaleWorlds.GauntletUI`, described here rather than linked, because its pages live outside this slice's buckets.
- Widgets that share this design idea: [`ButtonWidget`](../../gui/ButtonWidget) and [`BrushWidget`](../../gui/BrushWidget), both in the `gui` bucket.
- Bucket index: [mission-ext API index](../)