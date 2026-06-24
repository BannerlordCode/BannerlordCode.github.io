<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EntryId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EntryId

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct EntryId : IEquatable<EntryId>`
**Base:** `IEquatable<EntryId>`
**Area:** save-system

## Overview

`EntryId` lives in `TaleWorlds.SaveSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public int Id { get; }` |
| `Extension` | `public SaveEntryExtension Extension { get; }` |

## Key Methods

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### Equals
`public bool Equals(EntryId other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
// First obtain a EntryId instance from game state, then call one of its public methods
var value = new EntryId();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
