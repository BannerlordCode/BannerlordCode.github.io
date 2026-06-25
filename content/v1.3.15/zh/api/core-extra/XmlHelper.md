---
title: "XmlHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `XmlHelper`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# XmlHelper

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class XmlHelper`
**Base:** 无
**File:** `TaleWorlds.Core/XmlHelper.cs`

## 概述

`XmlHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `XmlHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ReadInt
`public static int ReadInt(XmlNode node, string str)`

**用途 / Purpose:** 处理 `read int` 相关逻辑。

### ReadInt
`public static void ReadInt(ref int val, XmlNode node, string str)`

**用途 / Purpose:** 处理 `read int` 相关逻辑。

### ReadFloat
`public static float ReadFloat(XmlNode node, string str, float defaultValue = 0f)`

**用途 / Purpose:** 处理 `read float` 相关逻辑。

### ReadString
`public static string ReadString(XmlNode node, string str)`

**用途 / Purpose:** 处理 `read string` 相关逻辑。

### ReadHexCode
`public static void ReadHexCode(ref uint val, XmlNode node, string str)`

**用途 / Purpose:** 处理 `read hex code` 相关逻辑。

### ReadBool
`public static bool ReadBool(XmlNode node, string str)`

**用途 / Purpose:** 处理 `read bool` 相关逻辑。

## 使用示例

```csharp
XmlHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)