<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConsoleCommandMethod`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConsoleCommandMethod

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConsoleCommandMethod : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.MountAndBlade/ConsoleCommandMethod.cs`

## Overview

`ConsoleCommandMethod` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CommandName` | `public string CommandName { get; }` |
| `Description` | `public string Description { get; }` |

## Usage Example

```csharp
var example = new ConsoleCommandMethod();
```

## See Also

- [Complete Class Catalog](../catalog)