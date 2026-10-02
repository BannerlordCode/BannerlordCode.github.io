---
title: "Gui — ScreenSystem, Gauntlet and 2D drawing"
description: "Where TaleWorlds.ScreenSystem, GauntletUI and TwoDimension live. 0 pages in this tree; the 3 pages are Chinese-tree-only."
---
# Gui — ScreenSystem, Gauntlet and 2D drawing

Three namespaces merged into one bucket, because from a mod author's point of view they are one job:

| Namespace | `.cs` files | What it owns |
| --- | ---: | --- |
| `TaleWorlds.ScreenSystem` | 8 | the screen stack: push, pop, layers, input restrictions |
| `TaleWorlds.GauntletUI` | 3 | gamepad navigation contexts |
| `TaleWorlds.TwoDimension` | 54 | fonts, textures, brushes, 2D drawing |

The reason to merge them is the actual authoring path: `ScreenBase` (lifecycle) → `ScreenLayer` (attach) → `ScreenManager` (push) → `GauntletLayer` (load the XML and bind a ViewModel). The first three live here; `GauntletLayer` does **not**, because its namespace is `TaleWorlds.Engine.GauntletUI` and it resolves to [engine](../engine/). The four-layer relationship is drawn out in [UI Stack](../../architecture/ui-stack).

A thing that trips people up: `TaleWorlds.ScreenSystem` has only 8 `.cs` files, and the widgets themselves are not among them. Widgets are Gauntlet XML prefabs; the property-notification models they bind to are in [viewmodel](../viewmodel/). Neither is in this bucket, because neither is in `TaleWorlds.ScreenSystem`.

## Pages in this area (0 in English)

No pages in this bucket have been written in this tree. The three that exist are in the Chinese tree:

| Page | What it covers |
| --- | --- |
| [zh/api/gui/ScreenManager](../../../zh/api/gui/ScreenManager) | pushes and pops screens; owns the layer stack |
| [zh/api/gui/ScreenBase](../../../zh/api/gui/ScreenBase) | the base class a custom screen derives from |
| [zh/api/gui/ScreenLayer](../../../zh/api/gui/ScreenLayer) | a transparent overlay layer inside the screen stack |

Those three are a complete path rather than a sample: you cannot push a screen without the manager, and you cannot make a screen without the base class.

## Not yet written

In this tree, all three. Across both trees, the remaining 5 `TaleWorlds.ScreenSystem` types — `GlobalLayer` (the always-on overlay), `CursorType`, `InputRestrictions`, `ScreenComponent`, `IScreenManagerEngineConnection` — plus the 2D drawing family (`Font`, `ITexture`, `PrimitivePolygonMaterial`, `MaterialPool`, `EditableText`, `BitmapFontCharacter`, `TextHelper`) and `TaleWorlds.GauntletUI`'s `IGamepadNavigationContext` with its default implementation. By size the bucket is roughly 72 documented types; three have pages.

## Sibling areas

[viewmodel](../viewmodel/) · [engine](../engine/) · [core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [UI Stack](../../architecture/ui-stack)