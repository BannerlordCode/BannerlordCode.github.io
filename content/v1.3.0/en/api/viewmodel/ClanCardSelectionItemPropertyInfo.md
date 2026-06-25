---
title: "ClanCardSelectionItemPropertyInfo"
description: "Auto-generated class reference for ClanCardSelectionItemPropertyInfo."
---
# ClanCardSelectionItemPropertyInfo

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `struct ClanCardSelectionItemPropertyInfo`
**Base:** none
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/ClanCardSelectionItemPropertyInfo.cs`

## Overview

`ClanCardSelectionItemPropertyInfo` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateLabeledValueText
`public static TextObject CreateLabeledValueText(TextObject label, TextObject value)`

**Purpose:** **Purpose:** Constructs a new labeled value text entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanCardSelectionItemPropertyInfo.CreateLabeledValueText(label, value);
```

### CreateActionGoldChangeText
`public static TextObject CreateActionGoldChangeText(int goldChange)`

**Purpose:** **Purpose:** Constructs a new action gold change text entity and returns it to the caller.

```csharp
// Static call; no instance required
ClanCardSelectionItemPropertyInfo.CreateActionGoldChangeText(0);
```

## Usage Example

```csharp
ClanCardSelectionItemPropertyInfo.CreateLabeledValueText(label, value);
```

## See Also

- [Area Index](../)