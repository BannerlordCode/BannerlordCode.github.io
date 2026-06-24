<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UniqueSceneId`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UniqueSceneId

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class UniqueSceneId`
**Base:** none
**File:** `TaleWorlds.Library/UniqueSceneId.cs`

## Overview

`UniqueSceneId` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UniqueToken` | `public string UniqueToken { get; }` |
| `Revision` | `public string Revision { get; }` |

## Key Methods

### Serialize
`public string Serialize()`

**Purpose:** Handles logic related to `serialize`.

### TryParse
`public static bool TryParse(string uniqueMapId, out UniqueSceneId identifiers)`

**Purpose:** Attempts to get `parse`, usually returning the result in an out parameter.

## Usage Example

```csharp
var value = new UniqueSceneId();
value.Serialize();
```

## See Also

- [Complete Class Catalog](../catalog)