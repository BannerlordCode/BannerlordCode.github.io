---
title: "DeclareWarDetail"
description: "Identifies why a war was declared so campaign events, quests, diplomacy behaviors, and notifications can react after the war stance is applied."
---
# DeclareWarDetail

**Namespace:** `TaleWorlds.CampaignSystem.Actions`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum DeclareWarDetail` nested in `DeclareWarAction`  
**Base:** `System.Enum`  
**Source:** `TaleWorlds.CampaignSystem/Actions/DeclareWarAction.cs`

## Overview

**One-line responsibility:** Preserve the business reason for a declaration of war after `DeclareWarAction` has changed the diplomatic stance, so downstream systems can distinguish ordinary, player, decision, rebellion, crime, kingdom-creation, throne-claim, and call-to-war flows.

`DeclareWarDetail` does not contain the factions, start a war, or persist a diplomatic relation. A named `DeclareWarAction.ApplyBy*` entry selects the value, `ApplyInternal` performs the common transaction, and `CampaignEvents.WarDeclared` delivers the value to quests, AI, comments, alliances, and other behaviors.

## Mental Model

Treat this enum as an event reason attached to a completed diplomatic mutation. `DeclareWarAction.ApplyInternal` first calls `FactionManager.DeclareWar`, updates political stagnation for an affected kingdom, marks visible enemy settlements and parties dirty when the player is involved, and only then dispatches `OnWarDeclared`. At callback time, `faction1.IsAtWarWith(faction2)` is already expected to be true.

The reason is created by the action wrapper, not selected by a mod and passed to a public `ApplyInternal` method; that method is private. Use the wrapper whose name matches the upstream decision. A reason value also does not create a kingdom, rebellion, crime threshold, or call-to-war agreement. Those upstream systems must complete their own prerequisites before the declaration action runs.

## Transaction and Event Flow

```text
DeclareWarAction.ApplyBy*(faction1, faction2)
  -> FactionManager.DeclareWar
       -> war stance and faction caches update
  -> political stagnation and player-visible party/settlement visuals update
  -> CampaignEvents.WarDeclared(faction1, faction2, detail)
       -> AI, quests, comments, alliances, and diplomacy behaviors react
```

`WarDeclared` is a synchronous campaign event. A listener may query the new stance, but must not re-declare war for the same pair from inside the callback. The source uses the same event shape for all eight values, so consumers should make their branch explicit instead of treating `Default` as a universal fallback for every custom situation.

## Enum Values and Typical Call Timing

| Value | Public action entry | Meaning and observed caller |
|---|---|---|
| `Default` | `ApplyByDefault(faction1, faction2)` | General-purpose declaration without a narrower business cause. `DeclareWarBarterable`, `ChangeKingdomAction`'s rebellion/kingdom-destruction cleanup, and campaign cheats use it. |
| `CausedByPlayerHostility` | `ApplyByPlayerHostility(faction1, faction2)` | The player caused the hostile encounter to become a war. `BeHostileAction` uses it; quest behaviors distinguish it from a kingdom decision when deciding whether to fail or cancel objectives. |
| `CausedByKingdomDecision` | `ApplyByKingdomDecision(faction1, faction2)` | A completed kingdom vote chose war. `DeclareWarDecision.ApplyChosenOutcome` calls the wrapper; this value does not create or propose the decision. |
| `CausedByRebellion` | `ApplyByRebellion(faction1, faction2)` | A rebellion has established the hostile relationship. `RebellionsCampaignBehavior` and the rebellion branch of `ChangeKingdomAction` use it. |
| `CausedByCrimeRatingChange` | `ApplyByCrimeRatingChange(faction1, faction2)` | The player's crime rating crossed the hostile threshold. `ChangeCrimeRatingAction` uses it so issues and diplomacy logic can identify the cause. |
| `CausedByKingdomCreation` | `ApplyByKingdomCreation(faction1, faction2)` | A newly created kingdom inherits or establishes war relations. `KingdomManager` uses it while creating the kingdom's initial diplomatic state. |
| `CausedByClaimOnThrone` | `ApplyByClaimOnThrone(faction1, faction2)` | Reserved for a throne-claim flow. The scanned 1.4.5 source contains the public wrapper but no built-in call site, so do not claim that the base game currently triggers it automatically. |
| `CausedByCallToWarAgreement` | `ApplyByCallToWarAgreement(faction1, faction2)` | An alliance call-to-war agreement has been executed. `AllianceCampaignBehavior` uses it after the agreement is accepted. |

The enum's order is not a stable save-format contract. Branch on the named values, not on their underlying integers.

## Dependencies and Downstream Effects

| Direction | Type or subsystem | Contract |
|---|---|---|
| Upstream action | [`DeclareWarAction`](../DeclareWarAction) | Chooses the reason-specific wrapper and owns the common state transition. |
| Diplomatic state | [`FactionManager`](../FactionManager) | Sets the stance and updates faction-level war caches before the event. |
| Kingdom state | [`Kingdom`](../../campaign/Kingdom) | May have `PoliticalStagnation` reduced and clamped by the action when the fief imbalance condition is met. |
| Downstream event | [`CampaignEvents`](../CampaignEvents) and [`CampaignEventReceiver`](../CampaignEventReceiver) | Publish `WarDeclared` with both factions and `DeclareWarDetail`. |
| Behavior consumers | `AllianceCampaignBehavior`, `AiPartyThinkBehavior`, issue behaviors, and `CommentOnDeclareWarBehavior` | End or update diplomatic/quest state, choose blame, and generate comments or notifications based on the reason. |
| Reverse operation | [`MakePeaceAction`](../MakePeaceAction) | Ends the war through the matching neutralization transaction; do not write a stance directly. |
| Save boundary | [`SaveableTypeDefiner`](../../save-system/SaveableTypeDefiner/) | The war stance and related campaign state are persisted; this event reason is not replayed for non-serialized listeners on load. |

## Risks, Save State, and Lifetime

- Do not call `FactionManager.DeclareWar` as a substitute for `DeclareWarAction`. That bypasses the political-stagnation adjustment, player-visible visual invalidation, and `WarDeclared` event, leaving quests, alliances, and AI with incomplete information.
- Validate that both factions are non-null, distinct, part of the current campaign, and not already at war. Repeating the action can still dispatch downstream work even when the underlying stance does not change in the way the caller expects.
- Do not invoke the action during save deserialization, before `Campaign.Current` is initialized, or while iterating collections that event consumers can modify. The transaction reads campaign models and may cause broad synchronous callbacks.
- The enum itself is an ephemeral cause argument. Persist the resulting war relation and any mod-owned explanation in your own save data; do not persist a raw enum integer and assume future versions keep its numeric order.
- Non-serialized event listeners do not receive historical declarations after a load. Rebuild runtime caches from current faction stances during campaign initialization when needed.

## Real Usage Example

The safest common use of the enum is to receive it from the campaign event. This follows the same registration pattern used by the built-in `CommentOnDeclareWarBehavior`:

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

public sealed class WarReasonBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.WarDeclared.AddNonSerializedListener(this, OnWarDeclared);
    }

    public override void SyncData(IDataStore dataStore)
    {
    }

    private void OnWarDeclared(IFaction faction1, IFaction faction2, DeclareWarAction.DeclareWarDetail detail)
    {
        if (detail == DeclareWarAction.DeclareWarDetail.CausedByPlayerHostility &&
            (faction1 == Hero.MainHero.MapFaction || faction2 == Hero.MainHero.MapFaction))
        {
            // Update mod-owned runtime state after the war stance is already active.
        }
    }
}
```

When a mod genuinely needs to start a war, it should call the reason-specific wrapper after its own prerequisites are complete:

```csharp
using TaleWorlds.CampaignSystem.Actions;

IFaction playerFaction = Hero.MainHero.MapFaction;
IFaction targetFaction = Hero.OneToOneConversationHero?.MapFaction;

if (playerFaction != null && targetFaction != null && playerFaction != targetFaction)
{
    DeclareWarAction.ApplyByPlayerHostility(playerFaction, targetFaction);
}
```

This example deliberately uses the public action; it does not invoke event receivers or write faction stance fields directly.

## Version Note

The v1.3.15 and v1.4.5 routes expose the same eight enum values, named wrappers, and common ordering: diplomatic mutation, visual/model side effects, then `WarDeclared`. The v1.4.5 source is the reference for the current call-point notes above. Cross-version mod data should use named mappings rather than raw enum integers.

## Navigation

- ↑ Parent: [Campaign-Ext API](../)
- ↔ Siblings: [DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction)
- ↓ Children: no separate child page; the enum is owned by [DeclareWarAction](../DeclareWarAction)
- Related: [FactionManager](../FactionManager) · [CampaignEvents](../CampaignEvents) · [ChangeKingdomAction](../ChangeKingdomAction) · [Kingdom](../../campaign/Kingdom)
