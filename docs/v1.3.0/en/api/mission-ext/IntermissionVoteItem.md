<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IntermissionVoteItem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IntermissionVoteItem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IntermissionVoteItem`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/IntermissionVoteItem.cs`

## Overview

`IntermissionVoteItem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `VoteCount` | `public int VoteCount { get; }` |

## Key Methods

### SetVoteCount
`public void SetVoteCount(int voteCount)`

**Purpose:** Sets the value or state of `vote count`.

### IncreaseVoteCount
`public void IncreaseVoteCount(int incrementAmount)`

**Purpose:** Handles logic related to `increase vote count`.

## Usage Example

```csharp
var value = new IntermissionVoteItem();
value.SetVoteCount(0);
```

## See Also

- [Complete Class Catalog](../catalog)