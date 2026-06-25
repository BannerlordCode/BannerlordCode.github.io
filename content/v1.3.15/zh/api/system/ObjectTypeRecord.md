---
title: "ObjectTypeRecord"
description: "ObjectTypeRecord 的自动生成类参考。"
---
# ObjectTypeRecord

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `internal class ObjectTypeRecord<T> : MBObjectManager.IObjectTypeRecord, IEnumerable, IEnumerable<T> where T : MBObjectBase`
**Base:** `MBObjectManager.IObjectTypeRecord`
**File:** `TaleWorlds.ObjectSystem/MBObjectManager.cs`

## 概述

`ObjectTypeRecord` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetMBObject
`public MBObjectBase GetMBObject(MBGUID objId)`

**用途 / Purpose:** 读取并返回当前对象中 m b object 的结果。

```csharp
// 先通过子系统 API 拿到 ObjectTypeRecord 实例
ObjectTypeRecord objectTypeRecord = ...;
var result = objectTypeRecord.GetMBObject(objId);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ObjectTypeRecord objectTypeRecord = ...;
objectTypeRecord.GetMBObject(objId);
```

## 参见

- [本区域目录](../)