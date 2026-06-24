<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### SetCurrentAnswer
`public void SetCurrentAnswer()`

**Purpose:** Sets the value or state of `current answer`.

### ResetCurrentAnswer
`public void ResetCurrentAnswer()`

**Purpose:** Resets `current answer` to its initial state.

## Usage Example

```csharp
var value = new ConversationItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)