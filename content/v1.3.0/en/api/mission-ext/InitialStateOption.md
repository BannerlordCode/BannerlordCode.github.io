---
title: "InitialStateOption"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InitialStateOption`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InitialStateOption

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InitialStateOption`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/InitialStateOption.cs`

## Overview

`InitialStateOption` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderIndex` | `public int OrderIndex { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Id` | `public string Id { get; }` |
| `IsHidden` | `public Func<bool> IsHidden { get; }` |
| `IsDisabledAndReason` | `public Func<ValueTuple<bool, TextObject>> IsDisabledAndReason { get; }` |
| `EnabledHint` | `public TextObject EnabledHint { get; }` |

## Key Methods

### DoAction
`public void DoAction()`

**Purpose:** Handles logic related to `do action`.

## Usage Example

```csharp
var value = new InitialStateOption();
value.DoAction();
```

## See Also

- [Complete Class Catalog](../catalog)