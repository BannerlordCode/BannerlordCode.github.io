---
title: "ManagedParameters"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedParameters`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedParameters

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class ManagedParameters : IManagedParametersInitializer`
**Base:** `IManagedParametersInitializer`
**File:** `TaleWorlds.CampaignSystem/ManagedParameters.cs`

## 概述

`ManagedParameters` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static ManagedParameters Instance { get; }` |

## 主要方法

### Initialize
`public void Initialize(string relativeXmlPath)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### GetManagedParameter
`public bool GetManagedParameter(ManagedParametersEnum _managedParametersEnum)`

**用途 / Purpose:** 获取 `managed parameter` 的当前值。

### SetManagedParameter
`public bool SetManagedParameter(ManagedParametersEnum _managedParametersEnum, bool value)`

**用途 / Purpose:** 设置 `managed parameter` 的值或状态。

## 使用示例

```csharp
var value = new ManagedParameters();
value.Initialize("example");
```

## 参见

- [完整类目录](../catalog)