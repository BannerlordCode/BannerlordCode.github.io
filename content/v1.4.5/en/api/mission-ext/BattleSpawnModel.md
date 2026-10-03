---
title: "BattleSpawnModel"
description: "The abstract rule model that decides which formation index each troop origin starts in, separately for the initial deployment and for every reinforcement wave."
---

# BattleSpawnModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleSpawnModel : MBGameModel<BattleSpawnModel>`
**Base:** `MBGameModel<BattleSpawnModel>`
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.ComponentInterfaces/BattleSpawnModel.cs`

## One-line responsibility

It is the single decision point for "which formation slot does this troop origin occupy", asked twice per battle: once for the initial deployment and once for each reinforcement wave.

## Mental model

The type is nineteen lines and it has exactly two abstract methods. Everything interesting is in what those two signatures *return*.

Both are `List<(IAgentOriginBase origin, int formationIndex)>`. That is a list of **named tuples**, not a dictionary — so the model returns pairs, and it is the *caller* that has to resolve them into assignments. Two consequences follow. First, the return is a list rather than a map because the same `formationIndex` may legitimately appear more than once (a formation can be given several origins across its ranks), and because the caller needs a deterministic ordering. Second, and more awkwardly, **nothing in the signature guarantees the tuples are unique or complete**: the model may return an empty list, may return a subset of `troopOrigins`, and may return two entries with the same index. There is no validation here — whatever performs the assignment downstream is what discovers the inconsistency, and by then it is not this class's problem.

The split into two methods rather than one with a flag is the other design decision worth internalising, and the two callers in `MissionBattleSideSpawnContext` show what each one actually receives. `GetInitialSpawnAssignments` is called once per side with the origins of a troop-tree node (`item5.origins`), to place the opening deployment. `GetReinforcementAssignments` is called per reinforcement batch with `_reservedTroops` — a private `List<IAgentOriginBase>` on the spawn context that holds only the troops **reserved** for that batch, not the side's full roster. So the two methods are not the same question with a different flag: one is asked about a node's contents, the other about a batch queue that the caller has already filtered.

That filtering is the useful design consequence. The model is not asked to work out who is still waiting — the caller does that and hands over just the reserved troops. What the model still has to decide is *where in the formation* each reserved origin goes, and there is **no wave-number parameter**, so a model that wants to vary placement per wave must count for itself.

The two `virtual` no-op hooks, `OnMissionStart` and `OnMissionEnd`, bracket that lifetime. They exist so a model can cache per-battle state — and the absence of a parameter on either means a model with instance state will be shared across concurrent battles if the process ever runs two. The base implementations are empty, so overriding them is optional.

Inheritance gives you `MBGameModel<BattleSpawnModel>.BaseModel`, the `protected` property injected at registration. Because both methods are `abstract`, there is no `base.` call available — delegation goes through `BaseModel` exactly as it does for [`AgentApplyDamageModel`](../AgentApplyDamageModel).

Finally: the resolution path. `MissionGameModels.BattleSpawnModel` is resolved through `GameModelsManager.GetGameModel<T>()`, which walks the registration list **from the end backwards**. Last registered wins. Registration happens through `IGameStarter.AddModel<T>` — the same surface used by `CustomGame.cs`, which registers `BattleSpawnModel` in its `InitializeGameModels` method.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetInitialSpawnAssignments` | `public abstract List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)` | Asked once per side at mission start. Maps each troop origin to the formation index it should occupy in the opening deployment. Because it runs before anything is spawned, the formation set may not be fully populated yet — this method decides *who goes where*, it does not read where they ended up. |
| `GetReinforcementAssignments` | `public abstract List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(BattleSideEnum battleSide, List<IAgentOriginBase> troopOrigins)` | Asked per reinforcement batch. The caller — `MissionBattleSideSpawnContext`, at its `GetReinforcementAssignments` call — passes `_reservedTroops`, a queue it has already filtered down to the origins reserved for this batch, so the model never sees the side's full roster. It decides *where* the batch goes, not *who* is in it. **No wave-number parameter**, which is why placement logic that varies per wave has to count for itself. |
| `OnMissionStart` | `public virtual void OnMissionStart()` | Empty by default. The bracket for resetting per-battle cached state, since neither abstract method receives a battle identity and instance fields are the only place such state can live. |
| `OnMissionEnd` | `public virtual void OnMissionEnd()` | Empty by default. The matching teardown hook. A model that caches per-battle data and forgets this leaks it into the next battle on the same instance. |
| `BaseModel` (inherited) | `protected BattleSpawnModel BaseModel { get; private set; }` | The model registered before this one, injected by `MBGameModel<T>.Initialize`. **Not** `base.` — both abstract methods forbid that. Delegating through `BaseModel.GetInitialSpawnAssignments(...)` and then adjusting the result is the only composition route. |
| Return shape | `List<(IAgentOriginBase origin, int formationIndex)>` | A list of pairs, so an origin can appear once while a formation index appears many times, and ordering is meaningful to the caller. **No uniqueness or completeness guarantee**: an empty list, a partial list, and a duplicated index are all representable and none is rejected here. |

## Real example

Registering a replacement — the only public entry point is `IGameStarter.AddModel<T>`:

```csharp
public class MySpawnModelInstaller : CampaignEventReceiver
{
    public override void OnSessionStart(CampaignGameStarter campaignGameStarter)
    {
        campaignGameStarter.AddModel<BattleSpawnModel>(new MyRankedSpawnModel());
    }
}
```

A model that stacks origins into formations by index, delegating to the previous model rather than reimplementing placement:

```csharp
public class MyRankedSpawnModel : BattleSpawnModel
{
    private int _waveCounter;

    public override void OnMissionStart()
    {
        this._waveCounter = 0;
    }

    public override List<(IAgentOriginBase origin, int formationIndex)> GetInitialSpawnAssignments(
        BattleSideEnum battleSide,
        List<IAgentOriginBase> troopOrigins)
    {
        List<(IAgentOriginBase, int)> assignments =
            this.BaseModel.GetInitialSpawnAssignments(battleSide, troopOrigins);

        Debug.Print("side " + battleSide + " initial assignments = " + assignments.Count, 0);
        return assignments;
    }

    public override List<(IAgentOriginBase origin, int formationIndex)> GetReinforcementAssignments(
        BattleSideEnum battleSide,
        List<IAgentOriginBase> troopOrigins)
    {
        this._waveCounter++;
        List<(IAgentOriginBase, int)> assignments =
            this.BaseModel.GetReinforcementAssignments(battleSide, troopOrigins);

        Debug.Print("side " + battleSide + " reinforcement wave " + this._waveCounter + " = " + assignments.Count, 0);
        return assignments;
    }
}
```

The `_waveCounter` is the honest consequence of the missing wave parameter: the interface does not tell you which wave this is, so a model that wants to know has to count for itself and reset in `OnMissionStart`. Note the field is declared as `List<(IAgentOriginBase, int)>` rather than the named-tuple form — C# treats them as the same type, and the named form is only for readability at the call site.

Reading the assignments from the other side, which is what a deployment logic does:

```csharp
public class MyDeploymentAudit : MissionLogic
{
    public override void AfterStart()
    {
        BattleSpawnModel model = MissionGameModels.Current.BattleSpawnModel;
        List<IAgentOriginBase> origins = new List<IAgentOriginBase>();

        List<(IAgentOriginBase origin, int formationIndex)> assignments =
            model.GetInitialSpawnAssignments(BattleSideEnum.Defender, origins);

        Debug.Print("defender origins=" + origins.Count + " assigned=" + assignments.Count, 0);
    }
}
```

That last block is illustrative only. `Mission` exposes no `GetTroopOrigins` accessor in 1.4.5, and the real arguments come from inside `MissionBattleSideSpawnContext`, whose troop list is private. Calling `GetInitialSpawnAssignments` yourself after the mission has started returns whatever the current model computes *now*, which is not the decision the mission actually used — read the assigned formations off the agents if you want the historical answer.

## Risks and boundaries

1. **Both methods are `abstract` and there is no partial default.** A derived class must implement both or it does not compile. There is no `virtual` fallback to inherit.
2. **`base.` delegation is impossible.** Abstract methods cannot be called through `base.`. `BaseModel` is the only route to the model you replaced, and it is `protected` — so a mod must go through its own subclass to delegate.
3. **`BaseModel` can be `null`.** `AddModel<T>` passes `GetModel<T>()`, which returns `null` when nothing of that type was registered first. Null-check before delegating.
4. **The list is not validated.** Nothing rejects an empty list, a partial result, an origin that already spawned, or a duplicated `formationIndex`. Model bugs surface downstream, not here.
5. **`GetReinforcementAssignments` receives an already-filtered queue, not the roster.** The caller passes its private `_reservedTroops`. Returning an origin the caller did not reserve has no defined meaning, and no validation rejects it. There is also no wave-number parameter, so wave-varying placement must be counted for yourself and reset in `OnMissionStart`.
6. **Instance state is not battle-scoped.** Nothing passes a battle identity into `OnMissionStart`, and the model instance is resolved once per session. Cached state is therefore shared across battles in the same process unless you clear it.
7. **Load order decides the winner.** `GetGameModel<T>` scans backwards, so the last `AddModel<BattleSpawnModel>` call is the one that is live.
8. **These two methods are asked at different times with different consequences.** The initial call happens before anything is spawned; the reinforcement call happens as agents are being added. Logic valid in one is not automatically valid in the other — that is exactly why they are two methods.

## Dependencies

- **Resolution:** [`MissionGameModels`](../MissionGameModels) exposes `BattleSpawnModel`; `GameModelsManager.GetGameModel<T>` picks the last-registered instance.
- **Injection:** [`IGameStarter`](../../core/IGameStarter) `AddModel<T>` is the only registration surface and what populates `BaseModel`.
- **Input type:** [`IAgentOriginBase`](../../core-extra/IAgentOriginBase) identifies the troop origin being placed; [`BattleSideEnum`](../../core-extra/BattleSideEnum) says which side is being assigned.
- **Spawn consumer:** [`BattleDeploymentMissionController`](./BattleDeploymentMissionController) performs the deployment, while [`BattleSpawnLogic`](./BattleSpawnLogic) prunes the scene's spawnpoint sets before it.
- **Callers:** [`MissionBattleSideSpawnContext`](./MissionBattleSideSpawnContext) is the only in-tree caller of both methods, and it supplies the troop lists.
- **Formation layer:** [`Formation`](../../mission/Formation) is what the returned `formationIndex` addresses.
- **Sibling model:** [`AgentStatCalculateModel`](../AgentStatCalculateModel) is the other dense `MBGameModel<T>` in this namespace and follows the same registration pattern.
- Bucket home: [mission-ext API section](../)