---
title: "EducationCampaignBehavior"
description: "EducationCampaignBehavior — class in TaleWorlds.CampaignSystem.CampaignBehaviors. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# EducationCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class EducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic`  
**Base:** `CampaignBehaviorBase, IEducationLogic`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`

## Overview

`EducationCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, IEducationLogic, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (8): `SyncData`, `RegisterEvents`, `GetOptionProperties`, `GetPageProperties`, `IsValidEducationNotification`, `GetStageProperties`, ….
- **Extension points** (2): `SyncData`, `RegisterEvents`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `EducationCharacterProperties` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `Finalize` | method | Instance entry point. Takes 2 arguments: `Hero child`, `List<string> chosenOptions`. |
| `GetOptionProperties` | method | Instance entry point. Takes 13 arguments: `Hero child`, `string optionKey`, `List<string> previousOptions`, `out TextObject optionTitle`, …. Read path: prefer it over reaching for the backing store. |
| `GetPageProperties` | method | Instance entry point. Takes 7 arguments: `Hero child`, `List<string> previousChoices`, `out TextObject title`, `out TextObject description`, …. Read path: prefer it over reaching for the backing store. |
| `GetStageProperties` | method | Instance entry point. Takes 2 arguments: `Hero child`, `out int pageCount`. Read path: prefer it over reaching for the backing store. |
| `IsValidEducationNotification` | method | Instance entry point. Takes 1 argument: `EducationMapNotification data`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |

## Usage Example

```csharp
public class MyEducationCampaignBehavior : CampaignBehaviorBase, IEducationLogic
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyEducationCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [AgeModel](../AgeModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [Attributes](../../campaign/Attributes/) — `TaleWorlds.CampaignSystem.Extensions`.
- [Crafting](../../core-extra/Crafting/) — `TaleWorlds.Core`.
- [Achievement](../../achievementsystem/Achievement/) — `TaleWorlds.AchievementSystem`.
- [HeroDeveloper](../../campaign/HeroDeveloper/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
