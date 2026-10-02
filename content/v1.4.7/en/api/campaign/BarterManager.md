---
title: "BarterManager"
description: "BarterManager — class in TaleWorlds.CampaignSystem.BarterSystem. 22 public members (1 static)."
---

<!-- v147-skeleton -->
# BarterManager

**Namespace:** `TaleWorlds.CampaignSystem.BarterSystem`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class BarterManager`  
**Source:** `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs`

## Overview

`BarterManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BarterManager`.
- **Static entry points** (1): `Instance`.
- **Instance members** (18): `BeginPlayerBarter`, `StartBarterOffer`, `ExecuteAiBarter`, `ExecuteAIBarter`, `Close`, `IsOfferAcceptable`, ….
- **Data and constants** (2): `Closed`, `BarterBegin`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `BarterManager` property. Read it for current state; a declared setter writes that state in place. |
| `ApplyAndFinalizePlayerBarter` | method | Instance entry point. Takes 3 arguments: `Hero offererHero`, `Hero otherHero`, `BarterData barterData`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `BarterBeginEventDelegate` | method | Instance entry point. Takes 1 argument: `BarterData args`. Returns `delegate void`. |
| `BarterCloseEventDelegate` | method | Instance entry point. Takes no arguments. Returns `delegate void`. |
| `BarterContextInitializer` | method | Instance entry point. Takes 3 arguments: `Barterable barterable`, `BarterData args`, `object obj`. Returns `delegate bool`. |
| `BeginPlayerBarter` | method | Instance entry point. Takes 1 argument: `BarterData args`. |
| `CancelAndFinalizePlayerBarter` | method | Instance entry point. Takes 3 arguments: `Hero offererHero`, `Hero otherHero`, `BarterData barterData`. Capability check used to gate an operation. |
| `CanPlayerBarterWithHero` | method | Instance entry point. Takes 1 argument: `Hero hero`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Close` | method | Instance entry point. Takes no arguments. |
| `ExecuteAiBarter` | method | Instance entry point. Takes 5 arguments: `IFaction faction1`, `IFaction faction2`, `Hero faction1Hero`, `Hero faction2Hero`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteAIBarter` | method | Instance entry point. Takes 5 arguments: `BarterData barterData`, `IFaction faction1`, `IFaction faction2`, `Hero faction1Hero`, …. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetOfferValue` | method | Instance entry point. Takes 4 arguments: `Hero selfHero`, `PartyBase selfParty`, `PartyBase offererParty`, `IEnumerable<Barterable> offeredBarters`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `GetOfferValueForFaction` | method | Instance entry point. Takes 2 arguments: `BarterData barterData`, `IFaction faction`. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `InitializeJoinFactionBarterContext` | method | Instance entry point. Takes 3 arguments: `Barterable barterable`, `BarterData args`, `object obj`. Returns `bool`. |
| `InitializeMakePeaceBarterContext` | method | Instance entry point. Takes 3 arguments: `Barterable barterable`, `BarterData args`, `object obj`. Returns `bool`. |
| `InitializeMarriageBarterContext` | method | Instance entry point. Takes 3 arguments: `Barterable barterable`, `BarterData args`, `object obj`. Returns `bool`. |
| `InitializeSafePassageBarterContext` | method | Instance entry point. Takes 3 arguments: `Barterable barterable`, `BarterData args`, `object obj`. Returns `bool`. |
| `IsOfferAcceptable` | method | Instance entry point. Takes 3 arguments: `BarterData args`, `Hero hero`, `PartyBase party`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `StartBarterOffer` | method | Instance entry point. Takes 9 arguments: `Hero offerer`, `Hero other`, `PartyBase offererParty`, `PartyBase otherParty`, …. |
| `BarterManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `BarterBegin` | field | Instance entry point `BarterManager.BarterBeginEventDelegate` field — direct storage with no validation or notification. |
| `Closed` | field | Instance entry point `BarterManager.BarterCloseEventDelegate` field — direct storage with no validation or notification. |

- Constructed as `public BarterManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var barterManager = BarterManager.Instance;
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/BarterSystem/BarterManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BarterData](../BarterData/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [Barterable](../Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [DefaultsBarterGroup](../DefaultsBarterGroup/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [JoinKingdomAsClanBarterable](../JoinKingdomAsClanBarterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.

Section: [api/campaign/](../) — the other types in this bucket.
