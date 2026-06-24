<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestPlatformServices`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TestPlatformServices

**Namespace:** TaleWorlds.PlatformService
**Module:** TaleWorlds.PlatformService
**Type:** `public class TestPlatformServices : IPlatformServices`
**Base:** `IPlatformServices`
**File:** `TaleWorlds.PlatformService/TestPlatformServices.cs`

## Overview

`TestPlatformServices` lives in `TaleWorlds.PlatformService` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.PlatformService` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### ActivateFriendList
`public void ActivateFriendList()`

**Purpose:** Handles logic related to `activate friend list`.

## Usage Example

```csharp
var value = new TestPlatformServices();
value.Tick(0);
```

## See Also

- [Complete Class Catalog](../catalog)