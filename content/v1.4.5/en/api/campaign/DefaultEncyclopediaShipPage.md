---
title: "DefaultEncyclopediaShipPage"
description: "Auto-generated class reference for DefaultEncyclopediaShipPage."
---
# DefaultEncyclopediaShipPage

**Namespace:** TaleWorlds.CampaignSystem.Encyclopedia.Pages
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultEncyclopediaShipPage : EncyclopediaPage`
**Base:** `EncyclopediaPage`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Encyclopedia.Pages/DefaultEncyclopediaShipPage.cs`

## Overview

`DefaultEncyclopediaShipPage` lives in `TaleWorlds.CampaignSystem.Encyclopedia.Pages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Encyclopedia.Pages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** **Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetComparedValueText(item);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** **Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetComparedValueText(item);
```

### Compare
`public override int Compare(EncyclopediaListItem x, EncyclopediaListItem y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.Compare(x, y);
```

### GetComparedValueText
`public override string GetComparedValueText(EncyclopediaListItem item)`

**Purpose:** **Purpose:** Reads and returns the compared value text value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetComparedValueText(item);
```

### IsRelevant
`public override bool IsRelevant()`

**Purpose:** **Purpose:** Determines whether the this instance is in the relevant state or condition.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.IsRelevant();
```

### GetViewFullyQualifiedName
`public override string GetViewFullyQualifiedName()`

**Purpose:** **Purpose:** Reads and returns the view fully qualified name value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetViewFullyQualifiedName();
```

### GetStringID
`public override string GetStringID()`

**Purpose:** **Purpose:** Reads and returns the string i d value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetStringID();
```

### GetName
`public override TextObject GetName()`

**Purpose:** **Purpose:** Reads and returns the name value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetName();
```

### GetObject
`public override MBObjectBase GetObject(string typeName, string stringID)`

**Purpose:** **Purpose:** Reads and returns the object value held by the this instance.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.GetObject("example", "example");
```

### IsValidEncyclopediaItem
`public override bool IsValidEncyclopediaItem(object o)`

**Purpose:** **Purpose:** Determines whether the this instance is in the valid encyclopedia item state or condition.

```csharp
// Obtain an instance of DefaultEncyclopediaShipPage from the subsystem API first
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
var result = defaultEncyclopediaShipPage.IsValidEncyclopediaItem(o);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
DefaultEncyclopediaShipPage defaultEncyclopediaShipPage = ...;
defaultEncyclopediaShipPage.Compare(x, y);
```

## See Also

- [Area Index](../)