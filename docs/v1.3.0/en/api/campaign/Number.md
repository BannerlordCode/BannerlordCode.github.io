<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Number`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Number

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Number`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/LordConversationsCampaignBehavior.cs`

## Overview

`Number` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetBetween
`public IEnumerable<LordConversationsCampaignBehavior.Number> GetBetween(int start, int end)`

**Purpose:** Gets the current value of `between`.

## Usage Example

```csharp
var value = new Number();
value.GetBetween(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)