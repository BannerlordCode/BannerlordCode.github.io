<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentOriginUtilities`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AgentOriginUtilities

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentOriginUtilities`
**Base:** none
**File:** `TaleWorlds.Core/AgentOriginUtilities.cs`

## Overview

`AgentOriginUtilities` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDefaultTraitsMask
`public static TroopTraitsMask GetDefaultTraitsMask(IAgentOriginBase origin)`

**Purpose:** Gets the current value of `default traits mask`.

### GetDefaultTroopTraits
`public static void GetDefaultTroopTraits(BasicCharacterObject troop, out bool hasThrownWeapon, out bool hasSpear, out bool hasShield, out bool hasHeavyArmor)`

**Purpose:** Gets the current value of `default troop traits`.

## Usage Example

```csharp
AgentOriginUtilities.GetDefaultTraitsMask(origin);
```

## See Also

- [Complete Class Catalog](../catalog)