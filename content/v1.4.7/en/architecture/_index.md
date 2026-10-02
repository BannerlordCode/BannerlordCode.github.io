---
title: "Bannerlord v1.4.7 Architecture"
description: "Architecture hub for the v1.4.7 docs: assembly layering, module loading, the save stack, the UI stack, and what changed from 1.4.5 and 1.3.15."
---
# Bannerlord v1.4.7 Architecture

This section answers the big-picture question: **how is v1.4.7 layered, which assembly do you
reference for what, and which layers must not call each other.** If you just want a class, go to
the [API reference](../api/); if you want to know what moved, read
[Version Delta](./version-delta).

## Five pages, read in this order

| Page | Question it answers | After reading it you can |
| --- | --- | --- |
| [SDK Overview](./sdk-overview) | How are the assemblies layered, which one do I reference | Say what `TaleWorlds.Core` / `MountAndBlade` / `CampaignSystem` each own |
| [Module System](./module-system) | How does `Module` load and call `MBSubModuleBase` | Write your own `SubModule` and hook the right lifecycle callback |
| [Save System](./save-system) | How do my fields get into a save and come back | Persist custom data via `SaveableTypeDefiner` and `SaveManager` |
| [UI Stack](./ui-stack) | How `ScreenBase` / `ScreenLayer` / `GauntletLayer` / `ViewModel` nest | Push a custom screen and wire property notification |
| [Version Delta](./version-delta) | What actually changed in 1.4.7 | Decide whether your mod needs edits or just a recompile |

## Mental model: five layers, write downward only

```text
┌─ storymode / sandbox ────── game content (swappable, can be disabled)
├─ campaign / campaign-ext ── campaign world state and rules (persistent, saved)
├─ mission / mission-ext ──── battle scene state (transient, never saved)
├─ gui / viewmodel ────────── screens and binding (transient)
└─ core / core-extra ──────── foundation: loading, events, collections, platform
```

Three rules beat memorising any class table:

1. **State and events live in the same layer.** To change campaign data, go
   `CampaignEvents` → `*Action.Apply`. To change in-battle state, use the events on `Mission`.
   Never write `Hero` fields from a mission behaviour.
2. **Foundation never knows about the domain.** `TaleWorlds.Core` contains no `Hero` reference.
   The arrow is campaign → core, never the reverse.
3. **Register rather than subclass.** The game turns almost every extension point into a
   registration call (`CampaignGameStarter.AddBehavior`, `ScreenManager.AddGlobalLayer`).
   Inherit a whole class only where the framework left a `virtual` for it.

## Where to start

| I want to | Read first | Then |
| --- | --- | --- |
| get my mod loaded | [Module System](./module-system) | [Core](../api/core/) |
| hook campaign behaviour | [Module System](./module-system) | [Campaign-Ext](../api/campaign-ext/) |
| build a screen | [UI Stack](./ui-stack) | [GUI](../api/gui/) |
| store my own data | [Save System](./save-system) | [Save System](../api/save-system/) |
| debug an upgrade break | [Version Delta](./version-delta) | [Cross-version compare](../../../versions/) |

## See also

- ↑ [Version home](../)
- ↔ [API Reference](../api/)
- ↗ [Cross-Version Class Comparison](../../../versions/)
- ↘ [v1.4.5 docs](../../../v1.4.5/en/architecture/) · [v1.3.15 docs](../../../v1.3.15/en/architecture/)