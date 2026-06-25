---
title: "ListChangedEventArgs"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ListChangedEventArgs`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ListChangedEventArgs

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class ListChangedEventArgs : EventArgs`
**Base:** `EventArgs`
**File:** `Bannerlord.Source/bin/TaleWorlds.Library/TaleWorlds.Library/ListChangedEventArgs.cs`

## Overview

`ListChangedEventArgs` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ListChangedType` | `public ListChangedType ListChangedType { get; }` |
| `NewIndex` | `public int NewIndex { get; }` |
| `OldIndex` | `public int OldIndex { get; }` |

## Usage Example

```csharp
var example = new ListChangedEventArgs();
```

## See Also

- [Complete Class Catalog](../catalog)