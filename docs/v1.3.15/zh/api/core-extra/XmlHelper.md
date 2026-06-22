<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `XmlHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# XmlHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class XmlHelper`
**Base:** 无
**File:** `TaleWorlds.Core/XmlHelper.cs`

## 概述

`XmlHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

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

## 使用示例

```csharp
// XmlHelper (Helper) 的典型用法
XmlHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)