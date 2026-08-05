---
title: "PartyScreenMode"
description: "The v1.4.5 mode enum stored on PartyState for normal, loot, ransom, troop, prisoner, and quest transfer screens."
---
# PartyScreenMode

**Namespace:** `Helpers`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public enum PartyScreenMode`  
**Owner:** [PartyScreenHelper](../PartyScreenHelper)  
**Source:** `bin/TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## Responsibility

`PartyScreenMode` labels the party-screen workflow configured by [PartyScreenHelper](../PartyScreenHelper) on [PartyState](../../campaign/PartyState). It tells [PartyScreenLogic](../../campaign/PartyScreenLogic) which presentation contract is active, but it does not by itself authorize troop or prisoner movement.

## Mental model

The helper selects a mode while it builds the state and initialization data:

```
PartyScreenHelper entry -> PartyState.PartyScreenMode -> PartyScreenLogic transfer presentation
```

Transfer states, capacity limits, and callbacks remain separate inputs. A mode therefore describes the workflow, not the complete mutation policy.

## Values

| Value | Source workflow |
| --- | --- |
| `Normal` | Standard party management and the default main-party flow. |
| `Shared` | Shared-party presentation used by specialized transfer logic. |
| `Loot` | Taking troops or prisoners from a loot roster. |
| `Ransom` | Ransoming prisoners with the source ransom initialization. |
| `PrisonerManage` | Managing or donating prisoners. |
| `TroopsManage` | Managing, receiving, donating, or transferring troops. |
| `QuestTroopManage` | Quest-owned troop selection with quest callbacks and limits. |

## Real use

The active party state exposes the mode to UI or callback code:

```csharp
Game game = Game.Current;
PartyState state = PartyScreenHelper.GetActivePartyState();
bool isQuestTransfer = state != null
    && state.PartyScreenMode == PartyScreenHelper.PartyScreenMode.QuestTroopManage;
```

The helper sets the value in methods such as `OpenScreenAsLoot`, `OpenScreenAsRansom`, `OpenScreenAsQuest`, and `OpenScreenWithCondition` before pushing the `PartyState`.

## Dependencies

- [PartyScreenHelper](../PartyScreenHelper) owns the enum declaration and mode assignment.
- [PartyState](../../campaign/PartyState) stores the active mode.
- [PartyScreenLogic](../../campaign/PartyScreenLogic) consumes the mode during transfer and button handling.
- [GameStateManager](../../core-extra/GameStateManager) makes the state active through the game-state stack.

## Risks and version boundary

`PartyScreenMode` is not a substitute for `PartyScreenLogic.TransferState`. A `TroopsManage` screen can still make one side non-transferable, and a `Loot` screen still depends on the supplied rosters and callbacks. The values documented here follow v1.4.5 and are not a save-schema contract.

## Navigation

- [↑ API system index](../)
- [Owner: PartyScreenHelper](../PartyScreenHelper)
- [Related: PartyState](../../campaign/PartyState)
- [Related: PartyScreenLogic](../../campaign/PartyScreenLogic)
- [中文页面](../../../../zh/api/system/PartyScreenMode)
