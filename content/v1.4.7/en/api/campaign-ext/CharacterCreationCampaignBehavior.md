---
title: "CharacterCreationCampaignBehavior"
description: "CharacterCreationCampaignBehavior — class in TaleWorlds.CampaignSystem.CampaignBehaviors. 25 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class CharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler`  
**Base:** `CampaignBehaviorBase, ICharacterCreationContentHandler`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs`

## Overview

`CharacterCreationCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, ICharacterCreationContentHandler, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (9): `RegisterEvents`, `SyncData`, `InitializeCharacterCreationStages`, `InitializeCharacterCreationCultures`, `InitializeData`, `FaceGenUpdated`, ….
- **Extension points** (2): `RegisterEvents`, `SyncData`.
- **Data and constants** (16): `FocusToAddYouthStart`, `FocusToAddAdultStart`, `FocusToAddMiddleAgedStart`, `FocusToAddElderlyStart`, `AttributeToAddYouthStart`, `AttributeToAddAdultStart`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddEducationMenu` | method | Instance entry point. Takes 1 argument: `CharacterCreationManager characterCreationManager`. Adds to the collection or relation this type owns. |
| `FaceGenUpdated` | method | Instance entry point. Takes no arguments. |
| `InitializeCharacterCreationCultures` | method | Instance entry point. Takes 1 argument: `CharacterCreationManager characterCreationManager`. |
| `InitializeCharacterCreationStages` | method | Instance entry point. Takes 1 argument: `CharacterCreationManager characterCreationManager`. |
| `InitializeData` | method | Instance entry point. Takes 1 argument: `CharacterCreationManager characterCreationManager`. |
| `SetHeroAge` | method | Instance entry point. Takes 1 argument: `float age`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateParentEquipment` | method | Instance entry point. Takes 5 arguments: `CharacterCreationManager characterCreationManager`, `MBEquipmentRoster motherEquipment`, `MBEquipmentRoster fatherEquipment`, `string motherAnimation`, …. Called from the owner’s update loop — do not assume a frame boundary. |
| `AttributeToAddAdultStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `AttributeToAddElderlyStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `AttributeToAddMiddleAgedStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `AttributeToAddYouthStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `FatherNarrativeCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `FocusToAddAdultStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `FocusToAddElderlyStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `FocusToAddMiddleAgedStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `FocusToAddYouthStart` | const | Instance entry point. Takes no arguments. Returns `int`. |
| `HorseNarrativeCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `MotherNarrativeCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `PlayerAdulthoodCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `PlayerAgeSelectionCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `PlayerChildhoodCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |
| `PlayerEducationCharacterStringId` | const | Instance entry point. Takes no arguments. Returns `string`. |

1 further public members follow the same patterns.
## Usage Example

```csharp
public class MyCharacterCreationCampaignBehavior : CampaignBehaviorBase, ICharacterCreationContentHandler
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyCharacterCreationCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/CampaignBehaviors/CharacterCreationCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [CharacterCreationManager](../../campaign/CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationFaceGeneratorStage](../../campaign/CharacterCreationFaceGeneratorStage/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationCultureStage](../../campaign/CharacterCreationCultureStage/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationBannerEditorStage](../../campaign/CharacterCreationBannerEditorStage/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationClanNamingStage](../../campaign/CharacterCreationClanNamingStage/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [DefaultTraits](../../campaign/DefaultTraits/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
