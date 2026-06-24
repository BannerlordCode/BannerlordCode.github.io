<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncyclopediaClanPage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultEncyclopediaClanPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaClanPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaClanPage.cs`

## Overview

`DefaultEncyclopediaClanPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new DefaultEncyclopediaClanPage();
value.GetViewFullyQualifiedName();
```

## See Also

- [Complete Class Catalog](../catalog)