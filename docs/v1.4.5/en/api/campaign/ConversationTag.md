<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationTag`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConversationTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ConversationTag`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/ConversationTag.cs`

## Overview

`ConversationTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StringId` | `public abstract string StringId { get; }` |

## Key Methods

### IsApplicableTo
`public abstract bool IsApplicableTo(CharacterObject character)`

**Purpose:** Handles logic related to `is applicable to`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

## Usage Example

```csharp
var implementation = new CustomConversationTag();
```

## See Also

- [Complete Class Catalog](../catalog)