<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncyclopediaShipPage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncyclopediaShipPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaShipPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaShipPage.cs`

## Overview

`DefaultEncyclopediaShipPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRelevant
`public override bool IsRelevant()`

**Purpose:** Handles logic related to `is relevant`.

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** Gets the current value of `view fully qualified name`.

### GetStringID
`public override string GetStringID()`

**Purpose:** Gets the current value of `string i d`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

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

## Usage Example

```csharp
var value = new DefaultEncyclopediaShipPage();
value.IsRelevant();
```

## See Also

- [Complete Class Catalog](../catalog)