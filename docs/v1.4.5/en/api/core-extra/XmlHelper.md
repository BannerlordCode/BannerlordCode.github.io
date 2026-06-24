<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `XmlHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# XmlHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class XmlHelper`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/XmlHelper.cs`

## Overview

`XmlHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `XmlHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ReadInt
`public static int ReadInt(XmlNode node, string str)`

**Purpose:** Handles logic related to `read int`.

### ReadInt
`public static void ReadInt(ref int val, XmlNode node, string str)`

**Purpose:** Handles logic related to `read int`.

### ReadFloat
`public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)`

**Purpose:** Handles logic related to `read float`.

### ReadString
`public static string ReadString(XmlNode node, string str)`

**Purpose:** Handles logic related to `read string`.

### ReadHexCode
`public static void ReadHexCode(ref uint val, XmlNode node, string str)`

**Purpose:** Handles logic related to `read hex code`.

### ReadBool
`public static bool ReadBool(XmlNode node, string str)`

**Purpose:** Handles logic related to `read bool`.

## Usage Example

```csharp
XmlHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)