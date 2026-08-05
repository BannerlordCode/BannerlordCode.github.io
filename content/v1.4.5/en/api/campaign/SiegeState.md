---
title: "Settlement.SiegeState"
description: "The saved settlement siege phase used to choose wall deployment, lord's-hall, and invalid-state handling."
---
# Settlement.SiegeState

**Namespace:** `TaleWorlds.CampaignSystem.Settlements`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum Settlement.SiegeState`  
**Base:** `System.Enum`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Settlements/Settlement.cs`

## Responsibility

`Settlement.SiegeState` is the saved phase marker on a `Settlement`; it tells encounter and Mission code whether a siege is at the walls, inside the lord's hall, or in an invalid state.

## Mental model

This is a nested enum, not an independently acquired service. Read it through `settlement.CurrentSiegeState`; the property is saveable and has a private setter. A settlement starts at `OnTheWalls`, `SetNextSiegeState()` advances it once to `InTheLordsHall`, and `Settlement.FinalizeSiegeEvent()` resets it to `OnTheWalls` while clearing `Settlement.SiegeEvent`.

The value is a gate for choosing a real workflow. `PlayerSiege.StartSiegeMission()` and `PlayerEncounter.StartSiegeAmbushMission()` use the wall stage to build a deployment Mission. `InTheLordsHall` represents a different encounter phase, and `Invalid` is an error signal rather than a state a mod should set or “recover” by casting an integer.

## Lifecycle, values, and dependencies

| Value | Meaning | Safe consumer |
|---|---|---|
| `OnTheWalls` | The siege is at the wall assault stage. | Wall deployment through [`PlayerSiege`](../PlayerSiege), or a siege ambush through [`PlayerEncounter`](../PlayerEncounter). |
| `InTheLordsHall` | The wall phase has advanced to the lord's-hall fight. | Encounter/menu code that chooses lord's-hall behavior; do not pass it to wall deployment. |
| `Invalid` | A sentinel for an invalid or unsupported phase. | Error handling and assertions, not normal progression. |

`SetNextSiegeState()` stops at `InTheLordsHall`; it does not advance to `Invalid`. `ResetSiegeState()` is used during settlement siege finalization. The state therefore describes the current settlement/event lifecycle and is not a global player flag.

Related state is held by [`Settlement`](../Settlement) and [`SiegeEvent`](../SiegeEvent), while the menu and Mission decisions are made by [`PlayerSiege`](../PlayerSiege) and [`PlayerEncounter`](../PlayerEncounter).

## Real acquisition example

Read the state from a real settlement before selecting the Mission path:

```csharp
Settlement settlement = PlayerSiege.BesiegedSettlement;
Campaign campaign = Campaign.Current;

if (settlement != null)
{
    Settlement.SiegeState phase = settlement.CurrentSiegeState;
    if (phase == Settlement.SiegeState.OnTheWalls)
    {
        PlayerSiege.StartSiegeMission();
    }
}
```

The important rule is to branch on the saved value rather than force the enum. An `InTheLordsHall` value must be handed to the active encounter/menu flow, not to wall deployment.

## Failure and save boundaries

- Do not assign `CurrentSiegeState`; its setter is private and the transition must remain coordinated with the siege event and settlement cleanup.
- Do not cast arbitrary integers to `Settlement.SiegeState`. `Invalid` is explicitly checked by siege Mission code and can lead to a failed assertion.
- Do not open a wall deployment Mission at `InTheLordsHall`; the scene, wall hit-point ratios, and deployment weapons are selected for `OnTheWalls`.
- Do not treat `OnTheWalls` as proof that `Settlement.SiegeEvent` is non-null. Check the event and settlement together, especially after save load or finalization.
- A finalization resets the state and clears the settlement's event. Cached enum values can outlive the event that gave them meaning; re-read `CurrentSiegeState` at each menu or Mission boundary.

## Navigation

- **Parent:** [Campaign API index](../)
- **Siblings:** [`Settlement`](../Settlement), [`SiegeEvent`](../SiegeEvent), [`PlayerSiege`](../PlayerSiege), [`SiegeEventManager`](../SiegeEventManager)
- **Related:** [`PlayerEncounter`](../PlayerEncounter), [`CampaignMission`](../CampaignMission), [`ISiegeEventSide`](../ISiegeEventSide)
