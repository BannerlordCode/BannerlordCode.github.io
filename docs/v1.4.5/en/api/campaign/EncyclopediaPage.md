<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EncyclopediaPage`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaPage`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaPage.cs`

## Overview

`EncyclopediaPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HomePageOrderIndex` | `public int HomePageOrderIndex { get; set; }` |
| `Parent` | `public EncyclopediaPage Parent { get; }` |

## Key Methods

### IsRelevant
`public virtual bool IsRelevant()`

**Purpose:** Handles logic related to `is relevant`.

### HasIdentifierType
`public bool HasIdentifierType(Type identifierType)`

**Purpose:** Checks whether the current object has/contains `identifier type`.

### GetIdentifier
`public string GetIdentifier(Type identifierType)`

**Purpose:** Gets the current value of `identifier`.

### GetIdentifierNames
`public string GetIdentifierNames()`

**Purpose:** Gets the current value of `identifier names`.

### IsFiltered
`public bool IsFiltered(object o)`

**Purpose:** Handles logic related to `is filtered`.

### GetViewFullyQualifiedName
`public virtual string GetViewFullyQualifiedName()`

**Purpose:** Gets the current value of `view fully qualified name`.

### GetStringID
`public virtual string GetStringID()`

**Purpose:** Gets the current value of `string i d`.

### GetName
`public virtual TextObject GetName()`

**Purpose:** Gets the current value of `name`.

### GetObject
`public virtual MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** Gets the current value of `object`.

### IsValidEncyclopediaItem
`public virtual bool IsValidEncyclopediaItem(object o)`

**Purpose:** Handles logic related to `is valid encyclopedia item`.

### GetDescriptionText
`public virtual TextObject GetDescriptionText()`

**Purpose:** Gets the current value of `description text`.

### GetListItems
`public IEnumerable<EncyclopediaListItem> GetListItems()`

**Purpose:** Gets the current value of `list items`.

### GetFilterItems
`public IEnumerable<EncyclopediaFilterGroup> GetFilterItems()`

**Purpose:** Gets the current value of `filter items`.

### GetSortControllers
`public IEnumerable<EncyclopediaSortController> GetSortControllers()`

**Purpose:** Gets the current value of `sort controllers`.

## Usage Example

```csharp
var implementation = new CustomEncyclopediaPage();
```

## See Also

- [Complete Class Catalog](../catalog)