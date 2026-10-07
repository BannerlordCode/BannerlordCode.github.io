---
title: "ConversationNameButtonWidget"
description: "Auto-generated class reference for ConversationNameButtonWidget."
---
# ConversationNameButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationNameButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/ConversationNameButtonWidget.cs`

## Overview

`ConversationNameButtonWidget` is the clickable speaker-name button on the conversation screen. It adds a
hover-only relation bar to a `ButtonWidget`: `OnHoverBegin` shows `RelationBarContainer` **if**
`IsRelationEnabled` is true, and `OnHoverEnd` hides it unconditionally
(`ConversationNameButtonWidget.cs:17`, `ConversationNameButtonWidget.cs:24`).

Both properties are ordinary notifying ones. `IsRelationEnabled` raises `OnPropertyChanged` on change
(`ConversationNameButtonWidget.cs:45`) and `RelationBarContainer` does the same
(`ConversationNameButtonWidget.cs:65`). Neither setter has any side effect of its own — the visibility change
happens only inside the hover handlers.

That asymmetry is the point of the design: the relation bar is a *preview* that exists only while the mouse
is over the name, and it appears only for characters the conversation logic marked as having a meaningful
relation to show.

The widget is created by the conversation prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`ConversationNameButtonWidget.cs:11`) is all the framework requires.

## Mental Model

Read it as a hover-scoped visibility wrapper, not as a persistent panel. The boundaries:

- **Show is conditional, hide is unconditional.** `OnHoverBegin` guards on `IsRelationEnabled`
  (`ConversationNameButtonWidget.cs:20`); `OnHoverEnd` assigns `false` with no guard
  (`ConversationNameButtonWidget.cs:27`). So the container's final visibility after any hover is always
  hidden, whatever you set it to.
- **`RelationBarContainer` is dereferenced without a null check** in both handlers. Unlike
  `CraftingPieceTypeSelectorButtonWidget`, which guards its `VisualsWidget`
  (`CraftingPieceTypeSelectorButtonWidget.cs:21`), this class will throw on the first mouse-over if the
  container is unbound in the prefab.
- **Setting `IsRelationEnabled` does not show or hide anything by itself.** The property only records intent;
  the container's visibility is driven exclusively by mouse enter and leave. Flipping the flag mid-hover has
  no visible effect until the next hover.
- **Nothing re-shows the bar on state change.** There is no `OnLateUpdate`; a bar hidden by leaving the
  widget stays hidden until the pointer comes back.

## How to use

**Getting one.** Reference it from the conversation prefab, bind `RelationBarContainer`, and set
`IsRelationEnabled` from the conversation view model for speakers whose relation is worth previewing.

**Typical use** — revealing a character's relation bar on hover:

```csharp
public class ConversationRelationBinder : MissionBehavior
{
    private readonly ConversationNameButtonWidget _nameButton;

    public void BindFor(Hero speaker)
    {
        if (_nameButton == null || speaker == null || Campaign.Current == null) { return; }

        // Record intent only - visibility is decided in OnHoverBegin (ConversationNameButtonWidget.cs:20).
        _nameButton.IsRelationEnabled = speaker.IsNotable;

        // Do NOT set RelationBarContainer.IsVisible here: OnHoverEnd forces it false
        // unconditionally (ConversationNameButtonWidget.cs:27).
        Debug.Print("relation bar enabled: " + speaker.Name.ToString());
    }
}
```

**The mistake that bites.** Showing the relation bar yourself — `RelationBarContainer.IsVisible = true` when
the conversation opens, so it is visible without hovering. It works for as long as the pointer stays off the
name; the first time the mouse enters and leaves the button, `OnHoverEnd` sets it to `false`
unconditionally (`ConversationNameButtonWidget.cs:27`) and it never comes back until the next hover. There
is no public hook for "always show".



## Key Properties

| Name | Signature |
|------|-----------|
| `IsRelationEnabled` | `public bool IsRelationEnabled { get; set; }` |
| `RelationBarContainer` | `public Widget RelationBarContainer { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ConversationNameButtonWidget widget = ...;
```

## See Also

- [Area Index](../)
- [CraftingPieceTypeSelectorButtonWidget](../CraftingPieceTypeSelectorButtonWidget)
- [AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [中文页面](../../../../zh/api/mission-ext/ConversationNameButtonWidget)