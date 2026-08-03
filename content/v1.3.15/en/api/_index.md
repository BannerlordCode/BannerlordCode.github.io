---
title: "API Reference - Find the Right Entry Point"
description: "A task-first Bannerlord API map organized by runtime layer, lifecycle, events, Actions, Models, Mission, UI, and save boundaries; use alphabetical catalogs only after you know the type you need."
---
# API Reference: Find the Right Entry Point

> This is not a signature wall. Start with the task you need to complete, follow the lifecycle and dependency chain, then use the module indexes to look up a known type name.

## Start Here

| I want to... | Start with | Then read |
| --- | --- | --- |
| Load a module at the right phase | [MBSubModuleBase](./core/MBSubModuleBase/) | [Game](./core-extra/Game/) -> [CampaignGameStarter](./campaign-ext/CampaignGameStarter/) |
| Register campaign behavior and events | [CampaignGameStarter](./campaign-ext/CampaignGameStarter/) | [CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase/) -> [CampaignEvents](./campaign-ext/CampaignEvents/) |
| Change gold, relations, war, or hero state | [CampaignEvents](./campaign-ext/CampaignEvents/) | [Hero](./campaign/Hero/) -> [Actions family](./campaign-ext/actions/) -> the relevant `*Action.Apply` |
| Persist custom behavior state | [CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase/) | [IDataStore](./campaign-ext/IDataStore/) -> [SaveManager](./save-system/SaveManager/) |
| Write a Mission behavior and handle Agents | [Mission](./mission/Mission/) | [MissionBehavior](./mission/MissionBehavior/) -> [MissionLogic](./mission-ext/MissionLogic/) -> [Agent](./mission/Agent/) |
| Query or replace campaign formulas | [GameModels](./campaign-ext/GameModels/) | [Models family](./campaign-ext/models/) -> the relevant `*Model` registration and lookup |
| Build a Gauntlet screen | [ScreenManager](./gui/ScreenManager/) | [GauntletLayer](./engine/GauntletLayer/) -> [ViewModel](./core-extra/ViewModel/) |
| Read localized text | [TextObject](./localization/TextObject/) | [Localization guide](../guide/localization/) |

## Runtime Layers

### Foundation / Core: creation, registration, and global boundaries

- [Core module](./core/) - `MBSubModuleBase`, `Module`, and item identity entry points.
- [Core Extra module](./core-extra/) - [Game](./core-extra/Game/), [InformationManager](./core-extra/InformationManager/), equipment, and skills.
- [System module](./system/) - input, object-system, and runtime bridges; read the [SDK overview](../architecture/sdk-overview/) before the long tail.
- [Save System module](./save-system/) - `SaveManager`, `IDataStore`, `Saveable*` attributes, and load ordering.

### Campaign: persistent world and rule coordination

- [Campaign module](./campaign/) - `Campaign`, `Hero`, `Clan`, `Kingdom`, `Settlement`, `MobileParty`, and other world entities.
- [Campaign-Ext module](./campaign-ext/) - [CampaignGameStarter](./campaign-ext/CampaignGameStarter/), [CampaignBehaviorBase](./campaign-ext/CampaignBehaviorBase/), [CampaignEvents](./campaign-ext/CampaignEvents/), Actions, Models, rosters, and content families.
- [Actions family](./campaign-ext/actions/) - mutate the world through `Apply`; do not write entity fields directly.
- [Models family](./campaign-ext/models/) - read or replace campaign calculations; a null or incorrectly registered model can fail during a tick.

### Mission: battle scenes and Agent lifetime

- [Mission module](./mission/) - [Mission](./mission/Mission/), [MissionBehavior](./mission/MissionBehavior/), [Team](./mission/Team/), and [Formation](./mission/Formation/).
- [Mission-Ext module](./mission-ext/) - [MissionLogic](./mission-ext/MissionLogic/), Agent components, and scene extensions.

### UI / Localization: screens, binding, and text

- [GUI module](./gui/) - [ScreenManager](./gui/ScreenManager/) and screen/input types.
- [Engine module](./engine/) - [GauntletLayer](./engine/GauntletLayer/) and engine-layer boundaries.
- [ViewModel module](./viewmodel/) - ViewModel lifetime, property notifications, and command binding.
- [Localization module](./localization/) - [TextObject](./localization/TextObject/) and text variables.

## Reading Order

1. Read the [SDK overview](../architecture/sdk-overview/) to locate the Foundation, Campaign, Mission, UI, or Save layer.
2. Use the [developer roadmap](../architecture/developer-roadmap/) to find the shortest extension chain.
3. On each entry page, read the mental model, when/when-not guidance, dependencies, and risks before the member reference.
4. When changing world state, check [crash and save boundaries](../architecture/crash-boundaries/) to understand why events, Actions, Models, and Save hooks are not interchangeable.
5. Use the complete module indexes for long-tail lookup only after the runtime boundary is clear.

## Complete Module Indexes

- [Campaign](./campaign/) · [Campaign-Ext](./campaign-ext/) · [Core](./core/) · [Core Extra](./core-extra/)
- [Engine](./engine/) · [GUI](./gui/) · [Localization](./localization/) · [Mission](./mission/) · [Mission-Ext](./mission-ext/)
- [Save System](./save-system/) · [System](./system/) · [ViewModel](./viewmodel/)

## See Also

- Up: [Version home](../../)
- Siblings: [Architecture](../architecture/) · [Developer roadmap](../architecture/developer-roadmap/) · [Crash and save boundaries](../architecture/crash-boundaries/)
- Cross-version: [Class comparison](../../../versions/)
