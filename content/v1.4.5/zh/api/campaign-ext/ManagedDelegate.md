---
title: "ManagedDelegate"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedDelegate`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagedDelegate

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public class ManagedDelegate : DotNetObject`
**Base:** `DotNetObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.DotNet/TaleWorlds.DotNet/ManagedDelegate.cs`

## 概述

`ManagedDelegate` 位于 `TaleWorlds.DotNet`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.DotNet` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public DelegateDefinition Instance { get; set; }` |

## 主要方法

### DelegateDefinition
`public delegate void DelegateDefinition()`

**用途 / Purpose:** 处理 `delegate definition` 相关逻辑。

### InvokeAux
`public void InvokeAux()`

**用途 / Purpose:** 处理 `invoke aux` 相关逻辑。

## 使用示例

```csharp
var value = new ManagedDelegate();
value.DelegateDefinition();
```

## 参见

- [完整类目录](../catalog)