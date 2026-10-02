---
title: "DeclareWarDecision"
description: "DeclareWarDecision — class in TaleWorlds.CampaignSystem.Election. 19 public members (0 static)."
---

<!-- v147-skeleton -->
# DeclareWarDecision

**Namespace:** `TaleWorlds.CampaignSystem.Election`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DeclareWarDecision : KingdomDecision`  
**Base:** `KingdomDecision`  
**Source:** `TaleWorlds.CampaignSystem/Election/DeclareWarDecision.cs`

## Overview

`DeclareWarDecision` is a named type in the TaleWorlds.CampaignSystem.Election namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends KingdomDecision, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DeclareWarDecision`.
- **Instance members** (18): `IsAllowed`, `GetProposalInfluenceCost`, `GetGeneralTitle`, `GetSupportTitle`, `GetChooseTitle`, `GetSupportDescription`, ….
- **Extension points** (17): `IsAllowed`, `GetProposalInfluenceCost`, `GetGeneralTitle`, `GetSupportTitle`, `GetChooseTitle`, `GetSupportDescription`, ….

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
| `ShouldBeCancelledInternal` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CalculateSupport` | method | Instance entry point. Takes 1 argument: `Clan clan`. Returns `float`. |
| `DeclareWarDecision` | ctor | Instance entry point. Takes 2 arguments: `Clan proposerClan`, `IFaction factionToDeclareWarOn`. Returns ``. |

- Constructed as `public DeclareWarDecision(Clan proposerClan, IFaction factionToDeclareWarOn)`.

## Usage Example

```csharp
var declareWarDecision = new DeclareWarDecision(proposerClan, factionToDeclareWarOn);
declareWarDecision.IsAllowed();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 17 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Election/DeclareWarDecision.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DeclareWarBarterable](../DeclareWarBarterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [DefaultTraits](../DefaultTraits/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.
- [ImageIdentifier](../../core-extra/ImageIdentifier/) — `TaleWorlds.Core.ImageIdentifiers`.

Section: [api/campaign/](../) — the other types in this bucket.
