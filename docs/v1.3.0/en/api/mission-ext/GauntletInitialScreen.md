<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GauntletInitialScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GauntletInitialScreen

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletInitialScreen : MBInitialScreenBase, IChatLogHandlerScreen`
**Base:** `MBInitialScreenBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletInitialScreen.cs`

## Overview

`GauntletInitialScreen` lives in `TaleWorlds.MountAndBlade.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### TryUpdateChatLogLayerParameters
`public void TryUpdateChatLogLayerParameters(ref bool isTeamChatAvailable, ref bool inputEnabled, ref bool isToggleChatHintAvailable, ref bool isMouseVisible, ref InputContext inputContext)`

**Purpose:** Attempts to get `update chat log layer parameters`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new GauntletInitialScreen();
value.TryUpdateChatLogLayerParameters(isTeamChatAvailable, inputEnabled, isToggleChatHintAvailable, isMouseVisible, inputContext);
```

## See Also

- [Complete Class Catalog](../catalog)