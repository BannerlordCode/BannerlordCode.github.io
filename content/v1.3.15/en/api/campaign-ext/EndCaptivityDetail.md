---
title: "EndCaptivityDetail"
description: "Distinguishes ransom, peace, battle, escape, choice, death, and compensation as the reasons a hero leaves captivity."
---
# EndCaptivityDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum EndCaptivityDetail`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/EndCaptivityDetail.cs`

## One-line responsibility

Carry the reason for a hero leaving captivity through `HeroPrisonerReleased` so logs, quests, notifications, and prisoner behaviors can distinguish ransom, escape, peace, and death cleanup.

## Mental Model

`EndCaptivityDetail` is emitted by [`EndCaptivityAction`](../EndCaptivityAction) after the prisoner roster and hero state have been updated. The public `ApplyBy*` wrappers remove the hero from the source `PartyBase.PrisonRoster`, clear captivity relationships, restore or change the hero state, and dispatch `CampaignEvents.HeroPrisonerReleased`. A mod should not remove a hero from a roster and then publish the event manually.

The reason does not itself say whether the hero is still a prisoner or contain every release participant. Read the event's `prisoner`, `party`, and `capturerFaction` arguments, and treat the callback as occurring after the release transaction.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `Ransom` | `ApplyByRansom` | Captivity ends through a ransom transaction. |
| `ReleasedAfterPeace` | `ApplyByPeace` | A faction peace settlement releases prisoners. |
| `ReleasedAfterBattle` | `ApplyByReleasedAfterBattle` | Battle resolution releases the hero. |
| `ReleasedAfterEscape` | `ApplyByEscape` | The hero escapes captivity. |
| `ReleasedByChoice` | `ApplyByReleasedByChoice` | A campaign or player choice releases the hero. |
| `Death` | `ApplyByDeath` | A hero dies while captured and the captivity relationship is cleaned up. |
| `ReleasedByCompensation` | `ApplyByReleasedByCompensation` | A compensation settlement ends the captivity. |

The numeric ordering is not a save format. Save the mod's resulting business state and reacquire the hero on load.

## Dependencies and Event Consumers

- **Upstream:** [`EndCaptivityAction`](../EndCaptivityAction), [`Hero`](../../campaign/Hero), [`PartyBase`](../../campaign/PartyBase), and the prison roster.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `HeroPrisonerReleased` as `IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool>`.
- **Downstream:** [`CampaignEventReceiver`](../CampaignEventReceiver), `PrisonerReleaseCampaignBehavior`, default logs, and quest behaviors branch on the reason.
- **Related actions:** [`TakePrisonerAction`](../TakePrisonerAction), [`TransferPrisonerAction`](../TransferPrisonerAction), and [`KillCharacterAction`](../KillCharacterAction) are adjacent points in the prisoner lifecycle.
- **Save boundary:** Prisoner rosters and hero location are saved; the release reason is not replayed for non-serialized listeners after loading.

## Risks and Lifetime

- Do not call `PartyBase.PrisonRoster.RemoveTroop` as a substitute for the Action. That skips hero state, release events, logs, and quest cleanup.
- `Death` is not an ordinary release. It can share the synchronous cascade with hero death, inheritance, and companion cleanup; do not invoke a normal release Action from that callback.
- `party` may be null on death or compensation paths, and `capturerFaction` is not necessarily the hero's current map faction. Check both before dereferencing.
- The enum is not a recoverable hero state. After loading, rebuild runtime indexes from `Hero.IsPrisoner`, party membership, and current campaign data.

## Real Usage Example

The built-in `DefaultLogsCampaignBehavior` registers `HeroPrisonerReleased` with this shape:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class PrisonerReleaseBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.HeroPrisonerReleased.AddNonSerializedListener(this, OnHeroPrisonerReleased);
    }

    private void OnHeroPrisonerReleased(
        Hero prisoner,
        PartyBase party,
        IFaction capturerFaction,
        EndCaptivityDetail detail,
        bool showNotification)
    {
        if (detail == EndCaptivityDetail.ReleasedAfterEscape && prisoner != null)
        {
            RecordEscape(prisoner, party, capturerFaction, showNotification);
        }
    }

    private void RecordEscape(Hero prisoner, PartyBase party, IFaction capturerFaction, bool showNotification)
    {
        // Read the released Hero state and update a mod-owned runtime index.
    }

    public override void SyncData(IDataStore dataStore)
    {
        // This example does not persist the transient reason.
    }
}
```

To release a hero, call the matching public entry such as `EndCaptivityAction.ApplyByEscape(hero)` or `ApplyByPeace(hero, facilitator)`. Do not fabricate `HeroPrisonerReleased` notifications.

## Version Note

v1.3.15 and v1.4.5 expose the same seven values and release-event arguments. The v1.4.5 `EndCaptivityAction` provides the fuller roster, death, and notification cascade used for the current risk notes.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [EndCaptivityAction](../EndCaptivityAction) · [TransferPrisonerAction](../TransferPrisonerAction)
- ↓ Owner and event: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [Hero](../../campaign/Hero) · [PartyBase](../../campaign/PartyBase) · [TakePrisonerAction](../TakePrisonerAction)

