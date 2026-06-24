<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxViewSubModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxViewSubModule

**Namespace:** SandBox.View
**Module:** SandBox.View
**Type:** `public class SandBoxViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox.View/SandBoxViewSubModule.cs`

## Overview

`SandBoxViewSubModule` lives in `SandBox.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SandBoxViewVisualManager` | `public static SandBoxViewVisualManager SandBoxViewVisualManager { get; }` |
| `ConversationViewManager` | `public static ConversationViewManager ConversationViewManager { get; }` |
| `MapConversationDataProvider` | `public static IMapConversationDataProvider MapConversationDataProvider { get; }` |

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `campaign start` event is raised.

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnAfterGameInitializationFinished
`public override void OnAfterGameInitializationFinished(Game game, object starterObject)`

**Purpose:** Called when the `after game initialization finished` event is raised.

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Handles logic related to `begin game start`.

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### OnInitialState
`public override void OnInitialState()`

**Purpose:** Called when the `initial state` event is raised.

### SetMapConversationDataProvider
`public static void SetMapConversationDataProvider(IMapConversationDataProvider mapConversationDataProvider)`

**Purpose:** Sets the value or state of `map conversation data provider`.

## Usage Example

```csharp
var value = new SandBoxViewSubModule();
value.OnCampaignStart(game, starterObject);
```

## See Also

- [Complete Class Catalog](../catalog)