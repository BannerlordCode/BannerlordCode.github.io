---
title: "IssueEffect"
description: "Auto-generated class reference for IssueEffect."
---
# IssueEffect

**Namespace:** TaleWorlds.CampaignSystem.Issues
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class IssueEffect : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Issues/IssueEffect.cs`

## Overview

`IssueEffect` lives in `TaleWorlds.CampaignSystem.Issues` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Issues` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `All` | `public static MBReadOnlyList<IssueEffect> All { get; }` |
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of IssueEffect from the subsystem API first
IssueEffect issueEffect = ...;
issueEffect.Initialize(name, description);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of IssueEffect from the subsystem API first
IssueEffect issueEffect = ...;
var result = issueEffect.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
IssueEffect issueEffect = ...;
issueEffect.Initialize(name, description);
```

## See Also

- [Area Index](../)