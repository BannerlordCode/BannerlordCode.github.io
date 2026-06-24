<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NotificationProperty`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotificationProperty

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NotificationProperty : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/NotificationProperty.cs`

## Overview

`NotificationProperty` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `SoundIdOne` | `public string SoundIdOne { get; }` |
| `SoundIdTwo` | `public string SoundIdTwo { get; }` |

## Usage Example

```csharp
var value = new NotificationProperty();
```

## See Also

- [Complete Class Catalog](../catalog)