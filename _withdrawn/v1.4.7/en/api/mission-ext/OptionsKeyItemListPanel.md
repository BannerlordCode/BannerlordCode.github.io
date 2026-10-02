---
title: "OptionsKeyItemListPanel"
description: "OptionsKeyItemListPanel — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# OptionsKeyItemListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class OptionsKeyItemListPanel : ListPanel`  
**Base:** `ListPanel`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs`

## Overview

`OptionsKeyItemListPanel` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ListPanel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OptionsKeyItemListPanel`.
- **Instance members** (6): `OnLateUpdate`, `OnHoverBegin`, `OnHoverEnd`, `OptionTitle`, `OptionDescription`, `OptionExtraInformation`.
- **Extension points** (3): `OnLateUpdate`, `OnHoverBegin`, `OnHoverEnd`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnHoverBegin` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnHoverEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateUpdate` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OptionDescription` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OptionExtraInformation` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OptionTitle` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `OptionsKeyItemListPanel` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public OptionsKeyItemListPanel(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ListPanel.
var optionsKeyItemListPanel = new OptionsKeyItemListPanel(context);

// Lifecycle hooks this type declares:
//   protected override void OnLateUpdate(float dt)
//   protected override void OnHoverBegin()
//   protected override void OnHoverEnd()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/OptionsKeyItemListPanel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [OptionsScreenWidget](../OptionsScreenWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options`.

Section: [api/mission-ext/](../) — the other types in this bucket.
