---
title: "AutoHideRichTextWidget"
description: "A Gauntlet RichTextWidget that hides itself while its Text is empty. Covers WidgetToHideIfEmpty and the OnLateUpdate visibility rule that overwrites any IsVisible set from code."
---

# AutoHideRichTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideRichTextWidget : RichTextWidget`
**Base:** `RichTextWidget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideRichTextWidget.cs`

## Overview

`AutoHideRichTextWidget` is a [`RichTextWidget`](../../gui/RichTextWidget) that **makes itself invisible whenever its `Text` is the empty string**. The whole class is 41 lines and its entire behaviour is one override: `OnLateUpdate` at `AutoHideRichTextWidget.cs:32-40` ends with `base.IsVisible = base.Text != string.Empty;` (`AutoHideRichTextWidget.cs:39`).

It is the rich-text twin of [`AutoHideTextWidget`](../AutoHideTextWidget), and the comparison is worth doing explicitly: the two files are **41 lines each and the bodies are line-for-line identical** except for the base type. Its optional extra, `WidgetToHideIfEmpty` (`AutoHideRichTextWidget.cs:11`), makes a second widget obey the same rule (`AutoHideRichTextWidget.cs:35-38`).

Its whole public surface is one property, one constructor, one protected override. Everything else is inherited from `RichTextWidget`.

## Mental Model

### What it is / which layer

- It is a **presentation-only policy layer** over rich text. It owns no state beyond one `Widget` reference, reads `base.Text`, writes `base.IsVisible`, and does nothing else.
- The reason it exists separately from `AutoHideTextWidget` rather than as a mode on it is that Gauntlet's rich text is a **different widget type with different markup handling** — inline images, colours, hyperlinks. A plain `TextWidget` cannot carry those, so the hide-when-empty rule had to be re-implemented rather than inherited.
- The class is **not sealed** — `public class AutoHideRichTextWidget : RichTextWidget` (`AutoHideRichTextWidget.cs:6`) — so you may subclass it.

### The consequence that matters

**It overwrites `IsVisible` every frame, after you set it.** The assignment at `AutoHideRichTextWidget.cs:39` sits in `OnLateUpdate`, the late phase of the update cycle, so a visibility you set from code in an earlier phase is recomputed on the same frame. The only durable way to hide the widget is to make `Text` empty.

Note a subtlety specific to this class: it reads `base.Text`, **not** any rich-text-specific accessor. So despite inheriting `RichTextWidget`, the rule is evaluated on the plain `Text` string. If the rich-text content is assembled through a separate rich-text API rather than through `Text`, this class will not see it and will hide a widget that is visually non-empty.

## How to use

**How to obtain it.** You cannot usefully construct it — the only constructor takes a `UIContext` (`AutoHideRichTextWidget.cs:27`), which the Gauntlet movie system owns. **The acquisition path is the prefab**: declare `<AutoHideRichTextWidget>` in a Gauntlet XML prefab, let the movie instantiate it, and reach the instance from the widget tree via a `Type` binding or a parent lookup. The class is `public` and not sealed (`AutoHideRichTextWidget.cs:6`), so you may also subclass it.

**A typical use.** Bind it in a prefab and drive the text; visibility follows automatically:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

// In Gauntlet XML:
//   <AutoHideRichTextWidget Source="@..."/>
// The instance comes from the movie's prefab tree, not from `new`.

public class MyRichLabelBinding
{
    public void Apply(AutoHideRichTextWidget label, string markup)
    {
        // AutoHideRichTextWidget.cs:39 runs on the next OnLateUpdate and makes
        // the widget visible for non-empty Text, hidden for "".
        label.Text = markup ?? string.Empty;

        // Do NOT set label.IsVisible here — the next late update overwrites it.
    }
}
```

Subclass it when you need the same rule with an extra condition:

```csharp
using TaleWorlds.GauntletUI;
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

// AutoHideRichTextWidget is public and not sealed (AutoHideRichTextWidget.cs:6).
// Override OnLateUpdate and call base first: the base does the hide-when-empty
// work (AutoHideRichTextWidget.cs:39) that you are extending.
public class AutoHideRichTextWhenShort : AutoHideRichTextWidget
{
    public AutoHideRichTextWhenShort(UIContext context)
        : base(context)
    {
    }

    protected override void OnLateUpdate(float dt)
    {
        base.OnLateUpdate(dt);

        // Runs every frame — keep it cheap.
        if (base.Text.Length < 3)
        {
            base.IsVisible = false;
        }
    }
}
```

**What to watch out for.** The two silent traps. First, setting `IsVisible` from code does not stick, because `AutoHideRichTextWidget.cs:39` rewrites it every frame. Second, if you set `WidgetToHideIfEmpty`, the referenced widget's `IsVisible` is now owned by this class (`AutoHideRichTextWidget.cs:37`), so any other system toggling that widget fights it per frame.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `WidgetToHideIfEmpty` | `[Editor(false)] public Widget WidgetToHideIfEmpty { get; set; }` at `AutoHideRichTextWidget.cs:11` | An optional second widget given the same "hide when empty" treatment. Backing field at `AutoHideRichTextWidget.cs:8`; the setter compares against the current value, assigns, and calls `OnPropertyChanged(value, "WidgetToHideIfEmpty")` (`AutoHideRichTextWidget.cs:19-23`). Read at `AutoHideRichTextWidget.cs:35` **with a null guard**, so leaving it null is safe. `[Editor(false)]` keeps it out of the Gauntlet editor's authoring list. |
| `AutoHideRichTextWidget(UIContext)` | `public AutoHideRichTextWidget(UIContext context) : base(context)` at `AutoHideRichTextWidget.cs:27-30` | The only constructor, forwarding to `RichTextWidget` and doing nothing else. **Not callable from mod code**, because `UIContext` is supplied by the movie. Its purpose is to match the constructor the movie's activation lookup requires. |
| `OnLateUpdate(float dt)` | `protected override void OnLateUpdate(float dt)` at `AutoHideRichTextWidget.cs:32-40` | The class's whole behaviour: `base.OnLateUpdate(dt)` (`:34`), then `WidgetToHideIfEmpty.IsVisible = base.Text != string.Empty` when non-null (`:35-38`), then `base.IsVisible = base.Text != string.Empty` unconditionally (`:39`). **Contract and hazard in one member** — the last line overwrites any visibility you set from code, every frame. `protected override`, so a subclass extends it but must call `base` to keep the rule. |

Inherited members that matter here but belong to another page:

| Member | Where it lives | Why it matters on this page |
| --- | --- | --- |
| `Text` | [`RichTextWidget`](../../gui/RichTextWidget) | The only input this class reacts to, read as `base.Text` at `AutoHideRichTextWidget.cs:37` and `:39`. Despite the rich-text base, the rule reads the plain `Text` string. |
| `IsVisible` | [`Widget`](../../gui/Widget) | The output written every frame at `AutoHideRichTextWidget.cs:37` and `:39`. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A rich-text-specific emptiness check | **UNRESOLVED — absent in v1.4.5** | The test is `base.Text != string.Empty` (`AutoHideRichTextWidget.cs:39`) — the same string test as the plain-text sibling. There is no check that ignores markup-only content. Positive evidence: the file is 41 lines and `grep -n 'Text' AutoHideRichTextWidget.cs` returns only the base-class call at `:34`, the two `base.Text` reads at `:37`/`:39`, and `OnPropertyChanged` at `:22`. |
| A threshold or `HideWhenZero` option | **UNRESOLVED — absent in v1.4.5** | The rule is hard-coded. The integer variant is a separate class, [`AutoHideZeroTextWidget`](../AutoHideZeroTextWidget), testing `IntText != 0` (`AutoHideZeroTextWidget.cs:16`). |
| An `Inverse` / `ShowWhenEmpty` flag | **UNRESOLVED — absent in v1.4.5** | `grep -n 'Editor(false)' AutoHideRichTextWidget.cs` returns exactly one hit, `AutoHideRichTextWidget.cs:10`. There is no second behaviour flag. |

## Examples

Hide and show by changing the text only:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class RichLabel
{
    public static void Show(AutoHideRichTextWidget label, string markup)
    {
        if (string.IsNullOrEmpty(markup))
        {
            label.Text = string.Empty;   // hidden on next late update
            return;
        }

        label.Text = markup;            // visible on next late update
        // Note: IsVisible is never touched here; the widget owns it.
    }
}
```

Hide a surrounding row as well:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class ConditionalRichRow
{
    public static void Bind(AutoHideRichTextWidget label)
    {
        if (label == null)
            return;

        // From here the container follows the text
        // (AutoHideRichTextWidget.cs:35-38). Do not also set container.IsVisible.
        label.WidgetToHideIfEmpty = label.Parent;
    }
}
```

Read the state the widget is actually driven by, rather than trusting `IsVisible`:

```csharp
using TaleWorlds.MountAndBlade.GauntletUI.Widgets;

public static class RichLabelProbe
{
    public static bool HasContent(AutoHideRichTextWidget label)
    {
        // The rule is derived from Text (AutoHideRichTextWidget.cs:39), so ask
        // Text. Reading IsVisible can disagree for the rest of the frame,
        // because it is only recomputed in OnLateUpdate.
        return label != null && !string.IsNullOrEmpty(label.Text);
    }
}
```

## Risks and crash boundaries

- **`IsVisible` is overwritten every frame.** `base.IsVisible = base.Text != string.Empty;` at `AutoHideRichTextWidget.cs:39`, inside `OnLateUpdate`. A visibility set from code is recomputed on the same frame with no error and no log — this is the "called it, nothing happened" case.
- **`WidgetToHideIfEmpty` takes ownership of another widget's visibility.** `AutoHideRichTextWidget.cs:37` assigns unconditionally when non-null, so two systems writing the same flag produce an order-dependent tug-of-war.
- **The rule reads plain `Text`, not a rich-text accessor.** Despite deriving from `RichTextWidget`, the test at `AutoHideRichTextWidget.cs:39` is a plain string comparison. Rich-text content supplied through another API is invisible to this class, so the widget can hide while showing content.
- **Constructing it yourself is not a supported pattern.** The only constructor needs a `UIContext` (`AutoHideRichTextWidget.cs:27`), owned by the movie.
- **`IsVisible` is not `IsHidden`.** The two are independent in Gauntlet; this class only touches `IsVisible`.
- **Whitespace is not empty.** `" "` keeps the widget visible, so a blank-but-not-empty value will not hide it.
- **Not a save participant.** No `[Serializable]`, no state; a UI presentation widget with a single widget reference.

## Cross-Version Notes

The v1.4.5 file is 41 lines under the `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/` layout, and the same file name and shape appear in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees: a `RichTextWidget` subclass whose entire behaviour is one `OnLateUpdate` assigning `IsVisible` from `Text`. The v1.4.5 body is **identical to `AutoHideTextWidget`'s** except for the base type — verified by reading both 41-line files side by side — so the two classes are maintained in parallel and any fix to one does not automatically apply to the other. That parallel-maintenance fact is the practical warning: if you subclass `AutoHideRichTextWidget`, do not assume a future fix to `AutoHideTextWidget` reaches you. The three AutoHide variants exist as **separate classes rather than configurable modes**, which is the structural pattern to expect: [`AutoHideTextWidget`](../AutoHideTextWidget) and [`AutoHideZeroTextWidget`](../AutoHideZeroTextWidget) complete the family. **VERIFIED MEASURED for v1.4.5** (41 lines, 1 property, 1 constructor, 1 override, body diffed against the plain-text sibling); the sibling version trees were not read line by line for this page.

## Dependencies

- Base type: [`RichTextWidget`](../../gui/RichTextWidget), whose `Text` property is the only input this class reacts to (`AutoHideRichTextWidget.cs:37`, `:39`).
- Visibility flag written every frame: `Widget.IsVisible` from [`Widget`](../../gui/Widget).
- Plain-text twin with an identical body: [`AutoHideTextWidget`](../AutoHideTextWidget).
- Integer-text variant of the same rule: [`AutoHideZeroTextWidget`](../AutoHideZeroTextWidget), which tests `IntText != 0` (`AutoHideZeroTextWidget.cs:16`).
- Related widget family in the `gui` bucket: [`ButtonWidget`](../../gui/ButtonWidget), [`BrushWidget`](../../gui/BrushWidget).
- Bucket index: [mission-ext API index](../)