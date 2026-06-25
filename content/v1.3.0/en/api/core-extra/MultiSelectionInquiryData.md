---
title: "MultiSelectionInquiryData"
description: "Auto-generated class reference for MultiSelectionInquiryData."
---
# MultiSelectionInquiryData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MultiSelectionInquiryData`
**Base:** none
**File:** `TaleWorlds.Core/MultiSelectionInquiryData.cs`

## Overview

`MultiSelectionInquiryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `MultiSelectionInquiryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** **Purpose:** Determines whether the this instance already holds same content with.

```csharp
// Obtain an instance of MultiSelectionInquiryData from the subsystem API first
MultiSelectionInquiryData multiSelectionInquiryData = ...;
var result = multiSelectionInquiryData.HasSameContentWith(other);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
MultiSelectionInquiryData entry = ...;
```

## See Also

- [Area Index](../)