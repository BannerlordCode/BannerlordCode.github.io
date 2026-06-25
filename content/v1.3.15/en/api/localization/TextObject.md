---
title: "TextObject"
description: "Auto-generated class reference for TextObject."
---
# TextObject

**Namespace:** TaleWorlds.Localization
**Module:** TaleWorlds.Localization
**Type:** `public class TextObject`
**Base:** none
**File:** `TaleWorlds.Localization/TextObject.cs`

## Overview

`TextObject` lives in `TaleWorlds.Localization` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Localization` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Attributes` | `public Dictionary<string, object> Attributes { get; }` |
| `Length` | `public int Length { get; }` |
| `IsLink` | `public bool IsLink { get; }` |

## Key Methods

### CacheTokens
`public void CacheTokens()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
textObject.CacheTokens();
```

### GetEmpty
`public static TextObject GetEmpty()`

**Purpose:** Reads and returns the `empty` value held by the current object.

```csharp
// Static call; no instance required
TextObject.GetEmpty();
```

### IsEmpty
`public bool IsEmpty()`

**Purpose:** Determines whether the current object is in the `empty` state or condition.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.IsEmpty();
```

### IsNullOrEmpty
`public static bool IsNullOrEmpty(TextObject obj)`

**Purpose:** Determines whether the current object is in the `null or empty` state or condition.

```csharp
// Static call; no instance required
TextObject.IsNullOrEmpty(obj);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.ToString();
```

### ToStringWithoutClear
`public string ToStringWithoutClear()`

**Purpose:** Returns a human-readable string representation of the current object.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.ToStringWithoutClear();
```

### Format
`public string Format(float p1)`

**Purpose:** Formats `format` into a string suitable for display or storage.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.Format(0);
```

### Contains
`public bool Contains(TextObject to)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.Contains(to);
```

### Contains
`public bool Contains(string text)`

**Purpose:** Indicates whether the current object contains the specified item.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.Contains("example");
```

### Equals
`public override bool Equals(object other)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.GetHashCode();
```

### Equals
`public bool Equals(TextObject other)`

**Purpose:** Compares the current object with the supplied instance for equality.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.Equals(other);
```

### HasSameValue
`public bool HasSameValue(TextObject to)`

**Purpose:** Determines whether the current object already holds `same value`.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.HasSameValue(to);
```

### ConvertToStringList
`public static List<string> ConvertToStringList(List<TextObject> to)`

**Purpose:** Converts `to string list` into another representation or type.

```csharp
// Static call; no instance required
TextObject.ConvertToStringList(to);
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, TextObject variable)`

**Purpose:** Assigns a new value to `text variable` and updates the object's internal state.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", variable);
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, string variable)`

**Purpose:** Assigns a new value to `text variable` and updates the object's internal state.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", "example");
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, float variable, int decimalDigits = 2)`

**Purpose:** Assigns a new value to `text variable` and updates the object's internal state.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", 0, 0);
```

### SetTextVariable
`public TextObject SetTextVariable(string tag, int variable)`

**Purpose:** Assigns a new value to `text variable` and updates the object's internal state.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.SetTextVariable("example", 0);
```

### AddIDToValue
`public void AddIDToValue(string id)`

**Purpose:** Adds `i d to value` to the current collection or state.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
textObject.AddIDToValue("example");
```

### GetVariableValue
`public bool GetVariableValue(string tag, out TextObject variable)`

**Purpose:** Reads and returns the `variable value` value held by the current object.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.GetVariableValue("example", variable);
```

### GetValueHashCode
`public int GetValueHashCode()`

**Purpose:** Reads and returns the `value hash code` value held by the current object.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.GetValueHashCode();
```

### CopyTextObject
`public TextObject CopyTextObject()`

**Purpose:** Copies the `text object` state of the current object to a target.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.CopyTextObject();
```

### GetID
`public string GetID()`

**Purpose:** Reads and returns the `i d` value held by the current object.

```csharp
// Obtain an instance of TextObject from the subsystem API first
TextObject textObject = ...;
var result = textObject.GetID();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TextObject textObject = ...;
textObject.CacheTokens();
```

## See Also

- [Area Index](../)