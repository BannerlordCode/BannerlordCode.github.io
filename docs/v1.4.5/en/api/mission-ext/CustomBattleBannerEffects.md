<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleBannerEffects`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleBannerEffects

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleBannerEffects`
**Base:** none
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects/CustomBattleBannerEffects.cs`

## Overview

`CustomBattleBannerEffects` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattleObjects` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new CustomBattleBannerEffects();
```

## See Also

- [Complete Class Catalog](../catalog)