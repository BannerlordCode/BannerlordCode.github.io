---
title: "ClanWorkshopTypeVisualBrushWidget"
description: "Auto-generated class reference for ClanWorkshopTypeVisualBrushWidget."
---
# ClanWorkshopTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Clan
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ClanWorkshopTypeVisualBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Clan/ClanWorkshopTypeVisualBrushWidget.cs`

## Overview

`ClanWorkshopTypeVisualBrushWidget` is a 47-line `BrushWidget` whose entire job is to display a clan
workshop's type icon. It has exactly one stateful member: `WorkshopType`, a `string` whose backing field
starts as `""` (`ClanWorkshopTypeVisualBrushWidget.cs:45`).

When `WorkshopType` changes, the setter does two things (`ClanWorkshopTypeVisualBrushWidget.cs:17`): it
calls `RegisterBrushStatesOfWidget()` and then `SetState(type)`. The workshop type string — the
`WorkshopType.StringId`, which is what `ClanFinanceWorkshopItemVM` publishes as `WorkshopTypeId`
(`ClanFinanceWorkshopItemVM.cs:64`) — is therefore used directly as a **Gauntlet brush-state name**.

Calling `RegisterBrushStatesOfWidget()` on every change rather than once is unusual for this codebase; most
sibling widgets guard it behind a `_firstUpdate` flag (compare
`AgentWeaponPassiveUsageVisualBrushWidget.cs:19`). The cost is a repeated brush-state registration each
time the type changes.

The widget is created by the clan-finance prefab; nothing in the 1.3.15 tree constructs it, and the
single-`UIContext` constructor (`ClanWorkshopTypeVisualBrushWidget.cs:11`) is all the framework requires.

## Mental Model

Read it as a string-to-brush-state adapter, not as a workshop model. The boundaries:

- **An unknown type string fails silently.** `SetState` is called with whatever the setter received
  (`ClanWorkshopTypeVisualBrushWidget.cs:20`). If the brush has no state with that name, the widget keeps its
  current visual and nothing warns you — which is exactly what happens for a mod that adds a new
  `WorkshopType` without adding a matching brush state to the prefab.
- **The empty string is a value like any other.** Assigning `""` from a workshop with no type reaches
  `SetState("")` and clears the icon rather than being ignored. Only the *initial* `""` is skipped, because
  the setter short-circuits on an unchanged value (`ClanWorkshopTypeVisualBrushWidget.cs:35`).
- **The setter is the only entry point.** There is no `OnLateUpdate`, no visibility logic and no per-frame
  work, so the widget is entirely event-driven from the prefab binding.
- **Re-registration is unconditional.** Every distinct value causes a full `RegisterBrushStatesOfWidget()`
  (`ClanWorkshopTypeVisualBrushWidget.cs:19`); if a prefab is repopulated in a loop — say a clan-finance list
  scrolling — that is a per-item brush-state rebuild.

## How to use

**Getting one.** Reference it from the clan-finance prefab and bind `WorkshopType` to the row's
`WorkshopTypeId`. Ensure the brush attached to this widget declares one visual state per workshop type id
you intend to show.

**Typical use** — binding a workshop row to its type icon:

```csharp
public class WorkshopIconBinder : MissionBehavior
{
    private readonly ClanWorkshopTypeVisualBrushWidget _icon;
    private readonly ClanFinanceWorkshopItemVM _row;

    public void Refresh()
    {
        if (_icon == null || _row == null) { return; }

        // The StringId becomes the brush state name (ClanWorkshopTypeVisualBrushWidget.cs:20).
        _icon.WorkshopType = _row.WorkshopTypeId;

        // No exception is raised if the prefab has no matching state - the icon simply
        // keeps whatever it was showing.
        Debug.Print("workshop type icon: " + _row.WorkshopTypeId);
    }
}
```

**The mistake that bites.** Expecting a default or fallback icon for a workshop type the prefab does not
know. `SetState` with an unrecognised name is a no-op on this widget, so a mod that adds a new
`WorkshopType` StringId and binds it here gets an empty cell with no error — not the previous workshop's
icon, not a placeholder, and not an exception. Add the matching state to the brush in the prefab.



## Key Properties

| Name | Signature |
|------|-----------|
| `WorkshopType` | `public string WorkshopType { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
ClanWorkshopTypeVisualBrushWidget widget = ...;
```

## See Also

- [Area Index](../)
- [ClanFinancePaymentSliderWidget](../ClanFinancePaymentSliderWidget)
- [ClanPartyRoleSelectionPopupWidget](../ClanPartyRoleSelectionPopupWidget)
- [BoolBrushChangerBrushWidget](../BoolBrushChangerBrushWidget)
- [中文页面](../../../../zh/api/mission-ext/ClanWorkshopTypeVisualBrushWidget)