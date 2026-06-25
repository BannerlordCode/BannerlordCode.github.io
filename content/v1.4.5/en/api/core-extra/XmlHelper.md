---
title: "XmlHelper"
description: "Auto-generated class reference for XmlHelper."
---
# XmlHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class XmlHelper`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/XmlHelper.cs`

## Overview

`XmlHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `XmlHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ReadInt
`public static int ReadInt(XmlNode node, string str)`

**Purpose:** Reads the data or state of `int`.

```csharp
// Static call; no instance required
XmlHelper.ReadInt(node, "example");
```

### ReadInt
`public static void ReadInt(ref int val, XmlNode node, string str)`

**Purpose:** Reads the data or state of `int`.

```csharp
// Static call; no instance required
XmlHelper.ReadInt(val, node, "example");
```

### ReadFloat
`public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)`

**Purpose:** Reads the data or state of `float`.

```csharp
// Static call; no instance required
XmlHelper.ReadFloat(node, "example", 0);
```

### ReadString
`public static string ReadString(XmlNode node, string str)`

**Purpose:** Reads the data or state of `string`.

```csharp
// Static call; no instance required
XmlHelper.ReadString(node, "example");
```

### ReadHexCode
`public static void ReadHexCode(ref uint val, XmlNode node, string str)`

**Purpose:** Reads the data or state of `hex code`.

```csharp
// Static call; no instance required
XmlHelper.ReadHexCode(val, node, "example");
```

### ReadBool
`public static bool ReadBool(XmlNode node, string str)`

**Purpose:** Reads the data or state of `bool`.

```csharp
// Static call; no instance required
XmlHelper.ReadBool(node, "example");
```

## Usage Example

```csharp
XmlHelper.Initialize();
```

## See Also

- [Area Index](../)