<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SoundEventParameter`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SoundEventParameter

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public struct SoundEventParameter`
**Base:** none
**File:** `TaleWorlds.Engine/SoundEventParameter.cs`

## Overview

`SoundEventParameter` lives in `TaleWorlds.Engine` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Engine` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Update
`public void Update(string paramName, float value)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new SoundEventParameter();
value.Update("example", 0);
```

## See Also

- [Complete Class Catalog](../catalog)