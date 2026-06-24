<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleSceneNotificationContextProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleSceneNotificationContextProvider

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSceneNotificationContextProvider.cs`

## Overview

`CustomBattleSceneNotificationContextProvider` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContextAllowed
`public bool IsContextAllowed(RelevantContextType relevantType)`

**Purpose:** Handles logic related to `is context allowed`.

## Usage Example

```csharp
var value = new CustomBattleSceneNotificationContextProvider();
value.IsContextAllowed(relevantType);
```

## See Also

- [Complete Class Catalog](../catalog)