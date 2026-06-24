<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletUISubModule`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletUISubModule

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletUISubModule : MBSubModuleBase`
**Base:** `MBSubModuleBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI/GauntletUISubModule.cs`

## Overview

`GauntletUISubModule` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GauntletUISubModule Instance { get; }` |

## Key Methods

### OnMultiplayerGameStart
`public override void OnMultiplayerGameStart(Game game, object starterObject)`

**Purpose:** Called when the `multiplayer game start` event is raised.

### OnGameEnd
`public override void OnGameEnd(Game game)`

**Purpose:** Called when the `game end` event is raised.

### ClearChatLog
`public static string ClearChatLog(List<string> strings)`

**Purpose:** Handles logic related to `clear chat log`.

### SetCanFocusWhileInMission
`public static string SetCanFocusWhileInMission(List<string> strings)`

**Purpose:** Sets the value or state of `can focus while in mission`.

## Usage Example

```csharp
var value = new GauntletUISubModule();
value.OnMultiplayerGameStart(game, starterObject);
```

## See Also

- [Complete Class Catalog](../catalog)