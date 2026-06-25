---
title: "DefaultEncyclopediaHeroPage"
description: "Auto-generated class reference for DefaultEncyclopediaHeroPage."
---
# DefaultEncyclopediaHeroPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaHeroPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaHeroPage.cs`

## Overview

`DefaultEncyclopediaHeroPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** **Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetComparedValueText(item);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** **Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetComparedValueText(item);
```

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** **Purpose:** Reads and returns the view fully qualified name value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetViewFullyQualifiedName();
```

### GetStringID
`public override string GetStringID()`

**Purpose:** **Purpose:** Reads and returns the string i d value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetStringID();
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetName();
```

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**Purpose:** **Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetDescriptionText();
```

### GetObject
`public override MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** **Purpose:** Reads and returns the object value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.GetObject("example", "example");
```

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid encyclopedia item state or condition.

```csharp
// Obtain an instance of DefaultEncyclopediaHeroPage from the subsystem API first
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
var result = defaultEncyclopediaHeroPage.IsValidEncyclopediaItem(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultEncyclopediaHeroPage defaultEncyclopediaHeroPage = ...;
defaultEncyclopediaHeroPage.Compare(x, y);
```

## See Also

- [Area Index](../)