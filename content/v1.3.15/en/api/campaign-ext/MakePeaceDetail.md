---
title: "MakePeaceDetail"
description: "Distinguishes ordinary peace from a kingdom-decision peace and explains how MakePeaceAction synchronizes stance, tribute, and events."
---
# MakePeaceDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum MakePeaceAction.MakePeaceDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/MakePeaceAction.cs`

## One-line responsibility

Preserve whether a faction peace was ordinary or selected by a kingdom decision, allowing diplomacy, siege, prisoner, quest, and UI systems to react after the stance becomes neutral.

## Mental Model

`MakePeaceDetail` is the event reason carried by [`MakePeaceAction`](../MakePeaceAction). `Apply` makes the two factions neutral, writes the tribute state, marks visible settlements and parties dirty when the player is involved, and then publishes `CampaignEvents.MakePeace`. `ApplyByKingdomDecision` also carries the daily tribute and duration produced by the decision resolution.

The enum is not the war state and is not a tribute field. Use `ApplyByKingdomDecision` for a decision result and `Apply` for ordinary peace. Do not edit `StanceLink` directly or publish a second peace event after the Action.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `Default` | `Apply` | Ordinary diplomacy or peace without kingdom-decision tribute data. |
| `ByKingdomDecision` | `ApplyByKingdomDecision` | A kingdom decision selected peace and supplied daily tribute and duration. |

The numeric ordering is not a save contract. Persist the resulting diplomatic state and any mod-owned explanation by name.

## Dependencies and Event Consumers

- **Upstream:** [`MakePeaceAction`](../MakePeaceAction), [`IFaction`](../IFaction), `FactionManager`, and kingdom decision resolution.
- **State:** The `StanceLink` becomes neutral and tribute is written through `SetDailyTributePaid`; player-visible map entities may be marked dirty.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `MakePeace` as `IMbEvent<IFaction, IFaction, MakePeaceAction.MakePeaceDetail>`.
- **Downstream:** `SiegeEventCampaignBehavior`, `PrisonerReleaseCampaignBehavior`, and `AllianceCampaignBehavior` consume the peace event but generally ignore `detail`; `CommentOnMakePeaceBehavior` explicitly branches on `ByKingdomDecision`.
- **Reverse operation:** War must use [`DeclareWarAction`](../DeclareWarAction), not a direct faction stance write.

## Risks and Lifetime

- Calling `FactionManager.SetNeutral` directly skips tribute, visible-map invalidation, and `MakePeace`, so siege and prisoner behaviors can continue to operate on stale war assumptions.
- The tribute direction and duration in `ApplyByKingdomDecision` come from the concluded decision. Do not treat it as an alias of `Apply` or charge the same tribute again outside the Action.
- The event is synchronous and runs after the stance update. Calling peace or war for the same pair from inside the callback can duplicate diplomacy effects or recurse.
- A load does not replay the peace event. Rebuild non-serialized caches from the factions' current stance and tribute state.

## Real Usage Example

Built-in nameplate and `KingdomDecisionProposalBehavior` code consumes the reason through `CampaignEvents.MakePeace`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class PeaceReasonBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.MakePeace.AddNonSerializedListener(this, OnMakePeace);
    }

    private void OnMakePeace(IFaction faction1, IFaction faction2, MakePeaceAction.MakePeaceDetail detail)
    {
        if (detail == MakePeaceAction.MakePeaceDetail.ByKingdomDecision)
        {
            RefreshDecisionPeaceState(faction1, faction2);
        }
    }

    private void RefreshDecisionPeaceState(IFaction faction1, IFaction faction2)
    {
        // Both factions are already neutral when this callback runs.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example does not persist the transient event reason.
    }
}
```

For a real peace transition, call `MakePeaceAction.Apply(faction1, faction2)` or `MakePeaceAction.ApplyByKingdomDecision(faction1, faction2, dailyTribute, duration)` with values produced by the decision flow.

## Version Note

v1.3.15 and v1.4.5 expose `Default` and `ByKingdomDecision` with the same `MakePeace` event signature. The v1.4.5 source is the authority for the map-visual and behavior side effects described here.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↓ Owner Action: [MakePeaceAction](../MakePeaceAction)
- ↔ Siblings: [DeclareWarAction](../DeclareWarAction)
- Events: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [IFaction](../IFaction) · [Kingdom](../../campaign/Kingdom) · [SiegeEvent](../SiegeEvent/)
