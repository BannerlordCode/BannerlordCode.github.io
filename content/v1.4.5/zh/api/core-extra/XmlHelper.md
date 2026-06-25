---
title: "XmlHelper"
description: "XmlHelper 的自动生成类参考。"
---
# XmlHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class XmlHelper`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/XmlHelper.cs`

## 概述

`XmlHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `XmlHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ReadInt
`public static int ReadInt(XmlNode node, string str)`

**用途 / Purpose:** 从当前实例读取int相关数据。

```csharp
// 静态调用，不需要实例
XmlHelper.ReadInt(node, "example");
```

### ReadInt
`public static void ReadInt(ref int val, XmlNode node, string str)`

**用途 / Purpose:** 从当前实例读取int相关数据。

```csharp
// 静态调用，不需要实例
XmlHelper.ReadInt(val, node, "example");
```

### ReadFloat
`public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)`

**用途 / Purpose:** 从当前实例读取float相关数据。

```csharp
// 静态调用，不需要实例
XmlHelper.ReadFloat(node, "example", 0);
```

### ReadString
`public static string ReadString(XmlNode node, string str)`

**用途 / Purpose:** 从当前实例读取string相关数据。

```csharp
// 静态调用，不需要实例
XmlHelper.ReadString(node, "example");
```

### ReadHexCode
`public static void ReadHexCode(ref uint val, XmlNode node, string str)`

**用途 / Purpose:** 从当前实例读取hex code相关数据。

```csharp
// 静态调用，不需要实例
XmlHelper.ReadHexCode(val, node, "example");
```

### ReadBool
`public static bool ReadBool(XmlNode node, string str)`

**用途 / Purpose:** 从当前实例读取bool相关数据。

```csharp
// 静态调用，不需要实例
XmlHelper.ReadBool(node, "example");
```

## 使用示例

```csharp
XmlHelper.Initialize();
```

## 参见

- [本区域目录](../)