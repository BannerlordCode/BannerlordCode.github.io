---
title: "DefaultEncyclopediaFactionPage"
description: "Auto-generated class reference for DefaultEncyclopediaFactionPage."
---
# DefaultEncyclopediaFactionPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaFactionPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaFactionPage.cs`

## Overview

`DefaultEncyclopediaFactionPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Reads and returns the `compared value text` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetComparedValueText(item);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Reads and returns the `compared value text` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetComparedValueText(item);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** Reads and returns the `compared value text` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetComparedValueText(item);
```

### CompareKingdoms
`public int CompareKingdoms(EncyclopediaListItem x, EncyclopediaListItem y, Func<Kingdom, Kingdom, int> comparison)`

**Purpose:** Compares two `kingdoms` objects and returns an ordering result.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.CompareKingdoms(x, y, func<Kingdom, kingdom, 0);
```

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** Reads and returns the `view fully qualified name` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetViewFullyQualifiedName();
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetName();
```

### GetDescriptionText
`public override TextObject GetDescriptionText()`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetDescriptionText();
```

### GetStringID
`public override string GetStringID()`

**Purpose:** Reads and returns the `string i d` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetStringID();
```

### GetObject
`public override MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** Reads and returns the `object` value held by the current object.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.GetObject("example", "example");
```

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**Purpose:** Determines whether the current object is in the `valid encyclopedia item` state or condition.

```csharp
// Obtain an instance of DefaultEncyclopediaFactionPage from the subsystem API first
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
var result = defaultEncyclopediaFactionPage.IsValidEncyclopediaItem(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultEncyclopediaFactionPage defaultEncyclopediaFactionPage = ...;
defaultEncyclopediaFactionPage.Compare(x, y);
```

## See Also

- [Area Index](../)