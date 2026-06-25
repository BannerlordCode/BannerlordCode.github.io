---
title: "TextInquiryData"
description: "Auto-generated class reference for TextInquiryData."
---
# TextInquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class TextInquiryData`
**Base:** none
**File:** `TaleWorlds.Library/TextInquiryData.cs`

## Overview

`TextInquiryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `TextInquiryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** Determines whether the current object already holds `same content with`.

```csharp
// Obtain an instance of TextInquiryData from the subsystem API first
TextInquiryData textInquiryData = ...;
var result = textInquiryData.HasSameContentWith(other);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
TextInquiryData entry = ...;
```

## See Also

- [Area Index](../)