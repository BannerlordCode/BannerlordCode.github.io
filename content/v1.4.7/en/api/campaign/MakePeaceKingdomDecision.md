---
title: "MakePeaceKingdomDecision"
description: "MakePeaceKingdomDecision — class in TaleWorlds.CampaignSystem.Election. 20 public members (0 static)."
---

<!-- v147-skeleton -->
# MakePeaceKingdomDecision

**Namespace:** `TaleWorlds.CampaignSystem.Election`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class MakePeaceKingdomDecision : KingdomDecision`  
**Base:** `KingdomDecision`  
**Source:** `TaleWorlds.CampaignSystem/Election/MakePeaceKingdomDecision.cs`

## Overview

`MakePeaceKingdomDecision` is a named type in the TaleWorlds.CampaignSystem.Election namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends KingdomDecision, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MakePeaceKingdomDecision`.
- **Instance members** (19): `IsAllowed`, `GetProposalInfluenceCost`, `GetGeneralTitle`, `GetSupportTitle`, `GetChooseTitle`, `GetSupportDescription`, ….
- **Extension points** (18): `IsAllowed`, `GetProposalInfluenceCost`, `GetGeneralTitle`, `GetSupportTitle`, `GetChooseTitle`, `GetSupportDescription`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyChosenOutcome` | method (override) | Overrides the base member. Takes 1 argument: `DecisionOutcome chosenOutcome`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ApplySecondaryEffects` | method (override) | Overrides the base member. Takes 2 arguments: `MBReadOnlyList<DecisionOutcome> possibleOutcomes`, `DecisionOutcome chosenOutcome`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `DetermineChooser` | method (override) | Overrides the base member. Takes no arguments. Returns `Clan`. |
| `DetermineInitialCandidates` | method (override) | Overrides the base member. Takes no arguments. Returns `IEnumerable<DecisionOutcome>`. |
| `DetermineSponsors` | method (override) | Overrides the base member. Takes 1 argument: `MBReadOnlyList<DecisionOutcome> possibleOutcomes`. |
| `DetermineSupport` | method (override) | Overrides the base member. Takes 2 arguments: `Clan clan`, `DecisionOutcome possibleOutcome`. Returns `float`. |
| `GetChooseDescription` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetChooseTitle` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetChosenOutcomeText` | method (override) | Overrides the base member. Takes 3 arguments: `DecisionOutcome chosenOutcome`, `KingdomDecision.SupportStatus supportStatus`, `bool isShortVersion`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetGeneralTitle` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetProposalInfluenceCost` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `GetQueriedDecisionOutcome` | method (override) | Overrides the base member. Takes 1 argument: `MBReadOnlyList<DecisionOutcome> possibleOutcomes`. Returns `DecisionOutcome`. Read path: prefer it over reaching for the backing store. |
| `GetSecondaryEffects` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetSupportDescription` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetSupportTitle` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsAllowed` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnShowDecision` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ShouldBeCancelledInternal` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CalculateSupport` | method | Instance entry point. Takes 1 argument: `Clan clan`. Returns `float`. |
| `MakePeaceKingdomDecision` | ctor | Instance entry point. Takes 6 arguments: `Clan proposerClan`, `IFaction kingdomToMakePeaceWith`, `int dailyTributeToBePaid`, `int dailyTributeDurationInDays`, …. Returns ``. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |

- Constructed as `public MakePeaceKingdomDecision(Clan proposerClan, IFaction kingdomToMakePeaceWith, int dailyTributeToBePaid = 0, int dailyTributeDurationInDays = 0, bool applyResults = true, bool isProposedByOpponent = false)`.

## Usage Example

```csharp
var makePeaceKingdomDecision = new MakePeaceKingdomDecision(proposerClan, kingdomToMakePeaceWith, dailyTributeToBePaid, dailyTributeDurationInDays, applyResults, isProposedByOpponent);
makePeaceKingdomDecision.IsAllowed();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 18 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Election/MakePeaceKingdomDecision.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.

Section: [api/campaign/](../) — the other types in this bucket.
