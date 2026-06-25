---
title: "DefaultEncyclopediaHeroPage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultEncyclopediaHeroPage`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultEncyclopediaHeroPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaHeroPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaHeroPage.cs`

## Overview

`DefaultEncyclopediaHeroPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

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

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** Gets the current value of `view fully qualified name`.

### GetStringID
`public override string GetStringID()`

**Purpose:** Gets the current value of `string i d`.

### GetName
`public override TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**Purpose:** Gets the current value of `description text`.

### GetObject
`public override MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** Gets the current value of `object`.

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**Purpose:** Handles logic related to `is valid encyclopedia item`.

## Usage Example

```csharp
var value = new DefaultEncyclopediaHeroPage();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)