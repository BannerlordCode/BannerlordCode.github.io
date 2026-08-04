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

Identify why a hero leaves captivity and, when the Action emits `HeroPrisonerReleased`, let logs, quests, notifications, and companion listeners distinguish the release paths. Non-player `Death` cleanup returns early without that event.

## Mental Model

`EndCaptivityDetail` is the reason used by [`EndCaptivityAction`](../EndCaptivityAction) while it updates the prisoner roster and hero state. The public `ApplyBy*` wrappers normally remove the hero from the source `PartyBase.PrisonRoster`, clear captivity relationships, restore or change the hero state, and dispatch `CampaignEvents.HeroPrisonerReleased`; however, `Death` returns after roster cleanup for a non-player hero and does not take that release-event path. A mod should not remove a hero from a roster and then publish the event manually.

The reason does not itself say whether the hero is still a prisoner or contain every release participant. Read the event's `prisoner`, `party`, and `capturerFaction` arguments, and treat the callback as occurring after the release transaction.

## Enum Values and Timing

| Value | Entry point | Meaning |
|---|---|---|
| `Ransom` | `ApplyByRansom` | Captivity ends through a ransom transaction. |
| `ReleasedAfterPeace` | `ApplyByPeace` | A faction peace settlement releases prisoners. |
| `ReleasedAfterBattle` | `ApplyByReleasedAfterBattle` | Battle resolution releases the hero. |
| `ReleasedAfterEscape` | `ApplyByEscape` | The hero escapes captivity. |
| `ReleasedByChoice` | `ApplyByReleasedByChoice` | A campaign or player choice releases the hero. |
| `Death` | `ApplyByDeath` | A captured hero dies; the non-player path cleans the roster and returns, while the player path still uses the player release branch. |
| `ReleasedByCompensation` | `ApplyByReleasedByCompensation` | A compensation settlement ends the captivity. |

The numeric ordering is not a save format. Save the mod's resulting business state and reacquire the hero on load.

## Dependencies and Event Consumers

- **Upstream:** [`EndCaptivityAction`](../EndCaptivityAction), [`Hero`](../../campaign/Hero), [`PartyBase`](../../campaign/PartyBase), and the prison roster.
- **Event:** [`CampaignEvents`](../CampaignEvents) exposes `HeroPrisonerReleased` as `IMbEvent<Hero, PartyBase, IFaction, EndCaptivityDetail, bool>`; it covers ordinary releases and the player branch, but must not be treated as guaranteed for every `Death` cleanup.
- **Downstream:** Default logs, notifications, quests, and companion listeners consume `HeroPrisonerReleased`. `PrisonerReleaseCampaignBehavior` is an upstream caller of `EndCaptivityAction`, not a consumer of the release event.
- **Related actions:** [`TakePrisonerAction`](../TakePrisonerAction), [`TransferPrisonerAction`](../TransferPrisonerAction), and [`KillCharacterAction`](../KillCharacterAction) are adjacent points in the prisoner lifecycle.
- **Save boundary:** Prisoner rosters and hero location are saved; the release reason is not replayed for non-serialized listeners after loading.

## Risks and Lifetime

- Do not call `PartyBase.PrisonRoster.RemoveTroop` as a substitute for the Action. That skips hero state, release events, logs, and quest cleanup.
- `Death` is not an ordinary release. The non-player path does not emit `HeroPrisonerReleased`; only the Main Hero branch continues to that event. It can share the synchronous cascade with hero death, inheritance, and companion cleanup, so do not invoke a normal release Action from that callback.
- `party` may be null on death or compensation paths, and `capturerFaction` is not necessarily the hero's current map faction. Check both before dereferencing.
- The enum is not a recoverable hero state. After loading, rebuild runtime indexes from `Hero.IsPrisoner`, party membership, and current campaign data.

## Real Usage Example

The built-in `DefaultLogsCampaignBehavior` registers `HeroPrisonerReleased` with this shape:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Party;

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
- ↓ Owner Action: [EndCaptivityAction](../EndCaptivityAction)
- ↔ Siblings: [TransferPrisonerAction](../TransferPrisonerAction)
- Events: [CampaignEvents](../CampaignEvents) · [CampaignEventReceiver](../CampaignEventReceiver)
- Related: [Hero](../../campaign/Hero) · [PartyBase](../../campaign/PartyBase) · [TakePrisonerAction](../TakePrisonerAction)
