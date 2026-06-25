---
title: "TextObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TextObject`
- [← Area / Back to localization](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Localization/TaleWorlds.Localization/TextObject.cs`

## Overview

`TextObject` lives in `TaleWorlds.Localization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Attributes` | `public Dictionary<string, object> Attributes { get; }` |
| `IsLink` | `public bool IsLink { get; }` |

## Key Methods

### GetDepth
`public int GetDepth(int maxDepth)`

**Purpose:** Gets the current value of `depth`.

### CacheTokens
`public void CacheTokens()`

**Purpose:** Handles logic related to `cache tokens`.

### GetEmpty
`public static TextObject GetEmpty()`

**Purpose:** Gets the current value of `empty`.

### IsEmpty
`public bool IsEmpty()`

**Purpose:** Handles logic related to `is empty`.

### IsNullOrEmpty
`public static bool IsNullOrEmpty(TextObject obj)`

**Purpose:** Handles logic related to `is null or empty`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### ToStringWithoutClear
`public string ToStringWithoutClear()`

**Purpose:** Handles logic related to `to string without clear`.

### Format
`public string Format(float p1)`

**Purpose:** Handles logic related to `format`.

### Contains
`public bool Contains(TextObject to)`

**Purpose:** Handles logic related to `contains`.

### Contains
`public bool Contains(string text)`

**Purpose:** Handles logic related to `contains`.

### Equals
`public override bool Equals(object other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public bool Equals(TextObject other)`

**Purpose:** Handles logic related to `equals`.

### HasSameValue
`public bool HasSameValue(TextObject to)`

**Purpose:** Checks whether the current object has/contains `same value`.

### ConvertToStringList
`public static List<string> ConvertToStringList(List<TextObject> to)`

**Purpose:** Handles logic related to `convert to string list`.

### SetTextVariable
`public TextObject SetTextVariable(string tag, TextObject variable)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public TextObject SetTextVariable(string tag, string variable)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)`

**Purpose:** Sets the value or state of `text variable`.

### SetTextVariable
`public TextObject SetTextVariable(string tag, int variable)`

**Purpose:** Sets the value or state of `text variable`.

### AddIDToValue
`public void AddIDToValue(string id)`

**Purpose:** Adds `i d to value` to the current collection or state.

### GetVariableValue
`public bool GetVariableValue(string tag, out TextObject variable)`

**Purpose:** Gets the current value of `variable value`.

### GetValueHashCode
`public int GetValueHashCode()`

**Purpose:** Gets the current value of `value hash code`.

### CopyTextObject
`public TextObject CopyTextObject()`

**Purpose:** Handles logic related to `copy text object`.

### GetID
`public string GetID()`

**Purpose:** Gets the current value of `i d`.

## Usage Example

```csharp
var value = new TextObject();
value.GetDepth(0);
```

## See Also

- [Complete Class Catalog](../catalog)