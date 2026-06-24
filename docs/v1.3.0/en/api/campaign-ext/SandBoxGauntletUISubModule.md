<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxGauntletUISubModule`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxGauntletUISubModule

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandBoxGauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `SandBox.GauntletUI/SandBoxGauntletUISubModule.cs`

## Overview

`SandBoxGauntletUISubModule` lives in `SandBox.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnCampaignStart
`public override void OnCampaignStart(Game game, object starterObject)`

**Purpose:** Called when the `campaign start` event is raised.

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### BeginGameStart
`public override void BeginGameStart(Game game)`

**Purpose:** Handles logic related to `begin game start`.

## Usage Example

```csharp
var value = new SandBoxGauntletUISubModule();
value.OnCampaignStart(game, starterObject);
```

## See Also

- [Complete Class Catalog](../catalog)