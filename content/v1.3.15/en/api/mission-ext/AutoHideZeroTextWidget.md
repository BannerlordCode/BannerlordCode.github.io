---
title: "AutoHideZeroTextWidget"
description: "Auto-generated class reference for AutoHideZeroTextWidget."
---
# AutoHideZeroTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AutoHideZeroTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideZeroTextWidget.cs`

## Overview

`AutoHideZeroTextWidget` is a 23-line `TextWidget` that hides itself when the number it displays is zero. Its
entire behaviour is one line inside `OnLateUpdate`: `base.IsVisible = base.IntText != 0`
(`AutoHideZeroTextWidget.cs:17`). There is no state of its own, no other property, and no construction site
anywhere in the 1.3.15 tree — the prefab that uses it is the only owner.

The `IntText` property it tests is not a stored integer. `TextWidget.IntText` is a *parse* of the widget's
underlying string: the getter runs `int.TryParse(this._text.Value, out num)` and falls back to **`-1`**
when the parse fails (`TextWidget.cs:61`, `TextWidget.cs:65`). That single fact governs everything this
widget does.

## Mental Model

Read it as "hide when the text is exactly a zero integer", not as "hide when empty". Because the test is
`IntText != 0`, the visibility table is:

| text content | `IntText` | visible? |
|---|---|---|
| `"5"` | `5` | yes |
| `"0"` | `0` | **no** |
| `""` (cleared) | `-1` (parse fails) | **yes** |
| `"N/A"` | `-1` (parse fails) | **yes** |
| `"-3"` | `-3` | yes |

Three boundaries follow:

- **Clearing the text does not hide the widget.** `SetText("")` or `Text = ""` leaves `IntText` at the `-1`
  fallback, which is non-zero, so the label stays on screen showing nothing. This is the opposite of its
  sibling `AutoHideRichTextWidget`, which tests `Text != string.Empty`
  (`AutoHideRichTextWidget.cs:24`) and therefore *does* disappear when emptied.
- **`IsVisible` is overwritten every frame, unconditionally.** The assignment has no guard, so any external
  code that sets `IsVisible = true` to show the label is reverted on the next late update. The only
  supported way to show it is to change the number.
- **There is no `WidgetToHideIfEmpty` equivalent.** The rich-text sibling exposes one and propagates
  emptiness to an arbitrary sibling widget (`AutoHideRichTextWidget.cs:20`); this class cannot, so you
  cannot use it to hide a container around a zero value.

## How to use

**Getting one.** Reference the class by name from a Gauntlet prefab; the framework constructs it through
the single-`UIContext` constructor at `AutoHideZeroTextWidget.cs:11`. Push values into `IntText` from
whatever view model or behaviour owns the number.

**Typical use** — an ammunition counter that disappears at zero:

```csharp
public class ZeroHidingCounter : MissionLogic
{
    private readonly AutoHideZeroTextWidget _label;

    public ZeroHidingCounter(AutoHideZeroTextWidget label) { _label = label; }

    public override void OnMissionTick(int tick)
    {
        Agent main = Agent.Main;
        if (main == null) { return; }

        // IntText is a parse of the underlying string (TextWidget.cs:61).
        // 0 -> hidden, anything else (including the -1 parse-failure fallback) -> shown.
        _label.IntText = main.HasMount ? 0 : 3;
    }
}
```

**The mistake that bites.** Using it as a general "hide when there is nothing to show" label and clearing
the text with `Text = ""` when the value is unavailable. The empty string fails `int.TryParse`, the getter
returns the `-1` fallback (`TextWidget.cs:65`), `-1 != 0` is true, and the widget stays visible with nothing
in it — so the label you meant to hide is the one label that never disappears. Write `0` instead.



## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
AutoHideZeroTextWidget widget = ...;
```

## See Also

- [Area Index](../)
- [AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [AutoHideTextWidget](../AutoHideTextWidget)
- [AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [中文页面](../../../../zh/api/mission-ext/AutoHideZeroTextWidget)