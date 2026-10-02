---
title: "Viewmodel — ViewModelCollection: the data behind the UI"
description: "Where the three *.ViewModelCollection namespaces live. The second largest bucket, with no pages at all."
---
# Viewmodel — ViewModelCollection: the data behind the UI

Three namespaces land in this bucket: `TaleWorlds.CampaignSystem.ViewModelCollection`, `TaleWorlds.MountAndBlade.ViewModelCollection` (8 `.cs` files) and `TaleWorlds.Core.ViewModelCollection` (12). By the taxonomy that comes to roughly 357 types — the second largest bucket in the tree.

This is the **data source** side of the interface. The Gauntlet XML declares widgets; those widgets bind to the property-notification models in here; when the model raises a property change, the screen updates. The widgets themselves are in [gui](../gui/), and the two have to be read together.

One thing worth knowing before you start looking: the `ViewModel` base class is in [core-extra](../core-extra/), not here. It belongs to `TaleWorlds.Core`, whereas this bucket collects the `TaleWorlds.Core.ViewModelCollection` sub-namespace. The base class and its Collection sub-namespace sit in different directories as a direct result of the prefix rule.

Namespaces decide buckets, and that has a practical consequence for UI work: the campaign ViewModels are in this bucket while the campaign entities they display are in [campaign](../campaign/). You cross a directory boundary every time you go from "what the model holds" to "what the model is a view of".

## Pages in this area (0)

There are no pages in this bucket. That is the current state.

## Not yet written

All of it, in three groups:

- **Item and inventory rows**: the `ItemStackVM` / `ItemComponentVM` family, quantity and durability rows.
- **Party, clan and map models**: `PartyVM`, `ClanVM`, `KingdomVM`, `SettlementVM`, the map marker and icon binding models.
- **Per-screen models**: tournaments (the `TournamentBracketVM` family), inventory and crafting, trade, the diplomacy conversation, and the battle-side scoreboard and HUD models — which is most of the 8 types in `MountAndBlade.ViewModelCollection`.

Roughly 357 types, which makes this the second largest gap in the documentation; only [mission-ext](../mission-ext/) is bigger. The `ViewModel` base itself is documented at [zh/api/core-extra/ViewModel](../../../zh/api/core-extra/ViewModel), so "how property notification works" is still answerable — the concrete screen models are not.

## Sibling areas

[gui](../gui/) · [engine](../engine/) · [core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [UI Stack](../../architecture/ui-stack)