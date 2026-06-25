---
title: "MBObjectBase"
description: "MBObjectBase 的自动生成类参考。"
---
# MBObjectBase

**Namespace:** TaleWorlds.ObjectSystem
**Module:** TaleWorlds.ObjectSystem
**Type:** `public class MBObjectBase`
**Base:** 无
**File:** `TaleWorlds.ObjectSystem/MBObjectBase.cs`

## 概述

`MBObjectBase` 位于 `TaleWorlds.ObjectSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ObjectSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StringId` | `public string StringId { get; }` |
| `Id` | `public MBGUID Id { get; }` |
| `IsInitialized` | `public bool IsInitialized { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## 主要方法

### AfterInitialized
`public void AfterInitialized()`

**用途 / Purpose:** 调用 AfterInitialized 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterInitialized();
```

### AfterRegister
`public virtual void AfterRegister()`

**用途 / Purpose:** 调用 AfterRegister 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterRegister();
```

### Initialize
`public virtual void Initialize()`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.Initialize();
```

### Deserialize
`public virtual void Deserialize(MBObjectManager objectManager, XmlNode node)`

**用途 / Purpose:** 从序列化数据还原当前对象。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.Deserialize(objectManager, node);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
var result = mBObjectBase.GetHashCode();
```

### GetName
`public virtual TextObject GetName()`

**用途 / Purpose:** 读取并返回当前对象中 name 的结果。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
var result = mBObjectBase.GetName();
```

### PreAfterLoadInternal
`public void PreAfterLoadInternal()`

**用途 / Purpose:** 调用 PreAfterLoadInternal 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.PreAfterLoadInternal();
```

### AfterLoadInternal
`public void AfterLoadInternal()`

**用途 / Purpose:** 调用 AfterLoadInternal 对应的操作。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterLoadInternal();
```

### OnRegistered
`public void OnRegistered()`

**用途 / Purpose:** 在 registered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.OnRegistered();
```

### OnUnregistered
`public void OnUnregistered()`

**用途 / Purpose:** 在 unregistered 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MBObjectBase 实例
MBObjectBase mBObjectBase = ...;
mBObjectBase.OnUnregistered();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MBObjectBase mBObjectBase = ...;
mBObjectBase.AfterInitialized();
```

## 参见

- [本区域目录](../)