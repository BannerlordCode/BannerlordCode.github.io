<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyScreenMode`
- [← Area / Back to system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyScreenMode

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public enum PartyScreenMode`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Helpers/PartyScreenHelper.cs`

## Overview

`PartyScreenMode` lives in `Helpers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Helpers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
PartyScreenMode example = PartyScreenMode.Value;
```

## See Also

- [Complete Class Catalog](../catalog)