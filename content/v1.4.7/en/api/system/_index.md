---
title: "System — the system layer: input and the runtime long tail"
description: "Where TaleWorlds.System and TaleWorlds.InputSystem live: a deliberately small bucket. No pages."
---
# System — the system layer: input and the runtime long tail

`TaleWorlds.System` and `TaleWorlds.InputSystem` (15 `.cs` files). This bucket is deliberately small: by the prefix rule only these two namespaces land here, and the rest of the runtime surface goes to [core-extra](../core-extra/).

What is actually in it is essentially the input layer: `InputKey`, `GameKey`, `HotKey`, `VirtualKeyCode`, `InputContext`, `IInputContext`, `InputState`, `InputManager`, `GameKeyContext`. A mod author touches this when rebinding keys or suppressing input — and `InputRestrictions`, the interface-side counterpart, is in [gui](../gui/).

One thing that sends people to the wrong bucket: the engine-side input manager `EngineInputManager` and the debug hotkey categories belong to `TaleWorlds.Engine.InputSystem` and resolve to [engine](../engine/), not here. [SDK Overview](../../architecture/sdk-overview) draws the line between the two input layers.

## Pages in this area (0)

There are no pages in this bucket.

## Not yet written

About 6 documented types, none with a page: `InputKey`, `GameKey`, `HotKey`, `VirtualKeyCode`, `InputContext`, `IInputContext` — plus the surrounding input plumbing `InputState`, `InputManager`, `GameKeyContext`, `EmptyInputManager` and `EmptyInputContext`.

The bucket is small, but the consequence is not: rebinding logic is built on `GameKey` and `VirtualKeyCode`, and neither has a page, so "how do I add a custom key binding" has no answer anywhere in the current documentation.

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [SDK Overview](../../architecture/sdk-overview)