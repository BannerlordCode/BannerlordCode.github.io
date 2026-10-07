---
title: "CharacterCreationCultureVisualBrushWidget"
description: "Auto-generated class reference for CharacterCreationCultureVisualBrushWidget."
---
# CharacterCreationCultureVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.CharacterCreation.Culture
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterCreationCultureVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CharacterCreation/Culture/CharacterCreationCultureVisualBrushWidget.cs`

## Overview

`CharacterCreationCultureVisualBrushWidget` is the character-creation backdrop that shows the selected culture's
landscape. It is a `BrushWidget` that owns four optional parallax layers — `Layer1Widget` … `Layer4Widget`,
each a `ParallaxItemBrushWidget` (`CharacterCreationCultureVisualBrushWidget.cs:20`) — plus a small/large
switch and an animated cross-fade.

The switch is `UseSmallVisuals`, a plain auto-property initialised to `true`
(`CharacterCreationCultureVisualBrushWidget.cs:15`). The two branches of `SetCultureVisual` are nothing
alike:

- **Small visuals** load a single sprite by path, `CharacterCreation\Culture\<cultureId>`, falling back to
  `CharacterCreation\Culture\blank_culture` when that sprite is missing
  (`CharacterCreationCultureVisualBrushWidget.cs:86`), and then rewrite the sprite of **every** `StyleLayer`
  of **every** style on this widget's own brush, in place
  (`CharacterCreationCultureVisualBrushWidget.cs:99`). The four parallax layers are untouched.
- **Large visuals** do not touch this brush at all. They call `SetState(cultureId)` on each of the four
  parallax layers (`CharacterCreationCultureVisualBrushWidget.cs:108`,
  `CharacterCreationCultureVisualBrushWidget.cs:123`), so the culture id doubles as a brush-state name.

Fading is a single `_alphaTarget` that `OnLateUpdate` lerps toward at `dt * 10f`
(`CharacterCreationCultureVisualBrushWidget.cs:73`), applying the result through `SetGlobalAlphaRecursively`
to the whole subtree. An empty or null `CurrentCultureId` sets the target to `0` and returns immediately,
without swapping any sprite (`CharacterCreationCultureVisualBrushWidget.cs:79`).

## Mental Model

Read it as a two-strategy sprite swap with an asymmetric fade, not as a normal binding. The boundaries:

- **`UseSmallVisuals` is the only property here with no notification.** It is a bare auto-property
  (`CharacterCreationCultureVisualBrushWidget.cs:15`); unlike `CurrentCultureId` and `IsBig` it never calls
  `OnPropertyChanged` and never re-applies the visual. Flipping it at runtime changes nothing until
  `CurrentCultureId` is assigned a *different* value.
- **Fade-out is animated, fade-in is instantaneous.** The `CurrentCultureId` setter calls
  `SetCultureVisual(value)` and then immediately `SetGlobalAlphaRecursively(1f)`
  (`CharacterCreationCultureVisualBrushWidget.cs:146`), which snaps the subtree to full alpha; only the
  clear path leaves `_alphaTarget` at `0` for `OnLateUpdate` to animate. So a culture appears instantly and a
  culture disappears over a fraction of a second.
- **`IsBig` is inert.** It is a fully-implemented notifying property (`CharacterCreationCultureVisualBrushWidget.cs:155`)
  but nothing inside the class reads it — the actual small/large decision reads `UseSmallVisuals`.
- **Parallax brush states are registered once, on the first frame only.** The `_isFirstFrame` block calls
  `RegisterBrushStatesOfWidget()` on each of the four layers (`CharacterCreationCultureVisualBrushWidget.cs:54`)
  and then clears the flag (`CharacterCreationCultureVisualBrushWidget.cs:71`). A layer bound after that
  frame never gets its states registered, and `SetState` on it will not resolve.
- **The small-visual path mutates a shared brush in place.** Like `BarterItemVisualBrushWidget`, it writes
  `layers[i].Sprite` into the brush asset rather than swapping the brush, so any other widget sharing that
  brush changes with it.

## How to use

**Getting one.** Reference it from the character-creation prefab and bind `Layer1Widget` … `Layer4Widget`
plus `CurrentCultureId` from the culture view model. The single-`UIContext` constructor at
`CharacterCreationCultureVisualBrushWidget.cs:38` is the only framework requirement.

**Typical use** — switching the backdrop as the player picks a culture:

```csharp
public class CultureBackdropBinder : MissionBehavior
{
    private readonly CharacterCreationCultureVisualBrushWidget _backdrop;

    public void ShowCulture(string cultureId)
    {
        if (_backdrop == null) { return; }

        // Must be decided BEFORE the id: UseSmallVisuals has no setter logic at all
        // (CharacterCreationCultureVisualBrushWidget.cs:15).
        _backdrop.UseSmallVisuals = true;

        // Assigning a different id swaps the sprite, falling back to blank_culture when the
        // sprite is missing (CharacterCreationCultureVisualBrushWidget.cs:89).
        _backdrop.CurrentCultureId = cultureId;

        // null or "" only sets the fade target - no sprite swap happens.
        Debug.Print("backdrop culture is now " + _backdrop.CurrentCultureId);
    }
}
```

**The mistake that bites.** Setting `UseSmallVisuals` after `CurrentCultureId` (or expecting it to take
effect immediately). It is a plain auto-property with no setter body, so nothing re-runs
`SetCultureVisual`; the widget keeps painting the previous mode's result — a small sprite stretched across
four parallax layers, or a culture id that is being looked up as a brush state on layers that were never
given one. Decide the mode first, then assign the culture id.



## Key Properties

| Name | Signature |
|------|-----------|
| `UseSmallVisuals` | `public bool UseSmallVisuals { get; set; }` |
| `Layer1Widget` | `public ParallaxItemBrushWidget Layer1Widget { get; set; }` |
| `Layer2Widget` | `public ParallaxItemBrushWidget Layer2Widget { get; set; }` |
| `Layer3Widget` | `public ParallaxItemBrushWidget Layer3Widget { get; set; }` |
| `Layer4Widget` | `public ParallaxItemBrushWidget Layer4Widget { get; set; }` |
| `CurrentCultureId` | `public string CurrentCultureId { get; set; }` |
| `IsBig` | `public bool IsBig { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CharacterCreationCultureVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CharacterCreationOptionsItemWidget](../CharacterCreationOptionsItemWidget)
- [CharacterTableauWidget](../CharacterTableauWidget)
- [ParallaxItemBrushWidget](../ParallaxItemBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/CharacterCreationCultureVisualBrushWidget)