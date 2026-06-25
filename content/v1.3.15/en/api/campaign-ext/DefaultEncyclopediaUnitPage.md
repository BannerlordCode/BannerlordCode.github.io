---
title: "DefaultEncyclopediaUnitPage"
description: "Auto-generated class reference for DefaultEncyclopediaUnitPage."
---
# DefaultEncyclopediaUnitPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaUnitPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `TaleWorlds.CampaignSystem/Encyclopedia/Pages/DefaultEncyclopediaUnitPage.cs`

## Overview

`DefaultEncyclopediaUnitPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** Reads and returns the view fully qualified name value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.GetViewFullyQualifiedName();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.GetName();
```

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.GetDescriptionText();
```

### GetStringID
`public override string GetStringID()`

**Purpose:** Reads and returns the string i d value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.GetStringID();
```

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**Purpose:** Determines whether the this instance is in the valid encyclopedia item state or condition.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.IsValidEncyclopediaItem(o);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.GetComparedValueText(item);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.GetComparedValueText(item);
```

### CompareUnits
`public int CompareUnits(EncyclopediaListItem x, EncyclopediaListItem y, Func<CharacterObject, CharacterObject, int> comparison)`

**Purpose:** Compares two units objects and returns an ordering result.

```csharp
// Obtain an instance of DefaultEncyclopediaUnitPage from the subsystem API first
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
var result = defaultEncyclopediaUnitPage.CompareUnits(x, y, func<CharacterObject, characterObject, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultEncyclopediaUnitPage defaultEncyclopediaUnitPage = ...;
defaultEncyclopediaUnitPage.GetViewFullyQualifiedName();
```

## See Also

- [Area Index](../)