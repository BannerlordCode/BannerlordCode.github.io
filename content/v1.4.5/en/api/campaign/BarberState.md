---
title: "BarberState"
description: "The GameState payload for the creative menu: it carries exactly two things, the BasicCharacterObject being edited and the IFaceGeneratorCustomFilter restricting haircut and facial-hair options. Nothing inside CampaignSystem constructs it in 1.4.5."
---

# BarberState

**Namespace:** `TaleWorlds.CampaignSystem.GameState`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class BarberState : TaleWorlds.Core.GameState`
**Base:** `TaleWorlds.Core.GameState`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BarberState.cs`

## Overview

`BarberState` is the **GameState payload of the creative menu (barber screen)**. Its 22 source lines contain only two data members:

```csharp
public BasicCharacterObject Character;
public IFaceGeneratorCustomFilter Filter { get; private set; }
```

It derives from [GameState](../../core-extra/GameState), the base of the whole UI stack, where the static [GameStateManager](../../core-extra/GameStateManager) owns creation, the state stack, per-frame ticking, and teardown. `BarberState`'s job is therefore extremely narrow — **it draws nothing, handles no input, and holds no screen objects**. It only hands two parameters to whichever view model and screen subscribes to it: *who is being edited* and *which haircut and facial-hair options may appear*.

In the architecture it carries the **"screen context hand-off"** slot. Its siblings [CraftingState](../CraftingState), [InventoryState](../InventoryState), [PartyState](../PartyState), and [MapState](../MapState) follow the same pattern: the GameState is a data envelope, and Gauntlet-layer view models listen for activation and read their parameters from it.

One fact has to be stated plainly: **nothing in the 1.4.5 CampaignSystem source tree ever calls `new BarberState(...)` or `CreateState<BarberState>()`.** It is an extension point reserved for view models and outer UI code, not part of campaign logic.

## Mental Model

Think of it as **a parameter envelope for one UI session**.

- **Two steps: construct, then push.** Every `GameState` usage in the official `Helpers` namespace has this shape — compare `InventoryScreenHelper.cs:190`, where `InventoryState inventoryState = Game.Current.GameStateManager.CreateState<InventoryState>();` is immediately followed by a `PushState`. `BarberState` is no different.
- **`Character` is a field; `Filter` is a property.** That inconsistency is verbatim from the source. `Character` is a `public` field you can overwrite at will, while `Filter` has a `private set` and can only be fixed at construction. **You can swap the edited character by assignment; you must rebuild the state to swap the filter.**
- **There are two constructors and one of them is empty.** `public BarberState()` does nothing, leaving `Character` and `Filter` null. `GameStateManager.CreateState<BarberState>()` — the no-argument overload — takes exactly that path. **A state built through the no-argument overload must be assigned a `Character` before you push it.**
- **`IsMenuState => true` means it hands the music menu state back.** This is a cross-layer switch on `GameState`: menu-type states normally let the menu music keep playing. Changing it directly changes audio behaviour.
- **Where `Filter` comes from.** `GetFaceGeneratorFilter()` in [CharacterHelper](../CharacterHelper) (`CharacterHelper.cs:105-107`) returns `Campaign.Current.GetCampaignBehavior<IFacegenCampaignBehavior>()?.GetFaceGenFilter()` — so **with that behavior unregistered it returns null**. A null `Filter` means "no restriction", not a crash.
- **Never cache a `BarberState`.** `GameState.HandleFinalize()` (`TaleWorlds.Core/GameState.cs:89-98`) nulls `_listeners` and `GameStateManager`. After the pop, the object is dead.

### What the `Filter` interface actually does

`IFaceGeneratorCustomFilter` is defined in `TaleWorlds.Core` with three members:

| Member | What it answers |
| --- | --- |
| `int[] GetHaircutIndices(BasicCharacterObject character)` | Which haircut indices this character may pick |
| `int[] GetFacialHairIndices(BasicCharacterObject character)` | Which facial-hair indices this character may pick |
| `FaceGeneratorStage[] GetAvailableStages()` | Which creative-menu stages are unlocked (face, hair, beard, …) |

Returning `null` conventionally means "unrestricted"; the precise contract is agreed between the implementation and the view model.

## Key members

| Member | Signature | What this member is actually for |
| --- | --- | --- |
| `Character` | `public BasicCharacterObject Character;` | **A public field, not a property.** The character being edited. **After the no-argument constructor it is null** and must be assigned. Its type is `BasicCharacterObject` from `TaleWorlds.Core`, not `Hero` and not `CharacterObject`, because the creative menu must also work on characters before they are heroes. |
| `Filter` | `public IFaceGeneratorCustomFilter Filter { get; private set; }` | The filter restricting haircut, facial-hair, and stage options. **`private set` means it cannot change after the push**, so it can only be supplied at construction. Normally comes from `CharacterHelper.GetFaceGeneratorFilter()`, which is null when the matching CampaignBehavior is absent. |
| `IsMenuState` | `public override bool IsMenuState => true` | Overrides [GameState](../../core-extra/GameState). True means this is a menu-type state and menu music may keep playing. **It contains no side-effect code, but changing this value directly alters the screen's audio behaviour.** |
| `BarberState()` | `public BarberState()` | The empty constructor. Both `Character` and `Filter` stay null. This is the path taken by the no-argument `GameStateManager.CreateState<BarberState>()` overload. |
| `BarberState(BasicCharacterObject, IFaceGeneratorCustomFilter)` | `public BarberState(BasicCharacterObject character, IFaceGeneratorCustomFilter filter)` | The real constructor; writes both members. **`GameStateManager.CreateState<T>(params object[])` routes to this one** when you pass arguments, because internally it calls `Activator.CreateInstance(typeof(T), parameters)`. |

## Examples

Create and push a barber state the way the official `Helpers` code does, following `InventoryScreenHelper.cs:190`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;
using Helpers;

public static void OpenBarber(BasicCharacterObject target)
{
    if (Game.Current == null || target == null)
    {
        return;
    }

    IFaceGeneratorCustomFilter filter = CharacterHelper.GetFaceGeneratorFilter();
    BarberState state = Game.Current.GameStateManager.CreateState<BarberState>(target, filter);
    Game.Current.GameStateManager.PushState(state);
}
```

Use the no-argument constructor and fill in `Character` before pushing. `Filter` has no setter, so it stays null, which reads as "unrestricted":

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static void OpenBarberUnfiltered(BasicCharacterObject target)
{
    if (Game.Current == null || target == null)
    {
        return;
    }

    BarberState state = Game.Current.GameStateManager.CreateState<BarberState>();
    state.Character = target;
    Game.Current.GameStateManager.PushState(state);
}
```

Implement your own filter that allows only a few hairstyles; all three members must be provided:

```csharp
using TaleWorlds.Core;

public class ModHairFilter : IFaceGeneratorCustomFilter
{
    private static readonly int[] AllowedHaircuts = new int[] { 0, 1, 2 };

    public int[] GetHaircutIndices(BasicCharacterObject character)
    {
        return AllowedHaircuts;
    }

    public int[] GetFacialHairIndices(BasicCharacterObject character)
    {
        return new int[] { 0 };
    }

    public FaceGeneratorStage[] GetAvailableStages()
    {
        return new FaceGeneratorStage[] { FaceGeneratorStage.Face, FaceGeneratorStage.Hair };
    }
}
```

Read the current state during a session with `GameStateManager.LastOrDefault<T>()`, which finds the most recent `BarberState` on the stack:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameState;
using TaleWorlds.Core;

public static string DescribeActiveBarber()
{
    if (Game.Current == null)
    {
        return "";
    }

    BarberState active = Game.Current.GameStateManager.LastOrDefault<BarberState>();
    if (active == null || active.Character == null)
    {
        return "no barber session";
    }

    return "editing=" + active.Character.Name + " filtered=" + (active.Filter != null);
}
```

## Risks and crash boundaries

- **Both members can be null.** After the no-argument constructor, `Character` and `Filter` are both null. `Character` is a public field, so you can null it at any moment and **no assertion stops you**.
- **`Filter` cannot change after the push.** It is `private set`, assignable only in the constructor. Loosening the filter mid-session means popping the state and pushing a new one.
- **`GameStateManager` is nulled by `HandleFinalize`.** `GameState.cs:89-98` sets `_listeners = null` and `GameStateManager = null`. Touching `state.Predecessor` or `state.IsActive` after the pop throws.
- **`IsMenuState => true` affects audio, not just semantics.** Changing it changes whether the menu music keeps playing.
- **There is no internal constructor call anywhere.** No `new BarberState(...)` and no `CreateState<BarberState>()` exists in the 1.4.5 CampaignSystem. It is a reserved extension point, so **a mod must supply its own trigger** (a key press, a menu callback).
- **`Character` is a `BasicCharacterObject`, not a `Hero`.** Handing `Hero.CharacterObject` (of type `CharacterObject`) to `CreateState<BarberState>` fails on parameter type: `Activator.CreateInstance` throws when it finds no matching constructor.
- **`CharacterHelper.GetFaceGeneratorFilter()` depends on `Campaign.Current`.** A null `Campaign.Current` throws; a campaign without `IFacegenCampaignBehavior` registered returns null.

## Cross-Version Notes

`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameState/BarberState.cs` is a 22-line original-source file. Four things to check across versions: whether both constructors survive (the parameterless one is a hard requirement of the no-argument `CreateState<T>()` overload), whether `Character` is still a public field rather than a property, whether `Filter` is still `private set`, and whether `IsMenuState` still returns true. Also note the split: the base `GameState` lives in `TaleWorlds.Core` while this class lives in `TaleWorlds.CampaignSystem.GameState`, so any change to base-class behaviour such as `HandleFinalize` directly affects the lifecycle described on this page.

## Dependencies

- Base class: [GameState](../../core-extra/GameState) supplies `Level`, `IsActive`, `Predecessor`, `RegisterListener`, and the `HandleInitialize` / `HandleFinalize` / `HandleActivate` lifecycle
- Stack manager: `CreateState<T>()`, `CreateState<T>(params object[])`, `PushState`, `PopState`, and `LastOrDefault<T>` on [GameStateManager](../../core-extra/GameStateManager) are the only landing paths for this type
- Payload type: [BasicCharacterObject](../../core-extra/BasicCharacterObject) from `TaleWorlds.Core` is the type of the `Character` field
- Filter interface: `IFaceGeneratorCustomFilter` in `TaleWorlds.Core`, with the three members `GetHaircutIndices`, `GetFacialHairIndices`, and `GetAvailableStages`
- Filter source: `GetFaceGeneratorFilter()` in [CharacterHelper](../CharacterHelper) at `CharacterHelper.cs:105-107`, delegating to `IFacegenCampaignBehavior.GetFaceGenFilter()`
- Sibling GameStates: [CraftingState](../CraftingState), [InventoryState](../InventoryState), [PartyState](../PartyState), and [MapState](../MapState) are other instances of the same pattern
- Bucket index: [campaign API section](../)
