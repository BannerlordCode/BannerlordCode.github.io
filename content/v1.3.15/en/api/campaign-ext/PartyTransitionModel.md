---
title: "PartyTransitionModel"
description: "The replaceable policy for mobile-party embark, disembark, and fleet-arrival time without moving parties or changing naval state."
---

# PartyTransitionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`  
**Base:** `MBGameModel<PartyTransitionModel>`  
**Source:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`  
**Default implementation:** `TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTransitionModel.cs`

## One-line responsibility

`PartyTransitionModel` supplies `CampaignTime` durations for a `MobileParty` embarking, disembarking, or sailing to a settlement. It gives the navigation state machine a time value; it does not move the party or change ownership.

## Mental model

This is the time policy for naval navigation. When `MobileParty.NavigationTransitionStartTime` begins a transition, it reads embark or disembark duration from `Campaign.Current.Models.PartyTransitionModel` and stores that duration in the party navigation state. `AnchorPoint.CallFleet` reads the fleet-to-settlement duration; `CampaignTime.Zero` means immediate arrival. The default implementation returns `CampaignTime.Never` for all three paths, so the current vanilla rule has no extra transition duration.

The model does not start a transition, update `Position`, or save a fleet route. A replacement should return deterministic time values and let the existing `MobileParty`/`AnchorPoint` state machines advance and save the transition.

## When to use and when not to

- Replace the model to add meaningful time to embark, disembark, or fleet-port travel; register it during campaign startup.
- Query the active rule for a route preview through `Campaign.Current.Models.PartyTransitionModel`.
- Do not call `SetPosition`, mutate `NavigationTransitionStartTime`, or create an `AnchorPoint` in a model method. Those operations bypass the navigation state machine.
- Do not return negative time or random values. One transition is queried more than once, so its duration must be stable and serializable.

## Dependencies

- [Campaign](../../campaign/Campaign) and [GameModels](../GameModels) own the registered transition policy.
- [MobileParty](../../campaign/MobileParty) reads embark/disembark duration and saves the transition start and duration.
- `Settlement` supplies the fleet destination and port position; `AnchorPoint` decides whether to dock immediately or wait.
- `CampaignTime` is the persisted/comparable time value and must not be replaced with an arbitrary float.

## Members and timing

| Member | Purpose and timing | Side-effect boundary |
|---|---|---|
| `GetTransitionTimeForEmbarking(MobileParty)` | Read when a party starts embarking and creates a navigation transition. | Returns a duration only. |
| `GetTransitionTimeDisembarking(MobileParty)` | Read when a sea party starts disembarking. | Does not update sea state or position. |
| `GetFleetTravelTimeToSettlement(MobileParty, Settlement)` | Read when a fleet calls at a settlement; zero lets `AnchorPoint` dock immediately. | Does not move the party or raise an arrival event. |

## Real acquisition and query example

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;

MobileParty party = MobileParty.MainParty;
PartyTransitionModel transitions = Campaign.Current.Models.PartyTransitionModel;
CampaignTime embarkTime = transitions.GetTransitionTimeForEmbarking(party);
CampaignTime disembarkTime = transitions.GetTransitionTimeDisembarking(party);
```

This only reads the policy. `MobileParty` writes the transition start and duration; a mod changing arrival should also inspect how `AnchorPoint.CallFleet` handles `CampaignTime.Zero`, `Never`, and a future time.

## Risks and debugging boundaries

1. Returning `CampaignTime.Never` means a fleet path depending on arrival will never complete; returning zero bypasses waiting. Treat both values as explicit business semantics.
2. Mutating position or navigation fields from the model races with `MobileParty` saveable properties and can leave sea state, position, and due time inconsistent after reload.
3. `GetFleetTravelTimeToSettlement` requires a valid settlement/port state. Do not create a temporary settlement in the model or retain a destroyed `Settlement` reference.
4. Route previews and actual navigation may query the model separately. Frame-time or random-dependent values produce different arrival days for the same party.
5. Transition time is policy, not save state. Save custom persistent routes in a behavior/navigation object rather than in the model instance.

## Navigation

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Sibling: PartySpeedModel](../PartySpeedModel) · [MobilePartyAIModel](../MobilePartyAIModel)
- [Related: Campaign](../../campaign/Campaign) · [GameModels](../GameModels) · [MobileParty](../../campaign/MobileParty)
