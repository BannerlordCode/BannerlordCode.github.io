---
title: "ContainerSaveId"
description: "ContainerSaveId 的自动生成类参考。"
---
# ContainerSaveId

**Namespace:** TaleWorlds.SaveSystem.Definition
**Module:** TaleWorlds.SaveSystem
**Type:** `public class ContainerSaveId : SaveId`
**Base:** `SaveId`
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Definition/ContainerSaveId.cs`

## 概述

`ContainerSaveId` 位于 `TaleWorlds.SaveSystem.Definition`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.SaveSystem.Definition` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ContainerType` | `public ContainerType ContainerType { get; set; }` |
| `KeyId` | `public SaveId KeyId { get; set; }` |
| `ValueId` | `public SaveId ValueId { get; set; }` |

## 主要方法

### GetStringId
`public override string GetStringId()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 string id 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveId 实例
ContainerSaveId containerSaveId = ...;
var result = containerSaveId.GetStringId();
```

### WriteTo
`public override void WriteTo(IWriter writer)`

**用途 / Purpose:** **用途 / Purpose:** 将to写入目标位置。

```csharp
// 先通过子系统 API 拿到 ContainerSaveId 实例
ContainerSaveId containerSaveId = ...;
containerSaveId.WriteTo(writer);
```

### ReadFrom
`public static ContainerSaveId ReadFrom(IReader reader)`

**用途 / Purpose:** **用途 / Purpose:** 读取from的数据或状态。

```csharp
// 静态调用，不需要实例
ContainerSaveId.ReadFrom(reader);
```

### GetSizeInBytes
`public override int GetSizeInBytes()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 size in bytes 的结果。

```csharp
// 先通过子系统 API 拿到 ContainerSaveId 实例
ContainerSaveId containerSaveId = ...;
var result = containerSaveId.GetSizeInBytes();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ContainerSaveId containerSaveId = ...;
containerSaveId.GetStringId();
```

## 参见

- [本区域目录](../)