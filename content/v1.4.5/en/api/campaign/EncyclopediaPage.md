---
title: "EncyclopediaPage"
description: "Auto-generated class reference for EncyclopediaPage."
---
# EncyclopediaPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EncyclopediaPage`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia/EncyclopediaPage.cs`

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

**Purpose:** **Purpose:** Determines whether the this instance is in the relevant state or condition.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.IsRelevant();
```

### HasIdentifierType
`public bool HasIdentifierType(Type identifierType)`

**Purpose:** **Purpose:** Determines whether the this instance already holds identifier type.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.HasIdentifierType(identifierType);
```

### GetIdentifier
`public string GetIdentifier(Type identifierType)`

**Purpose:** **Purpose:** Reads and returns the identifier value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetIdentifier(identifierType);
```

### GetIdentifierNames
`public string GetIdentifierNames()`

**Purpose:** **Purpose:** Reads and returns the identifier names value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetIdentifierNames();
```

### IsFiltered
`public bool IsFiltered(object o)`

**Purpose:** **Purpose:** Determines whether the this instance is in the filtered state or condition.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.IsFiltered(o);
```

### GetViewFullyQualifiedName
`public virtual string GetViewFullyQualifiedName()`

**Purpose:** **Purpose:** Reads and returns the view fully qualified name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetViewFullyQualifiedName();
```

### GetStringID
`public virtual string GetStringID()`

**Purpose:** **Purpose:** Reads and returns the string i d value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetStringID();
```

### GetName
`public virtual TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetName();
```

### GetObject
`public virtual MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** **Purpose:** Reads and returns the object value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetObject("example", "example");
```

### IsValidEncyclopediaItem
`public virtual bool IsValidEncyclopediaItem(object o)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid encyclopedia item state or condition.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.IsValidEncyclopediaItem(o);
```

### GetDescriptionText
`public virtual TextObject GetDescriptionText()`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetDescriptionText();
```

### GetListItems
`public IEnumerable<EncyclopediaListItem> GetListItems()`

**Purpose:** **Purpose:** Reads and returns the list items value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetListItems();
```

### GetFilterItems
`public IEnumerable<EncyclopediaFilterGroup> GetFilterItems()`

**Purpose:** **Purpose:** Reads and returns the filter items value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetFilterItems();
```

### GetSortControllers
`public IEnumerable<EncyclopediaSortController> GetSortControllers()`

**Purpose:** **Purpose:** Reads and returns the sort controllers value held by the this instance.

```csharp
// Obtain an instance of EncyclopediaPage from the subsystem API first
EncyclopediaPage encyclopediaPage = ...;
var result = encyclopediaPage.GetSortControllers();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
EncyclopediaPage instance = ...;
```

## See Also

- [Area Index](../)