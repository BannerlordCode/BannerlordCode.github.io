---
title: "DeclareWarDecisionOutcome"
description: "Auto-generated class reference for DeclareWarDecisionOutcome."
---
# DeclareWarDecisionOutcome

**Namespace:** TaleWorlds.CampaignSystem.Election
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DeclareWarDecisionOutcome : DecisionOutcome`
**Base:** `DecisionOutcome`
**File:** `TaleWorlds.CampaignSystem/Election/DeclareWarDecision.cs`

## Overview

`DeclareWarDecisionOutcome` lives in `TaleWorlds.CampaignSystem.Election` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Election` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetDecisionTitle
`public override TextObject GetDecisionTitle()`

**Purpose:** Reads and returns the decision title value held by the this instance.

```csharp
// Obtain an instance of DeclareWarDecisionOutcome from the subsystem API first
DeclareWarDecisionOutcome declareWarDecisionOutcome = ...;
var result = declareWarDecisionOutcome.GetDecisionTitle();
```

### GetDecisionDescription
`public override TextObject GetDecisionDescription()`

**Purpose:** Reads and returns the decision description value held by the this instance.

```csharp
// Obtain an instance of DeclareWarDecisionOutcome from the subsystem API first
DeclareWarDecisionOutcome declareWarDecisionOutcome = ...;
var result = declareWarDecisionOutcome.GetDecisionDescription();
```

### GetDecisionLink
`public override string GetDecisionLink()`

**Purpose:** Reads and returns the decision link value held by the this instance.

```csharp
// Obtain an instance of DeclareWarDecisionOutcome from the subsystem API first
DeclareWarDecisionOutcome declareWarDecisionOutcome = ...;
var result = declareWarDecisionOutcome.GetDecisionLink();
```

### GetDecisionImageIdentifier
`public override ImageIdentifier GetDecisionImageIdentifier()`

**Purpose:** Reads and returns the decision image identifier value held by the this instance.

```csharp
// Obtain an instance of DeclareWarDecisionOutcome from the subsystem API first
DeclareWarDecisionOutcome declareWarDecisionOutcome = ...;
var result = declareWarDecisionOutcome.GetDecisionImageIdentifier();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DeclareWarDecisionOutcome declareWarDecisionOutcome = ...;
declareWarDecisionOutcome.GetDecisionTitle();
```

## See Also

- [Area Index](../)