<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MainStoryLine`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MainStoryLine

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class MainStoryLine`
**Base:** none
**File:** `StoryMode/MainStoryLine.cs`

## Overview

`MainStoryLine` lives in `StoryMode` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPlayerInteractionRestricted` | `public bool IsPlayerInteractionRestricted { get; }` |
| `IsOnImperialQuestLine` | `public bool IsOnImperialQuestLine { get; }` |
| `IsOnAntiImperialQuestLine` | `public bool IsOnAntiImperialQuestLine { get; }` |
| `TutorialPhase` | `public TutorialPhase TutorialPhase { get; }` |
| `FirstPhase` | `public FirstPhase FirstPhase { get; }` |
| `SecondPhase` | `public SecondPhase SecondPhase { get; }` |
| `ThirdPhase` | `public ThirdPhase ThirdPhase { get; }` |
| `PlayerSupportedKingdom` | `public Kingdom PlayerSupportedKingdom { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `DragonBanner` | `public ItemObject DragonBanner { get; }` |
| `IsFirstPhaseCompleted` | `public bool IsFirstPhaseCompleted { get; }` |
| `IsSecondPhaseCompleted` | `public bool IsSecondPhaseCompleted { get; }` |

## Key Methods

### OnSessionLaunched
`public void OnSessionLaunched()`

**Purpose:** Called when the `session launched` event is raised.

### SetTutorialScores
`public void SetTutorialScores(Dictionary<string, float> scores)`

**Purpose:** Sets the value or state of `tutorial scores`.

### GetTutorialScores
`public Dictionary<string, float> GetTutorialScores()`

**Purpose:** Gets the current value of `tutorial scores`.

### SetStoryLineSide
`public void SetStoryLineSide(MainStoryLineSide side)`

**Purpose:** Sets the value or state of `story line side`.

### SetMentorSettlements
`public void SetMentorSettlements(Settlement imperialMentorSettlement, Settlement antiImperialMentorSettlement)`

**Purpose:** Sets the value or state of `mentor settlements`.

### CompleteTutorialPhase
`public void CompleteTutorialPhase(bool isSkipped)`

**Purpose:** Handles logic related to `complete tutorial phase`.

### CompleteFirstPhase
`public void CompleteFirstPhase()`

**Purpose:** Handles logic related to `complete first phase`.

### CompleteSecondPhase
`public void CompleteSecondPhase()`

**Purpose:** Handles logic related to `complete second phase`.

### CancelSecondAndThirdPhase
`public void CancelSecondAndThirdPhase()`

**Purpose:** Checks whether the current object can `cel second and third phase`.

## Usage Example

```csharp
var value = new MainStoryLine();
value.OnSessionLaunched();
```

## See Also

- [Complete Class Catalog](../catalog)