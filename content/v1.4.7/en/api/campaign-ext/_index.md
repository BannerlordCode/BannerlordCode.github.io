---
title: "Campaign ext — the campaign extension surface: behaviours, components, component interfaces"
description: "Where the TaleWorlds.CampaignSystem sub-namespaces live: behaviours, components, component interfaces, conversation, issues and ObjectSystem. 2 pages."
---
# Campaign ext — the campaign extension surface

`TaleWorlds.CampaignSystem` proper is in [campaign](../campaign/). This bucket holds its **sub-namespaces** — the "adding things to the campaign" half: behaviour base types, swappable component models, the interfaces those components implement, conversation, issues, and the MBO layer from `TaleWorlds.ObjectSystem`.

For a mod author this is where most of the time goes. Almost every campaign extension point is shaped like "register a behaviour" or "swap out a component model", and the types for both live here rather than in `campaign/`.

The sub-namespaces the prefix rule places in this bucket:

| Namespace | `.cs` files in 1.4.7 | What is in it |
| --- | ---: | --- |
| `TaleWorlds.CampaignSystem.CampaignBehaviors` | 135 | the shipped campaign behaviours: `BattleCampaignBehavior`, `BuildingsCampaignBehavior`, … |
| `TaleWorlds.CampaignSystem.ComponentInterfaces` | 126 | the **interfaces** for component models: `AgeModel`, `AllianceModel`, `BattleRewardModel`, … |
| `TaleWorlds.CampaignSystem.GameComponents` | 124 | the **default implementations** of those: `DefaultAgeModel`, `DefaultAllianceModel`, … |
| `TaleWorlds.CampaignSystem.Issues` | 43 | campaign issues (`IssueBase` subclasses) and their default effects |
| `TaleWorlds.CampaignSystem.Conversation` | 12 | conversation: sentences, options, `CampaignMapConversation` |
| `TaleWorlds.ObjectSystem` | 18 | MBO definition and registration: `MBObjectManager`, `MBObjectBase` |

`ComponentInterfaces` and `GameComponents` are a pair: every `Default*` in the second is the shipped implementation of the matching interface in the first. Replacing a component means writing your own implementation and swapping it at load time — that is the main mechanism for changing campaign rules without forking them.

## Pages in this area (2)

| Page | What it covers |
| --- | --- |
| [MBObjectBase](./MBObjectBase) | the MBO base class: define a serialisable campaign object |
| [MBObjectManager](./MBObjectManager) | MBO registration and typed retrieval |

Only two pages, but they are the entire entry to the "my own data" half of this bucket — you cannot add a persistent object of your own to the campaign without going through `MBObjectBase`.

## Not yet written

The behaviour side has no pages: `CampaignBehaviorBase` is in [campaign](../campaign/), while the 135 shipped behaviours, the 126 component interfaces, the 124 default components, the 43 issue types, the 12 conversation types, and the MBO infrastructure beyond `MBObjectManager` have no pages of their own. Everything readable in this bucket right now is the custom-data entry point.

## Sibling areas

[campaign](../campaign/) · [core](../core/) · [core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [Save System](../../architecture/save-system)
- ↘ [Module System](../../architecture/module-system)