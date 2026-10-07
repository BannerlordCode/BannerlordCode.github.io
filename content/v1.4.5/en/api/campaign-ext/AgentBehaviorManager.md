---
title: "AgentBehaviorManager"
description: "The Sandbox implementation of IAgentBehaviorManager — thirteen forwards into BehaviorSets, eleven of them explicit interface implementations, so only two of the thirteen are callable on the concrete class."
---

# AgentBehaviorManager

**Namespace:** `SandBox.AI`
**Module:** `SandBox.AI`
**Type:** `public class AgentBehaviorManager : IAgentBehaviorManager`
**Base:** `TaleWorlds.CampaignSystem.IAgentBehaviorManager`
**File:** `Modules.SandBox/SandBox/SandBox.AI/AgentBehaviorManager.cs`

## Overview

This class exists to satisfy one interface. Every method forwards to a matching static preset on [BehaviorSets](../BehaviorSets) and does nothing else — there is no state, no branching, no error handling. Its value is that it gives the location-character creation code a single seam: `SandBoxManager.Instance.AgentBehaviorManager` returns one of these, and the engine hands it an `IAgent`, and the right preset gets installed.

The important detail, and the one most likely to waste an afternoon, is that **eleven of the thirteen methods are explicit interface implementations**. They are written `void IAgentBehaviorManager.AddWandererBehaviors(IAgent agent)` rather than `public void AddWandererBehaviors(...)`. In C# that means they are invisible on the concrete class — you cannot write `manager.AddWandererBehaviors(agent)` against a variable typed `AgentBehaviorManager`. Only two methods are genuinely public: `AddQuestCharacterBehaviors` and `AddFirstCompanionBehavior`.

## Mental Model

The split is not arbitrary, and it is worth knowing why before you rely on it. An explicit implementation removes the method from the class's public surface while keeping it on the interface. The practical consequences:

- **Typing your variable as the interface unlocks everything.** `IAgentBehaviorManager manager = SandBoxManager.Instance.AgentBehaviorManager; manager.AddWandererBehaviors(agent);` compiles. Typing it as the concrete class gives you only two methods.
- **There is no override seam.** Because these are interface implementations rather than virtual methods, you cannot subclass `AgentBehaviorManager` to intercept a preset and swap it for your own. If you want to change what a guard preset does, you must replace the `IAgentBehaviorManager` instance entirely rather than derive from this one.
- **The two public methods are the accidental public ones.** `AddQuestCharacterBehaviors` and `AddFirstCompanionBehavior` are the only two the engine happened to call on the concrete type; the other eleven were routed through the interface.

That last point is a trap with a practical symptom: if you look for the "right" method on this class, eleven of them are simply not there, and the compiler error you get is a plain "does not contain a definition for", which reads like a version mismatch rather than an accessibility choice.

Also note `AddStealthAgentBehaviors` on the interface forwards to `BehaviorSets.StealthAgentBehaviors` — note the name change, `Add` prefix on the interface side, none on the target. That asymmetry is the thing that makes a naive find-and-replace of preset names go wrong.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `AddQuestCharacterBehaviors` | `public void AddQuestCharacterBehaviors(IAgent agent)` | One of only two **public** methods. Installs the quest-giver preset (walking, flees, fights) via `BehaviorSets.AddQuestCharacterBehaviors`. Callable directly on a concrete `AgentBehaviorManager` reference. |
| `AddFirstCompanionBehavior` | `public void AddFirstCompanionBehavior(IAgent agent)` | The second public method. Installs the lean companion preset — an empty daily group plus `FightBehavior` — via `BehaviorSets.AddFirstCompanionBehavior`. Callable directly on the concrete class. |
| `AddWandererBehaviors` | `void IAgentBehaviorManager.AddWandererBehaviors(IAgent agent)` | Explicit interface implementation forwarding to the baseline town-idler preset. **Not visible on the concrete class** — you must type your reference as `IAgentBehaviorManager` to call it. |
| `AddOutdoorWandererBehaviors` | `void IAgentBehaviorManager.AddOutdoorWandererBehaviors(IAgent agent)` | Explicit implementation for the outdoor preset, which adds `ChangeLocationBehavior` and disables indoor wandering. Interface-typed references only. |
| `AddIndoorWandererBehaviors` | `void IAgentBehaviorManager.AddIndoorWandererBehaviors(IAgent agent)` | Explicit implementation for the indoor preset, which disables outdoor wandering instead. Interface-typed references only. |
| `AddFixedCharacterBehaviors` | `void IAgentBehaviorManager.AddFixedCharacterBehaviors(IAgent agent)` | Explicit implementation for a stationary character — one walking behaviour with both wandering toggles off. Interface-typed references only. |
| `AddPatrollingThugBehaviors` | `void IAgentBehaviorManager.AddPatrollingThugBehaviors(IAgent agent)` | Explicit implementation for the roaming thug preset. Unlike the guards, thugs keep their `FleeBehavior`. Interface-typed references only. |
| `AddStandGuardBehaviors` | `void IAgentBehaviorManager.AddStandGuardBehaviors(IAgent agent)` | Explicit implementation for a stationary guard: no flee, and `DisableCalmDown` is set. Interface-typed references only. |
| `AddFixedGuardBehaviors` | `void IAgentBehaviorManager.AddFixedGuardBehaviors(IAgent agent)` | Explicit implementation for the minimal guard, which installs `FightBehavior` and nothing else. Interface-typed references only. |
| `AddStealthAgentBehaviors` | `void IAgentBehaviorManager.AddStealthAgentBehaviors(IAgent agent)` | Explicit implementation that forwards to `BehaviorSets.StealthAgentBehaviors` — note the target **drops the `Add` prefix**, unlike every other member here. Interface-typed references only. |
| `AddPatrollingGuardBehaviors` | `void IAgentBehaviorManager.AddPatrollingGuardBehaviors(IAgent agent)` | Explicit implementation for a guard on the move, again with no flee and `DisableCalmDown` set. Interface-typed references only. |
| `AddCompanionBehaviors` | `void IAgentBehaviorManager.AddCompanionBehaviors(IAgent agent)` | Explicit implementation for a general follower: walking with indoor wandering off, and fight-only when alarmed. Interface-typed references only. |
| `AddBodyguardBehaviors` | `void IAgentBehaviorManager.AddBodyguardBehaviors(IAgent agent)` | Explicit implementation for a bodyguard, the only preset that pins a follow target to `Agent.Main`. Interface-typed references only. |

## Real Example

Get the manager the way the engine does and **hold it as the interface** — that is the only way all thirteen methods are reachable:

```csharp
IAgentBehaviorManager manager = SandBoxManager.Instance.AgentBehaviorManager;
manager.AddWandererBehaviors(agent);
manager.AddStandGuardBehaviors(agent);
```

Build a location character wired to one of the presets, the same way the Sandbox barbarian code does:

```csharp
CultureObject culture = Settlement.CurrentSettlement.Culture;
CharacterObject npc = culture.Barber;

AgentData data = new AgentData(new SimpleAgentOrigin(npc, -1, null, default(UniqueTroopDescriptor)))
    .Age(MBRandom.RandomInt(25, 40));

IAgentBehaviorManager behaviorManager = SandBoxManager.Instance.AgentBehaviorManager;
LocationCharacter shopkeeper = new LocationCharacter(
    data,
    behaviorManager.AddWandererBehaviors,
    "sp_merchant",
    true,
    LocationCharacter.CharacterRelations.Neutral,
    null);
```

Call one of the two methods that *are* public, without an interface cast:

```csharp
AgentBehaviorManager concrete = (AgentBehaviorManager)SandBoxManager.Instance.AgentBehaviorManager;
concrete.AddQuestCharacterBehaviors(agent);
concrete.AddFirstCompanionBehavior(agent);
```

Confirm the interface surface is what you actually need before writing against the concrete class:

```csharp
Debug.Print("manager = " + SandBoxManager.Instance.AgentBehaviorManager, 0);
Debug.Print("wanderer preset installed = " + (agent.Character != null), 0);
```

## Risks and Boundaries

- **Eleven of thirteen methods are invisible on the concrete class.** `manager.AddWandererBehaviors(agent)` against an `AgentBehaviorManager`-typed variable is a compile error that reads like a missing-API problem rather than an accessibility one. Type the variable as `IAgentBehaviorManager`.
- **No extension seam.** These are interface implementations, not virtual methods, so subclassing `AgentBehaviorManager` to intercept a preset does not work. To change what any preset does you must replace the `IAgentBehaviorManager` instance.
- **`AddStealthAgentBehaviors` forwards to a differently-named target.** The `Add` prefix present on the interface member is absent on `BehaviorSets.StealthAgentBehaviors`, which breaks any name-based lookup.
- **Every method is a bare forward with no null or state check.** A null agent, or an agent whose `CampaignAgentComponent` has no navigator, throws inside `BehaviorSets`, not here.
- **Calling two presets on one agent double-installs groups.** Nothing here prevents it and nothing here detects it.
- **No `SyncData` and no constructor logic.** The class is stateless; behaviour sets are rebuilt on every location-character spawn.
- **Two of thirteen are public by accident of engine usage**, not by design intent — do not read the public split as "these two are the important ones".

## Cross-version note

The v1.4.5 file is 73 lines with thirteen methods and no fields. The public/explicit split — exactly two `public`, eleven `void IAgentBehaviorManager....` — is present here and is the single most load-bearing fact about this class.

## Dependencies

- Interface: `TaleWorlds.CampaignSystem.IAgentBehaviorManager` is the contract this class implements, and declaring your variable as it is what unlocks the eleven explicit methods.
- Presets: [BehaviorSets](../BehaviorSets) is where every one of the thirteen forwards lands, and that page documents what each preset actually installs.
- Navigator: [CampaignAgentComponent](../CampaignAgentComponent) supplies the navigator every preset requires, and must be constructed before any of these calls.
- Behaviour contract: [AgentBehavior](../AgentBehavior) is the base type of everything the presets install.
- Entry point: `SandBoxManager.Instance.AgentBehaviorManager` is how the Sandbox module obtains this instance.
- Bucket index: [campaign-ext API section](../)
