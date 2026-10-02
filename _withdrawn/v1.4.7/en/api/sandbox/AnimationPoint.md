---
title: "AnimationPoint"
description: "AnimationPoint — class in SandBox.Objects.AnimationPoints. 60 public members (0 static)."
---

<!-- v147-skeleton -->
# AnimationPoint

**Namespace:** `SandBox.Objects.AnimationPoints`  
**Module:** `SandBox`  
**Type:** `public class AnimationPoint : StandingPoint`  
**Base:** `StandingPoint`  
**Source:** `SandBox/Objects/AnimationPoints/AnimationPoint.cs`

## Overview

`AnimationPoint` is a named type in the SandBox.Objects.AnimationPoints namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends StandingPoint, so the members it does not redeclare are inherited from there. 20 of its own members are properties, which is where most reads and writes land.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `AnimationPoint`.
- **Instance members** (51): `PlayerStopsUsingWhenInteractsWithOther`, `IsArriveActionFinished`, `SelectedRightHandItem`, `SelectedLeftHandItem`, `IsActive`, `DisableCombatActionsOnUse`, ….
- **Extension points** (23): `PlayerStopsUsingWhenInteractsWithOther`, `DisableCombatActionsOnUse`, `OnEditModeVisibilityChanged`, `OnEditorTick`, `OnEditorInit`, `OnRemoved`, ….
- **Data and constants** (8): `PairEntity`, `ActivatePairs`, `ForwardDistanceToPivotPoint`, `SideDistanceToPivotPoint`, `KeepOldVisibility`, `LoopStartActionCode`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterMissionStart` | method (override) | Overrides the base member. Takes no arguments. |
| `DisableCombatActionsOnUse` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `GetTickRequirement` | method (override) | Overrides the base member. Takes no arguments. Returns `ScriptComponentBehavior.TickRequirement`. Read path: prefer it over reaching for the backing store. |
| `GetUserFrameForAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `WorldFrame`. Read path: prefer it over reaching for the backing store. |
| `HasAlternative` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsDisabledForAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent agent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsUsableByAgent` | method (override) | Overrides the base member. Takes 1 argument: `Agent userAgent`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnUse` | method (override) | Overrides the base member. Takes 2 arguments: `Agent userAgent`, `sbyte agentBoneIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUserConversationEnd` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUserConversationStart` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnUseStopped` | method (override) | Overrides the base member. Takes 3 arguments: `Agent userAgent`, `bool isSuccessful`, `int preferenceIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PlayerStopsUsingWhenInteractsWithOther` | property (override) | Overrides the base member `bool` property. Read it for current state; a declared setter writes that state in place. |
| `SimulateTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. |
| `DoesActionTypeStopUsingGameObject` | method (override) | Overrides the base member. Takes 1 argument: `Agent.ActionCodeType actionType`. Returns `bool`. |
| `OnEditModeVisibilityChanged` | method (override) | Overrides the base member. Takes 1 argument: `bool currentVisibility`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEditorVariableChanged` | method (override) | Overrides the base member. Takes 1 argument: `string variableName`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInit` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRemoved` | method (override) | Overrides the base member. Takes 1 argument: `int removeReason`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ArriveAction` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `GetAlternatives` | method | Instance entry point. Takes no arguments. Returns `List<AnimationPoint>`. Read path: prefer it over reaching for the backing store. |
| `GetRandomWaitInSeconds` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |

- Constructed as `public AnimationPoint()`.

36 further public members follow the same patterns.
## Usage Example

```csharp
var animationPoint = new AnimationPoint();
animationPoint.OnEditModeVisibilityChanged(currentVisibility);
// Read current state through animationPoint.PlayerStopsUsingWhenInteractsWithOther.
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- 23 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox/Objects/AnimationPoints/AnimationPoint.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ConversationMission](../ConversationMission/) — `SandBox.Conversation`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [AgentVisuals](../../mission-ext/AgentVisuals/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/sandbox/](../) — the other types in this bucket.
