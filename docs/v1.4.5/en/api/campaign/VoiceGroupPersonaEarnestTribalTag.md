<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VoiceGroupPersonaEarnestTribalTag`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VoiceGroupPersonaEarnestTribalTag

**Namespace:** TaleWorlds.CampaignSystem.Conversation.Tags
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class VoiceGroupPersonaEarnestTribalTag : ConversationTag`
**Base:** `ConversationTag`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation.Tags/VoiceGroupPersonaEarnestTribalTag.cs`

## Overview

`VoiceGroupPersonaEarnestTribalTag` lives in `TaleWorlds.CampaignSystem.Conversation.Tags` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Conversation.Tags` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicableTo
`public override bool IsApplicableTo(CharacterObject character)`

**Purpose:** Handles logic related to `is applicable to`.

## Usage Example

```csharp
var value = new VoiceGroupPersonaEarnestTribalTag();
value.IsApplicableTo(character);
```

## See Also

- [Complete Class Catalog](../catalog)