<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleScreen`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleScreen

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScreen : ScreenBase, IGameStateListener`
**Base:** `ScreenBase`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleScreen.cs`

## Overview

`CustomBattleScreen` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### UpdateLayout
`public override void UpdateLayout()`

**Purpose:** Updates the state or data of `layout`.

## Usage Example

```csharp
var value = new CustomBattleScreen();
value.UpdateLayout();
```

## See Also

- [Complete Class Catalog](../catalog)