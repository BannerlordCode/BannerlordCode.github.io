<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextObjectExtensions`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextObjectExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TextObjectExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Extensions/TextObjectExtensions.cs`

## Overview

`TextObjectExtensions` lives in `TaleWorlds.CampaignSystem.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetCharacterProperties
`public static void SetCharacterProperties(this TextObject to, string tag, CharacterObject character, bool includeDetails = false)`

**Purpose:** Sets the value or state of `character properties`.

### SetSettlementProperties
`public static void SetSettlementProperties(this TextObject to, Settlement settlement)`

**Purpose:** Sets the value or state of `settlement properties`.

## Usage Example

```csharp
TextObjectExtensions.SetCharacterProperties(to, "example", character, false);
```

## See Also

- [Complete Class Catalog](../catalog)