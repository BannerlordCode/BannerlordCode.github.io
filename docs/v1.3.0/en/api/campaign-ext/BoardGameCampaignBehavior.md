<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BoardGameCampaignBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BoardGameCampaignBehavior

**Namespace:** SandBox.CampaignBehaviors
**Module:** SandBox.CampaignBehaviors
**Type:** `public class BoardGameCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `SandBox/CampaignBehaviors/BoardGameCampaignBehavior.cs`

## Overview

`BoardGameCampaignBehavior` lives in `SandBox.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WonBoardGamesInOneWeekInSettlement` | `public IEnumerable<Settlement> WonBoardGamesInOneWeekInSettlement { get; }` |

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### SyncData
`public override void SyncData(IDataStore dataStore)`

**Purpose:** Handles logic related to `sync data`.

### OnSessionLaunched
`public void OnSessionLaunched(CampaignGameStarter campaignGameStarter)`

**Purpose:** Called when the `session launched` event is raised.

### InitializeConversationVars
`public void InitializeConversationVars()`

**Purpose:** Initializes the state, resources, or bindings for `conversation vars`.

### OnMissionStarted
`public void OnMissionStarted(IMission mission)`

**Purpose:** Called when the `mission started` event is raised.

### OnHeroKilled
`public void OnHeroKilled(Hero victim, Hero killer, KillCharacterAction.KillCharacterActionDetail detail, bool showNotification = true)`

**Purpose:** Called when the `hero killed` event is raised.

### taverngamehost_player_sitting_now_on_condition
`public static bool taverngamehost_player_sitting_now_on_condition()`

**Purpose:** Handles logic related to `taverngamehost_player_sitting_now_on_condition`.

### PlayerWonAgainstTavernChampion
`public void PlayerWonAgainstTavernChampion()`

**Purpose:** Handles logic related to `player won against tavern champion`.

### SetBetAmount
`public void SetBetAmount(int bet)`

**Purpose:** Sets the value or state of `bet amount`.

## Usage Example

```csharp
var value = new BoardGameCampaignBehavior();
value.RegisterEvents();
```

## See Also

- [Complete Class Catalog](../catalog)