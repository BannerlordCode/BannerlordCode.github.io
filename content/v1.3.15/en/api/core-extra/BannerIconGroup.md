---
title: "BannerIconGroup"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BannerIconGroup`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BannerIconGroup

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class BannerIconGroup`
**Base:** none
**File:** `TaleWorlds.Core/BannerIconGroup.cs`

## Overview

`BannerIconGroup` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `IsPattern` | `public bool IsPattern { get; }` |
| `Id` | `public int Id { get; }` |

## Key Methods

### Deserialize
`public void Deserialize(XmlNode xmlNode, MBList<BannerIconGroup> previouslyAddedGroups)`

**Purpose:** Handles logic related to `deserialize`.

### Merge
`public void Merge(BannerIconGroup otherGroup)`

**Purpose:** Handles logic related to `merge`.

## Usage Example

```csharp
var value = new BannerIconGroup();
value.Deserialize(xmlNode, previouslyAddedGroups);
```

## See Also

- [Complete Class Catalog](../catalog)