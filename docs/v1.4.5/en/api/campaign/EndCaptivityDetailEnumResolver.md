<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EndCaptivityDetailEnumResolver`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EndCaptivityDetailEnumResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class EndCaptivityDetailEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/EndCaptivityDetailEnumResolver.cs`

## Overview

`EndCaptivityDetailEnumResolver` lives in `TaleWorlds.CampaignSystem.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ResolveObject
`public string ResolveObject(string originalObject)`

**Purpose:** Handles logic related to `resolve object`.

## Usage Example

```csharp
EndCaptivityDetailEnumResolver example = EndCaptivityDetailEnumResolver.Value;
```

## See Also

- [Complete Class Catalog](../catalog)