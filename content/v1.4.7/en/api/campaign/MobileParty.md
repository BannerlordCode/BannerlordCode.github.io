---
title: "MobileParty"
description: "MobileParty — class in TaleWorlds.CampaignSystem.Party. 193 public members (18 static)."
---

<!-- v147-skeleton -->
# MobileParty

**Namespace:** `TaleWorlds.CampaignSystem.Party`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public sealed class MobileParty : CampaignObjectBase, ILocatable<MobileParty>, IMapPoint, ITrackableCampaignObject, ITrackableBase, IRandomOwner`  
**Base:** `CampaignObjectBase, ILocatable`  
**Source:** `TaleWorlds.CampaignSystem/Party/MobileParty.cs`

## Overview

`MobileParty` is a named type in the TaleWorlds.CampaignSystem.Party namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends CampaignObjectBase, ILocatable, so the members it does not redeclare are inherited from there. 101 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MobileParty`.
- **Static entry points** (18): `MainParty`, `All`, `AllCaravanParties`, `AllPatrolParties`, `AllBanditParties`, `AllLordParties`, ….
- **Instance members** (170): `Name`, `AttachedParties`, `SetLandNavigationAccess`, `Ships`, `HasNavalNavigationCapability`, `PaymentLimit`, ….
- **Extension points** (6): `GetName`, `ToString`, `PreAfterLoad`, `OnBeforeLoad`, `AfterLoad`, `Initialize`.
- **Data and constants** (4): `DefaultPartyTradeInitialGold`, `ClanRoleAssignmentMinimumSkillValue`, `MinimumSpareGoldForWageBudget`, `StartTransitionNextFrameToExitFromPort`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `All` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllBanditParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllCaravanParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllCustomParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllGarrisonParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllLordParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllMilitiaParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllPartiesWithoutPartyComponent` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllPatrolParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `AllVillagerParties` | property (static) | Static entry point `MBReadOnlyList<MobileParty>` property. Read it for current state; a declared setter writes that state in place. |
| `ConversationParty` | property (static) | Static entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `Count` | property (static) | Static entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CreateParty` | method (static) | Static entry point. Takes 2 arguments: `string stringId`, `PartyComponent component`. Returns `MobileParty`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `FindNextLocatable` | method (static) | Static entry point. Takes 1 argument: `ref LocatableSearchData<MobileParty> data`. Returns `MobileParty`. Read path: prefer it over reaching for the backing store. |
| `GetName` | method (override) | Overrides the base member. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `Initialize` | method (override) | Overrides the base member. Takes no arguments. |
| `IsFleeBehavior` | method (static) | Static entry point. Takes 1 argument: `AiBehavior aiBehavior`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MainParty` | property (static) | Static entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `StartFindingLocatablesAroundPosition` | method (static) | Static entry point. Takes 2 arguments: `Vec2 position`, `float radius`. Returns `LocatableSearchData<MobileParty>`. |
| `ToString` | method (override) | Overrides the base member. Takes no arguments. Returns `string`. |
| `UpdateLocator` | method (static) | Static entry point. Takes 1 argument: `MobileParty party`. Called from the owner’s update loop — do not assume a frame boundary. |
| `AfterLoad` | method (override) | Overrides the base member. Takes no arguments. |
| `OnBeforeLoad` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PreAfterLoad` | method (override) | Overrides the base member. Takes no arguments. |

- Constructed as `public MobileParty()`.

169 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on MobileParty:
MobileParty.IsFleeBehavior(aiBehavior);
MobileParty.StartFindingLocatablesAroundPosition(position, radius);
MobileParty.FindNextLocatable(theTarget);
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem/Party/MobileParty.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ILocatable](../ILocatable/) — `TaleWorlds.CampaignSystem.Map`.
- [IMapPoint](../IMapPoint/) — `TaleWorlds.CampaignSystem.Map`.
- [ConversationManager](../../campaign-ext/ConversationManager/) — `TaleWorlds.CampaignSystem.Conversation`.
- [Ship](../Ship/) — `TaleWorlds.CampaignSystem.Naval`.
- [MobilePartyAi](../MobilePartyAi/) — `TaleWorlds.CampaignSystem.Party`.
- [ExplainedNumber](../ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [AiBehavior](../AiBehavior/) — `TaleWorlds.CampaignSystem.Party`.
- [AnchorPoint](../AnchorPoint/) — `TaleWorlds.CampaignSystem.Naval`.
- [BesiegerCamp](../BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/campaign/](../) — the other types in this bucket.
