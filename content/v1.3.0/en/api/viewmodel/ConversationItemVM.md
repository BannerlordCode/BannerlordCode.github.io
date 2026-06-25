---
title: "ConversationItemVM"
description: "Auto-generated class reference for ConversationItemVM."
---
# ConversationItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ConversationItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Conversation/ConversationItemVM.cs`

## Overview

`ConversationItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PersuasionItem` | `public PersuasionOptionVM PersuasionItem { get; set; }` |
| `HasPersuasion` | `public bool HasPersuasion { get; set; }` |
| `IconType` | `public int IconType { get; set; }` |
| `OptionHint` | `public HintViewModel OptionHint { get; set; }` |
| `ItemText` | `public string ItemText { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsSpecial` | `public bool IsSpecial { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ConversationItemVM from the subsystem API first
ConversationItemVM conversationItemVM = ...;
conversationItemVM.RefreshValues();
```

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with action.

```csharp
// Obtain an instance of ConversationItemVM from the subsystem API first
ConversationItemVM conversationItemVM = ...;
conversationItemVM.ExecuteAction();
```

### SetCurrentAnswer
`public void SetCurrentAnswer()`

**Purpose:** **Purpose:** Assigns a new value to current answer and updates the object's internal state.

```csharp
// Obtain an instance of ConversationItemVM from the subsystem API first
ConversationItemVM conversationItemVM = ...;
conversationItemVM.SetCurrentAnswer();
```

### ResetCurrentAnswer
`public void ResetCurrentAnswer()`

**Purpose:** **Purpose:** Returns current answer to its default or initial condition.

```csharp
// Obtain an instance of ConversationItemVM from the subsystem API first
ConversationItemVM conversationItemVM = ...;
conversationItemVM.ResetCurrentAnswer();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ConversationItemVM conversationItemVM = ...;
conversationItemVM.RefreshValues();
```

## See Also

- [Area Index](../)