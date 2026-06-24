<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationOptionListPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationOptionListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConversationOptionListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation/ConversationOptionListPanel.cs`

## Overview

`ConversationOptionListPanel` lives in `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OptionButtonWidget` | `public ButtonWidget OptionButtonWidget { get; set; }` |

## Usage Example

```csharp
var example = new ConversationOptionListPanel();
```

## See Also

- [Complete Class Catalog](../catalog)