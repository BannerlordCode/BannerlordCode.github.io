---
title: "AllianceCampaignBehavior"
description: "AllianceCampaignBehavior — class in TaleWorlds.CampaignSystem.CampaignBehaviors. 18 public members (0 static)."
---

<!-- v147-skeleton -->
# AllianceCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class AllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior`  
**Base:** `CampaignBehaviorBase, IAllianceCampaignBehavior`  
**Source:** `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs`

## Overview

`AllianceCampaignBehavior` is a behavior: a self-contained unit of campaign or mission logic that the engine ticks, serialises and (for campaign behaviors) persists for you. Behaviors are the standard way to add cross-cutting rules to a running game without patching existing systems.

It extends CampaignBehaviorBase, IAllianceCampaignBehavior, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A behavior is owned by the lifecycle, not by you. You register it once at game start; from then on the engine calls it at the points it declares — daily ticks, save/load, event dispatch — and never gives it back.

This makes it the right home for logic that must survive a save, and the wrong home for anything tied to a screen or a single mission. Register it in the game starter, keep per-campaign state in synchronized fields, and let the engine call you back.

Concretely, the surface breaks down like this:

- **Instance members** (18): `RegisterEvents`, `SyncData`, `OnAllianceOfferedToPlayer`, `OnAllianceOfferedToPlayerKingdom`, `OnCallToWarAgreementProposedToPlayer`, `OnCallToWarAgreementProposedToPlayerKingdom`, ….
- **Extension points** (2): `RegisterEvents`, `SyncData`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RegisterEvents` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SyncData` | method (override) | Overrides the base member. Takes 1 argument: `IDataStore dataStore`. Called from the owner’s update loop — do not assume a frame boundary. |
| `DenyCallToWarAgreement` | method | Instance entry point. Takes 2 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`. |
| `EndAlliance` | method | Instance entry point. Takes 2 arguments: `Kingdom kingdom1`, `Kingdom kingdom2`. |
| `EndCallToWarAgreement` | method | Instance entry point. Takes 3 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`, `Kingdom kingdomToCallToWarAgainst`. |
| `GetAllianceEndDate` | method | Instance entry point. Takes 2 arguments: `Kingdom kingdom1`, `Kingdom kingdom2`. Returns `CampaignTime`. Read path: prefer it over reaching for the backing store. |
| `GetKingdomsToCallToWarAgainst` | method | Instance entry point. Takes 2 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`. Returns `List<Kingdom>`. Read path: prefer it over reaching for the backing store. |
| `HasCalledToWar` | method | Instance entry point. Takes 2 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsAllyWithKingdom` | method | Instance entry point. Takes 2 arguments: `Kingdom kingdom1`, `Kingdom kingdom2`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsAtWarByCallToWarAgreement` | method | Instance entry point. Takes 3 arguments: `Kingdom calledKingdom`, `Kingdom kingdomToCallToWarAgainst`, `out Kingdom callingKingdom`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAllianceOfferedToPlayer` | method | Instance entry point. Takes 1 argument: `Kingdom offeringKingdom`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAllianceOfferedToPlayerKingdom` | method | Instance entry point. Takes 1 argument: `Kingdom offeringKingdom`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCallToWarAgreementProposedByPlayer` | method | Instance entry point. Takes 2 arguments: `Kingdom proposedKingdom`, `Kingdom kingdomToCallToWarAgainst`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCallToWarAgreementProposedByPlayerKingdom` | method | Instance entry point. Takes 2 arguments: `Kingdom proposedKingdom`, `Kingdom kingdomToCallToWarAgainst`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCallToWarAgreementProposedToPlayer` | method | Instance entry point. Takes 2 arguments: `Kingdom proposerKingdom`, `Kingdom kingdomToCallToWarAgainst`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnCallToWarAgreementProposedToPlayerKingdom` | method | Instance entry point. Takes 2 arguments: `Kingdom proposerKingdom`, `Kingdom kingdomToCallToWarAgainst`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `StartAlliance` | method | Instance entry point. Takes 2 arguments: `Kingdom proposerKingdom`, `Kingdom receiverKingdom`. |
| `StartCallToWarAgreement` | method | Instance entry point. Takes 5 arguments: `Kingdom callingKingdom`, `Kingdom calledKingdom`, `Kingdom kingdomToCallToWarAgainst`, `int callToWarCost`, …. |

## Usage Example

```csharp
public class MyAllianceCampaignBehavior : CampaignBehaviorBase, IAllianceCampaignBehavior
{
    public override void RegisterEvents()
    {
        // Subscribe once to the events this behavior reacts to.
    }

    public override void SyncData() { /* restore per-campaign state */ }

    private void OnDailyTick() { /* the engine calls this; keep it cheap */ }

    // Register it exactly once, from the game starter:
    // CampaignGameStarter.AddBehavior(new MyAllianceCampaignBehavior());
}
```

## Risks and Boundaries

- Behaviors run inside engine callbacks. Throwing out of a tick or an event handler can corrupt the tick loop; catch and log instead.
- Fields without the save-system marker are reset on load — a behavior that caches values must restore them in its load callback.
- A behavior registered twice is ticked twice; register from exactly one game starter.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/CampaignBehaviors/AllianceCampaignBehavior.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [LinQuick](../../core-extra/LinQuick/) — `TaleWorlds.LinQuick`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [AllianceOfferMapNotification](../../campaign/AllianceOfferMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [AllianceModel](../AllianceModel/) — `TaleWorlds.CampaignSystem.ComponentInterfaces`.
- [AcceptCallToWarOfferMapNotification](../../campaign/AcceptCallToWarOfferMapNotification/) — `TaleWorlds.CampaignSystem.MapNotificationTypes`.
- [AcceptCallToWarAgreementDecision](../../campaign/AcceptCallToWarAgreementDecision/) — `TaleWorlds.CampaignSystem.Election`.
- [ProposeCallToWarAgreementDecision](../../campaign/ProposeCallToWarAgreementDecision/) — `TaleWorlds.CampaignSystem.Election`.
- [StartAllianceDecision](../../campaign/StartAllianceDecision/) — `TaleWorlds.CampaignSystem.Election`.

Section: [api/campaign-ext/](../) — the other types in this bucket.
