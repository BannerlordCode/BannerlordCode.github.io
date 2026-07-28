---
title: "Party"
description: "Party composition and recruitment UI."
---

## Up

- [Back to campaign index](../)
- [API Index](../../)
- [Version Home](../../../)

## Subsystem overview

This is the **Party** subsystem inside **campaign index**. Classes in the same namespace tackle related concerns; pick a type, then open its page for methods.

Party composition and recruitment UI.

## Classes

| Class | Purpose |
|------|---------|
| [`AiBehavior`](../AiBehavior/) | AiBehavior is a public type in TaleWorlds.CampaignSystem.Party. |
| [`BanditPartyComponent`](../BanditPartyComponent/) | BanditPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`CachedPartyVariables`](../CachedPartyVariables/) | CachedPartyVariables is a public type in TaleWorlds.CampaignSystem.Party. |
| [`CaravanPartyComponent`](../CaravanPartyComponent/) | CaravanPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`CustomPartyComponent`](../CustomPartyComponent/) | CustomPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`FleeingData`](../FleeingData/) | FleeingData is a data carrier in TaleWorlds.CampaignSystem.Party that packages fields for structured state exchange between systems. |
| [`GarrisonPartyComponent`](../GarrisonPartyComponent/) | GarrisonPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`InitializationArgs`](../InitializationArgs/) | InitializationArgs is a public type in TaleWorlds.CampaignSystem.Party.PartyComponents. |
| [`LordPartyComponent`](../LordPartyComponent/) | LordPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`MilitiaPartyComponent`](../MilitiaPartyComponent/) | MilitiaPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`MobileParty`](../MobileParty/) | MobileParty is a public type in TaleWorlds.CampaignSystem.Party. |
| [`MobilePartyAi`](../MobilePartyAi/) | MobilePartyAi is a public type in TaleWorlds.CampaignSystem.Party. |
| [`MoveModeType`](../MoveModeType/) | MoveModeType is a public type in TaleWorlds.CampaignSystem.Party. |
| [`NavigationType`](../NavigationType/) | NavigationType is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PartyBase`](../PartyBase/) | PartyBase is an abstract base class in TaleWorlds.CampaignSystem.Party that provides override/virtual customization points for concrete subclasses. |
| [`PartyCommand`](../PartyCommand/) | PartyCommand is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PartyCommandCode`](../PartyCommandCode/) | PartyCommandCode is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PartyComponent`](../PartyComponent/) | PartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`PartyObjective`](../PartyObjective/) | PartyObjective is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PartyRosterSide`](../PartyRosterSide/) | PartyRosterSide is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PartyScreenData`](../PartyScreenData/) | PartyScreenData is a data carrier in TaleWorlds.CampaignSystem.Party that packages fields for structured state exchange between systems. |
| [`PartyScreenLogic`](../PartyScreenLogic/) | PartyScreenLogic is a behavior-logic class in TaleWorlds.CampaignSystem.Party that reacts to events, drives flows, and updates subsystem state at key moments. |
| [`PartyScreenLogicInitializationData`](../PartyScreenLogicInitializationData/) | PartyScreenLogicInitializationData is a data carrier in TaleWorlds.CampaignSystem.Party that packages fields for structured state exchange between systems. |
| [`PartyTemplateObject`](../PartyTemplateObject/) | PartyTemplateObject is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PartyTemplateStack`](../PartyTemplateStack/) | PartyTemplateStack is a public type in TaleWorlds.CampaignSystem.Party. |
| [`PatrolPartyComponent`](../PatrolPartyComponent/) | PatrolPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`ShipTemplateStack`](../ShipTemplateStack/) | ShipTemplateStack is a public type in TaleWorlds.CampaignSystem.Party. |
| [`TransferState`](../TransferState/) | TransferState is a public type in TaleWorlds.CampaignSystem.Party. |
| [`TroopComparer`](../TroopComparer/) | TroopComparer is a public type in TaleWorlds.CampaignSystem.Party. |
| [`TroopSortType`](../TroopSortType/) | TroopSortType is a public type in TaleWorlds.CampaignSystem.Party. |
| [`TroopTradeDifference`](../TroopTradeDifference/) | TroopTradeDifference is a public type in TaleWorlds.CampaignSystem.Party. |
| [`TroopType`](../TroopType/) | TroopType is a public type in TaleWorlds.CampaignSystem.Party. |
| [`VillagerPartyComponent`](../VillagerPartyComponent/) | VillagerPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |
| [`WarPartyComponent`](../WarPartyComponent/) | WarPartyComponent is a component-style object in TaleWorlds.CampaignSystem.Party.PartyComponents, typically attached to an Agent or entity to hold localized behavior. |

## Other subsystems in this area

- [Root](./../root/)
- [AgentOrigins](./../agentorigins/)
- [BarterSystem](./../bartersystem/)
- [CampaignBehaviors](./../campaignbehaviors/)
- [CharacterCreationContent](./../charactercreationcontent/)
- [CharacterDevelopment](./../characterdevelopment/)
- [Characters](./../characters/)
- [ComponentInterfaces](./../componentinterfaces/)
- [Conversation](./../conversation/)
- [Election](./../election/)
- [Encounters](./../encounters/)
- [Encyclopedia](./../encyclopedia/)
- [Extensions](./../extensions/)
- [GameComponents](./../gamecomponents/)
- [GameMenus](./../gamemenus/)
- [GameState](./../gamestate/)
- [Heroes](./../heroes/)
- [Inventory](./../inventory/)
- [Issues](./../issues/)
- [LogEntries](./../logentries/)
- [Map](./../map/)
- [MapEvents](./../mapevents/)
- [MapNotificationTypes](./../mapnotificationtypes/)
- [Naval](./../naval/)
- [Parties](./../parties/)
- [Quests](./../quests/)
- [Roster](./../roster/)
- [SaveCompability](./../savecompability/)
- [SceneInformationPopupTypes](./../sceneinformationpopuptypes/)
- [Settlements](./../settlements/)
- [Siege](./../siege/)
- [TournamentGames](./../tournamentgames/)
