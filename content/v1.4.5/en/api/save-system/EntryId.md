---
title: "EntryId"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EntryId`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EntryId

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public struct EntryId : IEquatable<EntryId>`
**Base:** `IEquatable<EntryId>`
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/EntryId.cs`

## Overview

`EntryId` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new EntryId();
value.Equals(obj);
```

## See Also

- [Complete Class Catalog](../catalog)