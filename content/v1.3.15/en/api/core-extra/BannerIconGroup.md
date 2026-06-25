---
title: "BannerIconGroup"
description: "Auto-generated class reference for BannerIconGroup."
---
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

**Purpose:** Restores the current object from serialized data.

```csharp
// Obtain an instance of BannerIconGroup from the subsystem API first
BannerIconGroup bannerIconGroup = ...;
bannerIconGroup.Deserialize(xmlNode, previouslyAddedGroups);
```

### Merge
`public void Merge(BannerIconGroup otherGroup)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BannerIconGroup from the subsystem API first
BannerIconGroup bannerIconGroup = ...;
bannerIconGroup.Merge(otherGroup);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BannerIconGroup bannerIconGroup = ...;
bannerIconGroup.Deserialize(xmlNode, previouslyAddedGroups);
```

## See Also

- [Area Index](../)