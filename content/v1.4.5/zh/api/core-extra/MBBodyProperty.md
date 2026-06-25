---
title: "MBBodyProperty"
description: "MBBodyProperty 的自动生成类参考。"
---
# MBBodyProperty

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class MBBodyProperty : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/MBBodyProperty.cs`

## 概述

`MBBodyProperty` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HairTags` | `public string HairTags { get; set; }` |
| `BeardTags` | `public string BeardTags { get; set; }` |
| `TattooTags` | `public string TattooTags { get; set; }` |

## 主要方法

### CreateFrom
`public static MBBodyProperty CreateFrom(MBBodyProperty bodyProperty)`

**用途 / Purpose:** **用途 / Purpose:** 构建一个新的 from 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
MBBodyProperty.CreateFrom(bodyProperty);
```

### Init
`public void Init(BodyProperties bodyPropertyMin, BodyProperties bodyPropertyMax)`

**用途 / Purpose:** **用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBBodyProperty 实例
MBBodyProperty mBBodyProperty = ...;
mBBodyProperty.Init(bodyPropertyMin, bodyPropertyMax);
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** **用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 MBBodyProperty 实例
MBBodyProperty mBBodyProperty = ...;
mBBodyProperty.Deserialize(objectManager, node);
```

## 使用示例

```csharp
MBBodyProperty.CreateFrom(bodyProperty);
```

## 参见

- [本区域目录](../)