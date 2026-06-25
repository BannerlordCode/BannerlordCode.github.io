---
title: "DialogFlowLine"
description: "Auto-generated class reference for DialogFlowLine."
---
# DialogFlowLine

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `internal class DialogFlowLine`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/DialogFlowLine.cs`

## Overview

`DialogFlowLine` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Variations` | `public List<KeyValuePair<TextObject, List<GameTextManager.ChoiceTag>>> Variations { get; }` |
| `HasVariation` | `public bool HasVariation { get; }` |

## Key Methods

### AddVariation
`public void AddVariation(TextObject text, List<GameTextManager.ChoiceTag> list)`

**Purpose:** **Purpose:** Adds variation to the current collection or state.

```csharp
// Obtain an instance of DialogFlowLine from the subsystem API first
DialogFlowLine dialogFlowLine = ...;
dialogFlowLine.AddVariation(text, list);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DialogFlowLine dialogFlowLine = ...;
dialogFlowLine.AddVariation(text, list);
```

## See Also

- [Area Index](../)