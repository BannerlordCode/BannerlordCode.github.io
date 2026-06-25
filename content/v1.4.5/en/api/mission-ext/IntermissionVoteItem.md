---
title: "IntermissionVoteItem"
description: "Auto-generated class reference for IntermissionVoteItem."
---
# IntermissionVoteItem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class IntermissionVoteItem`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IntermissionVoteItem.cs`

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

**Purpose:** Assigns a new value to vote count and updates the object's internal state.

```csharp
// Obtain an instance of IntermissionVoteItem from the subsystem API first
IntermissionVoteItem intermissionVoteItem = ...;
intermissionVoteItem.SetVoteCount(0);
```

### IncreaseVoteCount
`public void IncreaseVoteCount(int incrementAmount)`

**Purpose:** Executes the IncreaseVoteCount logic.

```csharp
// Obtain an instance of IntermissionVoteItem from the subsystem API first
IntermissionVoteItem intermissionVoteItem = ...;
intermissionVoteItem.IncreaseVoteCount(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
IntermissionVoteItem intermissionVoteItem = ...;
intermissionVoteItem.SetVoteCount(0);
```

## See Also

- [Area Index](../)