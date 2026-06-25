---
title: "GalaxyID"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GalaxyID`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyID

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class GalaxyID : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyID.cs`

## 概述

`GalaxyID` 位于 `Galaxy.Api`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `Galaxy.Api` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### Dispose
`public virtual void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### ToString
`public override string ToString()`

**用途 / Purpose:** 处理 `to string` 相关逻辑。

### FromRealID
`public static GalaxyID FromRealID(IDType type, ulong value)`

**用途 / Purpose:** 处理 `from real i d` 相关逻辑。

### IsValid
`public bool IsValid()`

**用途 / Purpose:** 处理 `is valid` 相关逻辑。

### ToUint64
`public ulong ToUint64()`

**用途 / Purpose:** 处理 `to uint64` 相关逻辑。

### GetRealID
`public ulong GetRealID()`

**用途 / Purpose:** 获取 `real i d` 的当前值。

### GetIDType
`public IDType GetIDType()`

**用途 / Purpose:** 获取 `i d type` 的当前值。

## 使用示例

```csharp
var value = new GalaxyID();
value.Dispose();
```

## 参见

- [完整类目录](../catalog)