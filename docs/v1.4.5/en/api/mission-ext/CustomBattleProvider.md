<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleProvider

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleProvider : ICustomBattleProvider`
**Base:** `ICustomBattleProvider`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/CustomBattleProvider.cs`

## Overview

`CustomBattleProvider` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### StartCustomBattle
`public void StartCustomBattle()`

**Purpose:** Handles logic related to `start custom battle`.

### GetName
`public TextObject GetName()`

**Purpose:** Gets the current value of `name`.

## Usage Example

```csharp
var value = new CustomBattleProvider();
value.StartCustomBattle();
```

## See Also

- [Complete Class Catalog](../catalog)