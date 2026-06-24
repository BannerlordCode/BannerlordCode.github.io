<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextObjectExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TextObjectExtensions

**Namespace:** TaleWorlds.CampaignSystem.Extensions
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TextObjectExtensions`
**Area:** campaign-ext

## Overview

`TextObjectExtensions` lives in `TaleWorlds.CampaignSystem.Extensions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
TextObjectExtensions.SetCharacterProperties(to, "example", character, false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
