---
title: "InquiryData"
description: "Auto-generated class reference for InquiryData."
---
# InquiryData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class InquiryData`
**Base:** none
**File:** `TaleWorlds.Library/InquiryData.cs`

## Overview

`InquiryData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `InquiryData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetText
`public void SetText(string text)`

**Purpose:** Assigns a new value to `text` and updates the object's internal state.

```csharp
// Obtain an instance of InquiryData from the subsystem API first
InquiryData inquiryData = ...;
inquiryData.SetText("example");
```

### SetTitleText
`public void SetTitleText(string titleText)`

**Purpose:** Assigns a new value to `title text` and updates the object's internal state.

```csharp
// Obtain an instance of InquiryData from the subsystem API first
InquiryData inquiryData = ...;
inquiryData.SetTitleText("example");
```

### SetAffirmativeAction
`public void SetAffirmativeAction(Action newAffirmativeAction)`

**Purpose:** Assigns a new value to `affirmative action` and updates the object's internal state.

```csharp
// Obtain an instance of InquiryData from the subsystem API first
InquiryData inquiryData = ...;
inquiryData.SetAffirmativeAction(newAffirmativeAction);
```

### HasSameContentWith
`public bool HasSameContentWith(object other)`

**Purpose:** Determines whether the current object already holds `same content with`.

```csharp
// Obtain an instance of InquiryData from the subsystem API first
InquiryData inquiryData = ...;
var result = inquiryData.HasSameContentWith(other);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
InquiryData entry = ...;
```

## See Also

- [Area Index](../)