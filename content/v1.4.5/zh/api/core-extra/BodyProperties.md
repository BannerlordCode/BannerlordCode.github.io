---
title: "BodyProperties"
description: "BodyProperties 的自动生成类参考。"
---
# BodyProperties

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct BodyProperties`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/BodyProperties.cs`

## 概述

`BodyProperties` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### FromXmlNode
`public static bool FromXmlNode(XmlNode node, out BodyProperties bodyProperties)`

**用途 / Purpose:** 处理与 「from xml node」 相关的逻辑。

```csharp
// 静态调用，不需要实例
BodyProperties.FromXmlNode(node, bodyProperties);
```

### FromString
`public static bool FromString(string keyValue, out BodyProperties bodyProperties)`

**用途 / Purpose:** 处理与 「from string」 相关的逻辑。

```csharp
// 静态调用，不需要实例
BodyProperties.FromString("example", bodyProperties);
```

### GetRandomBodyProperties
`public static BodyProperties GetRandomBodyProperties(int race, bool isFemale, BodyProperties bodyPropertiesMin, BodyProperties bodyPropertiesMax, int hairCoverType, int seed, string hairTags, string beardTags, string tattooTags, float variationAmount = 0f)`

**用途 / Purpose:** 读取并返回当前对象中 「random body properties」 的结果。

```csharp
// 静态调用，不需要实例
BodyProperties.GetRandomBodyProperties(0, false, bodyPropertiesMin, bodyPropertiesMax, 0, 0, "example", "example", "example", 0);
```

### ToString
`public override string ToString()`

**用途 / Purpose:** 返回当前对象的人类可读字符串表示。

```csharp
// 先通过子系统 API 拿到 BodyProperties 实例
BodyProperties bodyProperties = ...;
var result = bodyProperties.ToString();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 BodyProperties 实例
BodyProperties bodyProperties = ...;
var result = bodyProperties.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 BodyProperties 实例
BodyProperties bodyProperties = ...;
var result = bodyProperties.GetHashCode();
```

### ClampForMultiplayer
`public BodyProperties ClampForMultiplayer()`

**用途 / Purpose:** 处理与 「clamp for multiplayer」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 BodyProperties 实例
BodyProperties bodyProperties = ...;
var result = bodyProperties.ClampForMultiplayer();
```

## 使用示例

```csharp
BodyProperties.FromXmlNode(node, bodyProperties);
```

## 参见

- [本区域目录](../)