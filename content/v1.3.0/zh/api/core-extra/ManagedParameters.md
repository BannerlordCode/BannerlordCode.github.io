---
title: "ManagedParameters"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedParameters`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedParameters

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `TaleWorlds.Core/ManagedParameters.cs`

## 概述

`ManagedParameters` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## 主要方法

### GetParameter
`public static float GetParameter(ManagedParametersEnum managedParameterType)`

**用途 / Purpose:** 获取 `parameter` 的当前值。

### SetParameter
`public static void SetParameter(ManagedParametersEnum managedParameterType, float newValue)`

**用途 / Purpose:** 设置 `parameter` 的值或状态。

### Initialize
`public void Initialize(string relativeXmlPath)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetManagedParameter
`public float GetManagedParameter(ManagedParametersEnum managedParameterEnum)`

**用途 / Purpose:** 获取 `managed parameter` 的当前值。

## 使用示例

```csharp
ManagedParameters.GetParameter(managedParameterType);
```

## 参见

- [完整类目录](../catalog)