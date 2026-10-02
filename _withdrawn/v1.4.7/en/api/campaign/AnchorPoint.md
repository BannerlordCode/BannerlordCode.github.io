---
title: "AnchorPoint"
description: "AnchorPoint — class in TaleWorlds.CampaignSystem.Naval. 21 public members (0 static)."
---

<!-- v147-skeleton -->
# AnchorPoint

**Namespace:** `TaleWorlds.CampaignSystem.Naval`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class AnchorPoint : IInteractablePoint, ITrackableCampaignObject, ITrackableBase`  
**Base:** `IInteractablePoint, ITrackableCampaignObject, ITrackableBase`  
**Source:** `TaleWorlds.CampaignSystem/Naval/AnchorPoint.cs`

## Overview

`AnchorPoint` is a named type in the TaleWorlds.CampaignSystem.Naval namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends IInteractablePoint, ITrackableCampaignObject, ITrackableBase, so the members it does not redeclare are inherited from there. 5 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AnchorPoint`.
- **Instance members** (20): `Owner`, `IsMovingToPoint`, `IsReady`, `IsValid`, `Name`, `CallFleet`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CallFleet` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. |
| `CanPartyInteract` | method | Instance entry point. Takes 2 arguments: `MobileParty mobileParty`, `float dt`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CheckPositionsForMapChangeAndUpdateIfNeeded` | method | Instance entry point. Takes no arguments. |
| `GetInteractionPosition` | method | Instance entry point. Takes 1 argument: `MobileParty interactingParty`. Returns `CampaignVec2`. Read path: prefer it over reaching for the backing store. |
| `GetLastUsedDisembarkPosition` | method | Instance entry point. Takes no arguments. Returns `CampaignVec2`. Read path: prefer it over reaching for the backing store. |
| `GetPosition` | method | Instance entry point. Takes no arguments. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `InitializeOnLoad` | method | Instance entry point. Takes 1 argument: `MobileParty owner`. |
| `IsAtSettlement` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsMovingToPoint` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReady` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsTargetingSettlement` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsValid` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Name` | property | Instance entry point `TextObject` property. Read it for current state; a declared setter writes that state in place. |
| `OnPartyInteraction` | method | Instance entry point. Takes 1 argument: `MobileParty mobileParty`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Owner` | property | Instance entry point `MobileParty` property. Read it for current state; a declared setter writes that state in place. |
| `ResetMoveTarget` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `ResetPosition` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetLastUsedDisembarkPosition` | method | Instance entry point. Takes 1 argument: `CampaignVec2 pos`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetPosition` | method | Instance entry point. Takes 1 argument: `CampaignVec2 position`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetSettlement` | method | Instance entry point. Takes 1 argument: `Settlement settlement`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `AnchorPoint` | ctor | Instance entry point. Takes 1 argument: `MobileParty owner`. Returns ``. |

- Constructed as `public AnchorPoint(MobileParty owner)`.

## Usage Example

```csharp
var anchorPoint = new AnchorPoint(owner);
anchorPoint.CallFleet(settlement);
// Read current state through anchorPoint.Owner.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/Naval/AnchorPoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Extensions](../../engine/Extensions/) — `TaleWorlds.Engine.GauntletUI`.
- [IInteractablePoint](../IInteractablePoint/) — `TaleWorlds.CampaignSystem.Map`.
- [MobileParty](../MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/campaign/](../) — the other types in this bucket.
