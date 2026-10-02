---
title: "Campaign — campaign world: entities and state"
description: "The bucket for the TaleWorlds.CampaignSystem namespace itself: the entities that make up the campaign world and the rules that read and write them. 5 pages."
---
# Campaign — campaign world: entities and state

This bucket is `TaleWorlds.CampaignSystem` **the namespace itself** — the campaign world proper: who is in it, what state it is in, and the rules that change that state. In 1.4.7 that namespace root holds 135 `.cs` files.

For a mod author this is the doorway to the persistent half of the game. `Hero`, `Party`, `Clan`, `Kingdom`, `Town`, `ItemObject` — all of them live here, and all of them are things that end up in a save. That is the line that matters when deciding where your own state belongs: if it survives a save it belongs to this bucket, if it only exists during a battle it belongs in [mission-ext](../mission-ext/).

The sub-namespaces of `CampaignSystem` are deliberately **not** here. The prefix rules send them elsewhere:

| Sub-namespace | Resolves to |
| --- | --- |
| `CampaignBehaviors`, `ComponentInterfaces`, `GameComponents` | [campaign-ext](../campaign-ext/) |
| `Conversation`, `Issues`, `PartyBasedVisitables` | [campaign-ext](../campaign-ext/) |
| `SandBox` | [sandbox](../sandbox/) |
| `ViewModelCollection` | [viewmodel](../viewmodel/) |

The `*VM` types you bind in the interface are therefore not here either — they are the binding layer, not the state layer.

## Pages in this area (5)

| Page | What it covers |
| --- | --- |
| [Campaign](./Campaign) | the campaign world singleton: current campaign, time, event bus |
| [CampaignGameStarter](./CampaignGameStarter) | the door a module hangs campaign behaviour on |
| [CampaignBehaviorBase](./CampaignBehaviorBase) | the base class for anything registered on that door |
| [CampaignEvents](./CampaignEvents) | the static hub the campaign fires its events on |
| [IFaction](./IFaction) | the faction abstraction behind `Clan` and `Kingdom` |

Those five are one path rather than five separate topics: a `CampaignBehaviorBase` registered on `CampaignGameStarter` subscribes to `CampaignEvents`, and the change lands on a faction object like `IFaction`.

## Not yet written

Types the namespace rule puts in this bucket that have no page: `Hero`, `Party`, `Clan`, `Kingdom`, the `Settlement` family, `ItemObject`, the equipment and crafting models, the diplomacy model, map events (`MapEvents`), encounters, elections, tournaments and arenas, inventory and trade, character development, and the `GameState` / save-compatibility layer. What is documented here is the entry point, not the body.

## Sibling areas

[core](../core/) · [core-extra](../core-extra/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [Module System](../../architecture/module-system)