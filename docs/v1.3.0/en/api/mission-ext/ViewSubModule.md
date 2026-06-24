<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ViewSubModule`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ViewSubModule

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ViewSubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/ViewSubModule.cs`

## Overview

`ViewSubModule` lives in `TaleWorlds.MountAndBlade.View` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerTexturedMaterialCache` | `public static Dictionary<Tuple<Material, Banner>, Material> BannerTexturedMaterialCache { get; set; }` |
| `GameStateScreenManager` | `public static GameStateScreenManager GameStateScreenManager { get; }` |

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `campaign start` event is raised.

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**Purpose:** Called when the `multiplayer game start` event is raised.

### OnGameLoaded
`public override void OnGameLoaded(Game game, object initializerObject)`

**Purpose:** Called when the `game loaded` event is raised.

### OnGameInitializationFinished
`public override void OnGameInitializationFinished(Game game)`

**Purpose:** Called when the `game initialization finished` event is raised.

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Handles logic related to `begin game start`.

### DoLoading
`public override bool DoLoading(Game game)`

**Purpose:** Handles logic related to `do loading`.

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

## Usage Example

```csharp
var value = new ViewSubModule();
value.OnCampaignStart(game, starterObject);
```

## See Also

- [Complete Class Catalog](../catalog)