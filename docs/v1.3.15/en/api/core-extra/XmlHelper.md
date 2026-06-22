<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `XmlHelper`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# XmlHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class XmlHelper`
**Base:** none
**File:** `TaleWorlds.Core/XmlHelper.cs`

## Overview

`XmlHelper` is a static utility class providing helper methods.

## Key Methods

### ReadInt
```csharp
public static int ReadInt(XmlNode node, string str)
```

### ReadInt
```csharp
public static void ReadInt(ref int val, XmlNode node, string str)
```

### ReadFloat
```csharp
public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)
```

### ReadString
```csharp
public static string ReadString(XmlNode node, string str)
```

### ReadHexCode
```csharp
public static void ReadHexCode(ref uint val, XmlNode node, string str)
```

### ReadBool
```csharp
public static bool ReadBool(XmlNode node, string str)
```

## Usage Example

```csharp
// Typical usage of XmlHelper (Helper)
XmlHelper./* static helper method */();;
```

## See Also

- [Complete Class Catalog](../catalog)