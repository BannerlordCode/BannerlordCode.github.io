---
title: "CardSelectionPopupButtonWidget"
description: "CardSelectionPopupButtonWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# CardSelectionPopupButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`  
**Base:** `ButtonWidget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs`

## Overview

`CardSelectionPopupButtonWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ButtonWidget, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CardSelectionPopupButtonWidget`.
- **Instance members** (5): `PropertiesContainer`, `SetState`, `OnHoverBegin`, `OnHoverEnd`, `OnMouseScroll`.
- **Extension points** (4): `SetState`, `OnHoverBegin`, `OnHoverEnd`, `OnMouseScroll`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetState` | method (override) | Overrides the base member. Takes 1 argument: `string stateName`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OnHoverBegin` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMouseScroll` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PropertiesContainer` | property | Instance entry point `CircularAutoScrollablePanelWidget` property. Read it for current state; a declared setter writes that state in place. |
| `CardSelectionPopupButtonWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public CardSelectionPopupButtonWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ButtonWidget.
var cardSelectionPopupButtonWidget = new CardSelectionPopupButtonWidget(context);

// Lifecycle hooks this type declares:
//   public override void SetState(string stateName)
//   protected override void OnHoverBegin()
//   protected override void OnHoverEnd()
//   protected override void OnMouseScroll()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ButtonWidget](../../gui/ButtonWidget/) — `TaleWorlds.GauntletUI.BaseTypes`.
- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.

Section: [api/mission-ext/](../) — the other types in this bucket.
