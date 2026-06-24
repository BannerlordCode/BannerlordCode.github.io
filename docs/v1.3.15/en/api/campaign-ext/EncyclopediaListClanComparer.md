<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaListClanComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaListClanComparer

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaListClanComparer : EncyclopediaListItemComparerBase`
**Base:** `EncyclopediaListItemComparerBase`
**Area:** campaign-ext

## Overview

`EncyclopediaListClanComparer` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** Gets the current value of `view fully qualified name`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**Purpose:** Gets the current value of `description text`.

### GetStringID
`public override string GetStringID()`

**Purpose:** Gets the current value of `string i d`.

### GetObject
`public override MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** Gets the current value of `object`.

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**Purpose:** Handles logic related to `is valid encyclopedia item`.

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Handles logic related to `compare`.

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Gets the current value of `compared value text`.

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Handles logic related to `compare`.

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Gets the current value of `compared value text`.

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Handles logic related to `compare`.

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Gets the current value of `compared value text`.

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Handles logic related to `compare`.

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Gets the current value of `compared value text`.

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Handles logic related to `compare`.

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Gets the current value of `compared value text`.

### CompareClans
`public int CompareClans(EncyclopediaListItem x, EncyclopediaListItem y, Func<Clan, Clan, int> comparison)`

**Purpose:** Handles logic related to `compare clans`.

## Usage Example

```csharp
var implementation = new CustomEncyclopediaListClanComparer();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
