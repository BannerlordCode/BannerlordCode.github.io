---
title: "AgentStatusCondition"
description: "A multiplayer perk predicate that fires on a 1024 perk event flag and tests whether an agent is currently on foot or mounted. CustomBattle layer only."
---

# AgentStatusCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle` — the multiplayer module, not the single-player assembly
**Type:** `public class AgentStatusCondition : MPPerkCondition`
**Base:** `MPPerkCondition`
**Source:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions/AgentStatusCondition.cs`

## One-line responsibility

It answers one yes/no question for the multiplayer perk system — is this agent on foot or on horseback — and it is one of a dozen near-identical condition classes in a folder of perk predicates.

## Mental model

The first and most important thing to internalise is a **scope** fact, not a design fact: this type lives in `Modules.CustomBattle`, under the `TaleWorlds.MountAndBlade.Multiplayer` network-gameplay perk tree. Its base class is `MPPerkCondition` — the `MP` prefix meaning multiplayer. **Nothing in the single-player campaign constructs or evaluates it.** If you are writing a campaign mod or a mission behavior and you find yourself wanting this type, you are looking at the wrong layer; the equivalent single-player check is `agent.MountAgent == null`.

What it does inside its own layer is narrow. It is an `MPPerkCondition` with a two-value private enum:

```csharp
private enum AgentStatus { OnFoot, OnMount }
```

The condition is deserialized from a single XML attribute named `agent_status`, parsed case-insensitively into that enum. If parsing fails it calls `Debug.FailedAssert` with the message `provided 'agent_status' is invalid` — a **soft** failure: the assert logs and the field keeps its default (`OnFoot`), rather than throwing. So a typo in a perk XML file does not stop the load; it silently produces a condition that only ever matches on-foot agents.

The check itself is the simplest possible read of `agent.MountAgent`, and note the null behaviour: a `null` agent returns `false` for both statuses. There is no "unknown" state and no exception — an absent agent simply never matches.

There are two `Check` overloads and the difference is the thing that trips people up. `Check(MissionPeer peer)` **casts itself** to `MPPerkCondition` and calls the base-class overload with `peer != null ? peer.ControlledAgent : null`. That is a redundant-looking cast that is actually load-bearing documentation: the base class declares the `Agent`-taking overload, and the peer overload exists purely to bridge the multiplayer peer abstraction onto it. If `peer` is null, it forwards `null` and the result is `false`.

One last structural note: the constructor is `protected`, so the type cannot be instantiated from outside its own assembly at all, and the class is not `sealed` — meaning you could subclass it, but every one of its `Check` overloads is `override` on a base that already implements the interface, so there is no convenient hook to specialise.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Check(Agent)` | `public override bool Check(Agent agent)` | The actual predicate. Returns true when the agent's mountedness matches the configured status — `MountAgent == null` means on-foot, anything else means mounted. A `null` agent returns `false` for both, so the condition is safe to call against an absent peer without a null check at the call site. This is the member the perk system evaluates. |
| `Check(MissionPeer)` | `public override bool Check(MissionPeer peer)` | The multiplayer entry point. Casts `this` to `MPPerkCondition` and forwards `peer?.ControlledAgent` to the `Agent` overload. Its only real work is turning the peer abstraction into an agent, and mapping a null peer onto the null-agent path. |
| `EventFlags` | `public override PerkEventFlags EventFlags => (PerkEventFlags)1024` | The raw bit this perk listens on — the literal `1024`, not a named enum member. **Read the last line of the file before assuming this condition is yours to use**: several condition classes in this folder hardcode their own bit and a collision means two perks fire on one event. |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | Reads `node.Attributes["agent_status"]` and parses it case-insensitively into the private `AgentStatus` enum. On failure it logs `provided 'agent_status' is invalid` via `Debug.FailedAssert` and keeps the default `OnFoot`. `protected`, so you cannot drive it directly — the perk loader calls it. |
| `StringType` | `protected static string StringType = "AgentStatus"` | The discriminator the perk XML loader matches against when deciding which condition class to construct. It is `protected static` — read-only to consumers, writable from a subclass, and shared by every instance of the type. |

## Real example

The evaluation, from inside the multiplayer perk layer, using the peer overload:

```csharp
public class MyPerkPredicate
{
    public bool Matches(MissionPeer peer, AgentStatusCondition condition)
    {
        return condition.Check(peer);
    }
}
```

Checking the underlying agent state directly, which is what the condition does internally and what you would write in single-player instead:

```csharp
public class MySinglePlayerMountCheck : MissionLogic
{
    public override void OnMissionTick(float dt)
    {
        Agent agent = Mission.Current.MainAgent;
        if (agent == null)
        {
            return;
        }

        // This is the same test AgentStatusCondition.Check performs, without the
        // multiplayer perk layer. MountAgent is null exactly when the agent is on foot.
        bool isOnFoot = agent.MountAgent == null;

        if (isOnFoot)
        {
            Debug.Print("agent " + agent.Index + " is dismounted", 0);
        }
    }
}
```

The second block is the honest single-player equivalent. Reaching for `AgentStatusCondition` there would not compile without referencing the `TaleWorlds.MountAndBlade.CustomBattle` assembly, and would be the wrong design even if it did.

## Risks and boundaries

1. **Not reachable in single-player.** The type lives in `Modules.CustomBattle` under the multiplayer perk namespace and derives from `MPPerkCondition`. Campaign and mission code should read `agent.MountAgent` directly.
2. **The constructor is `protected`.** You cannot `new AgentStatusCondition()` from a mod assembly. Instances come only from the perk XML loader.
3. **`EventFlags` is a hardcoded `1024` with no named constant.** If two conditions in this folder pick the same bit, both perks activate on one event. Verify the bit before relying on it.
4. **A bad `agent_status` attribute degrades to `OnFoot` silently.** `Debug.FailedAssert` logs; it does not throw in release. A typo yields a condition that only matches dismounted agents and no obvious error.
5. **`Check(null)` returns `false`, it does not throw.** That is convenient, but it also means a bug upstream that produces a null peer is indistinguishable from a legitimate "condition not met".
6. **`Debug.FailedAssert` embeds an absolute build-machine path.** The call passes `"C:\\BuildAgent\\work\\mb3\\Source\\..."` as the file argument, so the message will not correspond to any path on your machine. Do not chase that path.
7. **Not `sealed`, but effectively closed.** Every `Check` overload is an `override`, so subclassing gains you nothing but the inherited `EventFlags` constant.
8. **The enum is `private`.** `AgentStatus` is not visible outside the class, so you cannot pass a status value in from your own code — configuration is XML-only.
9. **Not saved and not campaign state.** This is a runtime perk predicate evaluated live during multiplayer matches. Nothing here persists.

## Dependencies

- **Base contract:** [`MPPerkCondition`](../MPPerkCondition) defines the `Check` overload pair and the `PerkEventFlags` surface this class specialises.
- **Event flags:** [`PerkEventFlags`](../PerkEventFlags) is the flag enum; this class hardcodes the `1024` bit.
- **Peer abstraction:** [`MissionPeer`](../MissionPeer) supplies `ControlledAgent`, the bridge from network identity to an in-mission agent.
- **Agent state:** [`Agent`](../../mission/Agent) `MountAgent` is the single field the whole class exists to test.
- **Siblings:** the same folder contains `HealthCondition`, `MoraleCondition`, `MountHealthCondition`, `TroopCountCondition`, `TroopRoleCondition`, `ControllerCondition`, `ClosestFlagCondition`, `FlagDominationStatusCondition`, `LastManStandingCondition`, `LastRemainingFlagCondition`, and `OwnedFlagCountCondition` — all following the same deserialize-and-predict shape.
- Bucket home: [mission-ext API section](../)