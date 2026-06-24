<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `LoginMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# LoginMessage

**Namespace:** TaleWorlds.Diamond
**Module:** TaleWorlds.Diamond
**Type:** `public abstract class LoginMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.Diamond/LoginMessage.cs`

## Overview

`LoginMessage` lives in `TaleWorlds.Diamond` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Diamond` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PeerId` | `public PeerId PeerId { get; }` |
| `AccessObject` | `public AccessObject AccessObject { get; }` |

## Usage Example

```csharp
var implementation = new CustomLoginMessage();
```

## See Also

- [Complete Class Catalog](../catalog)