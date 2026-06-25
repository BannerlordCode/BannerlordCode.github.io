---
title: "RenderCallbackCollection"
description: "RenderCallbackCollection 的自动生成类参考。"
---
# RenderCallbackCollection

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct RenderCallbackCollection`
**Base:** 无
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/RenderCallbackCollection.cs`

## 概述

`RenderCallbackCollection` 位于 `TaleWorlds.MountAndBlade.View.Tableaus`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.Tableaus` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SetActions` | `public List<Action<Texture>> SetActions { get; }` |
| `CancelActions` | `public List<Action> CancelActions { get; }` |

## 主要方法

### CreateEmpty
`public static RenderCallbackCollection CreateEmpty()`

**用途 / Purpose:** 构建一个新的 「empty」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
RenderCallbackCollection.CreateEmpty();
```

## 使用示例

```csharp
RenderCallbackCollection.CreateEmpty();
```

## 参见

- [本区域目录](../)