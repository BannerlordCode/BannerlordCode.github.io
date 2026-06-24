<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListItem`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaListItem

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EncyclopediaListItem`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaListItem.cs`

## Overview

`EncyclopediaListItem` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### EncyclopediaListItem
`public struct EncyclopediaListItem(object obj, string name, string description, string id, string typeName, bool playerCanSeeValues, Action onShowTooltip = null)`

**Purpose:** Handles logic related to `encyclopedia list item`.

## Usage Example

```csharp
var value = new EncyclopediaListItem();
value.EncyclopediaListItem(obj, "example", "example", "example", "example", false, null);
```

## See Also

- [Complete Class Catalog](../catalog)